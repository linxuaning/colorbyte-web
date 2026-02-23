"use client";

import { useEffect, useState } from "react";

const SAMPLE_ACTIVITIES = [
  { location: "San Francisco", action: "restored a 1940s family photo" },
  { location: "New York", action: "colorized a wedding photo" },
  { location: "London", action: "enhanced a vintage portrait" },
  { location: "Tokyo", action: "restored a damaged photograph" },
  { location: "Paris", action: "colorized grandmother's photo" },
  { location: "Sydney", action: "restored a torn family picture" },
  { location: "Berlin", action: "enhanced an old graduation photo" },
  { location: "Toronto", action: "restored a faded memory" },
  { location: "Amsterdam", action: "colorized a black & white photo" },
  { location: "Singapore", action: "restored a 1950s photograph" },
  { location: "Mumbai", action: "enhanced a childhood photo" },
  { location: "Seoul", action: "restored an antique portrait" },
];

export default function LiveActivity() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % SAMPLE_ACTIVITIES.length);
        setIsVisible(true);
      }, 300);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const activity = SAMPLE_ACTIVITIES[currentActivity];

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-[#d4bc91]/40 bg-white/90 px-3 py-2 shadow-sm">
      {/* Live indicator */}
      <div className="flex items-center gap-1.5">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <span className="font-lora text-[11px] font-600 text-green-700 uppercase tracking-wide">Live</span>
      </div>

      {/* Activity text */}
      <div
        className={`font-lora text-[13px] text-[#6b5344] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-600 text-[#2c2416]">{activity.location}</span> {activity.action}
      </div>
    </div>
  );
}
