// creme/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("ageVerified")?.value; // "true" | "false" | undefined

  // Allow internal assets and the age screens (/underage and optional /reverify)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname === "/favicon.ico" ||
    pathname === "/underage" ||
    pathname === "/reverify"
  ) {
    return NextResponse.next();
  }

  // Block anyone who said "No"
  if (cookie === "false") {
    const url = req.nextUrl.clone();
    url.pathname = "/underage";
    return NextResponse.redirect(url);
  }

  // No cookie yet → force them to home for the prompt
  if (!cookie) {
    if (pathname === "/") return NextResponse.next();
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
