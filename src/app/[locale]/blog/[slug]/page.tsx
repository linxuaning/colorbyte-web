import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllPosts, getRelatedPosts, type BlogLocale } from "@/lib/blog";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

// Hard-404 any (locale, slug) pair not emitted by generateStaticParams.
// Default (true) lets Vercel cache ISR-rendered notFound() pages with HTTP 200 → soft-404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const out: Array<{ locale: string; slug: string }> = [];
  for (const locale of routing.locales) {
    if (locale === routing.defaultLocale) continue; // EN served from /blog/[slug]
    const posts = await getAllPosts(locale);
    for (const p of posts) {
      out.push({ locale, slug: p.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale as BlogLocale);
  if (!post) return { title: "Not Found" };

  const canonical = `https://artimagehub.com/${locale}/blog/${post.slug}`;
  const languages: Record<string, string> = {
    "x-default": `https://artimagehub.com/blog/${post.slug}`,
    en: `https://artimagehub.com/blog/${post.slug}`,
  };
  for (const loc of routing.locales) {
    if (loc === routing.defaultLocale) continue;
    const localePostExists = (await getPostBySlug(slug, loc)) !== null;
    if (localePostExists) {
      languages[loc] = `https://artimagehub.com/${loc}/blog/${post.slug}`;
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function LocaleBlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!(routing.locales as readonly string[]).includes(locale) || locale === routing.defaultLocale) {
    notFound();
  }

  const post = await getPostBySlug(slug, locale as BlogLocale);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug, post.category, 3, post.tags, locale as BlogLocale);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className={`relative overflow-hidden bg-gradient-to-br ${post.coverColor} py-20`}>
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5">
          <div className="text-center">
            {post.coverEmoji ? (
              <div className="text-6xl mb-6" aria-hidden="true">
                {post.coverEmoji}
              </div>
            ) : null}
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight max-w-3xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-white/90 text-sm">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(locale)}</time>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-5 py-14">
        <div
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related */}
        {related.length > 0 ? (
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${locale}/blog/${r.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  {r.image ? (
                    <div className="relative h-32 w-full mb-3 overflow-hidden rounded-lg">
                      <Image src={r.image} alt={r.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                  ) : null}
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{r.category}</span>
                  <h3 className="mt-2 text-base font-semibold text-gray-900 group-hover:text-[#8B5E3C]">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
