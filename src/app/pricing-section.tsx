"use client";

import { useState } from "react";
import Link from "next/link";

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
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6e6e73]">
          Pricing
        </p>
        <h2 className="mt-3 text-center text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
          Simple, honest pricing.
        </h2>
        <p className="mt-3 text-center text-[17px] text-[#6e6e73]">
          Start free. Upgrade when you need more.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] p-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">Free</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-[#1d1d1f]">$0</span>
              <span className="text-[15px] text-[#6e6e73]">/ month</span>
            </div>
            <p className="mt-2 text-[13px] text-[#6e6e73]">No credit card required.</p>

            <ul className="mt-7 space-y-3">
              {[
                "3 restorations per day",
                "720p download quality",
                "Small watermark",
                "All AI features",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#1d1d1f]">
                  <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/old-photo-restoration"
              className="mt-8 flex h-10 items-center justify-center rounded-full border border-[#d2d2d7] bg-white text-[14px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl bg-[#1d1d1f] p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-[#0071e3] px-3 py-0.5 text-[11px] font-semibold text-white uppercase tracking-[0.06em]">
                Most Popular
              </span>
            </div>

            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white/50">Pro</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-white">$9.9</span>
              <span className="text-[15px] text-white/50">/ month</span>
            </div>
            <p className="mt-2 text-[13px] text-[#0071e3] font-medium">7-day free trial included</p>

            <ul className="mt-7 space-y-3">
              {[
                "Unlimited restorations",
                "Original quality download",
                "No watermark",
                "Priority processing",
                "All future features",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[14px] text-white">
                  <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* Email + CTA */}
            <div className="mt-8 space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleStartTrial()}
                placeholder="Enter your email"
                className="h-10 w-full rounded-xl bg-white/10 px-4 text-[14px] text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-[#0071e3] transition"
              />
              <button
                onClick={handleStartTrial}
                disabled={loading}
                className="flex h-10 w-full items-center justify-center rounded-full bg-[#0071e3] text-[14px] font-medium text-white hover:bg-[#0077ed] transition-colors disabled:opacity-60"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  "Start Free Trial"
                )}
              </button>
              {error && <p className="text-[12px] text-red-400">{error}</p>}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] text-[#6e6e73]">
          No charge during trial · Cancel anytime · Secure payment via LemonSqueezy
        </p>
      </div>
    </section>
  );
}
