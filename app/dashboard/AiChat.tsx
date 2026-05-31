"use client"

import { useState, useEffect, useRef } from "react"


type Message = {
  role: "user" | "assistant"
  text: string
}

type Props = {
  planId: string
  onRefresh: () => void
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  undoStack: {
    plannedCourseId: string
    planId: string
    previousSemester: number
    courseCode: string
  }[]
  setUndoStack: React.Dispatch<React.SetStateAction<{
    plannedCourseId: string
    planId: string
    previousSemester: number
    courseCode: string
  }[]>>
}

export default function AiChat({ planId, onRefresh, messages, setMessages, undoStack, setUndoStack }: Props) {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function handleSubmit() {
    const text = input.trim()
    if (!text || loading) return

    setInput("")
    setMessages((prev) => [...prev, { role: "user", text }])
    setLoading(true)

    try {
      const res = await fetch(`/api/plans/${planId}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })

      const data = await res.json()

      if (!res.ok) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.error || "Something went wrong." }])
        return
      }

      if (data.type === "text") {
      const cleaned = data.text.replace(/\*\*/g, "")
      setMessages((prev) => [...prev, { role: "assistant", text: cleaned }])
      return
    }
      if (data.type === "tools") {
        await executeTools(data.tools)
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "Network error. Please try again." }])
    } finally {
      setLoading(false)
    }
  }

  async function executeTools(tools: {
    tool: string
    input: { courseCode?: string; targetSemester?: number }
    plannedCourseId: string | null
    planId: string
    previousSemester?: number
  }[]) {
    const confirmations: string[] = []
    const newUndoStack: typeof undoStack = []

    for (const data of tools) {
      const { tool, input, plannedCourseId, planId } = data

      if (tool === "resetPlan") {
        const res = await fetch(`/api/plans/${planId}`, { method: "PUT" })
        if (res.ok) {
          confirmations.push("Plan reset to default curriculum.")
        } else {
          confirmations.push("Failed to reset plan.")
        }
        continue
      }

      if (!plannedCourseId) {
        confirmations.push(`Couldn't find "${input.courseCode}" in your plan.`)
        continue
      }

      let targetSemester: number | null = null
      if (tool === "moveCourse") targetSemester = input.targetSemester ?? null
      else if (tool === "markCompleted") targetSemester = 9
      else if (tool === "markUnscheduled") targetSemester = 0

      if (targetSemester === null) {
        confirmations.push("Unknown action.")
        continue
      }

      // Fetch the current semester before moving so we can undo
      const currentRes = await fetch(`/api/plans/${planId}/courses/${plannedCourseId}/semester`)
      const currentData = currentRes.ok ? await currentRes.json() : null

      const res = await fetch(`/api/plans/${planId}/courses/${plannedCourseId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ semester: targetSemester }),
      })

      if (res.ok) {
        const courseCode = input.courseCode ?? "Course"
        const label = targetSemester === 9 ? "Completed" : targetSemester === 0 ? "Unscheduled" : `Semester ${targetSemester}`
        confirmations.push(`${courseCode} moved to ${label}.`)

        if (currentData?.semester !== undefined) {
          newUndoStack.push({
            plannedCourseId,
            planId,
            previousSemester: currentData.semester,
            courseCode: input.courseCode ?? "Course",
          })
        }
      } else {
        confirmations.push(`Failed to update ${input.courseCode}.`)
      }
    }

    if (newUndoStack.length > 0) setUndoStack(newUndoStack)
    setMessages((prev) => [...prev, { role: "assistant", text: confirmations.join(" ") }])
    onRefresh()
  }

  async function handleUndo() {
    if (undoStack.length === 0) return

    for (const item of undoStack) {
      await fetch(`/api/plans/${item.planId}/courses/${item.plannedCourseId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ semester: item.previousSemester }),
      })
    }

    const undoneNames = undoStack.map((i) => i.courseCode).join(", ")
    setMessages((prev) => [...prev, { role: "assistant", text: `Undone — ${undoneNames} restored to previous semester.` }])
    setUndoStack([])
    onRefresh()
  }
  
  return (
    <div className="w-72 shrink-0 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 h-[calc(100vh-10rem)] sticky top-6">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-700">AI Planner</h2>
        <p className="text-xs text-gray-400 mt-0.5">Ask me to move or complete courses, or request prerequisite information.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <p className="text-xs text-gray-400 italic">No messages yet. Try "Move CS 114 to semester 3".</p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-xs px-3 py-2 rounded-lg max-w-full ${
              msg.role === "user"
                ? "bg-blue-600 text-white self-end ml-4"
                : "bg-gray-100 text-gray-700 mr-4"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-gray-100 text-gray-700 text-xs px-3 py-2 rounded-lg mr-4 italic">
            Thinking...
          </div>
        )}
        <div ref={bottomRef} />
      </div>


      
      <div className="px-4 py-3 border-t border-gray-100 text-gray-700 space-y-2">
        {undoStack.length > 0 && (
          <button
            onClick={handleUndo}
            className="w-full text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-2 rounded-lg transition-colors"
          >
            ↩ Undo last action
          </button>
        )}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Ask anything..."
            disabled={loading}
            className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          />
          <button
            onClick={handleSubmit}
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white text-xs px-3 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}