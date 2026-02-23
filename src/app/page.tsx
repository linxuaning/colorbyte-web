import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "./pricing-section";
import UserCounter from "@/components/UserCounter";
import LiveActivity from "@/components/LiveActivity";
import TodayStats from "@/components/TodayStats";

export const metadata: Metadata = {
  title: "ArtImageHub — AI Photo Restoration, Enhancement & Colorization",
  description: "Restore old photos, enhance image quality, and colorize black & white pictures with AI. Free online tool — no signup required. Results in 30 seconds.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ArtImageHub",
    title: "ArtImageHub — AI Photo Restoration Online Free",
    description: "Restore old photos, enhance image quality, and colorize black & white pictures with AI. Free — no signup required.",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "AI photo restoration before and after comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtImageHub — AI Photo Restoration Free",
    description: "Restore old, damaged photos with AI in seconds. Free online tool.",
    images: ["/blog/before-after-examples.webp"],
  },
};

// JSON-LD structured data
const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Restoration",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.artimagehub.com/old-photo-restoration",
  description:
    "AI-powered photo restoration tool that fixes damaged photos, enhances faces, increases resolution up to 4×, and colorizes black & white images in seconds.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2400",
  },
  featureList: [
    "AI Face Enhancement",
    "4× Super Resolution",
    "Black & White Colorization",
    "Scratch & Damage Repair",
    "Instant Results in 30 Seconds",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What image formats do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub supports JPG, PNG, and WEBP formats — up to 20 MB per file.",
      },
    },
    {
      "@type": "Question",
      name: "How long does AI photo restoration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most photos are restored in 15–30 seconds. Complex images may take up to a minute.",
      },
    },
    {
      "@type": "Question",
      name: "Is my photo data private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All uploaded photos are automatically deleted after 24 hours. We never store, share, or train on your images.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Free Trial and Pro Lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free Trial gives you 3 photos to test the AI quality before buying. Pro Lifetime is a one-time payment of $29.9 for unlimited photo restorations forever — no subscription, no recurring charges.",
      },
    },
    {
      "@type": "Question",
      name: "How does the pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Try 3 photos completely free to test the quality. If you like the results, upgrade to Pro Lifetime for $29.9 (one-time payment) and restore unlimited photos forever. No monthly subscription, no hidden fees.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#faf8f4] pt-20 pb-0 sm:pt-28">
        {/* Warm vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,188,145,0.25),transparent)]" />
        {/* Fine grain texture overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22/%3E%3C/svg%3E')]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Two-column editorial layout */}
          <div className="grid lg:grid-cols-[1fr_auto] lg:gap-16 items-end">
            {/* Left: Text content */}
            <div className="pb-16 lg:pb-20 max-w-3xl">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-[#8B5E3C]" aria-hidden="true" />
                <span className="font-lora text-[13px] uppercase tracking-[0.14em] text-[#8B5E3C] font-600">
                  Since 2024 · AI Restoration Studio
                </span>
              </div>

              {/* H1 — large editorial headline */}
              <h1 className="font-playfair text-[52px] sm:text-[68px] lg:text-[82px] font-800 leading-[0.95] tracking-[-0.025em] text-[#2c2416]">
                Breathe life into{" "}
                <span className="italic text-[#8B5E3C]">faded</span>
                <br />
                memories with
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">AI photo restoration</span>
                  {/* Underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 600 6"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 3 Q150 0 300 3 Q450 6 600 3"
                      stroke="#D4A96A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                .
              </h1>

              {/* Subheadline */}
              <p className="mt-10 max-w-xl font-lora text-[18px] sm:text-[20px] leading-[1.65] text-[#6b5344]">
                Upload a damaged, faded, or black&#160;&amp;&#160;white photo — our AI restores it to stunning clarity in seconds. Free to try, no account needed.
              </p>

              {/* Social Proof */}
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                <UserCounter />
                <LiveActivity />
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col items-start gap-3">
                <Link
                  href="/old-photo-restoration"
                  className="group inline-flex h-14 items-center rounded-full bg-[#8B5E3C] px-9 font-lora text-[17px] font-600 text-[#faf8f4] hover:bg-[#7a5234] hover:shadow-xl active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[#8B5E3C]/25 hover:shadow-[#8B5E3C]/40 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Restore Your Photo Free — Takes 30 Seconds
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </Link>

                {/* No signup emphasis */}
                <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#6b5344] pl-2">
                  {[
                    { icon: "✓", text: "No signup" },
                    { icon: "✓", text: "No download" },
                    { icon: "✓", text: "Instant results" },
                  ].map((item) => (
                    <span key={item.text} className="flex items-center gap-1.5 font-lora font-500">
                      <span className="text-[#8B5E3C] text-[16px] font-700">{item.icon}</span>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#8B7355]">
                {[
                  "Try 3 photos free",
                  "Results in 30 seconds",
                  "One-time payment, no subscription",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <svg className="h-3.5 w-3.5 text-[#8B5E3C]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {[
                  {
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    text: "Secure Payment",
                  },
                  {
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    text: "100% Privacy",
                  },
                  {
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: "24/7 Support",
                  },
                  {
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: "Money-Back Guarantee",
                  },
                ].map((badge) => (
                  <span key={badge.text} className="inline-flex items-center gap-1.5 rounded-md border border-[#d4bc91]/40 bg-white/80 px-3 py-1.5 text-[11px] font-500 text-[#6b5344] shadow-sm">
                    <span className="text-[#8B5E3C]">{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* Today's activity */}
              <TodayStats />
            </div>

            {/* Right: Decorative side bar — editorial pull stat */}
            <div className="hidden lg:flex flex-col items-center gap-3 pb-20 border-l border-[#d4bc91]/60 pl-12 self-center">
              <div className="writing-vertical font-playfair text-[11px] uppercase tracking-[0.2em] text-[#d4bc91]" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                Trusted by families worldwide
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="font-playfair text-[44px] font-900 text-[#8B5E3C] leading-none">10K+</span>
                <span className="font-lora text-[11px] text-[#a8967e]">Memories<br/>restored</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero bottom border decoration */}
        <div className="border-t border-[#d4bc91]/40 mt-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between">
            <span className="font-lora text-[12px] italic text-[#b89d7a]">Face enhancement · Super resolution · Colorization</span>
            <span className="font-lora text-[12px] text-[#b89d7a]">Est. 2024</span>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-[#faf8f4] py-20 sm:py-28" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
              <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Capabilities</span>
            </div>
            <h2 id="features-heading" className="font-playfair text-[38px] sm:text-[52px] font-800 leading-[1.05] tracking-[-0.02em] text-[#2c2416]">
              Everything your photo needs.
            </h2>
            <p className="mt-5 font-lora text-[16px] text-[#6b5344] leading-[1.7]">
              Six decades of photographic deterioration, reversed in thirty seconds by purpose-built neural networks.
            </p>
          </div>

          {/* Features grid with custom SVG icons */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
                    <circle cx="24" cy="18" r="10" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="24" cy="18" r="4" fill="#D4A96A" fillOpacity="0.4"/>
                    <path d="M33 9c2.5 1.5 4 4 4 7" stroke="#D4A96A" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M36 15c1.5 1.2 3 3 3 5.5" stroke="#D4A96A" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Face Enhancement",
                desc: "Reconstruct facial details lost to age or damage. Using GFPGAN neural networks, we recover crisp eyes, natural skin texture, and preserved expression.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
                    <rect x="8" y="8" width="14" height="14" rx="2" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <rect x="26" y="8" width="14" height="14" rx="2" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <rect x="8" y="26" width="14" height="14" rx="2" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <rect x="26" y="26" width="14" height="14" rx="2" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <rect x="10" y="10" width="4" height="4" rx="0.5" fill="#D4A96A" fillOpacity="0.6"/>
                    <rect x="28" y="10" width="4" height="4" rx="0.5" fill="#D4A96A" fillOpacity="0.4"/>
                    <rect x="10" y="28" width="4" height="4" rx="0.5" fill="#D4A96A" fillOpacity="0.4"/>
                    <rect x="28" y="28" width="10" height="10" rx="1" fill="#D4A96A" fillOpacity="0.2"/>
                  </svg>
                ),
                title: "4× Super Resolution",
                desc: "Upscale to 4× resolution with AI — crystal-clear detail recovered from the lowest-quality scans, aged prints, and torn originals.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
                    <circle cx="24" cy="24" r="14" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <path d="M24 10v28M10 24h28" stroke="#D4A96A" strokeWidth="1" strokeDasharray="2 2"/>
                    <path d="M18 16c-2 4-2 12 0 16" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M30 16c2 4 2 12 0 16" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="24" cy="24" r="3" fill="#D4A96A"/>
                  </svg>
                ),
                title: "Auto Colorization",
                desc: "Add natural, historically-accurate color to black & white photos. Skies turn blue, skin tones warm — all with a single click.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
                    <rect x="6" y="10" width="36" height="28" rx="3" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <path d="M14 28l6-8 5 6 4-5 5 7" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 20h36" stroke="#D4A96A" strokeWidth="1" strokeDasharray="2 3"/>
                    <circle cx="16" cy="18" r="3" stroke="#D4A96A" strokeWidth="1.5"/>
                    <path d="M30 18h6M30 22h4" stroke="#D4A96A" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Scratch & Damage Repair",
                desc: "Remove cracks, water stains, fold marks, and age spots. Our inpainting model fills in lost detail seamlessly.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
                    <path d="M24 6L28 18H40L30 26L34 38L24 30L14 38L18 26L8 18H20L24 6Z" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 14L26 20H32L27 24L29 30L24 26L19 30L21 24L16 20H22L24 14Z" fill="#D4A96A" fillOpacity="0.3"/>
                  </svg>
                ),
                title: "Quality Enhancement",
                desc: "Fix exposure, contrast, and noise simultaneously. Every pixel analyzed and corrected for natural, balanced output.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
                    <rect x="8" y="14" width="32" height="24" rx="3" stroke="#8B5E3C" strokeWidth="1.5"/>
                    <path d="M18 8h12l2 6H16L18 8Z" stroke="#8B5E3C" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M24 21v10M20 25l4-4 4 4" stroke="#D4A96A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Instant Download",
                desc: "Compare before & after with our interactive slider, then download your restored photo at full resolution.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-[#d4bc91]/40 bg-white p-7 hover:shadow-lg hover:border-[#d4bc91]/80 transition-all duration-300"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f3ede3]">
                  {f.icon}
                </div>
                <h3 className="font-playfair text-[18px] font-700 text-[#2c2416]">{f.title}</h3>
                <p className="mt-3 font-lora text-[14px] leading-[1.7] text-[#6b5344]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials + Stats — dark dramatic section ── */}
      <section className="relative overflow-hidden bg-[#2c2416] py-20 sm:py-24" aria-label="Social proof and testimonials">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(139,94,60,0.20),transparent)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_20%_50%,rgba(212,169,106,0.08),transparent)]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-8 mb-20">
            {[
              { number: "10,000+", label: "Photos restored", sub: "and counting" },
              { number: "30s", label: "Average processing", sub: "results in seconds" },
              { number: "4.8★", label: "User rating", sub: "from 2,400+ reviews" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-[44px] sm:text-[54px] font-900 tracking-[-0.04em] text-[#d4bc91] leading-none">
                  {stat.number}
                </p>
                <p className="mt-2 font-lora text-[14px] font-600 text-[#faf8f4]">{stat.label}</p>
                <p className="mt-0.5 font-lora text-[12px] text-[#8B7355]">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* User Testimonials */}
          <div className="mb-4 text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
              <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Testimonials</span>
              <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
            </div>
            <h2 className="font-playfair text-[32px] sm:text-[42px] font-800 leading-[1.1] text-[#faf8f4]">
              Trusted by families worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote: "I was skeptical at first, but the results blew me away. My great-grandfather's damaged portrait from 1942 looks brand new. The AI even restored details I didn't know were there.",
                author: "Michael Chen",
                location: "San Francisco, CA",
                rating: 5,
              },
              {
                quote: "As a professional genealogist, I recommend this tool to all my clients. It's faster and more affordable than traditional restoration, and the quality is consistently excellent.",
                author: "Dr. Patricia Moore",
                location: "Boston, MA",
                rating: 5,
              },
              {
                quote: "I've restored over 50 family photos in the past month. The colorization feature is incredible—it brought my grandmother's black & white wedding photos to life. Worth every penny.",
                author: "James Rodriguez",
                location: "Austin, TX",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-[#d4bc91]/20 bg-[#1d1d1f]/40 backdrop-blur-sm p-7 hover:border-[#d4bc91]/40 hover:bg-[#1d1d1f]/60 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-[#D4A96A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-lora text-[15px] leading-[1.65] text-[#d4bc91] italic mb-5">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-[#d4bc91]/20">
                  <p className="font-lora text-[14px] font-600 text-[#faf8f4]">{testimonial.author}</p>
                  <p className="mt-0.5 font-lora text-[12px] text-[#8B7355]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-[#f3ede3] py-20 sm:py-28 border-y border-[#d4bc91]/40" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
              <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Process</span>
            </div>
            <h2 id="how-heading" className="font-playfair text-[38px] sm:text-[52px] font-800 leading-[1.05] tracking-[-0.02em] text-[#2c2416]">
              Three steps.<br />Thirty seconds.
            </h2>
          </div>

          <div className="relative grid gap-0 lg:grid-cols-3">
            {/* Connecting line — desktop */}
            <div className="hidden lg:block absolute top-8 left-[16.5%] right-[16.5%] h-px border-t border-dashed border-[#d4bc91]" aria-hidden="true" />

            {[
              {
                n: "1",
                title: "Upload Your Photo",
                desc: "Drop your photo — JPG, PNG, or WEBP, up to 20 MB. Paste from clipboard or drag & drop. No account required.",
              },
              {
                n: "2",
                title: "AI Does the Work",
                desc: "Our neural networks analyze every pixel — enhancing faces, fixing damage, increasing resolution, and optionally colorizing.",
              },
              {
                n: "3",
                title: "Download & Keep",
                desc: "Compare before & after with our interactive slider. Download your restored photo at full resolution.",
              },
            ].map((s, i) => (
              <div key={s.n} className={`relative p-8 lg:p-10 ${i < 2 ? "lg:border-r border-[#d4bc91]/40" : ""}`}>
                {/* Step number */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf8f4] border border-[#d4bc91] shadow-sm mb-6 relative z-10">
                  <span className="font-playfair text-[20px] font-800 text-[#8B5E3C]">{s.n}</span>
                </div>
                <h3 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-3">{s.title}</h3>
                <p className="font-lora text-[15px] leading-[1.7] text-[#6b5344]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-[#d4bc91]/40 text-center">
            <Link
              href="/old-photo-restoration"
              className="group inline-flex h-14 items-center rounded-full bg-[#8B5E3C] px-9 font-lora text-[17px] font-600 text-[#faf8f4] hover:bg-[#7a5234] hover:shadow-xl active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[#8B5E3C]/25 hover:shadow-[#8B5E3C]/40 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Restore Your Photo Free — Takes 30 Seconds
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <PricingSection />

      {/* ── FAQ ── */}
      <section className="bg-[#faf8f4] py-20 sm:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            {/* Left column — heading */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
                <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">FAQ</span>
              </div>
              <h2 id="faq-heading" className="font-playfair text-[38px] sm:text-[48px] font-800 leading-[1.05] tracking-[-0.02em] text-[#2c2416]">
                Questions answered.
              </h2>
              <p className="mt-5 font-lora text-[15px] text-[#6b5344] leading-[1.7]">
                Everything you need to know before you begin. Can&rsquo;t find an answer?{" "}
                <a href="/blog" className="text-[#8B5E3C] underline underline-offset-2 hover:no-underline">
                  Visit our journal
                </a>
                .
              </p>
            </div>

            {/* Right column — accordions */}
            <div className="space-y-1">
              {[
                {
                  q: "What image formats do you support?",
                  a: "JPG, PNG, and WEBP formats — up to 20 MB per file.",
                },
                {
                  q: "How long does AI photo restoration take?",
                  a: "Most photos process in 15–30 seconds. Complex images may take up to a minute as the AI service scales.",
                },
                {
                  q: "Is my photo data private and secure?",
                  a: "Yes. All uploaded photos are automatically deleted after 24 hours. We never store, share, or train models on your images.",
                },
                {
                  q: "What is the difference between Free Trial and Pro Lifetime?",
                  a: "Free Trial gives you 3 photos to test quality (no signup required). Pro Lifetime is a one-time payment of $29.9 for unlimited photo restorations forever with original quality and no watermark.",
                },
                {
                  q: "How does pricing work?",
                  a: "Try 3 photos completely free to test the quality. If you like the results, upgrade to Pro Lifetime for $29.9 (one-time payment) and restore unlimited photos forever. No monthly subscription, no hidden fees.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-[#d4bc91]/40 bg-white px-7 py-5 cursor-pointer hover:border-[#d4bc91]/80 transition-colors"
                >
                  <summary className="flex items-center justify-between font-playfair text-[17px] font-600 text-[#2c2416] list-none gap-4">
                    {item.q}
                    <span className="ml-4 shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#f3ede3] text-[#8B5E3C] border border-[#d4bc91]/60 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 font-lora text-[15px] leading-[1.7] text-[#6b5344] pr-10">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA — Warm and editorial ── */}
      <section className="relative overflow-hidden bg-[#2c2416]" aria-label="Call to action">
        {/* Decorative background element */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_100%,rgba(139,94,60,0.35),transparent)]" aria-hidden="true" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4bc91]/30 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative ornament */}
            <div className="mb-8 flex items-center justify-center gap-4" aria-hidden="true">
              <div className="h-px w-16 bg-[#d4bc91]/40" />
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#D4A96A]" fill="currentColor">
                <path d="M10 0L12 7H19L13.5 11.5L15.5 19L10 14.5L4.5 19L6.5 11.5L1 7H8L10 0Z" fillOpacity="0.6"/>
              </svg>
              <div className="h-px w-16 bg-[#d4bc91]/40" />
            </div>

            <h2 className="font-playfair text-[44px] sm:text-[60px] lg:text-[72px] font-900 leading-[0.97] tracking-[-0.03em] text-[#faf8f4]">
              Your memories deserve<br />
              <em className="italic text-[#D4A96A]">to last forever.</em>
            </h2>

            <p className="mt-8 font-lora text-[18px] leading-[1.65] text-[#a8967e] max-w-xl mx-auto">
              Start restoring today — completely free, no account needed. Bring your family&rsquo;s history back to life.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/old-photo-restoration"
                className="group inline-flex h-14 items-center rounded-full bg-[#D4A96A] px-9 font-lora text-[17px] font-600 text-[#2c2416] hover:bg-[#c49a5a] hover:shadow-2xl active:scale-[0.97] transition-all duration-300 shadow-xl shadow-[#D4A96A]/20 hover:shadow-[#D4A96A]/40 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Restore Your Photo Free — Takes 30 Seconds
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex h-14 items-center rounded-full border border-[#d4bc91]/40 px-9 font-lora text-[15px] font-500 text-[#d4bc91] hover:bg-white/5 hover:border-[#d4bc91]/70 active:scale-[0.97] transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-7 font-lora text-[13px] text-[#6b5344]">
              No signup required · Results in 30 seconds · Free forever for 3 photos/day
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
