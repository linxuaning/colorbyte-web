import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal — AI Photo Restoration Guides & Stories",
  description:
    "Expert guides on AI photo restoration, vintage photo preservation, and family history. Learn to restore old photos and bring memories back to life.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Journal — AI Photo Restoration Guides & Stories",
    description: "Expert guides on AI photo restoration, vintage photo preservation, and family history.",
    images: [{ url: "/blog/old-photo-guide.webp", width: 1200, height: 630, alt: "AI photo restoration guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal — AI Photo Restoration Guides",
    description: "Expert guides on restoring and preserving old family photos with AI.",
    images: ["/blog/old-photo-guide.webp"],
  },
};

// Category definitions
const CATEGORIES = ["All", "Guides", "Features", "Tips", "Comparison", "Use Cases"];

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* ── Masthead — editorial magazine header ── */}
      <header className="border-b border-[#d4bc91]/60 bg-[#faf8f4]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Top rule */}
          <div className="h-[3px] bg-[#2c2416] w-full mt-0" aria-hidden="true" />

          <div className="py-10 sm:py-14">
            <div className="grid lg:grid-cols-[1fr_auto] items-end gap-6">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
                  <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">ArtImageHub</span>
                </div>
                <h1 className="font-playfair text-[52px] sm:text-[68px] lg:text-[80px] font-900 leading-[0.92] tracking-[-0.03em] text-[#2c2416]">
                  The Journal
                </h1>
                <p className="mt-5 font-lora text-[17px] text-[#6b5344] max-w-xl leading-[1.7] italic">
                  Stories, guides, and expert knowledge on AI photo restoration,
                  preserving family memories, and the art of bringing history back to life.
                </p>
              </div>

              {/* Issue info — editorial detail */}
              <div className="hidden lg:block text-right border-l border-[#d4bc91]/60 pl-10 pb-2">
                <p className="font-playfair text-[11px] uppercase tracking-[0.15em] text-[#d4bc91] mb-1">Volume I</p>
                <p className="font-playfair text-[11px] uppercase tracking-[0.15em] text-[#d4bc91] mb-4">
                  {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
                <p className="font-lora text-[13px] text-[#8B7355]">{posts.length} Articles</p>
              </div>
            </div>

            {/* Category filters — horizontal scroll on mobile */}
            <nav className="mt-8 pt-6 border-t border-[#d4bc91]/40 flex items-center gap-1 overflow-x-auto pb-1" aria-label="Category filters">
              {CATEGORIES.map((cat, i) => (
                <a
                  key={cat}
                  href={i === 0 ? "/blog" : `/blog?category=${cat.toLowerCase()}`}
                  className={`shrink-0 rounded-full px-4 py-1.5 font-lora text-[13px] transition-colors ${
                    i === 0
                      ? "bg-[#2c2416] text-[#faf8f4] font-600"
                      : "text-[#6b5344] hover:text-[#2c2416] hover:bg-[#f3ede3]"
                  }`}
                >
                  {cat}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 sm:py-20">
        {/* ── Featured Post — Full-width editorial hero ── */}
        {featuredPost && (
          <section className="mb-20" aria-label="Featured article">
            {/* Section label */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
              <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Editor&rsquo;s Pick</span>
              <div className="flex-1 h-px bg-[#d4bc91]/40" aria-hidden="true" />
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block"
            >
              {/* Large asymmetric grid */}
              <div className="grid lg:grid-cols-[3fr_2fr] overflow-hidden rounded-2xl border border-[#d4bc91]/40 bg-white shadow-sm hover:shadow-xl transition-shadow duration-400">
                {/* Cover image/gradient — large and striking */}
                <div
                  className={`relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br ${featuredPost.coverColor} flex items-center justify-center overflow-hidden min-h-[320px]`}
                >
                  {/* Texture overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.18),transparent_50%)]" aria-hidden="true" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,0,0,0.12),transparent_45%)]" aria-hidden="true" />
                  {/* Large emoji */}
                  <span className="text-[120px] relative z-10 drop-shadow-xl opacity-70 group-hover:scale-105 transition-transform duration-500 select-none" role="img" aria-label={featuredPost.title}>
                    {featuredPost.coverEmoji || "📸"}
                  </span>
                  {/* Category badge on image */}
                  <div className="absolute top-6 left-6">
                    <span className="rounded-sm bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 font-lora text-[11px] uppercase tracking-[0.1em] text-white font-600">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content — editorial article layout */}
                <div className="flex flex-col justify-between p-9 sm:p-12 border-l border-[#d4bc91]/30">
                  {/* Top */}
                  <div>
                    <div className="flex items-center gap-3 mb-7">
                      <span className="font-lora text-[12px] uppercase tracking-[0.12em] text-[#8B5E3C]">
                        {featuredPost.category}
                      </span>
                      <span className="text-[#d4bc91]" aria-hidden="true">·</span>
                      <span className="font-lora text-[13px] text-[#a8967e]">
                        {featuredPost.readingTime} min read
                      </span>
                    </div>

                    <h2 className="font-playfair text-[28px] sm:text-[34px] font-800 leading-[1.15] tracking-[-0.02em] text-[#2c2416] mb-5 group-hover:text-[#8B5E3C] transition-colors duration-200">
                      {featuredPost.title}
                    </h2>

                    <p className="font-lora text-[15px] text-[#6b5344] leading-[1.75] line-clamp-4">
                      {featuredPost.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-8 pt-6 border-t border-[#d4bc91]/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Author avatar */}
                        <div className="h-10 w-10 rounded-full bg-[#f3ede3] border border-[#d4bc91]/60 flex items-center justify-center font-playfair text-[15px] font-700 text-[#8B5E3C]">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-lora text-[14px] font-600 text-[#2c2416]">
                            {featuredPost.author}
                          </p>
                          <time
                            dateTime={featuredPost.publishedAt}
                            className="font-lora text-[12px] text-[#a8967e]"
                          >
                            {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                      </div>

                      {/* Read link */}
                      <span className="font-lora text-[13px] font-600 text-[#8B5E3C] flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                        Read
                        <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ── Articles Grid — Magazine-style mixed layout ── */}
        {remainingPosts.length > 0 && (
          <section aria-label="All articles">
            {/* Section divider */}
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
              <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">All Articles</span>
              <div className="flex-1 h-px bg-[#d4bc91]/40" aria-hidden="true" />
            </div>

            {/* Magazine grid — varied sizing */}
            <div className="grid gap-0 lg:grid-cols-12 border border-[#d4bc91]/40 rounded-2xl overflow-hidden bg-white">
              {remainingPosts.map((post, idx) => {
                // First article spans wider columns for visual hierarchy
                const isWide = idx === 0 && remainingPosts.length > 1;
                const isLast = idx === remainingPosts.length - 1;
                const hasBorderRight =
                  !isWide &&
                  idx % 3 !== 2 &&
                  idx < remainingPosts.length - 1;

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group block border-[#d4bc91]/30 hover:bg-[#faf8f4] transition-colors duration-200 ${
                      isWide ? "lg:col-span-8 lg:border-b" : "lg:col-span-4"
                    } ${idx > 0 && !isWide ? "border-t border-[#d4bc91]/30 lg:border-t lg:border-l" : ""} ${
                      idx === 1 ? "lg:border-l lg:border-t-0" : ""
                    }`}
                  >
                    <article className="h-full">
                      {/* Cover — taller for wide article */}
                      <div
                        className={`relative bg-gradient-to-br ${post.coverColor} flex items-center justify-center overflow-hidden ${
                          isWide ? "aspect-[16/7]" : "aspect-[16/9]"
                        }`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_50%,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden="true" />
                        <span
                          className={`relative z-10 drop-shadow-lg opacity-75 group-hover:scale-110 transition-transform duration-500 select-none ${
                            isWide ? "text-[80px] sm:text-[100px]" : "text-[52px] sm:text-[64px]"
                          }`}
                          role="img"
                          aria-label={post.title}
                        >
                          {post.coverEmoji || "📸"}
                        </span>
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="rounded-sm bg-white/20 backdrop-blur-sm border border-white/25 px-2.5 py-0.5 font-lora text-[10px] uppercase tracking-[0.1em] text-white font-500">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-6 ${isWide ? "lg:p-8" : ""}`}>
                        {/* Meta row */}
                        <div className="flex items-center gap-2 mb-3">
                          <time
                            dateTime={post.publishedAt}
                            className="font-lora text-[11px] uppercase tracking-[0.08em] text-[#a8967e]"
                          >
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                          <span className="text-[#d4bc91]" aria-hidden="true">·</span>
                          <span className="font-lora text-[11px] text-[#a8967e]">{post.readingTime} min</span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`font-playfair font-700 tracking-[-0.02em] text-[#2c2416] mb-3 group-hover:text-[#8B5E3C] transition-colors duration-200 leading-[1.25] ${
                            isWide ? "text-[22px] sm:text-[26px]" : "text-[18px] sm:text-[20px]"
                          }`}
                        >
                          {post.title}
                        </h3>

                        {/* Description */}
                        <p className="font-lora text-[13px] text-[#8B7355] leading-[1.65] line-clamp-2 mb-5">
                          {post.description}
                        </p>

                        {/* Author row */}
                        <div className="flex items-center gap-2.5">
                          <div className="h-7 w-7 rounded-full bg-[#f3ede3] border border-[#d4bc91]/50 flex items-center justify-center font-playfair text-[11px] font-700 text-[#8B5E3C]" aria-hidden="true">
                            {post.author.charAt(0)}
                          </div>
                          <span className="font-lora text-[13px] text-[#8B7355]">{post.author}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#f3ede3] border border-[#d4bc91]/60 mb-6">
              <svg className="h-9 w-9 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="font-playfair text-[28px] font-700 text-[#2c2416] mb-3">Coming Soon</h2>
            <p className="font-lora text-[16px] text-[#8B7355] max-w-sm mx-auto leading-[1.65]">
              We&rsquo;re crafting our first articles. Check back soon.
            </p>
          </div>
        )}

        {/* ── CTA Banner — dark editorial ── */}
        <section className="mt-20 rounded-2xl bg-[#2c2416] overflow-hidden relative" aria-label="Restore photos call to action">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_110%,rgba(139,94,60,0.40),transparent)]" aria-hidden="true" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4bc91]/20 to-transparent" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[1fr_auto] items-center gap-8 p-10 sm:p-14">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
                <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Ready to restore?</span>
              </div>
              <h2 className="font-playfair text-[32px] sm:text-[42px] font-800 leading-[1.08] tracking-[-0.02em] text-[#faf8f4]">
                Bring your old photos<br />
                <em className="italic text-[#D4A96A]">back to life.</em>
              </h2>
              <p className="mt-4 font-lora text-[15px] text-[#a8967e] max-w-md leading-[1.7]">
                AI-powered restoration in seconds. Face enhancement, super resolution, and colorization — all free to start.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/old-photo-restoration"
                className="inline-flex h-13 items-center rounded-full bg-[#D4A96A] px-8 font-lora text-[15px] font-600 text-[#2c2416] hover:bg-[#c49a5a] active:scale-[0.97] transition-all duration-200 shadow-xl shadow-[#D4A96A]/20 whitespace-nowrap"
              >
                Restore Photos Free
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
