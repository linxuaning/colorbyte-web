import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");
const publicDirectory = path.join(process.cwd(), "public");
const fallbackBlogImage = "/blog/before-after-examples.webp";

const SUPPORTED_LOCALES = ["en", "es", "pt-BR", "fr", "de", "ja", "ko"] as const;
export type BlogLocale = (typeof SUPPORTED_LOCALES)[number];
const EMERGENCY_STATIC_EXPORT = process.env.NEXT_OUTPUT_EXPORT === "1";
const EMERGENCY_STATIC_POST_LIMIT = 440;
const EMERGENCY_LOCALE_STATIC_POST_LIMIT = 120;
const EMERGENCY_STATIC_SLUGS_BY_LOCALE: Partial<Record<BlogLocale, Set<string>>> = {
  en: new Set([
  "best-photo-enhancement-apps-2026",
  "best-free-photo-restoration-apps",
  "can-gemini-restore-old-photos",
  "how-to-fix-out-of-focus-old-photos",
  // T152: keep ranked/live-revenue pages emitted under Render static export caps.
  "photo-restoration-software-comparison",
  "how-to-fix-overexposed-photos-ai",
  "can-chatgpt-restore-old-photos",
  "can-google-photos-restore-old-photos",
  "can-midjourney-restore-old-photos",
  "can-microsoft-copilot-restore-old-photos",
  "enhance-low-quality-images",
  "best-photo-restoration-software-2026",
  "fix-sun-damaged-photos",
  "enhance-old-group-photos-guide",
  "photo-restoration-ethics",
  "best-ai-old-photo-restoration-tools-2026",
  "enhance-old-concert-photographs",
  "artimagehub-vs-topaz-gigapixel",
  "can-claude-restore-old-photos",
  "colorization-accuracy-tips",
  "restore-grandfathers-old-photos",
  "ai-image-enhancer",
  "artimagehub-vs-lightroom",
  "photo-restoration-near-me",
  "photo-restoration-near-me-online",
  "restore-tintype-images-complete-guide",
  "fix-torn-photographs-ai-guide",
  "artimagehub-vs-lets-enhance",
  "enhance-old-school-photos",
  "enhance-blurry-vintage-photos",
  "fix-faded-kodachrome-slides",
  "fix-scratched-vintage-prints",
  "artimagehub-vs-adobe-photoshop",
  "artimagehub-vs-waifu2x",
  "enhance-faded-memories",
  "fix-faded-newspaper-clippings",
  "restore-photos-after-house-fire",
  "wedding-photo-restoration-complete-ai-guide",
  "ai-photo-restoration-chatgpt-recommendations-2026",
  "best-photo-quality-tools-for-wix",
  "free-photo-restoration-tools-2026",
  "how-to-print-restored-photos",
  "what-is-the-best-dpi-for-scanning-old-photos",
  "ai-tools-for-vintage-clothing-sellers",
  "best-free-photo-enhancer-no-watermark",
  "digitize-restore-film-home-movies",
  "how-to-enhance-group-photo-faces",
  "how-to-enhance-small-cropped-faces",
  "how-to-restore-photo-with-missing-person",
  "remove-ink-stains-from-old-photos",
  "restore-1960s-counterculture-photos",
  "restore-1970s-instant-photos",
  "restore-old-passport-photos",
  "restore-photos-immigrant-ancestor-homestead",
  "restore-photos-lgbtq-family-history",
  "fix-photos-stuck-together",
  "enhance-old-newspaper-photos",
  "best-ai-photo-restoration-tools-2026-compared",
  "best-photo-scanning-tips",
  "restore-school-photos-class-portraits",
  "photo-upscaling-ai-comparison",
  "artimagehub-vs-myheritage",
  "fix-curled-photograph-edges",
  "photo-preservation-methods",
  "ai-photo-restoration-vs-photoshop",
  "colorize-1950s-family-photos",
  "photo-scanning-best-practices",
  "how-to-fix-red-eye-in-old-flash-photos",
  "how-to-restore-old-photos-free-vs-paid",
  "restore-ambrotype-images",
  "restore-faded-polaroid-prints",
  "restore-photos-gimp-tutorial",
  "best-photo-restoration-apps-ios-android",
  "complete-guide-colorize-old-photos",
  "digitize-restore-old-slides",
  "enhance-old-wedding-pictures",
  "how-to-restore-water-damaged-album",
  "restore-daguerreotype-images",
  "restore-mold-damaged-photo-album",
  "restore-water-damaged-photos",
  "restore-1930s-depression-era-photos",
  "enhance-vintage-yearbook-photos",
  "restore-military-service-photos",
  "fix-blurry-old-photos",
  "ai-vs-manual-restoration",
  "photo-restoration-cost-comparison",
  "restore-sepia-photographs-online",
  "restore-black-white-photos-online",
  "photo-enhancement-vs-restoration",
  "photo-restoration-app-comparison",
  "photo-restoration-software-review-2026",
  "photo-restoration-no-account-required",
  "restore-old-photos-free-online",
  "best-free-old-photo-restoration-tool",
  "fix-old-photos-online",
  "how-to-identify-old-photo-formats",
  "how-to-improve-photo-scan-quality",
  "how-to-restore-old-photos-at-home",
  "ultimate-guide-water-damage-photo-restoration",
  "restore-victorian-photos-complete-guide",
  "restore-historical-photographs",
  "genealogy-photo-restoration-complete-guide",
  "enhance-old-sports-photos",
  "enhance-old-family-portraits",
  "restore-1980s-neon-photos",
  "fix-brittle-photo-paper",
  "enhance-old-baby-photos",
  "fix-fungus-damaged-photos-guide",
  "wedding-photo-restoration",
  "fix-red-eye-in-old-photos",
  "how-to-scan-old-photos-properly",
  "restore-damaged-old-photos",
  "vintage-photo-repair-techniques",
  "fix-color-shift-in-old-photos",
  "old-photo-restoration-guide",
  "restore-antique-family-portraits",
  "restore-army-uniform-photos",
  "fix-color-faded-pictures",
  "restore-1980s-photos-complete-guide",
  "enhance-old-sports-team-photos",
  "restore-ancestor-photographs",
  "fix-brittle-old-photographs-guide",
  "enhance-grainy-old-pictures",
  "photo-digitization-guide",
  "colorize-black-white-photos",
  "enhance-old-id-card-photos",
  "restore-1940s-wartime-photos",
  "fix-water-spots-on-photos",
  "fix-creased-family-photos",
  "enhance-old-baby-pictures",
  "enhance-old-portrait-photos",
  "restore-water-damaged-photographs-at-home",
  "fix-mold-damage-pictures",
  "enhance-old-military-photos",
  "restore-old-photos-free-online-2026",
  "restore-old-military-service-photos",
  "fix-blurry-photo-ai",
  "how-to-restore-old-photos-for-free",
  "artimagehub-vs-snapseed",
  "artimagehub-vs-adobe-enhance",
  "restore-autochrome-images",
  "restore-ambrotype-photos",
  
  "restore-faded-photos-free-online",
  "how-to-restore-old-photos-free",
  "how-to-restore-blurry-old-photos",
  "how-to-restore-old-photos-with-faded-ink-captions",
  "best-scanner-for-old-photos",
  "how-to-restore-old-photos-with-scratches",
  "best-ai-image-upscaler-2026",
  "how-to-fix-sun-damaged-old-photos",
  "best-ai-tools-for-restoring-faded-color-photos",
  "best-ai-tools-for-damaged-family-portraits",
  "best-scanner-settings-for-old-photos",
  "how-to-restore-old-photos-for-genealogy",
  "how-to-restore-old-photos-with-foxing",
  "how-to-restore-old-photos-from-china",
  "how-to-restore-old-photos-stuck-in-albums",
  "how-to-restore-old-photos-from-japan",
  "how-to-restore-old-photos-from-poland",
  "how-to-restore-old-photos-after-a-move",
  "how-to-restore-old-photos-from-nigeria",
  "how-to-restore-old-photos-with-color-cast",
  "how-to-fix-motion-blur-old-photos",
  "how-to-restore-old-photos-of-pets",
  "best-ai-tools-for-real-estate-photography",
  "fix-heat-damaged-old-photos",
  "how-to-restore-old-photos-on-android",
  "how-to-restore-old-photos-on-mac",
  "free-vs-paid-ai-photo-restoration-2026",
  "how-to-restore-old-photos-on-windows",
  "how-to-restore-photos-from-water-damaged-albums",
  "fix-smoke-damaged-old-photos",
  "fix-real-estate-photos-online",
  "unblur-image-online",
  "best-ai-photo-colorizer-2026",
  "how-to-fix-dark-underexposed-old-photos",
  "how-to-fix-yellow-tinted-old-photos",
  "best-ai-photo-tools-for-small-business",
  "how-to-restore-old-photos-for-memorial-services",
  "ai-photo-upscaler-online",
  "best-black-and-white-photo-colorizer",
  "best-ai-photo-restoration-tools-2027-forward-looking",
  "restore-faded-sepia-tone-old-photos",
  "best-ai-photo-tools-for-genealogy-facebook-groups",
  "ai-headshot-enhancer-online",
  "artimagehub-review-2026",
  "how-to-restore-old-photos-for-ancestry-websites",
  "how-to-colorize-black-and-white-photo-online",
  "best-ai-photo-restoration-service-2026",
  "how-to-restore-water-damaged-photos",
  "how-to-restore-faded-color-photos",
  "how-to-restore-overexposed-old-photos",
  "ai-photo-restoration-cost-comparison",
  "best-photo-upscaler-for-printing",
  "restore-photos-photoshop-alternative",
  "restore-1920s-flapper-photos",
  "can-stable-diffusion-restore-old-photos",
  "photo-restoration-cost-guide",
  "can-dall-e-restore-old-photos",
  "best-ai-tools-for-etsy-vintage-shop",
  "can-photoshop-restore-old-photos",
  "how-to-restore-severely-damaged-photos",
  "best-photo-tools-for-food-bloggers",
  "restore-old-photos-from-phone",
  "fix-pixelated-photos-online",
  "fix-chemically-damaged-prints",
  "preserving-old-photos",
  "fix-torn-photographs",
  "artimagehub-vs-topaz-denoise-ai",
  "best-photo-enhancer-ai-2026",
  "restore-damaged-polaroids",
]),
  de: new Set(["fix-photos-stuck-together"]),
  es: new Set([
    "photo-restoration-software-comparison",
    "artimagehub-vs-topaz-gigapixel",
    "artimagehub-vs-waifu2x",
    "enhance-old-newspaper-photos",
    "fix-photos-stuck-together",
    "fix-torn-photographs-ai-guide",
    "restore-grandmas-old-photos-mothers-day",
    "restore-photos-genealogy-dna-testing",
    "best-ai-photo-restoration-tools-2026-compared",
    "colorize-civil-war-photos",
    "how-to-restore-faded-color-photos-1970s",
  ]),
  ja: new Set(["fix-photos-stuck-together"]),
  ko: new Set(["fix-photos-stuck-together"]),
  "pt-BR": new Set([
    "artimagehub-vs-topaz-gigapixel",
    "artimagehub-vs-waifu2x",
    "restore-photos-for-documentary-film",
    "fix-cracked-emulsion-photos",
    "restore-grandmas-old-photos-mothers-day",
  ]),
};

