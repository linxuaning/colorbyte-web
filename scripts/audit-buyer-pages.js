#!/usr/bin/env node

const DEFAULT_BASE_URL = "https://artimagehub.com";
const BASE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_BASE_URL).replace(/\/$/, "");

const BUYER_PAGES = [
  {
    path: "/old-photo-restoration",
    intent: "core_restore",
    requiredTerms: ["old photo", "restore"],
  },
  {
    path: "/photo-restoration-no-subscription",
    intent: "no_subscription",
    requiredTerms: ["no subscription", "one-time"],
  },
  {
    path: "/photo-restoration-one-time-payment",
    intent: "one_time_payment",
    requiredTerms: ["one-time", "payment"],
  },
  {
    path: "/photo-restoration-cost",
    intent: "pricing",
    requiredTerms: ["cost", "$4.99"],
  },
  {
    path: "/pt-BR/old-photo-restoration",
    intent: "br_core_restore",
    requiredTerms: ["restaurar", "foto"],
    forbiddenTerms: ["grátis", "gratuito", "sem cadastro"],
  },
  {
    path: "/pt-BR/preco-restauracao-fotos-antigas",
    intent: "br_pricing",
    requiredTerms: ["preço", "pagamento"],
    forbiddenTerms: ["grátis", "gratuito", "sem cadastro"],
  },
  {
    path: "/pt-BR/restaurar-fotos-antigas-sem-assinatura",
    intent: "br_no_subscription",
    requiredTerms: ["sem assinatura", "pagamento único"],
    forbiddenTerms: ["grátis", "gratuito", "sem cadastro"],
  },
];

function compact(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function extract(html, pattern) {
  return compact(html.match(pattern)?.[1] || "");
}

function hasTerm(html, term) {
  return html.toLocaleLowerCase().includes(term.toLocaleLowerCase());
}

async function fetchText(url) {
  const startedAt = Date.now();
  const response = await fetch(url, {
    headers: { "user-agent": "ArtImageHub buyer-page-audit/1.0" },
  });
  const text = await response.text();
  return {
    status: response.status,
    ok: response.ok,
    ms: Date.now() - startedAt,
    text,
  };
}

async function main() {
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;
  const sitemap = await fetchText(sitemapUrl).catch((error) => ({
    status: 0,
    ok: false,
    ms: 0,
    text: "",
    error,
  }));

  const rows = [];
  let failures = 0;

  for (const page of BUYER_PAGES) {
    const url = `${BASE_URL}${page.path}`;
    const result = await fetchText(url).catch((error) => ({
      status: 0,
      ok: false,
      ms: 0,
      text: "",
      error,
    }));
    const html = result.text || "";
    const title = extract(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = extract(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
    const h1 = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, "");
    const missingTerms = (page.requiredTerms || []).filter((term) => !hasTerm(html, term));
    const forbiddenHits = (page.forbiddenTerms || []).filter((term) => hasTerm(html, term));
    const inSitemap = sitemap.text.includes(`${DEFAULT_BASE_URL}${page.path}`);
    const issues = [];

    if (!result.ok) issues.push(`http_${result.status}`);
    if (!title) issues.push("missing_title");
    if (!description) issues.push("missing_description");
    if (!canonical) issues.push("missing_canonical");
    if (!h1) issues.push("missing_h1");
    if (!inSitemap) issues.push("missing_sitemap");
    if (missingTerms.length) issues.push(`missing_terms:${missingTerms.join("|")}`);
    if (forbiddenHits.length) issues.push(`forbidden_terms:${forbiddenHits.join("|")}`);

    if (issues.length) failures += 1;
    rows.push({
      path: page.path,
      intent: page.intent,
      status: result.status,
      ms: result.ms,
      inSitemap,
      title: title.slice(0, 90),
      h1: h1.slice(0, 90),
      issues: issues.join(",") || "ok",
    });
  }

  console.log(`base_url\t${BASE_URL}`);
  console.log(`sitemap_status\t${sitemap.status}`);
  console.log("path\tintent\tstatus\tms\tin_sitemap\ttitle\th1\tissues");
  for (const row of rows) {
    console.log([
      row.path,
      row.intent,
      row.status,
      row.ms,
      row.inSitemap ? "yes" : "no",
      row.title,
      row.h1,
      row.issues,
    ].join("\t"));
  }

  if (failures > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
