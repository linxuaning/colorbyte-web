# Revenue SEO + Agent Acquisition Research — 2026-05-16

## Goal

Move ArtImageHub from the verified baseline of 2 paid orders/day toward `>=10 paid orders/day`.

Success is judged by backend `payment_initiations` and `payment_successes`, not by vanity traffic.

## What I Researched

Open-source systems and agent patterns worth learning from:

1. **Technical SEO crawlers** — SEOnaut, Unlighthouse, SiteOne Crawler-style tools.
   - Useful pattern: crawl all indexable URLs, detect missing title/meta/canonical/schema/hreflang/internal-link problems, and fail CI on regressions.
   - ArtImageHub application: add a lightweight local crawler focused on buyer pages first, not whole-site perfection.

2. **Rank and SERP monitors** — SerpBear-style rank tracking.
   - Useful pattern: track a small keyword set daily, grouped by intent and country.
   - ArtImageHub application: track only keywords tied to checkout intent, e.g. no-subscription, one-time payment, cost, service, Brazil pt-BR terms.

3. **Programmatic SEO systems** — template + keyword matrix + canonical/cannibal checks.
   - Useful pattern: generate pages from an intent matrix, but gate each page by unique SERP intent and internal-link plan.
   - ArtImageHub application: continue small buyer-intent batches, but create a repeatable page spec and sitemap/indexing checklist.

4. **Indexing automation** — IndexNow + sitemap freshness + Search Console inspection.
   - Useful pattern: every shipped revenue page enters an indexing queue with proof of sitemap inclusion and IndexNow submission.
   - ArtImageHub application: the latest EN buyer pages were missing from sitemap; fixed in this pass.

5. **Agentic acquisition loops** — Crawlee/Firecrawl/browser-agent style discovery + drafting.
   - Useful pattern: agents should not spam; they should discover relevant communities/pages, draft context-specific replies, and require evidence URLs/screenshots before claiming distribution.
   - ArtImageHub application: build a “lead surface queue” for Reddit/Pinterest/Quora/forum/blog comment opportunities, prioritized by old-photo restoration purchase intent.

## Immediate Project Findings

- Existing site already has many buyer pages and a strong sitemap implementation.
- Gap found: the latest EN buyer-intent pages were live but absent from `src/app/sitemap.ts`:
  - `/photo-restoration-no-subscription`
  - `/photo-restoration-one-time-payment`
  - `/photo-restoration-cost`
- Fix applied: added those three pages to the sitemap at priority `0.9`.
- Existing `submit-indexnow.js` is stale because it submits a short hardcoded URL list and misses many buyer pages.

## Revenue-First Execution Plan

### P0 — Index the pages closest to money

1. Keep sitemap complete for every buyer-intent page.
2. Replace hardcoded IndexNow submission with sitemap-derived or explicit buyer-page batches.
3. Submit only revenue-relevant changed URLs first.
4. Acceptance:
   - URL appears in sitemap.
   - IndexNow submission returns success.
   - Page returns 200 on apex.

### P1 — Build a buyer-keyword monitor

Track 20–40 terms only, grouped by conversion intent:

- English:
  - old photo restoration
  - photo restoration no subscription
  - photo restoration one time payment
  - photo restoration cost
  - best photo restoration service
  - restore old family photos
- Brazil:
  - restaurar fotos antigas online
  - preço restauração de fotos antigas
  - restaurar fotos antigas sem assinatura
  - restauração de fotos pagamento único

Acceptance:
- Daily CSV/markdown snapshot with URL, country, rank/status when available.
- Actions generated only for terms with buyer intent or near-conversion pages.

### P2 — Agentic acquisition queue

Create a queue of manual/agent-assisted opportunities:

- Pinterest pins targeting family-photo restoration and no-subscription pricing.
- Reddit/comment opportunities only where the thread asks about restoring old photos, pricing, subscriptions, or tool choice.
- Blog/forum comparison comments where a no-subscription one-time workflow is relevant.

Rules:
- No “posted” claim without final URL and screenshot.
- No channel win claim without `payment_initiations` / `payment_successes` movement.
- Drafts must be context-specific, not generic spam.

### P3 — Conversion and fulfillment guardrail

Before scaling traffic, keep a short proof check available:

- Apex old-photo page 200.
- Dodo checkout create 200.
- Feature entitlement check 200.
- Internal restore task completes.

## Next Concrete Tasks

1. Patch `submit-indexnow.js` so buyer-intent pages are always included.
2. Add a `docs/seo-reports/buyer-keyword-watchlist.tsv` file.
3. Add a `docs/seo-reports/acquisition-opportunity-queue.tsv` file for agent/manual distribution.
4. Run validation and commit the sitemap + indexing/watchlist changes as one small revenue-SEO patch.
