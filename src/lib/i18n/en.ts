import type { ObjectRemoverClientCopy, ToolClientCopy } from "./types";

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

// AI Tools / Object Remover (Phase 1, 2026-05-04). Strings mirror the inline
// copy in src/app/ai-tools/object-remover/object-remover-client.tsx.
export const enObjectRemoverClient: ObjectRemoverClientCopy = {
  payGateHeadline: "Unlock Object Remover",
  payGateBody:
    "Pay once, remove unlimited objects in HD. Return here with the same email to upload and clean up your photos.",
  unlockButton: "Unlock Access",
  alreadyPaidLabel: "Already paid? Enter your email to restore access",
  alreadyPaidPlaceholder: "you@example.com",
  alreadyPaidCheckButton: "Check",
  alreadyPaidFound: "Access restored — you can now upload your photo.",
  alreadyPaidNotFound: "No active subscription found for this email.",

  uploadHeadline: "Upload a photo",
  uploadHint: "You'll brush over what you want removed in the next step",
  uploadCta: "Choose Photo",
  uploadFormatHint: "JPG, PNG, WEBP up to 20MB",

  brushLabel: "Brush",
  undoButton: "Undo",
  clearButton: "Clear",
  differentPhotoButton: "Different photo",
  removeButton: "Remove",
  maskInstructions:
    "Brush over what you want gone. Be generous on edges — AI fills cleanly when there's a margin.",

  submittingShort: "Uploading your image and mask...",
  submittingMid: "AI is reconstructing the area you brushed...",
  submittingLong: "Finalizing inpainted output — almost there.",
  submittingExtra: "Server taking longer than usual — hang tight.",
  submittingNote:
    "Please keep this tab open. Your photo is processed securely and deleted within 24h.",

  doneTitle: "Object Removed",
  originalLabel: "Original",
  cleanedLabel: "Cleaned",
  downloadButton: "Download HD Result",
  downloadHint: "Original quality unlocked for this email",
  restartAnother: "Clean another photo",

  errorTitle: "Something went wrong",
  errorBodyPrefix: "Object removal failed. Please try again, or email ",
  errorRetrySame: "Try same photo again",
  errorTryAgain: "Try again",
  errorUploadDifferent: "Upload a different photo",
  errorInvalidFileType: "Invalid file type. Use JPG, PNG, or WEBP.",
  errorFileTooLarge: "File too large. Max 20MB.",
  errorMaskExportFailed: "Could not export mask. Please try again.",
  errorServiceBusy:
    "Service is busy right now. Please try again in a moment.",
  errorRequestTimeout:
    "Request timed out. Your network may be slow — please try again.",
};

export const enToolClient = {
  restore: enToolClientRestore,
  colorize: enToolClientColorize,
  enhance: enToolClientEnhance,
} as const;
