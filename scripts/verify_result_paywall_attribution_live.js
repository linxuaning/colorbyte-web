const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const OUTPUT_DIR = path.join(process.cwd(), "docs", "evidence");
const IMAGE_PATH = path.join(process.cwd(), "public", "blog", "before-1.jpg");

const CASES = [
  {
    name: "old_photo_restoration",
    url: "https://www.artimagehub.com/old-photo-restoration",
    doneText: /Photo Restored/i,
    ctaName: /Download HD Original/i,
    expected: {
      landing_page: "/old-photo-restoration",
      cta_slot: "restore_done_cta",
      entry_variant: "restore_done",
      checkout_source: "download_intercept",
    },
  },
  {
    name: "photo_enhancer",
    url: "https://www.artimagehub.com/photo-enhancer",
    doneText: /Photo Enhanced/i,
    ctaName: /Unlock Original-Quality Download/i,
    expected: {
      landing_page: "/photo-enhancer",
      cta_slot: "result_unlock",
      entry_variant: "result_paywall",
      checkout_source: "download_intercept",
    },
  },
  {
    name: "photo_colorizer",
    url: "https://www.artimagehub.com/photo-colorizer",
    doneText: /Photo Colorized/i,
    ctaName: /Unlock Original-Quality Download/i,
    expected: {
      landing_page: "/photo-colorizer",
      cta_slot: "result_unlock",
      entry_variant: "result_paywall",
      checkout_source: "download_intercept",
    },
  },
];

function parseAnalyticsRequest(urlString) {
  try {
    const url = new URL(urlString);
    const params = url.searchParams;
    return {
      event: params.get("en"),
      landing_page: params.get("ep.landing_page"),
      cta_slot: params.get("ep.cta_slot"),
      entry_variant: params.get("ep.entry_variant"),
      checkout_source: params.get("ep.checkout_source"),
      event_label: params.get("ep.event_label"),
      task_id: params.get("ep.task_id"),
      tool: params.get("ep.tool"),
      detail: params.get("ep.detail"),
      raw_url: urlString,
    };
  } catch (error) {
    return {
      event: null,
      parse_error: error instanceof Error ? error.message : String(error),
      raw_url: urlString,
    };
  }
}

function parseTrackedCall(call) {
  if (!Array.isArray(call) || call[0] !== "event") {
    return null;
  }

  const payload = call[2] && typeof call[2] === "object" ? call[2] : {};
  return {
    event: call[1] || null,
    landing_page: payload.landing_page || null,
    cta_slot: payload.cta_slot || null,
    entry_variant: payload.entry_variant || null,
    checkout_source: payload.checkout_source || null,
    event_label: payload.event_label || null,
    task_id: payload.task_id || null,
    tool: payload.tool || null,
    detail: payload.detail || null,
    raw_call: call,
  };
}

function pickFirstEvent(events, eventName) {
  return events.find((event) => event.event === eventName) || null;
}

function tupleMatches(event, expected) {
  if (!event) return false;
  return (
    event.landing_page === expected.landing_page &&
    event.cta_slot === expected.cta_slot &&
    event.entry_variant === expected.entry_variant &&
    event.checkout_source === expected.checkout_source
  );
}

