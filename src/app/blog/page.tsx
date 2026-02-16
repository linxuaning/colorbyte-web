import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - AI Photo Restoration Tips & Guides",
  description:
    "Learn about AI photo restoration, vintage photo preservation, and family history with expert guides and tips from ArtImageHub.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            ArtImageHub Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Guides, Stories & Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Expert knowledge on AI photo restoration, preserving family
            memories, and bringing old photos back to life.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                {/* Cover Image */}
                <div
                  className={`relative aspect-[4/3] md:aspect-auto bg-gradient-to-br ${featuredPost.coverColor} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
                  <span className="text-7xl sm:text-8xl relative z-10 drop-shadow-lg opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {featuredPost.coverEmoji || "📸"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/10">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {featuredPost.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {featuredPost.author}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(featuredPost.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                      Read article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Posts Grid */}
        {remainingPosts.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
              All Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300"
                >
                  {/* Cover */}
                  <div
                    className={`relative aspect-[2/1] bg-gradient-to-br ${post.coverColor} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
                    <span className="text-5xl sm:text-6xl relative z-10 drop-shadow-lg opacity-80 group-hover:scale-110 transition-transform duration-500">
                      {post.coverEmoji || "📸"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">·</span>
                      <time
                        dateTime={post.publishedAt}
                        className="text-xs text-gray-400"
                      >
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-600">
                          {post.author}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <section className="mt-20 rounded-2xl bg-gray-50 border border-gray-200 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Ready to Restore Your Photos?
          </h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto leading-relaxed">
            Try ArtImageHub&apos;s AI-powered photo restoration. Bring faded,
            damaged family photos back to life in seconds.
          </p>
          <Link
            href="/old-photo-restoration"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Restore Photos Free
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
