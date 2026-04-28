"use client";

import { useEffect, useState, type ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

// SSR renders the content fully expanded so Google's mobile-first indexer
// sees everything. After hydration on a narrow viewport, we collapse it
// to a "Show {title}" toggle so the mobile fold + total page height stay
// tight without losing crawlable content. Desktop never collapses.
export default function CollapsibleSection({ title, children, className = "" }: Props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => {
      // Only auto-collapse the first time we see a mobile viewport;
      // user-initiated open state should not be overridden on resize.
      if (mq.matches) setOpen(false);
      else setOpen(true);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full sm:hidden flex items-center justify-center gap-2 py-4 text-[14px] font-semibold text-[#0071e3] hover:text-[#0077ed] active:scale-[0.98] transition"
      >
        <span>
          {open ? "Hide" : "Show"} {title}
        </span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={open ? "block" : "hidden sm:block"}>{children}</div>
    </section>
  );
}
