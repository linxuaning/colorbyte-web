export interface PaymentFunnelSource {
  landingPage?: string;
  ctaSlot?: string;
  entryVariant?: string;
  checkoutSource?: string;
}

const PAYMENT_FUNNEL_QUERY_KEYS = {
  landingPage: "landing_page",
  ctaSlot: "cta_slot",
  entryVariant: "entry_variant",
  checkoutSource: "checkout_source",
} as const;

const LOCKED_LANDING_PAGES = new Set([
  "/old-photo-restoration",
  "/vs-remini",
  "/vs-photoshop-restoration",
  "/best-photo-restoration-software",
  "/photo-restoration-app",
]);

const readPaymentFunnelValue = (params: URLSearchParams, key: string) => {
  const value = params.get(key)?.trim();
  return value || undefined;
};

export const readPaymentFunnelSource = (
  params: URLSearchParams
): PaymentFunnelSource => {
  const landingPage = readPaymentFunnelValue(
    params,
    PAYMENT_FUNNEL_QUERY_KEYS.landingPage
  );

  return {
    landingPage:
      landingPage && LOCKED_LANDING_PAGES.has(landingPage)
        ? landingPage
        : undefined,
    ctaSlot: readPaymentFunnelValue(params, PAYMENT_FUNNEL_QUERY_KEYS.ctaSlot),
    entryVariant: readPaymentFunnelValue(
      params,
      PAYMENT_FUNNEL_QUERY_KEYS.entryVariant
    ),
    checkoutSource: readPaymentFunnelValue(
      params,
      PAYMENT_FUNNEL_QUERY_KEYS.checkoutSource
    ),
  };
};

export const buildPaymentFunnelQuery = (
  source: PaymentFunnelSource
): string => {
  const params = new URLSearchParams();

  for (const [field, key] of Object.entries(
    PAYMENT_FUNNEL_QUERY_KEYS
  ) as Array<[keyof PaymentFunnelSource, string]>) {
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

// Google Analytics 4 event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined conversion events
export const trackPhotoUpload = () => {
  event({
    action: 'photo_upload',
    category: 'engagement',
    label: 'User uploaded a photo',
  });
};

export const trackProcessingComplete = ({
  taskId,
  tool,
  processingTimeMs,
  source,
}: {
  taskId: string;
  tool: "restore" | "enhance" | "colorize";
  processingTimeMs: number;
  source?: PaymentFunnelSource;
}) => {
  const payload = {
    task_id: taskId,
    tool,
    processing_time_ms: Math.max(0, Math.round(processingTimeMs)),
    ...paymentFunnelPayload(source || {}),
  };

  console.info("[processing_complete]", payload);

  if (!window.gtag) return;

  window.gtag("event", "processing_complete", {
    event_category: "conversion",
    ...payload,
  });
};

export const trackPhotoDownload = (quality: 'free' | 'pro') => {
  event({
    action: 'photo_download',
    category: 'conversion',
    label: `Download - ${quality}`,
  });
};

export const trackPaymentClick = (plan: string) => {
  event({
    action: 'payment_click',
    category: 'conversion',
    label: `Payment initiated - ${plan}`,
  });
};

const trackPaymentFunnelEvent = (
  action: string,
  payload: Record<string, string | number | boolean | null | undefined>
) => {
  const utc = new Date().toISOString();

  // Keep a console evidence trail for operational debugging and screenshots.
  console.info(`[payment_funnel] ${action}`, { ...payload, utc });

  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: 'payment_funnel',
    ...payload,
    utc,
  });
};

export const trackPaymentStarted = (
  plan: string,
  source?: PaymentFunnelSource
) => {
  trackPaymentFunnelEvent('payment_started', {
    plan,
    ...paymentFunnelPayload(source || {}),
  });
};

export const trackCreateOrderResult = (
  success: boolean,
  detail?: string,
  source?: PaymentFunnelSource
) => {
  trackPaymentFunnelEvent(
    success ? 'payment_create_order_success' : 'payment_create_order_fail',
    {
      detail: detail || null,
      ...paymentFunnelPayload(source || {}),
    }
  );
};

export const trackPaymentCancel = (
  source: string,
  funnelSource?: PaymentFunnelSource
) => {
  trackPaymentFunnelEvent('payment_cancel', {
    source,
    ...paymentFunnelPayload(funnelSource || {}),
  });
};

export const trackPaymentEmailEntry = (
  source: string,
  mode: 'manual' | 'auto' = 'manual',
  funnelSource?: PaymentFunnelSource
) => {
  trackPaymentFunnelEvent('payment_email_entry', {
    source,
    mode,
    ...paymentFunnelPayload(funnelSource || {}),
  });
};

export const trackPaymentSuccess = (
  amount: number,
  transactionId?: string,
  source?: PaymentFunnelSource
) => {
  event({
    action: 'purchase',
    category: 'conversion',
    label: 'Payment completed',
    value: amount,
  });

  trackPaymentFunnelEvent('payment_success', {
    amount,
    transaction_id: transactionId || null,
    ...paymentFunnelPayload(source || {}),
  });

  // Also track as conversion
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'conversion', {
      send_to: GA_MEASUREMENT_ID,
      value: amount,
      currency: 'USD',
      transaction_id: transactionId || `${Date.now()}`,
    });
  }
};

const getPaymentSuccessDedupeKey = (transactionId: string) =>
  `payment_success_tracked_${transactionId}`;

export const hasTrackedPaymentSuccess = (transactionId: string) => {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(getPaymentSuccessDedupeKey(transactionId)) === "1";
};

export const markPaymentSuccessTracked = (transactionId: string) => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(getPaymentSuccessDedupeKey(transactionId), "1");
};

export const trackPaymentSuccessOnce = (
  amount: number,
  transactionId: string,
  source?: PaymentFunnelSource
) => {
  if (hasTrackedPaymentSuccess(transactionId)) {
    return false;
  }

  trackPaymentSuccess(amount, transactionId, source);
  markPaymentSuccessTracked(transactionId);
  return true;
};

export const trackCTAClick = (location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `CTA clicked - ${location}`,
  });
};

export const trackPageScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `Scrolled to ${depth}%`,
    value: depth,
  });
};
