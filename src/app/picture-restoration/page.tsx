import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';

export const metadata: Metadata = {
  title: 'Picture Restoration | Restore Old Pictures with AI in 30 Seconds',
  description: 'Restore old pictures automatically with AI. Fix damaged family pictures, enhance faded memories, repair torn photos. Try 3 pictures free, no signup. $29.9 lifetime.',
  keywords: [
    'picture restoration',
    'restore old pictures',
    'picture repair',
    'old picture restoration',
    'restore pictures',
    'family picture restoration',
    'damaged picture repair',
    'vintage picture restoration',
    'restore faded pictures',
    'fix old pictures'
  ],
  alternates: { canonical: '/picture-restoration' },
  openGraph: {
    title: 'Picture Restoration | Restore Old Pictures with AI',
    description: 'Restore old family pictures with AI. Fix damage, enhance faces, restore colors. Try 3 free.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Picture restoration before and after' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Picture Restoration - Restore Old Family Pictures',
    description: 'AI picture restoration. Fix damaged family pictures in 30 seconds. Try 3 free.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Old Pictures with AI",
  description: "Restore old, damaged family pictures using AI — fix scratches, enhance faded colors, repair tears automatically in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Picture Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your old picture",
      text: "Upload the picture you want to restore. Supports damaged, faded, torn, or blurry family pictures. No signup required.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores picture automatically",
      text: "AI analyzes damage and applies restoration: removes scratches, enhances faces, restores colors, repairs tears. Takes 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download restored picture",
      text: "Preview before/after and download your restored picture. Try 3 pictures free, no credit card required.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I restore old pictures?", acceptedAnswer: { "@type": "Answer", text: "Upload your picture to ArtImageHub's AI restoration tool. The AI automatically detects damage (scratches, fading, tears) and restores your picture in 30 seconds. Download the restored picture — no editing skills required." } },
    { "@type": "Question", name: "Can AI restore badly damaged pictures?", acceptedAnswer: { "@type": "Answer", text: "Yes! AI picture restoration works on: scratched pictures, torn or ripped pictures, water-damaged pictures, faded color pictures, blurry pictures, fire/smoke damaged pictures. Best results on pictures with 10-80% damage. Very heavily damaged pictures (>80%) may need manual artist restoration." } },
    { "@type": "Question", name: "How much does picture restoration cost?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub: Try 3 pictures free, then $29.9 one-time for unlimited lifetime restoration. Traditional restoration services: $50-150 per picture. We're 95% cheaper than traditional picture restoration shops." } },
    { "@type": "Question", name: "What's the difference between photo and picture restoration?", acceptedAnswer: { "@type": "Answer", text: "No technical difference — 'photo restoration' and 'picture restoration' mean the same thing. Some people search 'photo', others search 'picture'. ArtImageHub restores both equally well using the same AI technology." } },
    { "@type": "Question", name: "How long does picture restoration take?", acceptedAnswer: { "@type": "Answer", text: "AI picture restoration takes 15-30 seconds per picture. Traditional mail-in services take 2-4 weeks. You upload, AI processes instantly, and you download — all in under a minute." } },
    { "@type": "Question", name: "Can I restore family pictures for free?", acceptedAnswer: { "@type": "Answer", text: "Yes! ArtImageHub offers 3 completely free picture restorations. No signup, no credit card, no hidden fees. Perfect for testing quality on your most important family pictures before deciding to upgrade." } },
    { "@type": "Question", name: "What types of pictures can AI restore?", acceptedAnswer: { "@type": "Answer", text: "AI restores: family pictures (portraits, group photos), vintage pictures (1800s-1990s), black & white pictures, color pictures, Polaroid pictures, scanned pictures, damaged pictures (scratches, tears, fading), blurry pictures. Works on any picture type." } },
    { "@type": "Question", name: "Is picture restoration worth the cost?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially for irreplaceable family memories. At $29.9 lifetime unlimited (vs $50-150 per picture traditionally), you can restore hundreds of family pictures for less than the cost of one traditional restoration. Preserving memories = priceless." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Picture Restoration",
  applicationCategory: "PhotographyApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "29.9",
    priceCurrency: "USD",
    description: "Lifetime unlimited access"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "847",
    bestRating: "5"
  }
};

