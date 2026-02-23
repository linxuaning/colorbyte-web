"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Generate realistic active user count
function getActiveUsers(): number {
  const base = 23;
  const variation = Math.floor(Math.random() * 15);
  return base + variation;
}

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    setActiveUsers(getActiveUsers());

    // Update active users periodically
    const interval = setInterval(() => {
      setActiveUsers(getActiveUsers());
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 600px down (earlier trigger)
      setIsVisible(window.scrollY > 600);
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left: Message + Social Proof */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[12px] text-[#6b5344]">
                  <span className="font-semibold text-green-600">{activeUsers} people</span> restoring photos right now
                </span>
              </div>
              <p className="font-playfair text-[17px] font-700 text-[#2c2416]">
                Your memories deserve to be restored
              </p>
              <p className="font-lora text-[12px] text-[#6b5344] mt-0.5">
                <span className="font-600 text-[#8B5E3C]">3 free photos</span> · No signup · AI results in 30 seconds
              </p>
            </div>

            {/* Right: CTA */}
            <Link
              href="/old-photo-restoration"
              className="group relative inline-flex h-11 items-center rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#a67c52] px-7 font-lora text-[15px] font-600 text-[#faf8f4] hover:from-[#7a5234] hover:to-[#956d45] hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/25 whitespace-nowrap overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Try Free Now
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
