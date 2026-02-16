import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

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

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category);

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
    },
    publisher: {
      "@type": "Organization",
      name: "ArtImageHub",
      url: "https://artimagehub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://artimagehub.com/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen">
        {/* ─── Hero Cover ─── */}
        <header
          className={`relative bg-gradient-to-br ${post.coverColor} overflow-hidden`}
        >
          {/* Decorative layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

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
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
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

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 sm:p-10 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to Restore Your Old Photos?
                </h3>
                <p className="text-blue-100 mb-6 max-w-lg mx-auto leading-relaxed">
                  Try ArtImageHub&apos;s AI-powered photo restoration. Bring
                  faded, damaged family photos back to life in seconds.
                </p>
                <Link
                  href="/old-photo-restoration"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Restore Photos Free
                  <span aria-hidden="true">→</span>
                </Link>
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
                    <div
                      className={`aspect-[2.5/1] bg-gradient-to-br ${rp.coverColor} flex items-center justify-center`}
                    >
                      <span className="text-4xl opacity-70 group-hover:scale-110 transition-transform">
                        {rp.coverEmoji || "📸"}
                      </span>
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
