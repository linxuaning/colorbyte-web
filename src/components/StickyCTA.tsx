"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 800px down
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom duration-300">
      {/* Gradient fade */}
      <div className="absolute bottom-full left-0 right-0 h-8 bg-gradient-to-t from-[#faf8f4] to-transparent pointer-events-none" />

      <div className="bg-[#faf8f4]/95 backdrop-blur-xl border-t border-[#d4bc91]/40 shadow-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Message */}
            <div className="text-center sm:text-left">
              <p className="font-playfair text-[18px] font-700 text-[#2c2416]">
                Ready to restore your memories?
              </p>
              <p className="font-lora text-[13px] text-[#6b5344] mt-0.5">
                <span className="font-600 text-[#8B5E3C]">3 free photos</span> · No signup · Results in 30 seconds
              </p>
            </div>

            {/* Right: CTA */}
            <Link
              href="/old-photo-restoration"
              className="group inline-flex h-12 items-center rounded-full bg-[#8B5E3C] px-8 font-lora text-[16px] font-600 text-[#faf8f4] hover:bg-[#7a5234] hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/25 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Start Free Now
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
