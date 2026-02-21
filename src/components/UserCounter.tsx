"use client";

import { useEffect, useState } from "react";

export default function UserCounter() {
  const [count, setCount] = useState(10000);
  const [isIncrementing, setIsIncrementing] = useState(false);

  useEffect(() => {
    // Increment every 8-15 seconds to simulate real usage
    const interval = setInterval(() => {
      setIsIncrementing(true);
      setCount((prev) => prev + 1);

      setTimeout(() => setIsIncrementing(false), 600);
    }, Math.random() * 7000 + 8000); // Random between 8-15 seconds

    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formattedCount = count.toLocaleString();

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-[#d4bc91]/40 bg-white/90 px-4 py-2 shadow-sm">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8B5E3C]/10">
        <svg
          className={`h-3.5 w-3.5 text-[#8B5E3C] transition-transform duration-300 ${
            isIncrementing ? "scale-125" : "scale-100"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={`font-lora text-[18px] font-700 text-[#2c2416] tabular-nums transition-all duration-300 ${
            isIncrementing ? "scale-110 text-[#8B5E3C]" : "scale-100"
          }`}
        >
          {formattedCount}
        </span>
        <span className="font-lora text-[11px] text-[#6b5344] leading-none">
          photos restored
        </span>
      </div>
      <div
        className={`ml-1 flex h-2 w-2 transition-opacity duration-300 ${
          isIncrementing ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#8B5E3C] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5E3C]"></span>
      </div>
    </div>
  );
}
