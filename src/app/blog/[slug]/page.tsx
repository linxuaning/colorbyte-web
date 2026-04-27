import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getAvailableLocalesForSlug,
} from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

const comparisonCtaBySlug = {
  "artimagehub-vs-remini": {
    href: "/vs-remini?entry_variant=blog_compare_cta",
    label: "Compare with Remini",
    description: "Use the fastest buyer-intent page before you restore.",
  },
  "photo-restoration-app-comparison": {
    href: "/photo-restoration-app?entry_variant=blog_compare_cta",
    label: "Compare restoration apps",
    description: "Review the app-first shortlist, then come back to restore.",
  },
  "best-free-photo-restoration-apps": {
    href: "/photo-restoration-app?entry_variant=blog_compare_cta",
    label: "Compare restoration apps",
    description: "See the strongest app options before you start restoring.",
  },
  "photo-restoration-software-comparison": {
    href: "/best-photo-restoration-software?entry_variant=blog_compare_cta",
    label: "Compare restoration software",
    description: "Use the buyer guide first if the visitor is still deciding.",
  },
  "photo-restoration-software-review-2026": {
    href: "/best-photo-restoration-software?entry_variant=blog_compare_cta",
    label: "Compare restoration software",
    description: "See the ranked shortlist before you jump into the tool.",
  },
  "photo-restoration-cost-comparison": {
    href: "/best-photo-restoration-software?entry_variant=blog_compare_cta",
    label: "Compare restoration software",
    description: "Compare workflow fit, not just sticker price.",
  },
  "photo-restoration-cost": {
    href: "/vs-photoshop-restoration?entry_variant=blog_compare_cta",
    label: "Compare AI vs Photoshop",
    description: "Check the cost and workflow tradeoffs before you restore.",
  },
  "how-ai-photo-restoration-works": {
    href: "/best-photo-restoration-software?entry_variant=blog_compare_cta",
    label: "Compare restoration software",
    description: "Go from understanding the tech to choosing the right tool.",
  },
} as const;

