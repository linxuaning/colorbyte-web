import { copyFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
const baseUrl = "https://artimagehub.com";
const indexNowKeyPattern = /^[a-z0-9]{32}\.txt$/;
const preserveTextFiles = new Set(["robots.txt"]);

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

const defaultRestorationImages = [
  {
    loc: "/blog/before-after-examples.webp",
    title: "Old photo restoration before and after examples",
    caption: "Before and after examples of AI old photo restoration results from ArtImageHub.",
  },
];

const beforeAfterImages = [
  {
    loc: "/blog/before-1.jpg",
    title: "Scratched faded child portrait before AI restoration",
    caption: "Old child portrait with heavy scratches, fading, and surface damage before AI photo restoration.",
  },
  {
    loc: "/blog/after-1.webp",
    title: "Restored child portrait after AI restoration",
    caption: "Restored child portrait after ArtImageHub AI photo restoration improved face detail, color, and tone.",
  },
  {
    loc: "/blog/before-2.jpg",
    title: "Yellowed family snapshot before photo restoration",
    caption: "Family snapshot with yellow cast, low contrast, and age-related detail loss before restoration.",
  },
  {
    loc: "/blog/after-2.jpg",
    title: "Restored family snapshot after color and contrast repair",
    caption: "Family snapshot after AI restoration improved contrast, subject separation, and skin tone.",
  },
  {
    loc: "/blog/before-3.jpg",
    title: "Scratched keepsake portrait before AI photo repair",
    caption: "Keepsake portrait with scratches, dull blacks, and weak facial detail before AI repair.",
  },
  {
    loc: "/blog/after-3.jpg",
    title: "Restored keepsake portrait after AI scratch repair",
    caption: "Keepsake portrait after AI scratch repair, enhancement, and background cleanup.",
  },
];

const imageHeavyPaths = new Set([
  "/",
  "/old-photo-restoration/",
  "/best-photo-restoration-software/",
  "/photo-restoration-app-comparison/",
  "/best-photo-colorization-tool/",
  "/best-old-photo-enhancer/",
  "/artimagehub-vs-remini/",
  "/artimagehub-vs-myheritage/",
  "/artimagehub-vs-fotor/",
  "/artimagehub-vs-photomyne/",
  "/artimagehub-vs-picsart/",
  "/artimagehub-vs-vivid-pix/",
  "/artimagehub-vs-yodayo/",
  "/remini-alternative-photo-restoration/",
  "/restore-old-photos-without-photoshop/",
  "/photo-restoration-no-subscription/",
  "/photo-restoration-one-time-payment/",
  "/photo-restoration-cost/",
]);

function imagesForUrl(urlPath) {
  if (imageHeavyPaths.has(urlPath)) return beforeAfterImages;
  if (
    urlPath.includes("photo-restoration") ||
    urlPath.includes("old-photo") ||
    urlPath.includes("restore") ||
    urlPath.includes("photo-color") ||
    urlPath.includes("photo-enhancer") ||
    urlPath.includes("photo-deblurrer") ||
    urlPath.includes("photo-denoiser")
  ) {
    return defaultRestorationImages;
  }
  return [];
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
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...uniqueUrls.map((urlPath) => {
      const images = imagesForUrl(urlPath);
      return [
        "  <url>",
        `    <loc>${escapeXml(`${baseUrl}${urlPath}`)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>monthly</changefreq>",
        `    <priority>${priorityForUrl(urlPath)}</priority>`,
        ...images.flatMap((image) => [
          "    <image:image>",
          `      <image:loc>${escapeXml(`${baseUrl}${image.loc}`)}</image:loc>`,
          `      <image:title>${escapeXml(image.title)}</image:title>`,
          `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
          "    </image:image>",
        ]),
        "  </url>",
      ].join("\n");
    }),
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
    const fileName = path.basename(entry);
    if (
      entry.startsWith("llms") ||
      preserveTextFiles.has(fileName) ||
      indexNowKeyPattern.test(fileName) ||
      !entry.endsWith(".txt")
    ) return;
    try {
      await rm(filePath);
    } catch (err) {
      if (err?.code !== "ENOENT") throw err;
    }
  }),
);
