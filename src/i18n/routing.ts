import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "pt-BR", "fr", "de", "ja", "ko", "zh-CN"],
  defaultLocale: "en",
  // English served at / (no prefix); all others get /{locale}/
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
