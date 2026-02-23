"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was shown in last 24 hours
    const lastShown = localStorage.getItem("exitIntentShown");
    if (lastShown) {
      const timeSince = Date.now() - parseInt(lastShown);
      if (timeSince < 24 * 60 * 60 * 1000) {
        setHasShown(true);
        return;
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect exit intent: mouse moving to top of viewport
      if (e.clientY <= 10 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem("exitIntentShown", Date.now().toString());
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md animate-in zoom-in-95 duration-200">
        <div className="relative rounded-2xl border border-[#d4bc91]/60 bg-[#faf8f4] p-8 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f3ede3] transition-colors text-[#6b5344]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Icon */}
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8B5E3C]/10">
              <svg className="h-8 w-8 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-[26px] font-800 text-center text-[#2c2416] leading-tight mb-3">
            Wait! Don't forget your<br />
            <span className="text-[#8B5E3C]">free restoration</span>
          </h2>

          {/* Description */}
          <p className="font-lora text-[15px] text-center text-[#6b5344] leading-relaxed mb-6">
            Try 3 photos completely free — no signup, no credit card. See the AI quality for yourself in 30 seconds.
          </p>

          {/* Benefits */}
          <div className="mb-6 space-y-2">
            {[
              "3 free photos to test quality",
              "Results in 30 seconds",
              "No signup or download required",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <svg className="h-5 w-5 text-[#8B5E3C] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-lora text-[14px] text-[#2c2416]">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/old-photo-restoration"
            onClick={handleClose}
            className="group inline-flex w-full h-12 items-center justify-center rounded-full bg-[#8B5E3C] px-6 font-lora text-[16px] font-600 text-[#faf8f4] hover:bg-[#7a5234] hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/25"
          >
            <span className="flex items-center gap-2">
              Try Free Now — Takes 30 Seconds
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          {/* No thanks */}
          <button
            onClick={handleClose}
            className="mt-3 w-full font-lora text-[13px] text-[#8B7355] hover:text-[#6b5344] transition-colors"
          >
            No thanks, I'll come back later
          </button>
        </div>
      </div>
    </>
  );
}
