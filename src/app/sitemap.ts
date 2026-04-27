import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { routing } from "@/i18n/routing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://artimagehub.com";

  const posts = await getAllPosts();

  // Assign higher priority to newer posts for freshness signals
  const now = Date.now();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;

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

  // Locale blog posts — only include if translations exist
  const localeBlogPosts: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    if (locale === routing.defaultLocale) continue;
    const localePosts = await getAllPosts(locale);
    for (const post of localePosts) {
      if (post.noIndex) continue;
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
    {
      url: `${baseUrl}/old-photo-restoration`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Locale pages — /old-photo-restoration
    ...["es", "pt-BR", "fr", "de", "ja", "ko"].map((locale) => ({
      url: `${baseUrl}/${locale}/old-photo-restoration`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/photo-colorizer`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Locale pages — /photo-colorizer
    ...["es", "pt-BR", "fr", "de", "ja", "ko"].map((locale) => ({
      url: `${baseUrl}/${locale}/photo-colorizer`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/photo-enhancer`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Locale pages — /photo-enhancer
    ...["es", "pt-BR", "fr", "de", "ja", "ko"].map((locale) => ({
      url: `${baseUrl}/${locale}/photo-enhancer`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
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
