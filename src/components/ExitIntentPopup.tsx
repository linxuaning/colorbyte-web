"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Generate realistic "photos restored today" count
function getTodayCount(): number {
  const baseCount = 1247;
  const hourOfDay = new Date().getHours();
  const variation = Math.floor(Math.random() * 50) + hourOfDay * 12;
  return baseCount + variation;
}

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [todayCount, setTodayCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    setTodayCount(getTodayCount());
  }, []);

  // Countdown timer for urgency
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

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

    // Also trigger on mobile back button attempt (page visibility)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !hasShown) {
        // Will show when they come back
        setHasShown(true);
        localStorage.setItem("exitIntentShown", Date.now().toString());
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
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

          {/* Urgency Banner */}
          <div className="mb-4 -mt-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-center">
            <div className="flex items-center justify-center gap-2 text-white text-[13px] font-semibold">
              <svg className="h-4 w-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Special offer expires in: </span>
              <span className="font-mono font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5E3C]/10">
              <svg className="h-7 w-7 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-[24px] font-800 text-center text-[#2c2416] leading-tight mb-2">
            Wait! Your <span className="text-[#8B5E3C]">3 free photos</span><br />
            are waiting
          </h2>

          {/* Social Proof */}
          <p className="text-center text-[13px] text-[#6b5344] mb-4">
            <span className="font-semibold text-[#8B5E3C]">{todayCount.toLocaleString()}</span> photos restored today
          </p>

          {/* Description */}
          <p className="font-lora text-[14px] text-center text-[#6b5344] leading-relaxed mb-5">
            See why thousands trust us with their precious memories. No signup, no credit card — just results in 30 seconds.
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
            className="group relative inline-flex w-full h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#a67c52] px-6 font-lora text-[15px] font-600 text-[#faf8f4] hover:from-[#7a5234] hover:to-[#956d45] hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Claim My Free Photos Now
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>

          {/* Trust Badge */}
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#6b5344]">
            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure · Private · Photos deleted in 24h</span>
          </div>

          {/* No thanks */}
          <button
            onClick={handleClose}
            className="mt-2 w-full font-lora text-[12px] text-[#8B7355] hover:text-[#6b5344] transition-colors"
          >
            No thanks, I'll miss this offer
          </button>
        </div>
      </div>
    </>
  );
}
