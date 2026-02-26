"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Countdown timer for Launch Special (ends in 7 days from now)
function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set end date to 7 days from first visit (stored in localStorage)
    const getEndDate = () => {
      const stored = localStorage.getItem("launch_special_end");
      if (stored) return new Date(stored);

      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 7); // 7 days from now
      localStorage.setItem("launch_special_end", endDate.toISOString());
      return endDate;
    };

    const calculateTimeLeft = () => {
      const end = getEndDate();
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-white/70">
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
      <span>Offer ends in:</span>
      <span className="font-mono text-white font-semibold">
        {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m
      </span>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6e6e73]">
          Pricing
        </p>
        <h2 className="mt-3 text-center text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
          Pro Lifetime Access
        </h2>
        <p className="mt-3 text-center text-[17px] text-[#6e6e73]">
          Pay once, use forever. No subscription.
        </p>

        <div className="mt-12 max-w-md mx-auto">
          {/* Pro Lifetime */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] p-8 shadow-2xl ring-2 ring-[#0071e3]/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="rounded-full bg-[#0071e3] px-3 py-0.5 text-[11px] font-semibold text-white uppercase tracking-[0.06em]">
                Best Value
              </span>
              <span className="rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] px-3 py-0.5 text-[11px] font-semibold text-white uppercase tracking-[0.06em] shadow-lg">
                Launch Special - 40% Off
              </span>
            </div>

            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white/50">Pro Lifetime</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-white">$29.9</span>
              <span className="text-[24px] font-medium tracking-[-0.02em] text-white/40 line-through">$49.9</span>
            </div>
            <p className="mt-2 text-[13px] text-[#0071e3] font-medium">One-time payment, lifetime access</p>

            {/* Countdown Timer */}
            <div className="mt-2">
              <LaunchCountdown />
            </div>

            <ul className="mt-7 space-y-3">
              {[
                "Unlimited restorations",
                "Original quality download",
                "No watermark",
                "Lifetime access — pay once, use forever",
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

            <Link
              href="/subscription"
              className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0071e3] to-[#0084ff] text-[15px] font-bold text-white hover:from-[#0077ed] hover:to-[#0090ff] active:scale-[0.96] transition-all shadow-xl hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                Get Lifetime Access →
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </Link>

            {/* 30-Day Money-Back Guarantee */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/60">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Value Comparison */}
        <div className="mt-8 mx-auto max-w-2xl rounded-xl border border-[#d2d2d7]/40 bg-gradient-to-br from-[#f5f5f7] to-white p-6">
          <h3 className="text-center text-[15px] font-semibold text-[#1d1d1f] mb-4">
            💰 Why Pro Lifetime Saves You Money
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
            <div className="bg-white rounded-lg p-4 border border-red-100">
              <p className="font-semibold text-red-600 mb-2">Other Tools (Monthly Subscription)</p>
              <p className="text-[#6e6e73]">Remini: $9.99/month</p>
              <p className="text-[#6e6e73] mt-1">= <span className="font-bold text-red-600">$119.88/year</span></p>
              <p className="text-[#6e6e73] mt-1">= <span className="font-bold text-red-600">$599.40/5 years</span></p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3]/5 to-green-50 rounded-lg p-4 border border-[#0071e3]/20">
              <p className="font-semibold text-[#0071e3] mb-2">ArtImageHub (One-Time)</p>
              <p className="text-[#1d1d1f] font-bold">$29.9 once</p>
              <p className="text-green-600 font-bold mt-1">= $29.9 forever ✓</p>
              <p className="text-green-600 font-bold mt-1">Save $569.50 over 5 years!</p>
            </div>
          </div>
          <p className="mt-4 text-center text-[12px] text-[#6e6e73]">
            Pay once, use forever. No monthly bills, no surprises.
          </p>
        </div>

        <p className="mt-6 text-center text-[12px] text-[#6e6e73]">
          One-time payment · Unlimited lifetime access · No subscription required
        </p>
      </div>
    </section>
  );
}
