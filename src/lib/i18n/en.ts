import type { ToolClientCopy } from "./types";

// ---------------------------------------------------------------------------
// English tool-client copy (source of truth for non-localized fallbacks).
// Keep in sync with the hardcoded strings that used to live in the three
// client components (restore-client.tsx / colorize-client.tsx / enhance-client.tsx).
// ---------------------------------------------------------------------------

export const enToolClientRestore: ToolClientCopy = {
  dropHeadline: "Drop your photo here",
  dropHint: "or click to browse · JPG, PNG, WEBP · Max 20 MB",
  uploadCta: "Upload Photo to Restore",
  pasteHint: "You can also paste an image with Ctrl+V",
  colorizeToggle: "Colorize black & white photo",

  uploading: "Uploading...",
  retryingUpload: "Retrying upload ({n}/3)...",
  processingStarted: "Processing started...",
  processingDefault: "Processing...",
  actionVerbIng: "Restoring",
  warmupNotice: "First restoration may take a moment while the AI warms up.",
  elapsedSuffix: "elapsed",
  serverWakingUp: "Server waking up, please wait",
  aiWarmingUp: "AI model warming up, almost ready",

  errorInvalidFileType: "Invalid file type. Please upload JPG, PNG, or WEBP.",
  errorFileTooLarge: "File too large. Maximum size is 20MB.",
  errorUploadFailed: "Upload failed",
  errorUploadTimeout:
    "Upload timed out — the server may be starting up. Please try again in a moment.",
  errorProcessingTimeout:
    "Processing timed out. The AI service may be warming up — please try again.",
  errorProcessingFailed: "Processing failed. Please try again.",
  errorTitle: "Something Went Wrong",
  errorBody:
    "Something went wrong. Please try again — your file is still here. Need help?",
  errorRetrySame: "Retry Same Photo",
  errorTryAgain: "Try Again",
  errorUploadDifferent: "Upload a different photo",

  restartAnother: "Restore Another Photo",
};

export const enToolClientColorize: ToolClientCopy = {
  ...enToolClientRestore,
  dropHeadline: "Drop your black & white photo here",
  uploadCta: "Upload Photo to Colorize",
  colorizeToggle: "Colorize black & white photo",
  actionVerbIng: "Colorizing",
  warmupNotice: "First colorization may take a moment while the AI warms up.",
  restartAnother: "Colorize Another Photo",
};

export const enToolClientEnhance: ToolClientCopy = {
  ...enToolClientRestore,
  dropHeadline: "Drop your photo here",
  uploadCta: "Upload Photo to Enhance",
  colorizeToggle: "Also colorize if black & white",
  actionVerbIng: "Enhancing",
  warmupNotice: "First enhancement may take a moment while the AI warms up.",
  restartAnother: "Enhance Another Photo",
};

export const enToolClient = {
  restore: enToolClientRestore,
  colorize: enToolClientColorize,
  enhance: enToolClientEnhance,
} as const;
