export type FaqItem = { q: string; a: string };
export type HowToStep = { name: string; text: string };

export type PageMeta = {
  title: string;
  description: string;
  keywords: readonly string[];
  h1: string;
  subtitle: string;
  badge: string;
  ctaPrimary: string;
  ctaSecondary: string;
  // Optional — fallback to EN defaults when omitted
  faqItems?: readonly FaqItem[];
  howToSteps?: readonly HowToStep[];
};

export type LocaleSEO = {
  oldPhotoRestoration: PageMeta;
  colorizer: PageMeta;
  enhancer: PageMeta;
};
