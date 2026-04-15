import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Only intercept exact locale-prefixed paths: /es, /es/*, /fr/*, etc.
  // /:path* requires a trailing slash, so /free-photo-restoration does NOT
  // match as /fr/ee-photo-restoration. EN routes pass through untouched.
  matcher: [
    "/(es|pt-BR|fr|de|ja|ko)/:path*",
    "/(es|pt-BR|fr|de|ja|ko)",
  ],
};
