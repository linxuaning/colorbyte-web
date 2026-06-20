// RSS 2.0 feed generator for the static export (Render, non-Vercel).
//
// IMPORTANT: the live Render service buildCommand is
//   rm -rf src/app/api src/app/sitemap.ts && npm ci && npm run build
//     && node scripts/copy-static-export-extensionless.mjs
// i.e. it runs copy-static-export-extensionless.mjs DIRECTLY and never invokes
// build-static-export.mjs. So this feed must be generated FROM
// copy-static-export-extensionless.mjs (which calls generateRssFeed below), not
// from build-static-export.mjs. render.yaml is decorative drift — do not trust it
// as the build source of truth.
//
// Lists the most-recent EN blog posts that ACTUALLY shipped (a built
// out/blog/<slug>/index.html exists) and are indexable, so the feed stays in sync
// with what's live instead of the full 1700+ content pool. Output: out/feed.xml,
// linked from <head> via <link rel="alternate" type="application/rss+xml">.
// Does NOT touch payment, routing, or any source page.

import { readdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const OUT_DIR = path.resolve("out");                       // same resolution as copy-static-export-extensionless.mjs
const BLOG_CONTENT_DIR = path.resolve("src/content/blog");
const BASE_URL = "https://artimagehub.com";
const FEED_TITLE = "ArtImageHub Journal";
const FEED_DESC =
  "Photo restoration, enhancement, and colorization guides, comparisons, and tutorials from ArtImageHub.";
const MAX_ITEMS = 30;

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Eligible = usable EN post (real title + valid publishedAt), not noIndex, AND
// actually built into out/ (i.e. it's live).
function collectPosts() {
  if (!existsSync(BLOG_CONTENT_DIR)) return [];
  const posts = [];
  for (const file of readdirSync(BLOG_CONTENT_DIR)) {
    if (!file.endsWith(".md")) continue; // skip locale subdirs + keywords/
    const slug = file.slice(0, -3);
    if (!existsSync(path.join(OUT_DIR, "blog", slug, "index.html"))) continue; // not shipped
    let data;
    try {
      ({ data } = matter(readFileSync(path.join(BLOG_CONTENT_DIR, file), "utf8")));
    } catch {
      continue;
    }
    if (data.noIndex === true) continue;
    if (typeof data.title !== "string" || typeof data.publishedAt !== "string") continue;
    const published = new Date(data.publishedAt);
    if (Number.isNaN(published.getTime())) continue;
    const updated = typeof data.updatedAt === "string" ? new Date(data.updatedAt) : null;
    posts.push({
      slug,
      title: data.title,
      description: typeof data.description === "string" ? data.description : "",
      published,
      lastDate: updated && !Number.isNaN(updated.getTime()) ? updated : published,
    });
  }
  posts.sort((a, b) => b.lastDate - a.lastDate);
  return posts.slice(0, MAX_ITEMS);
}

function buildFeed(posts) {
  const now = new Date().toUTCString();
  const items = posts.map((p) => {
    const url = `${BASE_URL}/blog/${p.slug}`;
    return [
      "    <item>",
      `      <title>${escapeXml(p.title)}</title>`,
      `      <link>${escapeXml(url)}</link>`,
      `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
      `      <pubDate>${p.published.toUTCString()}</pubDate>`,
      ...(p.description ? [`      <description>${escapeXml(p.description)}</description>`] : []),
      "    </item>",
    ].join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(FEED_TITLE)}</title>`,
    `    <link>${BASE_URL}/blog</link>`,
    `    <description>${escapeXml(FEED_DESC)}</description>`,
    "    <language>en</language>",
    `    <lastBuildDate>${now}</lastBuildDate>`,
    `    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

// Generate out/feed.xml. Safe to call from copy-static-export-extensionless.mjs
// (out/ already populated) or standalone. Throws only if out/ is missing.
export function generateRssFeed() {
  if (!existsSync(OUT_DIR)) {
    throw new Error(`[rss] OUT_DIR does not exist: ${OUT_DIR} (cwd=${process.cwd()})`);
  }
  const posts = collectPosts();
  writeFileSync(path.join(OUT_DIR, "feed.xml"), buildFeed(posts), "utf8");
  console.log(`[rss] wrote out/feed.xml with ${posts.length} items`);
  return posts.length;
}

// Allow standalone execution: `node scripts/generate-rss.mjs`
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRssFeed();
}
