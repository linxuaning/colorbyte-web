"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-r from-amber-500 to-orange-500 shadow-2xl transform transition-all duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={scrollToUpload}
        className="block w-full text-center py-4 bg-white text-amber-700 font-bold rounded-lg text-lg shadow-lg active:scale-95 transition-transform"
      >
        Try 3 Photos FREE →
      </button>
    </div>
  );
}
