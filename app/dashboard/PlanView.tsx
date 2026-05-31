"use client"

import { useState } from "react"
import { getSemesterLabel, SEMESTER_UNSCHEDULED, SEMESTER_COMPLETED } from "../../lib/semesterLabel"

const DEGREE_CREDITS = 120

type PrereqRow = {
  id: string
  prerequisiteId: string
  groupId: number
}

type CoreqRow = {
  id: string
  corequisiteId: string
}

type Course = {
  id: string
  code: string
  name: string
  credits: number
  recommendedSemester: number | null
  prerequisites: PrereqRow[]
  corequisites: CoreqRow[]
}

type PlannedCourse = {
  id: string
  semester: number
  course: Course
}

type Plan = {
  id: string
  name: string
  plannedCourses: PlannedCourse[]
}

type Props = {
  plans: Plan[]
  isPending: boolean
  activePlanId: string | null
  onActivePlanChange: (id: string) => void
  onRefresh: () => void
}

function getPrereqViolations(plan: Plan): Map<string, string[][]> {
  const semesterByCourseId = new Map<string, number>()
  const codeByCourseId = new Map<string, string>()
  for (const pc of plan.plannedCourses) {
    semesterByCourseId.set(pc.course.id, pc.semester)
    codeByCourseId.set(pc.course.id, pc.course.code)
  }

  const violations = new Map<string, string[][]>()

  for (const pc of plan.plannedCourses) {
    if (pc.semester < 1 || pc.semester > 8) continue

    const prereqs = pc.course.prerequisites
    if (prereqs.length === 0) continue

    const groups = new Map<number, PrereqRow[]>()
    for (const row of prereqs) {
      if (!groups.has(row.groupId)) groups.set(row.groupId, [])
      groups.get(row.groupId)!.push(row)
    }

    const unsatisfiedGroups: string[][] = []

    for (const [, rows] of groups) {
      const inPlanRows = rows.filter((row) => codeByCourseId.has(row.prerequisiteId))
      if (inPlanRows.length === 0) continue

      const groupSatisfied = inPlanRows.some((row) => {
        const prereqSemester = semesterByCourseId.get(row.prerequisiteId)
        return prereqSemester !== undefined && (prereqSemester < pc.semester || prereqSemester === 9)
      })

      if (!groupSatisfied) {
        unsatisfiedGroups.push(inPlanRows.map((row) => codeByCourseId.get(row.prerequisiteId)!))
      }
    }

    if (unsatisfiedGroups.length > 0) {
      violations.set(pc.id, unsatisfiedGroups)
    }
  }

  return violations
}

function getCoreqViolations(plan: Plan): Map<string, string[]> {
  const semesterByCourseId = new Map<string, number>()
  const codeByCourseId = new Map<string, string>()
  for (const pc of plan.plannedCourses) {
    semesterByCourseId.set(pc.course.id, pc.semester)
    codeByCourseId.set(pc.course.id, pc.course.code)
  }

  const violations = new Map<string, string[]>()

  for (const pc of plan.plannedCourses) {
    if (pc.semester < 1 || pc.semester > 8) continue

    const coreqs = pc.course.corequisites
    if (coreqs.length === 0) continue

    const unsatisfied: string[] = []

    for (const row of coreqs) {
      const coreqSemester = semesterByCourseId.get(row.corequisiteId)
      const coreqCode = codeByCourseId.get(row.corequisiteId)
      if (coreqSemester === undefined || coreqCode === undefined) continue
      if (coreqSemester !== pc.semester) {
        unsatisfied.push(coreqCode)
      }
    }

    if (unsatisfied.length > 0) {
      violations.set(pc.id, unsatisfied)
    }
  }

  return violations
}

