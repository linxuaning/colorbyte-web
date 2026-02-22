import Link from "next/link";

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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {/* Free Trial */}
          <div className="rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] p-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">Free Trial</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-[44px] font-bold tracking-[-0.04em] text-[#1d1d1f]">$0</span>
            </div>
            <p className="mt-2 text-[13px] text-[#6e6e73]">Test before you buy</p>

            <ul className="mt-7 space-y-3">
              {[
                "3 photos to try",
                "See full AI quality",
                "No signup required",
                "All AI features included",
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

          {/* Pro Lifetime */}
          <div className="relative rounded-2xl bg-[#1d1d1f] p-8">
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
            <p className="mt-1 text-[12px] text-[#ff8e53] font-medium">Limited time offer — save $20</p>

            <ul className="mt-7 space-y-3">
              {[
                "Unlimited restorations",
                "Original quality download",
                "No watermark",
                "Lifetime access",
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
              className="mt-8 flex h-10 items-center justify-center gap-2 rounded-full bg-[#0071e3] text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              Get Pro Lifetime — Try Free First
            </Link>
            <p className="mt-3 text-center text-[11px] text-white/40">
              Try free, then upgrade anytime
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] text-[#6e6e73]">
          Try 3 photos free · Upgrade for unlimited lifetime access · No subscription required
        </p>
      </div>
    </section>
  );
}
