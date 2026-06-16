import Link from 'next/link';
import Image from 'next/image';

export type RankedItem = {
  position: number;
  name: string;
  bestFor: string;
  pricing: string;
  pricingNote?: string;
  aiQuality: string;
  aiQualityScore: string;
  easeOfUse: string;
  easeOfUseScore: string;
  platform: string;
  highlight?: boolean;
};

export type DetailedReview = {
  position: number;
  name: string;
  tagline: string;
  rating: string;
  reviewCount?: string;
  body: string[];
  pros: string[];
  cons: string[];
  bestFor?: string[];
  isWinner?: boolean;
  costNote?: string;
};

export type BriefReview = {
  position: number;
  name: string;
  tagline: string;
  body: string;
  proTag: string;
  conTag: string;
  conTagColor?: 'red' | 'yellow';
};

export type BuyingGuideStep = {
  number: number;
  title: string;
  body: string;
  borderColor: 'amber' | 'blue' | 'green' | 'purple';
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type RelatedGuide = {
  href: string;
  title: string;
  blurb: string;
};

export type BuyerGuideConfig = {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImage?: string;
  keywords: string[];

  // Hero
  heroBadge: string;
  heroEyebrow: string;
  heroH1: string;
  heroSubhead: string;
  heroAuthor?: string;
  heroDate?: string;
  dateModified?: string;
  heroReadTime?: string;
  heroTestedNote?: string;

  // Quick recommendation box
  quickPicks: { label: string; tool: string; toolHref?: string; description: string }[];

  // Intro paragraphs
  introParagraphs: string[];

  // Comparison table
  comparisonHeading: string;
  comparisonItems: RankedItem[];
  comparisonNote?: string;

  // Top 3 detailed
  detailedHeading: string;
  detailedReviews: DetailedReview[];

  // Other notable
  otherHeading: string;
  otherReviews: BriefReview[];

  // Buying guide
  buyingGuideHeading: string;
  buyingGuideSteps: BuyingGuideStep[];

  // Examples (optional)
  showBeforeAfter?: boolean;
  beforeAfterHeading?: string;
  beforeAfterCaption1?: string;
  beforeAfterCaption2?: string;

  // FAQ
  faqHeading: string;
  faqItems: FAQItem[];

  // Final CTA
  finalCtaHeading: string;
  finalCtaSubhead: string;
  finalCtaTagline: string;

  // Related
  relatedHeading: string;
  relatedGuides: RelatedGuide[];

  // Schema
  schemaName: string;
  schemaDescription: string;
};

function attributionHref(landingPath: string, slot: string, dest: 'subscription' | 'tool', tool = '/old-photo-restoration') {
  const encoded = encodeURIComponent(landingPath);
  if (dest === 'subscription') {
    return `/subscription?landing_page=${encoded}&cta_slot=${slot}&entry_variant=buyer_guide&checkout_source=buyer_guide_direct`;
  }
  return `${tool}?landing_page=${encoded}&cta_slot=${slot}&entry_variant=buyer_guide`;
}

function borderClass(color: BuyingGuideStep['borderColor']) {
  switch (color) {
    case 'amber':
      return 'border-amber-500';
    case 'blue':
      return 'border-blue-500';
    case 'green':
      return 'border-green-500';
    case 'purple':
      return 'border-purple-500';
  }
}

export function buildItemListSchema(config: BuyerGuideConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: config.schemaName,
    description: config.schemaDescription,
    dateModified: config.dateModified,
    author: { '@type': 'Organization', name: config.heroAuthor ?? 'ArtImageHub Editorial Team' },
    publisher: { '@type': 'Organization', name: 'ArtImageHub', url: 'https://artimagehub.com' },
    numberOfItems: config.comparisonItems.length,
    itemListElement: config.comparisonItems.slice(0, 5).map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: item.name,
        description: item.bestFor,
        applicationCategory: 'PhotographyApplication',
        operatingSystem: item.platform,
        offers: {
          '@type': 'Offer',
          price: item.position === 1 ? '4.99' : (item.pricing.match(/\$([\d.]+)/)?.[1] ?? '0'),
          priceCurrency: 'USD',
        },
      },
    })),
  };
}

