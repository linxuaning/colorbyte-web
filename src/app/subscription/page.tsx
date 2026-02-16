"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface SubscriptionData {
  email: string;
  is_active: boolean;
  status: string;
  trial_end: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
}

export default function SubscriptionPage() {
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(false);
  const [canceling, setCanceling] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Pre-fill email from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("artimagehub_email");
    if (saved) {
      setEmail(saved);
      checkSubscription(saved);
    }
  }, []);

  async function checkSubscription(emailToCheck?: string) {
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

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="text-2xl font-bold">Manage Subscription</h1>

      {/* Email lookup */}
      {!sub && (
        <div className="mt-6">
          <label className="block text-sm font-medium" htmlFor="email">
            Enter your email to check subscription
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
                    {sub.status === "none" ? "No Subscription" : sub.status}
                  </span>
                </div>
              </div>
              {sub.is_active && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Active
                </span>
              )}
            </div>

            {sub.status === "trialing" && sub.trial_end && (
              <div className="mt-4 rounded-lg bg-muted/50 p-3">
                <p className="text-sm">
                  <strong>Free trial</strong> until {formatDate(sub.trial_end)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  You won&apos;t be charged until your trial ends.
                </p>
              </div>
            )}

            {sub.status === "active" && sub.current_period_end && (
              <div className="mt-4 rounded-lg bg-muted/50 p-3">
                <p className="text-sm">
                  <strong>Next billing date:</strong> {formatDate(sub.current_period_end)}
                </p>
                <p className="text-sm">
                  <strong>Plan:</strong> $9.90/month
                </p>
              </div>
            )}

            {sub.cancel_at_period_end && (
              <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                <p className="text-sm text-yellow-800">
                  Your subscription will end on {formatDate(sub.current_period_end || sub.trial_end)}.
                  You&apos;ll keep access until then.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {sub.is_active && (
              <button
                onClick={handleManagePortal}
                disabled={loading}
                className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Manage in Stripe Portal
              </button>
            )}

            {sub.is_active && !sub.cancel_at_period_end && (
              <button
                onClick={handleCancel}
                disabled={canceling}
                className="inline-flex h-10 items-center rounded-lg border border-red-200 px-4 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                {canceling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Cancel Subscription
              </button>
            )}

            {sub.status === "none" || sub.status === "canceled" ? (
              <Link
                href="/#pricing"
                className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground"
              >
                Start Free Trial
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
  );
}
