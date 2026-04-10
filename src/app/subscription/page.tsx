"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import DodoCheckoutButton from "@/components/DodoCheckoutButton";
import {
  buildPaymentFunnelQuery,
  readPaymentFunnelSource,
  trackPaymentEmailEntry,
} from "@/lib/analytics";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const EMAIL_PAYMENT_ENTRY_ENABLED =
  process.env.NEXT_PUBLIC_EMAIL_PAYMENT_ENTRY_ENABLED !== "false";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESTARTABLE_INACTIVE_STATUSES = new Set([
  "none",
  "canceled",
  "cancelled",
  "expired",
  "refunded",
]);

const getStatusLabel = (status: string) => {
  switch (status) {
    case "none":
      return "No Paid Access";
    case "trialing":
    case "on_trial":
      return "Paid Access Active";
    case "active":
      return "Paid Access Active";
    case "past_due":
      return "Billing Issue";
    case "canceled":
    case "cancelled":
      return "Access Ended";
    default:
      return status;
  }
};

interface SubscriptionData {
  email: string;
  is_active: boolean;
  status: string;
  payment_provider: string | null;
  trial_end: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
}

export default function SubscriptionPage() {
  const searchParams = useSearchParams();
  const resumeTaskId = searchParams.get("resume_task_id")?.trim() || "";
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(false);
  const [canceling, setCanceling] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [emailEntryHint, setEmailEntryHint] = useState("");

  // Pre-fill email from localStorage
  useEffect(() => {
    if (!API_BASE) {
      setError("Missing NEXT_PUBLIC_API_URL. Subscription service is unavailable.");
      return;
    }
    const emailFromQuery = searchParams.get("email")?.trim().toLowerCase() || "";
    const saved = localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
    const initialEmail = emailFromQuery || saved;
    if (initialEmail) {
      setEmail(initialEmail);
      void (async () => {
        setLoading(true);
        setError("");
        try {
          const res = await fetch(`${API_BASE}/api/payment/subscription/${encodeURIComponent(initialEmail)}`);
          const data = await res.json();
          setSub(data);
          localStorage.setItem("artimagehub_email", initialEmail);
        } catch {
          setError("Could not check subscription status. Please try again.");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [searchParams]);

  const funnelSource = readPaymentFunnelSource(searchParams);
  const normalizedEmail = email.trim().toLowerCase();
  const hasValidCheckoutEmail = EMAIL_REGEX.test(normalizedEmail);
  const shouldShowOffer = !sub || RESTARTABLE_INACTIVE_STATUSES.has(sub.status);

  useEffect(() => {
    if (!hasValidCheckoutEmail) return;
    localStorage.setItem("artimagehub_email", normalizedEmail);
  }, [hasValidCheckoutEmail, normalizedEmail]);

  async function checkSubscription(emailToCheck?: string) {
    if (!API_BASE) {
      setError("Missing NEXT_PUBLIC_API_URL. Subscription service is unavailable.");
      return;
    }
    const e = (emailToCheck || email).toLowerCase().trim();
    if (!e) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/payment/subscription/${encodeURIComponent(e)}`);
      const data = await res.json();
      setSub(data);
      localStorage.setItem("artimagehub_email", e);
    } catch {
      setError("Could not check subscription status. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCancel() {
    if (!API_BASE) {
      setError("Missing NEXT_PUBLIC_API_URL. Subscription service is unavailable.");
      return;
    }
    if (!sub?.email || !confirm("Are you sure you want to cancel? You'll keep access until the end of your current period.")) {
      return;
    }

    setCanceling(true);
    setMessage("");
    try {
      const res = await fetch(`${API_BASE}/api/payment/cancel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sub.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        // Refresh subscription data
        await checkSubscription(sub.email);
      } else {
        setError(data.detail || "Could not cancel subscription.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setCanceling(false);
    }
  }

  async function handleManagePortal() {
    if (!API_BASE) {
      setError("Missing NEXT_PUBLIC_API_URL. Subscription service is unavailable.");
      return;
    }
    if (!sub?.email) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/payment/create-portal-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sub.email }),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError(data.detail || "Could not open billing portal.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (iso: string | null) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSendPaymentLinkEmail = () => {
    const targetEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(targetEmail)) {
      setEmailEntryHint("Enter a valid email first.");
      return;
    }

    localStorage.setItem("artimagehub_email", targetEmail);
    const paymentParams = new URLSearchParams({ email: targetEmail });
    const funnelQuery = buildPaymentFunnelQuery(funnelSource);
    if (funnelQuery) {
      new URLSearchParams(funnelQuery).forEach((value, key) => {
        paymentParams.set(key, value);
      });
    }
    if (resumeTaskId) {
      paymentParams.set("resume_task_id", resumeTaskId);
    }
    const paymentUrl = `${window.location.origin}/subscription?${paymentParams.toString()}`;
    const subject = encodeURIComponent("Your ColorByte payment link");
    const body = encodeURIComponent(
      `Use this checkout link to unlock upload, processing access, and HD download rights (${PRO_PRICE_TEXT}):\n${paymentUrl}\n`
    );
    trackPaymentEmailEntry("subscription_page", "manual", funnelSource);
    setEmailEntryHint(`Prepared in mail app for ${targetEmail}.`);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* HD original offer - show before subscription check */}
      {shouldShowOffer && (
        <div id="checkout-offer" className="mb-12 scroll-mt-24">
          <div className="text-center mb-8">
            <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Unlock Upload + HD Access — {PRO_PRICE_TEXT}
            </h1>
            <p className="mt-3 text-[17px] text-[#6e6e73]">
              Pay first, then return to the tool and upload with the same email so your purchase and HD download access stay connected to that checkout.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-[#6e6e73]">
              {[
                "Unlock original-quality downloads immediately",
                "No watermark on paid exports",
                "One payment, no renewal surprise",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-md mx-auto">
            {/* HD original checkout */}
            <div className="relative rounded-2xl bg-[#1d1d1f] p-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-[#0071e3] px-3 py-0.5 text-[11px] font-semibold text-white uppercase tracking-[0.06em]">
                  One-time access
                </span>
              </div>

              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white/50">HD Original</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[32px] font-bold tracking-[-0.04em] text-white">{PRO_PRICE_TEXT}</span>
              </div>
              <p className="mt-1 text-[12px] text-[#0071e3] font-medium">Single payment. No subscription.</p>
              <p className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-[12px] leading-[1.6] text-white/80">
                Best for people restoring family archives, memorial photos, or anything they want to print, keep, or share without a watermark.
              </p>

              <ul className="mt-5 space-y-2.5">
                {[
                  "Upload + processing access",
                  "HD original download",
                  "No watermark",
                  "One-time payment",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-white">
                    <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl bg-white/5 p-4 text-left">
                <label
                  htmlFor="checkout-email"
                  className="block text-[12px] font-semibold uppercase tracking-[0.06em] text-white/70"
                >
                  Email for activation and receipt
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="mt-2 h-11 w-full rounded-xl border border-white/15 bg-white px-3 text-[14px] text-[#1d1d1f] outline-none transition focus:border-[#0071e3]"
                />
                <p className="mt-2 text-[12px] leading-[1.5] text-white/70">
                  {hasValidCheckoutEmail
                    ? "This email unlocks upload, processing access, and the paid download path after checkout."
                    : "Enter a valid email first. DodoPayments checkout stays locked until we know which email should hold the paid access."}
                </p>
              </div>

              <DodoCheckoutButton
                checkoutEmail={email}
                resumeTaskId={resumeTaskId || undefined}
              />

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-[12px] text-white/75">
                <p className="font-medium text-white">What happens after payment</p>
                <ul className="mt-2 space-y-1.5">
                  <li>1. The same email unlocks upload and processing entry</li>
                  <li>2. You return to the tool in the allowed pre-upload state</li>
                  <li>3. If processing succeeds, HD download stays tied to that email</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[12px] text-[#6e6e73]">
            One-time payment ({PRO_PRICE_TEXT}) · Pay first, then upload · Secure payment via DodoPayments
          </p>

          {EMAIL_PAYMENT_ENTRY_ENABLED && (
            <div className="mt-4 max-w-md mx-auto rounded-xl border border-[#d2d2d7]/60 bg-white p-3">
              <p className="text-center text-[12px] font-medium text-[#1d1d1f]">
                Send this checkout link to yourself
              </p>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-9 flex-1 rounded-lg border border-[#d2d2d7] px-2.5 text-[12px] outline-none focus:border-[#0071e3]"
                />
                <button
                  type="button"
                  onClick={handleSendPaymentLinkEmail}
                  className="h-9 rounded-lg bg-[#1d1d1f] px-3 text-[12px] font-medium text-white hover:bg-[#2d2d2f]"
                >
                  Send
                </button>
              </div>
              <p className="mt-1.5 text-center text-[11px] text-[#6e6e73]">
                {emailEntryHint || "Useful if you want to finish payment on another device later."}
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
            {[
              {
                title: "Restore more than one photo",
                desc: "Made for users with albums, family boxes, and repeated restoration jobs.",
              },
              {
                title: "Download-ready output",
                desc: "Best fit when you want the clean original-quality file for print or archive.",
              },
              {
                title: "No recurring charge pressure",
                desc: "One payment closes the decision now instead of adding another subscription.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#d2d2d7]/60 bg-white p-4">
                <p className="text-[13px] font-semibold text-[#1d1d1f]">{item.title}</p>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-[#6e6e73]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-[#d2d2d7]/40 text-center">
            <p className="text-[14px] text-[#6e6e73] mb-3">
              Already purchased? Check your paid access below
            </p>
          </div>
        </div>
      )}

      {/* Subscription Management */}
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold">{sub ? "Paid Access Details" : "Check Paid Access"}</h2>

        {/* Email lookup */}
        {!sub && (
        <div className="mt-6">
          <label className="block text-sm font-medium" htmlFor="email">
            Enter your email to check paid access
          </label>
          <div className="mt-2 flex gap-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkSubscription()}
              placeholder="you@example.com"
              className="h-10 flex-1 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => checkSubscription()}
              disabled={loading || !email}
              className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Check"}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {message && (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
          {message}
        </div>
      )}

      {/* Subscription details */}
      {sub && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{sub.email}</p>
                <div className="mt-1 flex items-center gap-2">
                  {sub.is_active ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : sub.status === "past_due" ? (
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className="text-lg font-semibold capitalize">
                    {getStatusLabel(sub.status)}
                  </span>
                </div>
              </div>
              {sub.is_active && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Active
                </span>
              )}
            </div>

            {sub.status === "on_trial" && sub.trial_end && (
              <div className="mt-4 rounded-lg bg-muted/50 p-3">
                <p className="text-sm">
                  <strong>Legacy access window</strong> until {formatDate(sub.trial_end)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  This account still has active access, but new purchases use the pay-first checkout flow.
                </p>
              </div>
            )}

            {sub.status === "active" && sub.current_period_end && (
              <div className="mt-4 rounded-lg bg-muted/50 p-3">
                <p className="text-sm">
                  <strong>Access valid until:</strong> {formatDate(sub.current_period_end)}
                </p>
                <p className="text-sm">
                  <strong>Plan:</strong> HD Original ($4.99 one-time payment)
                </p>
              </div>
            )}

            {sub.cancel_at_period_end && (
              <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                <p className="text-sm text-yellow-800">
                  Your access will end on {formatDate(sub.current_period_end || sub.trial_end)}.
                  You&apos;ll keep access until then.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {sub.is_active && sub.payment_provider === "dodo" && (
              <div className="w-full rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-800">
                <strong>Paid via DodoPayments</strong> — One-time payment. No recurring billing.
                <br />
                <span className="text-xs text-green-600">Need help? Contact support@artimagehub.com</span>
              </div>
            )}

            {sub.is_active && sub.payment_provider !== "dodo" && (
              <button
                onClick={handleManagePortal}
                disabled={loading}
                className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Manage Subscription
              </button>
            )}

            {sub.is_active && sub.payment_provider !== "dodo" && !sub.cancel_at_period_end && (
              <button
                onClick={handleCancel}
                disabled={canceling}
                className="inline-flex h-10 items-center rounded-lg border border-red-200 px-4 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                {canceling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Cancel Subscription
              </button>
            )}

            {RESTARTABLE_INACTIVE_STATUSES.has(sub.status) ? (
              <Link
                href="#checkout-offer"
                className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground"
              >
                Unlock Upload Access
              </Link>
            ) : null}

            <button
              onClick={() => { setSub(null); setEmail(""); localStorage.removeItem("artimagehub_email"); }}
              className="inline-flex h-10 items-center rounded-lg border px-4 text-sm font-medium hover:bg-muted"
            >
              Check Another Email
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
