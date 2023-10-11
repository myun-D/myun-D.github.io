import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (url.pathname === "/works/" || url.pathname === "/works") {
    url.pathname = "works/Project_01"
    return NextResponse.redirect(url)
  }
}
