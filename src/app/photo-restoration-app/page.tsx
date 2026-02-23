import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Restoration App: Best AI Tools Compared (2026 Guide)",
  description:
    "Compare the best photo restoration apps for iOS and Android. AI-powered tools to fix damaged, faded, and old photos. Free trials available. Updated 2026.",
  alternates: { canonical: "/photo-restoration-app" },
  keywords: [
    "photo restoration app",
    "best photo restoration app",
    "AI photo restoration",
    "restore old photos app",
    "photo repair app",
    "photo enhancer app",
  ],
  openGraph: {
    title: "Best Photo Restoration Apps 2026: AI Tools Compared",
    description:
      "Compare top photo restoration apps for mobile and web. Find the best app to restore old, damaged photos with AI.",
    type: "article",
    images: [{ url: "/blog/before-after-examples.jpg", width: 1200, height: 630, alt: "Photo restoration app comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Photo Restoration Apps 2026",
    description: "Compare AI photo restoration apps. Free trials, pricing, and features compared.",
    images: ["/blog/before-after-examples.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Photo Restoration App: Best AI Tools Compared (2026 Guide)",
  description: "Comprehensive comparison of the best photo restoration apps for mobile and web in 2026.",
  image: "https://www.artimagehub.com/blog/before-after-examples.jpg",
  datePublished: "2026-02-23",
  dateModified: "2026-02-23",
  author: { "@type": "Organization", name: "ArtImageHub", url: "https://www.artimagehub.com" },
  publisher: {
    "@type": "Organization",
    name: "ArtImageHub",
    url: "https://www.artimagehub.com",
    logo: { "@type": "ImageObject", url: "https://www.artimagehub.com/favicon.ico" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best photo restoration app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ArtImageHub is the best photo restoration app for most users. It offers AI-powered restoration on web and mobile, with 3 free photos and a one-time $29.9 payment (vs $120/year subscriptions). Other top options include Remini (mobile-focused, $9.99/month) and VanceAI (web-based, credit system).",
      },
    },
    {
      "@type": "Question",
      name: "Are photo restoration apps free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most photo restoration apps offer free trials. ArtImageHub provides 3 free restorations. Remini offers limited free processing. For unlimited use, apps charge $9.99-$29.9/month (subscription) or $29.9 one-time (ArtImageHub).",
      },
    },
    {
      "@type": "Question",
      name: "Can I restore photos on my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Web-based apps like ArtImageHub work on any phone browser (iOS/Android). Native mobile apps include Remini (iOS/Android). Web apps offer more flexibility and avoid app store restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "What features should a good photo restoration app have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essential features: AI scratch removal, face enhancement, resolution upscaling (4×), colorization for B&W photos, batch processing, high-resolution output (1080p+), no watermarks (paid tier), and reasonable pricing (avoid expensive subscriptions).",
      },
    },
  ],
};

