// Without a defined matcher, this one line applies next-auth
// to the entire project
// export { auth as middleware } from "./auth";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: ["/admin"] };

import NextAuth from "next-auth";
import { authConfig } from "../authconfig";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/admin*"],
// };

// "/((?!api|static|.*\\..*|_next).*)"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/admin")) {
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }
  // if (request.nextUrl.pathname.startsWith("/admin")) {
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }
}
