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
  // Routes to language-specific llms-full.txt based on Accept-Language header
  if (accept.includes("text/markdown") && MARKDOWN_PATHS.has(path)) {
    const lang = request.headers.get("accept-language") ?? "";
    let llmsFile = "/llms-full.txt";
    if (/\bzh\b/i.test(lang)) llmsFile = "/llms-full.zh-CN.txt";
    else if (/\bja\b/i.test(lang)) llmsFile = "/llms-full.ja.txt";
    else if (/\bes\b/i.test(lang)) llmsFile = "/llms-full.es.txt";
    return NextResponse.redirect(new URL(llmsFile, request.url), 302);
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