export default function PhotoRestorationAppPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2c2416] via-[#3d2f1e] to-[#2c2416] border-b border-[#8B5E3C]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_-10%,rgba(139,94,60,0.15),transparent)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 sm:py-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-[13px] font-semibold text-[#D4A96A] border border-[#8B5E3C]/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A96A] shadow-[0_0_8px_rgba(212,169,106,0.6)]" />
            2026 Comparison · Updated Feb 23
          </div>
          <h1 className="font-playfair text-[40px] sm:text-[56px] lg:text-[64px] font-800 tracking-[-0.04em] leading-[1.05] text-[#faf8f4] mb-6">
            Best Photo Restoration
            <br />
            <span className="text-[#D4A96A]">Apps in 2026</span>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#faf8f4]/80 leading-[1.6] max-w-2xl font-lora">
            Compare the top AI photo restoration apps for mobile and web. Find the best tool to restore old, damaged,
            and faded photos — with honest pricing, features, and results compared.
          </p>
        </div>
      </div>

      {/* Quick Comparison Table */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-[32px] sm:text-[40px] font-800 text-[#2c2416] mb-3">Top 5 Apps Compared</h2>
            <p className="text-[17px] text-[#6b5344] font-lora">Updated February 2026 with latest pricing and features</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left bg-white rounded-2xl overflow-hidden shadow-xl">
              <thead className="bg-gradient-to-r from-[#8B5E3C] to-[#6b4628] text-white">
                <tr>
                  <th className="py-4 px-5 text-[14px] font-bold uppercase tracking-wide">App</th>
                  <th className="py-4 px-5 text-[14px] font-bold uppercase tracking-wide">Platform</th>
                  <th className="py-4 px-5 text-[14px] font-bold uppercase tracking-wide">Pricing</th>
                  <th className="py-4 px-5 text-[14px] font-bold uppercase tracking-wide">Free Trial</th>
                  <th className="py-4 px-5 text-[14px] font-bold uppercase tracking-wide">Best For</th>
                  <th className="py-4 px-5 text-[14px] font-bold uppercase tracking-wide">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4bc91]/30">
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-5">
                    <div className="font-bold text-[16px] text-[#2c2416]">ArtImageHub</div>
                    <div className="text-[13px] text-[#8B5E3C] font-semibold">✓ Recommended</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">Web + Mobile</td>
                  <td className="py-5 px-5">
                    <div className="font-semibold text-[#2c2416]">$29.9 once</div>
                    <div className="text-[13px] text-[#6b5344]">Lifetime access</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">3 photos free</td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344] font-lora">One-time payment, no subscription</td>
                  <td className="py-5 px-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-[13px] text-[#6b5344]">4.8</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-5">
                    <div className="font-bold text-[16px] text-[#2c2416]">Remini</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">iOS + Android</td>
                  <td className="py-5 px-5">
                    <div className="font-semibold text-[#2c2416]">$9.99/month</div>
                    <div className="text-[13px] text-[#6b5344]">$119.88/year</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">Limited free</td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344] font-lora">Mobile-first, face enhancement</td>
                  <td className="py-5 px-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="text-[13px] text-[#6b5344]">4.5</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-5">
                    <div className="font-bold text-[16px] text-[#2c2416]">VanceAI</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">Web only</td>
                  <td className="py-5 px-5">
                    <div className="font-semibold text-[#2c2416]">$9.9-39/month</div>
                    <div className="text-[13px] text-[#6b5344]">Credit-based</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">3 credits</td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344] font-lora">Professional editing tools</td>
                  <td className="py-5 px-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="text-[13px] text-[#6b5344]">4.3</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-5">
                    <div className="font-bold text-[16px] text-[#2c2416]">MyHeritage</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">Web + iOS + Android</td>
                  <td className="py-5 px-5">
                    <div className="font-semibold text-[#2c2416]">$299/year</div>
                    <div className="text-[13px] text-[#6b5344]">Bundled with genealogy</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">14-day trial</td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344] font-lora">Genealogy + photo tools</td>
                  <td className="py-5 px-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="text-[13px] text-[#6b5344]">4.4</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#faf8f4]/50 transition-colors">
                  <td className="py-5 px-5">
                    <div className="font-bold text-[16px] text-[#2c2416]">Hotpot.ai</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">Web only</td>
                  <td className="py-5 px-5">
                    <div className="font-semibold text-[#2c2416]">Pay per image</div>
                    <div className="text-[13px] text-[#6b5344]">$2-5/photo</div>
                  </td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344]">1 photo free</td>
                  <td className="py-5 px-5 text-[14px] text-[#6b5344] font-lora">Occasional use</td>
                  <td className="py-5 px-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="text-[13px] text-[#6b5344]">4.2</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/old-photo-restoration"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-8 py-4 text-[16px] font-semibold text-[#faf8f4] hover:bg-[#7a5234] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#8B5E3C]/30"
            >
              Try ArtImageHub Free (3 Photos)
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-3 text-[14px] text-[#6b5344] font-lora">No signup · No credit card · 30-second results</p>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#d4bc91]/40">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-playfair text-[36px] sm:text-[44px] font-800 text-[#2c2416] mb-12 text-center">
            Detailed App Reviews
          </h2>

          <div className="space-y-12">
            {/* ArtImageHub Review */}
            <div className="rounded-2xl border-2 border-[#8B5E3C]/40 bg-[#faf8f4] p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[28px] font-bold text-[#2c2416] mb-2">1. ArtImageHub</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-[18px]">★★★★★</span>
                    <span className="text-[15px] text-[#6b5344]">4.8/5.0</span>
                  </div>
                </div>
                <div className="inline-flex rounded-full bg-[#8B5E3C] px-4 py-2 text-[13px] font-bold text-white uppercase tracking-wide">
                  Best Value
                </div>
              </div>

              <p className="text-[17px] text-[#6b5344] font-lora leading-[1.7] mb-6">
                <strong className="text-[#2c2416]">Best for:</strong> Users who want professional AI restoration without
                expensive subscriptions. Works on any device (web + mobile browser).
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl bg-white border border-[#d4bc91]/30 p-5">
                  <div className="text-[13px] font-bold text-[#8B5E3C] mb-3 uppercase tracking-wide">Pros</div>
                  <ul className="space-y-2 text-[15px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>One-time payment $29.9 (vs $120/year subscriptions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>3 free photos to test before buying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>Works on any device (no app install)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>Fast results (30 seconds per photo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>No watermarks on paid tier</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white border border-[#d4bc91]/30 p-5">
                  <div className="text-[13px] font-bold text-[#6b5344] mb-3 uppercase tracking-wide">Cons</div>
                  <ul className="space-y-2 text-[15px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344] mt-0.5">✗</span>
                      <span>Free tier limited to 3 photos total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344] mt-0.5">✗</span>
                      <span>Web-based (no native mobile app yet)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-[#8B5E3C]/30 p-5">
                <p className="text-[15px] text-[#6b5344] font-lora leading-[1.7]">
                  <strong className="text-[#2c2416]">Bottom line:</strong> Best overall value. The one-time payment saves
                  $90+ per year compared to Remini. Quality is on par with expensive apps. Perfect for restoring a large
                  family photo collection.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/old-photo-restoration"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-7 py-3 text-[15px] font-semibold text-white hover:bg-[#7a5234] transition-colors"
                >
                  Try ArtImageHub Free
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Remini Review */}
            <div className="rounded-2xl border border-[#d4bc91]/40 bg-white p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[28px] font-bold text-[#2c2416] mb-2">2. Remini</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-[18px]">★★★★☆</span>
                    <span className="text-[15px] text-[#6b5344]">4.5/5.0</span>
                  </div>
                </div>
                <div className="inline-flex rounded-full bg-[#6b5344]/10 px-4 py-2 text-[13px] font-bold text-[#6b5344] uppercase tracking-wide">
                  Mobile-First
                </div>
              </div>

              <p className="text-[17px] text-[#6b5344] font-lora leading-[1.7] mb-6">
                <strong className="text-[#2c2416]">Best for:</strong> Mobile users who prefer native apps. Excellent face
                enhancement AI.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl bg-[#faf8f4] border border-[#d4bc91]/30 p-5">
                  <div className="text-[13px] font-bold text-[#8B5E3C] mb-3 uppercase tracking-wide">Pros</div>
                  <ul className="space-y-2 text-[15px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>Excellent mobile app (iOS + Android)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>Best-in-class face enhancement AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5E3C] mt-0.5">✓</span>
                      <span>Large user base (100M+ downloads)</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#faf8f4] border border-[#d4bc91]/30 p-5">
                  <div className="text-[13px] font-bold text-[#6b5344] mb-3 uppercase tracking-wide">Cons</div>
                  <ul className="space-y-2 text-[15px] text-[#6b5344] font-lora">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344] mt-0.5">✗</span>
                      <span>Expensive subscription ($9.99/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344] mt-0.5">✗</span>
                      <span>No scratch/damage removal feature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b5344] mt-0.5">✗</span>
                      <span>Limited web version</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl bg-[#faf8f4] border border-[#d4bc91]/30 p-5">
                <p className="text-[15px] text-[#6b5344] font-lora leading-[1.7]">
                  <strong className="text-[#2c2416]">Bottom line:</strong> Great mobile app, but subscription cost adds up
                  ($119.88/year). Best for users who only need face enhancement, not full photo restoration.
                </p>
              </div>
            </div>

            {/* Brief mentions of others */}
            <div className="space-y-6">
              {[
                {
                  name: "VanceAI",
                  rating: "4.3",
                  best: "Professional editors who need advanced tools",
                  price: "$9.9-39/month",
                  pro: "Comprehensive editing suite",
                  con: "Credit-based pricing confusing",
                },
                {
                  name: "MyHeritage",
                  rating: "4.4",
                  best: "Users already building family trees",
                  price: "$299/year",
                  pro: "Integrates with genealogy platform",
                  con: "Very expensive for photo tools alone",
                },
                {
                  name: "Hotpot.ai",
                  rating: "4.2",
                  best: "One-time photo restoration needs",
                  price: "$2-5/photo",
                  pro: "No subscription, pay per use",
                  con: "Expensive for multiple photos",
                },
              ].map((app) => (
                <div key={app.name} className="rounded-xl border border-[#d4bc91]/30 bg-white p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[20px] font-semibold text-[#2c2416]">{app.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="text-[14px] text-[#6b5344]">{app.rating}</span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 text-[14px]">
                    <div>
                      <div className="text-[12px] font-bold text-[#6b5344] mb-1 uppercase">Best For</div>
                      <div className="text-[#2c2416] font-lora">{app.best}</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#6b5344] mb-1 uppercase">Pricing</div>
                      <div className="text-[#2c2416]">{app.price}</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#8B5E3C] mb-1">✓ Pro:</div>
                      <div className="text-[#6b5344] font-lora mb-2">{app.pro}</div>
                      <div className="text-[12px] font-bold text-[#6b5344] mb-1">✗ Con:</div>
                      <div className="text-[#6b5344] font-lora">{app.con}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-playfair text-[36px] sm:text-[44px] font-800 text-[#2c2416] mb-12 text-center">
            Common Questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: "What is the best photo restoration app?",
                a: "ArtImageHub is the best photo restoration app for most users. It offers AI-powered restoration on web and mobile, with 3 free photos and a one-time $29.9 payment (vs $120/year subscriptions). Other top options include Remini (mobile-focused, $9.99/month) and VanceAI (web-based, credit system).",
              },
              {
                q: "Are photo restoration apps free?",
                a: "Most photo restoration apps offer free trials. ArtImageHub provides 3 free restorations. Remini offers limited free processing. For unlimited use, apps charge $9.99-$29.9/month (subscription) or $29.9 one-time (ArtImageHub).",
              },
              {
                q: "Can I restore photos on my phone?",
                a: "Yes. Web-based apps like ArtImageHub work on any phone browser (iOS/Android). Native mobile apps include Remini (iOS/Android). Web apps offer more flexibility and avoid app store restrictions.",
              },
              {
                q: "What features should a good photo restoration app have?",
                a: "Essential features: AI scratch removal, face enhancement, resolution upscaling (4×), colorization for B&W photos, batch processing, high-resolution output (1080p+), no watermarks (paid tier), and reasonable pricing (avoid expensive subscriptions).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#d4bc91]/40 bg-white p-6 hover:border-[#8B5E3C]/40 hover:shadow-md transition-all"
              >
                <dt className="text-[17px] font-semibold text-[#2c2416] mb-3">{item.q}</dt>
                <dd className="text-[15px] text-[#6b5344] leading-[1.7] font-lora">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#d4bc91]/40">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-playfair text-[32px] sm:text-[40px] font-800 text-[#2c2416] mb-4">
            Try the Best Photo Restoration App Free
          </h2>
          <p className="text-[18px] text-[#6b5344] font-lora mb-8 leading-[1.7]">
            Start with 3 free photos on ArtImageHub. No app install, no signup, no credit card. See the AI quality for
            yourself in 30 seconds.
          </p>
          <Link
            href="/old-photo-restoration"
            className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-8 py-4 text-[16px] font-semibold text-white hover:bg-[#7a5234] active:scale-[0.98] transition-all shadow-lg shadow-[#8B5E3C]/30"
          >
            Start Free Trial Now
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-[14px] text-[#6b5344]/80 font-lora">Works on any device · Results in 30 seconds</p>
        </div>
      </section>
    </div>
  );
}
