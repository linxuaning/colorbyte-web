export interface PaymentFunnelSource {
  landingPage?: string;
  ctaSlot?: string;
  entryVariant?: string;
  checkoutSource?: string;
}

const QUERY_KEY_MAP = {
  landingPage: "landing_page",
  ctaSlot: "cta_slot",
  entryVariant: "entry_variant",
  checkoutSource: "checkout_source",
} as const;

export const LOCKED_LANDING_PAGES = new Set([
  "/old-photo-restoration",
  "/photo-restoration-service",
  "/vs-remini",
  "/vs-photoshop-restoration",
  "/best-photo-restoration-software",
  "/photo-restoration-app",
]);

export type SearchParamInput = Record<string, string | string[] | undefined>;

const readValue = (params: URLSearchParams, key: string) => {
  const value = params.get(key)?.trim();
  return value || undefined;
};

export const readPaymentFunnelSource = (
  params: URLSearchParams
): PaymentFunnelSource => {
  const landingPage = readValue(params, QUERY_KEY_MAP.landingPage);

  return {
    landingPage:
      landingPage && LOCKED_LANDING_PAGES.has(landingPage)
        ? landingPage
        : undefined,
    ctaSlot: readValue(params, QUERY_KEY_MAP.ctaSlot),
    entryVariant: readValue(params, QUERY_KEY_MAP.entryVariant),
    checkoutSource: readValue(params, QUERY_KEY_MAP.checkoutSource),
  };
};

export const readPaymentFunnelSourceFromSearchParams = (
  params: SearchParamInput
): PaymentFunnelSource => {
  const normalized = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") {
      normalized.set(key, value);
      continue;
    }

    if (Array.isArray(value) && value[0]) {
      normalized.set(key, value[0]);
    }
  }

  return readPaymentFunnelSource(normalized);
};

export const buildPaymentFunnelQuery = (
  source: PaymentFunnelSource
): string => {
  const params = new URLSearchParams();

  for (const [field, key] of Object.entries(QUERY_KEY_MAP) as Array<[
    keyof PaymentFunnelSource,
    string,
  ]>) {
    const value = source[field]?.trim();
    if (value) {
      params.set(key, value);
    }
  }

  return params.toString();
};

export const mergePaymentFunnelSource = (
  base: PaymentFunnelSource,
  overrides: PaymentFunnelSource
): PaymentFunnelSource => ({
  landingPage: overrides.landingPage || base.landingPage,
  ctaSlot: overrides.ctaSlot || base.ctaSlot,
  entryVariant: overrides.entryVariant || base.entryVariant,
  checkoutSource: overrides.checkoutSource || base.checkoutSource,
});

export const paymentFunnelPayload = (
  source: PaymentFunnelSource
): Record<string, string | null> => ({
  landing_page: source.landingPage || null,
  cta_slot: source.ctaSlot || null,
  entry_variant: source.entryVariant || null,
  checkout_source: source.checkoutSource || null,
});

/**
 * Detect the entry-variant token from browser signals (utm_source first,
 * referrer second, "direct" as fallback). Mirrors the rule set the founder
 * locked in 2026-04-28: chatgpt/perplexity/gemini → llm_referrer;
 * google/bing/yahoo → organic_search; reddit/quora/x/facebook → social;
 * artimagehub.com → internal_navigation; nothing → direct; else → other.
 */
const _hostnameMatches = (host: string, needles: string[]): boolean => {
  for (const n of needles) {
    if (host === n || host.endsWith("." + n)) return true;
  }
  return false;
};

export const detectEntryVariantFromBrowser = (): string => {
  if (typeof window === "undefined") return "direct";

  const utm = (
    new URLSearchParams(window.location.search).get("utm_source") || ""
  )
    .trim()
    .toLowerCase();

  if (utm) {
    if (utm.includes("chatgpt") || utm === "gpt" || utm.includes("openai")) return "llm_referrer";
    if (utm.includes("perplex")) return "llm_referrer";
    if (utm.includes("gemini") || utm.includes("bard")) return "llm_referrer";
    if (utm.includes("claude")) return "llm_referrer";
    if (utm.includes("google") || utm.includes("bing") || utm.includes("yahoo") || utm.includes("duckduckgo")) {
      return "organic_search";
    }
    if (
      utm.includes("reddit") ||
      utm.includes("quora") ||
      utm.includes("twitter") ||
      utm === "x" ||
      utm.includes("facebook") ||
      utm.includes("instagram") ||
      utm.includes("linkedin") ||
      utm.includes("tiktok")
    ) {
      return "social";
    }
    return "other";
  }

  const ref = (typeof document !== "undefined" ? document.referrer : "") || "";
  if (!ref) return "direct";

  let host = "";
  try {
    host = new URL(ref).hostname.toLowerCase();
  } catch {
    return "other";
  }

  if (_hostnameMatches(host, ["artimagehub.com"])) return "internal_navigation";
  if (_hostnameMatches(host, ["chatgpt.com", "openai.com", "perplexity.ai", "gemini.google.com", "claude.ai"])) {
    return "llm_referrer";
  }
  if (_hostnameMatches(host, ["google.com", "bing.com", "yahoo.com", "duckduckgo.com"])) {
    return "organic_search";
  }
  if (
    _hostnameMatches(host, [
      "reddit.com",
      "quora.com",
      "x.com",
      "twitter.com",
      "t.co",
      "facebook.com",
      "instagram.com",
      "linkedin.com",
      "tiktok.com",
      "pinterest.com",
    ])
  ) {
    return "social";
  }
  return "other";
};

/**
 * Fill missing fields on a funnel-source object with browser-derived values:
 *   - landingPage <- window.location.pathname + search (full path, includes locale)
 *   - entryVariant <- detectEntryVariantFromBrowser()
 *   - cta_slot / checkout_source from caller-provided defaults
 *
 * Caller-provided values always win. SSR-safe: returns base unchanged when
 * `window` is unavailable.
 */
export const enrichFunnelSource = (
  base: PaymentFunnelSource,
  defaults: PaymentFunnelSource = {},
): PaymentFunnelSource => {
  if (typeof window === "undefined") {
    return {
      landingPage: base.landingPage || defaults.landingPage,
      ctaSlot: base.ctaSlot || defaults.ctaSlot,
      entryVariant: base.entryVariant || defaults.entryVariant,
      checkoutSource: base.checkoutSource || defaults.checkoutSource,
    };
  }

  return {
    landingPage:
      base.landingPage ||
      defaults.landingPage ||
      `${window.location.pathname}${window.location.search}`,
    ctaSlot: base.ctaSlot || defaults.ctaSlot,
    entryVariant:
      base.entryVariant || defaults.entryVariant || detectEntryVariantFromBrowser(),
    checkoutSource: base.checkoutSource || defaults.checkoutSource,
  };
};
