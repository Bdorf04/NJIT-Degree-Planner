import { NextResponse } from "next/server"
import { auth } from "../../../../auth"
import { prisma } from "../../../../lib/prisma"

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ planId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { planId } = await params

    // Verify the plan belongs to this user
    const plan = await prisma.plan.findUnique({
      where: { id: planId },
      select: { userId: true },
    })

    if (!plan || plan.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    // Get the user's major
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { majorId: true },
    })

    if (!user?.majorId) {
      return NextResponse.json({ error: "No major set" }, { status: 400 })
    }

    // Get all curriculum courses with a recommended semester
    const majorCourses = await prisma.majorCourse.findMany({
      where: { majorId: user.majorId },
      include: { course: true },
    })

    const coursesWithSemester = majorCourses
      .map((mc) => mc.course)
      .filter((c) => c.recommendedSemester !== null)

    // Wipe and rebuild in a transaction
    await prisma.$transaction(async (tx) => {
      await tx.plannedCourse.deleteMany({
        where: { planId },
      })

      await tx.plannedCourse.createMany({
        data: coursesWithSemester.map((course) => ({
          planId,
          courseId: course.id,
          semester: course.recommendedSemester as number,
          year: 1,
        })),
      })
    })

    return NextResponse.json({ message: "Plan reset successfully" }, { status: 200 })
  } catch (error) {
    console.error("Plan reset error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}