function localeBlogDir(locale: BlogLocale | string): string {
  if (!locale || locale === "en") return postsDirectory;
  return path.join(postsDirectory, locale);
}

/**
 * Lightweight check for whether the EN parent post for a slug has `noIndex: true`
 * in its frontmatter. Used by the locale routes to inherit indexability from the
 * EN parent so a hreflang cluster never has the EN page noindex while its locale
 * variants stay index — Google flags that as a bad consistency signal. Reads
 * frontmatter only (no remark) so it's cheap to call from generateMetadata at
 * build time. Returns false when the EN file doesn't exist or YAML can't parse.
 */
export function getEnPostNoIndex(slug: string): boolean {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return false;
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.noIndex === true;
  } catch {
    return false;
  }
}

/**
 * Returns the list of non-EN locales that have a translated variant for the given slug.
 *
 * Used by both the EN root post page (to emit hreflang `languages` alternates) and the
 * locale post page (to emit reciprocal hreflang). Single source of truth — keep callers
 * pointed at this helper instead of re-implementing the disk walk.
 *
 * Returns [] if no translations exist (e.g. before Phase 1a content lands).
 */
export function getAvailableLocalesForSlug(slug: string): string[] {
  const available: string[] = [];
  for (const loc of SUPPORTED_LOCALES) {
    if (loc === "en") continue;
    const candidate = path.join(localeBlogDir(loc), `${slug}.md`);
    if (fs.existsSync(candidate)) {
      available.push(loc);
    }
  }
  return available;
}

