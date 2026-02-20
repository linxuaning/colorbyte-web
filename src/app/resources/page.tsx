import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Photo Restoration Resources & Guides — ArtImageHub",
  description: "Free guides, tools, and resources for restoring old photos, preserving family history, and getting the most from AI photo restoration. Curated by photo preservation experts.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Photo Restoration Resources & Guides",
    description: "Free guides and tools for restoring and preserving old family photos.",
    type: "website",
  },
};

const tools = [
  {
    name: "AI Photo Restoration Tool",
    desc: "Restore old, damaged, faded photos in 30 seconds. Free — 3 photos/day, no signup.",
    href: "/old-photo-restoration",
    badge: "Free",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    name: "Colorization",
    desc: "Add natural color to black and white photographs using AI trained on historical images.",
    href: "/old-photo-restoration",
    badge: "Free",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    name: "Face Enhancement",
    desc: "Restore clarity and detail to faces in old photographs using GFPGAN-based AI.",
    href: "/old-photo-restoration",
    badge: "Free",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    name: "4× Super Resolution",
    desc: "Upscale low-resolution scans to print-ready quality without losing natural texture.",
    href: "/old-photo-restoration",
    badge: "Free",
    badgeColor: "bg-green-100 text-green-700",
  },
];

const guides = [
  {
    title: "The Complete Guide to Restoring Old Photos",
    desc: "A 6-month journey restoring 847 family photos — every method, tool, and lesson learned.",
    href: "/blog/old-photo-restoration-guide",
    readingTime: "12 min",
    category: "Guide",
  },
  {
    title: "How AI Photo Restoration Actually Works",
    desc: "The technology behind AI restoration explained for non-experts — neural networks, face models, and what the AI actually does to your photo.",
    href: "/blog/how-ai-photo-restoration-works",
    readingTime: "9 min",
    category: "Technology",
  },
  {
    title: "How to Preserve Old Photos at Home",
    desc: "Stop damage before it starts. Storage conditions, archival materials, and digitization priorities every family should know.",
    href: "/blog/preserving-old-photos",
    readingTime: "11 min",
    category: "Guide",
  },
  {
    title: "How to Fix Blurry Old Photos",
    desc: "AI vs manual vs analog techniques — what actually works for common blurry photo problems.",
    href: "/blog/fix-blurry-old-photos",
    readingTime: "8 min",
    category: "Guide",
  },
  {
    title: "How to Colorize Black and White Photos",
    desc: "Everything you need to know about AI colorization — how it works, when it's accurate, and how to get the best results.",
    href: "/blog/colorize-black-white-photos",
    readingTime: "10 min",
    category: "Guide",
  },
  {
    title: "How to Remove Scratches from Old Photos",
    desc: "AI vs Photoshop vs Lightroom — the complete method comparison from a professional restorer.",
    href: "/blog/remove-scratches-from-old-photos",
    readingTime: "10 min",
    category: "Guide",
  },
  {
    title: "How to Digitize Old Photos",
    desc: "Scanner vs phone vs professional service — the complete digitization guide before you restore.",
    href: "/blog/digitize-old-photos",
    readingTime: "9 min",
    category: "Guide",
  },
  {
    title: "AI Image Enhancer: 7 Tools Compared",
    desc: "I tested 7 AI image enhancers on 40 photos. Here's the honest breakdown of what each tool actually does well.",
    href: "/blog/ai-image-enhancer",
    readingTime: "12 min",
    category: "Comparison",
  },
];

