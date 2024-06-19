import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  const accessToken = req.cookies.get("accessToken");

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (accessToken) {
    if (req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
