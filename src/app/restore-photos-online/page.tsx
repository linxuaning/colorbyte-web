import type { Metadata } from 'next';
import Link from 'next/link';
import RestoreClient from '../old-photo-restoration/restore-client';

export const metadata: Metadata = {
  title: 'Restore Photos Online Free | AI Photo Restoration in 30 Seconds',
  description: 'Restore old photos online instantly with AI. No download, no shipping photos. Fix scratches, enhance faces, colorize in 30 seconds. Try 3 photos free, $29.9 lifetime.',
  keywords: [
    'restore photos online',
    'online photo restoration',
    'restore photos online free',
    'photo restoration online',
    'restore old photos online',
    'online photo repair',
    'AI photo restoration online',
    'restore pictures online',
    'online vintage photo restoration',
    'restore damaged photos online'
  ],
  alternates: { canonical: '/restore-photos-online' },
  openGraph: {
    title: 'Restore Photos Online Free | AI Restoration in 30 Seconds',
    description: 'Restore old photos online instantly. No download, no shipping. Try 3 photos free.',
    images: [{ url: '/blog/before-after-examples.webp', width: 1200, height: 630, alt: 'Online photo restoration before and after' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restore Photos Online Free - No Download Required',
    description: 'AI-powered online photo restoration. Fix scratches, enhance faces, colorize. Try 3 photos free.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Restore Photos Online with AI",
  description: "Restore old, damaged photos online using AI — no download, no shipping, instant results in 30 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "ArtImageHub Online Photo Restoration" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload photo online",
      text: "Visit ArtImageHub and upload your old or damaged photo directly in your browser. No software download required. Supports JPG, PNG, WEBP up to 20MB.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI restores automatically online",
      text: "Our online AI analyzes and repairs damage, enhances faces, and removes scratches automatically. Processing happens in the cloud in 15-30 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download restored photo",
      text: "Preview your restored photo online and download instantly. No waiting for mail delivery. Try 3 photos free, no signup required.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I restore photos online?", acceptedAnswer: { "@type": "Answer", text: "Upload your photo to ArtImageHub's online restoration tool. The AI automatically removes scratches, enhances faces, and repairs damage in 30 seconds. Download your restored photo instantly — no software installation required." } },
    { "@type": "Question", name: "Is online photo restoration as good as professional restoration?", acceptedAnswer: { "@type": "Answer", text: "Yes! AI-powered online restoration uses advanced machine learning trained on millions of photos. It handles 90% of common damage (scratches, fading, blur) as well as professional services, but costs 95% less ($29.9 vs $50-150/photo) and delivers results in 30 seconds instead of 2-4 weeks." } },
    { "@type": "Question", name: "Do I need to download software to restore photos online?", acceptedAnswer: { "@type": "Answer", text: "No! ArtImageHub works entirely in your web browser. No download, no installation, no software required. Just visit the website, upload your photo, and get your restored image in 30 seconds." } },
    { "@type": "Question", name: "Can I restore photos online for free?", acceptedAnswer: { "@type": "Answer", text: "Yes! ArtImageHub offers 3 completely free online photo restorations. No signup, no credit card required. If you need more, Pro Lifetime is $29.9 one-time for unlimited restorations." } },
    { "@type": "Question", name: "How long does online photo restoration take?", acceptedAnswer: { "@type": "Answer", text: "Online restoration with ArtImageHub takes 15-30 seconds per photo. Traditional mail-in services take 2-4 weeks. You upload, AI processes instantly, and you download — all in under a minute." } },
    { "@type": "Question", name: "Is my photo safe when restoring online?", acceptedAnswer: { "@type": "Answer", text: "Yes! Photos are encrypted during upload, processed securely in the cloud, and automatically deleted within 24 hours. We never use your photos for AI training or share them with third parties." } },
    { "@type": "Question", name: "What types of damage can online restoration fix?", acceptedAnswer: { "@type": "Answer", text: "Online AI restoration fixes: scratches and tears, fading and discoloration, blurry faces, water damage stains, creases and cracks, low resolution (upscales to 4K), black & white colorization. It works on 90% of common photo damage types." } },
    { "@type": "Question", name: "How much does online photo restoration cost?", acceptedAnswer: { "@type": "Answer", text: "ArtImageHub: 3 free, then $29.9 lifetime unlimited. Traditional mail-in services: $50-150 per photo. Other online tools: Remini $9.99/month, VanceAI $19.9/month (subscriptions). ArtImageHub is the only one-time payment online restoration tool." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ArtImageHub Online Photo Restoration",
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

export default function RestorePhotosOnlinePage() {
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

      {/* Hero Section - Cyberpunk Tech Aesthetic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-purple-950">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-[grid-move_20s_linear_infinite]" style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 text-sm font-bold tracking-wide uppercase">
              100% Online • No Download Required
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Restore Photos Online<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              in 30 Seconds
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-cyan-100/80 mb-10 max-w-3xl leading-relaxed">
            AI-powered photo restoration directly in your browser. No software download, no shipping photos, no waiting weeks. Upload → AI restores → Download. <span className="text-cyan-300 font-semibold">Instant results.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/old-photo-restoration"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:scale-105"
            >
              <span className="relative z-10">Try 3 Photos Free Online →</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 blur transition-opacity" />
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-lg transition-all"
            >
              See How It Works ↓
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 text-cyan-100/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No software installation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">30-second results</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">95% cheaper than mail-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Restore Online Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Why Restore Photos Online?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Online restoration eliminates every frustration of traditional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instant Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Instant Results</h3>
              <p className="text-slate-600 mb-4">
                30-second AI processing vs 2-4 weeks for mail-in services. Upload and download in under a minute.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                Traditional: 2-4 weeks<br />
                Online: 30 seconds
              </div>
            </div>

            {/* No Shipping */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">No Shipping Risk</h3>
              <p className="text-slate-600 mb-4">
                Never mail your irreplaceable originals. Photos stay safe in your hands while AI works online.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                Your photos never leave home
              </div>
            </div>

            {/* 95% Cheaper */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">95% Cheaper</h3>
              <p className="text-slate-600 mb-4">
                $29.9 lifetime unlimited vs $50-150 per photo. Restore hundreds of photos for less than one traditional restoration.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                Traditional: $50-150/photo<br />
                Online: $29.9 lifetime
              </div>
            </div>

            {/* No Download */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Browser-Based</h3>
              <p className="text-slate-600 mb-4">
                Works in any web browser — Chrome, Safari, Firefox. No software to install, no updates to manage.
              </p>
              <div className="text-sm text-cyan-600 font-semibold">
                Works on Windows, Mac, iPad, phone
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">
            How Online Photo Restoration Works
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-black">
                1
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">Upload Your Photo Online</h3>
                <p className="text-cyan-100/80 text-lg leading-relaxed">
                  Open ArtImageHub in your browser and drag-drop or click to upload. No account creation, no software download. Supports JPG, PNG, WEBP up to 20MB. Your photo is encrypted during upload.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-black">
                2
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">AI Restores Automatically</h3>
                <p className="text-cyan-100/80 text-lg leading-relaxed">
                  Cloud-based AI analyzes your photo and applies: scratch/tear removal, face enhancement, super-resolution upscaling, color restoration, damage repair. Processing takes 15-30 seconds online.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-black">
                3
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">Download Instantly</h3>
                <p className="text-cyan-100/80 text-lg leading-relaxed">
                  Preview before/after comparison online. Download your restored photo immediately — no waiting for shipping. Try 3 photos free, then $29.9 one-time for unlimited lifetime access.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/old-photo-restoration"
              className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-lg font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:scale-105"
            >
              Start Restoring Online Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 text-center">
            Online vs Traditional Restoration
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            See why thousands choose online AI restoration over traditional mail-in services
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left font-black text-lg">Feature</th>
                  <th className="px-6 py-4 text-left font-black text-lg bg-gradient-to-r from-cyan-600 to-blue-600">ArtImageHub (Online)</th>
                  <th className="px-6 py-4 text-left font-black text-lg">Traditional Mail-In</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Processing Time</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">30 seconds ⚡</td>
                  <td className="px-6 py-4 text-slate-600">2-4 weeks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Cost per Photo</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">$29.9 lifetime unlimited 💰</td>
                  <td className="px-6 py-4 text-slate-600">$50-150 each</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Shipping Required</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">No — stays in browser 📦</td>
                  <td className="px-6 py-4 text-slate-600">Yes (risk of loss)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Software Installation</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">None — works in browser 🌐</td>
                  <td className="px-6 py-4 text-slate-600">N/A</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Free Trial</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">3 photos, no signup ✓</td>
                  <td className="px-6 py-4 text-slate-600">Usually none</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Damage Types Fixed</td>
                  <td className="px-6 py-4 bg-cyan-50 text-cyan-900">Scratches, fading, blur, tears, water damage</td>
                  <td className="px-6 py-4 text-slate-600">Similar (manual)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Colorization</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">Included ✓</td>
                  <td className="px-6 py-4 text-slate-600">Extra fee ($20-50)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Upscaling to 4K</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">Included ✓</td>
                  <td className="px-6 py-4 text-slate-600">Extra fee ($30-100)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Unlimited Revisions</td>
                  <td className="px-6 py-4 bg-cyan-50 font-bold text-cyan-900">Yes (Pro) ✓</td>
                  <td className="px-6 py-4 text-slate-600">Limited (1-2)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Best For</td>
                  <td className="px-6 py-4 bg-cyan-50 text-cyan-900">Speed, affordability, multiple photos</td>
                  <td className="px-6 py-4 text-slate-600">Museum-quality single photos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/old-photo-restoration"
              className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-lg font-bold rounded-lg transition-all shadow-lg"
            >
              Try Online Restoration Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Try Online Restoration Free
            </h2>
            <p className="text-xl text-slate-600">
              Upload your first photo and see results in 30 seconds. No signup required.
            </p>
          </div>

          <RestoreClient />

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-cyan-600 mb-2">30 sec</div>
              <div className="text-slate-600">Average processing time online</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-600 mb-2">3 free</div>
              <div className="text-slate-600">Photos to try before buying</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-600 mb-2">$29.9</div>
              <div className="text-slate-600">One-time for unlimited lifetime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-12 text-center">
            Online Photo Restoration FAQ
          </h2>

          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How do I restore photos online?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Upload your photo to ArtImageHub's online restoration tool. The AI automatically removes scratches, enhances faces, and repairs damage in 30 seconds. Download your restored photo instantly — no software installation required.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Is online photo restoration as good as professional restoration?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes! AI-powered online restoration uses advanced machine learning trained on millions of photos. It handles 90% of common damage (scratches, fading, blur) as well as professional services, but costs 95% less ($29.9 vs $50-150/photo) and delivers results in 30 seconds instead of 2-4 weeks.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Do I need to download software to restore photos online?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                No! ArtImageHub works entirely in your web browser. No download, no installation, no software required. Just visit the website, upload your photo, and get your restored image in 30 seconds.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Can I restore photos online for free?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes! ArtImageHub offers 3 completely free online photo restorations. No signup, no credit card required. If you need more, Pro Lifetime is $29.9 one-time for unlimited restorations.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How long does online photo restoration take?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Online restoration with ArtImageHub takes 15-30 seconds per photo. Traditional mail-in services take 2-4 weeks. You upload, AI processes instantly, and you download — all in under a minute.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Is my photo safe when restoring online?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes! Photos are encrypted during upload, processed securely in the cloud, and automatically deleted within 24 hours. We never use your photos for AI training or share them with third parties.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                What types of damage can online restoration fix?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Online AI restoration fixes: scratches and tears, fading and discoloration, blurry faces, water damage stains, creases and cracks, low resolution (upscales to 4K), black & white colorization. It works on 90% of common photo damage types.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                How much does online photo restoration cost?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                ArtImageHub: 3 free, then $29.9 lifetime unlimited. Traditional mail-in services: $50-150 per photo. Other online tools: Remini $9.99/month, VanceAI $19.9/month (subscriptions). ArtImageHub is the only one-time payment online restoration tool.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                What's better: online restoration or mail-in service?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                <strong>Online is better for:</strong> Speed (30 sec vs 2-4 weeks), cost ($29.9 vs $50-150/photo), convenience (no shipping), multiple photos (unlimited for one price).
                <br/><br/>
                <strong>Mail-in is better for:</strong> Museum-quality single heirloom photos requiring manual artist touch-up.
                <br/><br/>
                For 90% of family photos, online AI delivers professional results at a fraction of the cost and time.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md border border-slate-200 group">
              <summary className="font-bold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center">
                Can I restore photos on my phone or tablet online?
                <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes! ArtImageHub's online restoration works on any device with a web browser — iPhone, iPad, Android phone/tablet, Windows PC, Mac. No app download required. Just open the website and upload your photo.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-cyan-950 via-slate-900 to-purple-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Restore Your Photos Online?
          </h2>
          <p className="text-xl text-cyan-100/80 mb-10 max-w-2xl mx-auto">
            Join thousands who've restored their family memories online. Try 3 photos free — no signup, no download, no credit card.
          </p>

          <Link
            href="/old-photo-restoration"
            className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-xl font-bold rounded-lg transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:scale-105"
          >
            Start Online Restoration Free →
          </Link>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-cyan-100/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>3 photos free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
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
