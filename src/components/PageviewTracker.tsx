"use client";

import { useEffect } from "react";
import { recordFirstPagePathIfMissing } from "@/lib/payment-funnel";

// Captures the first pagepath observed in this session into sessionStorage.
// Mounted once at the layout level so it runs on initial app load. Later
// SPA navigations don't reset it — that's the point: we want the entry
// page (e.g. /blog/<slug>), not whatever the visitor scrolled to last.
//
// Read by `enrichFunnelSource` in `lib/payment-funnel.ts` as a fallback when
// the funnel-source object can't recover a landing_page from URL params or
// the LOCKED_LANDING_PAGES whitelist (entry=direct/(not set), blog wildcard,
// etc.). Without this, /subscription pay clicks where the user came from a
// non-whitelisted entry would persist landing_page=NULL in payment_initiations
// and payment_successes — losing attribution for blog-driven and direct paid
// orders. Capture-side only; does NOT touch checkout/webhook/orders flow.
export default function PageviewTracker() {
  useEffect(() => {
    recordFirstPagePathIfMissing();
  }, []);
  return null;
}
