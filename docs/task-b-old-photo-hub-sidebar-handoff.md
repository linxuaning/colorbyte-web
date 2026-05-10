# Task B handoff — `/old-photo-restoration` hub sidebar

**Status (2026-05-10)**: Content + URL template ready. TSX implementation pending route to dev (render-logic on main hub page = engineer domain per `feedback_wiring_boundary_content_vs_engineer`).

**Source dispatch**: 创始人 5-10 03:52 UTC P1, "Task B"

## Spec

Add a right-sidebar "Compare with alternatives" block on `/old-photo-restoration` hub. Visually subordinate to the main `RestoreClient` modal-overlay flow (don't disturb modal_overlay tool_locked main path). Gives "researcher" users an SEO-friendly secondary entry into the buyer-guide pattern that converted Rich Horan 5/9.

**Constraints (hard)**:
- Modal_overlay tool_locked main path UNCHANGED
- No payment freeze touch (no dodo-checkout/payment-copy/orders/checkout 路由 source edits)
- New CTAs use `entry_variant=buyer_guide` `checkout_source=inline_card` for Postgres differentiation

## Suggested mount point

`src/app/old-photo-restoration/page.tsx`. Wrap the main content section (currently `max-w-3xl` single column) in a `lg:flex lg:max-w-6xl` split where:
- main column keeps `RestoreClient` and existing trust/social-proof blocks (current layout, unchanged on mobile)
- right column shows the new `<HubAlternativesSidebar />` (hidden on mobile, visible `lg:block`)

Insertion point candidate: between `</div>` after the trust-badges grid (line ~282) and the `<ProofSampleGallery>` block (line 284). OR after `<RestoreClient />` (line ~242) before social-proof. Engineer judgment.

## 3 mini-comparison cards (content ready)

Each card = small block with: competitor name, 1-line value prop, ArtImageHub edge bullet, ranked-card pay_first CTA button.

### Card 1 — ArtImageHub vs Remini

```
Competitor: Remini
Strength: Best mobile face sharpening (4.6★ App Store)
Weakness: $30/year subscription, mobile-only, watermark on free tier
ArtImageHub edge: Browser-based, $4.99 one-time, no watermark, equal face quality
CTA text: "See ArtImageHub vs Remini →"
CTA URL:  /subscription?landing_page=%2Fold-photo-restoration&cta_slot=sidebar_card_remini&entry_variant=buyer_guide&checkout_source=inline_card
Secondary link: /blog/artimagehub-vs-remini → "Read the full comparison"
```

### Card 2 — ArtImageHub vs MyHeritage Photo Enhancer

```
Competitor: MyHeritage Photo Enhancer
Strength: Best for genealogy, integrates with family tree
Weakness: $99/year subscription required, 10 free photos/month then locked
ArtImageHub edge: $4.99 one-time per photo session, no genealogy paywall, equal colorization
CTA text: "See ArtImageHub vs MyHeritage →"
CTA URL:  /subscription?landing_page=%2Fold-photo-restoration&cta_slot=sidebar_card_myheritage&entry_variant=buyer_guide&checkout_source=inline_card
Secondary link: /blog/artimagehub-vs-myheritage → "Read the full comparison"
```

### Card 3 — ArtImageHub vs Photomyne

```
Competitor: Photomyne
Strength: Auto-scans photo albums via phone camera, OCR for handwritten captions
Weakness: $5/month subscription, scanning-focused not restoration-focused
ArtImageHub edge: Restores actual damage (scratches, fading, blur), not just digitization
CTA text: "See ArtImageHub vs Photomyne →"
CTA URL:  /subscription?landing_page=%2Fold-photo-restoration&cta_slot=sidebar_card_photomyne&entry_variant=buyer_guide&checkout_source=inline_card
Secondary link: (no /blog/artimagehub-vs-photomyne page exists yet — engineer can drop secondary link or content can author the page in a follow-up batch)
```

> **Note on Card 3**: The artimagehub-vs-photomyne comparison page doesn't currently exist in `src/content/blog/`. Two options for engineer: (a) drop the secondary link, ship cards 1-2 secondary links; (b) author the comparison page in a follow-up content batch. If engineer prefers (b), I can ship the page in next batch.

## Sidebar header + intro copy

```
Header: "Compare with alternatives"
Intro:  "Most readers buy outright after 1-2 minutes on this page.
         If you'd like to compare against Remini, MyHeritage, or
         Photomyne first, here's the side-by-side."
Footer link: "[Browse the full 17-tool comparison →](/best-photo-restoration-software)"
```

## Acceptance

- 3 cards visible on `lg:` breakpoint and up; hidden on mobile (don't crowd modal_overlay path)
- Each CTA hits `/subscription?...inline_card` URL pattern (Postgres `payment_initiations` should record `checkout_source=inline_card` after click)
- Modal_overlay tool_locked main path: identical visual + behavior pre/post change
- Slow-network E2E + multi-region check per `feedback_payment_class_slow_network_required` (since this touches the main hub page even though new CTAs only)

## Why I'm not implementing TSX directly

Per `feedback_wiring_boundary_content_vs_engineer`: render-logic = engineer domain. The hub page is also payment-class (main paid-conversion entry), where touching layout near `<RestoreClient />` carries E2E re-verification burden per `feedback_payment_class_slow_network_required`. Content + spec is my domain; TSX implementation routed.

## Deadline

Founder set 5/16 for Task A + B. Task A shipped 5-10 (e2f3e98). Task B handoff ready; engineering window = 5/11 → 5/16 inclusive.
