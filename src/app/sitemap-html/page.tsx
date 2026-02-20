import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Site Map — ArtImageHub",
  description: "Complete site map for ArtImageHub — all pages, guides, and tools for AI photo restoration.",
  alternates: { canonical: "/sitemap-html" },
};

export default async function SitemapHtmlPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="font-playfair text-[36px] font-800 text-[#2c2416] mb-10">Site Map</h1>

        <div className="grid sm:grid-cols-3 gap-10">
          {/* Tools */}
          <section>
            <h2 className="font-playfair text-[18px] font-700 text-[#2c2416] mb-4 border-b border-[#d4bc91]/50 pb-2">Tools</h2>
            <ul className="space-y-2 font-lora text-[14px]">
              <li><Link href="/" className="text-[#8B5E3C] hover:underline">Home</Link></li>
              <li><Link href="/old-photo-restoration" className="text-[#8B5E3C] hover:underline">Photo Restoration Tool</Link></li>
            </ul>
          </section>

          {/* Learn */}
          <section>
            <h2 className="font-playfair text-[18px] font-700 text-[#2c2416] mb-4 border-b border-[#d4bc91]/50 pb-2">Learn</h2>
            <ul className="space-y-2 font-lora text-[14px]">
              <li><Link href="/blog" className="text-[#8B5E3C] hover:underline">Journal / Blog</Link></li>
              <li><Link href="/resources" className="text-[#8B5E3C] hover:underline">Resources</Link></li>
            </ul>
          </section>

          {/* Company */}
          <section>
            <h2 className="font-playfair text-[18px] font-700 text-[#2c2416] mb-4 border-b border-[#d4bc91]/50 pb-2">Company</h2>
            <ul className="space-y-2 font-lora text-[14px]">
              <li><Link href="/about" className="text-[#8B5E3C] hover:underline">About</Link></li>
              <li><Link href="/#pricing" className="text-[#8B5E3C] hover:underline">Pricing</Link></li>
              <li><Link href="/privacy" className="text-[#8B5E3C] hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#8B5E3C] hover:underline">Terms of Service</Link></li>
            </ul>
          </section>
        </div>

        {/* Blog posts */}
        <section className="mt-12">
          <h2 className="font-playfair text-[18px] font-700 text-[#2c2416] mb-4 border-b border-[#d4bc91]/50 pb-2">
            Journal — {posts.length} Articles
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-lora text-[14px] text-[#8B5E3C] hover:underline flex items-start gap-2"
                >
                  <span className="text-[#d4bc91] mt-0.5">→</span>
                  {post.title}
                </Link>
                <span className="font-lora text-[12px] text-[#a8967e] ml-6">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 text-center">
          <p className="font-lora text-[13px] text-[#a8967e]">
            XML Sitemap: <a href="/sitemap.xml" className="text-[#8B5E3C] hover:underline">/sitemap.xml</a>
          </p>
        </div>
      </div>
    </div>
  );
}
