import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"

export async function GET() {
  try {
    const majors = await prisma.major.findMany({
      orderBy: { name: "asc" }
    })
    return NextResponse.json(majors)
  } catch (error) {
    console.error("Error fetching majors:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}