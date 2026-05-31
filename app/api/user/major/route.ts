import { NextResponse } from "next/server"
import { auth } from "../../../../auth"
import { prisma } from "../../../../lib/prisma"

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { majorId } = body

    if (!majorId) {
      return NextResponse.json(
        { error: "Missing majorId" },
        { status: 400 }
      )
    }

    const major = await prisma.major.findUnique({
      where: { id: majorId }
    })

    if (!major) {
      return NextResponse.json(
        { error: "Major not found" },
        { status: 404 }
      )
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { majorId }
    })

    return NextResponse.json(
      { message: "Major updated successfully", userId: updatedUser.id },
      { status: 200 }
    )
  } catch (error) {
    console.error("Major update error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}