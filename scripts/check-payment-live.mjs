#!/usr/bin/env node

import assert from "node:assert/strict";

const SITE_URL = process.env.PAYMENT_SITE_URL || "https://artimagehub.com";
const CHECKOUT_TIMEOUT_MS = Number(process.env.PAYMENT_CHECK_TIMEOUT_MS || 70000);
const KEEPALIVE_TIMEOUT_MS = Number(process.env.PAYMENT_KEEPALIVE_TIMEOUT_MS || 25000);
const PAGE_TIMEOUT_MS = Number(process.env.PAYMENT_PAGE_TIMEOUT_MS || 25000);

function timeoutSignal(timeoutMs) {
  if (typeof AbortSignal !== "undefined" && "timeout" in AbortSignal) {
    return AbortSignal.timeout(timeoutMs);
  }
  return undefined;
}

async function fetchText(url, timeoutMs) {
  const response = await fetch(url, {
    signal: timeoutSignal(timeoutMs),
    headers: { "User-Agent": "artimagehub-payment-live-check/1.0" },
  });
  const body = await response.text();
  return { response, body };
}

async function fetchJson(url, init, timeoutMs) {
  const response = await fetch(url, {
    ...init,
    signal: timeoutSignal(timeoutMs),
    headers: {
      "User-Agent": "artimagehub-payment-live-check/1.0",
      ...(init.headers || {}),
    },
  });
  const bodyText = await response.text();
  let body = null;
  try {
    body = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    body = { parse_error: bodyText.slice(0, 300) };
  }
  return { response, body };
}

function uniqueScriptPaths(html) {
  const matches = html.matchAll(/_next\/static\/[^"'\s<>]+\.js/g);
  return [...new Set([...matches].map((match) => match[0]))];
}

async function checkCheckoutProxy() {
  const email = `live-check-${Date.now()}@artimagehub.com`;
  const { response, body } = await fetchJson(
    `${SITE_URL}/api/payment/dodo-create-checkout`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        feature_key: "restoration",
        landing_page: "/payment-live-check",
        cta_slot: "monitor_checkout_create",
        entry_variant: "payment_live_check",
        checkout_source: "vercel_proxy_monitor",
      }),
    },
    CHECKOUT_TIMEOUT_MS,
  );

  assert.equal(response.status, 200, `checkout status ${response.status}`);
  assert.equal(response.headers.get("x-checkout-proxy"), "vercel", "checkout did not use Vercel proxy");
  assert.ok(body?.checkout_url?.startsWith("https://checkout.dodopayments.com/session/"), "missing Dodo checkout_url");
  assert.equal(String(body?.amount), "4.99", "unexpected checkout amount");

  return {
    status: response.status,
    proxy: response.headers.get("x-checkout-proxy"),
    session_id: body.session_id || null,
    checkout_url_host: new URL(body.checkout_url).host,
  };
}

async function checkKeepalive() {
  const { response, body } = await fetchJson(`${SITE_URL}/api/keepalive`, {}, KEEPALIVE_TIMEOUT_MS);
  assert.equal(response.status, 200, `keepalive status ${response.status}`);
  assert.equal(body?.ok, true, "keepalive ok was not true");
  assert.equal(body?.backend?.status, "healthy", "backend was not healthy");
  return {
    status: response.status,
    backend_status: body.backend.status,
    payment_metrics_backend: body.backend.payment_metrics_backend || null,
  };
}

async function checkLiveBundle() {
  const { response, body: html } = await fetchText(`${SITE_URL}/subscription`, PAGE_TIMEOUT_MS);
  assert.equal(response.status, 200, `subscription status ${response.status}`);
  const scriptPaths = uniqueScriptPaths(html);
  assert.ok(scriptPaths.length > 0, "no Next.js script chunks found");

  let joined = "";
  for (const scriptPath of scriptPaths) {
    const { response: scriptResponse, body } = await fetchText(`${SITE_URL}/${scriptPath}`, PAGE_TIMEOUT_MS);
    if (scriptResponse.ok) {
      joined += `\n${body}`;
    }
  }

  assert.match(joined, /AbortSignal\.timeout\(45e3\)/, "live bundle missing 45s checkout timeout");
  assert.match(joined, /r<=2/, "live bundle missing two-attempt checkout retry");
  assert.match(joined, /\/api\/payment\/dodo-create-checkout/, "live bundle missing same-origin checkout fallback");
  assert.doesNotMatch(joined, /AbortSignal\.timeout\(18e3\)/, "live bundle still contains old 18s timeout");

  return {
    script_chunks_checked: scriptPaths.length,
    has_45s_timeout: true,
    has_retry: true,
    has_same_origin_fallback: true,
  };
}

async function main() {
  const startedAt = Date.now();
  const [checkout, keepalive, bundle] = await Promise.all([
    checkCheckoutProxy(),
    checkKeepalive(),
    checkLiveBundle(),
  ]);

  console.log(JSON.stringify({
    ok: true,
    site_url: SITE_URL,
    elapsed_ms: Date.now() - startedAt,
    checkout,
    keepalive,
    bundle,
  }, null, 2));
}

main().catch((error) => {
  console.error(JSON.stringify({
    ok: false,
    site_url: SITE_URL,
    error: error instanceof Error ? error.message : String(error),
  }, null, 2));
  process.exit(1);
});