const categoryFallbackImages: Record<string, string> = {
  "AI Technology": "/blog/ai-restoration-technology.webp",
  "Best Practices": "/blog/preserving-photos.webp",
  Comparison: "/blog/artimagehub-vs-remini.webp",
  Comparisons: "/blog/artimagehub-vs-remini.webp",
  "Color Restoration": "/blog/before-after-examples.webp",
  "Era-Specific Restoration": "/blog/old-photo-guide.webp",
  "Family History": "/blog/preserving-photos.webp",
  Features: "/blog/ai-restoration-technology.webp",
  Genealogy: "/blog/preserving-photos.webp",
  Guides: "/blog/old-photo-guide.webp",
  "Historical Photography": "/blog/old-photo-guide.webp",
  "Historical Restoration": "/blog/old-photo-guide.webp",
  "Photo Damage Repair": "/blog/old-photo-guide.webp",
  "Photo Enhancement": "/blog/before-after-examples.webp",
  "Photo Preservation": "/blog/preserving-photos.webp",
  "Photo Restoration": "/blog/old-photo-guide.webp",
  Showcase: "/blog/before-after-examples.webp",
  Technology: "/blog/ai-restoration-technology.webp",
  "Tips & Guides": "/blog/old-photo-guide.webp",
  "Use Cases": "/blog/before-after-examples.webp",
};

