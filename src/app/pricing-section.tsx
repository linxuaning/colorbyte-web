"use client";

import Link from "next/link";

const BMC_PAGE_URL = "https://buymeacoffee.com/artimagehub";

export default function PricingSection() {

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

        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] p-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">Free</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-[#1d1d1f]">$0</span>
            </div>
            <p className="mt-2 text-[13px] text-[#6e6e73]">Try it out</p>

            <ul className="mt-6 space-y-2.5">
              {[
                "3 per day",
                "720p quality",
                "Small watermark",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-[#1d1d1f]">
                  <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/old-photo-restoration"
              className="mt-6 flex h-10 items-center justify-center rounded-full border border-[#d2d2d7] bg-white text-[14px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Monthly */}
          <div className="relative rounded-2xl bg-[#1d1d1f] p-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-[#0071e3] px-3 py-0.5 text-[11px] font-semibold text-white uppercase tracking-[0.06em]">
                Most Popular
              </span>
            </div>

            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white/50">Pro Monthly</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-white">$9.9</span>
              <span className="text-[15px] text-white/50">/ month</span>
            </div>
            <p className="mt-2 text-[13px] text-[#0071e3] font-medium">Cancel anytime</p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Unlimited restorations",
                "Original quality",
                "No watermark",
                "Priority processing",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-white">
                  <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={BMC_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-10 items-center justify-center rounded-full bg-[#0071e3] text-[14px] font-medium text-white hover:bg-[#0077ed] transition-colors"
            >
              Subscribe Monthly
            </a>
          </div>

          {/* Pro Lifetime */}
          <div className="rounded-2xl border-2 border-[#0071e3] bg-white p-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">Pro Lifetime</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-[#1d1d1f]">$29.9</span>
            </div>
            <p className="mt-2 text-[13px] text-[#0071e3] font-medium">One-time payment</p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Unlimited restorations",
                "Original quality",
                "No watermark",
                "Lifetime access",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-[#1d1d1f]">
                  <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={BMC_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-10 items-center justify-center rounded-full bg-[#0071e3] text-[14px] font-medium text-white hover:bg-[#0077ed] transition-colors"
            >
              Buy Lifetime
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] text-[#6e6e73]">
          Cancel anytime · Secure payment via Buy Me a Coffee
        </p>
      </div>
    </section>
  );
}
