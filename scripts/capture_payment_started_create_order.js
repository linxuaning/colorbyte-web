const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const logs = [];
  const requests = [];
  const dynamicEmail = `dev+paypalflow-${Date.now()}@example.com`;

  page.on("console", (msg) => {
    logs.push({ type: msg.type(), text: msg.text(), ts: new Date().toISOString() });
  });
  page.on("request", (req) => {
    if (req.url().includes("paypal-create-order")) {
      requests.push({ method: req.method(), url: req.url(), ts: new Date().toISOString() });
    }
  });
  page.on("dialog", async (dialog) => {
    await dialog.accept(dynamicEmail);
  });

  await page.goto("https://artimagehub.vercel.app/subscription", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(20000);
  await page.waitForFunction(() => document.querySelectorAll("#paypal-button-container iframe").length > 0, { timeout: 45000 });
  await page.screenshot({ path: "docs/evidence/payment-started-create-order-online-before-click-2026-03-03.png", fullPage: true });

  await page.locator("#paypal-button-container iframe").first().click({ timeout: 20000, force: true });
  await page.waitForTimeout(5000);

  const funnelLogs = logs.filter((l) =>
    l.text.includes("payment_started") ||
    l.text.includes("payment_create_order_success") ||
    l.text.includes("payment_create_order_fail")
  );

  fs.writeFileSync(
    "docs/evidence/payment-started-create-order-online-log-2026-03-03.json",
    JSON.stringify({ captured_at_utc: new Date().toISOString(), checkout_email: dynamicEmail, logs: funnelLogs, requests }, null, 2)
  );

  await page.screenshot({ path: "docs/evidence/payment-started-create-order-online-after-click-2026-03-03.png", fullPage: true });
  await browser.close();
})();
