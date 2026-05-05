import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

// Pages where we serve llms-full.txt when AI agents request text/markdown
const MARKDOWN_PATHS = new Set(["/", "/old-photo-restoration", "/photo-colorizer", "/photo-enhancer"]);

export default function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const path = request.nextUrl.pathname;

  // Markdown content negotiation for AI agents (isitagentready.com compliance)
  if (accept.includes("text/markdown") && MARKDOWN_PATHS.has(path)) {
    return NextResponse.redirect(new URL("/llms-full.txt", request.url), 302);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Markdown negotiation paths (EN tool pages)
    "/",
    "/old-photo-restoration",
    "/photo-colorizer",
    "/photo-enhancer",
    // i18n locale-prefixed paths
    "/(es|pt-BR|fr|de|ja|ko)/:path*",
    "/(es|pt-BR|fr|de|ja|ko)",
  ],
};
