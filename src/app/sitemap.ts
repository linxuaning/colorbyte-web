import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://artimagehub.com";

// Locales that have a translated /[locale]/{tool} variant. EN ships at root.
// Note: zh-CN added 2026-05-01 for Baidu/Chinese amplification (azilaye paid via baidu validated channel).
// Translations may lag locale config; canonical strategy ensures duplicate-content protection.
const TOOL_LOCALE_PREFIXES = ["es", "pt-BR", "fr", "de", "ja", "ko", "zh-CN"] as const;

// Build the languages map for a tool path so Next 15 emits
// <xhtml:link rel="alternate" hreflang="..." /> siblings under each <url>.
function toolLanguages(toolPath: string): Record<string, string> {
  const en = `${BASE_URL}/${toolPath}`;
  const languages: Record<string, string> = {
    "x-default": en,
    en,
  };
  for (const loc of TOOL_LOCALE_PREFIXES) {
    languages[loc] = `${BASE_URL}/${loc}/${toolPath}`;
  }
  return languages;
}

// EN tool entry (e.g. /photo-colorizer) with reciprocal hreflang alternates.
function toolEntry(toolPath: string) {
  return {
    url: `${BASE_URL}/${toolPath}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
    alternates: { languages: toolLanguages(toolPath) },
  };
}

// Locale tool entry (e.g. /es/photo-colorizer). Mirrors the same alternates
// so Google sees reciprocal hreflang from any cluster member.
function localeToolEntry(toolPath: string, locale: string) {
  return {
    url: `${BASE_URL}/${locale}/${toolPath}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: { languages: toolLanguages(toolPath) },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BASE_URL;

  const posts = await getAllPosts();

  // Assign higher priority to newer posts for freshness signals
  const now = Date.now();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;

  // Track EN-side noIndex so locale variants inherit indexability from their
  // parent. Otherwise a hreflang cluster ends up with EN=noindex but locale=index
  // — Google flags that inconsistency in its docs.
  const enNoIndexSlugs = new Set(posts.filter((p) => p.noIndex).map((p) => p.slug));

  const blogPosts = posts
    .filter((post) => !post.noIndex)
    .map((post) => {
      const publishedMs = new Date(post.publishedAt).getTime();
      const isRecent = now - publishedMs < thirtyDays;
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: isRecent ? ("weekly" as const) : ("monthly" as const),
        priority: isRecent ? 0.8 : 0.7,
      };
    });

  // Locale blog posts — only include if translations exist AND the EN parent
  // is itself indexable (locale follows EN noIndex).
  const localeBlogPosts: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    if (locale === routing.defaultLocale) continue;
    const localePosts = await getAllPosts(locale);
    for (const post of localePosts) {
      if (post.noIndex || enNoIndexSlugs.has(post.slug)) continue;
      const publishedMs = new Date(post.publishedAt).getTime();
      const isRecent = now - publishedMs < thirtyDays;
      localeBlogPosts.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: isRecent ? ("weekly" as const) : ("monthly" as const),
        priority: isRecent ? 0.75 : 0.65,
      });
    }
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    // Tool pages with reciprocal hreflang alternates (3 EN + 18 locale = 21 cluster)
    toolEntry("old-photo-restoration"),
    ...TOOL_LOCALE_PREFIXES.map((loc) => localeToolEntry("old-photo-restoration", loc)),
    toolEntry("photo-colorizer"),
    ...TOOL_LOCALE_PREFIXES.map((loc) => localeToolEntry("photo-colorizer", loc)),
    toolEntry("photo-enhancer"),
    ...TOOL_LOCALE_PREFIXES.map((loc) => localeToolEntry("photo-enhancer", loc)),
    toolEntry("photo-denoiser"),
    // High-value landing pages (138K/month search volume)
    {
      url: `${baseUrl}/how-to-restore-old-photos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/unblur-photo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/photo-restoration-app`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-photo-restoration-software`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vs-remini`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vs-photoshop-restoration`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-photo-upscaler`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/colorize-photos-free`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/enhance-old-photos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/restore-old-family-photos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/remove-scratches-from-photos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fix-water-damaged-photos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    // AI Tools cluster (Phase 1 launch 2026-05-04). EN-only at launch — locale
    // variants (/{locale}/ai-tools/object-remover) deferred until translation
    // batch ships, per foreman 5-4 GO ("avoid empty content if 6 locale routes
    // open before strings translated"). Adding alternates here without locale
    // pages would create false-claim hreflang.
    {
      url: `${baseUrl}/ai-tools/object-remover`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    // T-F: previously-missing landing routes (already-built pages, not in sitemap until now)
    ...[
      { path: "ai-photo-fixer", priority: 0.8 },
      { path: "ai-photo-restoration", priority: 0.8 },
      { path: "damaged-photo-repair", priority: 0.8 },
      { path: "fix-blurry-photos", priority: 0.8 },
      { path: "free-photo-restoration", priority: 0.8 },
      { path: "old-photo-colorization", priority: 0.8 },
      { path: "photo-restoration-near-me", priority: 0.8 },
      { path: "photo-restoration-service", priority: 0.8 },
      { path: "picture-restoration", priority: 0.8 },
      { path: "restore-damaged-photos", priority: 0.8 },
      { path: "restore-faded-photos", priority: 0.8 },
      { path: "restore-old-photos-free", priority: 0.8 },
      { path: "restore-photos-online", priority: 0.8 },
      { path: "vintage-photo-restoration", priority: 0.8 },
      { path: "subscription", priority: 0.7 },
    ].map((p) => ({
      url: `${baseUrl}/${p.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-02-19"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-02-16"),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-02-16"),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/sitemap-html`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.3,
    },
    ...blogPosts,
    ...localeBlogPosts,
  ];
}
