import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ArtImageHub — AI Photo Restoration",
  description: "ArtImageHub uses state-of-the-art AI to restore old, damaged, and faded family photos in seconds. Learn about our mission, technology, and the team behind the restoration.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ArtImageHub — AI Photo Restoration",
    description: "The story and mission behind ArtImageHub's AI photo restoration platform.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Hero */}
      <header className="border-b border-[#d4bc91]/60 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[#8B5E3C]" />
            <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Our Story</span>
          </div>
          <h1 className="font-playfair text-[44px] sm:text-[60px] font-900 leading-[0.95] tracking-[-0.03em] text-[#2c2416]">
            We build tools that<br />
            <em className="italic text-[#8B5E3C]">preserve memory.</em>
          </h1>
          <p className="mt-8 font-lora text-[18px] text-[#6b5344] max-w-2xl leading-[1.75]">
            ArtImageHub started with a simple observation: millions of families have boxes of old, faded, damaged photographs
            that they mean to restore &ldquo;someday.&rdquo; Someday almost never comes — not because people don&rsquo;t care,
            but because restoration used to require expertise, money, and weeks of waiting.
          </p>
          <p className="mt-5 font-lora text-[18px] text-[#6b5344] max-w-2xl leading-[1.75]">
            We changed that. Today, anyone with an old photograph can restore it in 30 seconds, for free.
          </p>
        </div>
      </header>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-[32px] font-800 text-[#2c2416] leading-[1.15] tracking-[-0.02em] mb-6">
                The mission
              </h2>
              <p className="font-lora text-[16px] text-[#6b5344] leading-[1.75] mb-5">
                Family photographs are the most irreplaceable record of who we were. A grandmother&rsquo;s smile. A father&rsquo;s uniform.
                A child who grew up to have children of their own. These moments were captured on fragile chemistry — gelatin and silver
                that fades, cracks, and yellows over decades.
              </p>
              <p className="font-lora text-[16px] text-[#6b5344] leading-[1.75] mb-5">
                Our mission is to make professional-quality photo restoration accessible to every family,
                regardless of technical skill or budget. We believe no one should lose their family history
                to time and neglect when the technology to stop it already exists.
              </p>
              <p className="font-lora text-[16px] text-[#6b5344] leading-[1.75]">
                Every photo we restore is a memory saved. That&rsquo;s what we&rsquo;re here for.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "10,000+", label: "Photos restored", desc: "Memories saved by ArtImageHub users" },
                { number: "30 sec", label: "Average processing", desc: "From upload to download" },
                { number: "4×", label: "Resolution upscaling", desc: "Maximum super resolution increase" },
                { number: "Free", label: "To get started", desc: "No account required to try" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-[#d4bc91]/50 bg-white p-6">
                  <div className="font-playfair text-[32px] font-800 text-[#2c2416] leading-none mb-1">{stat.number}</div>
                  <div className="font-lora text-[13px] font-600 text-[#8B5E3C] uppercase tracking-[0.08em] mb-2">{stat.label}</div>
                  <div className="font-lora text-[12px] text-[#a8967e] leading-[1.5]">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-[#d4bc91]/50 bg-[#f3ede3]/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-playfair text-[32px] font-800 text-[#2c2416] leading-[1.15] tracking-[-0.02em] mb-10">
            The technology
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Face Enhancement",
                desc: "GFPGAN-based neural networks trained on millions of portrait pairs restore facial detail, clarity, and natural skin texture in old photographs.",
                icon: "👤",
              },
              {
                title: "Super Resolution",
                desc: "Real-ESRGAN upscaling models analyze pixel patterns to generate 4× resolution increases with convincing, natural-looking fine detail.",
                icon: "🔍",
              },
              {
                title: "Colorization",
                desc: "AI trained on historical photographs adds realistic, historically-appropriate color to black and white images based on contextual understanding.",
                icon: "🎨",
              },
            ].map((tech) => (
              <div key={tech.title} className="flex flex-col gap-3">
                <div className="text-[36px]">{tech.icon}</div>
                <h3 className="font-playfair text-[18px] font-700 text-[#2c2416]">{tech.title}</h3>
                <p className="font-lora text-[14px] text-[#6b5344] leading-[1.7]">{tech.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-lora text-[15px] text-[#8B7355] leading-[1.7] border-t border-[#d4bc91]/40 pt-8">
            Our AI pipeline is powered by state-of-the-art open-source models via Replicate, served through a FastAPI backend
            and delivered through a Next.js frontend optimized for speed and accessibility.
            All uploaded photos are automatically deleted within 24 hours — your memories are yours, not ours.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-playfair text-[32px] font-800 text-[#2c2416] leading-[1.15] tracking-[-0.02em] mb-10">
            Privacy & trust
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Photos deleted in 24 hours", desc: "All uploaded photos are automatically and permanently deleted from our servers within 24 hours of upload." },
              { title: "Never used for AI training", desc: "We never use your photos to train AI models. Your images are processed solely to generate your restored output." },
              { title: "Encrypted in transit", desc: "All photo uploads and downloads are protected by HTTPS/TLS encryption." },
              { title: "No account required", desc: "Use the free tier without creating an account. We never require personal information to use the core service." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-[#d4bc91]/50 bg-white p-6">
                <div className="h-6 w-6 shrink-0 rounded-full bg-[#8B5E3C]/10 flex items-center justify-center mt-0.5">
                  <svg className="h-3.5 w-3.5 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-playfair text-[15px] font-700 text-[#2c2416] mb-1">{item.title}</h3>
                  <p className="font-lora text-[13px] text-[#6b5344] leading-[1.65]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#d4bc91]/50 bg-[#2c2416] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="font-playfair text-[32px] sm:text-[42px] font-800 text-[#faf8f4] leading-[1.1] tracking-[-0.02em] mb-5">
            Try it on your own photos.
          </h2>
          <p className="font-lora text-[16px] text-[#a8967e] mb-8 leading-[1.7]">
            Free to start. No account. Results in 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/old-photo-restoration"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#D4A96A] px-8 font-lora text-[15px] font-600 text-[#2c2416] hover:bg-[#c49a5a] transition-colors shadow-lg"
            >
              Restore Photos Free
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#5a4530] px-8 font-lora text-[15px] text-[#a8967e] hover:text-[#d4bc91] hover:border-[#8B5E3C] transition-colors"
            >
              Read Our Journal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
