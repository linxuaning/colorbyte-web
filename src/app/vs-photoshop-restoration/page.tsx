import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI vs Photoshop Restoration (2026): Cost, Quality, and Time Comparison",
  description:
    "Compare AI photo restoration and Photoshop manual restoration for old photos. See tradeoffs in quality, speed, effort, and total cost.",
  alternates: { canonical: "/vs-photoshop-restoration" },
  openGraph: {
    title: "AI vs Photoshop Restoration (2026)",
    description: "Head-to-head: AI automation vs manual Photoshop workflow.",
    type: "article",
    images: [{ url: "/blog/before-after-examples.jpg", width: 1200, height: 630, alt: "AI vs Photoshop restoration comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI vs Photoshop Restoration (2026)",
    description: "Which workflow is better for old photo repair?",
    images: ["/blog/before-after-examples.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI restoration better than Photoshop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI restoration is faster and easier for most users. Photoshop gives deeper manual control for complex archival edits, but requires more skill and time.",
      },
    },
    {
      "@type": "Question",
      name: "When should I use Photoshop instead of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use Photoshop when you need pixel-level manual retouching, custom composites, or strict historical correction workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine both methods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A common workflow is AI first for base recovery, then Photoshop for final manual refinements.",
      },
    },
  ],
};

export default function VsPhotoshopRestorationPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-4xl px-5 py-14">
        <h1 className="text-4xl font-bold text-[#2c2416]">AI vs Photoshop Restoration (2026)</h1>
        <p className="mt-4 text-[#6b5344] text-lg">
          If your goal is usable restored photos quickly, AI wins on speed. If your goal is highly controlled studio editing, Photoshop still leads.
        </p>

        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Best Fit</h2>
          <p className="mt-3 text-[#6b5344]">
            Choose ArtImageHub if you want the shortest path from comparison to a paid restoration workflow. Use Photoshop only if you need manual pixel-level editing after the AI pass.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/subscription?landing_page=%2Fvs-photoshop-restoration&cta_slot=hero_pay_first&entry_variant=comparison_page&checkout_source=comparison_direct"
              className="inline-flex items-center rounded-full bg-[#8B5E3C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f4a2e]"
            >
              Unlock one-time access
            </Link>
            <Link
              href="/old-photo-restoration?landing_page=%2Fvs-photoshop-restoration&cta_slot=hero_try_tool_first&entry_variant=comparison_page"
              className="inline-flex items-center rounded-full border border-[#d4bc91] bg-white px-5 py-2.5 text-sm font-semibold text-[#2c2416] hover:bg-[#f8f1e6]"
            >
              Preview the restore workflow
            </Link>
          </div>
          <p className="mt-3 text-xs text-[#6b5344]">
            One payment, faster path, and download-ready output for buyers who do not want a full Photoshop workflow.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Decision Framework</h2>
          <ul className="mt-4 list-disc pl-6 text-[#6b5344] space-y-2">
            <li>Speed-sensitive personal restoration: AI-first</li>
            <li>Professional archival detail: Photoshop-first</li>
            <li>Best balance: hybrid workflow</li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-[#d4bc91]/40 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#2c2416]">Related Tools (Internal Links)</h2>
          <ul className="mt-4 list-disc pl-6 text-[#6b5344] space-y-2">
            <li><Link href="/old-photo-restoration?landing_page=%2Fvs-photoshop-restoration&cta_slot=related_tools&entry_variant=comparison_page" className="text-[#8B5E3C] underline">Restore old photos with AI</Link></li>
            <li><Link href="/photo-enhancer" className="text-[#8B5E3C] underline">Enhance photo details</Link></li>
            <li><Link href="/photo-colorizer" className="text-[#8B5E3C] underline">Colorize black-and-white photos</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
