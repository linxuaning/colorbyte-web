"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";

const LOCALES = [
  { code: "en", flag: "🇺🇸", label: "English", short: "EN" },
  { code: "es", flag: "🇪🇸", label: "Español", short: "ES" },
  { code: "pt-BR", flag: "🇧🇷", label: "Português", short: "PT" },
  { code: "fr", flag: "🇫🇷", label: "Français", short: "FR" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", short: "DE" },
  { code: "ja", flag: "🇯🇵", label: "日本語", short: "JA" },
  { code: "ko", flag: "🇰🇷", label: "한국어", short: "KO" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

const NON_EN: LocaleCode[] = ["es", "pt-BR", "fr", "de", "ja", "ko"];

function detectLocale(pathname: string): LocaleCode {
  for (const locale of NON_EN) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return "en";
}

function buildLocalePath(pathname: string, from: LocaleCode, to: LocaleCode): string {
  // strip existing prefix
  let base = pathname;
  if (from !== "en") {
    base = pathname.slice(`/${from}`.length) || "/";
  }
  if (to === "en") return base;
  return `/${to}${base === "/" ? "" : base}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = detectLocale(pathname);
  const currentLocale = LOCALES.find((l) => l.code === current)!;

  const handleSelect = useCallback(
    (code: LocaleCode) => {
      if (code === current) { setOpen(false); return; }
      const next = buildLocalePath(pathname, current, code);
      setOpen(false);
      router.push(next);
    },
    [current, pathname, router],
  );

  // close on outside click
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full border border-[#d4bc91]/60 bg-transparent px-3 py-1.5 text-[13px] font-medium text-[#6b5344] hover:border-[#8B5E3C] hover:text-[#8B5E3C] transition-colors duration-200"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch language"
      >
        <span aria-hidden="true">🌐</span>
        <span>{currentLocale.short}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-1.5 min-w-[148px] rounded-xl border border-[#d4bc91]/50 bg-[#faf8f4] py-1 shadow-lg shadow-[#2c2416]/10 z-50"
        >
          {LOCALES.map((locale) => (
            <li key={locale.code} role="option" aria-selected={locale.code === current}>
              <button
                type="button"
                onClick={() => handleSelect(locale.code)}
                className={`flex w-full items-center gap-2.5 px-3.5 py-2 text-[13px] transition-colors duration-100 ${
                  locale.code === current
                    ? "font-semibold text-[#8B5E3C] bg-[#8B5E3C]/8"
                    : "text-[#4a3728] hover:bg-[#f0ebe3] hover:text-[#2c2416]"
                }`}
              >
                <span className="text-[16px] leading-none" aria-hidden="true">{locale.flag}</span>
                <span>{locale.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