async function runCase(browser, config) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1400 } });
  await context.addInitScript(() => {
    const storageKey = "__ah_tracked_gtag_calls";
    const install = () => {
      if (typeof window.gtag !== "function" || window.gtag.__ahWrapped) {
        return;
      }
      const original = window.gtag;
      const wrapped = function (...args) {
        try {
          const existing = JSON.parse(sessionStorage.getItem(storageKey) || "[]");
          existing.push(args);
          sessionStorage.setItem(storageKey, JSON.stringify(existing));
        } catch {}
        return original.apply(this, args);
      };
      wrapped.__ahWrapped = true;
      window.gtag = wrapped;
    };

    install();
    const timer = window.setInterval(install, 50);
    window.setTimeout(() => window.clearInterval(timer), 30000);
    window.addEventListener("DOMContentLoaded", install);
    window.addEventListener("load", install);
  });
  const page = await context.newPage();
  const analyticsEvents = [];
  const consoleTail = [];
  const dynamicEmail = `founder+result-paywall-${config.name}-${Date.now()}@example.com`;

  await context.route("**/api/payment/paypal-create-order", async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ detail: "forced_result_paywall_probe_500" }),
    });
  });

  page.on("request", (request) => {
    if (request.url().includes("google-analytics.com/g/collect")) {
      analyticsEvents.push(parseAnalyticsRequest(request.url()));
    }
  });

  page.on("console", (msg) => {
    consoleTail.push({
      type: msg.type(),
      text: msg.text(),
      ts: new Date().toISOString(),
    });
  });

  const response = await page.goto(config.url, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  if (!response || !response.ok()) {
    throw new Error(`Failed to load ${config.url}: ${response ? response.status() : "no response"}`);
  }

  await page.waitForLoadState("networkidle", { timeout: 60000 }).catch(() => {});
  const fileInput = page.locator("input[type='file']").first();
  const inputCount = await page.locator("input[type='file']").count();
  if (inputCount === 0) {
    const bodyExcerpt = (await page.locator("body").innerText().catch(() => "")).slice(0, 1000);
    await context.close();
    return {
      captured_at_utc: new Date().toISOString(),
      name: config.name,
      page_url: config.url,
      checkout_url: page.url(),
      expected: config.expected,
      error: "file_input_missing",
      input_count: inputCount,
      body_excerpt: bodyExcerpt,
      analytics_events: analyticsEvents,
      console_tail: consoleTail.slice(-12),
    };
  }

  await fileInput.waitFor({ state: "attached", timeout: 120000 });
  await fileInput.setInputFiles(IMAGE_PATH, { timeout: 120000 });
  await page.getByText(config.doneText).waitFor({ timeout: 180000 });
  const resultCta = page.getByRole("link", { name: config.ctaName }).first();
  await resultCta.waitFor({ timeout: 30000 });

  await Promise.all([
    page.waitForURL(/\/subscription(\?|$)/, { timeout: 30000 }),
    resultCta.click({ force: true }),
  ]);

  await page.locator("#checkout-email").fill(dynamicEmail);
  await page.waitForFunction(
    () => document.querySelectorAll("#paypal-button-container iframe").length > 0,
    { timeout: 60000 }
  );
  await page.waitForTimeout(3000);

  const iframeCount = await page.locator("#paypal-button-container iframe").count();
  let clickedFrameIndex = null;
  for (let i = 0; i < iframeCount; i += 1) {
    try {
      await page
        .frameLocator("#paypal-button-container iframe")
        .nth(i)
        .locator(".paypal-button")
        .first()
        .click({ force: true, timeout: 5000 });
      clickedFrameIndex = i;
      await page.waitForTimeout(2500);

      const trackedCalls = await page.evaluate(() => {
        try {
          return JSON.parse(sessionStorage.getItem("__ah_tracked_gtag_calls") || "[]");
        } catch {
          return [];
        }
      });
      const trackedEvents = trackedCalls.map(parseTrackedCall).filter(Boolean);
      if (pickFirstEvent(trackedEvents, "payment_started")) {
        break;
      }
    } catch {}
  }

  await page.waitForTimeout(2500);

  const trackedCalls = await page.evaluate(() => {
    try {
      return JSON.parse(sessionStorage.getItem("__ah_tracked_gtag_calls") || "[]");
    } catch {
      return [];
    }
  });
  const trackedEvents = trackedCalls.map(parseTrackedCall).filter(Boolean);

  const processingComplete =
    pickFirstEvent(trackedEvents, "processing_complete") ||
    pickFirstEvent(analyticsEvents, "processing_complete");
  const ctaClick =
    pickFirstEvent(trackedEvents, "cta_click") ||
    pickFirstEvent(analyticsEvents, "cta_click");
  const paymentStarted =
    pickFirstEvent(trackedEvents, "payment_started") ||
    pickFirstEvent(analyticsEvents, "payment_started");
  const paymentCreateOrderFail =
    pickFirstEvent(trackedEvents, "payment_create_order_fail") ||
    pickFirstEvent(analyticsEvents, "payment_create_order_fail");

  const result = {
    captured_at_utc: new Date().toISOString(),
    name: config.name,
    page_url: config.url,
    checkout_url: page.url(),
    iframe_count: iframeCount,
    clicked_frame_index: clickedFrameIndex,
    expected: config.expected,
    processing_complete: processingComplete,
    cta_click: ctaClick,
    payment_started: paymentStarted,
    payment_create_order_fail: paymentCreateOrderFail,
    checks: {
      processing_complete_page_matches:
        !!processingComplete &&
        processingComplete.landing_page === config.expected.landing_page,
      cta_click_tuple_matches: tupleMatches(ctaClick, config.expected),
      payment_started_tuple_matches: tupleMatches(paymentStarted, config.expected),
      click_to_payment_started_same_tuple:
        !!ctaClick &&
        !!paymentStarted &&
        ctaClick.landing_page === paymentStarted.landing_page &&
        ctaClick.cta_slot === paymentStarted.cta_slot &&
        ctaClick.entry_variant === paymentStarted.entry_variant &&
        ctaClick.checkout_source === paymentStarted.checkout_source,
    },
    tracked_events: trackedEvents.filter((event) =>
      ["processing_complete", "cta_click", "payment_started", "payment_create_order_fail"].includes(
        event.event
      )
    ),
    analytics_events: analyticsEvents.filter((event) =>
      ["processing_complete", "cta_click", "payment_started", "payment_create_order_fail"].includes(
        event.event
      )
    ),
    console_tail: consoleTail.slice(-12),
  };

  await context.close();
  return result;
}

(async () => {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results = [];

  try {
    for (const testCase of CASES) {
      console.error(`[verify_result_paywall_attribution_live] starting ${testCase.name}`);
      try {
        results.push(await runCase(browser, testCase));
      } catch (error) {
        results.push({
          captured_at_utc: new Date().toISOString(),
          name: testCase.name,
          page_url: testCase.url,
          expected: testCase.expected,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
  } finally {
    await browser.close();
  }

  const outputPath = path.join(
    OUTPUT_DIR,
    "result-paywall-attribution-live-2026-03-25.json"
  );
  fs.writeFileSync(outputPath, JSON.stringify({ captured_at_utc: new Date().toISOString(), results }, null, 2));
  console.log(JSON.stringify({ output_path: outputPath, results }, null, 2));
})();
