# Continuous Open-Source SEO Learning Loop — 2026-05-17

## Objective

Keep ArtImageHub moving toward `>=10 paid orders/day` by repeatedly learning from current open-source SEO and acquisition tools, then shipping only revenue-linked improvements.

This is not a one-time research memo. It is a recurring operating loop.

## Non-Negotiable Guardrails

1. Paid path stability comes before traffic expansion: old-photo page load, Dodo checkout create, entitlement check, and restore fulfillment must stay healthy.
2. SEO work must map to checkout intent, not vanity traffic.
3. Every SEO experiment needs an evidence gate: `implemented`, `live-verified`, then `outcome-verified` only after payment metrics move.
4. Agentic acquisition can discover and draft, but cannot claim distribution without final public URL and screenshot.
5. Do not create cannibal pages unless SERP intent is distinct and internal links/canonicals are planned.

## Weekly Learning Inputs

Use `open-source-seo-watchlist.tsv` as the active watchlist. Each week, scan updates and patterns from:

- Unlighthouse for site-wide performance/SEO crawling patterns.
- SerpBear for buyer-keyword rank tracking and notification patterns.
- SEOnaut for crawl audit categories and regression monitoring.
- Crawlee for polite discovery queues and structured acquisition surfaces.
- Firecrawl/web-agent for LLM-ready research and competitor/forum synthesis.
- IndexNow/sitemap automation for release-to-indexing gates.

## Execution Cadence

### Daily Revenue Check

- Read backend `payment_initiations` and `payment_successes`.
- If paid path latency/failure is suspicious, stop acquisition work and fix the path first.
- If paid path is healthy, select one acquisition/SEO task from the queue.

### Twice Weekly Open-Source Scan

For each active watchlist project:

1. Check recent releases/docs/issues for a pattern we can reuse.
2. Write one concrete ArtImageHub application.
3. Convert it into a small task: script, page patch, queue row, or measurement check.
4. Reject ideas that do not touch buyer traffic, conversion, or measurement.

### Weekly Shipping Batch

Ship at most one focused SEO batch at a time:

1. Buyer keyword/page gap.
2. Technical crawl/performance fix.
3. Internal-link/schema/indexing improvement.
4. Acquisition lead queue expansion.

Do not mix unrelated page copy, infra, and tracking changes in one commit.

## First Implementation Backlog

### P0 — Live Gate Before More Traffic

Current stability patch `8f097f1` is origin-verified but not public live-verified while apex still serves build marker `10016a7` through `x-middleware-rewrite: http://localhost:3000/...`.

Done when:

- `https://artimagehub.com/old-photo-restoration` serves the new build path.
- Access-check UI contains the retry timeout behavior.
- Dodo checkout create still returns 200.
- A restore task can complete with the current inference/backend chain.

### P1 — Buyer-Page Technical Crawl

Inspired by Unlighthouse/SEOnaut.

Scope first crawl to revenue URLs only:

- `/old-photo-restoration`
- `/photo-restoration-no-subscription`
- `/photo-restoration-one-time-payment`
- `/photo-restoration-cost`
- `/pt-BR/old-photo-restoration`
- `/pt-BR/preco-restauracao-fotos-antigas`
- `/pt-BR/restaurar-fotos-antigas-sem-assinatura`

Checks:

- 200 status.
- title/H1 present and buyer-intent aligned.
- canonical present.
- meta description present.
- sitemap inclusion.
- internal link exists from relevant parent/blog/tool page.
- no free/no-registration copy conflict on paid-first pages.

### P2 — Buyer Rank/Query Monitor

Inspired by SerpBear.

Start with `buyer-keyword-watchlist.tsv`. Output a dated snapshot with:

- market
- keyword
- target URL
- current indexed URL if discoverable
- GSC clicks/impressions if available
- action recommendation

No broad rank tracker rollout until it produces actions tied to payment metrics.

### P3 — Agentic Acquisition Discovery Queue

Inspired by Crawlee and Firecrawl/web-agent.

Collect candidate surfaces, not posts:

- Reddit/forum threads asking about old photo restoration.
- Pinterest search surfaces for family-photo restoration.
- Blog/comment pages discussing subscription vs one-time restoration tools.
- Brazil Portuguese surfaces for restoring old photos and pricing.

Required row fields:

- surface URL
- user intent
- suggested angle
- target page
- risk/spam note
- evidence needed before claim

## Acceptance Rule

A loop iteration counts only if it produces at least one of:

- committed code/script/docs that changes execution,
- a live-verified SEO/indexing improvement,
- a new measured acquisition surface with evidence,
- a paid-path fix that protects conversion.

Traffic growth is useful only when it moves `payment_initiations` and `payment_successes` toward `>=10 paid orders/day`.
