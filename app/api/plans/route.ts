import { NextResponse } from "next/server"
import { auth } from "../../../auth"
import { prisma } from "../../../lib/prisma"

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name } = body

    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Plan name is required" }, { status: 400 })
    }

    // Enforce the 2-3 plan limit
    const existingPlans = await prisma.plan.count({
      where: { userId: session.user.id },
    })

    if (existingPlans >= 3) {
      return NextResponse.json(
        { error: "You can have at most 3 plans" },
        { status: 400 }
      )
    }

    // Fetch the user's major so we know which courses to pre-populate
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { majorId: true },
    })

    if (!user?.majorId) {
      return NextResponse.json(
        { error: "You must select a major before creating a plan" },
        { status: 400 }
      )
    }

    // Fetch all courses for this major that have a recommendedSemester
    const majorCourses = await prisma.majorCourse.findMany({
      where: { majorId: user.majorId },
      include: { course: true },
    })

    const coursesWithSemester = majorCourses
      .map((mc) => mc.course)
      .filter((c) => c.recommendedSemester !== null)

    // Create the plan AND its PlannedCourses in one atomic transaction
    const userId = session.user.id  // TypeScript now knows: string (not undefined)

    // Then use userId everywhere inside the transaction instead of session.user.id
    const plan = await prisma.$transaction(async (tx) => {
        const newPlan = await tx.plan.create({
            data: {
                name: name.trim(),
                userId: userId,  // ← plain string, no ambiguity
        },
    })

      await tx.plannedCourse.createMany({
        data: coursesWithSemester.map((course) => ({
          planId: newPlan.id,
          courseId: course.id,
          semester: course.recommendedSemester as number,
          year: 1, // placeholder — you noted this field may be reconsidered
        })),
      })

      return newPlan
    })

    return NextResponse.json({ message: "Plan created", planId: plan.id }, { status: 201 })
  } catch (error) {
    console.error("Plan creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const plans = await prisma.plan.findMany({
      where: { userId: session.user.id },
      include: {
        plannedCourses: {
          include: { course: true },
          orderBy: { semester: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    })

    return NextResponse.json(plans)
  } catch (error) {
    console.error("Plan fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}