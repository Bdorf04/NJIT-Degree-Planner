import { auth, signOut } from "../../auth"
import { redirect } from "next/navigation"
import { prisma } from "../../lib/prisma"
import MajorSelector from "./MajorSelector"
import DashboardClient from "./DashboardClient"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      major: true,
      plans: {
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
            orderBy: [
              { semester: "asc" },
              { course: { code: "asc" } },
            ],
          },
        },
        orderBy: { createdAt: "asc" },
      },
    },
  })

  const activePlan = user?.plans?.[0] ?? null

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-njit-navy shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">NJIT Degree Planner</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">Welcome, {session.user.name}</span>
          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/login" })
            }}
          >
            <button
              type="submit"
              className="bg-njit-red text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Sign out
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-screen-2xl mx-auto px-6 py-10">
        {!user?.major ? (
          <MajorSelector />
        ) : (
          <DashboardClient plans={user.plans} activePlanId={activePlan?.id ?? null} />
        )}
      </div>
    </main>
  )
}