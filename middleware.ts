import { auth } from "./auth"
export const runtime = "nodejs"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register")
  const isLandingPage = req.nextUrl.pathname === "/"

  if (isLandingPage) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", req.nextUrl))
    }
    return // let unauthenticated users see the landing page
  }

  if (!isLoggedIn && !isAuthPage) {
    return Response.redirect(new URL("/login", req.nextUrl))
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}