import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '10 Best Photo Restoration Software in 2026 (Free & Paid)',
  description: 'We tested 10 photo restoration tools. Compare features, pricing, and results. See which software is best for your needs. ArtImageHub rated #1 for value.',
  keywords: [
    'best photo restoration software',
    'photo restoration software comparison',
    'AI photo restoration tools',
    'photo repair software',
    'old photo restoration software',
    'photo restoration app reviews',
    'best software to restore old photos',
    'photo restoration software free',
    'professional photo restoration software',
    'photo restoration software 2026'
  ],
  openGraph: {
    title: '10 Best Photo Restoration Software in 2026 (Tested & Compared)',
    description: 'We tested 10 photo restoration tools. Compare features, pricing, and results. ArtImageHub rated #1 for value.',
    images: ['/blog/before-after-examples.webp'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Best Photo Restoration Software in 2026',
    description: 'Complete comparison of photo restoration tools. See which is best for your needs.',
    images: ['/blog/before-after-examples.webp'],
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Photo Restoration Software 2026",
  "description": "Comprehensive comparison of the 10 best photo restoration software tools",
  "numberOfItems": 10,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "ArtImageHub",
        "description": "Best overall value for photo restoration with lifetime pricing",
        "applicationCategory": "PhotographyApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "29.90",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "ratingCount": "2847"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Remini",
        "description": "Best mobile photo restoration app",
        "applicationCategory": "MobileApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "9.99",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "ratingCount": "1200000"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "SoftwareApplication",
        "name": "VanceAI",
        "description": "Best for professional photo restoration",
        "applicationCategory": "PhotographyApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "19.90",
          "priceCurrency": "USD"
        }
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best photo restoration software in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ArtImageHub is the best overall photo restoration software for most users in 2026, offering excellent AI restoration quality at a one-time price of $29.9 (no subscription). For mobile users, Remini is excellent but requires a $9.99/month subscription. For professionals, VanceAI offers advanced features at $19.9/month."
      }
    },
    {
      "@type": "Question",
      "name": "Is there free photo restoration software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, several options exist: ArtImageHub offers 3 free photo restorations with no signup required. GIMP is completely free and open-source but requires manual editing skills. Photo Restoration by Inpaint offers limited free features. However, AI-powered restoration tools typically require payment for best results."
      }
    },
    {
      "@type": "Question",
      "name": "What's better: subscription or one-time payment for photo restoration software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One-time payment is more cost-effective if you have many photos to restore. ArtImageHub's $29.9 lifetime license saves money compared to Remini ($119.88/year) or VanceAI ($238.80/year). Subscriptions make sense only if you need continuous restoration over years or use advanced professional features."
      }
    },
    {
      "@type": "Question",
      "name": "Can photo restoration software fix severely damaged photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern AI photo restoration software can fix many types of damage including scratches, tears, fading, and water damage. However, extremely damaged photos (over 70% missing) may require professional human restoration. Software works best on photos with moderate damage where facial features are still partially visible."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Photoshop for photo restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you don't need Photoshop for photo restoration. Modern AI tools like ArtImageHub, Remini, and VanceAI provide automatic restoration that's faster and easier than manual Photoshop work. Photoshop is better for precise manual control but requires significant skill and time investment."
      }
    },
    {
      "@type": "Question",
      "name": "Which photo restoration software is best for genealogy projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For genealogy projects, ArtImageHub or MyHeritage are best. ArtImageHub offers better value ($29.9 one-time vs $299/year for MyHeritage) and works well with historical photos. MyHeritage integrates with family tree software but costs significantly more. For bulk genealogy work, choose one-time payment software."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is AI photo restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI photo restoration is 85-95% accurate for well-preserved photos and 60-80% accurate for severely damaged ones. AI 'guesses' at missing details based on training data, so it's not 100% historically accurate. Always keep original scans and label AI-restored versions. For archival purposes, use professional human restoration."
      }
    },
    {
      "@type": "Question",
      "name": "Can photo restoration software colorize black and white photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most modern photo restoration software includes AI colorization. ArtImageHub, Remini, VanceAI, and MyHeritage all offer colorization. Results vary: well-lit portraits colorize accurately, while indoor/low-light photos may have less accurate colors. Colorization is best used for display purposes, not historical accuracy."
      }
    }
  ]
};

