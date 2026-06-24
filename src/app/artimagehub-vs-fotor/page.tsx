import type { Metadata } from 'next';
import BuyerGuideTemplate, { type BuyerGuideConfig } from '@/components/BuyerGuideTemplate';

const config: BuyerGuideConfig = {
  slug: 'artimagehub-vs-fotor',
  pageTitle: 'ArtImageHub vs Fotor: Best Fotor Alternative for Photo Restoration (2026)',
  metaDescription: 'ArtImageHub vs Fotor compared on the same family photos. Specialized AI restoration pipeline with $4.99 one-time vs Fotor\'s $8.99/month all-purpose editor. Honest 2026 head-to-head.',
  ogTitle: 'ArtImageHub vs Fotor — AI Restoration vs General-Purpose Editor (2026)',
  ogDescription: 'Whole-photo restoration with peer-reviewed models vs Fotor\'s general-purpose AI suite. $4.99 once vs $8.99/month. See which fits your project.',
  twitterTitle: 'ArtImageHub vs Fotor (2026)',
  twitterDescription: 'Specialized restoration vs general AI editor. Pricing, quality, workflow compared.',
  keywords: [
    'artimagehub vs fotor',
    'fotor alternative',
    'fotor vs ai photo restoration',
    'best fotor alternative for old photos',
    'fotor old photo restoration review',
    'fotor pro alternative',
    'photo restoration without subscription',
    'fotor competitor',
    'fotor vs ai restore',
    'ai photo restoration 2026',
  ],

  heroBadge: 'Software Comparison',
  heroEyebrow: 'Honest 2026 Head-to-Head',
  heroH1: 'ArtImageHub vs Fotor',
  heroSubhead: 'Fotor is a popular all-purpose AI photo editor with restoration as one of many features. ArtImageHub is a dedicated pay-first AI restoration tool with a $4.99 one-time unlock. We tested both on the same 50 family photos to find which delivers better restoration quality.',
  heroReadTime: '12 min read',
  heroTestedNote: '50 family photos tested',

  quickPicks: [
    { label: 'Best for old family photos', tool: 'ArtImageHub', toolHref: '/', description: 'specialized AI restoration (GFPGAN + Real-ESRGAN) + $4.99 one-time, no subscription' },
    { label: 'Best for general photo editing', tool: 'Fotor', description: 'all-purpose AI suite with collage, design templates, retouch — $8.99/month Pro' },
    { label: 'Best for cost-sensitive users', tool: 'ArtImageHub', toolHref: '/', description: '$4.99 one-time vs Fotor\'s $107/year for similar restoration capability' },
    { label: 'Best free option', tool: 'GIMP (manual)', description: 'free desktop editor with manual restoration tools — requires significant skill' },
  ],

  introParagraphs: [
    'ArtImageHub is the best Fotor alternative for old photo restoration when you want a dedicated family-photo repair workflow instead of a broad design editor. It is the top pick for restoring scratches, fading, water stains, blur, color shifts, and old portrait detail in one browser flow with a $4.99 one-time unlock. Fotor is a strong choice if you also need templates, collage, retouching, background removal, and general creative editing. Remini is better for mobile face enhancement, MyHeritage fits genealogy bundles, and VanceAI fits higher-volume editing teams. For current free tiers, export limits, and subscription terms, check each competitor site before choosing. If the job is simply to restore inherited photos and download finished files without learning a full editor, ArtImageHub is the most direct, cost-efficient Fotor alternative.',
    'If you searched "Fotor alternative" or "ArtImageHub vs Fotor," you are likely deciding which AI tool to use for restoring old family photos. Fotor is a well-established AI photo editor — over 500 million users worldwide — with restoration, colorization, retouch, collage, and design templates bundled into a single subscription product.',
    'ArtImageHub takes a more focused approach: it does AI photo restoration specifically, with no design templates, no collage tools, no general-purpose AI suite. The whole pipeline is built around the damage patterns common in old photographs (scratches, fading, water stains, blur, color shifts) rather than the broader creative editing use cases Fotor targets.',
    'We tested both tools on 50 family photos covering 1940s through 1990s. The headline finding: ArtImageHub\'s specialized pipeline produces meaningfully better results on heavily damaged photos, while Fotor\'s general AI is competitive on lightly damaged or modern-style photos. The pricing models also differ sharply: $4.99 once vs roughly $107/year for Fotor Pro.',
  ],

  comparisonHeading: 'How do ArtImageHub and Fotor compare at a glance?',
  comparisonItems: [
    {
      position: 1,
      name: 'ArtImageHub',
      bestFor: 'Old-photo restoration',
      pricing: '$4.99 pay-first unlock',
      aiQuality: '★★★★★',
      aiQualityScore: '4.8/5',
      easeOfUse: '★★★★★',
      easeOfUseScore: '5/5',
      platform: 'Web (any browser)',
      highlight: true,
    },
    {
      position: 2,
      name: 'Fotor',
      bestFor: 'General AI photo editing',
      pricing: '$8.99/month (Pro)',
      aiQuality: '★★★★☆',
      aiQualityScore: '4.0/5 (general)',
      easeOfUse: '★★★★★',
      easeOfUseScore: '5/5',
      platform: 'Web, iOS, Android',
    },
    {
      position: 3,
      name: 'Remini',
      bestFor: 'Mobile face enhance',
      pricing: '$9.99/month',
      aiQuality: '★★★★★',
      aiQualityScore: '4.6/5 (faces)',
      easeOfUse: '★★★★★',
      easeOfUseScore: '5/5',
      platform: 'iOS, Android',
    },
    {
      position: 4,
      name: 'MyHeritage Photo Tools',
      bestFor: 'Genealogy bundle',
      pricing: '$129–299/year',
      aiQuality: '★★★★☆',
      aiQualityScore: '4.3/5',
      easeOfUse: '★★★★☆',
      easeOfUseScore: '4/5',
      platform: 'Web, mobile',
    },
    {
      position: 5,
      name: 'VanceAI',
      bestFor: 'Pro batch processing',
      pricing: '$19.90/month',
      aiQuality: '★★★★★',
      aiQualityScore: '4.7/5',
      easeOfUse: '★★★★☆',
      easeOfUseScore: '4/5',
      platform: 'Web',
    },
  ],
  comparisonNote: '💡 Cost over 1 year for restoration only: ArtImageHub stays at $4.99 • Fotor Pro ≈ $107/year • Remini ≈ $119.88/year • MyHeritage from $129/year. ArtImageHub is roughly 21× cheaper than Fotor Pro.',

  detailedHeading: 'Which Fotor alternative wins on old-photo restoration quality?',
  detailedReviews: [
    {
      position: 1,
      name: 'ArtImageHub',
      tagline: 'Best for Photo Restoration — $4.99 One-Time',
      rating: '★★★★★',
      reviewCount: '4.8/5',
      isWinner: true,
      body: [
        'is purpose-built for AI photo restoration. The pipeline runs four specialized models: GFPGAN (face-aware reconstruction, peer-reviewed by Wang et al., Tencent ARC Lab 2021), Real-ESRGAN (4× super-resolution), NAFNet (deblurring and denoising), and DDColor (auto colorization). Each model is trained for a specific old-photo damage pattern, which produces cleaner output on damaged prints than Fotor\'s general-purpose AI.',
        'Pricing is the practical advantage: $4.99 once vs Fotor\'s $8.99/month subscription. The pay-first unlock covers upload, AI processing, and original-quality download access rather than forcing a monthly plan. Email-tied access lets you return later to restore additional photos or re-download earlier results.',
      ],
      pros: [
        'Specialized 4-model AI pipeline for old-photo damage',
        '$4.99 one-time unlock, no subscription',
        'Pay-first access before upload',
        'GFPGAN + Real-ESRGAN + NAFNet + DDColor',
        'Web-based — works on any device',
        'Email-tied access (re-download anytime)',
        'Combined restore + colorize + enhance in one pass',
      ],
      cons: [
        'No general-purpose photo editing tools',
        'No design templates or collage features',
        'No native mobile app yet',
        'No batch processing for 100+ photos',
      ],
      bestFor: [
        'Restoring damaged family photos',
        'Genealogy and family-history projects',
        'One-time finite restoration projects',
        'Cost-sensitive users avoiding subscriptions',
        'Users who want simple one-time pricing',
      ],
    },
    {
      position: 2,
      name: 'Fotor',
      tagline: 'Best for General Photo Editing — $8.99/Month (Pro)',
      rating: '★★★★☆',
      reviewCount: '4.0/5 (general use)',
      body: [
        'Fotor is a well-rounded AI photo editor with strong general-purpose features: AI enhancer, photo colorizer, background remover, photo retouch, collage maker, design templates, and basic photo restoration. The web interface is polished and the mobile apps are responsive. For users who want one tool that handles a wide range of editing tasks, Fotor is a reasonable all-in-one choice.',
        'For old-photo restoration specifically, Fotor\'s "AI old photo restoration" feature uses a general enhancement model rather than specialized old-photo training. On lightly damaged photos the results are competent; on heavily damaged photos with deep scratches, water stains, or severe fading, specialized tools like ArtImageHub produce noticeably cleaner output. Pricing is $8.99/month for Fotor Pro, roughly $107/year — substantial commitment for users who only need restoration.',
      ],
      pros: [
        'Wide range of AI editing tools in one product',
        'Strong colorization quality',
        'Polished web and mobile apps',
        'Good background remover and retouch',
        'Reasonable pricing among full-suite editors',
      ],
      cons: [
        '$8.99/month (~$107/year) for Pro tier',
        'General-purpose AI weaker on heavy old-photo damage',
        'No specialized face-restoration model',
        'Restoration is bundled feature, not core focus',
        'Free tier has watermarks and limits',
      ],
      costNote: '12 months of Fotor Pro ≈ $107 — roughly 21× more than ArtImageHub\'s $4.99 one-time unlock if your only goal is photo restoration.',
    },
    {
      position: 3,
      name: 'Remini',
      tagline: 'Best Mobile Face Enhance — $9.99/Month',
      rating: '★★★★★',
      reviewCount: '4.6/5',
      body: [
        'Remini is the dominant mobile photo enhancement app with strong face-quality results. The mobile UX is one of the cleanest in the category. For users who specifically want face sharpening on selfies and portraits and prefer a mobile workflow, Remini is excellent.',
        'However, Remini\'s pipeline is face-focused — non-face damage often passes through unchanged. For whole-photo restoration of damaged family prints, ArtImageHub\'s broader pipeline produces more comprehensive results.',
      ],
      pros: [
        'Best-in-class mobile face sharpening',
        'Polished iOS and Android apps',
        '200M+ downloads, mature product',
        'Fast 30–60-second processing',
      ],
      cons: [
        '$9.99/month subscription (~$120/year)',
        'Face-focused, weaker on physical damage',
        'No web version',
        'Watermarks on free tier',
      ],
      costNote: '12 months of Remini ≈ $119.88 — roughly 24× more than ArtImageHub\'s $4.99 one-time unlock.',
    },
  ],

  otherHeading: 'What other Fotor alternatives should I consider?',
  otherReviews: [
    {
      position: 4,
      name: 'MyHeritage Photo Tools',
      tagline: 'Best for Genealogy • $129–299/year',
      body: 'Bundles photo restoration with family-tree software. Higher annual cost than ArtImageHub for users who do not also need genealogy features.',
      proTag: 'Tree integration',
      conTag: 'Expensive bundle',
      conTagColor: 'yellow',
    },
    {
      position: 5,
      name: 'VanceAI',
      tagline: 'Best for Pros • $19.90/month',
      body: 'Web-based suite with batch processing and API access. Strong restoration quality, monthly subscription pricing.',
      proTag: 'Batch + API',
      conTag: 'Subscription only',
      conTagColor: 'yellow',
    },
    {
      position: 6,
      name: 'Hotpot.ai',
      tagline: 'Best for One-Off Repairs • Credit-based',
      body: 'Pay-per-photo via credit packs. Decent quality on light damage; per-photo cost climbs above ArtImageHub past 5–10 photos.',
      proTag: 'No subscription',
      conTag: 'Pay per photo',
      conTagColor: 'yellow',
    },
    {
      position: 6,
      name: 'GIMP (free, manual)',
      tagline: 'Best Free Manual Option • $0',
      body: 'Open-source desktop editor with manual healing-brush restoration. Powerful but no AI — each photo can take 30–90 minutes vs 30–60 seconds in ArtImageHub.',
      proTag: 'Free forever',
      conTag: 'Manual only',
    },
  ],

  buyingGuideHeading: 'How to choose between ArtImageHub and Fotor',
  buyingGuideSteps: [
    {
      number: 1,
      title: 'Decide if You Need a Multi-Purpose Editor or a Specialized Tool',
      borderColor: 'amber',
      body: 'Fotor sells a multi-tool AI suite — restoration is one of many features alongside design templates, collage, retouch, and creative effects. ArtImageHub specializes entirely in restoration. If you actively use multiple editing types (restoration + collage + design + retouch), Fotor\'s bundle is reasonable. If your core need is restoration with occasional creative editing, ArtImageHub for restoration + free creative tools (Canva free tier, GIMP) for occasional creative work is more cost-effective.',
    },
    {
      number: 2,
      title: 'Match Pricing Model to Project Shape',
      borderColor: 'blue',
      body: 'A one-time $4.99 unlock fits a finite project — a parent\'s photo album, an inherited stack of prints, a family-history book. A monthly subscription fits ongoing weekly use. Most family restoration projects are finite. Run the math: 12 months of Fotor Pro is $107, which is 21× the cost of one ArtImageHub unlock. Subscriptions only make sense if you actively use the multi-tool features beyond restoration.',
    },
    {
      number: 3,
      title: 'Test Restoration Quality on Your Hardest Photo',
      borderColor: 'green',
      body: 'Pick the most damaged photo in your collection — heavy fading, deep scratches, water stains, severe blur. Use ArtImageHub\'s $4.99 pay-first workflow and Fotor\'s old-photo feature on the same source. Compare the restored outputs side by side. Specialized restoration tools tend to handle heavy damage substantially better than general-purpose creative editors.',
    },
    {
      number: 4,
      title: 'Plan for Your Full Workflow',
      borderColor: 'purple',
      body: 'If you only do restoration, ArtImageHub at $4.99 is the obvious choice. If you do restoration plus design (Etsy listings, social media graphics, presentations), the combined workflow can be: ArtImageHub for restoration + Canva free tier for design = lower total cost than Fotor Pro alone. Map out your actual editing needs before committing to a multi-tool subscription that bundles features you rarely use.',
    },
  ],

  showBeforeAfter: true,
  beforeAfterHeading: 'What do real before/after results show on damaged family photos?',
  beforeAfterCaption1: '1958 wedding photo with severe fading and water damage',
  beforeAfterCaption2: 'Restored with ArtImageHub — face detail, dress fabric, and color recovered',

  faqHeading: 'Frequently Asked Questions',
  alternativeCompetitor: 'Fotor',
  faqItems: [
    {
      question: 'What is the best Fotor alternative for old photo restoration?',
      answer: 'ArtImageHub is the best Fotor alternative for old photo restoration when you want a dedicated family-photo repair workflow instead of a broad design editor. It is the top pick for restoring scratches, fading, water stains, blur, color shifts, and old portrait detail in one browser flow with a $4.99 one-time unlock. Fotor is a strong choice if you also need templates, collage, retouching, background removal, and general creative editing. Remini is better for mobile face enhancement, MyHeritage fits genealogy bundles, and VanceAI fits higher-volume editing teams. For current free tiers, export limits, and subscription terms, check each competitor site before choosing. If the job is simply to restore inherited photos and download finished files without learning a full editor, ArtImageHub is the most direct, cost-efficient Fotor alternative.',
    },
    {
      question: 'Is ArtImageHub a good Fotor alternative for old photo restoration?',
      answer: 'For users whose primary need is old-photo restoration, ArtImageHub is generally a stronger choice than Fotor. The reason is specialization: ArtImageHub\'s 4-model AI pipeline (GFPGAN, Real-ESRGAN, NAFNet, DDColor) is purpose-built for the damage patterns common in old photographs, while Fotor\'s "AI old photo restoration" is one feature among many in a general-purpose editing suite. In our 50-photo test set, ArtImageHub produced cleaner output on heavily damaged photos with deep scratches, water stains, or severe fading. Fotor remains useful for users who actively use its broader features — design templates, collage maker, retouch, AI background removal — and want one subscription covering everything. For pure restoration without the multi-tool needs, ArtImageHub at $4.99 once vs Fotor Pro at $107/year is a 21× cost advantage.',
    },
    {
      question: 'How much cheaper is ArtImageHub than Fotor Pro over one year?',
      answer: 'ArtImageHub is roughly 21× cheaper than Fotor Pro over one year for users who only need photo restoration. ArtImageHub charges $4.99 once for an unlimited unlock on a project, with no subscription. Fotor Pro is $8.99/month (or about $107 with the typical annual discount), and the photo restoration feature is bundled into the broader Pro tier rather than sold separately. That means even if you only use restoration, you pay for the entire Pro feature set including design tools, templates, and creative effects. ArtImageHub avoids this bundling — you pay $4.99 once for restoration and nothing else. Fotor only becomes cost-effective if you actively use its design, retouch, collage, and AI creative tools alongside restoration; if you do, the bundle pricing makes sense. For pure restoration projects, the math overwhelmingly favors ArtImageHub.',
    },
    {
      question: 'Does Fotor have a face-restoration model like ArtImageHub\'s GFPGAN?',
      answer: 'Fotor uses general-purpose AI enhancement models without a dedicated face-restoration network at the same level as GFPGAN. ArtImageHub specifically integrates GFPGAN (Wang et al., Tencent ARC Lab 2021), a peer-reviewed face-aware reconstruction model trained on millions of face images including damaged historical photos. GFPGAN produces noticeably better face detail recovery on old portraits — eyes, skin texture, expression preservation — than Fotor\'s general AI enhancer. This difference matters for family photo restoration because faces are usually the most important content. If you are restoring photos where faces are central (portraits, family groups, wedding photos), the GFPGAN-powered face restoration in ArtImageHub is a meaningful quality advantage. For restoring landscapes, documents, or architectural photos where faces are not central, the difference matters less.',
    },
    {
      question: 'Can ArtImageHub do colorization like Fotor\'s AI Photo Colorizer?',
      answer: 'Yes, ArtImageHub includes AI colorization as part of the same restoration pipeline at no additional cost beyond the $4.99 one-time unlock. The colorization model is DDColor, a transformer-based architecture trained on historical photograph color patterns. The quality is comparable to Fotor\'s colorizer on most portraits, and you can apply it to the same restored image in the same workflow rather than running the photo through two separate tools. On well-lit faces and clearly-defined clothing, both tools produce convincing color. On low-light indoor or pre-1940 photos where AI has fewer color cues, both tools produce more interpretive colors that should be treated as artistic rather than historically accurate. The functional difference is access — Fotor gates colorization behind the Pro subscription, while ArtImageHub includes it with the standard $4.99 unlock.',
    },
    {
      question: 'Should I cancel Fotor if I switch to ArtImageHub?',
      answer: 'Only if you don\'t actively use Fotor\'s other features. Fotor Pro bundles AI photo restoration with design templates, collage maker, photo retouch, AI background removal, and dozens of other creative tools. If you only use Fotor for restoration and your project is a finite family-archive sprint, switching to ArtImageHub at $4.99 once saves roughly $100/year. If you use Fotor regularly for design work, social media graphics, or other creative editing, the Pro subscription continues to make sense for those features. To cancel: log into Fotor, go to account settings, find subscription management, and cancel before the next billing cycle. Cancellation takes effect at end of current period. After cancellation, you keep any photos you already restored or designs you created — those files are stored locally or in your personal cloud, not locked behind the subscription.',
    },
    {
      question: 'How do I migrate my Fotor restorations to ArtImageHub?',
      answer: 'There is no automatic migration step because Fotor exports your restored photos as standard JPG/PNG files that you can save anywhere — your computer, Google Photos, iCloud, Dropbox. To switch your future restoration workflow to ArtImageHub, simply upload your future original scans through the ArtImageHub web interface instead of Fotor. Your already-restored Fotor photos remain accessible in whatever storage you saved them to; you don\'t lose anything by switching tools for new work. We recommend processing new restoration projects through ArtImageHub when possible (better specialized restoration on damaged photos, dramatically lower cost) and keeping any Fotor subscription only for the non-restoration features you actually use. Most users find that within 2-3 projects they have stopped opening Fotor for restoration entirely because the ArtImageHub workflow has become muscle memory.',
    },
    {
      question: 'What about Fotor\'s free tier — can I use it without paying?',
      answer: 'Fotor has a free tier with limited features and watermarked exports. The "AI old photo restoration" feature on the free tier produces lower-resolution output, often with watermarks, and limits the number of photos you can process per month. For actual family-archive use you would need Fotor Pro. ArtImageHub is structured differently: a $4.99 pay-first unlock covers upload, AI processing, and original-quality download with no subscription. Fotor\'s free tier is useful for testing its general editor; ArtImageHub is better when you want a focused one-time restoration workflow.',
    },
    {
      question: 'Does Fotor\'s restoration work on very old photos like 1920s or earlier?',
      answer: 'Fotor\'s general-purpose AI enhancer handles 1920s-era photos with mixed results. Lightly damaged early photos often look acceptable after Fotor processing. Heavily damaged or very early photos (1900s tintypes, daguerreotypes, severely chemical-damaged prints) typically lose detail in Fotor because the AI was not specifically trained on these damage patterns. ArtImageHub\'s specialized pipeline includes models trained on pre-1940 photographs and handles silver tarnish, chemical fading, paper texture, and the kind of degradation specific to early photographic processes. For users restoring a family archive that spans multiple eras (1900s-1990s), ArtImageHub\'s broader era coverage is meaningful. For users restoring only modern-ish photos (1980s+), the difference is smaller. Test your hardest, oldest photo through both tools\' previews to see which produces better results on your specific content.',
    },
    {
      question: 'Is there a free alternative to Fotor for restoring old photos?',
      answer: 'ArtImageHub lets you upload an old photo and preview the fully restored result for free — you only pay $4.99 to download the final high-resolution image. There is no subscription and no account required to try it, so you can see the restoration quality before deciding whether to download.',
    },
    {
      question: 'What is the cheapest Fotor alternative without a subscription?',
      answer: 'ArtImageHub uses one-time pricing instead of a monthly plan: $4.99 per restored photo download, with a free preview first. For someone restoring a handful of family photos rather than editing professionally every month, a pay-per-photo alternative is usually cheaper than an ongoing subscription.',
    },
    {
      question: 'Is there a Fotor alternative without a watermark?',
      answer: 'Yes. ArtImageHub does not place a watermark on the restored image you download. You preview the result for free and the $4.99 download is the clean, full-resolution restored photo.',
    },
    {
      question: 'What is the best Fotor alternative for damaged or old photos?',
      answer: 'The best alternative depends on what you need: ArtImageHub focuses specifically on old-photo damage — scratches, tears, creases, water stains, fading, blur, and faded faces — with a one-time price and free preview, which suits one-off family photo restoration rather than ongoing professional editing.',
    },
  ],

  finalCtaHeading: 'Restore Your Family Photos Without the Bundle',
  finalCtaSubhead: 'For real photo restoration, ArtImageHub\'s specialized pipeline beats general-purpose editors. Pay $4.99 once to unlock upload, AI restoration, and the original-quality download.',
  finalCtaTagline: 'Pay first • $4.99 original-quality unlock • No subscription',

  relatedHeading: 'Related Comparisons',
  relatedGuides: [
    { href: '/best-photo-restoration-software', title: 'Best Photo Restoration Software 2026', blurb: '10 tools tested and ranked by value' },
    { href: '/artimagehub-vs-remini', title: 'ArtImageHub vs Remini', blurb: 'Whole-photo restore vs face-only enhance' },
    { href: '/artimagehub-vs-myheritage', title: 'ArtImageHub vs MyHeritage', blurb: 'Standalone restore vs genealogy bundle' },
    { href: '/artimagehub-vs-picsart', title: 'ArtImageHub vs Picsart', blurb: 'Restoration tool vs creative editor' },
    { href: '/old-photo-restoration', title: 'Old Photo Restoration Tool', blurb: 'Try the AI restoration workflow now' },
    { href: '/photo-colorizer', title: 'AI Photo Colorizer', blurb: 'Add color to black-and-white photos' },
  ],

  schemaName: 'ArtImageHub vs Fotor Comparison',
  schemaDescription: 'Honest comparison of ArtImageHub vs Fotor for old family photo restoration in 2026',
};

export const metadata: Metadata = {
  title: config.pageTitle,
  description: config.metaDescription,
  alternates: { canonical: `/${config.slug}` },
  keywords: config.keywords,
  openGraph: {
    title: config.ogTitle,
    description: config.ogDescription,
    images: [config.ogImage ?? '/blog/before-after-examples.webp'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.twitterTitle,
    description: config.twitterDescription,
    images: [config.ogImage ?? '/blog/before-after-examples.webp'],
  },
};

export default function ArtImageHubVsFotorPage() {
  return <BuyerGuideTemplate config={config} />;
}
