import { readFile } from "node:fs/promises";

const maxAgeDays = Number(process.env.SEO_FRESHNESS_MAX_AGE_DAYS ?? 30);
const today = process.env.SEO_FRESHNESS_TODAY
  ? new Date(`${process.env.SEO_FRESHNESS_TODAY}T00:00:00Z`)
  : new Date();

const pages = [
  "src/app/best-photo-restoration-software/page.tsx",
  "src/app/photo-restoration-app-comparison/page.tsx",
  "src/app/best-photo-colorization-tool/page.tsx",
  "src/app/photo-restoration-app/page.tsx",
  "src/app/vs-photoshop-restoration/page.tsx",
  "src/app/old-photo-restoration/page.tsx",
  "src/app/best-old-photo-enhancer/page.tsx",
  "src/app/vs-remini/page.tsx",
  "src/app/artimagehub-vs-myheritage/page.tsx",
];

function ageDays(date) {
  return Math.floor((today.getTime() - date.getTime()) / 86400000);
}

let failed = false;

for (const page of pages) {
  const source = await readFile(page, "utf8");
  const hasVisibleUpdated =
    source.includes("Last updated:") ||
    source.includes("lastUpdatedDisplay") ||
    source.includes("heroDate:");
  const match =
    source.match(/dateModified\s*[:=]\s*["'](\d{4}-\d{2}-\d{2})/) ||
    source.match(/dateModified\s*[:=]\s*(dateModified)/);
  const resolvedDate =
    match?.[1] === "dateModified"
      ? source.match(/const\s+dateModified\s*=\s*["'](\d{4}-\d{2}-\d{2})/)?.[1]
      : match?.[1];
  const date = resolvedDate ? new Date(`${resolvedDate}T00:00:00Z`) : null;
  const stale = !date || ageDays(date) > maxAgeDays;

  if (!hasVisibleUpdated || stale) {
    failed = true;
    console.error(
      `STALE ${page}: visible=${hasVisibleUpdated ? "yes" : "no"} dateModified=${
        resolvedDate ?? "missing"
      }`,
    );
  } else {
    console.log(`OK ${page}: dateModified=${resolvedDate} age=${ageDays(date)}d`);
  }
}

process.exit(failed ? 1 : 0);
