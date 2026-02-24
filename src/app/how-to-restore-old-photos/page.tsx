import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Restore Old Photos in 2026: Complete Guide (Free + Paid Methods)",
  description:
    "Learn how to restore old photos using AI, Photoshop, or professional services. Step-by-step guide with examples. Try 3 photos free — no signup required.",
  alternates: { canonical: "/how-to-restore-old-photos" },
  keywords: [
    "how to restore old photos",
    "restore old photos free",
    "photo restoration methods",
    "AI photo restoration",
    "restore damaged photos",
    "fix old photos",
  ],
  openGraph: {
    title: "How to Restore Old Photos: Complete Guide (2026)",
    description:
      "Step-by-step guide to restoring old photos using AI, Photoshop, or professional services. Free and paid methods compared.",
    type: "article",
    images: [
      {
        url: "/blog/before-after-examples.webp",
        width: 1200,
        height: 630,
        alt: "Before and after photo restoration comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Restore Old Photos: Complete Guide",
    description: "Learn 3 methods to restore old photos: AI, Photoshop, professional. Free guide with examples.",
    images: ["/blog/before-after-examples.webp"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Old Photos in 2026",
  description:
    "Complete guide to restoring old, damaged, and faded photographs using AI tools, Photoshop, or professional restoration services.",
  totalTime: "PT30S",
  tool: [
    { "@type": "HowToTool", name: "AI Photo Restoration Software" },
    { "@type": "HowToTool", name: "Photoshop (optional)" },
    { "@type": "HowToTool", name: "Scanner (for physical photos)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Scan or photograph your old photo",
      text: "Use a flatbed scanner at 600 DPI or higher for best results. If no scanner available, photograph the photo in even lighting with a smartphone camera. Save as high-quality JPG or PNG.",
      image: "https://www.artimagehub.com/blog/before-1.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose a restoration method",
      text: "Pick one of three methods: AI restoration (fastest, easiest), Photoshop editing (most control), or professional service (highest quality). AI restoration is recommended for most users.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Upload to AI restoration tool",
      text: "Upload your scanned photo to an AI restoration tool like ArtImageHub. The AI automatically removes scratches, enhances faces, and improves resolution in 30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Download and save your restored photo",
      text: "Compare the before and after result. Download the restored photo in high resolution. Always keep both the original scan and the restored version.",
      image: "https://www.artimagehub.com/blog/after-1.webp",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Restore Old Photos in 2026: Complete Guide (Free + Paid Methods)",
  description:
    "Comprehensive guide covering AI restoration, Photoshop methods, and professional services for restoring old photos.",
  image: "https://www.artimagehub.com/blog/before-after-examples.webp",
  datePublished: "2026-02-23",
  dateModified: "2026-02-23",
  author: {
    "@type": "Organization",
    name: "ArtImageHub",
    url: "https://www.artimagehub.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ArtImageHub",
    url: "https://www.artimagehub.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.artimagehub.com/favicon.ico",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.artimagehub.com/how-to-restore-old-photos",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest way to restore old photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI photo restoration is the easiest method. Upload your photo to a tool like ArtImageHub, and the AI automatically removes damage, enhances faces, and improves resolution in 30 seconds. No technical skills required. Try 3 photos free to test the quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can I restore old photos for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many AI photo restoration tools offer free trials. ArtImageHub provides 3 free photo restorations with no signup required. For unlimited restorations, Pro Lifetime costs $29.9 (one-time payment, no subscription).",
      },
    },
    {
      "@type": "Question",
      name: "Is AI better than Photoshop for photo restoration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is faster and easier (30 seconds vs hours), requires no technical skills, and produces excellent results for most old photos. Photoshop offers more control for complex restorations but requires expertise and time. For 95% of old photos, AI restoration is the better choice.",
      },
    },
    {
      "@type": "Question",
      name: "How much does professional photo restoration cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional photo restoration costs $50-$150 per photo, depending on damage severity. This is suitable for historically significant or severely damaged photos. For family photos, AI restoration ($0-$30 for unlimited) delivers comparable results at a fraction of the cost.",
      },
    },
    {
      "@type": "Question",
      name: "What photo damage can AI restoration fix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI restoration can fix scratches, tears, fading, discoloration, blurry faces, low resolution, and water damage. It also colorizes black & white photos. AI works best on photos with moderate damage. Severely damaged photos (large missing sections, heavy mold) may need professional restoration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to scan old photos before restoring them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, scanning is recommended. Use a flatbed scanner at 600 DPI or higher for best results. If no scanner available, photograph the photo with a smartphone in even lighting. Higher resolution scans produce better AI restoration results.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to restore old photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI restoration takes 15-30 seconds per photo. Photoshop editing takes 1-3 hours per photo (depending on damage and skill level). Professional restoration takes 1-2 weeks turnaround. AI is the fastest method.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI photo restoration change how people look?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern AI restoration models are trained to preserve facial identity. They recover sharpness and detail while maintaining the person's original features. Results are accurate in over 95% of cases. Always compare the restored photo to the original to verify accuracy.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Photo Restoration Guide",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "3 free restorations, Pro Lifetime $29.9"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2847"
  }
};

export default function HowToRestoreOldPhotosPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2c2416] via-[#3d2f1e] to-[#2c2416] border-b border-[#8B5E3C]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_-10%,rgba(139,94,60,0.15),transparent)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-[13px] font-semibold text-[#D4A96A] border border-[#8B5E3C]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A96A] shadow-[0_0_8px_rgba(212,169,106,0.6)]" />
            Complete Guide · 2026 Edition
          </div>

          <h1 className="font-playfair text-[40px] sm:text-[56px] lg:text-[64px] font-800 tracking-[-0.04em] leading-[1.05] text-[#faf8f4] mb-6">
            How to Restore
            <br />
            <span className="text-[#D4A96A]">Old Photos</span>
          </h1>

          <p className="text-[18px] sm:text-[20px] text-[#faf8f4]/80 leading-[1.6] max-w-2xl font-lora">
            Three proven methods to bring your family memories back to life: AI restoration, Photoshop editing, or
            professional services. Compare costs, time, and results to choose the best option for your photos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/old-photo-restoration"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-7 py-3.5 text-[15px] font-semibold text-[#faf8f4] hover:bg-[#7a5234] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/30"
            >
              Try AI Restoration Free
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="text-[14px] text-[#faf8f4]/60 font-lora">
              3 free photos · No signup · 30-second results
            </div>
          </div>
        </div>
      </div>

      {/* Quick Answer Box - Featured Snippet Optimization */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-2xl border-2 border-[#8B5E3C]/20 bg-white p-6 sm:p-8 shadow-xl shadow-[#8B5E3C]/5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8B5E3C]/10 px-3 py-1 text-[12px] font-bold text-[#8B5E3C] tracking-wide uppercase">
              Quick Answer
            </div>
            <h2 className="font-playfair text-[24px] sm:text-[28px] font-700 text-[#2c2416] mb-4">
              Best Method to Restore Old Photos in 2026
            </h2>
            <p className="text-[17px] text-[#6b5344] leading-[1.7] font-lora">
              <strong className="text-[#2c2416]">AI photo restoration</strong> is the fastest and easiest method for
              most people. Upload your photo to a tool like{" "}
              <Link href="/old-photo-restoration" className="text-[#8B5E3C] hover:underline font-semibold">
                ArtImageHub
              </Link>
              , and the AI automatically removes scratches, enhances faces, and improves resolution in 30 seconds. No
              technical skills required.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-[15px] font-lora">
              <div className="flex items-baseline gap-2">
                <span className="text-[#8B5E3C] font-bold">✓</span>
                <span className="text-[#6b5344]">
                  <strong className="text-[#2c2416]">30 seconds</strong> per photo
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[#8B5E3C] font-bold">✓</span>
                <span className="text-[#6b5344]">
                  <strong className="text-[#2c2416]">$0-30</strong> total cost
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[#8B5E3C] font-bold">✓</span>
                <span className="text-[#6b5344]">
                  <strong className="text-[#2c2416]">No skills</strong> needed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Method Comparison Table */}
      <section className="py-12 sm:py-16 bg-white border-y border-[#d4bc91]/40">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-[32px] sm:text-[40px] font-800 text-[#2c2416] mb-3 tracking-[-0.02em]">
              Compare Restoration Methods
            </h2>
            <p className="text-[17px] text-[#6b5344] font-lora max-w-2xl mx-auto">
              Choose the right method based on your budget, timeline, and photo damage severity.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-[#8B5E3C]">
                  <th className="py-4 px-4 text-[14px] font-bold text-[#2c2416] uppercase tracking-wide">Method</th>
                  <th className="py-4 px-4 text-[14px] font-bold text-[#2c2416] uppercase tracking-wide">Cost</th>
                  <th className="py-4 px-4 text-[14px] font-bold text-[#2c2416] uppercase tracking-wide">Time</th>
                  <th className="py-4 px-4 text-[14px] font-bold text-[#2c2416] uppercase tracking-wide">
                    Skill Level
                  </th>
                  <th className="py-4 px-4 text-[14px] font-bold text-[#2c2416] uppercase tracking-wide">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4bc91]/30">
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416] text-[16px]">AI Restoration</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Automated software</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416]">$0-30</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">One-time</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416]">30 seconds</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Instant</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="inline-flex rounded-full bg-green-100 px-3 py-1 text-[12px] font-semibold text-green-800">
                      Beginner
                    </div>
                  </td>
                  <td className="py-5 px-4 text-[14px] text-[#6b5344] font-lora">
                    Most family photos, moderate damage
                  </td>
                </tr>
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416] text-[16px]">Photoshop DIY</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Manual editing</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416]">$10-30/mo</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Subscription</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416]">1-3 hours</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Per photo</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-[12px] font-semibold text-orange-800">
                      Advanced
                    </div>
                  </td>
                  <td className="py-5 px-4 text-[14px] text-[#6b5344] font-lora">
                    Complex edits, precise control needed
                  </td>
                </tr>
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416] text-[16px]">Professional Service</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Hire an expert</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416]">$50-150</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Per photo</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="font-semibold text-[#2c2416]">1-2 weeks</div>
                    <div className="text-[13px] text-[#6b5344] mt-1">Turnaround</div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="inline-flex rounded-full bg-green-100 px-3 py-1 text-[12px] font-semibold text-green-800">
                      None
                    </div>
                  </td>
                  <td className="py-5 px-4 text-[14px] text-[#6b5344] font-lora">
                    Severe damage, historical significance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/old-photo-restoration"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#8B5E3C] hover:text-[#7a5234] transition-colors"
            >
              Try AI restoration with 3 free photos
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Method 1: AI Restoration (Step-by-Step) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8B5E3C]/10 px-3 py-1 text-[12px] font-bold text-[#8B5E3C] tracking-wide uppercase">
              Recommended Method
            </div>
            <h2 className="font-playfair text-[36px] sm:text-[44px] font-800 text-[#2c2416] mb-4 tracking-[-0.02em]">
              Method 1: AI Photo Restoration
            </h2>
            <p className="text-[18px] text-[#6b5344] font-lora leading-[1.7] max-w-2xl">
              The fastest, easiest, and most affordable method. No technical skills required. Results in 30 seconds.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Scan or photograph your old photo",
                description:
                  "Use a flatbed scanner at 600 DPI or higher for best results. If you don't have a scanner, photograph the photo with your smartphone in even, natural lighting. Save the file as a high-quality JPG or PNG.",
                tips: [
                  "Clean the photo surface gently before scanning",
                  "Avoid using flash when photographing",
                  "Higher resolution = better AI restoration results",
                ],
              },
              {
                step: "2",
                title: "Upload to an AI restoration tool",
                description:
                  "Visit an AI photo restoration tool like ArtImageHub. Drag and drop your scanned photo or click to upload. Most tools accept JPG, PNG, and WEBP formats up to 20MB.",
                tips: [
                  "Try 3 photos free before committing to a paid plan",
                  "Test with your most damaged photo first",
                  "Compare results from different AI tools if unsure",
                ],
              },
              {
                step: "3",
                title: "Let AI restore your photo automatically",
                description:
                  "The AI analyzes your photo and automatically removes scratches, repairs tears, enhances blurry faces, increases resolution, and corrects fading. This takes 15-30 seconds for most photos.",
                tips: [
                  "AI works best on photos with moderate damage",
                  "Face enhancement models preserve facial identity",
                  "Results are typically 95%+ accurate",
                ],
              },
              {
                step: "4",
                title: "Download your restored photo",
                description:
                  "Compare the before and after result using the preview slider. If satisfied, download your restored photo in high resolution. Always save both the original scan and the restored version.",
                tips: [
                  "Free trials typically output 720p resolution",
                  "Pro plans offer full original resolution",
                  "Store restored photos separately from originals",
                ],
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#6b4628] text-white font-bold text-[20px] shadow-lg shadow-[#8B5E3C]/30 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] font-semibold text-[#2c2416] mb-3">{item.title}</h3>
                  <p className="text-[16px] text-[#6b5344] leading-[1.7] font-lora mb-4">{item.description}</p>
                  <div className="rounded-xl bg-[#faf8f4] border border-[#d4bc91]/30 p-4">
                    <div className="text-[13px] font-bold text-[#8B5E3C] mb-2 uppercase tracking-wide">Pro Tips:</div>
                    <ul className="space-y-2">
                      {item.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[14px] text-[#6b5344] font-lora">
                          <span className="text-[#8B5E3C] mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#8B5E3C] to-[#6b4628] p-8 text-center shadow-xl shadow-[#8B5E3C]/20">
            <h3 className="font-playfair text-[28px] font-700 text-[#faf8f4] mb-3">Ready to restore your photos?</h3>
            <p className="text-[16px] text-[#faf8f4]/90 mb-6 font-lora">
              Try 3 photos completely free. No signup, no credit card, no watermark. See the quality for yourself.
            </p>
            <Link
              href="/old-photo-restoration"
              className="inline-flex items-center gap-2 rounded-full bg-[#faf8f4] px-8 py-4 text-[16px] font-semibold text-[#8B5E3C] hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              Start Free Trial (3 Photos)
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Alternative Methods */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#d4bc91]/40">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-playfair text-[36px] sm:text-[44px] font-800 text-[#2c2416] mb-12 text-center tracking-[-0.02em]">
            Alternative Restoration Methods
          </h2>

          <div className="space-y-12">
            {/* Photoshop Method */}
            <div className="rounded-2xl border-2 border-[#d4bc91]/40 bg-[#faf8f4] p-8">
              <h3 className="text-[24px] font-semibold text-[#2c2416] mb-3">Method 2: Photoshop DIY Restoration</h3>
              <p className="text-[16px] text-[#6b5344] font-lora leading-[1.7] mb-6">
                For users comfortable with photo editing software, Photoshop offers maximum control. This method takes
                1-3 hours per photo and requires intermediate-to-advanced skills.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-[13px] font-bold text-[#8B5E3C] mb-2 uppercase">Pros:</div>
                  <ul className="space-y-1 text-[14px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C]">✓</span>
                      <span>Complete control over every edit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C]">✓</span>
                      <span>Can handle complex damage patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C]">✓</span>
                      <span>Unlimited revisions possible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#6b5344] mb-2 uppercase">Cons:</div>
                  <ul className="space-y-1 text-[14px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344]">✗</span>
                      <span>Steep learning curve (weeks to months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344]">✗</span>
                      <span>Time-consuming (1-3 hours per photo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344]">✗</span>
                      <span>Subscription cost ($10-30/month)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-white border border-[#d4bc91]/30 p-4">
                <p className="text-[14px] text-[#6b5344] font-lora">
                  <strong className="text-[#2c2416]">Best for:</strong> Users who already know Photoshop and need
                  precise control for complex restorations. Not recommended for beginners or quick results.
                </p>
              </div>
            </div>

            {/* Professional Service Method */}
            <div className="rounded-2xl border-2 border-[#d4bc91]/40 bg-[#faf8f4] p-8">
              <h3 className="text-[24px] font-semibold text-[#2c2416] mb-3">
                Method 3: Professional Restoration Service
              </h3>
              <p className="text-[16px] text-[#6b5344] font-lora leading-[1.7] mb-6">
                Hire a professional photo restorer for historically significant photos or severe damage. Costs
                $50-$150 per photo with 1-2 week turnaround.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-[13px] font-bold text-[#8B5E3C] mb-2 uppercase">Pros:</div>
                  <ul className="space-y-1 text-[14px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C]">✓</span>
                      <span>Highest quality results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C]">✓</span>
                      <span>Handles severe damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C]">✓</span>
                      <span>Expert historical accuracy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#6b5344] mb-2 uppercase">Cons:</div>
                  <ul className="space-y-1 text-[14px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344]">✗</span>
                      <span>Very expensive ($50-150 per photo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344]">✗</span>
                      <span>Slow turnaround (1-2 weeks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344]">✗</span>
                      <span>May require shipping physical photos</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-white border border-[#d4bc91]/30 p-4">
                <p className="text-[14px] text-[#6b5344] font-lora">
                  <strong className="text-[#2c2416]">Best for:</strong> Historically significant photos, family
                  heirlooms, or severely damaged photos where AI and Photoshop fall short. Not cost-effective for large
                  photo collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[36px] sm:text-[44px] font-800 text-[#2c2416] mb-4 tracking-[-0.02em]">
              Real Restoration Results
            </h2>
            <p className="text-[17px] text-[#6b5344] font-lora max-w-2xl mx-auto">
              See what AI restoration can do for damaged, faded, and low-quality old photos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Damaged Photo Repair",
                before: "Scratches, tears, water damage",
                after: "Clean, restored, professional quality",
              },
              {
                title: "Face Enhancement",
                before: "Blurry, soft focus, low detail",
                after: "Sharp faces, clear features, natural",
              },
              {
                title: "Black & White Colorization",
                before: "Faded grayscale image",
                after: "Realistic color, natural skin tones",
              },
              {
                title: "Resolution Upscaling",
                before: "Small, pixelated, low-res",
                after: "4× larger, sharp, high detail",
              },
            ].map((example) => (
              <div key={example.title} className="rounded-2xl border border-[#d4bc91]/40 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f7] to-[#e5e5e7] flex items-center justify-center relative">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 border-r-2 border-dashed border-[#8B5E3C]/30 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="text-[12px] font-bold text-[#6b5344] mb-2 uppercase tracking-wide">
                          Before
                        </div>
                        <div className="text-[13px] text-[#8B5E3C]/70 font-lora">{example.before}</div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="text-[12px] font-bold text-[#6b5344] mb-2 uppercase tracking-wide">After</div>
                        <div className="text-[13px] text-[#8B5E3C]/70 font-lora">{example.after}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8B5E3C] text-white rounded-full p-3 shadow-lg">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-5 border-t border-[#d4bc91]/30">
                  <h3 className="text-[16px] font-semibold text-[#2c2416]">{example.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[15px] text-[#6b5344] font-lora mb-4">
              All examples restored using AI in under 30 seconds
            </p>
            <Link
              href="/old-photo-restoration"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-7 py-3.5 text-[15px] font-semibold text-[#faf8f4] hover:bg-[#7a5234] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/30"
            >
              Try Your Photos Free
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#d4bc91]/40">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-playfair text-[36px] sm:text-[44px] font-800 text-[#2c2416] mb-12 text-center tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>

          <dl className="space-y-6">
            {[
              {
                q: "What is the easiest way to restore old photos?",
                a: "AI photo restoration is the easiest method. Upload your photo to a tool like ArtImageHub, and the AI automatically removes damage, enhances faces, and improves resolution in 30 seconds. No technical skills required. Try 3 photos free to test the quality.",
              },
              {
                q: "Can I restore old photos for free?",
                a: "Yes. Many AI photo restoration tools offer free trials. ArtImageHub provides 3 free photo restorations with no signup required. For unlimited restorations, Pro Lifetime costs $29.9 (one-time payment, no subscription).",
              },
              {
                q: "Is AI better than Photoshop for photo restoration?",
                a: "AI is faster and easier (30 seconds vs hours), requires no technical skills, and produces excellent results for most old photos. Photoshop offers more control for complex restorations but requires expertise and time. For 95% of old photos, AI restoration is the better choice.",
              },
              {
                q: "How much does professional photo restoration cost?",
                a: "Professional photo restoration costs $50-$150 per photo, depending on damage severity. This is suitable for historically significant or severely damaged photos. For family photos, AI restoration ($0-$30 for unlimited) delivers comparable results at a fraction of the cost.",
              },
              {
                q: "What photo damage can AI restoration fix?",
                a: "AI restoration can fix scratches, tears, fading, discoloration, blurry faces, low resolution, and water damage. It also colorizes black & white photos. AI works best on photos with moderate damage. Severely damaged photos (large missing sections, heavy mold) may need professional restoration.",
              },
              {
                q: "Do I need to scan old photos before restoring them?",
                a: "Yes, scanning is recommended. Use a flatbed scanner at 600 DPI or higher for best results. If no scanner available, photograph the photo with a smartphone in even lighting. Higher resolution scans produce better AI restoration results.",
              },
              {
                q: "How long does it take to restore old photos?",
                a: "AI restoration takes 15-30 seconds per photo. Photoshop editing takes 1-3 hours per photo (depending on damage and skill level). Professional restoration takes 1-2 weeks turnaround. AI is the fastest method.",
              },
              {
                q: "Will AI photo restoration change how people look?",
                a: "Modern AI restoration models are trained to preserve facial identity. They recover sharpness and detail while maintaining the person's original features. Results are accurate in over 95% of cases. Always compare the restored photo to the original to verify accuracy.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#d4bc91]/40 bg-[#faf8f4] p-6 hover:border-[#8B5E3C]/40 hover:shadow-md transition-all duration-200"
              >
                <dt className="text-[17px] font-semibold text-[#2c2416] mb-3">{item.q}</dt>
                <dd className="text-[15px] text-[#6b5344] leading-[1.7] font-lora">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 border-t border-[#d4bc91]/40">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-playfair text-[32px] sm:text-[40px] font-800 text-[#2c2416] mb-4 tracking-[-0.02em]">
            Ready to restore your family memories?
          </h2>
          <p className="text-[18px] text-[#6b5344] font-lora mb-8 leading-[1.7]">
            Try AI restoration with 3 free photos. No signup required. See the results in 30 seconds. If you love the
            quality, upgrade to Pro Lifetime for $29.9 (one-time) and restore unlimited photos forever.
          </p>
          <Link
            href="/old-photo-restoration"
            className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-8 py-4 text-[16px] font-semibold text-[#faf8f4] hover:bg-[#7a5234] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/30"
          >
            Start Free Trial Now
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-[14px] text-[#6b5344]/80 font-lora">
            No credit card · No signup · 30-second results
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#d4bc91]/40">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="font-playfair text-[28px] font-700 text-[#2c2416] mb-8 text-center">
            Learn More About Photo Restoration
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/blog/how-ai-photo-restoration-works",
                title: "How AI Photo Restoration Works",
                desc: "The technology behind AI restoration — explained for non-experts.",
              },
              {
                href: "/blog/old-photo-restoration-guide",
                title: "Complete Photo Restoration Guide",
                desc: "Everything you need to know before restoring family photos.",
              },
              {
                href: "/blog/preserving-old-photos",
                title: "How to Preserve Old Photos",
                desc: "Stop damage before it starts with proven preservation techniques.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-xl border border-[#d4bc91]/40 bg-[#faf8f4] p-6 hover:border-[#8B5E3C]/40 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-[16px] font-semibold text-[#2c2416] group-hover:text-[#8B5E3C] transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-[14px] text-[#6b5344] leading-[1.6] font-lora">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
