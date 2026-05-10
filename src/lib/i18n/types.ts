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

// ---------------------------------------------------------------------------
// Tool client UI copy (upload box, error messages, progress, loading).
// Scope intentionally excludes paywall / checkout / pricing strings — those
// remain English until the founder approves localization.
// ---------------------------------------------------------------------------

export type ToolClientCopy = {
  // Upload area
  dropHeadline: string;           // e.g. "Drop your photo here"
  dropHint: string;               // "or click to browse · JPG, PNG, WEBP · Max 20 MB"
  uploadCta: string;              // "Upload Photo to Restore"
  pasteHint: string;              // "You can also paste an image with Ctrl+V"
  colorizeToggle: string;         // "Colorize black & white photo"

  // Progress / loading
  uploading: string;              // "Uploading..."
  retryingUpload: string;         // "Retrying upload ({n}/3)..." — use {n} placeholder
  processingStarted: string;      // "Processing started..."
  processingDefault: string;      // fallback when backend returns no stage ("Processing...")
  actionVerbIng: string;          // "Restoring" / "Colorizing" / "Enhancing" — used as fallback progressText
  warmupNotice: string;           // "First {action} may take a moment while the AI warms up." — optional
  elapsedSuffix: string;          // "elapsed" — shown after elapsed seconds counter
  serverWakingUp: string;         // "Server waking up, please wait"
  aiWarmingUp: string;            // "AI model warming up, almost ready"

  // Error messages
  errorInvalidFileType: string;   // "Invalid file type. Please upload JPG, PNG, or WEBP."
  errorFileTooLarge: string;      // "File too large. Maximum size is 20MB."
  errorUploadFailed: string;      // generic upload failed fallback
  errorUploadTimeout: string;     // "Upload timed out — the server may be starting up. Please try again in a moment."
  errorProcessingTimeout: string; // "Processing timed out. The AI service may be warming up — please try again."
  errorProcessingFailed: string;  // "Processing failed. Please try again."
  errorTitle: string;             // "Something Went Wrong"
  errorBody: string;              // "Something went wrong. Please try again — your file is still here. Need help?"
  errorRetrySame: string;         // "Retry Same Photo"
  errorTryAgain: string;          // "Try Again"
  errorUploadDifferent: string;   // "Upload a different photo"

  // Reset / after-done
  restartAnother: string;         // "Restore Another Photo" / "Colorize Another Photo" / "Enhance Another Photo"
};

// ---------------------------------------------------------------------------
// Object Remover client UI copy. Distinct from ToolClientCopy because the
// object-remover surface has unique controls (brush / mask / undo) that don't
// fit the upload→process→done pattern of restore/colorize/enhance.
// ---------------------------------------------------------------------------

export type ObjectRemoverClientCopy = {
  // Pay gate
  payGateHeadline: string;
  payGateBody: string;
  unlockButton: string;
  alreadyPaidLabel: string;
  alreadyPaidPlaceholder: string;
  alreadyPaidCheckButton: string;
  alreadyPaidFound: string;
  alreadyPaidNotFound: string;

  // Upload
  uploadHeadline: string;
  uploadHint: string;
  uploadCta: string;
  uploadFormatHint: string;

  // Mask drawing
  brushLabel: string;
  undoButton: string;
  clearButton: string;
  differentPhotoButton: string;
  removeButton: string;
  maskInstructions: string;

  // Submitting
  submittingShort: string;
  submittingMid: string;
  submittingLong: string;
  submittingExtra: string;
  submittingNote: string;

  // Done
  doneTitle: string;
  originalLabel: string;
  cleanedLabel: string;
  downloadButton: string;
  downloadHint: string;
  restartAnother: string;

  // Errors
  errorTitle: string;
  errorBodyPrefix: string;
  errorRetrySame: string;
  errorTryAgain: string;
  errorUploadDifferent: string;
  errorInvalidFileType: string;
  errorFileTooLarge: string;
  errorMaskExportFailed: string;
  errorServiceBusy: string;
  errorRequestTimeout: string;
};

// ---------------------------------------------------------------------------
// Apex homepage content (2026-05-10). EN homepage at / and locale homepages
// at /{locale}/ render from the same content shape; getHomePageContent falls
// back to EN when a locale lacks a translation.
// ---------------------------------------------------------------------------

export type HomePageStat = { number: string; label: string; sub: string };
export type HomePageTestimonial = { quote: string; author: string; location: string };
export type HomePageStep = { n: string; title: string; desc: string };
export type HomePageFeature = { title: string; desc: string };
export type HomePageCompareCard = {
  title: string;
  desc: string;
  points: readonly string[];
  cta: string;
};
export type HomePageFaqItem = { q: string; a: string };

export type HomePageContent = {
  // Metadata (Next Metadata)
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;

  // Hero
  heroEyebrow: string;
  heroH1: string;
  heroSubhead: string;
  heroCtaPrimary: string;
  heroBullets: readonly string[];     // 3 items
  heroTrustStrip: readonly string[];  // 3 items
  heroTrustSignals: readonly string[]; // 3 items
  heroBadges: readonly string[];      // 4 items
  heroSidebarLabel: string;
  heroSidebarStat: string;
  heroSidebarStatLabel: string;
  heroBottomBorder: string;
  heroBottomEst: string;

  // Features
  featuresEyebrow: string;
  featuresH2: string;
  featuresSubhead: string;
  features: readonly HomePageFeature[]; // 6 items

  // Stats + Testimonials
  stats: readonly HomePageStat[]; // 3 items
  testimonialsEyebrow: string;
  testimonialsH2: string;
  testimonials: readonly HomePageTestimonial[]; // 3 items

  // How It Works
  howEyebrow: string;
  howH2: string;
  howSteps: readonly HomePageStep[]; // 3 items
  howCtaPrimary: string;

  // Comparison Intent
  compareEyebrow: string;
  compareH2: string;
  compareSubhead: string;
  compareLabel: string;
  compareCards: readonly HomePageCompareCard[]; // 2 items
  compareDirectCta: string;

  // FAQ
  faqEyebrow: string;
  faqH2: string;
  faqSubheadPrefix: string;       // before the link, e.g. "Everything you need to know before you begin. Can't find an answer? "
  faqVisitJournalLink: string;    // "Visit our journal"
  faqSubheadSuffix: string;       // after the link, e.g. "."
  faqItems: readonly HomePageFaqItem[]; // 5 items

  // Final CTA
  finalH2: string;
  finalSubhead: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
  finalTagline: string;
};

export type LocaleSEO = {
  oldPhotoRestoration: PageMeta;
  colorizer: PageMeta;
  enhancer: PageMeta;
  // New tools — optional during rollout (EN fallback when absent).
  denoiser?: PageMeta;
  deblurrer?: PageMeta;
  jpegFix?: PageMeta;
  // Apex homepage. Optional during rollout — getHomePageContent falls back
  // to EN when missing. Added 2026-05-10 after user reported KO/JA homepage
  // rendering EN content (root cause: src/app/[locale]/page.tsx re-exported
  // the EN page without locale data).
  homePage?: HomePageContent;
  // Optional during rollout — default to EN copy if missing.
  toolClient?: {
    restore: ToolClientCopy;
    colorize: ToolClientCopy;
    enhance: ToolClientCopy;
    // object-remover added 2026-05-04. Optional during phase-1 rollout (no
    // /{locale}/ai-tools/object-remover routes yet) — wire when locale variants ship.
    objectRemover?: ObjectRemoverClientCopy;
  };
};
