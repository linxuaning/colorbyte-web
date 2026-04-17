// Locale detection helper — mirrors the logic used in LanguageSwitcher.
// Kept here so the three tool clients can detect the active locale from
// the URL without importing a "use client" component.

export type LocaleCode = "en" | "es" | "pt-BR" | "fr" | "de" | "ja" | "ko";

const NON_EN: readonly LocaleCode[] = ["es", "pt-BR", "fr", "de", "ja", "ko"];

export function detectLocaleFromPath(pathname: string | null | undefined): LocaleCode {
  if (!pathname) return "en";
  for (const locale of NON_EN) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return "en";
}
