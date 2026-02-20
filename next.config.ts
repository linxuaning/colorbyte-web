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
        source: "/blog/:path*.jpg",
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
    ];
  },

  // Compression (reduces page size → faster LCP)
  compress: true,

  // Power headers (tells Google this is a Next.js site)
  poweredByHeader: false,
};

export default nextConfig;
