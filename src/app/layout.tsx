import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Link from "next/link";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyCTA from "@/components/StickyCTA";
import RouteChromeGuard from "@/components/RouteChromeGuard";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
  url: "https://artimagehub.com",
  description:
    "AI-powered photo restoration, enhancement, and colorization. One-time $4.99 payment unlocks upload, AI processing, and HD download. Results in 30–90 seconds.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://artimagehub.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ArtImageHub",
  url: "https://artimagehub.com",
  logo: {
    "@type": "ImageObject",
    url: "https://artimagehub.com/favicon.ico",
    width: 32,
    height: 32,
  },
  description: "AI-powered photo restoration platform. Restore old, damaged, and faded photos in seconds.",
  foundingDate: "2025",
  knowsAbout: ["AI Photo Restoration", "Photo Enhancement", "Photo Colorization", "Family History Preservation"],
  sameAs: [
    "https://www.toolpilot.ai/products/artimagehub",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@artimagehub.com",
    availableLanguage: "English",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://artimagehub.com"),
  title: {
    default: "ArtImageHub — AI Photo Restoration, Enhancement & Colorization",
    template: "%s | ArtImageHub",
  },
  description:
    "Restore old photos, enhance image quality, and colorize black and white pictures with ArtImageHub. One-time $4.99 payment. Results in 30–90 seconds. No subscription.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "ArtImageHub",
    title: "ArtImageHub — AI Photo Restoration",
    description:
      "Restore old photos, enhance image quality, and colorize black and white pictures with ArtImageHub. One-time $4.99 payment. Results in 30–90 seconds.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Build/deploy version markers for production verification.
  // Vercel auto-injects VERCEL_GIT_COMMIT_SHA at build time; falls back to "dev" for local.
  // Use this to verify commits actually shipped: curl artimagehub.com | grep build-version
  const buildSha = (process.env.VERCEL_GIT_COMMIT_SHA || "dev").slice(0, 7);
  const buildTime = process.env.VERCEL_GIT_COMMIT_REF
    ? new Date().toISOString().split("T")[0]
    : "dev";

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="98cqS97bUFFlYj8cBj00nRpliOpGGgjNoC1gGNmSpoo" />
        <meta name="build-version" content={buildSha} />
        <meta name="build-date" content={buildTime} />
        {/* Preconnect to the API origin so the subscription-check / upload
            handshakes start their DNS + TLS before the JS that triggers them
            loads. Cuts LCP on the tool pages by ~300-500ms. */}
        <link rel="preconnect" href="https://colorbyte-api.onrender.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://colorbyte-api.onrender.com" />
      </head>
      <body
        className={`${playfair.variable} ${lora.variable} font-lora antialiased bg-[#faf8f4] text-[#2c2416]`}
      >
        <RouteChromeGuard />
        {/* WebMCP — expose site tools to AI agents via browser modelContext API */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof navigator==='undefined'||!navigator.modelContext)return;navigator.modelContext.provideContext({tools:[{name:'restore_photo',description:'Restore old, damaged, and faded photographs using AI. Results in 30-90 seconds.',inputSchema:{type:'object',properties:{action:{type:'string',const:'restore'}},required:['action']},execute:async function(){window.location.href='/old-photo-restoration';return{success:true};}},{name:'colorize_photo',description:'Colorize black-and-white photographs using AI with historically accurate colors.',inputSchema:{type:'object',properties:{action:{type:'string',const:'colorize'}},required:['action']},execute:async function(){window.location.href='/photo-colorizer';return{success:true};}},{name:'enhance_photo',description:'Enhance photo resolution and clarity using AI upscaling up to 4x.',inputSchema:{type:'object',properties:{action:{type:'string',const:'enhance'}},required:['action']},execute:async function(){window.location.href='/photo-enhancer';return{success:true};}}]});})();`,
          }}
        />
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
        <div data-global-sticky-cta>
          <StickyCTA />
        </div>
        <div data-global-exit-popup>
          <ExitIntentPopup />
        </div>
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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="ArtImageHub home">
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
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-lora text-[#6b5344]" aria-label="Main navigation">
          <Link href="/old-photo-restoration" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Restore
          </Link>
          <Link href="/blog" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Journal
          </Link>
          <Link href="/#pricing" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            About
          </Link>
          <Link href="/resources" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Resources
          </Link>
          <Link href="/subscription" className="hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all after:duration-200">
            Account
          </Link>
        </nav>

        {/* CTA + Language switcher */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/old-photo-restoration"
            className="inline-flex h-9 items-center rounded-full bg-[#0071e3] px-5 text-[13px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.97] transition-all duration-200 shadow-sm shadow-[#0071e3]/20 whitespace-nowrap"
          >
            Get Started — $4.99
          </Link>
        </div>
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
            <div className="mt-6">
              <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-[#6b5344]">
                Featured On
              </p>
              <a
                href="https://www.toolpilot.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Featured on ToolPilot"
                className="inline-flex rounded-xl border border-[#3d3020] bg-[#1f180f] px-3 py-2 transition-colors hover:border-[#5a4530] hover:bg-[#241c12]"
              >
                <img
                  src="https://www.toolpilot.ai/cdn/shop/files/f-w_690x151_crop_center.png?v=1695883028"
                  alt="Featured on ToolPilot"
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-playfair text-[14px] font-600 text-[#d4bc91] uppercase tracking-[0.08em] mb-4">Product</h3>
            <nav className="flex flex-col gap-3 text-[14px]" aria-label="Product links">
              <Link href="/old-photo-restoration" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Photo Restoration</Link>
              <Link href="/#pricing" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Pricing</Link>
              <Link href="/subscription" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">My Account</Link>
            </nav>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-playfair text-[14px] font-600 text-[#d4bc91] uppercase tracking-[0.08em] mb-4">Learn</h3>
            <nav className="flex flex-col gap-3 text-[14px]" aria-label="Learn links">
              <Link href="/blog" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Journal</Link>
              <Link href="/blog" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Restoration Guides</Link>
              <Link href="/blog" className="text-[#a8967e] hover:text-[#d4bc91] transition-colors">Family History Tips</Link>
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
