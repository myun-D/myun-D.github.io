import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/works/Project_01', request.url))
}

export const config = {
  matcher: ['/works', '/works/'],
}
