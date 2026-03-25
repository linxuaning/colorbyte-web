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
  "/photo-enhancer",
  "/photo-colorizer",
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
