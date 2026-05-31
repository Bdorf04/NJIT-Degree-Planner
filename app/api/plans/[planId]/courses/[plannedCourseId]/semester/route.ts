import { NextResponse } from "next/server"
import { auth } from "../../../../../../../auth"
import { prisma } from "../../../../../../../lib/prisma"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ planId: string; plannedCourseId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { planId, plannedCourseId } = await params

    const plan = await prisma.plan.findUnique({
      where: { id: planId },
      select: { userId: true },
    })

    if (!plan || plan.userId !== session.user.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    const plannedCourse = await prisma.plannedCourse.findUnique({
      where: { id: plannedCourseId },
      select: { semester: true },
    })

    if (!plannedCourse) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    return NextResponse.json({ semester: plannedCourse.semester })
  } catch (error) {
    console.error("Get semester error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}