// Locale home — EN-only content for now.
// Non-EN locale roots (/es/, /fr/, etc.) render the same EN homepage.
// generateStaticParams ensures Next.js pre-renders these routes so they don't 404.
export { default } from "@/app/page";

import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}
