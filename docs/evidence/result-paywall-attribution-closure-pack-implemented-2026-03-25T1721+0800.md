# Result-Paywall Attribution Closure Pack

- Status: `implemented`
- Captured at: `2026-03-25 17:21 UTC+8`
- Time window: `2026-03-25`
- Page scope: `/old-photo-restoration`, `/photo-enhancer`, `/photo-colorizer`
- Metric type: result-paywall source-tuple continuity from `processing_complete -> result_unlock click -> /subscription -> payment_started`
- Evidence level:
  - `E1` for code change and file-level implementation
  - existing live basis for current gap and downstream shape
  - not yet `E2` for the new patch on production; `live-verified` still pending deploy/alias cut

## Decision

Go to deploy. Do not call this lane closed yet.

Reason:
- the current live gap is already source-backed
- the patch is narrow and isolated to three result CTA call sites
- the patch does not touch PayPal create-order/capture logic, checkout routing, pricing, or payment success handling

## Source-Backed Basis

### 1. Current live gap is at the result-paywall click, not downstream checkout

- `docs/evidence/result-paywall-cta-source-live-pre-2026-03-25.json`
  - result CTA click on `/photo-enhancer` had only `event_label`
- `docs/evidence/result-paywall-cta-source-live-post-2026-03-25.json`
  - result CTA click improved to include `landing_page=/photo-enhancer`
  - but `cta_slot`, `entry_variant`, and `checkout_source` were still `null`
- `docs/evidence/payment-click-source-live-post-2026-03-25.json`
  - downstream `/subscription` already showed full tuple on `payment_click` and `payment_started`:
  - `landing_page=/photo-enhancer`
  - `cta_slot=result_unlock`
  - `entry_variant=result_paywall`
  - `checkout_source=download_intercept`
- `docs/evidence/processing-complete-source-live-2026-03-25.json`
  - upstream `processing_complete` already carries page identity on `/photo-enhancer` and `/photo-colorizer`

Conclusion:
- the highest-value remaining attribution blind spot is the handoff between result CTA click and checkout start

## Code Change

Files changed:
- `src/app/old-photo-restoration/restore-client.tsx`
- `src/app/photo-enhancer/enhance-client.tsx`
- `src/app/photo-colorizer/colorize-client.tsx`

What changed:
- each paid result surface now builds a dedicated source object for the result-paywall CTA
- the same source tuple already used for the `/subscription` URL is now also passed into `trackCTAClick(...)`
- `/old-photo-restoration` now reuses the same merged source object for both the checkout URL and the click event, instead of rebuilding the query inline and sending the old base `funnelSource` to analytics

Source tuple now intended at click time:
- `/old-photo-restoration`
  - `landing_page=/old-photo-restoration`
  - `cta_slot=restore_done_cta`
  - `entry_variant=restore_done`
  - `checkout_source=download_intercept`
- `/photo-enhancer`
  - `landing_page=/photo-enhancer`
  - `cta_slot=result_unlock`
  - `entry_variant=result_paywall`
  - `checkout_source=download_intercept`
- `/photo-colorizer`
  - `landing_page=/photo-colorizer`
  - `cta_slot=result_unlock`
  - `entry_variant=result_paywall`
  - `checkout_source=download_intercept`

## Verification Performed

### Local implementation checks

- `npm run lint -- src/app/photo-enhancer/enhance-client.tsx src/app/photo-colorizer/colorize-client.tsx src/app/old-photo-restoration/restore-client.tsx`
  - result: `0 errors`
  - remaining warnings are pre-existing and unrelated to this patch
- `npm run build`
  - result: passed

### What is verified right now

- the intended source tuple is now wired into the three result CTA analytics calls in code
- the patch compiles and passes targeted lint

### What is not yet verified

- no production proof yet that the new result CTA click event shows the full source tuple after deploy
- no production proof yet that the same tuple is continuous across all three pages from result click to `payment_started`

Therefore current status is:
- `implemented`
- not `live-verified`

## Live Acceptance Gate

This pack becomes `live-verified` only if production proof shows, for each locked page in scope:

1. `processing_complete` shows the correct page identity
2. result CTA `cta_click` shows the expected tuple for that page
3. `/subscription` `payment_started` shows the same tuple
4. the tuple is identical across the chain for that page

Required page set:
- `/old-photo-restoration`
- `/photo-enhancer`
- `/photo-colorizer`

## Go/No-Go Rule Before Live Proof

- `GO` to deploy if the question is whether this is the right narrow code change to test
- `NO-GO` to any claim that the attribution lane is closed before post-deploy production evidence exists

## Rollback

- rollback target: revert the single commit that contains this patch
- blast radius: only result-page CTA attribution on the three locked pages
