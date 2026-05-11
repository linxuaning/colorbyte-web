"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


// Top-right badge that reads localStorage.artimagehub_email and shows
// "Signed in as <email>" so paid users have a clear "logged-in state"
// affordance across the site. No API call — purely client-side display
// of the identity that's already persisted by DodoCheckoutButton.
//
// Hidden until mounted (avoids SSR hydration mismatch) and hidden when no
// email is saved (anonymous visitors see only the existing CTA).
//
// Founder 5-11 UX request "付款完默认要是登陆状态" case #4 (header indicator).
// No payment / checkout / Dodo / orders / webhook code touched.
function readSavedEmail(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = (localStorage.getItem("artimagehub_email") || "").trim().toLowerCase();
    return stored && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stored) ? stored : null;
  } catch {
    return null;
  }
}

export default function SignedInBadge() {
  // Initial state via lazy initializer reads localStorage exactly once and
  // doesn't re-render on every parent render. Server render returns null
  // (no localStorage); client first paint reads and shows badge.
  const [email, setEmail] = useState<string | null>(() => readSavedEmail());

  useEffect(() => {
    // Re-sync on cross-tab storage events (signing in one tab reflects others).
    const onStorage = (e: StorageEvent) => {
      if (e.key === "artimagehub_email") {
        const next = (e.newValue || "").trim().toLowerCase();
        setEmail(next && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next) ? next : null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!email) return null;

  // Truncate long emails for visual fit; show full email on hover via title attr
  const displayEmail = email.length > 28 ? email.slice(0, 24) + "…" : email;

  return (
    <Link
      href="/subscription"
      className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-[#d4bc91]/50 bg-white/60 px-3 h-8 text-[12px] font-medium text-[#6b5344] hover:text-[#8B5E3C] hover:bg-white transition-all duration-150"
      title={`Signed in as ${email} — click to manage account`}
      aria-label={`Signed in as ${email}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
      <span>{displayEmail}</span>
    </Link>
  );
}
