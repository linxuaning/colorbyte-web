import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Remove Scratches from Old Photos | AI Scratch Repair Guide | ArtImageHub",
  description:
    "Remove scratches from old photos with AI in under 60 seconds. Learn how AI scratch detection works, what types of scratches it fixes, and how to get the best result.",
  alternates: { canonical: "/blog/remove-scratches-from-old-photos" },
  keywords: [
    "remove scratches from old photos",
    "fix scratched photos online",
    "repair scratched photo",
    "AI scratch removal photo",
    "remove scratches from photos free",
    "old photo scratch repair",
  ],
  openGraph: {
    title: "How to Remove Scratches from Old Photos — ArtImageHub",
    description:
      "AI scratch removal for old photos: how it works, what types it fixes, and best practices for getting clean results.",
    type: "article",
    publishedTime: "2026-04-12",
    images: [{ url: "/blog/before-after-examples.webp", width: 1200, height: 630, alt: "Scratched old photo repaired with AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Remove Scratches from Old Photos",
    description: "AI scratch removal guide: how it works, what it fixes, and best practices.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Remove Scratches from Old Photos",
  description:
    "Remove scratches from old photos with AI — how the technology works, which scratch types it handles best, and tips for the cleanest results.",
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  author: { "@type": "Person", name: "Sarah Chen", jobTitle: "Photo Restoration Specialist" },
  publisher: {
    "@type": "Organization",
    name: "ArtImageHub",
    url: "https://www.artimagehub.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.artimagehub.com/blog/remove-scratches-from-old-photos",
  },
  keywords: "remove scratches from old photos, fix scratched photos, AI scratch removal, old photo repair",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.artimagehub.com" },
    { "@type": "ListItem", position: 2, name: "Journal", item: "https://www.artimagehub.com/blog" },
    { "@type": "ListItem", position: 3, name: "Remove Scratches from Old Photos", item: "https://www.artimagehub.com/blog/remove-scratches-from-old-photos" },
  ],
};

export default function RemoveScratchesFromOldPhotosPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ─── Hero ─── */}
      <div className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-gradient-to-br from-[#1c1008] via-[#3a2010] to-[#5c3820]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(180,100,40,0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-5 pt-10 pb-14 sm:pt-14 sm:pb-18">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Journal
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
              Photo Damage Repair
            </span>
            <span className="text-white/50 text-sm">5 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-5 tracking-tight max-w-3xl">
            How to Remove Scratches from Old Photos
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            AI detects and removes scratches from old photos in seconds — without touching the underlying image detail. Here's how the process works and how to get the cleanest possible result.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-base font-bold text-white ring-2 ring-white/30">
              S
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Sarah Chen</p>
              <div className="flex items-center gap-2 text-xs text-white/55">
                <span>Photo Restoration Specialist</span>
                <span>·</span>
                <time dateTime="2026-04-12">April 12, 2026</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Article Body ─── */}
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-[#1d1d1f] prose-p:text-[#3d3d3f] prose-p:leading-relaxed prose-a:text-[#0071e3] prose-a:no-underline hover:prose-a:underline">

          <p>
            Scratches are one of the most common types of damage in old family photos. They appear as white or light-colored lines across the image — caused by grit between photos in albums, mishandling, or the photo sliding against a surface over decades. The good news is that scratches are also one of the damage types AI handles best, because their visual signature is highly distinctive and predictable.
          </p>

          <p>
            This guide explains how AI scratch removal works, which types of scratches it handles reliably, and what to do with photos that have more complex damage.
          </p>

          {/* CTA 1 */}
          <div className="not-prose my-8 rounded-2xl border border-[#0071e3]/20 bg-[#f0f6ff] p-6">
            <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">Remove scratches in under 60 seconds</p>
            <p className="text-[14px] text-[#6e6e73] mb-4 leading-relaxed">
              Upload your scratched photo and preview the AI repair result for free. No account, no Photoshop skills needed.
            </p>
            <Link
              href="/old-photo-restoration"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[14px] font-semibold text-white hover:bg-[#0077ed] transition-colors"
            >
              Repair Scratches Free →
            </Link>
          </div>

          <h2>Why Scratches Are Common in Old Photos</h2>

          <p>
            Physical scratches accumulate on photographic prints through several mechanisms:
          </p>

          <ul>
            <li><strong>Album storage:</strong> Photos stored in contact with each other, or in albums with abrasive pages, develop micro-scratches over time as the surfaces rub</li>
            <li><strong>Sliding damage:</strong> A photo sliding against a surface — the bottom of a drawer, a table, another photo — creates linear scratches in the direction of movement</li>
            <li><strong>Handling:</strong> Fingernails, rings, and rough surfaces all leave scratch marks on the soft gelatin or resin-coated surface of older prints</li>
            <li><strong>Storage containers:</strong> Grit or sand particles in boxes or envelopes act like sandpaper when the photo shifts</li>
          </ul>

          <p>
            The result is typically a network of fine white lines, occasional deep gouges, or long diagonal scratches that run through the most important parts of the image.
          </p>

          <h2>How AI Removes Scratches from Old Photos</h2>

          <p>
            Scratches have a distinctive visual pattern that AI models learn to detect reliably: they are narrow, high-contrast linear features that run across image content without following the structure of the scene. A scratch across a face doesn't follow the contours of the face — it cuts across them at an unrelated angle. The AI uses this structural characteristic to differentiate scratches from actual image detail.
          </p>

          <p>
            The removal process works in two stages:
          </p>

          <h3>Stage 1: Scratch detection</h3>
          <p>
            The model maps the location of linear damage artifacts across the entire image. It identifies scratch paths — including fine hairline scratches that are easy to miss visually — and creates a damage mask marking exactly which pixels are scratch artifact versus image content.
          </p>

          <h3>Stage 2: Content-aware inpainting</h3>
          <p>
            With the damage mask in place, the model fills the scratched pixels using content from surrounding regions. It predicts what should be there based on the texture, tone, and detail of adjacent areas. For a scratch crossing a plain background, this is straightforward. For a scratch crossing a face or detailed texture, the model uses its trained understanding of what those regions typically look like to reconstruct convincing detail.
          </p>

          <p>
            The combined result is a photo where the scratch is removed and the underlying image content is filled in — not blurred or smeared, but reconstructed.
          </p>

          <h2>Types of Scratches AI Handles Best</h2>

          <ul>
            <li><strong>Fine hairline scratches:</strong> The most common type. Narrow, linear, often numerous. AI detects and removes these very reliably because the pattern is unambiguous.</li>
            <li><strong>Single long diagonal scratches:</strong> A single scratch running across the frame. Detection is easy; reconstruction depends on what the scratch crosses — plain areas fill perfectly, complex areas like faces fill very well.</li>
            <li><strong>Shallow surface scratches:</strong> Scratches that haven't broken through to the base of the print retain some underlying image data, making reconstruction more accurate.</li>
            <li><strong>White or light-colored scratches on mid-tone backgrounds:</strong> High contrast between scratch and background makes detection easier and inpainting more accurate.</li>
          </ul>

          <h2>More Challenging Scratch Scenarios</h2>

          <h3>Deep gouges with missing emulsion</h3>
          <p>
            When a scratch is deep enough to remove the photographic emulsion entirely, there is no underlying image data to recover — just the paper or film base below. AI fills these areas using contextual inference from surrounding pixels. Results are convincing for backgrounds and simple textures; areas with complex detail like faces may show subtle reconstruction artifacts on close inspection.
          </p>

          <h3>Dense scratch networks</h3>
          <p>
            Photos with hundreds of overlapping fine scratches — a surface that looks almost uniformly abraded — are harder to process because the damage mask overlaps heavily with real image content. Results are still significantly better than the original, but dense scratch patterns require more inference and are less clean than isolated scratches.
          </p>

          <h3>Scratches combined with other damage</h3>
          <p>
            When scratches occur alongside fading, water damage, or tears, the AI addresses all damage types simultaneously. The result is improved for all damage types in a single pass — you don't need to run separate processes for each issue.
          </p>

          <h2>Step-by-Step: Remove Scratches from Old Photos Online</h2>

          <ol>
            <li><strong>Scan at high resolution.</strong> Scan your scratched photo at 600 DPI minimum. Higher resolution means finer scratches are visible in the digital file and can be detected and removed by the AI.</li>
            <li><strong>Upload as PNG.</strong> JPEG compression can obscure fine scratches or add artifacts that look scratch-like. PNG preserves all detail.</li>
            <li><strong>Upload to <Link href="/old-photo-restoration">ArtImageHub AI restoration</Link></strong> and wait 30–60 seconds for processing.</li>
            <li><strong>Review using the before/after slider.</strong> Zoom in on areas that had heavy scratch damage to verify the reconstruction looks natural.</li>
            <li><strong>Check faces specifically.</strong> Scratches that cross faces are the most perceptually sensitive area — verify that skin texture and features look correct.</li>
            <li><strong>Download when satisfied.</strong> The full-resolution result is available for $4.99 — a one-time payment with no subscription.</li>
          </ol>

          <h2>After Scratch Removal: Completing the Restoration</h2>

          <p>
            Scratch removal is one part of a full restoration. Most old photos that have scratches also have some degree of fading, color shift, or loss of sharpness — these are addressed simultaneously in the same AI restoration pass.
          </p>

          <p>
            If your photo is black and white and you want to add color after removing scratches, the recommended workflow is: restore (remove scratches and fix damage) → then colorize. Running colorization on a clean, scratch-free image produces significantly better results than colorizing over damaged pixels.
          </p>

        </div>

        {/* CTA 2 */}
        <div className="mt-12 rounded-2xl border border-[#d2d2d7]/60 bg-[#faf8f4] p-8 text-center">
          <h2 className="text-[22px] font-bold text-[#1d1d1f] mb-3">
            Ready to remove scratches from your photo?
          </h2>
          <p className="text-[15px] text-[#6e6e73] mb-6 max-w-md mx-auto leading-relaxed">
            Upload any scratched or damaged old photo and see the AI result in under 60 seconds. Free preview, no account required.
          </p>
          <Link
            href="/old-photo-restoration"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-8 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
          >
            Remove Scratches Free →
          </Link>
          <p className="mt-3 text-[12px] text-[#6e6e73]">Preview free · $4.99 to download · No subscription</p>
        </div>

        {/* Tags */}
        <div className="mt-10 pt-8 border-t border-[#d2d2d7]/40">
          <div className="flex flex-wrap gap-2">
            {["Photo Damage Repair", "Scratch Removal", "AI Technology", "Old Photos", "Guides"].map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-[#f5f5f7] px-3 py-1 text-sm text-[#6e6e73] hover:bg-[#e8e8ed] transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-[#d2d2d7]/40">
          <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-6">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/restore-damaged-photos",
                title: "Restore Damaged Photos",
                desc: "Complete AI repair for tears, water damage, fading, and all physical damage types.",
              },
              {
                href: "/blog/restore-old-photos-online-free",
                title: "Restore Old Photos Online Free",
                desc: "Step-by-step guide to the full restoration process from scan to download.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-xl border border-[#d2d2d7]/60 bg-white p-5 hover:border-[#0071e3]/40 hover:shadow-sm transition-all duration-200"
              >
                <h4 className="text-[14px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-1.5">
                  {link.title}
                </h4>
                <p className="text-[13px] text-[#6e6e73] leading-[1.6]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