export function buildFaqSchema(config: BuyerGuideConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: config.dateModified,
    author: { '@type': 'Organization', name: config.heroAuthor ?? 'ArtImageHub Editorial Team' },
    publisher: { '@type': 'Organization', name: 'ArtImageHub', url: 'https://artimagehub.com' },
    mainEntity: config.faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildBeforeAfterImageSchema(config: BuyerGuideConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: config.beforeAfterHeading ?? 'ArtImageHub before and after photo restoration examples',
    description: 'Before and after examples showing old family photo restoration results from ArtImageHub.',
    mainEntityOfPage: `https://artimagehub.com/${config.slug}`,
    associatedMedia: [
      {
        '@type': 'ImageObject',
        contentUrl: 'https://artimagehub.com/blog/before-1.jpg',
        name: config.beforeAfterCaption1 ?? 'Damaged old print before AI restoration',
        caption: config.beforeAfterCaption1 ?? 'Damaged old print before AI restoration',
      },
      {
        '@type': 'ImageObject',
        contentUrl: 'https://artimagehub.com/blog/after-1.webp',
        name: config.beforeAfterCaption2 ?? 'Restored old print after AI restoration',
        caption: config.beforeAfterCaption2 ?? 'Restored old print after AI restoration',
      },
    ],
  };
}

// HowTo schema is emitted for AI/GEO parsers (ChatGPT, Perplexity, AI Overviews)
// to understand the "how to choose" decision steps, not for Google rich results
// (Google retired HowTo rich results in 2023). Steps map directly from the
// existing buyingGuideSteps, which are genuine actionable decision steps.
export function buildHowToSchema(config: BuyerGuideConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.buyingGuideHeading,
    description: config.schemaDescription,
    step: config.buyingGuideSteps.map((s) => ({
      '@type': 'HowToStep',
      position: s.number,
      name: s.title,
      text: s.body,
    })),
  };
}

