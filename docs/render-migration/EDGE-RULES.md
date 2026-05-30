# Render static-export — edge rules replication (redirects + headers)

When colorbyte-web moves from Vercel (Next server) to Render static export, the
`next.config.ts` `redirects()`/`headers()` and `vercel.json` no longer apply.
This is the exact replication map. Most is handled in `render.yaml`; a couple of
host-level items stay at Cloudflare (already in front of artimagehub.com).

## Redirects
| Source | Dest | Status | Where |
|---|---|---|---|
| `/colorize-photos` | `/photo-colorizer` | 301 | render.yaml routes |
| `/pricing` | `/#pricing` | 301 | render.yaml routes |
| `www / non-canonical host` → apex `https://artimagehub.com` | 301 | **Cloudflare** (already enforced; verify rule exists) |
| deleted blog slugs → `/blog` | — | **N/A** — `deletedBlogSlugs` is EMPTY since 2026-05-04 (no bulk 301s) |

## Response headers (replicated in render.yaml on `/*` unless noted)
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Link: <…/sitemap.xml>; rel="sitemap", <…/llms.txt>; rel="describedby"` (AI discovery)
- `Cache-Control: public, max-age=31536000, immutable` on `/_next/static/*`

### Minor / path-specific (optional, low impact — add to render.yaml headers or CF Transform Rules if wanted)
- `Content-Type: text/markdown` for `/llms-full*.txt`
- `Content-Type: application/linkset+json` + cache for `/.well-known/api-catalog`
- `Access-Control-Allow-Origin: *` for `/.well-known/mcp/*` and `/.well-known/agent-skills/*`

## SEO-ops that moved off the site (API routes gone in static export)
- **IndexNow**: `scripts/submit-*indexnow*.js` POST to `SITE_URL/api/indexnow` will 404.
  Re-point them to submit directly to the IndexNow API, or run from a CF Worker. (Freshness ping; non-critical-path.)
- `/api/keepalive`, `/api/metrics/ga4`: not on any client path (GA4 uses client `window.gtag`); safe to drop.
- `/api/payment/dodo-create-checkout`: unused by client (checkout calls colorbyte-api directly); safe to drop.

## DNS cutover (HOLD until founder says "切")
1. Create Render static site from this repo (Blueprint = render.yaml). Verify on its
   `*.onrender.com` URL: checkout opens (calls colorbyte-api), /pt-BR//ru//ja/ render,
   /en/<slug> 404s, sitemap.xml present.
2. Cloudflare DNS: point artimagehub.com → Render static site (CNAME), CF proxy on.
   Overlap: bring Render up + verified FIRST, then switch DNS. Do NOT touch the existing
   Vercel deployment (dd94090) before the switch — it stays as zero-downtime fallback.
3. Verify prod, then retire Vercel.