export default function PlanView({ plans, isPending, activePlanId, onActivePlanChange, onRefresh }: Props) {
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState("")
  const [resetting, setResetting] = useState(false)

  async function handleResetPlan() {
    if (!activePlanId) return
    const confirmed = window.confirm("Reset this plan to the default curriculum? All customizations will be lost.")
    if (!confirmed) return

    setResetting(true)
    const res = await fetch(`/api/plans/${activePlanId}`, { method: "PUT" })
    if (res.ok) {
      onRefresh()
    } else {
      const data = await res.json()
      setError(data.error || "Something went wrong")
    }
    setResetting(false)
  }

  const activePlan = plans.find((p) => p.id === activePlanId) ?? null
  const violations = activePlan ? getPrereqViolations(activePlan) : new Map<string, string[][]>()
  const coreqViolations = activePlan ? getCoreqViolations(activePlan) : new Map<string, string[]>()

  async function handleCreatePlan() {
    setCreating(true)
    setError("")
    const planNumber = plans.length + 1
    const name = `Plan ${String.fromCharCode(64 + planNumber)}`
    const res = await fetch("/api/plans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || "Something went wrong")
      setCreating(false)
      return
    }
    onActivePlanChange(data.planId)
    onRefresh()
  }

  async function handleMoveCourse(plannedCourseId: string, planId: string, targetSemester: number) {
    if (targetSemester < SEMESTER_UNSCHEDULED || targetSemester > SEMESTER_COMPLETED) return
    const res = await fetch(`/api/plans/${planId}/courses/${plannedCourseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ semester: targetSemester }),
    })
    if (res.ok) onRefresh()
  }

  const bySemester: Record<number, PlannedCourse[]> = {}
  for (let i = 0; i <= 9; i++) bySemester[i] = []

  if (activePlan) {
    for (const pc of activePlan.plannedCourses) {
      if (bySemester[pc.semester] !== undefined) {
        bySemester[pc.semester].push(pc)
      }
    }
  }

  const unscheduled = bySemester[SEMESTER_UNSCHEDULED]
  const completed = bySemester[SEMESTER_COMPLETED]

  const scheduledCredits = Array.from({ length: 8 }, (_, i) => i + 1)
    .flatMap((sem) => bySemester[sem])
    .reduce((sum, pc) => sum + pc.course.credits, 0)

  const completedCredits = completed.reduce((sum, pc) => sum + pc.course.credits, 0)
  const totalCredits = scheduledCredits + completedCredits
  const progressPercent = Math.min(totalCredits / DEGREE_CREDITS, 1)

  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - progressPercent)

  return (
    <div className={`transition-opacity duration-300 ${isPending ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
      {/* Plan tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => onActivePlanChange(plan.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activePlanId === plan.id
                ? "bg-njit-navy text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:border-njit-navy hover:text-njit-navy"
            }`}
          >
            {plan.name}
          </button>
        ))}
        {plans.length < 3 && (
          <button
            onClick={handleCreatePlan}
            disabled={creating}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white border border-dashed border-gray-400 text-gray-500 hover:border-njit-navy hover:text-njit-navy transition-colors disabled:opacity-50"
          >
            {plans.length === 0
              ? creating ? "Creating..." : "+ Create your first plan"
              : creating ? "Creating..." : "+ New plan"}
          </button>
        )}

        {activePlanId && (
          <button
            onClick={handleResetPlan}
            disabled={resetting}
            className="md:ml-auto px-4 py-2 rounded-lg text-sm font-medium bg-white border border-gray-300 text-gray-500 hover:border-njit-red hover:text-njit-red transition-colors disabled:opacity-50"
          >
            {resetting ? "Resetting..." : "Reset plan"}
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-50 text-njit-red px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>
      )}

      {activePlan && (
        <div className="flex flex-col gap-6 items-start lg:flex-row">

          {/* LEFT — semester grid */}
          <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-lg mx-auto w-full lg:max-w-none">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((sem) => {
              const courses = bySemester[sem]
              const totalSemCredits = courses.reduce((sum, pc) => sum + pc.course.credits, 0)

              return (
                <div key={sem} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-njit-navy">
                      {getSemesterLabel(sem)}
                    </h3>
                    <span className="text-xs text-gray-400">{totalSemCredits} cr</span>
                  </div>
                  <div className="space-y-2">
                    {courses.map((pc) => (
                      <CourseCard
                        key={pc.id}
                        pc={pc}
                        planId={activePlan.id}
                        currentSemester={sem}
                        onMove={handleMoveCourse}
                        showMoveArrows
                        violated={violations.has(pc.id)}
                        violationGroups={violations.get(pc.id)}
                        coreqViolated={coreqViolations.has(pc.id)}
                        coreqViolationCodes={coreqViolations.get(pc.id)}
                      />
                    ))}
                    {courses.length === 0 && (
                      <p className="text-xs text-gray-300 italic">No courses yet</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT — sticky sidebar */}
          <div className="w-full lg:w-64 lg:shrink-0 lg:sticky lg:top-6 space-y-4">

            {/* Progress card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col items-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 self-start">
                Degree Progress
              </h3>

              <svg width="128" height="128" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                />
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  fill="none"
                  stroke="#D22630"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  transform="rotate(-90 64 64)"
                />
                <text
                  x="64"
                  y="58"
                  textAnchor="middle"
                  fill="#071D49"
                  fontSize="22"
                  fontWeight="700"
                >
                  {totalCredits}
                </text>
                <text
                  x="64"
                  y="76"
                  textAnchor="middle"
                  fill="#9ca3af"
                  fontSize="11"
                >
                  of {DEGREE_CREDITS} cr
                </text>
              </svg>

              <div className="w-full mt-4 space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Scheduled</span>
                  <span>{scheduledCredits} cr</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Completed</span>
                  <span>{completedCredits} cr</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 pt-1 border-t border-gray-100">
                  <span>Remaining</span>
                  <span>{Math.max(DEGREE_CREDITS - totalCredits, 0)} cr</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-yellow-50 border border-yellow-300 shrink-0" />
                  <span className="text-xs text-gray-600">Prerequisite not satisfied</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-orange-50 border border-orange-300 shrink-0" />
                  <span className="text-xs text-gray-600">Corequisite in wrong semester</span>
                </div>
              </div>
            </div>

            {completed.length > 0 && (
              <SidebarBucket
                title="Completed"
                courses={completed}
                planId={activePlan.id}
                onMove={handleMoveCourse}
                bucketSemester={SEMESTER_COMPLETED}
                accentClass="border-green-200 bg-green-50"
                titleClass="text-green-800"
              />
            )}

            {unscheduled.length > 0 && (
              <SidebarBucket
                title="Unscheduled"
                courses={unscheduled}
                planId={activePlan.id}
                onMove={handleMoveCourse}
                bucketSemester={SEMESTER_UNSCHEDULED}
                accentClass="border-yellow-200 bg-yellow-50"
                titleClass="text-yellow-800"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// --- Sub-components ---

type CourseCardProps = {
  pc: PlannedCourse
  planId: string
  currentSemester: number
  onMove: (plannedCourseId: string, planId: string, targetSemester: number) => void
  showMoveArrows?: boolean
  violated?: boolean
  violationGroups?: string[][]
  coreqViolated?: boolean
  coreqViolationCodes?: string[]
}

function CourseCard({ pc, planId, currentSemester, onMove, showMoveArrows, violated, violationGroups, coreqViolated, coreqViolationCodes }: CourseCardProps) {
  const prereqTooltip = violationGroups
    ? "Missing: " + violationGroups.map((group) => group.join(" or ")).join(", ")
    : ""

  const coreqTooltip = coreqViolationCodes
    ? "Must take same semester as: " + coreqViolationCodes.join(", ")
    : ""

  const cardColor = coreqViolated
    ? "bg-orange-50 border border-orange-300"
    : violated
    ? "bg-yellow-50 border border-yellow-300"
    : "bg-gray-50"

  return (
    <div className="relative group">
      <div className={`flex items-start justify-between rounded-lg px-3 py-2 ${cardColor}`}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <p className="text-xs font-semibold text-njit-navy">{pc.course.code}</p>
            {coreqViolated && <span className="text-orange-400 text-xs">⚠️</span>}
            {violated && !coreqViolated && <span className="text-yellow-500 text-xs">⚠️</span>}
          </div>
          <p className="text-xs text-gray-600">{pc.course.name}</p>
        </div>
        <div className="flex items-center gap-1 ml-2 shrink-0">
          <span className="text-xs text-gray-400">{pc.course.credits} cr</span>
          {showMoveArrows && (
            <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity ml-1">
              <button
                onClick={() => onMove(pc.id, planId, currentSemester - 1)}
                disabled={currentSemester === 1}
                className="text-gray-400 hover:text-njit-red disabled:opacity-20 leading-none"
                title="Move earlier"
              >▲</button>
              <button
                onClick={() => onMove(pc.id, planId, currentSemester + 1)}
                disabled={currentSemester === 8}
                className="text-gray-400 hover:text-njit-red disabled:opacity-20 leading-none"
                title="Move later"
              >▼</button>
            </div>
          )}
          <ActionMenu pc={pc} planId={planId} currentSemester={currentSemester} onMove={onMove} />
        </div>
      </div>

      {(violated || coreqViolated) && (
        <div className="absolute left-0 right-0 top-full mt-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-njit-navy text-white text-xs rounded-lg px-3 py-2 shadow-lg space-y-1">
            {violated && prereqTooltip && <p>{prereqTooltip}</p>}
            {coreqViolated && coreqTooltip && <p>{coreqTooltip}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

type ActionMenuProps = {
  pc: PlannedCourse
  planId: string
  currentSemester: number
  onMove: (plannedCourseId: string, planId: string, targetSemester: number) => void
}

function ActionMenu({ pc, planId, currentSemester, onMove }: ActionMenuProps) {
  const [open, setOpen] = useState(false)
  const isCompleted = currentSemester === SEMESTER_COMPLETED
  const isUnscheduled = currentSemester === SEMESTER_UNSCHEDULED

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-gray-300 hover:text-njit-navy opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-xs leading-none px-1"
        title="More options"
      >
        •••
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-5 z-20 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-40">
            {!isUnscheduled && (
              <button
                onClick={() => { onMove(pc.id, planId, SEMESTER_UNSCHEDULED); setOpen(false) }}
                className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
              >
                Move to Unscheduled
              </button>
            )}
            {!isCompleted && (
              <button
                onClick={() => { onMove(pc.id, planId, SEMESTER_COMPLETED); setOpen(false) }}
                className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
              >
                Mark as Completed
              </button>
            )}
            {(isUnscheduled || isCompleted) && (
              <button
                onClick={() => { onMove(pc.id, planId, 1); setOpen(false) }}
                className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
              >
                Move to Semester 1
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

type SidebarBucketProps = {
  title: string
  courses: PlannedCourse[]
  planId: string
  onMove: (plannedCourseId: string, planId: string, targetSemester: number) => void
  bucketSemester: number
  accentClass: string
  titleClass: string
}

function SidebarBucket({ title, courses, planId, onMove, bucketSemester, accentClass, titleClass }: SidebarBucketProps) {
  const totalCredits = courses.reduce((sum, pc) => sum + pc.course.credits, 0)

  return (
    <div className={`rounded-xl border-2 p-4 ${accentClass}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-sm font-semibold ${titleClass}`}>{title}</h3>
        <span className="text-xs text-gray-400">{totalCredits} cr</span>
      </div>
      <div className="space-y-2">
        {courses.map((pc) => (
          <CourseCard
            key={pc.id}
            pc={pc}
            planId={planId}
            currentSemester={bucketSemester}
            onMove={onMove}
            showMoveArrows={false}
          />
        ))}
      </div>
    </div>
  )
}