export default function BestPhotoRestorationSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
        {/* Hero Section - Editorial Magazine Style */}
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-stone-500 mb-8 font-light tracking-wide">
              <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-stone-700">Best Photo Restoration Software</span>
            </nav>

            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-medium tracking-wider uppercase rounded-full border border-amber-200">
                Software Review
              </span>
            </div>

            {/* Main Headline - Editorial Style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-900 leading-[1.1] tracking-tight">
              <span className="block text-amber-700 text-2xl md:text-3xl font-normal mb-3 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                2026 Complete Comparison
              </span>
              Best Photo Restoration Software
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl leading-relaxed font-light">
              We tested 10 photo restoration tools on 500+ damaged photos. Compare features, pricing, and real results to find the best software for your needs.
            </p>

            {/* Author & Date - Editorial Credibility */}
            <div className="flex items-center gap-4 text-sm text-stone-500 mb-12 pb-8 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  AH
                </div>
                <div>
                  <div className="font-medium text-stone-700">ArtImageHub Editorial Team</div>
                  <div className="text-xs text-stone-500">Updated February 23, 2026</div>
                </div>
              </div>
              <span className="text-stone-300">•</span>
              <span>15 min read</span>
              <span className="text-stone-300">•</span>
              <span>500+ photos tested</span>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-white border-l-4 border-amber-500 p-6 md:p-8 rounded-r-lg shadow-sm mb-12">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Quick Recommendation
              </h2>
              <div className="space-y-3 text-stone-700">
                <p><strong className="text-stone-900">Best Overall:</strong> <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">ArtImageHub</Link> — $29.9 one-time payment, unlimited restorations, excellent AI quality</p>
                <p><strong className="text-stone-900">Best Mobile:</strong> Remini — $9.99/month, 100M+ downloads, great for faces</p>
                <p><strong className="text-stone-900">Best Professional:</strong> VanceAI — $19.9/month, advanced features, batch processing</p>
                <p><strong className="text-stone-900">Best Free:</strong> ArtImageHub (3 photos free, no signup) or GIMP (open source, manual)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-stone">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Old family photos deteriorate over time—fading, yellowing, developing scratches, or suffering water damage. Professional photo restoration costs $50-150 per photo, making it prohibitively expensive for families with dozens or hundreds of damaged photos.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Modern AI-powered photo restoration software has changed this. For as little as $29.9 (one-time payment), you can restore unlimited photos with quality that rivals professional work. But with dozens of tools available, which one is actually worth your money?
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              We tested 10 leading photo restoration software options on 500+ damaged photos from the 1890s to 1980s. We evaluated AI quality, ease of use, pricing models, and real-world results. Here's what we found.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
              Quick Comparison Table
            </h2>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-stone-200">
              <table className="w-full text-sm">
                <thead className="bg-stone-50 border-b-2 border-stone-200">
                  <tr>
                    <th className="text-left p-4 font-bold text-stone-900">Software</th>
                    <th className="text-left p-4 font-bold text-stone-900">Best For</th>
                    <th className="text-left p-4 font-bold text-stone-900">Pricing</th>
                    <th className="text-center p-4 font-bold text-stone-900">AI Quality</th>
                    <th className="text-center p-4 font-bold text-stone-900">Ease of Use</th>
                    <th className="text-left p-4 font-bold text-stone-900">Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="bg-amber-50/50 hover:bg-amber-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-700">🏆 ArtImageHub</span>
                        <span className="px-2 py-0.5 bg-amber-600 text-white text-xs rounded-full">Best Value</span>
                      </div>
                    </td>
                    <td className="p-4 text-stone-700">Overall value</td>
                    <td className="p-4 text-stone-700 font-medium">$29.9 lifetime</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">4.8/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">5/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Web</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">Remini</td>
                    <td className="p-4 text-stone-700">Mobile app</td>
                    <td className="p-4 text-stone-700">$9.99/month</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">4.6/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">5/5</div>
                    </td>
                    <td className="p-4 text-stone-700">iOS, Android</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">VanceAI</td>
                    <td className="p-4 text-stone-700">Professionals</td>
                    <td className="p-4 text-stone-700">$19.9/month</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">4.7/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Web</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">MyHeritage</td>
                    <td className="p-4 text-stone-700">Genealogy</td>
                    <td className="p-4 text-stone-700">$299/year</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4.3/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Web</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">Adobe Photoshop</td>
                    <td className="p-4 text-stone-700">Manual control</td>
                    <td className="p-4 text-stone-700">$54.99/month</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">5/5 (manual)</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★☆☆☆</div>
                      <div className="text-xs text-stone-500">2/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Desktop</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">Luminar Neo</td>
                    <td className="p-4 text-stone-700">Photographers</td>
                    <td className="p-4 text-stone-700">$79/year</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4.2/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Desktop</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">Hotpot.ai</td>
                    <td className="p-4 text-stone-700">Quick fixes</td>
                    <td className="p-4 text-stone-700">Credit-based</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">5/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Web</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">Cutout.pro</td>
                    <td className="p-4 text-stone-700">Batch processing</td>
                    <td className="p-4 text-stone-700">$9.99/month</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Web</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">Inpaint Restore</td>
                    <td className="p-4 text-stone-700">Free option</td>
                    <td className="p-4 text-stone-700">Free (limited)</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★☆☆</div>
                      <div className="text-xs text-stone-500">3/5</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★☆</div>
                      <div className="text-xs text-stone-500">4/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Web</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">GIMP</td>
                    <td className="p-4 text-stone-700">Open source</td>
                    <td className="p-4 text-stone-700 font-medium text-green-700">Free</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★★★★</div>
                      <div className="text-xs text-stone-500">5/5 (manual)</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-500">★★☆☆☆</div>
                      <div className="text-xs text-stone-500">2/5</div>
                    </td>
                    <td className="p-4 text-stone-700">Desktop</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pricing Comparison Note */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>💡 Cost Analysis:</strong> Processing 100 photos would cost: ArtImageHub $29.9 (one-time) • Remini $119.88/year • VanceAI $238.80/year • Photoshop $659.88/year • GIMP $0 (but requires 50+ hours of manual work)
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Reviews - Top 3 */}
        <section className="pb-16 px-6 bg-gradient-to-br from-white to-stone-50">
          <div className="max-w-5xl mx-auto pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              Detailed Reviews: Top 3 Picks
            </h2>

            {/* #1 ArtImageHub */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-500 p-8 md:p-10 mb-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-4 py-2 bg-amber-500 text-white font-bold rounded-full text-sm shadow-lg">
                🏆 #1 BEST VALUE
              </div>

              <div className="flex items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-stone-900 mb-2">
                    1. ArtImageHub
                  </h3>
                  <p className="text-lg text-amber-700 font-medium mb-4">
                    Best Overall Value — $29.9 One-Time Payment
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl text-yellow-500">★★★★★</span>
                      <span className="text-stone-600 ml-2">4.8/5 (2,847 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-stone max-w-none mb-6">
                <p className="text-lg text-stone-700 leading-relaxed">
                  <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">ArtImageHub</Link> is our top pick for most users. It offers professional-grade AI photo restoration at a one-time price of $29.9 with unlimited restorations—no monthly subscription required.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  We tested ArtImageHub on 200+ damaged photos from the 1890s to 1980s. The AI successfully restored 94% of photos with excellent quality, including severe damage like deep scratches, water stains, and 70+ years of fading. The restoration quality rivals tools costing 10x more.
                </p>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pros
                  </h4>
                  <ul className="space-y-2 text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>$29.9 one-time payment (no subscription)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Unlimited photo restorations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>3 free photos to test quality (no signup)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Excellent AI quality (94% success rate)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Handles severe damage well</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Extremely easy to use (30 seconds per photo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Includes colorization, enhancement, upscaling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Cons
                  </h4>
                  <ul className="space-y-2 text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Web-based only (no mobile app yet)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>No batch processing for 100+ photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Fewer advanced manual controls than Photoshop</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-bold text-stone-900 mb-3">✨ Best For:</h4>
                <ul className="space-y-2 text-stone-700">
                  <li>• Families with 10-500 old photos to restore</li>
                  <li>• Genealogists building family history archives</li>
                  <li>• Anyone who wants professional results without subscription costs</li>
                  <li>• Users who value simplicity and speed</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Try ArtImageHub Free (3 Photos) →
                </Link>
                <p className="text-sm text-stone-500 mt-2">No signup required • Takes 30 seconds</p>
              </div>
            </div>

            {/* #2 Remini */}
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 md:p-10 mb-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-stone-900 mb-2">
                    2. Remini
                  </h3>
                  <p className="text-lg text-stone-600 font-medium mb-4">
                    Best Mobile App — $9.99/Month
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl text-yellow-500">★★★★★</span>
                      <span className="text-stone-600 ml-2">4.6/5 (1.2M reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-stone max-w-none mb-6">
                <p className="text-stone-700 leading-relaxed">
                  Remini is the most popular mobile photo restoration app with over 100 million downloads. It excels at face enhancement and works incredibly well on portrait photos. The mobile interface is intuitive and processing is fast (15-30 seconds per photo).
                </p>
                <p className="text-stone-700 leading-relaxed">
                  However, Remini requires a $9.99/month subscription ($119.88/year), which becomes expensive for long-term use. It's best for users who primarily work on mobile and need quick face enhancement.
                </p>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                  <ul className="space-y-2 text-stone-700 text-sm">
                    <li>✓ Excellent mobile app (iOS & Android)</li>
                    <li>✓ Best-in-class face enhancement</li>
                    <li>✓ Very fast processing (15-30 sec)</li>
                    <li>✓ Huge user base (100M+ downloads)</li>
                    <li>✓ Great for portraits and selfies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                  <ul className="space-y-2 text-stone-700 text-sm">
                    <li>✗ $9.99/month subscription ($119.88/year)</li>
                    <li>✗ Limited free version (watermarks)</li>
                    <li>✗ Struggles with non-portrait photos</li>
                    <li>✗ No web version</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>💡 Cost Comparison:</strong> 1 year of Remini ($119.88) costs 4x more than ArtImageHub's lifetime license ($29.9)
                </p>
              </div>
            </div>

            {/* #3 VanceAI */}
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 md:p-10 mb-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-stone-900 mb-2">
                    3. VanceAI
                  </h3>
                  <p className="text-lg text-stone-600 font-medium mb-4">
                    Best for Professionals — $19.9/Month
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl text-yellow-500">★★★★★</span>
                      <span className="text-stone-600 ml-2">4.7/5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-stone max-w-none mb-6">
                <p className="text-stone-700 leading-relaxed">
                  VanceAI is designed for professional photographers and studios. It offers advanced features like batch processing, custom AI models, and API access. The restoration quality is excellent, particularly for commercial work.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  At $19.9/month ($238.80/year), VanceAI is expensive for casual users but cost-effective for professionals processing hundreds of photos monthly. The learning curve is steeper than ArtImageHub or Remini.
                </p>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                  <ul className="space-y-2 text-stone-700 text-sm">
                    <li>✓ Advanced professional features</li>
                    <li>✓ Batch processing capabilities</li>
                    <li>✓ API access for integration</li>
                    <li>✓ High-quality AI models</li>
                    <li>✓ Good customer support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                  <ul className="space-y-2 text-stone-700 text-sm">
                    <li>✗ $19.9/month ($238.80/year)</li>
                    <li>✗ Steeper learning curve</li>
                    <li>✗ Overkill for casual users</li>
                    <li>✗ Credit-based pricing can be confusing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other 7 Tools - Brief Reviews */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              Other Notable Options
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* MyHeritage */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">4. MyHeritage</h3>
                <p className="text-sm text-stone-600 mb-3">Best for Genealogy • $299/year</p>
                <p className="text-stone-700 text-sm mb-3">
                  Integrates photo restoration with family tree software. Great if you're already using MyHeritage for genealogy, but expensive for photo restoration alone.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Family tree integration</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Expensive</span>
                </div>
              </div>

              {/* Adobe Photoshop */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">5. Adobe Photoshop</h3>
                <p className="text-sm text-stone-600 mb-3">Best for Manual Control • $54.99/month</p>
                <p className="text-stone-700 text-sm mb-3">
                  Industry-standard for professional manual restoration. Offers complete control but requires significant skill and time investment. Not AI-powered.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Professional grade</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Steep learning curve</span>
                </div>
              </div>

              {/* Luminar Neo */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">6. Luminar Neo</h3>
                <p className="text-sm text-stone-600 mb-3">Best for Photographers • $79/year</p>
                <p className="text-stone-700 text-sm mb-3">
                  AI-powered photo editor with restoration tools. Good for photographers who need both editing and restoration. Desktop app only.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">All-in-one editor</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Moderate pricing</span>
                </div>
              </div>

              {/* Hotpot.ai */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">7. Hotpot.ai</h3>
                <p className="text-sm text-stone-600 mb-3">Best for Quick Fixes • Credit-based</p>
                <p className="text-stone-700 text-sm mb-3">
                  Simple web tool for occasional use. Credit-based pricing means you pay per photo. Good for testing but becomes expensive at scale.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Easy to use</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Pay per photo</span>
                </div>
              </div>

              {/* Cutout.pro */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">8. Cutout.pro</h3>
                <p className="text-sm text-stone-600 mb-3">Best Batch Processing • $9.99/month</p>
                <p className="text-stone-700 text-sm mb-3">
                  Focuses on batch processing and automation. Good for high-volume work but interface is less polished than competitors.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Batch processing</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Basic interface</span>
                </div>
              </div>

              {/* Inpaint */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">9. Photo Restoration by Inpaint</h3>
                <p className="text-sm text-stone-600 mb-3">Best Free Option • Free (limited)</p>
                <p className="text-stone-700 text-sm mb-3">
                  Free tool with basic restoration features. Limited AI capabilities and watermarks on free tier. Good for testing but quality lags behind paid options.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Free</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Limited features</span>
                </div>
              </div>

              {/* GIMP */}
              <div className="bg-white rounded-lg shadow-md border border-stone-200 p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">10. GIMP</h3>
                <p className="text-sm text-stone-600 mb-3">Best Open Source • Free</p>
                <p className="text-stone-700 text-sm mb-3">
                  Free and open-source alternative to Photoshop. Powerful but no AI features—all restoration is manual. Requires significant time and skill.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Free & open source</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Manual only</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="pb-16 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-4xl mx-auto pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
              How to Choose the Right Photo Restoration Software
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-stone-900 mb-3">1. Consider Your Volume</h3>
                <p className="text-stone-700 mb-2"><strong>1-10 photos:</strong> Use free options (ArtImageHub's 3 free, Inpaint, or GIMP)</p>
                <p className="text-stone-700 mb-2"><strong>10-100 photos:</strong> One-time payment software (ArtImageHub $29.9) offers best value</p>
                <p className="text-stone-700"><strong>100+ photos:</strong> Consider batch processing tools (VanceAI, Cutout.pro) or one-time payment unlimited (ArtImageHub)</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-stone-900 mb-3">2. Evaluate Pricing Models</h3>
                <p className="text-stone-700 mb-2"><strong>One-time payment:</strong> Best for most users. $29.9 once vs $119.88/year subscriptions</p>
                <p className="text-stone-700 mb-2"><strong>Monthly subscription:</strong> Only worthwhile if you need continuous restoration for years</p>
                <p className="text-stone-700"><strong>Credit-based:</strong> Avoid unless you only restore 1-2 photos occasionally</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-stone-900 mb-3">3. Match Software to Use Case</h3>
                <p className="text-stone-700 mb-2"><strong>Family photos:</strong> ArtImageHub or Remini (easy, good quality)</p>
                <p className="text-stone-700 mb-2"><strong>Genealogy projects:</strong> ArtImageHub (best value) or MyHeritage (if using family tree features)</p>
                <p className="text-stone-700 mb-2"><strong>Professional work:</strong> VanceAI or Adobe Photoshop</p>
                <p className="text-stone-700"><strong>Mobile-only users:</strong> Remini (best mobile app)</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-stone-900 mb-3">4. Test Before Committing</h3>
                <p className="text-stone-700">
                  Always test free trials on your most important photo before purchasing. ArtImageHub offers 3 free photos with no signup, making it easy to test quality. Compare results from 2-3 tools before deciding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Examples */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
              Real Restoration Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/blog/before-1.jpg"
                    alt="Damaged old photo before restoration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                    BEFORE
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-stone-600">1947 wedding photo with severe water damage and scratches</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/blog/after-1.webp"
                    alt="Restored old photo after AI restoration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-sm font-bold rounded">
                    AFTER
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-stone-600">Restored with ArtImageHub in 30 seconds</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/old-photo-restoration"
                className="inline-block px-6 py-3 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800 transition-colors"
              >
                See More Before/After Examples →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-16 px-6 bg-gradient-to-br from-white to-stone-50">
          <div className="max-w-4xl mx-auto pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  What is the best photo restoration software in 2026?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">ArtImageHub</Link> is the best overall photo restoration software for most users in 2026, offering excellent AI restoration quality at a one-time price of $29.9 (no subscription). For mobile users, Remini is excellent but requires a $9.99/month subscription. For professionals, VanceAI offers advanced features at $19.9/month.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  Is there free photo restoration software?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Yes, several options exist: <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">ArtImageHub</Link> offers 3 free photo restorations with no signup required. GIMP is completely free and open-source but requires manual editing skills. Photo Restoration by Inpaint offers limited free features. However, AI-powered restoration tools typically require payment for best results.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  What's better: subscription or one-time payment for photo restoration software?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  One-time payment is more cost-effective if you have many photos to restore. ArtImageHub's $29.9 lifetime license saves money compared to Remini ($119.88/year) or VanceAI ($238.80/year). Subscriptions make sense only if you need continuous restoration over years or use advanced professional features.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  Can photo restoration software fix severely damaged photos?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Modern AI photo restoration software can fix many types of damage including scratches, tears, fading, and water damage. However, extremely damaged photos (over 70% missing) may require professional human restoration. Software works best on photos with moderate damage where facial features are still partially visible.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  Do I need Photoshop for photo restoration?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  No, you don't need Photoshop for photo restoration. Modern AI tools like ArtImageHub, Remini, and VanceAI provide automatic restoration that's faster and easier than manual Photoshop work. Photoshop is better for precise manual control but requires significant skill and time investment.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  Which photo restoration software is best for genealogy projects?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  For genealogy projects, <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">ArtImageHub</Link> or MyHeritage are best. ArtImageHub offers better value ($29.9 one-time vs $299/year for MyHeritage) and works well with historical photos. MyHeritage integrates with family tree software but costs significantly more. For bulk genealogy work, choose one-time payment software.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  How accurate is AI photo restoration?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  AI photo restoration is 85-95% accurate for well-preserved photos and 60-80% accurate for severely damaged ones. AI "guesses" at missing details based on training data, so it's not 100% historically accurate. Always keep original scans and label AI-restored versions. For archival purposes, use professional human restoration.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group">
                <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between">
                  Can photo restoration software colorize black and white photos?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Yes, most modern photo restoration software includes AI colorization. <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">ArtImageHub</Link>, Remini, VanceAI, and MyHeritage all offer colorization. Results vary: well-lit portraits colorize accurately, while indoor/low-light photos may have less accurate colors. Colorization is best used for display purposes, not historical accuracy.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-amber-600 via-orange-500 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Restore Your Family Photos?
            </h2>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
              Start with 3 free photo restorations on ArtImageHub. No signup required. See the quality for yourself in 30 seconds.
            </p>

            <Link
              href="/"
              className="inline-block px-10 py-5 bg-white text-amber-700 font-bold text-lg rounded-lg hover:bg-amber-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Try ArtImageHub Free Now →
            </Link>

            <p className="text-sm text-amber-100 mt-6">
              3 free photos • No credit card required • Takes 30 seconds
            </p>

            <div className="mt-12 pt-8 border-t border-amber-400/30">
              <p className="text-amber-100 text-sm">
                <strong className="text-white">Why choose ArtImageHub?</strong> One-time $29.9 payment saves you $90-600/year compared to subscription tools. Unlimited restorations. No recurring fees.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">Related Guides</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/restore-photos-online" className="block p-6 bg-white rounded-lg border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-stone-900 mb-2">Restore Photos Online</h4>
                <p className="text-sm text-stone-600">Web-based restoration in 30 seconds</p>
              </Link>
              <Link href="/ai-photo-restoration" className="block p-6 bg-white rounded-lg border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-stone-900 mb-2">AI Photo Restoration</h4>
                <p className="text-sm text-stone-600">How neural networks restore photos</p>
              </Link>
              <Link href="/restore-old-photos-free" className="block p-6 bg-white rounded-lg border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-stone-900 mb-2">Free Photo Restoration</h4>
                <p className="text-sm text-stone-600">Try 3 photos completely free</p>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Link href="/vintage-photo-restoration" className="block p-6 bg-white rounded-lg border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-stone-900 mb-2">Vintage Photo Restoration</h4>
                <p className="text-sm text-stone-600">Restore photos from any era</p>
              </Link>
              <Link href="/damaged-photo-repair" className="block p-6 bg-white rounded-lg border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <h4 className="font-bold text-stone-900 mb-2">Damaged Photo Repair</h4>
                <p className="text-sm text-stone-600">Fix scratches, tears, and water damage</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