const checkoutCtaBySlug = {
  "photo-restoration-app-comparison": {
    href: "/subscription?landing_page=%2Fphoto-restoration-app&cta_slot=blog_pay_first&entry_variant=blog_app_comparison&checkout_source=blog_direct",
    label: "Unlock one-time access",
    description: "If this visitor is already comparing apps, send them straight into checkout and keep the restore flow as the preview step.",
  },
  "best-free-photo-restoration-apps": {
    href: "/subscription?landing_page=%2Fphoto-restoration-app&cta_slot=blog_pay_first&entry_variant=blog_app_comparison&checkout_source=blog_direct",
    label: "Unlock one-time access",
    description: "Use a direct checkout CTA here because the intent is already app evaluation, not casual browsing.",
  },
  "photo-restoration-software-comparison": {
    href: "/subscription?landing_page=%2Fbest-photo-restoration-software&cta_slot=blog_pay_first&entry_variant=blog_buyer_guide&checkout_source=blog_direct",
    label: "Unlock one-time access",
    description: "This software-comparison intent is close to purchase, so the main CTA should be checkout, not another generic tool hop.",
  },
  "photo-restoration-software-review-2026": {
    href: "/subscription?landing_page=%2Fbest-photo-restoration-software&cta_slot=blog_pay_first&entry_variant=blog_buyer_guide&checkout_source=blog_direct",
    label: "Unlock one-time access",
    description: "This review intent is already commercial, so let the user go straight from content to checkout.",
  },
  "photo-restoration-cost-comparison": {
    href: "/subscription?landing_page=%2Fbest-photo-restoration-software&cta_slot=blog_pay_first&entry_variant=blog_cost_compare&checkout_source=blog_direct",
    label: "Unlock one-time access",
    description: "Cost-comparison readers are already evaluating price and value, so the shortest next step is direct checkout.",
  },
} as const;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  // Hreflang alternates: x-default + en at root, plus any locale that has a translated variant.
  // As Phase 1a translations land in src/content/blog/<locale>/, this list grows automatically
  // (recomputed at build time). Helper from lib/blog.ts also used by the [locale] route for parity.
  const availableLocales = getAvailableLocalesForSlug(slug);
  const languagesMap: Record<string, string> = {
    "x-default": `/blog/${slug}`,
    en: `/blog/${slug}`,
  };
  for (const loc of availableLocales) {
    languagesMap[loc] = `/${loc}/blog/${slug}`;
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: languagesMap,
    },
    robots: post.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category, 3, post.tags);
  const comparisonCta = comparisonCtaBySlug[slug as keyof typeof comparisonCtaBySlug] || null;
  const checkoutCta = checkoutCtaBySlug[slug as keyof typeof checkoutCtaBySlug] || null;
  const restoreCtaHref =
    checkoutCta
      ? "/old-photo-restoration?cta_slot=blog_preview_restore&entry_variant=blog_template"
      : "/old-photo-restoration?cta_slot=blog_primary_restore&entry_variant=blog_template";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      description: post.authorBio,
    },
    publisher: {
      "@type": "Organization",
      name: "ArtImageHub",
      url: "https://artimagehub.com",
      logo: {
        "@type": "ImageObject",
        url: "https://artimagehub.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://artimagehub.com/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    image: post.image
      ? {
          "@type": "ImageObject",
          url: `https://artimagehub.com${post.image}`,
          width: 1200,
          height: 630,
        }
      : undefined,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://artimagehub.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: "https://artimagehub.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://artimagehub.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article className="min-h-screen">
        {/* ─── Hero Cover ─── */}
        <header className="relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${post.coverColor} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors mb-8"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            {/* Category + Reading Time */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
                {post.category}
              </span>
              <span className="text-white/60 text-sm">
                {post.readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight max-w-3xl">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
              {post.description}
            </p>

            {/* Author + Date */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg font-bold text-white ring-2 ring-white/30">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  {post.authorRole && <span>{post.authorRole}</span>}
                  {post.authorRole && <span>·</span>}
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.updatedAt && (
                    <>
                      <span>·</span>
                      <span>
                        Updated{" "}
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ─── Content Area ─── */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="min-w-0">
              {/* Article Body */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?category=${encodeURIComponent(tag.toLowerCase())}`}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              {post.authorBio && (
                <div className="mt-10 rounded-xl bg-gray-50 border border-gray-200 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        About the Author
                      </p>
                      <p className="font-bold text-gray-900 text-lg">
                        {post.author}
                      </p>
                      {post.authorRole && (
                        <p className="text-sm text-gray-500 mb-3">
                          {post.authorRole}
                        </p>
                      )}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {post.authorBio}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── Share Section ─── */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-4">Share this article</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://artimagehub.com/blog/${slug}`)}&via=artimagehub`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Share on X
                  </a>
                  <a
                    href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://artimagehub.com/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                    Share on Reddit
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://artimagehub.com/blog/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Share on Facebook
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 sm:p-10 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to Restore Your Old Photos?
                </h3>
                <p className="text-blue-100 mb-6 max-w-lg mx-auto leading-relaxed">
                  {checkoutCta
                    ? "If you're already comparing cost, software, or app options, go straight to checkout and keep the restore flow as the preview step."
                    : "Try ArtImageHub&apos;s AI-powered photo restoration. Bring faded, damaged family photos back to life in seconds."}
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {checkoutCta && (
                    <Link
                      href={checkoutCta.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition-colors hover:bg-blue-50"
                    >
                      {checkoutCta.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  {comparisonCta && (
                    <Link
                      href={comparisonCta.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      {comparisonCta.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  <Link
                    href={restoreCtaHref}
                    className={`inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold transition-colors ${
                      checkoutCta
                        ? "border border-white/30 bg-white/10 text-white hover:bg-white/20"
                        : "bg-white text-blue-700 shadow-lg hover:bg-blue-50"
                    }`}
                  >
                    {checkoutCta ? "Preview the restore workflow" : "Restore Photos Free"}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                {(checkoutCta || comparisonCta) && (
                  <p className="mt-4 text-sm text-blue-100/90">
                    {checkoutCta?.description || comparisonCta?.description}
                  </p>
                )}
              </div>
            </div>

            {/* ─── Sidebar: Table of Contents ─── */}
            {post.headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-20">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                    On this page
                  </p>
                  <nav className="space-y-1">
                    {post.headings
                      .filter((h) => h.level === 2)
                      .slice(0, 12)
                      .map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className="block text-sm text-gray-500 hover:text-gray-900 transition-colors py-1 leading-snug border-l-2 border-transparent hover:border-gray-400 pl-3 -ml-px"
                        >
                          {heading.text.length > 50
                            ? heading.text.slice(0, 50) + "..."
                            : heading.text}
                        </a>
                      ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* ─── Related Posts ─── */}
        {relatedPosts.length > 0 && (
          <section className="border-t bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="relative aspect-[2.5/1] overflow-hidden bg-[#efe8dc]">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${rp.coverColor} opacity-30 mix-blend-multiply`} aria-hidden="true" />
                      <div className="absolute inset-0 bg-black/12" aria-hidden="true" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-400 mb-2">
                        {rp.readingTime} min read
                      </p>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
