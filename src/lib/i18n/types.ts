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

export type LocaleSEO = {
  oldPhotoRestoration: PageMeta;
  colorizer: PageMeta;
  enhancer: PageMeta;
  // Optional during rollout — default to EN copy if missing.
  toolClient?: {
    restore: ToolClientCopy;
    colorize: ToolClientCopy;
    enhance: ToolClientCopy;
  };
};
