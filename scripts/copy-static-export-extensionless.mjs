import { copyFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
const baseUrl = "https://artimagehub.com";

async function copyExtensionlessHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      if (!entry.isDirectory()) return;

      const childDir = path.join(dir, entry.name);
      const indexHtml = path.join(childDir, "index.html");

      try {
        const indexStat = await stat(indexHtml);
        if (indexStat.isFile()) {
          const relativeDir = path.relative(outDir, childDir);
          if (relativeDir && !relativeDir.startsWith("_")) {
            await copyFile(indexHtml, path.join(outDir, `${relativeDir}.html`));
          }
        }
      } catch (err) {
        if (err?.code !== "ENOENT") throw err;
      }

      await copyExtensionlessHtml(childDir);
    }),
  );
}

await copyExtensionlessHtml(outDir);

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function priorityForUrl(urlPath) {
  if (urlPath === "/") return "1.0";
  if (
    urlPath.includes("photo-restoration") ||
    urlPath.includes("old-photo") ||
    urlPath.includes("remini") ||
    urlPath.includes("restore")
  ) {
    return "0.9";
  }
  if (urlPath.startsWith("/blog/")) return "0.7";
  return "0.6";
}

async function collectStaticUrls(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const urls = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;

    const childDir = path.join(dir, entry.name);
    const indexHtml = path.join(childDir, "index.html");

    try {
      const indexStat = await stat(indexHtml);
      if (indexStat.isFile()) {
        const relativeDir = path.relative(outDir, childDir);
        if (relativeDir && !relativeDir.startsWith("_") && relativeDir !== "404") {
          urls.push(`/${relativeDir.replaceAll(path.sep, "/")}/`);
        }
      }
    } catch (err) {
      if (err?.code !== "ENOENT") throw err;
    }

    urls.push(...await collectStaticUrls(childDir));
  }

  return urls;
}

async function writeStaticSitemap() {
  const rootIndex = path.join(outDir, "index.html");
  const rootExists = await stat(rootIndex).then((s) => s.isFile()).catch(() => false);
  const pageUrls = await collectStaticUrls(outDir);
  const uniqueUrls = Array.from(new Set([...(rootExists ? ["/"] : []), ...pageUrls])).sort();
  const lastmod = new Date().toISOString();
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...uniqueUrls.map((urlPath) => [
      "  <url>",
      `    <loc>${escapeXml(`${baseUrl}${urlPath}`)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      "    <changefreq>monthly</changefreq>",
      `    <priority>${priorityForUrl(urlPath)}</priority>`,
      "  </url>",
    ].join("\n")),
    "</urlset>",
    "",
  ].join("\n");

  await writeFile(path.join(outDir, "sitemap.xml"), xml, "utf8");
}

await writeStaticSitemap();

const textArtifacts = await readdir(outDir, { recursive: true });
await Promise.all(
  textArtifacts.map(async (entry) => {
    const filePath = path.join(outDir, entry);
    if (entry.startsWith("llms") || !entry.endsWith(".txt")) return;
    try {
      await rm(filePath);
    } catch (err) {
      if (err?.code !== "ENOENT") throw err;
    }
  }),
);
