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

export const trackPaymentStarted = (plan: string) => {
  trackPaymentFunnelEvent('payment_started', {
    plan,
  });
};

export const trackCreateOrderResult = (success: boolean, detail?: string) => {
  trackPaymentFunnelEvent(
    success ? 'payment_create_order_success' : 'payment_create_order_fail',
    {
      detail: detail || null,
    }
  );
};

export const trackPaymentCancel = (source: string) => {
  trackPaymentFunnelEvent('payment_cancel', { source });
};

export const trackPaymentEmailEntry = (source: string, mode: 'manual' | 'auto' = 'manual') => {
  trackPaymentFunnelEvent('payment_email_entry', { source, mode });
};

export const trackPaymentSuccess = (amount: number, transactionId?: string) => {
  event({
    action: 'purchase',
    category: 'conversion',
    label: 'Payment completed',
    value: amount,
  });

  trackPaymentFunnelEvent('payment_success', {
    amount,
    transaction_id: transactionId || null,
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