const externalResources = [
  {
    name: "Library of Congress Digital Preservation",
    desc: "Authoritative guide to digital preservation formats, storage, and long-term file management.",
    url: "https://www.loc.gov/preservation/digital/",
  },
  {
    name: "National Archives Photo Preservation",
    desc: "The National Archives guide to caring for photographs — temperature, humidity, and handling.",
    url: "https://www.archives.gov/preservation/formats/photographs-resources.html",
  },
  {
    name: "Northeast Document Conservation Center",
    desc: "Free preservation leaflets covering photographic materials, housing, and environmental control.",
    url: "https://www.nedcc.org/free-resources/preservation-leaflets/overview",
  },
  {
    name: "FamilySearch Photo Tips",
    desc: "Scanning guidelines and best practices for digitizing family photograph collections.",
    url: "https://www.familysearch.org/en/help/helpcenter/article/scanning-family-photos",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Header */}
      <header className="border-b border-[#d4bc91]/60 bg-[#faf8f4] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
            <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Free Resources</span>
          </div>
          <h1 className="font-playfair text-[44px] sm:text-[60px] font-900 leading-[0.95] tracking-[-0.03em] text-[#2c2416]">
            Photo Restoration<br />
            <em className="italic text-[#8B5E3C]">Resource Center</em>
          </h1>
          <p className="mt-6 font-lora text-[17px] text-[#6b5344] max-w-2xl leading-[1.7]">
            Everything you need to restore, preserve, and digitize your family&rsquo;s photo collection.
            Free tools, expert guides, and curated external resources — all in one place.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-14 sm:py-20 space-y-20">
        {/* Free Tools */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
            <h2 className="font-playfair text-[24px] font-700 text-[#2c2416]">Free AI Tools</h2>
            <div className="flex-1 h-px bg-[#d4bc91]/40" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group flex flex-col gap-3 rounded-xl border border-[#d4bc91]/50 bg-white p-6 hover:shadow-md hover:border-[#8B5E3C]/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-playfair text-[17px] font-700 text-[#2c2416] group-hover:text-[#8B5E3C] transition-colors">
                    {tool.name}
                  </h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-600 ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>
                <p className="font-lora text-[14px] text-[#6b5344] leading-[1.65]">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
            <h2 className="font-playfair text-[24px] font-700 text-[#2c2416]">Expert Guides</h2>
            <div className="flex-1 h-px bg-[#d4bc91]/40" aria-hidden="true" />
          </div>
          <div className="grid gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-start gap-5 rounded-xl border border-[#d4bc91]/50 bg-white p-6 hover:shadow-md hover:border-[#8B5E3C]/30 transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-lora text-[11px] uppercase tracking-[0.1em] text-[#8B5E3C]">{guide.category}</span>
                    <span className="text-[#d4bc91]">·</span>
                    <span className="font-lora text-[11px] text-[#a8967e]">{guide.readingTime} read</span>
                  </div>
                  <h3 className="font-playfair text-[18px] font-700 text-[#2c2416] group-hover:text-[#8B5E3C] transition-colors mb-2 leading-[1.3]">
                    {guide.title}
                  </h3>
                  <p className="font-lora text-[14px] text-[#6b5344] leading-[1.65] line-clamp-2">{guide.desc}</p>
                </div>
                <svg className="h-5 w-5 text-[#d4bc91] group-hover:text-[#8B5E3C] transition-colors shrink-0 mt-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* External Resources */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
            <h2 className="font-playfair text-[24px] font-700 text-[#2c2416]">Authoritative External Resources</h2>
            <div className="flex-1 h-px bg-[#d4bc91]/40" aria-hidden="true" />
          </div>
          <p className="font-lora text-[15px] text-[#6b5344] mb-6 leading-[1.65]">
            Trusted resources from libraries, archives, and preservation organizations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {externalResources.map((res) => (
              <a
                key={res.name}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 rounded-xl border border-[#d4bc91]/50 bg-white p-6 hover:shadow-md hover:border-[#8B5E3C]/30 transition-all duration-200"
              >
                <h3 className="font-playfair text-[16px] font-700 text-[#2c2416] group-hover:text-[#8B5E3C] transition-colors flex items-center gap-2">
                  {res.name}
                  <svg className="h-3.5 w-3.5 text-[#a8967e]" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </h3>
                <p className="font-lora text-[13px] text-[#6b5344] leading-[1.65]">{res.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-[#2c2416] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_110%,rgba(139,94,60,0.40),transparent)]" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-playfair text-[32px] sm:text-[42px] font-800 text-[#faf8f4] leading-[1.1] tracking-[-0.02em] mb-4">
              Ready to restore your first photo?
            </h2>
            <p className="font-lora text-[16px] text-[#a8967e] max-w-md mx-auto leading-[1.7] mb-8">
              Free to start. No signup required. Results in 30 seconds.
            </p>
            <Link
              href="/old-photo-restoration"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4A96A] px-8 py-3.5 font-lora text-[15px] font-600 text-[#2c2416] hover:bg-[#c49a5a] transition-colors shadow-xl shadow-[#D4A96A]/20"
            >
              Restore Photos Free
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