// Optional schema-augmenting frontmatter fields. Markdown-embedded JSON-LD
// blocks get stripped by the renderer, so these declarative fields drive
// page-level <script type="application/ld+json"> injection instead. Used by
// "best …" / "X vs Y" / FAQ-rich posts so Google sees FAQPage / ItemList /
// Review schemas without authors hand-writing JSON-LD in the body.
export interface BlogFaqItem {
  q: string;
  a: string;
}
export interface BlogItemListEntry {
  name: string;
  url?: string;
  description?: string;
}
export interface BlogAggregateRating {
  rating: number;
  count: number;
}
export interface BlogHowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  category: string;
  tags: string[];
  image: string;
  coverColor: string;
  coverEmoji?: string;
  content: string;
  readingTime: number;
  headings: { id: string; text: string; level: number }[];
  noIndex?: boolean;
  faq?: BlogFaqItem[];
  itemList?: BlogItemListEntry[];
  aggregateRating?: BlogAggregateRating;
  reviewedItem?: string;
  howTo?: BlogHowToStep[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  image: string;
  coverColor: string;
  coverEmoji?: string;
  readingTime: number;
  noIndex?: boolean;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function extractHeadings(
  htmlContent: string
): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    headings.push({ id, text, level });
  }

  return headings;
}

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h([2-3])>/gi,
    (_match, level, attrs, text, closeLevel) => {
      const plainText = text.replace(/<[^>]*>/g, "").trim();
      const id = plainText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      return `<h${level}${attrs} id="${id}">${text}</h${closeLevel}>`;
    }
  );
}

