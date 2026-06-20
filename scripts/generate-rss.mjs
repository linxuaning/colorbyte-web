// Post-build RSS 2.0 feed generator for the static export (Render, non-Vercel).
//
// Runs after `next build` + copy-static-export-extensionless.mjs, so out/ already
// exists. Lists the most-recent EN blog posts that ACTUALLY shipped (a built
// out/blog/<slug>/index.html exists) and are indexable — this keeps the feed in
// sync with what's live instead of the full 1700+ content pool, many of which are
// not pinned into the static cap.
//
// Output: out/feed.xml  (linked from <head> via <link rel="alternate"
// type="application/rss+xml">). A freshness/discovery signal for AI engines and
// readers; does NOT touch payment, routing, or any source page.
//
// OUT_DIR/BLOG dir are resolved with path.resolve(...) — the SAME way
// copy-static-export-extensionless.mjs resolves its publish dir — so the feed
// lands in the exact directory Render publishes (./out). Emits a verbose
// input/output diagnostic block (cwd, abs paths, existsSync, counts) so a build
// log captures exactly what happened in the Render container.
//
// Usage: node scripts/generate-rss.mjs   (invoked by build-static-export.mjs)

import { readdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const OUT_DIR = path.resolve("out");                       // identical to copy-static-export-extensionless.mjs
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

// A post is feed-eligible only if it is a usable EN post (real title + valid
// publishedAt), not noIndex, AND was actually built into out/ (i.e. it's live).
// Returns {posts, mdCount, builtCount} so the diagnostic can show where the
// funnel narrows.
function collectPosts() {
  if (!existsSync(BLOG_CONTENT_DIR)) return { posts: [], mdCount: 0, builtCount: 0 };
  let mdCount = 0;
  let builtCount = 0;
  const posts = [];
  for (const file of readdirSync(BLOG_CONTENT_DIR)) {
    if (!file.endsWith(".md")) continue; // skip locale subdirs + keywords/
    mdCount += 1;
    const slug = file.slice(0, -3);
    const builtPage = path.join(OUT_DIR, "blog", slug, "index.html");
    if (!existsSync(builtPage)) continue; // not shipped → keep it out of the feed
    builtCount += 1;

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
  return { posts: posts.slice(0, MAX_ITEMS), mdCount, builtCount };
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

// --- run + diagnostics ---
const cwd = process.cwd();
const outExists = existsSync(OUT_DIR);
const { posts, mdCount, builtCount } = outExists
  ? collectPosts()
  : { posts: [], mdCount: 0, builtCount: 0 };

const diag = {
  ranAt: new Date().toISOString(),
  cwd,
  scriptUrl: import.meta.url,
  blogDir: BLOG_CONTENT_DIR,
  blogDirExists: existsSync(BLOG_CONTENT_DIR),
  mdCount,
  builtCount,
  feedItems: posts.length,
  outDir: OUT_DIR,
  outDirExists: outExists,
};
console.log("[rss] diag " + JSON.stringify(diag));

if (!outExists) {
  // Cannot write anywhere useful — but make the failure LOUD so it can't pass as
  // a silent success (this is the only path that produces a 404 feed).
  console.error(`[rss] FATAL: OUT_DIR does not exist: ${OUT_DIR} (cwd=${cwd})`);
  process.exit(1);
}

const feed = buildFeed(posts);
writeFileSync(path.join(OUT_DIR, "feed.xml"), feed, "utf8");
// Belt-and-suspenders diagnostic artifact: curl-able even when build logs aren't retained.
writeFileSync(path.join(OUT_DIR, "feed-debug.json"), JSON.stringify(diag, null, 2), "utf8");

// Read-back verification: prove the file is really on disk in the publish dir.
const wrote = existsSync(path.join(OUT_DIR, "feed.xml"));
console.log(`[rss] wrote out/feed.xml (${posts.length} items) readback=${wrote}`);
if (!wrote) {
  console.error("[rss] FATAL: feed.xml not present after write");
  process.exit(1);
}
