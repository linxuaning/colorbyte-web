"use client";

import { useEffect, useRef, useState } from "react";
import {
  clearPendingPaymentFunnelSource,
  paymentFunnelPayload,
  storePendingPaymentFunnelSource,
  trackCreateOrderResult,
  trackPaymentCancel,
  trackPaymentClick,
  trackPaymentStarted,
} from "@/lib/analytics";
import { openDodoOverlay } from "@/lib/dodo-overlay";
import type { PaymentFunnelSource } from "@/lib/payment-funnel";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const CHECKOUT_ITEM_LABEL = `Original-quality download - ${PRO_PRICE_TEXT}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  /** Visible button label, e.g. "$4.99 — Get Started". */
  label: string;
  /** className applied to the trigger button. */
  className?: string;
  /** Funnel source attribution forwarded to backend + analytics. */
  funnelSource?: PaymentFunnelSource;
}

/**
 * Hero-class CTA that bypasses the /subscription middle page: collects
 * email in a small in-page modal, calls
 * /api/payment/dodo-create-checkout, then opens the Dodo overlay
 * directly. Falls back to redirecting to /subscription if anything
 * upstream fails so visitors never lose the path to payment.
 */
export default function DodoQuickCheckoutButton({
  label,
  className = "",
  funnelSource = {},
}: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pre-fill from any saved email so returning visitors skip retyping.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("artimagehub_email")?.trim() || "";
    if (saved) setEmail(saved);
  }, []);

  // Auto-focus the email input as the modal opens.
  useEffect(() => {
    if (open) {
      // Small delay so the input is mounted before focus().
      const t = window.setTimeout(() => inputRef.current?.focus(), 60);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [open]);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Esc closes the modal.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleClick = () => {
    trackPaymentClick(CHECKOUT_ITEM_LABEL, funnelSource);
    setOpen(true);
  };

  const closeModal = () => {
    if (loading) return; // don't allow close while a checkout is being created
    setOpen(false);
    setError(null);
  };

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!API_BASE) {
      setError("Payment is not configured. Please contact support@artimagehub.com.");
      return;
    }
    const normalized = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(normalized)) {
      setError("Please enter a valid email address first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      localStorage.setItem("artimagehub_email", normalized);
      storePendingPaymentFunnelSource(funnelSource, undefined);
      trackPaymentStarted(CHECKOUT_ITEM_LABEL, funnelSource);

      const response = await fetch(`${API_BASE}/api/payment/dodo-create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalized,
          resume_task_id: null,
          ...paymentFunnelPayload(funnelSource),
        }),
      });

      if (!response.ok) {
        clearPendingPaymentFunnelSource();
        let detail = `http_${response.status}`;
        try {
          const data = await response.json();
          if (typeof data?.detail === "string") detail = data.detail || detail;
        } catch {
          /* keep http_status detail */
        }
        trackCreateOrderResult(false, detail, funnelSource);
        // Hard fallback to /subscription where DodoCheckoutButton has its
        // own error UX + manual support link.
        window.location.href = `${window.location.origin}/subscription?email=${encodeURIComponent(normalized)}&cta_slot=hero_quick_checkout&entry_variant=hero_modal_fallback`;
        return;
      }

      const data: { checkout_url?: string; session_id?: string; amount?: string } =
        await response.json();
      if (!data.checkout_url) {
        clearPendingPaymentFunnelSource();
        trackCreateOrderResult(false, "missing_checkout_url", funnelSource);
        window.location.href = `${window.location.origin}/subscription?email=${encodeURIComponent(normalized)}&cta_slot=hero_quick_checkout&entry_variant=hero_modal_fallback`;
        return;
      }

      if (data.amount) {
        const backendAmount = Number.parseFloat(String(data.amount));
        if (
          Number.isFinite(backendAmount) &&
          Math.abs(backendAmount - PRO_PRICE_USD) > 0.0001
        ) {
          clearPendingPaymentFunnelSource();
          trackCreateOrderResult(false, "amount_mismatch", funnelSource);
          setError(
            `Pricing temporarily out of sync. Please reload or use the Get Started button below.`,
          );
          setLoading(false);
          return;
        }
      }

      trackCreateOrderResult(true, data.session_id || "session_created", funnelSource);

      const result = await openDodoOverlay({
        checkoutUrl: data.checkout_url,
        onSuccess: () => {
          window.location.href = `${window.location.origin}/old-photo-restoration?payment=success`;
        },
        onCancel: () => {
          trackPaymentCancel("dodo_overlay_dismissed", funnelSource);
          setLoading(false);
        },
      });

      // If we redirected (overlay couldn't open) the page is already
      // navigating; keep the modal in its loading state until then.
      if (result === "overlay") {
        // Keep modal open under the overlay so we can react to onCancel
        // without forcing the user to start over.
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      clearPendingPaymentFunnelSource();
      trackCreateOrderResult(false, "exception", funnelSource);
      setError(message);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={className}
        aria-haspopup="dialog"
      >
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pay $4.99 to unlock photo restoration"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0071e3]">
                  One-time payment
                </p>
                <h2 className="mt-1 text-[22px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
                  Unlock Restoration — {PRO_PRICE_TEXT}
                </h2>
                <p className="mt-1 text-[13px] text-[#6e6e73]">
                  Enter your email so the paid access stays tied to that inbox after checkout.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                disabled={loading}
                aria-label="Close"
                className="text-[#86868b] hover:text-[#1d1d1f] disabled:opacity-40"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M5.78 4.72a.75.75 0 0 0-1.06 1.06L8.94 10l-4.22 4.22a.75.75 0 1 0 1.06 1.06L10 11.06l4.22 4.22a.75.75 0 0 0 1.06-1.06L11.06 10l4.22-4.22a.75.75 0 0 0-1.06-1.06L10 8.94 5.78 4.72Z" />
                </svg>
              </button>
            </div>

            <form onSubmit={submit} className="mt-5">
              <label htmlFor="dodo-quick-email" className="block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b]">
                Email
              </label>
              <input
                ref={inputRef}
                id="dodo-quick-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={loading}
                className="mt-2 h-11 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 text-[15px] text-[#1d1d1f] outline-none transition focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/30 disabled:opacity-60"
              />

              {error && (
                <p className="mt-2 text-[12px] leading-snug text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0071e3] px-6 text-[15px] font-semibold text-white transition hover:bg-[#005bb5] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Opening secure checkout…" : `Pay ${PRO_PRICE_TEXT} & Unlock`}
              </button>
              <p className="mt-3 text-center text-[11px] leading-snug text-[#86868b]">
                Secured by DodoPayments. One-time payment, no subscription.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
