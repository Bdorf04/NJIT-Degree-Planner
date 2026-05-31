"use client"

import { useState, useTransition, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import AiChat from "./AiChat"
import PlanView from "./PlanView"

type Message = {
  role: "user" | "assistant"
  text: string
}

type UndoItem = {
  plannedCourseId: string
  planId: string
  previousSemester: number
  courseCode: string
}

type Props = {
  plans: React.ComponentProps<typeof PlanView>["plans"]
  activePlanId: string | null
}


export default function DashboardClient({ plans, activePlanId: initialActivePlanId }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [activePlanId, setActivePlanId] = useState<string | null>(initialActivePlanId)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [undoStack, setUndoStack] = useState<UndoItem[]>([])

  const handleRefresh = useCallback(() => {
    startTransition(() => router.refresh())
  }, [router])

  useEffect(() => {
    if (!activePlanId) return
    const saved = localStorage.getItem(`chat-${activePlanId}`)
    setMessages(saved ? JSON.parse(saved) : [])
  }, [activePlanId])

  useEffect(() => {
    if (!activePlanId) return
    localStorage.setItem(`chat-${activePlanId}`, JSON.stringify(messages))
  }, [messages, activePlanId])
  const sharedChatProps = {
    planId: activePlanId!,
    onRefresh: handleRefresh,
    messages,
    setMessages,
    undoStack,
    setUndoStack,
  }

  return (
    <div className="relative flex gap-6 items-start">
      {activePlanId && (
        <div className="hidden lg:block">
          <AiChat {...sharedChatProps} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <PlanView
          plans={plans}
          isPending={isPending}
          activePlanId={activePlanId}
          onActivePlanChange={setActivePlanId}
          onRefresh={handleRefresh}
        />
      </div>
      {activePlanId && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed bottom-6 right-6 z-40 lg:hidden bg-njit-navy text-white rounded-full px-4 h-12 flex items-center justify-center shadow-lg text-sm font-semibold hover:bg-njit-red transition-colors"
          aria-label="Open AI chat"
        >
          Ask Claude
        </button>
      )}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 h-full w-80 lg:hidden shadow-2xl">
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
            <AiChat {...sharedChatProps} />
          </div>
        </>
      )}
    </div>
  )
}