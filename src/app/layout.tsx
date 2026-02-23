import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Link from "next/link";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Root-level structured data for Google Knowledge Panel + Sitelinks
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ArtImageHub",
  url: "https://www.artimagehub.com",
  description: "AI-powered photo restoration, enhancement, and colorization. Restore old photos in 30 seconds — free.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.artimagehub.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ArtImageHub",
  url: "https://www.artimagehub.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.artimagehub.com/favicon.ico",
    width: 32,
    height: 32,
  },
  description: "AI-powered photo restoration platform. Restore old, damaged, and faded photos in seconds.",
  foundingDate: "2025",
  knowsAbout: ["AI Photo Restoration", "Photo Enhancement", "Photo Colorization", "Family History Preservation"],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@artimagehub.com",
    availableLanguage: "English",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artimagehub.com"),
  title: {
    default: "ArtImageHub — AI Photo Restoration, Enhancement & Colorization",
    template: "%s | ArtImageHub",
  },
  description:
    "Restore old photos, enhance image quality, and colorize black & white pictures with AI. Free online tool — no signup required.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "ArtImageHub",
    title: "ArtImageHub — AI Photo Restoration",
    description:
      "Restore old photos, enhance image quality, and colorize black & white pictures with AI.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="98cqS97bUFFlYj8cBj00nRpliOpGGgjNoC1gGNmSpoo" />
      </head>
      <body
        className={`${playfair.variable} ${lora.variable} font-lora antialiased bg-[#faf8f4] text-[#2c2416]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#faf8f4]/90 backdrop-blur-xl border-b border-[#d4bc91]/40">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group" aria-label="ArtImageHub home">
          {/* Custom logo mark */}
          <div className="relative flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" aria-hidden="true">
              <rect x="2" y="2" width="28" height="28" rx="6" fill="#8B5E3C"/>
              <rect x="6" y="6" width="20" height="20" rx="3" fill="#faf8f4" fillOpacity="0.15"/>
              <path d="M10 22 L14 16 L17 20 L20 14 L24 22Z" fill="#faf8f4" fillOpacity="0.9"/>
              <circle cx="11" cy="13" r="2" fill="#D4A96A"/>
            </svg>
          </div>
          <span className="font-playfair text-[18px] font-700 tracking-[-0.01em] text-[#2c2416] group-hover:text-[#8B5E3C] transition-colors duration-200">
            ArtImageHub
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-lora text-[#6b5344]" aria-label="Main navigation">
          <a href="/old-photo-restoration" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Restore
          </a>
          <a href="/blog" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Journal
          </a>
          <a href="/#pricing" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Pricing
          </a>
          <a href="/about" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            About
          </a>
          <a href="/resources" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Resources
          </a>
          <a href="/subscription" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Account
          </a>
        </nav>

        {/* CTA */}
        <a
          href="/old-photo-restoration"
          className="inline-flex h-9 items-center rounded-full bg-[#8B5E3C] px-5 text-[13px] font-semibold text-[#faf8f4] hover:bg-[#7a5234] active:scale-[0.97] transition-all duration-200 shadow-sm shadow-[#8B5E3C]/20"
        >
          Restore Free
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d4bc91]/50 bg-[#2c2416]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        {/* Top row */}
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
                <rect x="2" y="2" width="28" height="28" rx="6" fill="#8B5E3C"/>
                <rect x="6" y="6" width="20" height="20" rx="3" fill="#faf8f4" fillOpacity="0.15"/>
                <path d="M10 22 L14 16 L17 20 L20 14 L24 22Z" fill="#faf8f4" fillOpacity="0.9"/>
                <circle cx="11" cy="13" r="2" fill="#D4A96A"/>
              </svg>
              <span className="font-playfair text-[17px] font-600 text-[#faf8f4]">ArtImageHub</span>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#a8967e]">
              AI-powered photo restoration that brings your most precious memories back to life.
            </p>
            <p className="mt-4 text-[13px] text-[#6b5344] italic font-lora">
              &ldquo;Every photograph is a certificate of presence.&rdquo;
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-playfair text-[14px] font-600 text-[#d4bc91] uppercase tracking-[0.08em] mb-4">Product</h3>
            <nav className="flex flex-col gap-3 text-[14px]" aria-label="Product links">
              <a href="/old-photo-restoration" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Photo Restoration</a>
              <a href="/#pricing" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Pricing</a>
              <a href="/subscription" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">My Account</a>
            </nav>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-playfair text-[14px] font-600 text-[#d4bc91] uppercase tracking-[0.08em] mb-4">Learn</h3>
            <nav className="flex flex-col gap-3 text-[14px]" aria-label="Learn links">
              <a href="/blog" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Journal</a>
              <a href="/blog" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Restoration Guides</a>
              <a href="/blog" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Family History Tips</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-[14px] font-600 text-[#d4bc91] uppercase tracking-[0.08em] mb-4">Stay in Touch</h3>
            <p className="text-[13px] text-[#a8967e] mb-4 leading-[1.65]">
              Preservation tips and restoration stories, in your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                className="flex-1 rounded-full bg-[#3d3020] border border-[#5a4530] px-4 py-2 text-[13px] text-[#d4bc91] placeholder-[#6b5344] focus:outline-none focus:border-[#8B5E3C] transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-[#8B5E3C] px-4 py-2 text-[13px] font-semibold text-[#faf8f4] hover:bg-[#7a5234] transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 border-t border-[#3d3020] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#6b5344]">
            &copy; {new Date().getFullYear()} ArtImageHub. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-[12px] text-[#6b5344]" aria-label="Legal links">
            <a href="/about" className="hover:text-[#a8967e] transition-colors">About</a>
            <a href="/privacy" className="hover:text-[#a8967e] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#a8967e] transition-colors">Terms of Service</a>
            <a href="/sitemap-html" className="hover:text-[#a8967e] transition-colors">Site Map</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