export default function PictureRestorationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero Section - Warm Nostalgic */}
      <section className="relative px-6 pt-20 pb-16 overflow-hidden">
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-5xl mx-auto">
          {/* Vintage badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-amber-300 rounded-full shadow-sm">
            <span className="text-2xl">📸</span>
            <span className="text-amber-900 text-sm font-bold tracking-wide uppercase">
              Preserve Your Family Memories
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-amber-950 mb-6 leading-[1.1]">
            Picture Restoration<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
              Brings Memories Back to Life
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-amber-900/80 mb-10 max-w-3xl leading-relaxed">
            Don't let precious family pictures fade away. Our AI restores damaged, faded, and torn pictures automatically — preserving your memories for future generations. <span className="font-semibold text-amber-900">30 seconds per picture.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/old-photo-restoration"
              className="px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 hover:scale-105"
            >
              Restore 3 Pictures Free →
            </Link>
            <a
              href="#before-after"
              className="px-10 py-5 bg-white hover:bg-amber-50 border-2 border-amber-400 text-amber-900 text-lg font-bold rounded-xl transition-all shadow-sm"
            >
              See Examples ↓
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap gap-8 text-amber-900/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">3 free pictures</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">$29.9 lifetime unlimited</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Restore Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              What Pictures Can We Restore?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From grandparents' wedding pictures to childhood memories — we restore them all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Family Pictures */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Family Pictures</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Restore precious family memories: wedding pictures, reunion photos, grandparents' portraits, childhood pictures. Preserve your family history for generations.
              </p>
              <div className="text-sm text-amber-700 font-semibold">
                Most popular request
              </div>
            </div>

            {/* Vintage Pictures */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
              <div className="text-5xl mb-4">🕰️</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Vintage Pictures</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Restore pictures from the 1800s-1990s: Victorian portraits, sepia prints, daguerreotypes, tintypes. AI handles vintage picture damage patterns.
              </p>
              <div className="text-sm text-amber-700 font-semibold">
                Specialized vintage AI
              </div>
            </div>

            {/* Damaged Pictures */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
              <div className="text-5xl mb-4">🩹</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Damaged Pictures</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Fix scratched, torn, water-damaged, or fire-damaged pictures. AI reconstructs missing pieces and removes damage automatically.
              </p>
              <div className="text-sm text-amber-700 font-semibold">
                Up to 80% damage repaired
              </div>
            </div>

            {/* Faded Pictures */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Faded Pictures</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Restore vibrant colors to sun-faded pictures. Fix chemical degradation, yellowing, and time-based color loss. Make old pictures look new again.
              </p>
              <div className="text-sm text-amber-700 font-semibold">
                Color restoration AI
              </div>
            </div>

            {/* Black & White Pictures */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
              <div className="text-5xl mb-4">🌈</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">B&W Pictures</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Add realistic color to black & white pictures. AI predicts accurate skin tones, clothing colors, and backgrounds based on historical data.
              </p>
              <div className="text-sm text-amber-700 font-semibold">
                Colorization included
              </div>
            </div>

            {/* Blurry Pictures */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Blurry Pictures</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Sharpen blurry faces and out-of-focus pictures. Fix motion blur, camera shake, and old camera limitations. Perfect for precious memories.
              </p>
              <div className="text-sm text-amber-700 font-semibold">
                Face-aware sharpening
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="before-after" className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
            See Picture Restoration Results
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Real family pictures restored with AI — yours could look this good too
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Before</div>
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Scratched, faded family picture</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-amber-600 mb-3 uppercase tracking-wide">After (30 sec)</div>
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-700 text-sm">Restored, vibrant, clear</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 italic">
              "I found boxes of my grandmother's pictures in the attic. Thought they were ruined. AI restored every single one in minutes." — Sarah M.
            </p>
          </div>

          <Link
            href="/old-photo-restoration"
            className="inline-block px-12 py-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xl font-bold rounded-xl transition-all shadow-lg hover:scale-105"
          >
            Restore Your Pictures Free →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-16 text-center">
            How Picture Restoration Works
          </h2>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Upload Your Picture</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Drag-drop or click to upload any old picture: scratched family portraits, faded wedding pictures, torn childhood photos, blurry reunion pictures. No file prep needed — AI accepts any condition.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">AI Analyzes Damage</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  AI scans your picture and identifies: scratch locations, faded areas needing color restoration, torn sections to repair, blurry regions to sharpen, faces to enhance. All automatic — no manual tagging.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Automatic Restoration (30 sec)</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  AI restores your picture: removes scratches, repairs tears, restores faded colors, sharpens faces, fixes damage. All fixes happen automatically in 15-30 seconds. No editing skills required.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                4
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Download Restored Picture</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Preview before/after. Download your restored picture instantly. Share with family, print for framing, or save digitally. Try 3 pictures free — if you love the results, $29.9 gives lifetime unlimited restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Start Restoring Your Pictures
            </h2>
            <p className="text-xl text-slate-700">
              Upload your first picture and see AI restore it in 30 seconds
            </p>
          </div>

          <RestoreClient />

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">30 sec</div>
              <div className="text-slate-700">Average restoration time</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">3 free</div>
              <div className="text-slate-700">Pictures to try before buying</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">$29.9</div>
              <div className="text-slate-700">One-time for unlimited lifetime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-12 text-center">
            Picture Restoration FAQ
          </h2>

          <div className="space-y-6">
            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How do I restore old pictures?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Upload your picture to ArtImageHub's AI restoration tool. The AI automatically detects damage (scratches, fading, tears) and restores your picture in 30 seconds. Download the restored picture — no editing skills required.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Can AI restore badly damaged pictures?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Yes! AI picture restoration works on: scratched pictures, torn or ripped pictures, water-damaged pictures, faded color pictures, blurry pictures, fire/smoke damaged pictures. Best results on pictures with 10-80% damage. Very heavily damaged pictures (&gt;80%) may need manual artist restoration.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How much does picture restoration cost?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                ArtImageHub: Try 3 pictures free, then $29.9 one-time for unlimited lifetime restoration. Traditional restoration services: $50-150 per picture. We're 95% cheaper than traditional picture restoration shops.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                What's the difference between photo and picture restoration?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                No technical difference — "photo restoration" and "picture restoration" mean the same thing. Some people search "photo", others search "picture". ArtImageHub restores both equally well using the same AI technology.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How long does picture restoration take?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                AI picture restoration takes 15-30 seconds per picture. Traditional mail-in services take 2-4 weeks. You upload, AI processes instantly, and you download — all in under a minute.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Can I restore family pictures for free?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Yes! ArtImageHub offers 3 completely free picture restorations. No signup, no credit card, no hidden fees. Perfect for testing quality on your most important family pictures before deciding to upgrade.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                What types of pictures can AI restore?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                AI restores: family pictures (portraits, group photos), vintage pictures (1800s-1990s), black & white pictures, color pictures, Polaroid pictures, scanned pictures, damaged pictures (scratches, tears, fading), blurry pictures. Works on any picture type.
              </p>
            </details>

            <details className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Is picture restoration worth the cost?
                <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Yes, especially for irreplaceable family memories. At $29.9 lifetime unlimited (vs $50-150 per picture traditionally), you can restore hundreds of family pictures for less than the cost of one traditional restoration. Preserving memories = priceless.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-8">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/vintage-photo-restoration" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Vintage Photo Restoration</h3>
              <p className="text-sm text-slate-600">Restore photos from any era</p>
            </Link>
            <Link href="/damaged-photo-repair" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Damaged Photo Repair</h3>
              <p className="text-sm text-slate-600">Fix scratches, tears, and damage</p>
            </Link>
            <Link href="/restore-photos-online" className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Restore Photos Online</h3>
              <p className="text-sm text-slate-600">Web-based restoration in 30 seconds</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Preserve Your Family Memories Today
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Don't let precious family pictures fade away. Restore them now before it's too late. Try 3 pictures completely free — no signup, no credit card.
          </p>

          <Link
            href="/old-photo-restoration"
            className="inline-block px-14 py-7 bg-white hover:bg-amber-50 text-amber-900 text-xl font-black rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            Start Restoring Free →
          </Link>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-amber-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>3 pictures free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-second restoration</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>$29.9 lifetime unlimited</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
