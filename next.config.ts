import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.onrender.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24 hours cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // HTTP security & SEO headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Helps Google trust the site (HTTPS enforcement)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Prevents content-type sniffing (security + trust signal)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Referrer policy — passes referrer data to Google Analytics
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions policy — helps with Core Web Vitals
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Cache static assets aggressively — improves Core Web Vitals LCP
      {
        source: "/blog/:path*.(jpg|jpeg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache fonts for 1 year
      {
        source: "/(.*).woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache favicons and icons
      {
        source: "/(favicon.ico|icon.png|apple-icon.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      // Sitemap caching (revalidate daily)
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
        ],
      },
      // IndexNow API - no cache
      {
        source: "/api/indexnow",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },

  // Compression (reduces page size → faster LCP)
  compress: true,

  // Power headers (tells Google this is a Next.js site)
  poweredByHeader: false,

  // Experimental performance features
  experimental: {
    // Optimize package imports for smaller bundles
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },

  // Empty turbopack config to silence warning (Next.js 16+ default)
  turbopack: {},
};

export default nextConfig;
