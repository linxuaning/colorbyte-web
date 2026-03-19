import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ArtImageHub vs Remini (2026): Which Photo Restoration Tool Is Better?",
  description:
    "Direct comparison of ArtImageHub vs Remini across quality, pricing, speed, and use cases. See which tool is better for restoring old family photos in 2026.",
  alternates: { canonical: "/vs-remini" },
  openGraph: {
    title: "ArtImageHub vs Remini (2026)",
    description:
      "Head-to-head comparison: restoration quality, price, speed, and best use case.",
    type: "article",
    images: [{ url: "/blog/before-after-examples.jpg", width: 1200, height: 630, alt: "ArtImageHub vs Remini comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtImageHub vs Remini (2026)",
    description: "Photo restoration comparison for real buyers.",
    images: ["/blog/before-after-examples.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ArtImageHub better than Remini for old photo restoration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For old family photos with scratches and fading, ArtImageHub is usually stronger on full-photo restoration and one-time value. Remini is strong for quick face enhancement on mobile.",
      },
    },
    {
      "@type": "Question",
      name: "Which one is cheaper: ArtImageHub or Remini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub offers a one-time $4.99 lifetime option. Remini typically uses monthly subscription pricing, which is usually higher over time.",
      },
    },
    {
      "@type": "Question",
      name: "How should I compare both tools fairly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare with the same sample photo and evaluate detail recovery, natural skin, artifact control, and total cost. ArtImageHub now uses one-time pay-first access instead of a free trial.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ArtImageHub vs Remini (2026): Which Photo Restoration Tool Is Better?",
  description:
    "Direct comparison of ArtImageHub vs Remini across quality, pricing, speed, and use cases.",
  datePublished: "2026-03-04",
  dateModified: "2026-03-04",
  author: { "@type": "Organization", name: "ArtImageHub" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.artimagehub.com/vs-remini" },
};

export default function VsReminiPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="mx-auto max-w-4xl px-5 py-14">
        <h1 className="text-4xl font-bold text-[#2c2416]">ArtImageHub vs Remini (2026)</h1>
        <p className="mt-4 text-[#6b5344] text-lg">
          Remini alternative for old photo restoration — restore full photos, not just faces.
        </p>

        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Best Fit</h2>
          <p className="mt-3 text-[#6b5344]">
            ArtImageHub is best if you want full-photo restoration with one-time pricing instead of another recurring subscription.
          </p>
          <p className="mt-3 text-sm font-medium text-[#2c2416]">
            Full-photo restoration, one-time pricing, fewer editing steps.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/subscription?landing_page=%2Fvs-remini&cta_slot=hero_pay_first&entry_variant=comparison_page&checkout_source=comparison_direct"
              className="inline-flex items-center rounded-full bg-[#8B5E3C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f4a2e]"
            >
              Unlock one-time access
            </Link>
            <Link
              href="/old-photo-restoration?landing_page=%2Fvs-remini&cta_slot=hero_try_tool_first&entry_variant=comparison_page"
              className="inline-flex items-center rounded-full border border-[#d4bc91] bg-white px-5 py-2.5 text-sm font-semibold text-[#2c2416] hover:bg-[#f8f1e6]"
            >
              Preview the restore workflow
            </Link>
          </div>
          <p className="mt-3 text-xs text-[#6b5344]">
            Best if you already know you want restored, download-ready photos without another subscription.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Quick Verdict</h2>
          <p className="mt-3 text-[#6b5344]">
            Choose ArtImageHub for full-photo restoration workflows and lower long-term cost. Choose Remini if your top priority is fast mobile face enhancement.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Comparison Factors</h2>
          <ul className="mt-4 list-disc pl-6 text-[#6b5344] space-y-2">
            <li>Restoration quality: scratches, fading, and facial details</li>
            <li>Price model: one-time vs subscription</li>
            <li>Speed and workflow friction</li>
            <li>Output quality and download rights</li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Related Tools (Internal Links)</h2>
          <ul className="mt-4 list-disc pl-6 text-[#6b5344] space-y-2">
            <li><Link href="/old-photo-restoration?landing_page=%2Fvs-remini&cta_slot=related_tools&entry_variant=comparison_page" className="text-[#8B5E3C] underline">Old Photo Restoration tool</Link></li>
            <li><Link href="/photo-enhancer" className="text-[#8B5E3C] underline">AI Photo Enhancer</Link></li>
            <li><Link href="/photo-colorizer" className="text-[#8B5E3C] underline">Photo Colorizer</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
