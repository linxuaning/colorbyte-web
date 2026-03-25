"use client";

import { usePathname } from "next/navigation";

const CHROMELESS_PATHS = new Set(["/payment/cancel", "/payment/success"]);

export default function RouteChromeGuard() {
  const pathname = usePathname();

  if (!CHROMELESS_PATHS.has(pathname)) {
    return null;
  }

  return (
    <style>{`
      body > header,
      body > footer,
      body > [data-global-sticky-cta],
      body > [data-global-exit-popup] {
        display: none !important;
      }

      body > main {
        min-height: 100vh;
      }
    `}</style>
  );
}
