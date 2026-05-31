import { NextResponse } from "next/server"
import { auth } from "../../../../../../auth"
import { prisma } from "../../../../../../lib/prisma"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ planId: string; plannedCourseId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { planId, plannedCourseId } = await params

    const body = await request.json()
    const { semester } = body

    if (typeof semester !== "number" || semester < 0 || semester > 9) {
      return NextResponse.json({ error: "Invalid semester" }, { status: 400 })
    }

    // Verify this plan belongs to the logged-in user
    const plan = await prisma.plan.findUnique({
      where: { id: planId },
      select: { userId: true },
    })

    if (!plan || plan.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    const updated = await prisma.plannedCourse.update({
      where: { id: plannedCourseId },
      data: { semester },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error("Move course error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}