import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">

      {/* Nav */}
      <nav className="px-8 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-lg font-bold text-njit-red">NJIT Degree Planner</span>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="text-sm bg-njit-navy text-white px-4 py-2 rounded-lg hover:bg-njit-red transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-8 text-center">
        <div className="inline-block bg-red-100 text-njit-red text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          Built for NJIT CS Students
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          <span className="text-njit-red">Stop guessing.</span> <br />
          Plan your CS degree at NJIT.<br />
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          Map out all 4 years of your CS degree, catch prerequisite conflicts before they happen, and get instant AI help — all in one place.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/register"
            className="bg-njit-navy text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-njit-red transition-colors shadow-md"
          >
            Start planning for free
          </Link>
          <Link
            href="/login"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            Already have an account →
          </Link>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Everything you need</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              emoji: "⚠️",
              title: "Prerequisite warnings",
              description: "Courses highlight in yellow the moment a prereq conflict is detected — with a tooltip showing exactly what's missing.",
            },
            {
              emoji: "🤖",
              title: "AI-powered planning",
              description: "Chat naturally with an AI that knows your entire schedule. Move courses, reset your plan, or ask for advice.",
            },
            {
              emoji: "📋",
              title: "Up to 3 plans",
              description: "Compare different scheduling strategies side by side. Plan A for the fast track, Plan B for the relaxed route.",
            },
            {
              emoji: "📊",
              title: "Live progress tracking",
              description: "See your total credits, completed credits, and remaining requirements update instantly as you build your schedule.",
            },
          ].map(({ emoji, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-njit-navy py-10 text-center">
        <h2 className="text-2xl font-bold text-white mb-4 py-4">Join now for easy scheduling!</h2>
        <Link
          href="/register"
          className="bg-white text-njit-red px-6 py-3 rounded-xl font-semibold text-sm hover:bg-red-50 transition-colors shadow-md">
          Create your free account
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400">
        Built with Next.js, Prisma, and Claude · NJIT CS Degree Planner
      </footer>

    </main>
  )
}