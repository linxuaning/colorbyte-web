import type { HomePageContent, ObjectRemoverClientCopy, ToolClientCopy } from "./types";

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

// ---------------------------------------------------------------------------
// English apex homepage content (2026-05-10). Source of truth for all locales;
// non-EN locale files override fields they translate, fall back to this when
// a field is missing.
// ---------------------------------------------------------------------------

export const enHomePage: HomePageContent = {
  metaTitle: "ArtImageHub — AI Photo Restoration, Enhancement & Colorization",
  metaDescription:
    "Restore old photos, enhance image quality, and colorize black & white pictures with AI. Pay $4.99 once for upload, AI processing, and HD download.",
  ogTitle: "ArtImageHub — AI Photo Restoration",
  ogDescription:
    "Restore old photos, enhance image quality, and colorize black and white pictures with ArtImageHub. One-time $4.99 payment. Results in 30–90 seconds. No subscription.",

  heroEyebrow: "Since 2024 · AI Restoration Studio",
  heroH1: "Breathe life into faded memories with AI photo restoration.",
  heroSubhead:
    "Pay once, upload a damaged, faded, or black & white photo, and let AI restore it to stunning clarity in seconds.",
  heroCtaPrimary: "Restore Your Photo",
  heroBullets: ["Pay before upload", "HD original $4.99", "Instant results"] as const,
  heroTrustStrip: [
    "Paid access before upload",
    "Files retained only as needed for delivery",
    "JPG, PNG, WEBP up to 20 MB",
  ] as const,
  heroTrustSignals: [
    "Pro quality restoration",
    "Results in 30 seconds",
    "One-time payment, no subscription",
  ] as const,
  heroBadges: [
    "Secure Payment",
    "100% Privacy",
    "Deleted in 24h · Download before it expires",
    "Money-Back Guarantee",
  ] as const,
  heroSidebarLabel: "Trusted by families worldwide",
  heroSidebarStat: "10,000+",
  heroSidebarStatLabel: "Memories restored",
  heroBottomBorder: "Face enhancement · Super resolution · Colorization",
  heroBottomEst: "Est. 2024",

  featuresEyebrow: "Capabilities",
  featuresH2: "Everything your photo needs.",
  featuresSubhead:
    "Six decades of photographic deterioration, reversed in thirty seconds by purpose-built neural networks.",
  features: [
    {
      title: "Face Enhancement",
      desc: "Reconstruct facial details lost to age or damage. Using GFPGAN neural networks, we recover crisp eyes, natural skin texture, and preserved expression.",
    },
    {
      title: "4× Super Resolution",
      desc: "Upscale to 4× resolution with AI — crystal-clear detail recovered from the lowest-quality scans, aged prints, and torn originals.",
    },
    {
      title: "Auto Colorization",
      desc: "Add natural, historically-accurate color to black & white photos. Skies turn blue, skin tones warm — all with a single click.",
    },
    {
      title: "Scratch & Damage Repair",
      desc: "Remove cracks, water stains, fold marks, and age spots. Our inpainting model fills in lost detail seamlessly.",
    },
    {
      title: "Quality Enhancement",
      desc: "Fix exposure, contrast, and noise simultaneously. Every pixel analyzed and corrected for natural, balanced output.",
    },
    {
      title: "Instant Download",
      desc: "Compare before & after with our interactive slider, then download your restored photo at full resolution.",
    },
  ] as const,

  stats: [
    { number: "10,000+", label: "Photos restored", sub: "and counting" },
    { number: "30s", label: "Average processing", sub: "results in seconds" },
    { number: "4.8★", label: "User rating", sub: "from 2,400+ reviews" },
  ] as const,
  testimonialsEyebrow: "Testimonials",
  testimonialsH2: "Trusted by families worldwide",
  testimonials: [
    {
      quote:
        "I was skeptical at first, but the results blew me away. My great-grandfather's damaged portrait from 1942 looks brand new. The AI even restored details I didn't know were there.",
      author: "Michael Chen",
      location: "San Francisco, CA",
    },
    {
      quote:
        "As a professional genealogist, I recommend this tool to all my clients. It's faster and more affordable than traditional restoration, and the quality is consistently excellent.",
      author: "Dr. Patricia Moore",
      location: "Boston, MA",
    },
    {
      quote:
        "I've restored over 50 family photos in the past month. The colorization feature is incredible — it brought my grandmother's black & white wedding photos to life. Worth every penny.",
      author: "James Rodriguez",
      location: "Austin, TX",
    },
  ] as const,

  howEyebrow: "Process",
  howH2: "Three steps. Thirty seconds.",
  howSteps: [
    {
      n: "1",
      title: "Unlock Paid Access",
      desc: "Start from checkout so upload and processing access are activated on this email before you enter the tool.",
    },
    {
      n: "2",
      title: "Upload with the Same Email",
      desc: "Return to the tool after payment and upload your damaged, faded, black-and-white, or low-quality photo.",
    },
    {
      n: "3",
      title: "Process and Download",
      desc: "If processing succeeds, the same email keeps the original-quality download path unlocked.",
    },
  ] as const,
  howCtaPrimary: "Restore Your Photo",

  compareEyebrow: "Compare Before You Choose",
  compareH2: "Start with the highest-intent questions.",
  compareSubhead:
    "Buyers who are already comparing tools are closer to action than generic visitors. We route that intent into direct head-to-head pages and then into the restoration flow.",
  compareLabel: "High-intent landing page",
  compareCards: [
    {
      title: "ArtImageHub vs Remini",
      desc: "Best for users deciding between AI enhancers and looking for the better old-family-photo workflow.",
      points: [
        "Compare restoration quality, pricing, and artifact control",
        "See which tool is better for faded portraits and damaged prints",
        "Jump directly into our restore flow after the comparison",
      ],
      cta: "Read the Remini Comparison",
    },
    {
      title: "AI Restoration vs Photoshop",
      desc: "Best for users weighing speed, effort, and output quality before committing to manual editing.",
      points: [
        "Compare total effort, turnaround speed, and realism",
        "Clarify when manual editing is overkill for family-photo recovery",
        "Move straight from evaluation into a live AI restore",
      ],
      cta: "Read the Photoshop Comparison",
    },
  ] as const,
  compareDirectCta: "Go Straight to Restore",

  faqEyebrow: "FAQ",
  faqH2: "Questions answered.",
  faqSubheadPrefix: "Everything you need to know before you begin. Can’t find an answer? ",
  faqVisitJournalLink: "Visit our journal",
  faqSubheadSuffix: ".",
  faqItems: [
    {
      q: "What image formats do you support?",
      a: "JPG, PNG, and WEBP formats — up to 20 MB per file.",
    },
    {
      q: "What happens after payment?",
      a: "Your payment unlocks upload and AI processing on this email address. Once processing completes, the same email unlocks the original-quality HD download — no watermarks, no subscription required.",
    },
    {
      q: "Is my photo data private and secure?",
      a: "Yes. All uploaded photos are automatically deleted after 24 hours. We never store, share, or train models on your images.",
    },
    {
      q: "How does access work?",
      a: "Payment unlocks upload and processing access on this email. If processing succeeds, the same email unlocks the original-quality download.",
    },
    {
      q: "Do I need a subscription?",
      a: "No. This is a one-time payment that unlocks access on this email. No recurring billing.",
    },
  ] as const,

  finalH2: "Your memories deserve to shine again.",
  finalSubhead:
    "Pay once to unlock upload and processing access on this email, then continue inside the tool. Bring your family’s history back to life without a subscription.",
  finalCtaPrimary: "Restore Your Photo",
  finalCtaSecondary: "View Pricing",
  finalTagline: "Paid access before upload · One-time payment · No subscription",
};
