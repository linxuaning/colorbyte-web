import { NextResponse, type NextRequest } from "next/server";

// Markdown content negotiation: when AI agents request text/markdown,
// serve llms-full.txt as the machine-readable representation of the site.
// Covers isitagentready.com "markdownNegotiation" check.
const MARKDOWN_PATHS = new Set(["/", "/old-photo-restoration", "/photo-colorizer", "/photo-enhancer"]);

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  if (
    accept.includes("text/markdown") &&
    MARKDOWN_PATHS.has(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/llms-full.txt", request.url), {
      status: 302,
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/old-photo-restoration", "/photo-colorizer", "/photo-enhancer"],
};
