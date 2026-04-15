export type PageMeta = {
  title: string;
  description: string;
  keywords: readonly string[];
  h1: string;
  subtitle: string;
  badge: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type LocaleSEO = {
  oldPhotoRestoration: PageMeta;
};
