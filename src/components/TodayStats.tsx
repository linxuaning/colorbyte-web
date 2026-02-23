"use client";

import { useEffect, useState } from "react";

export default function TodayStats() {
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    // Simulate realistic daily count (reset at midnight)
    const now = new Date();
    const secondsSinceMidnight =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    // Calculate base count based on time of day (0-500 photos per day)
    const progressThroughDay = secondsSinceMidnight / 86400; // 0 to 1
    const baseCount = Math.floor(progressThroughDay * 500);

    setTodayCount(baseCount);

    // Increment periodically to show activity
    const interval = setInterval(() => {
      setTodayCount((prev) => prev + 1);
    }, Math.random() * 20000 + 40000); // Every 40-60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#8B5E3C]/5 px-3 py-2 border border-[#8B5E3C]/20">
      <svg className="h-4 w-4 text-[#8B5E3C]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
      <span className="font-lora text-[13px] text-[#6b5344]">
        <span className="font-700 text-[#2c2416] tabular-nums">{todayCount}</span> photos restored today
      </span>
    </div>
  );
}
