import { readFile } from "node:fs/promises";

const sitemapPath = process.argv[2] ?? "out/sitemap.xml";
const xml = await readFile(sitemapPath, "utf8");

const requiredSnippets = [
  'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
  "<image:loc>https://artimagehub.com/blog/before-1.jpg</image:loc>",
  "<image:loc>https://artimagehub.com/blog/after-1.webp</image:loc>",
  "<image:title>Faded 1947 wedding portrait before AI restoration</image:title>",
  "<image:caption>Restored wedding portrait after ArtImageHub AI photo restoration recovered face detail and tone.</image:caption>",
];

const requiredPages = [
  "https://artimagehub.com/",
  "https://artimagehub.com/old-photo-restoration/",
  "https://artimagehub.com/best-photo-restoration-software/",
  "https://artimagehub.com/photo-restoration-app-comparison/",
];

let failed = false;

for (const snippet of requiredSnippets) {
  if (!xml.includes(snippet)) {
    failed = true;
    console.error(`MISSING snippet: ${snippet}`);
  }
}

for (const page of requiredPages) {
  const start = xml.indexOf(`<loc>${page}</loc>`);
  const end = start === -1 ? -1 : xml.indexOf("</url>", start);
  const block = start === -1 || end === -1 ? "" : xml.slice(start, end);
  const count = (block.match(/<image:image>/g) ?? []).length;
  if (count < 1) {
    failed = true;
    console.error(`MISSING image entries for ${page}`);
  } else {
    console.log(`OK ${page} image_count=${count}`);
  }
}

process.exit(failed ? 1 : 0);
