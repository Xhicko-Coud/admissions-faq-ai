import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE_CANDIDATES = [
  "better-auth.session_token",
  "__Secure-better-auth.session_token",
];

function hasLikelyAuthSession(request: NextRequest) {
  return AUTH_COOKIE_CANDIDATES.some((cookieName) =>
    Boolean(request.cookies.get(cookieName)?.value),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin") {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = "/admin/dashboard";
    return NextResponse.redirect(dashboardUrl);
  }

  if (pathname.startsWith("/admin") && !hasLikelyAuthSession(request)) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("reason", "session-required");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
