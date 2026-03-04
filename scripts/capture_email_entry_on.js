const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const logs = [];
  const dynamicEmail = `dev+mailentry-${Date.now()}@example.com`;

  page.on("console", (msg) => {
    logs.push({ type: msg.type(), text: msg.text(), ts: new Date().toISOString() });
  });

  await page.goto("https://artimagehub.vercel.app/subscription", { waitUntil: "networkidle" });
  await page.fill("input[placeholder='you@example.com']", dynamicEmail);
  await page.screenshot({ path: "docs/evidence/payment-email-entry-enabled-online-2026-03-03.png", fullPage: true });

  const sendButton = page.getByRole("button", { name: "Send" }).first();
  await sendButton.click({ timeout: 10000 });
  await page.waitForTimeout(1000);

  const funnelLogs = logs.filter((l) => l.text.includes("payment_funnel") || l.text.includes("payment_email_entry"));
  fs.writeFileSync(
    "docs/evidence/payment-email-entry-enabled-online-log-2026-03-03.json",
    JSON.stringify({ captured_at_utc: new Date().toISOString(), email: dynamicEmail, logs: funnelLogs }, null, 2)
  );

  await browser.close();
})();
