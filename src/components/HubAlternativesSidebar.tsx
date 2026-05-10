import Link from "next/link";

// Hub-page sidebar: gives "researcher" visitors a parallel buyer-guide entry
// alongside the main RestoreClient flow. Each card routes to /subscription
// with `entry_variant=buyer_guide` + `checkout_source=inline_card` so Postgres
// `payment_initiations` can isolate this path's conversion rate from
// modal_overlay tool_locked main path. Hidden on mobile to keep the
// modal_overlay path uncluttered (acceptance criterion in handoff spec).
//
// Card 3 (Photomyne) intentionally dropped — comparison page doesn't exist
// yet (`/blog/artimagehub-vs-photomyne` not in src/content/blog/). Add back
// when content batch lands the comparison post.

interface AlternativeCard {
  competitor: string;
  strength: string;
  weakness: string;
  edge: string;
  ctaText: string;
  ctaHref: string;
  secondaryHref: string;
  secondaryText: string;
}

const cards: AlternativeCard[] = [
  {
    competitor: "Remini",
    strength: "Best mobile face sharpening (4.6★ App Store)",
    weakness: "$30/year subscription, mobile-only, watermark on free tier",
    edge: "Browser-based, $4.99 one-time, no watermark, equal face quality",
    ctaText: "See ArtImageHub vs Remini →",
    ctaHref:
      "/subscription?landing_page=%2Fold-photo-restoration&cta_slot=sidebar_card_remini&entry_variant=buyer_guide&checkout_source=inline_card",
    secondaryHref: "/blog/artimagehub-vs-remini",
    secondaryText: "Read the full comparison",
  },
  {
    competitor: "MyHeritage Photo Enhancer",
    strength: "Best for genealogy, integrates with family tree",
    weakness: "$99/year subscription, 10 free photos/month then locked",
    edge: "$4.99 one-time per photo session, no genealogy paywall, equal colorization",
    ctaText: "See ArtImageHub vs MyHeritage →",
    ctaHref:
      "/subscription?landing_page=%2Fold-photo-restoration&cta_slot=sidebar_card_myheritage&entry_variant=buyer_guide&checkout_source=inline_card",
    secondaryHref: "/blog/artimagehub-vs-myheritage",
    secondaryText: "Read the full comparison",
  },
];

export default function HubAlternativesSidebar() {
  return (
    <aside
      aria-labelledby="hub-alternatives-heading"
      className="hidden lg:block lg:w-80 lg:flex-shrink-0"
    >
      <div className="sticky top-20 rounded-2xl border border-[#d2d2d7]/60 bg-[#faf8f4] p-5">
        <h2
          id="hub-alternatives-heading"
          className="text-[16px] font-semibold tracking-[-0.01em] text-[#1d1d1f]"
        >
          Compare with alternatives
        </h2>
        <p className="mt-2 text-[13px] leading-[1.55] text-[#6e6e73]">
          Most readers buy outright after 1–2 minutes on this page. If you&rsquo;d like to compare against Remini or MyHeritage first, here&rsquo;s the side-by-side.
        </p>

        <div className="mt-5 space-y-4">
          {cards.map((card) => (
            <article
              key={card.competitor}
              className="rounded-xl border border-[#d2d2d7]/60 bg-white p-4"
            >
              <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                ArtImageHub vs {card.competitor}
              </h3>

              <dl className="mt-3 space-y-1.5 text-[12px] leading-[1.55]">
                <div>
                  <dt className="inline font-medium text-[#1d1d1f]">Strength: </dt>
                  <dd className="inline text-[#6e6e73]">{card.strength}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-[#1d1d1f]">Weakness: </dt>
                  <dd className="inline text-[#6e6e73]">{card.weakness}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-[#0071e3]">ArtImageHub edge: </dt>
                  <dd className="inline text-[#444]">{card.edge}</dd>
                </div>
              </dl>

              <Link
                href={card.ctaHref}
                className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-full bg-[#0071e3] px-4 text-[13px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-150"
              >
                {card.ctaText}
              </Link>

              <Link
                href={card.secondaryHref}
                className="mt-2 block text-center text-[12px] font-medium text-[#0071e3] hover:underline"
              >
                {card.secondaryText} →
              </Link>
            </article>
          ))}
        </div>

        <Link
          href="/best-photo-restoration-software"
          className="mt-5 block text-center text-[12px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] hover:underline"
        >
          Browse the full 17-tool comparison →
        </Link>
      </div>
    </aside>
  );
}
