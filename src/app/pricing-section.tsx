"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function PricingSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleStartTrial() {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/payment/start-trial`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.checkout_url) {
        // Save email and redirect to Stripe Checkout
        localStorage.setItem("artimagehub_email", email);
        window.location.href = data.checkout_url;
      } else if (res.status === 409) {
        setError("You already have an active subscription.");
      } else if (res.status === 503) {
        setError("Payment system is being set up. Please try again soon.");
      } else {
        setError(data.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect to payment service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="pricing" className="border-t py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Simple Pricing
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
          {/* Free */}
          <div className="rounded-xl border p-8">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-2 text-3xl font-bold">$0</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> 3 photos/day
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> 720p download
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> Small watermark
              </li>
            </ul>
            <Link
              href="/old-photo-restoration"
              className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg border font-medium transition-colors hover:bg-muted"
            >
              Try Free Now
            </Link>
          </div>

          {/* Pro */}
          <div className="relative rounded-xl border-2 border-primary p-8">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-2 text-3xl font-bold">
              $9.9
              <span className="text-base font-normal text-muted-foreground">
                /month
              </span>
            </p>
            <p className="mt-1 text-sm text-green-600 font-medium">
              7-day free trial
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> Unlimited
                downloads
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> Original
                quality
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> No watermark
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> Priority
                processing
              </li>
            </ul>

            {/* Email input + trial button */}
            <div className="mt-6 space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleStartTrial()}
                placeholder="Enter your email"
                className="h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleStartTrial}
                disabled={loading}
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Start 7-Day Free Trial
              </button>
              {error && (
                <p className="text-xs text-red-600">{error}</p>
              )}
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          No charge during trial &middot; Cancel anytime &middot; Secure payment via Stripe
        </p>
      </div>
    </section>
  );
}
