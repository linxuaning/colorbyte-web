# colorbyte-web deploy model (2026-05-30)

Prod for **artimagehub.com** is the Render static site `artimagehub-web-emergency`
(NOT Vercel — Vercel deploys were blocked since 5/26 but never served prod; DNS has
pointed at Render via Cloudflare since 5/26).

## How deploys work
- Render tracks the **`production`** branch with **autoDeploy = yes**.
- `main` is the dev/integration branch — **pushing to `main` does NOT deploy**.
- **`production` is branch-protected**: PR required, enforce_admins on, no force-push,
  no deletion → nobody (incl. admins) can push directly; changes land only via PR.
- **To ship to prod**: open a PR `main → production` and merge it. That merge is both
  the payment-safe gate point (review the delta before merging) and the auto-deploy
  trigger.

## Build
Static export via `scripts/build-static-export.mjs` (relocates `src/app/api` +
`src/app/sitemap.ts` during `next build`, generates extensionless HTML + static
sitemap into `./out`). Redirects/headers are set on the Render service (routes/headers
API), not `next.config` (export drops them). `render.yaml` is NOT used by the current
manually-configured service — it's a Blueprint reference only.

## Not prod-related
- `auto-alias.yml` (Vercel promote) removed — Vercel is irrelevant to prod.
- Payment backend `colorbyte-api` is a separate Render web service (still spins down;
  kept warm by a keepalive pinger).