const defaultCoverColors: Record<string, string> = {
  Technology: "from-blue-600 via-indigo-700 to-purple-800",
  Guides: "from-emerald-600 via-teal-700 to-cyan-800",
  Comparisons: "from-orange-500 via-amber-600 to-yellow-700",
  "Tips & Guides": "from-rose-500 via-pink-600 to-fuchsia-700",
  Showcase: "from-violet-600 via-purple-700 to-indigo-800",
};

function assetExists(assetPath: string): boolean {
  return fs.existsSync(path.join(publicDirectory, assetPath.replace(/^\//, "")));
}

function resolvePostImage(image: string | undefined, category: string): string {
  const candidates: string[] = [];

  if (image?.trim()) {
    const trimmedImage = image.trim();
    const parsed = path.posix.parse(trimmedImage);
    candidates.push(trimmedImage);

    for (const ext of [".webp", ".jpg", ".jpeg", ".png"]) {
      if (ext !== parsed.ext) {
        candidates.push(path.posix.join(parsed.dir, `${parsed.name}${ext}`));
      }
    }
  }

  candidates.push(categoryFallbackImages[category] || fallbackBlogImage, fallbackBlogImage);

  for (const candidate of candidates) {
    if (assetExists(candidate)) {
      return candidate;
    }
  }

  return fallbackBlogImage;
}

// Some autoship-translated locale posts ship with broken frontmatter
// (e.g. missing the closing `---` so the body bleeds into the YAML and
// title/publishedAt/category never populate). Treat any such post as
// data-broken and exclude it — otherwise sitemap.xml prerender hits
// `new Date(undefined).toISOString()` (Invalid Date) and getRelatedPosts
// hits `undefined.toLowerCase()` from the locale sibling iteration.
function isUsablePost(data: { title?: unknown; publishedAt?: unknown }): boolean {
  if (typeof data.title !== "string" || data.title.trim() === "") return false;
  if (typeof data.publishedAt !== "string") return false;
  const ts = new Date(data.publishedAt);
  return !Number.isNaN(ts.getTime());
}

export async function getAllPosts(locale: BlogLocale | string = "en"): Promise<BlogPostMeta[]> {
  const dir = localeBlogDir(locale);
  if (!fs.existsSync(dir)) {
    return [];
  }

  const fileNames = fs.readdirSync(dir);
  const posts: BlogPostMeta[] = [];
  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    if (!isUsablePost(data)) continue;

    posts.push({
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      authorRole: data.authorRole,
      category: data.category,
      tags: data.tags || [],
      image: resolvePostImage(data.image, data.category || ""),
      coverColor:
        data.coverColor ||
        defaultCoverColors[data.category] ||
        "from-gray-700 to-gray-900",
      coverEmoji: data.coverEmoji,
      readingTime: calculateReadingTime(content),
      noIndex: data.noIndex === true,
    });
  }

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  if (EMERGENCY_STATIC_EXPORT) {
    const normalizedLocale = (locale || "en") as BlogLocale;
    const pinnedSlugs = EMERGENCY_STATIC_SLUGS_BY_LOCALE[normalizedLocale];
    const pinnedPosts = pinnedSlugs
      ? sortedPosts.filter((post) => pinnedSlugs.has(post.slug))
      : [];
    const remainingPosts = pinnedSlugs
      ? sortedPosts.filter((post) => !pinnedSlugs.has(post.slug))
      : sortedPosts;
    // fail-loud: a pinned slug with no matching post = silent 404 in static export.
    const foundSlugs = new Set(pinnedPosts.map((post) => post.slug));
    const missingPins = pinnedSlugs
      ? [...pinnedSlugs].filter((slug) => !foundSlugs.has(slug))
      : [];
    if (missingPins.length > 0) {
      console.warn(
        `[blog] emergency ${normalizedLocale} static pin(s) not found, will 404: ${missingPins.join(", ")}`
      );
    }
    const limit = normalizedLocale === "en"
      ? EMERGENCY_STATIC_POST_LIMIT
      : EMERGENCY_LOCALE_STATIC_POST_LIMIT;
    return [...pinnedPosts, ...remainingPosts].slice(0, limit);
  }

  return sortedPosts;
}

export async function getPostBySlug(slug: string, locale: BlogLocale | string = "en"): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(localeBlogDir(locale), `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html, { allowDangerousHtml: true }).process(content);
    let contentHtml = processedContent.toString();

    const headings = extractHeadings(contentHtml);
    contentHtml = addHeadingIds(contentHtml);

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      authorRole: data.authorRole,
      authorBio: data.authorBio,
      category: data.category,
      tags: data.tags || [],
      image: resolvePostImage(data.image, data.category || ""),
      coverColor:
        data.coverColor ||
        defaultCoverColors[data.category] ||
        "from-gray-700 to-gray-900",
      coverEmoji: data.coverEmoji,
      content: contentHtml,
      readingTime: calculateReadingTime(content),
      headings,
      noIndex: data.noIndex === true,
      // Normalize frontmatter to internal schema: accept both `q`/`a` and
      // `question`/`answer` for FAQ items (most existing posts use the latter
      // — silently produced empty FAQPage JSON-LD prior to 2026-05-04 fix).
      faq: Array.isArray(data.faq)
        ? data.faq
            .map((item: { q?: string; a?: string; question?: string; answer?: string }) => ({
              q: item.q ?? item.question ?? "",
              a: item.a ?? item.answer ?? "",
            }))
            .filter((item) => item.q && item.a)
        : undefined,
      itemList: Array.isArray(data.itemList)
        ? data.itemList.map(
            (item: { name?: string; title?: string; url?: string; description?: string }) => ({
              name: item.name ?? item.title ?? "",
              ...(item.url ? { url: item.url } : {}),
              ...(item.description ? { description: item.description } : {}),
            }),
          )
        : undefined,
      // Accept both `rating`/`count` and `ratingValue`/`ratingCount` for AggregateRating
      aggregateRating: (() => {
        const ar = data.aggregateRating;
        if (!ar) return undefined;
        const rating =
          typeof ar.rating === "number"
            ? ar.rating
            : typeof ar.ratingValue === "number"
              ? ar.ratingValue
              : undefined;
        const count =
          typeof ar.count === "number"
            ? ar.count
            : typeof ar.ratingCount === "number"
              ? ar.ratingCount
              : undefined;
        return rating !== undefined && count !== undefined ? { rating, count } : undefined;
      })(),
      reviewedItem:
        typeof data.reviewedItem === "string"
          ? data.reviewedItem
          : data.reviewedItem && typeof data.reviewedItem.name === "string"
            ? data.reviewedItem.name
            : undefined,
      howTo: Array.isArray(data.howTo)
        ? data.howTo
            .map((step: { name?: string; title?: string; text?: string; description?: string; url?: string }) => ({
              name: step.name ?? step.title ?? "",
              text: step.text ?? step.description ?? "",
              ...(step.url ? { url: step.url } : {}),
            }))
            .filter((step) => step.name && step.text)
        : undefined,
    };
  } catch {
    return null;
  }
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3,
  tags: string[] = [],
  locale: BlogLocale | string = "en"
): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts(locale);
  // Defensive: even with the isUsablePost filter, callers may pass an
  // undefined category/tag from a partially-translated post that still
  // satisfies title+publishedAt. Coerce so a single malformed sibling
  // can't crash the prerender of the whole locale.
  const normCategory = (category ?? "").toLowerCase().trim();
  const normTags = new Set(
    (tags ?? [])
      .filter((t): t is string => typeof t === "string")
      .map((t) => t.toLowerCase().trim()),
  );

  return posts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const pCategory = typeof p.category === "string" ? p.category.toLowerCase().trim() : "";
      const catMatch = pCategory && pCategory === normCategory ? 2 : 0;
      const pTags = Array.isArray(p.tags) ? p.tags : [];
      const tagOverlap = pTags.filter(
        (t): t is string => typeof t === "string" && normTags.has(t.toLowerCase().trim()),
      ).length;
      return { post: p, score: catMatch + tagOverlap };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime())
    .slice(0, limit)
    .map((x) => x.post);
}
