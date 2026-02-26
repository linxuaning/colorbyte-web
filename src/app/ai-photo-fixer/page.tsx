import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';

export const metadata: Metadata = {
  title: 'AI Photo Fixer | Fix Photos Automatically in 30 Seconds',
  description: 'Fix old photos automatically with AI. Remove scratches, enhance blurry faces, restore colors, upscale resolution. Try 3 photos free, no signup. $4.99 lifetime.',
  keywords: [
    'ai photo fixer',
    'ai photo repair',
    'ai photo fix',
    'automatic photo fixer',
    'ai photo restoration',
    'fix photos with ai',
    'ai photo repair tool',
    'ai image fixer',
    'automatic photo repair',
    'ai photo enhancer'
  ],
  alternates: { canonical: '/ai-photo-fixer' },
  openGraph: {
    title: 'AI Photo Fixer | Fix Photos Automatically in 30 Seconds',
    description: 'Fix old photos automatically with AI. Remove scratches, enhance faces, restore colors. Try 3 free.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'AI photo fixer before and after' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Photo Fixer - Fix Photos Automatically',
    description: 'Remove scratches, enhance faces, restore colors with AI. Try 3 photos free.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Fix Photos with AI",
  description: "Automatically fix old, damaged, or low-quality photos using AI — no manual editing skills required.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub AI Photo Fixer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload damaged photo",
      text: "Upload your photo to ArtImageHub's AI fixer. Supports scratched, blurry, faded, or damaged photos. No signup required.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI analyzes and fixes automatically",
      text: "AI detects all issues (scratches, blur, fading, tears) and fixes them automatically in 30 seconds. No manual editing needed.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download fixed photo",
      text: "Preview before/after and download your fixed photo instantly. Try 3 photos free, no credit card required.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does AI photo fixer work?", acceptedAnswer: { "@type": "Answer", text: "AI photo fixer uses machine learning trained on millions of photos to automatically detect and repair damage. It identifies scratches, fading, blur, tears, and color issues, then applies targeted fixes — all in 30 seconds without manual editing." } },
    { "@type": "Question", name: "What photo problems can AI fix?", acceptedAnswer: { "@type": "Answer", text: "AI photo fixer handles: scratches and tears, blurry or out-of-focus shots, faded colors and discoloration, water/fire damage stains, creases and cracks, low resolution (upscales to 4K), missing color (colorizes B&W), underexposure/overexposure, red-eye and glare." } },
    { "@type": "Question", name: "Is AI photo fixing as good as manual Photoshop editing?", acceptedAnswer: { "@type": "Answer", text: "For 90% of common photo issues (scratches, fading, blur), AI photo fixer delivers professional results instantly. Manual Photoshop editing is still better for: complex artistic retouching, removing large objects from scenes, precise color grading for print. But AI is 100x faster and doesn't require Photoshop skills." } },
    { "@type": "Question", name: "Can I fix multiple photos at once with AI?", acceptedAnswer: { "@type": "Answer", text: "Yes! Free users get 3 photos. Pro Lifetime ($4.99 one-time) gives unlimited photo fixing. Process photos one at a time (30 sec each) or queue multiple for batch fixing." } },
    { "@type": "Question", name: "Do I need photo editing skills to use AI photo fixer?", acceptedAnswer: { "@type": "Answer", text: "No! That's the point. AI photo fixer is fully automatic — just upload and download. No Photoshop, no Lightroom, no manual editing. Perfect for non-photographers who want professional results." } },
    { "@type": "Question", name: "How much does AI photo fixing cost?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub: 3 free, then $4.99 lifetime unlimited. Competitors: Remini $9.99/month, VanceAI $19.9/month, Topaz Photo AI $199 one-time. We're the most affordable unlimited AI photo fixer." } },
    { "@type": "Question", name: "Can AI fix severely damaged photos?", acceptedAnswer: { "@type": "Answer", text: "AI works best on photos with 10-80% damage. Very light damage (10-30%): perfect results. Moderate damage (30-60%): great results. Heavy damage (60-80%): good results but may need touch-ups. Extreme damage (>80% missing): AI struggles, manual artist recommended." } },
    { "@type": "Question", name: "What file formats does AI photo fixer support?", acceptedAnswer: { "@type": "Answer", text: "Upload: JPG, PNG, WEBP, HEIC up to 20MB. Download: High-res JPG or PNG. Works with photos from: smartphones, scanned prints, digital cameras, screenshots, social media." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub AI Photo Fixer",
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

export default function AIPhotoFixerPage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section - Clean Modern Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          {/* AI Badge */}
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-300 rounded-full">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 7H7v6h6V7z" />
              <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2z" clipRule="evenodd" />
            </svg>
            <span className="text-indigo-900 text-sm font-bold tracking-wide uppercase">
              Powered by AI • Fully Automatic
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1]">
            AI Photo Fixer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Fixes Everything Automatically
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 mb-10 max-w-3xl leading-relaxed">
            No Photoshop skills required. Upload damaged, blurry, or faded photos — AI detects and fixes all issues in <span className="font-bold text-indigo-600">30 seconds</span>. Scratches, tears, color fading, blur, resolution — all handled automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/old-photo-restoration"
              className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/60 hover:scale-105"
            >
              Fix 3 Photos Free →
            </Link>
            <a
              href="#what-ai-fixes"
              className="px-10 py-5 bg-white hover:bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-lg font-bold rounded-xl transition-all"
            >
              See What AI Fixes ↓
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No editing skills needed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">30-second automatic fixing</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">3 free photos, no signup</span>
            </div>
          </div>
        </div>
      </section>

      {/* What AI Fixes Section */}
      <section id="what-ai-fixes" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              What Can AI Photo Fixer Handle?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              One AI tool fixes all common photo problems automatically
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scratches & Tears */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🩹</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Scratches & Tears</h3>
              <p className="text-slate-700 leading-relaxed">
                AI detects and fills in scratches, tears, cracks, and missing pieces. Works on photos with up to 60% damage.
              </p>
              <div className="mt-4 text-sm font-semibold text-red-700">
                Auto-detects damage patterns
              </div>
            </div>

            {/* Blur & Out of Focus */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Blur & Out of Focus</h3>
              <p className="text-slate-700 leading-relaxed">
                Sharpens blurry faces and details. Handles motion blur, camera shake, and out-of-focus shots automatically.
              </p>
              <div className="mt-4 text-sm font-semibold text-blue-700">
                Face-aware sharpening
              </div>
            </div>

            {/* Faded Colors */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Faded Colors</h3>
              <p className="text-slate-700 leading-relaxed">
                Restores vibrant colors to faded photos. Fixes sun damage, chemical degradation, and time-based color loss.
              </p>
              <div className="mt-4 text-sm font-semibold text-yellow-700">
                Color restoration AI
              </div>
            </div>

            {/* Water & Fire Damage */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Water & Fire Damage</h3>
              <p className="text-slate-700 leading-relaxed">
                Removes water stains, smoke damage, and fire discoloration. Recovers photos thought to be lost forever.
              </p>
              <div className="mt-4 text-sm font-semibold text-purple-700">
                Stain removal AI
              </div>
            </div>

            {/* Low Resolution */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Low Resolution</h3>
              <p className="text-slate-700 leading-relaxed">
                Upscales photos to 4K quality. Perfect for printing small old photos at large sizes without pixelation.
              </p>
              <div className="mt-4 text-sm font-semibold text-green-700">
                Super-resolution AI (up to 16x)
              </div>
            </div>

            {/* Black & White */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌈</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Black & White</h3>
              <p className="text-slate-700 leading-relaxed">
                Adds realistic color to B&W photos. AI predicts accurate skin tones, clothing colors, and backgrounds.
              </p>
              <div className="mt-4 text-sm font-semibold text-indigo-700">
                Colorization AI (60+ years trained)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-16 text-center">
            How AI Photo Fixer Works
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Upload Any Photo</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Drag-drop or click to upload. AI photo fixer accepts: scratched photos, blurry shots, faded color prints, water-damaged photos, low-resolution scans, B&W photos needing color. No file prep needed — AI handles any condition.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">AI Detects All Issues</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  In milliseconds, AI scans your photo and identifies: scratch locations and sizes, blurry regions needing sharpening, faded areas requiring color restoration, missing sections to reconstruct, resolution improvements possible. No manual tagging required.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Automatic Fixing (30 sec)</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  AI applies targeted fixes: fills scratches using surrounding context, sharpens faces and important details, restores natural colors, removes stains and damage, upscales to 4K resolution. All fixes happen automatically in 15-30 seconds.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                4
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Download Fixed Photo</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Preview before/after comparison. If satisfied, download your fixed photo instantly. Try 3 photos free. Need more? $4.99 one-time for unlimited lifetime fixing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/old-photo-restoration"
              className="inline-block px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xl font-bold rounded-xl transition-all shadow-lg hover:scale-105"
            >
              Try AI Photo Fixer Free →
            </Link>
          </div>
        </div>
      </section>

      {/* AI vs Manual Comparison */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 text-center">
            AI Photo Fixer vs Manual Editing
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Why AI fixing is 100x faster than Photoshop
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-2xl rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left font-black text-lg">Feature</th>
                  <th className="px-6 py-4 text-left font-black text-lg">AI Photo Fixer</th>
                  <th className="px-6 py-4 text-left font-black text-lg">Manual Photoshop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Processing Time</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">30 seconds (automatic)</td>
                  <td className="px-6 py-4 text-slate-600">2-8 hours (manual work)</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Skills Required</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">None — fully automatic</td>
                  <td className="px-6 py-4 text-slate-600">Advanced Photoshop skills</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Cost per Photo</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">$4.99 lifetime unlimited</td>
                  <td className="px-6 py-4 text-slate-600">Photoshop $54.99/mo + your time</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Scratch Removal</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">Automatic detection & fill</td>
                  <td className="px-6 py-4 text-slate-600">Clone stamp (slow, manual)</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Face Enhancement</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">AI face-aware sharpening</td>
                  <td className="px-6 py-4 text-slate-600">Manual sharpen masks</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Color Restoration</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">AI predicts original colors</td>
                  <td className="px-6 py-4 text-slate-600">Guesswork color adjustments</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Upscaling</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">AI super-resolution (16x)</td>
                  <td className="px-6 py-4 text-slate-600">Limited bicubic scaling</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Consistency</td>
                  <td className="px-6 py-4 font-bold text-indigo-900">Same quality every time</td>
                  <td className="px-6 py-4 text-slate-600">Depends on artist skill</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Best For</td>
                  <td className="px-6 py-4 text-indigo-900">Common damage (90% of photos)</td>
                  <td className="px-6 py-4 text-slate-600">Complex artistic retouching</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Try AI Photo Fixer Free
            </h2>
            <p className="text-xl text-slate-700">
              Upload your first photo and see AI fix it automatically in 30 seconds
            </p>
          </div>

          <RestoreClient />

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-indigo-600 mb-2">100%</div>
              <div className="text-slate-700">Automatic — no editing skills</div>
            </div>
            <div>
              <div className="text-4xl font-black text-indigo-600 mb-2">30 sec</div>
              <div className="text-slate-700">Average AI fixing time</div>
            </div>
            <div>
              <div className="text-4xl font-black text-indigo-600 mb-2">$4.99</div>
              <div className="text-slate-700">Lifetime unlimited fixing</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-12 text-center">
            AI Photo Fixer FAQ
          </h2>

          <div className="space-y-6">
            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How does AI photo fixer work?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                AI photo fixer uses machine learning trained on millions of photos to automatically detect and repair damage. It identifies scratches, fading, blur, tears, and color issues, then applies targeted fixes — all in 30 seconds without manual editing.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                What photo problems can AI fix?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                AI photo fixer handles: scratches and tears, blurry or out-of-focus shots, faded colors and discoloration, water/fire damage stains, creases and cracks, low resolution (upscales to 4K), missing color (colorizes B&W), underexposure/overexposure, red-eye and glare.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Is AI photo fixing as good as manual Photoshop editing?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                For 90% of common photo issues (scratches, fading, blur), AI photo fixer delivers professional results instantly. Manual Photoshop editing is still better for: complex artistic retouching, removing large objects from scenes, precise color grading for print. But AI is 100x faster and doesn't require Photoshop skills.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Can I fix multiple photos at once with AI?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Yes! Free users get 3 photos. Pro Lifetime ($4.99 one-time) gives unlimited photo fixing. Process photos one at a time (30 sec each) or queue multiple for batch fixing.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Do I need photo editing skills to use AI photo fixer?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                No! That's the point. AI photo fixer is fully automatic — just upload and download. No Photoshop, no Lightroom, no manual editing. Perfect for non-photographers who want professional results.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How much does AI photo fixing cost?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                ArtImageHub: 3 free, then $4.99 lifetime unlimited. Competitors: Remini $9.99/month, VanceAI $19.9/month, Topaz Photo AI $199 one-time. We're the most affordable unlimited AI photo fixer.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Can AI fix severely damaged photos?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                AI works best on photos with 10-80% damage. Very light damage (10-30%): perfect results. Moderate damage (30-60%): great results. Heavy damage (60-80%): good results but may need touch-ups. Extreme damage (&gt;80% missing): AI struggles, manual artist recommended.
              </p>
            </details>

            <details className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                What file formats does AI photo fixer support?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Upload: JPG, PNG, WEBP, HEIC up to 20MB. Download: High-res JPG or PNG. Works with photos from: smartphones, scanned prints, digital cameras, screenshots, social media.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Fix Your Photos with AI?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            No Photoshop skills, no manual editing, no hours of work. Just upload and let AI fix everything automatically in 30 seconds.
          </p>

          <Link
            href="/old-photo-restoration"
            className="inline-block px-14 py-7 bg-white hover:bg-indigo-50 text-indigo-900 text-xl font-black rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            Fix 3 Photos Free →
          </Link>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-indigo-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% automatic</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>3 photos free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>$4.99 lifetime unlimited</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
