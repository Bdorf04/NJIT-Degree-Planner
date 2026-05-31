"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type Major = {
  id: string
  name: string
  description: string | null
}

export default function MajorSelector() {
  const router = useRouter()
  const [majors, setMajors] = useState<Major[]>([])
  const [selectedMajorId, setSelectedMajorId] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchMajors() {
      const res = await fetch("/api/majors")
      const data = await res.json()
      setMajors(data)
    }
    fetchMajors()
  }, [])

  async function handleSubmit() {
    if (!selectedMajorId) return
    setLoading(true)
    setError("")

    const res = await fetch("/api/user/major", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ majorId: selectedMajorId }),
    })

    if (!res.ok) {
      setError("Something went wrong. Please try again.")
      setLoading(false)
      return
    }

    router.refresh()
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8 max-w-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to NJIT Degree Planner</h2>
      <p className="text-gray-500 mb-6">To get started, select your major below.</p>

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-3 mb-6">
        {majors.length === 0 && (
          <p className="text-gray-400 text-sm">Loading majors...</p>
        )}
        {majors.map((major) => (
          <button
            key={major.id}
            onClick={() => setSelectedMajorId(major.id)}
            className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
              selectedMajorId === major.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className="font-medium text-gray-800">{major.name}</p>
            {major.description && (
              <p className="text-sm text-gray-500 mt-1">{major.description}</p>
            )}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedMajorId || loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Saving..." : "Confirm Major"}
      </button>
    </div>
  )
}