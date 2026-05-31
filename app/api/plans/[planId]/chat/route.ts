import { NextResponse } from "next/server"
import { auth } from "../../../../../auth"
import { prisma } from "../../../../../lib/prisma"
import { getSemesterLabel } from "../../../../../lib/semesterLabel"

const TOOLS = [
  {
    name: "moveCourse",
    description: "Move a course to a specific semester in the student's plan.",
    input_schema: {
      type: "object",
      properties: {
        courseCode: {
          type: "string",
          description: "The course code exactly as it appears in the plan, e.g. CS 114",
        },
        targetSemester: {
          type: "number",
          description: "Semester 1–8, or 0 for Unscheduled, or 9 for Completed",
        },
      },
      required: ["courseCode", "targetSemester"],
    },
  },
  {
    name: "markCompleted",
    description: "Mark a course as completed (moves it to the Completed bucket).",
    input_schema: {
      type: "object",
      properties: {
        courseCode: {
          type: "string",
          description: "The course code to mark as completed",
        },
      },
      required: ["courseCode"],
    },
  },
  {
    name: "markUnscheduled",
    description: "Move a course to the Unscheduled bucket.",
    input_schema: {
      type: "object",
      properties: {
        courseCode: {
          type: "string",
          description: "The course code to unschedule",
        },
      },
      required: ["courseCode"],
    },
  },
  {
    name: "resetPlan",
    description: "Reset the plan to the default curriculum, discarding all customizations.",
    input_schema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
]


type PlannedCourseWithCourse = {
  id: string
  semester: number
  course: {
    id: string
    code: string
    prerequisites: { prerequisiteId: string; groupId: number }[]
    corequisites: { corequisiteId: string }[]
  }
}

function computeViolations(plannedCourses: PlannedCourseWithCourse[]): string[] {
  const semesterById = new Map<string, number>()
  const codeById = new Map<string, string>()

  for (const pc of plannedCourses) {
    semesterById.set(pc.course.id, pc.semester)
    codeById.set(pc.course.id, pc.course.code)
  }

  const violations: string[] = []

  for (const pc of plannedCourses) {
    if (pc.semester < 1 || pc.semester > 8) continue

    // Prerequisite violations
    const groups = new Map<number, { prerequisiteId: string; groupId: number }[]>()
    for (const row of pc.course.prerequisites) {
      if (!groups.has(row.groupId)) groups.set(row.groupId, [])
      groups.get(row.groupId)!.push(row)
    }

    for (const [, rows] of groups) {
      const inPlan = rows.filter((r) => codeById.has(r.prerequisiteId))
      if (inPlan.length === 0) continue

      const satisfied = inPlan.some((r) => {
        const s = semesterById.get(r.prerequisiteId)
        return s !== undefined && (s < pc.semester || s === 9)
      })

      if (!satisfied) {
        const options = inPlan.map((r) => codeById.get(r.prerequisiteId)!).join(" or ")
        violations.push(`${pc.course.code} requires ${options} to be taken before it (currently in the same or later semester)`)
      }
    }

    // Corequisite violations
    for (const row of pc.course.corequisites) {
      const coreqSemester = semesterById.get(row.corequisiteId)
      const coreqCode = codeById.get(row.corequisiteId)
      if (coreqSemester === undefined || coreqCode === undefined) continue
      if (coreqSemester !== pc.semester) {
        violations.push(`${pc.course.code} must be taken in the same semester as ${coreqCode}`)
      }
    }
  }

  return violations
}


function buildSystemPrompt(
  planName: string,
  courses: { code: string; name: string; semester: number }[],
  violations: string[]
): string {
  const courseLines = courses
    .sort((a, b) => a.semester - b.semester)
    .map((c) => `  - ${c.code} (${c.name}): ${getSemesterLabel(c.semester)}`)
    .join("\n")

  const violationSection = violations.length === 0
    ? "  No violations — all prerequisites and corequisites are satisfied."
    : violations.map((v) => `  - ${v}`).join("\n")

  return `You are an AI assistant helping an NJIT student manage their degree plan called "${planName}".

Here is their current course schedule:
${courseLines}

Current prerequisite and corequisite violations:
${violationSection}

Semester numbers: 0 = Unscheduled, 1–8 = Freshman S1 through Senior S2, 9 = Completed.

When the student asks you to take an action, use the appropriate tool. Only use one tool per message.
If the student asks a question rather than requesting an action, answer in plain text without using a tool.
If the student references a course that doesn't exist in their plan, tell them so in plain text.`
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ planId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { planId } = await params
    const body = await request.json()
    const { message } = body

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Fetch the plan and verify ownership
    const plan = await prisma.plan.findUnique({
      where: { id: planId },
      include: {
        plannedCourses: {
          include: {
            course: {
              include: {
                prerequisites: true,
                corequisites: true,
              },
            },
          },
        },
      },
    })

    if (!plan || plan.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    // Build the course list for the system prompt
    const courses = plan.plannedCourses.map((pc) => ({
      code: pc.course.code,
      name: pc.course.name,
      semester: pc.semester,
    }))

    const violations = computeViolations(plan.plannedCourses)
    const systemPrompt = buildSystemPrompt(plan.name, courses, violations)

    // Call the Anthropic API
    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: systemPrompt,
        tools: TOOLS,
        messages: [{ role: "user", content: message.trim() }],
      }),
    })

    if (!anthropicRes.ok) {
      const err = await anthropicRes.text()
      console.error("Anthropic API error:", err)
      return NextResponse.json({ error: "AI service error" }, { status: 500 })
    }

    const data = await anthropicRes.json()

    // Find the plannedCourse lookup map (code → id) for the frontend to use
    const courseCodeToPlannedCourseId = new Map(
      plan.plannedCourses.map((pc) => [pc.course.code, pc.id])
    )

    // Parse Claude's response
    // Parse Claude's response
    const toolUseBlocks = data.content.filter((block: { type: string }) => block.type === "tool_use")
    const textBlock = data.content.find((block: { type: string }) => block.type === "text")

    if (toolUseBlocks.length > 0) {
      const resolvedTools = []

      for (const toolUseBlock of toolUseBlocks) {
        const { name, input } = toolUseBlock

        let plannedCourseId: string | null = null
        if (input.courseCode) {
          plannedCourseId = courseCodeToPlannedCourseId.get(input.courseCode) ?? null
          if (!plannedCourseId) {
            return NextResponse.json({
              type: "text",
              text: `I couldn't find "${input.courseCode}" in your plan.`,
            })
          }
        }

        resolvedTools.push({ tool: name, input, plannedCourseId, planId })
      }

      return NextResponse.json({ type: "tools", tools: resolvedTools })
    }

    if (textBlock) {
      return NextResponse.json({ type: "text", text: textBlock.text })
    }

    return NextResponse.json({ type: "text", text: "I didn't understand that. Try rephrasing." })
  } catch (error) {
    console.error("Chat route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}