export default function BuyerGuideTemplate({ config }: { config: BuyerGuideConfig }) {
  const landing = `/${config.slug}`;
  const itemListSchema = buildItemListSchema(config);
  const faqSchema = buildFaqSchema(config);
  const beforeAfterImageSchema = config.showBeforeAfter ? buildBeforeAfterImageSchema(config) : null;
  // Guard against sparse configs: a HowTo with <2 steps is low-value/spammy
  // schema. All current configs have 4 steps; this only protects future ones.
  const howToSchema =
    config.buyingGuideSteps.length >= 2 ? buildHowToSchema(config) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {beforeAfterImageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(beforeAfterImageSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
        {/* Hero */}
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-stone-500 mb-8 font-light tracking-wide">
              <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-stone-700">{config.heroBadge}</span>
            </nav>

            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-medium tracking-wider uppercase rounded-full border border-amber-200">
                {config.heroBadge}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-900 leading-[1.1] tracking-tight">
              <span
                className="block text-amber-700 text-2xl md:text-3xl font-normal mb-3 tracking-wide"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {config.heroEyebrow}
              </span>
              {config.heroH1}
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl leading-relaxed font-light">
              {config.heroSubhead}
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              <Link
                href={attributionHref(landing, 'hero_pay_first', 'subscription')}
                className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700"
              >
                Unlock one-time access
              </Link>
              <Link
                href={attributionHref(landing, 'hero_preview_restore', 'tool')}
                className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-50"
              >
                Preview the restore workflow
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-12 pb-8 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  AH
                </div>
                <div>
                  <div className="font-medium text-stone-700">{config.heroAuthor ?? 'ArtImageHub Editorial Team'}</div>
                  <div className="text-xs text-stone-500">{config.heroDate ?? 'Last updated: June 13, 2026'}</div>
                </div>
              </div>
              <span className="text-stone-300">•</span>
              <span>{config.heroReadTime ?? '12 min read'}</span>
              {config.heroTestedNote && (
                <>
                  <span className="text-stone-300">•</span>
                  <span>{config.heroTestedNote}</span>
                </>
              )}
            </div>

            {/* Quick Recommendation */}
            <div className="bg-white border-l-4 border-amber-500 p-6 md:p-8 rounded-r-lg shadow-sm mb-12">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Quick Recommendation
              </h2>
              <div className="space-y-3 text-stone-700">
                {config.quickPicks.map((pick) => (
                  <p key={pick.label}>
                    <strong className="text-stone-900">{pick.label}:</strong>{' '}
                    {pick.toolHref ? (
                      <Link href={pick.toolHref} className="text-amber-700 hover:text-amber-800 font-medium underline">
                        {pick.tool}
                      </Link>
                    ) : (
                      <span className="font-medium">{pick.tool}</span>
                    )}{' '}
                    — {pick.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-stone">
            {config.introParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-stone-700 leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
              {config.comparisonHeading}
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
                  {config.comparisonItems.map((item) => (
                    <tr
                      key={item.name}
                      className={
                        item.highlight
                          ? 'bg-amber-50/50 hover:bg-amber-50 transition-colors'
                          : 'hover:bg-stone-50 transition-colors'
                      }
                    >
                      <td className="p-4">
                        {item.highlight ? (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-amber-700">🏆 {item.name}</span>
                            <span className="px-2 py-0.5 bg-amber-600 text-white text-xs rounded-full">Best Value</span>
                          </div>
                        ) : (
                          <span className="font-bold text-stone-900">{item.name}</span>
                        )}
                      </td>
                      <td className="p-4 text-stone-700">{item.bestFor}</td>
                      <td className="p-4 text-stone-700 font-medium">{item.pricing}</td>
                      <td className="p-4 text-center">
                        <div className="text-yellow-500">{item.aiQuality}</div>
                        <div className="text-xs text-stone-500">{item.aiQualityScore}</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-yellow-500">{item.easeOfUse}</div>
                        <div className="text-xs text-stone-500">{item.easeOfUseScore}</div>
                      </td>
                      <td className="p-4 text-stone-700">{item.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {config.comparisonNote && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">{config.comparisonNote}</p>
              </div>
            )}
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="pb-16 px-6 bg-gradient-to-br from-white to-stone-50">
          <div className="max-w-5xl mx-auto pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              {config.detailedHeading}
            </h2>

            {config.detailedReviews.map((review) => (
              <div
                key={review.name}
                className={
                  review.isWinner
                    ? 'bg-white rounded-2xl shadow-xl border-2 border-amber-500 p-8 md:p-10 mb-8 relative overflow-hidden'
                    : 'bg-white rounded-2xl shadow-lg border border-stone-200 p-8 md:p-10 mb-8'
                }
              >
                {review.isWinner && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-amber-500 text-white font-bold rounded-full text-sm shadow-lg">
                    🏆 #1 BEST VALUE
                  </div>
                )}

                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-stone-900 mb-2">
                      {review.position}. {review.name}
                    </h3>
                    <p className={`text-lg ${review.isWinner ? 'text-amber-700' : 'text-stone-600'} font-medium mb-4`}>
                      {review.tagline}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl text-yellow-500">{review.rating}</span>
                        {review.reviewCount && (
                          <span className="text-stone-600 ml-2">{review.reviewCount}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-stone max-w-none mb-6">
                  {review.body.map((p, i) => (
                    <p key={i} className="text-stone-700 leading-relaxed">
                      {review.isWinner && i === 0 ? (
                        <>
                          <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium underline">
                            ArtImageHub
                          </Link>{' '}
                          {p}
                        </>
                      ) : (
                        p
                      )}
                    </p>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-green-700 mb-3">Pros</h4>
                    <ul className="space-y-2 text-stone-700 text-sm">
                      {review.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-3">Cons</h4>
                    <ul className="space-y-2 text-stone-700 text-sm">
                      {review.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <span className="text-red-600 mt-0.5">✗</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {review.bestFor && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-stone-900 mb-3">✨ Best For:</h4>
                    <ul className="space-y-2 text-stone-700">
                      {review.bestFor.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {review.costNote && !review.isWinner && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      <strong>💡 Cost Comparison:</strong> {review.costNote}
                    </p>
                  </div>
                )}

                {review.isWinner && (
                  <div className="mt-6 text-center">
                    <Link
                      href={attributionHref(landing, 'ranked_card_pay_first', 'subscription')}
                      className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Unlock the Original-Quality Download for $4.99 →
                    </Link>
                    <p className="text-sm text-stone-500 mt-2">
                      Pay first • $4.99 original-quality unlock • No subscription
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Other Notable */}
        {config.otherReviews.length > 0 && (
          <section className="pb-16 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
                {config.otherHeading}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {config.otherReviews.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white rounded-lg shadow-md border border-stone-200 p-6"
                  >
                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {tool.position}. {tool.name}
                    </h3>
                    <p className="text-sm text-stone-600 mb-3">{tool.tagline}</p>
                    <p className="text-stone-700 text-sm mb-3">{tool.body}</p>
                    <div className="flex gap-2 text-xs flex-wrap">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded">{tool.proTag}</span>
                      <span
                        className={
                          tool.conTagColor === 'yellow'
                            ? 'px-2 py-1 bg-yellow-100 text-yellow-800 rounded'
                            : 'px-2 py-1 bg-red-100 text-red-800 rounded'
                        }
                      >
                        {tool.conTag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Buying Guide */}
        <section className="pb-16 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-4xl mx-auto pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
              {config.buyingGuideHeading}
            </h2>
            <div className="space-y-6">
              {config.buyingGuideSteps.map((step) => (
                <div
                  key={step.number}
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${borderClass(step.borderColor)}`}
                >
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        {config.showBeforeAfter && (
          <section className="pb-16 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
                {config.beforeAfterHeading ?? 'Real Restoration Examples'}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <figure className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/blog/before-1.jpg"
                      alt={config.beforeAfterCaption1 ?? 'Damaged old family photo before AI restoration'}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="p-4">
                    <figcaption className="text-sm text-stone-600">{config.beforeAfterCaption1 ?? 'Damaged old print before AI restoration'}</figcaption>
                  </div>
                </figure>

                <figure className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/blog/after-1.webp"
                      alt={config.beforeAfterCaption2 ?? 'Restored old family photo after AI restoration'}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-sm font-bold rounded">
                      AFTER
                    </div>
                  </div>
                  <div className="p-4">
                    <figcaption className="text-sm text-stone-600">{config.beforeAfterCaption2 ?? 'Restored with ArtImageHub in 30 seconds'}</figcaption>
                  </div>
                </figure>
              </div>

              <div className="text-center">
                <Link
                  href={attributionHref(landing, 'examples_preview_restore', 'tool')}
                  className="inline-block px-6 py-3 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800 transition-colors"
                >
                  See More Before/After Examples →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="pb-16 px-6 bg-gradient-to-br from-white to-stone-50">
          <div className="max-w-4xl mx-auto pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              {config.faqHeading}
            </h2>
            <div className="space-y-6">
              {config.faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-white rounded-lg shadow-md p-6 border border-stone-200 group"
                >
                  <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                  </summary>
                  <p className="mt-4 text-stone-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-amber-600 via-orange-500 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{config.finalCtaHeading}</h2>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">{config.finalCtaSubhead}</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={attributionHref(landing, 'final_pay_first', 'subscription')}
                className="inline-block px-10 py-5 bg-white text-amber-700 font-bold text-lg rounded-lg hover:bg-amber-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                Unlock the Original-Quality Download for $4.99 →
              </Link>
              <Link
                href={attributionHref(landing, 'final_preview_restore', 'tool')}
                className="inline-block px-8 py-5 border border-white/40 text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all"
              >
                Preview the restore workflow
              </Link>
            </div>

            <p className="text-sm text-amber-100 mt-6">{config.finalCtaTagline}</p>
          </div>
        </section>

        {/* Related */}
        {config.relatedGuides.length > 0 && (
          <section className="py-16 px-6 bg-stone-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-stone-900 mb-8">{config.relatedHeading}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {config.relatedGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="block p-6 bg-white rounded-lg border border-stone-200 hover:border-amber-500 hover:shadow-lg transition-all"
                  >
                    <h4 className="font-bold text-stone-900 mb-2">{guide.title}</h4>
                    <p className="text-sm text-stone-600">{guide.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
