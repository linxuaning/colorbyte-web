import type { MetadataRoute } from "next";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "Bytespider",
  "BingBot",
  "msnbot",
];

export default function robots(): MetadataRoute.Robots {
  const aiRules = AI_CRAWLERS.map((ua) => ({
    userAgent: ua,
    allow: "/",
    disallow: ["/api/", "/payment/", "/subscription/"],
  }));

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/payment/", "/subscription/"],
      },
      ...aiRules,
    ],
    sitemap: "https://artimagehub.com/sitemap.xml",
  };
}
