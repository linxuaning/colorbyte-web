import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");
const publicDirectory = path.join(process.cwd(), "public");
const fallbackBlogImage = "/blog/before-after-examples.webp";

const SUPPORTED_LOCALES = ["en", "es", "pt-BR", "fr", "de", "ja", "ko"] as const;
export type BlogLocale = (typeof SUPPORTED_LOCALES)[number];
const EMERGENCY_STATIC_EXPORT = process.env.NEXT_OUTPUT_EXPORT === "1";
const EMERGENCY_STATIC_POST_LIMIT = 781;
const EMERGENCY_LOCALE_STATIC_POST_LIMIT = 120;
const EMERGENCY_STATIC_SLUGS_BY_LOCALE: Partial<Record<BlogLocale, Set<string>>> = {
  en: new Set([
  // T171 #3: new decade-sibling page (1950s-family exists; 1960s-family was the gap).
  "colorize-1960s-family-photos",
  // Quality batch 2026-06-21 (additive; cap 730->770, zero unpin/displacement).
  // Selected from unpinned pool passing hard gates (>=900w/>=5 H2/meta/buyer-intent);
  // near-dup (H2-Jaccard>=0.5) clusters capped at 4; URL-pattern soft-cap 10 so no
  // single pattern floods the batch; 15 distinct how-to-restore-photos-from-* queued
  // for the next batch. Audit table: docs/quality-batch-2026-06-21.md.
  "how-to-restore-old-photos-from-germany",
  "how-to-restore-old-photos-from-india",
  "how-to-restore-old-photos-from-mexico",
  "how-to-restore-old-photos-from-the-philippines",
  "how-to-restore-old-photos-from-contact-sheets",
  "how-to-restore-old-photos-from-slides",
  "how-to-restore-old-photos-from-microfilm",
  "how-to-restore-old-photos-with-water-stains",
  "how-to-restore-old-photos-without-photoshop-skills",
  "how-to-restore-photos-from-the-civil-war-era",
  "how-to-restore-photos-from-the-edwardian-era",
  "how-to-restore-photos-from-floods",
  "how-to-restore-photos-from-fires",
  "how-to-restore-photos-from-self-developing-cameras",
  "how-to-restore-photos-for-a-documentary",
  "how-to-restore-photos-from-old-film-canisters",
  "how-to-restore-photos-from-house-fires",
  "how-to-restore-photos-from-damaged-smartphones",
  "how-to-restore-photos-from-icloud",
  "how-to-restore-photos-from-google-drive",
  "how-to-restore-photos-for-veterans-tribute",
  "how-to-restore-photos-for-immigration-family-history",
  "how-to-restore-photos-for-family-reunion",
  "how-to-restore-photos-for-veterans-day",
  "artimagehub-vs-imageupscaler",
  "artimagehub-vs-lightroom-ai-denoise",
  "artimagehub-vs-canva",
  "artimagehub-vs-restore-photos",
  "artimagehub-vs-upscayl",
  "artimagehub-vs-adobe-photoshop-neural-filters",
  "artimagehub-vs-bigjpg",
  "artimagehub-vs-photoroom-2026",
  "how-to-colorize-photos-from-the-1939-worlds-fair",
  "artimagehub-vs-luminar-ai",
  "how-to-colorize-photos-from-the-cold-war-era",
  "how-to-colorize-photos-from-the-dust-bowl-era",
  "how-to-colorize-photos-from-the-vietnam-war",
  "artimagehub-vs-pixelup",
  "how-to-colorize-photos-from-world-war-one",
  // T184 2026-06-23 (additive; cap 770->778, zero unpin/displacement).
  // Ranked-but-unshipped: these 8 pages have GSC impressions (existing demand)
  // but were 404 on production (outside the static-export cap). All have source
  // .md files; pinning ships them. High-intent comparison/explainer cluster.
  "artimagehub-vs-vanceai",
  "artimagehub-vs-remini-app",
  "how-does-ai-photo-restoration-work",
  "ai-photo-restoration-for-beginners",
  "ai-photo-restoration-for-church-directories",
  "how-accurate-is-ai-photo-colorization",
  "how-to-remove-background-vintage-photos",
  "how-to-restore-photos-from-old-negatives",
  "best-photo-enhancement-apps-2026",
  "best-free-photo-restoration-apps",
  "can-gemini-restore-old-photos",
  "how-to-fix-out-of-focus-old-photos",
  // T152: keep ranked/live-revenue pages emitted under Render static export caps.
  "photo-restoration-software-comparison",
  "how-to-fix-overexposed-photos-ai",
  "can-chatgpt-restore-old-photos",
  "can-google-photos-restore-old-photos",
  "can-midjourney-restore-old-photos",
  "can-microsoft-copilot-restore-old-photos",
  "enhance-low-quality-images",
  "best-photo-restoration-software-2026",
  "fix-sun-damaged-photos",
  "enhance-old-group-photos-guide",
  "photo-restoration-ethics",
  "best-ai-old-photo-restoration-tools-2026",
  "enhance-old-concert-photographs",
  "artimagehub-vs-topaz-gigapixel",
  "can-claude-restore-old-photos",
  "colorization-accuracy-tips",
  "restore-grandfathers-old-photos",
  "ai-image-enhancer",
  "artimagehub-vs-lightroom",
  "photo-restoration-near-me",
  "photo-restoration-near-me-online",
  "restore-tintype-images-complete-guide",
  "fix-torn-photographs-ai-guide",
  "artimagehub-vs-lets-enhance",
  "enhance-old-school-photos",
  "enhance-blurry-vintage-photos",
  "fix-faded-kodachrome-slides",
  "fix-scratched-vintage-prints",
  "artimagehub-vs-adobe-photoshop",
  "artimagehub-vs-waifu2x",
  "enhance-faded-memories",
  "fix-faded-newspaper-clippings",
  "restore-photos-after-house-fire",
  "wedding-photo-restoration-complete-ai-guide",
  "ai-photo-restoration-chatgpt-recommendations-2026",
  "best-photo-quality-tools-for-wix",
  "free-photo-restoration-tools-2026",
  "how-to-print-restored-photos",
  "what-is-the-best-dpi-for-scanning-old-photos",
  "ai-tools-for-vintage-clothing-sellers",
  "best-free-photo-enhancer-no-watermark",
  "digitize-restore-film-home-movies",
  "how-to-enhance-group-photo-faces",
  "how-to-enhance-small-cropped-faces",
  "how-to-restore-photo-with-missing-person",
  "remove-ink-stains-from-old-photos",
  "restore-1960s-counterculture-photos",
  "restore-1970s-instant-photos",
  "restore-old-passport-photos",
  "restore-photos-immigrant-ancestor-homestead",
  "restore-photos-lgbtq-family-history",
  "fix-photos-stuck-together",
  "enhance-old-newspaper-photos",
  "best-ai-photo-restoration-tools-2026-compared",
  "best-photo-scanning-tips",
  "restore-school-photos-class-portraits",
  "photo-upscaling-ai-comparison",
  "artimagehub-vs-myheritage",
  "fix-curled-photograph-edges",
  "photo-preservation-methods",
  "ai-photo-restoration-vs-photoshop",
  "colorize-1950s-family-photos",
  "photo-scanning-best-practices",
  "how-to-fix-red-eye-in-old-flash-photos",
  "how-to-restore-old-photos-free-vs-paid",
  "restore-ambrotype-images",
  "restore-faded-polaroid-prints",
  "restore-photos-gimp-tutorial",
  "best-photo-restoration-apps-ios-android",
  "complete-guide-colorize-old-photos",
  "digitize-restore-old-slides",
  "enhance-old-wedding-pictures",
  "how-to-restore-water-damaged-album",
  "restore-daguerreotype-images",
  "restore-mold-damaged-photo-album",
  "restore-water-damaged-photos",
  "restore-1930s-depression-era-photos",
  "enhance-vintage-yearbook-photos",
  "restore-military-service-photos",
  "fix-blurry-old-photos",
  "ai-vs-manual-restoration",
  "photo-restoration-cost-comparison",
  "restore-sepia-photographs-online",
  "restore-black-white-photos-online",
  "photo-enhancement-vs-restoration",
  "photo-restoration-app-comparison",
  "photo-restoration-software-review-2026",
  "photo-restoration-no-account-required",
  "restore-old-photos-free-online",
  "best-free-old-photo-restoration-tool",
  "fix-old-photos-online",
  "how-to-identify-old-photo-formats",
  "how-to-improve-photo-scan-quality",
  "how-to-restore-old-photos-at-home",
  "ultimate-guide-water-damage-photo-restoration",
  "restore-victorian-photos-complete-guide",
  "restore-historical-photographs",
  "genealogy-photo-restoration-complete-guide",
  "enhance-old-sports-photos",
  "enhance-old-family-portraits",
  "restore-1980s-neon-photos",
  "fix-brittle-photo-paper",
  "enhance-old-baby-photos",
  "fix-fungus-damaged-photos-guide",
  "wedding-photo-restoration",
  "fix-red-eye-in-old-photos",
  "how-to-scan-old-photos-properly",
  "restore-damaged-old-photos",
  "vintage-photo-repair-techniques",
  "fix-color-shift-in-old-photos",
  "old-photo-restoration-guide",
  "restore-antique-family-portraits",
  "restore-army-uniform-photos",
  "fix-color-faded-pictures",
  "restore-1980s-photos-complete-guide",
  "enhance-old-sports-team-photos",
  "restore-ancestor-photographs",
  "fix-brittle-old-photographs-guide",
  "enhance-grainy-old-pictures",
  "photo-digitization-guide",
  "colorize-black-white-photos",
  "enhance-old-id-card-photos",
  "restore-1940s-wartime-photos",
  "fix-water-spots-on-photos",
  "fix-creased-family-photos",
  "enhance-old-baby-pictures",
  "enhance-old-portrait-photos",
  "restore-water-damaged-photographs-at-home",
  "fix-mold-damage-pictures",
  "enhance-old-military-photos",
  "restore-old-photos-free-online-2026",
  "restore-old-military-service-photos",
  "fix-blurry-photo-ai",
  "how-to-restore-old-photos-for-free",
  "artimagehub-vs-snapseed",
  "artimagehub-vs-adobe-enhance",
  "restore-autochrome-images",
  "restore-ambrotype-photos",
  
  "restore-faded-photos-free-online",
  "how-to-restore-old-photos-free",
  "how-to-restore-blurry-old-photos",
  "how-to-restore-old-photos-with-faded-ink-captions",
  "best-scanner-for-old-photos",
  "how-to-restore-old-photos-with-scratches",
  "best-ai-image-upscaler-2026",
  "how-to-fix-sun-damaged-old-photos",
  "best-ai-tools-for-restoring-faded-color-photos",
  "best-ai-tools-for-damaged-family-portraits",
  "best-scanner-settings-for-old-photos",
  "how-to-restore-old-photos-for-genealogy",
  "how-to-restore-old-photos-with-foxing",
  "how-to-restore-old-photos-from-china",
  "how-to-restore-old-photos-stuck-in-albums",
  "how-to-restore-old-photos-from-japan",
  "how-to-restore-old-photos-from-poland",
  "how-to-restore-old-photos-after-a-move",
  "how-to-restore-old-photos-from-nigeria",
  "how-to-restore-old-photos-with-color-cast",
  "how-to-fix-motion-blur-old-photos",
  "how-to-restore-old-photos-of-pets",
  "best-ai-tools-for-real-estate-photography",
  "fix-heat-damaged-old-photos",
  "how-to-restore-old-photos-on-android",
  "how-to-restore-old-photos-on-mac",
  "free-vs-paid-ai-photo-restoration-2026",
  "how-to-restore-old-photos-on-windows",
  "how-to-restore-photos-from-water-damaged-albums",
  "fix-smoke-damaged-old-photos",
  "fix-real-estate-photos-online",
  "unblur-image-online",
  "best-ai-photo-colorizer-2026",
  "how-to-fix-dark-underexposed-old-photos",
  "how-to-fix-yellow-tinted-old-photos",
  "best-ai-photo-tools-for-small-business",
  "how-to-restore-old-photos-for-memorial-services",
  "ai-photo-upscaler-online",
  "best-black-and-white-photo-colorizer",
  "best-ai-photo-restoration-tools-2027-forward-looking",
  "restore-faded-sepia-tone-old-photos",
  "best-ai-photo-tools-for-genealogy-facebook-groups",
  "ai-headshot-enhancer-online",
  "artimagehub-review-2026",
  "how-to-restore-old-photos-for-ancestry-websites",
  "how-to-colorize-black-and-white-photo-online",
  "best-ai-photo-restoration-service-2026",
  "how-to-restore-water-damaged-photos",
  "how-to-restore-faded-color-photos",
  "how-to-restore-overexposed-old-photos",
  "ai-photo-restoration-cost-comparison",
  "best-photo-upscaler-for-printing",
  "restore-photos-photoshop-alternative",
  "restore-1920s-flapper-photos",
  "can-stable-diffusion-restore-old-photos",
  "photo-restoration-cost-guide",
  "can-dall-e-restore-old-photos",
  "best-ai-tools-for-etsy-vintage-shop",
  "can-photoshop-restore-old-photos",
  "how-to-restore-severely-damaged-photos",
  "best-photo-tools-for-food-bloggers",
  "restore-old-photos-from-phone",
  "fix-pixelated-photos-online",
  "fix-chemically-damaged-prints",
  "preserving-old-photos",
  "fix-torn-photographs",
  "artimagehub-vs-topaz-denoise-ai",
  "best-photo-enhancer-ai-2026",
  "restore-damaged-polaroids",
  "photo-colorization-tutorial",
  "photo-restoration-before-after",
  "enhance-childhood-photos-complete-guide",
  "restore-collodion-wet-plates",
  "ai-photo-denoiser-comparison-2026",
  "photo-colorization-accuracy-guide",
  "fix-blurry-photos-in-google-photos",
  "how-to-fix-blurry-photos-in-google-photos",
  "best-resolution-for-scanning-old-photos",
  // --- T163 content-leg batch (2026-06-16): cap 449->693, +473 pins ---
  // 10 GSC-impression-but-cutoff (proven demand) + 463 quality-gated
  // (>=900w/>=5H2/meta/buyer-intent, family-cap=4). See scripts/batch2-quality-select.py
  "restore-baby-photos",
  "how-to-colorize-great-depression-era-photos",
  "how-to-colorize-roaring-twenties-photos",
  "how-to-colorize-colonial-era-photos",
  "how-to-colorize-depression-era-photos",
  "how-to-colorize-photos-from-the-1940s-homefront",
  "how-to-colorize-photos-from-the-1960s",
  "how-to-enhance-photos-for-ancestry-dna-profiles",
  "fix-grainy-concert-photos-from-dark-venues",
  "ai-tools-for-travel-bloggers",
  "remini-alternatives-old-photo-restoration",
  "how-to-fix-pink-or-magenta-cast-in-old-photos",
  "how-to-restore-old-latin-american-photos",
  "how-to-fix-double-exposure-old-photos",
  "how-to-fix-yellowed-old-photos",
  "how-to-restore-old-african-american-photos",
  "how-to-restore-old-chinese-american-photos",
  "how-to-fix-blurry-screenshots-windows",
  "how-to-fix-water-damaged-photos-ai-limits",
  "how-to-fix-sun-damaged-photos",
  "restore-water-damaged-photo-collections-from-floods",
  "fix-fungus-damaged-photographs",
  "restore-damaged-photo-negatives",
  "remove-jpeg-artifacts-online",
  "how-to-restore-photos-for-a-website",
  "fix-old-photos-with-red-eye",
  "how-to-fix-scratched-photo-negatives",
  "how-to-fix-blurry-action-camera-photos",
  "fix-blurry-concert-photos",
  "how-to-restore-photos-from-the-vietnam-war-era",
  "how-to-restore-old-passport-and-id-photos",
  "how-to-restore-photos-for-obituaries",
  "how-to-fix-blurry-photos-from-old-iphone",
  "how-to-restore-1970s-photos",
  "how-to-restore-damaged-school-photos",
  "how-to-restore-photos-for-a-slideshow",
  "how-to-restore-photos-for-family-history-books",
  "how-to-restore-1950s-photos",
  "restore-tornado-damaged-family-photos",
  "fix-blurry-kids-photos",
  "how-to-restore-photos-from-world-war-two",
  "how-to-restore-photos-from-newsprint",
  "how-to-restore-old-jewish-family-photos",
  "restore-grandmas-old-photos-mothers-day",
  "restore-old-photos-mothers-day-gift",
  "how-to-restore-tintype-photos",
  "how-to-restore-old-sports-photos",
  "how-to-restore-old-engagement-photos",
  "how-to-restore-old-baby-photos",
  "how-to-restore-old-prom-photos",
  "how-to-restore-early-2000s-digital-photos",
  "how-to-restore-childhood-photos",
  "how-to-restore-1980s-photos",
  "how-to-restore-old-church-photos",
  "how-to-restore-old-workplace-photos",
  "how-to-restore-1990s-photos",
  "how-to-colorize-old-photos",
  "how-to-restore-photos-of-old-houses-and-buildings",
  "how-to-restore-old-military-graduation-photos",
  "how-to-restore-old-reunion-photos",
  "how-to-restore-graduation-photos",
  "how-to-restore-wartime-correspondence-photos",
  "how-to-fix-overexposed-photos",
  "how-to-restore-old-wedding-anniversary-photos",
  "how-to-fix-yellowed-photos",
  "restore-moms-old-photos",
  "fix-blurry-face-in-photo",
  "how-to-restore-old-black-and-white-photos",
  "how-to-restore-old-military-photos",
  "restore-old-photos-iphone",
  "how-to-scan-damaged-photos",
  "how-to-restore-old-farm-photos",
  "how-to-fix-light-leaked-film",
  "how-to-restore-photos-as-a-gift",
  "best-photo-restoration-gift-for-mom",
  "how-to-restore-old-holiday-photos",
  "fix-blurry-passport-photo",
  "how-to-restore-polaroid-photos",
  "how-to-restore-old-immigration-photos",
  "how-to-organize-old-photos-digitally",
  "how-to-digitize-old-photos-at-home",
  "restore-victorian-era-photographs",
  "how-to-restore-black-and-white-wedding-photos",
  "how-to-restore-photos-multiple-damage",
  "how-to-fix-torn-and-missing-section-photos",
  "how-to-restore-old-daguerreotypes",
  "how-to-restore-old-real-photo-postcards",
  "restore-faded-color-photos-from-1980s",
  "fix-insect-damaged-photographs",
  "restore-old-photo-booth-strip-photos",
  "how-to-restore-slide-film-photos",
  "fix-humidity-damaged-photographs",
  "how-to-fix-double-exposure-photos",
  "how-to-restore-old-church-and-religious-photos",
  "fix-blurry-pet-photos",
  "fix-underexposed-old-photographs",
  "restore-1950s-color-photos",
  "restore-autochrome-color-photos",
  "restore-immigrant-ancestor-photos",
  "can-ai-restore-completely-destroyed-photos",
  "restore-native-american-historical-photos",
  "restore-cabinet-card-photographs",
  "restore-asian-american-heritage-photos",
  "restore-african-american-family-photos",
  "how-to-fix-photos-ruined-by-humidity",
  "fix-blurry-travel-photos",
  "restore-platinum-print-photos",
  "restore-1950s-kodak-prints",
  "fix-yellowed-photograph-paper",
  "restore-1960s-beatnik-photos",
  "fix-blurry-sports-photos",
  "how-to-restore-fire-damaged-photos",
  "fix-blurry-photos-from-security-cameras",
  "deepai-vs-letsenhance-comparison",
  "how-to-restore-baptism-and-christening-photos",
  "what-are-jpeg-artifacts-and-how-to-fix-them",
  "fix-stained-photographs",
  "fix-yellowed-photographs",
  "restore-glass-negatives-complete-guide",
  "fix-blurry-product-photos-for-etsy",
  "how-to-restore-victorian-era-portrait-photos",
  "restore-japanese-american-family-photos",
  "how-to-enhance-blurry-group-photos",
  "restore-puerto-rican-family-heritage-photos",
  "fix-silver-mirroring-damage",
  "restore-ripped-photographs",
  "restore-orphaned-photographs",
  "enhance-microfilm-photo-copies",
  "restore-ellis-island-photos",
  "restore-tintype-photographs",
  "restore-photos-from-old-photo-booths",
  "how-to-restore-military-service-photos",
  "how-to-fix-overexposed-wedding-photos",
  "how-to-restore-Victorian-era-cabinet-cards",
  "restore-1970s-disco-photos",
  "restore-cracked-photographs",
  "how-to-restore-old-polaroid-land-camera-photos",
  "how-to-colorize-japanese-american-internment-photos",
  "how-to-restore-childhood-photos-from-the-1970s",
  "restore-photos-with-torn-or-missing-pieces",
  "how-to-fix-grainy-low-light-photos",
  "how-to-restore-glass-plate-negatives",
  "how-to-enhance-blurry-screenshots-on-mac",
  "fix-chemical-damage-photos",
  "restore-orphaned-photos",
  "restore-cabinet-card-photos",
  "how-to-colorize-american-civil-war-photos",
  "fix-blurry-photos-from-point-and-shoot-cameras",
  "how-to-fix-grainy-photos-on-iphone",
  "restore-irish-american-family-heritage-photos",
  "how-to-restore-photo-albums",
  "fix-blurry-food-photos",
  "fix-blurry-video-screenshot",
  "how-to-fix-photo-after-screenshot",
  "how-to-restore-vintage-wedding-photos",
  "how-to-restore-beach-and-vacation-photos",
  "how-to-restore-holiday-family-photos",
  "how-to-restore-photos-after-natural-disaster",
  "how-to-restore-photos-of-historic-buildings",
  "restore-mold-damaged-photo-albums",
  "restore-gold-rush-photos",
  "fix-low-quality-profile-picture",
  "how-to-restore-old-iphone-photos",
  "restore-vintage-law-office-attorney-photos",
  "how-to-restore-photos-of-deceased-pets",
  "how-to-fix-noisy-concert-photos",
  "how-to-fix-photo-color-cast",
  "how-to-restore-black-and-white-photos",
  "how-to-restore-old-newspaper-clippings",
  "how-to-restore-silhouette-photos",
  "how-to-restore-photos-with-text",
  "how-to-restore-photo-missing-background",
  "fix-old-photo-water-stains",
  "fix-blurry-pet-photos-dogs-cats",
  "ai-photo-tools-for-insurance-appraisers",
  "fix-blurry-photos-from-security-dvr",
  "restore-japanese-american-internment-photos",
  "restore-native-american-family-photographs",
  "restore-greek-american-heritage-photos",
  "restore-german-american-heritage-photos",
  "restore-african-american-family-portrait",
  "fix-humidity-damaged-photo-collection",
  "restore-italian-american-heritage-photos",
  "restore-irish-american-family-photos",
  "restore-fire-damaged-photographs-guide",
  "fix-blurry-ultrasound-photo",
  "fix-blurry-photos-from-cheap-camera",
  "restore-film-grain-analog-photos",
  "how-to-restore-daguerreotypes-digitally",
  "fix-blurry-photos-from-photo-kiosk",
  "how-to-restore-tin-type-photos",
  "how-to-fix-dark-underexposed-photos",
  "deep-nostalgia-vs-photo-restoration",
  "how-to-digitize-old-photos",
  "how-to-fix-compression-in-discord-images",
  "how-to-enhance-photos-for-dating-apps",
  "how-to-restore-immigration-documents",
  "how-to-restore-tinted-sepia-photos",
  "restore-damaged-school-photos",
  "restore-old-pharmacy-drugstore-photos",
  "how-to-fix-pixelated-photos",
  "fix-blurry-background-in-photo",
  "restore-old-diner-restaurant-photos",
  "how-to-fix-photos-with-sun-damage",
  "how-to-restore-parents-anniversary-photos",
  "remini-vs-artimagehub",
  "how-to-combine-damaged-photo-fragments",
  "how-to-restore-old-baby-and-childhood-photos",
  "how-to-restore-early-digital-camera-photos",
  "fix-photo-quality-after-whatsapp-compression",
  "fix-blurry-photo-android",
  "how-to-colorize-1960s-civil-rights-photos",
  "myheritage-photo-enhancer-vs-artimagehub",
  "how-to-digitize-restore-slides",
  "how-to-restore-photos-world-war-2",
  "restore-vintage-worlds-fair-exposition-photos",
  "how-to-restore-photos-stored-in-basement",
  "restore-old-hardware-store-photos",
  "fix-dark-underexposed-photos",
  "forever-artisan-vs-artimagehub",
  "how-to-restore-old-family-photos-2026",
  "how-to-enhance-group-photo-resolution",
  "restore-old-golf-course-country-club-photos",
  "restore-old-sports-trophy-ceremony-photos",
  "iphone-old-photo-restoration",
  "restore-vintage-track-and-field-photos",
  "how-to-restore-immigration-document-photos",
  "restore-memorial-funeral-photos",
  "restore-wwii-soldier-photos",
  "restore-vintage-airshow-aviation-photos",
  "repair-photos-missing-corners",
  "restore-old-ice-hockey-team-photos",
  "restore-vintage-swim-meet-photos",
  "google-photos-old-photo-restoration",
  "restore-old-obituary-photos",
  "restore-old-barbershop-photos",
  "restore-old-school-yearbook-photos",
  "restore-old-ocean-liner-cruise-photos",
  "restore-old-christmas-photos",
  "fix-blurry-group-photo",
  "restore-carte-de-visite-photos",
  "how-to-restore-slides-and-negatives",
  "how-to-colorize-world-war-ii-home-front-photos",
  "restore-stereoscopic-photos",
  "restore-real-photo-postcards",
  "restore-1900s-edwardian-photos",
  "restore-european-immigrant-photos",
  "fix-grainy-indoor-photos",
  "why-are-my-photos-blurry-on-iphone",
  "fix-overexposed-vintage-photos",
  "restore-1910s-photographs",
  "restore-wwi-era-photographs",
  "restore-church-wedding-photos",
  "enhance-old-vacation-photos",
  "enhance-vintage-family-reunion-photos",
  "remini-vs-myheritage-deep-nostalgia-comparison",
  "restore-vintage-national-park-photos",
  "restore-old-graduation-photos",
  "restore-vintage-prom-pictures",
  "enhance-old-homestead-farm-photos",
  "how-to-enhance-photos-for-immigration-applications",
  "restore-military-photos",
  "photoshop-neural-vs-topaz-photo-ai-comparison",
  "how-to-colorize-space-age-photos",
  "enhance-old-birthday-party-photos",
  "enhance-old-rodeo-western-photos",
  "restore-vietnam-war-photos",
  "restore-first-communion-photos",
  "how-to-fix-motion-blur-in-photos",
  "restore-old-family-reunion-picnic-photos",
  "ai-tools-for-photo-printing-services",
  "jpeg-vs-png-vs-webp-photo-quality",
  "restore-school-photos",
  "how-to-enhance-photos-for-book-covers",
  "restore-latino-family-history-photos",
  "restore-vintage-quinceanera-photos",
  "restore-creased-folded-wedding-photos",
  "restore-hurricane-flood-damaged-photos",
  "fix-foxing-spots-vintage-photos",
  "enhance-product-photos-for-ecommerce",
  "how-to-colorize-korean-war-photos",
  "enhance-photos-without-photoshop",
  "restore-old-wedding-photos",
  "restore-vintage-horse-racing-photos",
  "restore-victorian-cabinet-card-photographs",
  "restore-korean-war-photos",
  "fix-security-camera-photo-quality",
  "fix-photo-quality-lost-after-email",
  "restore-vintage-diwali-family-photos",
  "how-to-colorize-photos-from-the-harlem-renaissance",
  "ai-photo-tools-for-podcast-hosts",
  "restore-photos-civil-war-era",
  "enhance-photo-for-canvas-wall-art",
  "restore-old-labor-union-photos",
  "restore-scandinavian-immigrant-family-photos",
  "how-to-colorize-photos-from-the-great-migration",
  "restore-chinese-new-year-celebration-photos",
  "restore-vintage-boxing-match-photos",
  "restore-old-cricket-team-photos",
  "restore-vintage-gymnastics-competition-photos",
  "restore-old-wedding-photos-ai-recovery",
  "restore-photo-for-obituary",
  "restore-old-class-school-photos",
  "restore-vintage-scout-troop-photos",
  "how-to-colorize-black-and-white-portraits",
  "restore-old-marching-band-photos",
  "how-to-enhance-old-school-photos",
  "restore-old-recipe-photos",
  "restore-vintage-softball-league-photos",
  "restore-vintage-wrestling-photos",
  "restore-photos-after-flood-or-hurricane",
  "restore-1960s-color-slide-photographs",
  "restore-1980s-polaroid-family-photos",
  "restore-old-jazz-blues-club-photos",
  "how-to-enhance-passport-photos-at-home",
  "restore-old-baby-shower-photos",
  "how-to-upscale-image-without-losing-quality",
  "why-are-my-photos-blurry-on-facebook",
  "restore-old-pet-family-photos",
  "how-to-colorize-old-black-and-white-photos",
  "restore-old-retirement-party-photos",
  "restore-1940s-wwii-era-family-photos",
  "restore-vintage-rugby-team-photos",
  "ai-tools-for-interior-designers",
  "restore-vintage-engineering-office-photos",
  "ai-photo-tools-for-real-estate-agents",
  "ai-tools-for-local-history-museums",
  "restore-old-anniversary-celebration-photos",
  "restore-vintage-tennis-club-photos",
  "restore-vintage-cycling-race-photos",
  "ai-photo-tools-for-museum-curators",
  "fix-dark-underexposed-photos-ai",
  "ai-photo-tools-for-journalists",
  "ai-tools-for-nursing-home-activities",
  "how-to-enhance-linkedin-profile-photo",
  "fix-church-directory-photos",
  "old-photo-damage-recovery-by-type-complete-guide",
  "restore-vintage-amateur-astronomy-photos",
  "restore-vintage-classic-car-show-photos",
  "restore-old-school-teacher-classroom-photos",
  "restore-old-ham-radio-amateur-radio-photos",
  "restore-old-community-theater-photos",
  "ai-photo-tools-for-documentary-filmmakers",
  "enhance-product-photos-diy",
  "restore-old-sweet-sixteen-birthday-photos",
  "ai-photo-tools-for-scrapbooking-enthusiasts",
  "fix-underexposed-dark-photos-ai",
  "restore-old-holiday-family-gathering-photos",
  "old-photo-restoration-by-decade-complete-index",
  "restore-photos-for-life-insurance-claims",
  "restore-old-farmhouse-kitchen-photos",
  "ai-photo-tools-for-wedding-planners",
  "how-to-repair-photo-borders-edges",
  "restore-old-barn-raising-community-photos",
  "how-to-digitize-and-restore-old-35mm-slides",
  "ai-tools-for-estate-sale-organizers",
  "fix-compression-artifacts-in-photos",
  "restore-vintage-architecture-studio-photos",
  "fix-photo-after-screenshot",
  "old-photo-restoration-for-genealogy",
  "restore-old-nursing-hospital-photos",
  "restore-chinese-immigrant-family-photos",
  "restore-photos-for-photo-book",
  "restore-photos-from-old-albums-guide",
  "restore-photos-without-computer",
  "restore-military-boot-camp-photos",
  "restore-ellis-island-immigration-photos",
  "restore-polish-immigrant-family-photos",
  "restore-wet-plate-collodion-photos",
  "colorize-civil-war-photos",
  "restore-sports-team-vintage-photos",
  "restore-jewish-family-heritage-photos",
  "restore-korean-war-family-photos-complete",
  "restore-great-depression-farm-photos",
  "restore-vietnam-era-soldier-photos",
  "restore-photos-on-iphone-guide",
  "restore-photos-ancestry-dna-match",
  "restore-microfilm-newspaper-photos",
  "restore-civil-war-era-photographs",
  "restore-baby-boom-era-photos",
  "restore-scandinavian-family-heritage-photos",
  "restore-roaring-twenties-portraits",
  "restore-photos-smoke-cigarette-damage",
  "restore-photos-for-museum-archive",
  "restore-newborn-baby-photos-guide",
  "restore-hispanic-latino-family-photos",
  "restore-photos-on-android-phone",
  "restore-photos-for-genealogy-research",
  "restore-high-school-graduation-photos",
  "fix-water-stained-family-photos",
  "colorize-1940s-wartime-photos",
  "restore-vintage-thanksgiving-photos",
  "restore-retirement-party-photos",
  "restore-prom-homecoming-photos",
  "restore-photos-with-tape-adhesive-damage",
  "restore-photos-genealogy-dna-testing",
  "restore-photos-from-old-negatives-complete",
  "restore-photos-for-documentary-film",
  "restore-photos-as-memorial-tribute",
  "restore-photos-acid-damage",
  "restore-memorial-portrait-photos",
  "restore-golden-anniversary-photos",
  "restore-first-communion-baptism-photos",
  "restore-family-christmas-photos-vintage",
  "restore-engagement-photos-vintage",
  "restore-college-graduation-photos",
  "restore-church-congregation-photos",
  "restore-childhood-birthday-photos",
  "restore-albumen-print-photographs",
  "restore-1970s-family-vacation-photos",
  "fix-photos-pest-insect-damage",
  "fix-cracked-emulsion-photos",
  "colorize-1920s-black-white-photos",
  "restore-photos-flood-damage-complete",
  "restore-1940s-home-front-photos",
  "restore-vintage-medical-doctor-photos",
  "how-to-colorize-jazz-age-photos",
  "restore-vintage-opera-performance-photos",
  "improve-photo-quality-for-dating-apps",
  "restore-old-police-department-photos",
  "enhance-photos-for-book-covers",
  "restore-victorian-cabinet-cards",
  "restore-1980s-birthday-party-photos",
  "restore-1960s-civil-rights-era-photos",
  "restore-1930s-great-depression-family-photos",
  "restore-1950s-suburban-family-photos",
  "restore-1920s-prohibition-era-photos",
  "preserve-restore-daguerreotype-photos",
  "restore-old-model-train-collector-photos",
  "ai-tools-for-professional-photographers",
  "restore-albums-from-the-1960s",
  "restore-old-harvest-season-photos",
  "restore-old-ballet-dance-recital-photos",
  "restore-grandparents-wedding-photos",
  "restore-old-firefighter-station-photos",
  "restore-old-newspaper-photos",
  "restore-childhood-photos-1990s",
  "how-to-colorize-1920s-photos",
  "restore-immigrant-family-photos-guide",
  "ai-tools-for-antique-dealers",
  "restore-1900s-portraits-complete-guide",
  "ai-photo-tools-for-genealogy-research",
  "old-photo-restoration-gifts",
  "fix-linkedin-photo-quality",
  "fix-grainy-photos-android",
  "restore-old-state-fair-livestock-photos",
  "fix-grainy-photos-old-digital-camera",
  "how-to-colorize-prohibition-era-photos",
  "ai-tools-for-event-photographers",
  "how-to-enhance-product-photos-for-etsy",
  "fix-photo-quality-for-print-on-demand",
  "how-to-improve-blurry-passport-scan",
  "restore-1910s-world-war-one-photos",
  "ai-tools-for-cosplay-photographers",
  "ai-tools-for-handmade-craft-sellers",
  "colorize-vintage-wedding-photos",
  "fix-photos-downloaded-from-icloud",
  "restore-photos-for-christmas",
  "how-to-colorize-vietnam-war-photos",
  "fix-photo-for-pinterest",
  "how-to-enhance-vintage-postcard-images",
  "how-to-colorize-civil-rights-movement-photos",
  "old-photo-restoration-before-after",
  "restore-childhood-photos-for-birthday-gifts",
  "photo-restoration-vs-enhancement",
  "remini-vs-myheritage-in-color",
  "fix-overexposed-washed-out-photos",
  "how-to-unblur-old-low-resolution-photos",
  "ai-tools-for-professional-genealogists",
  "ai-photo-tools-for-antique-book-collectors",
  "fix-tiktok-photo-quality",
  "how-to-colorize-black-and-white-photos",
  "unblur-photo-of-text",
  // --- batch-4 (T163 follow-up 2026-06-19): +37 quality pages, cap 693->730 ---
  "how-to-restore-old-photos-from-italy",
  "how-to-restore-old-photos-from-ukraine",
  "how-to-restore-old-photos-from-korea",
  "how-to-restore-old-photos-from-ireland",
  "how-to-restore-old-photos-with-mold-damage",
  "how-to-restore-old-photos-with-creases-and-folds",
  "how-to-restore-old-photos-of-deceased-relatives",
  "how-to-restore-old-photos-with-missing-corners",
  "how-to-restore-old-photos-without-photoshop",
  "artimagehub-vs-imagecolorizer",
  "artimagehub-vs-picwish",
  "artimagehub-vs-topaz-photo-ai",
  "how-to-restore-photos-from-the-victorian-era",
  "how-to-restore-photos-for-display",
  "how-to-fix-blurry-photos-iphone-14",
  "how-to-restore-photos-for-video",
  "how-to-restore-photos-from-the-korean-war-era",
  "how-to-restore-photos-from-the-great-depression",
  "how-to-restore-photos-from-old-film-negatives",
  "how-to-restore-photos-for-social-media",
  "how-to-restore-photos-for-a-book",
  "how-to-fix-blurry-photos-for-printing",
  "artimagehub-vs-photoleap",
  "how-to-fix-blurry-ipad-photos",
  "how-to-restore-1960s-photos",
  "how-to-restore-1940s-photos",
  "how-to-restore-1930s-photos",
  "how-to-restore-1920s-photos",
  "how-to-fix-blurry-selfies-from-old-phones",
  "how-to-enhance-photos-for-book-publishing",
  "how-to-colorize-photos-from-1950s-suburbia",
  "how-to-colorize-photos-from-the-edwardian-era",
  "how-to-colorize-photos-from-the-korean-war-era",
  "how-to-colorize-photos-from-the-spanish-civil-war",
  "how-to-enhance-photos-for-wikipedia",
  "how-to-enhance-photos-for-obituaries",
  "how-to-enhance-photos-for-memorial-services",
  // T190 GEO engine B (additive; cap 778->781, zero unpin/displacement).
  // 3 new damage-repair pages; pinned because the cap is pin-saturated so
  // newest-dated unpinned posts would otherwise be squeezed out.
  "repair-torn-photos",
  "fix-faded-old-photos",
  "fix-creased-photos",
]),
  de: new Set(["fix-photos-stuck-together"]),
  es: new Set([
    "photo-restoration-software-comparison",
    "artimagehub-vs-topaz-gigapixel",
    "artimagehub-vs-waifu2x",
    "enhance-old-newspaper-photos",
    "fix-photos-stuck-together",
    "fix-torn-photographs-ai-guide",
    "restore-grandmas-old-photos-mothers-day",
    "restore-photos-genealogy-dna-testing",
    "best-ai-photo-restoration-tools-2026-compared",
    "colorize-civil-war-photos",
    "how-to-restore-faded-color-photos-1970s",
  ]),
  ja: new Set(["fix-photos-stuck-together"]),
  ko: new Set(["fix-photos-stuck-together"]),
  "pt-BR": new Set([
    "artimagehub-vs-topaz-gigapixel",
    "artimagehub-vs-waifu2x",
    "restore-photos-for-documentary-film",
    "fix-cracked-emulsion-photos",
    "restore-grandmas-old-photos-mothers-day",
  ]),
};

function localeBlogDir(locale: BlogLocale | string): string {
  if (!locale || locale === "en") return postsDirectory;
  return path.join(postsDirectory, locale);
}

/**
 * Lightweight check for whether the EN parent post for a slug has `noIndex: true`
 * in its frontmatter. Used by the locale routes to inherit indexability from the
 * EN parent so a hreflang cluster never has the EN page noindex while its locale
 * variants stay index — Google flags that as a bad consistency signal. Reads
 * frontmatter only (no remark) so it's cheap to call from generateMetadata at
 * build time. Returns false when the EN file doesn't exist or YAML can't parse.
 */
export function getEnPostNoIndex(slug: string): boolean {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return false;
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.noIndex === true;
  } catch {
    return false;
  }
}

/**
 * Returns the list of non-EN locales that have a translated variant for the given slug.
 *
 * Used by both the EN root post page (to emit hreflang `languages` alternates) and the
 * locale post page (to emit reciprocal hreflang). Single source of truth — keep callers
 * pointed at this helper instead of re-implementing the disk walk.
 *
 * Returns [] if no translations exist (e.g. before Phase 1a content lands).
 */
export function getAvailableLocalesForSlug(slug: string): string[] {
  const available: string[] = [];
  for (const loc of SUPPORTED_LOCALES) {
    if (loc === "en") continue;
    const candidate = path.join(localeBlogDir(loc), `${slug}.md`);
    if (fs.existsSync(candidate)) {
      available.push(loc);
    }
  }
  return available;
}

const categoryFallbackImages: Record<string, string> = {
  "AI Technology": "/blog/ai-restoration-technology.webp",
  "Best Practices": "/blog/preserving-photos.webp",
  Comparison: "/blog/artimagehub-vs-remini.webp",
  Comparisons: "/blog/artimagehub-vs-remini.webp",
  "Color Restoration": "/blog/before-after-examples.webp",
  "Era-Specific Restoration": "/blog/old-photo-guide.webp",
  "Family History": "/blog/preserving-photos.webp",
  Features: "/blog/ai-restoration-technology.webp",
  Genealogy: "/blog/preserving-photos.webp",
  Guides: "/blog/old-photo-guide.webp",
  "Historical Photography": "/blog/old-photo-guide.webp",
  "Historical Restoration": "/blog/old-photo-guide.webp",
  "Photo Damage Repair": "/blog/old-photo-guide.webp",
  "Photo Enhancement": "/blog/before-after-examples.webp",
  "Photo Preservation": "/blog/preserving-photos.webp",
  "Photo Restoration": "/blog/old-photo-guide.webp",
  Showcase: "/blog/before-after-examples.webp",
  Technology: "/blog/ai-restoration-technology.webp",
  "Tips & Guides": "/blog/old-photo-guide.webp",
  "Use Cases": "/blog/before-after-examples.webp",
};

// Optional schema-augmenting frontmatter fields. Markdown-embedded JSON-LD
// blocks get stripped by the renderer, so these declarative fields drive
// page-level <script type="application/ld+json"> injection instead. Used by
// "best …" / "X vs Y" / FAQ-rich posts so Google sees FAQPage / ItemList /
// Review schemas without authors hand-writing JSON-LD in the body.
export interface BlogFaqItem {
  q: string;
  a: string;
}
export interface BlogItemListEntry {
  name: string;
  url?: string;
  description?: string;
}
export interface BlogAggregateRating {
  rating: number;
  count: number;
}
export interface BlogHowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  category: string;
  tags: string[];
  image: string;
  coverColor: string;
  coverEmoji?: string;
  content: string;
  readingTime: number;
  headings: { id: string; text: string; level: number }[];
  noIndex?: boolean;
  faq?: BlogFaqItem[];
  itemList?: BlogItemListEntry[];
  aggregateRating?: BlogAggregateRating;
  reviewedItem?: string;
  howTo?: BlogHowToStep[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  image: string;
  coverColor: string;
  coverEmoji?: string;
  readingTime: number;
  noIndex?: boolean;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function extractHeadings(
  htmlContent: string
): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    headings.push({ id, text, level });
  }

  return headings;
}

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h([2-3])>/gi,
    (_match, level, attrs, text, closeLevel) => {
      const plainText = text.replace(/<[^>]*>/g, "").trim();
      const id = plainText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      return `<h${level}${attrs} id="${id}">${text}</h${closeLevel}>`;
    }
  );
}

const defaultCoverColors: Record<string, string> = {
  Technology: "from-blue-600 via-indigo-700 to-purple-800",
  Guides: "from-emerald-600 via-teal-700 to-cyan-800",
  Comparisons: "from-orange-500 via-amber-600 to-yellow-700",
  "Tips & Guides": "from-rose-500 via-pink-600 to-fuchsia-700",
  Showcase: "from-violet-600 via-purple-700 to-indigo-800",
};

function assetExists(assetPath: string): boolean {
  return fs.existsSync(path.join(publicDirectory, assetPath.replace(/^\//, "")));
}

function resolvePostImage(image: string | undefined, category: string): string {
  const candidates: string[] = [];

  if (image?.trim()) {
    const trimmedImage = image.trim();
    const parsed = path.posix.parse(trimmedImage);
    candidates.push(trimmedImage);

    for (const ext of [".webp", ".jpg", ".jpeg", ".png"]) {
      if (ext !== parsed.ext) {
        candidates.push(path.posix.join(parsed.dir, `${parsed.name}${ext}`));
      }
    }
  }

  candidates.push(categoryFallbackImages[category] || fallbackBlogImage, fallbackBlogImage);

  for (const candidate of candidates) {
    if (assetExists(candidate)) {
      return candidate;
    }
  }

  return fallbackBlogImage;
}

// Some autoship-translated locale posts ship with broken frontmatter
// (e.g. missing the closing `---` so the body bleeds into the YAML and
// title/publishedAt/category never populate). Treat any such post as
// data-broken and exclude it — otherwise sitemap.xml prerender hits
// `new Date(undefined).toISOString()` (Invalid Date) and getRelatedPosts
// hits `undefined.toLowerCase()` from the locale sibling iteration.
function isUsablePost(data: { title?: unknown; publishedAt?: unknown }): boolean {
  if (typeof data.title !== "string" || data.title.trim() === "") return false;
  if (typeof data.publishedAt !== "string") return false;
  const ts = new Date(data.publishedAt);
  return !Number.isNaN(ts.getTime());
}

export async function getAllPosts(locale: BlogLocale | string = "en"): Promise<BlogPostMeta[]> {
  const dir = localeBlogDir(locale);
  if (!fs.existsSync(dir)) {
    return [];
  }

  const fileNames = fs.readdirSync(dir);
  const posts: BlogPostMeta[] = [];
  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    if (!isUsablePost(data)) continue;

    posts.push({
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      authorRole: data.authorRole,
      category: data.category,
      tags: data.tags || [],
      image: resolvePostImage(data.image, data.category || ""),
      coverColor:
        data.coverColor ||
        defaultCoverColors[data.category] ||
        "from-gray-700 to-gray-900",
      coverEmoji: data.coverEmoji,
      readingTime: calculateReadingTime(content),
      noIndex: data.noIndex === true,
    });
  }

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  if (EMERGENCY_STATIC_EXPORT) {
    const normalizedLocale = (locale || "en") as BlogLocale;
    const pinnedSlugs = EMERGENCY_STATIC_SLUGS_BY_LOCALE[normalizedLocale];
    const pinnedPosts = pinnedSlugs
      ? sortedPosts.filter((post) => pinnedSlugs.has(post.slug))
      : [];
    const remainingPosts = pinnedSlugs
      ? sortedPosts.filter((post) => !pinnedSlugs.has(post.slug))
      : sortedPosts;
    // fail-loud: a pinned slug with no matching post = silent 404 in static export.
    const foundSlugs = new Set(pinnedPosts.map((post) => post.slug));
    const missingPins = pinnedSlugs
      ? [...pinnedSlugs].filter((slug) => !foundSlugs.has(slug))
      : [];
    if (missingPins.length > 0) {
      console.warn(
        `[blog] emergency ${normalizedLocale} static pin(s) not found, will 404: ${missingPins.join(", ")}`
      );
    }
    const limit = normalizedLocale === "en"
      ? EMERGENCY_STATIC_POST_LIMIT
      : EMERGENCY_LOCALE_STATIC_POST_LIMIT;
    return [...pinnedPosts, ...remainingPosts].slice(0, limit);
  }

  return sortedPosts;
}

export async function getPostBySlug(slug: string, locale: BlogLocale | string = "en"): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(localeBlogDir(locale), `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html, { allowDangerousHtml: true }).process(content);
    let contentHtml = processedContent.toString();

    const headings = extractHeadings(contentHtml);
    contentHtml = addHeadingIds(contentHtml);

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      authorRole: data.authorRole,
      authorBio: data.authorBio,
      category: data.category,
      tags: data.tags || [],
      image: resolvePostImage(data.image, data.category || ""),
      coverColor:
        data.coverColor ||
        defaultCoverColors[data.category] ||
        "from-gray-700 to-gray-900",
      coverEmoji: data.coverEmoji,
      content: contentHtml,
      readingTime: calculateReadingTime(content),
      headings,
      noIndex: data.noIndex === true,
      // Normalize frontmatter to internal schema: accept both `q`/`a` and
      // `question`/`answer` for FAQ items (most existing posts use the latter
      // — silently produced empty FAQPage JSON-LD prior to 2026-05-04 fix).
      faq: Array.isArray(data.faq)
        ? data.faq
            .map((item: { q?: string; a?: string; question?: string; answer?: string }) => ({
              q: item.q ?? item.question ?? "",
              a: item.a ?? item.answer ?? "",
            }))
            .filter((item) => item.q && item.a)
        : undefined,
      itemList: Array.isArray(data.itemList)
        ? data.itemList.map(
            (item: { name?: string; title?: string; url?: string; description?: string }) => ({
              name: item.name ?? item.title ?? "",
              ...(item.url ? { url: item.url } : {}),
              ...(item.description ? { description: item.description } : {}),
            }),
          )
        : undefined,
      // Accept both `rating`/`count` and `ratingValue`/`ratingCount` for AggregateRating
      aggregateRating: (() => {
        const ar = data.aggregateRating;
        if (!ar) return undefined;
        const rating =
          typeof ar.rating === "number"
            ? ar.rating
            : typeof ar.ratingValue === "number"
              ? ar.ratingValue
              : undefined;
        const count =
          typeof ar.count === "number"
            ? ar.count
            : typeof ar.ratingCount === "number"
              ? ar.ratingCount
              : undefined;
        return rating !== undefined && count !== undefined ? { rating, count } : undefined;
      })(),
      reviewedItem:
        typeof data.reviewedItem === "string"
          ? data.reviewedItem
          : data.reviewedItem && typeof data.reviewedItem.name === "string"
            ? data.reviewedItem.name
            : undefined,
      howTo: Array.isArray(data.howTo)
        ? data.howTo
            .map((step: { name?: string; title?: string; text?: string; description?: string; url?: string }) => ({
              name: step.name ?? step.title ?? "",
              text: step.text ?? step.description ?? "",
              ...(step.url ? { url: step.url } : {}),
            }))
            .filter((step) => step.name && step.text)
        : undefined,
    };
  } catch {
    return null;
  }
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3,
  tags: string[] = [],
  locale: BlogLocale | string = "en"
): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts(locale);
  // Defensive: even with the isUsablePost filter, callers may pass an
  // undefined category/tag from a partially-translated post that still
  // satisfies title+publishedAt. Coerce so a single malformed sibling
  // can't crash the prerender of the whole locale.
  const normCategory = (category ?? "").toLowerCase().trim();
  const normTags = new Set(
    (tags ?? [])
      .filter((t): t is string => typeof t === "string")
      .map((t) => t.toLowerCase().trim()),
  );

  return posts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const pCategory = typeof p.category === "string" ? p.category.toLowerCase().trim() : "";
      const catMatch = pCategory && pCategory === normCategory ? 2 : 0;
      const pTags = Array.isArray(p.tags) ? p.tags : [];
      const tagOverlap = pTags.filter(
        (t): t is string => typeof t === "string" && normTags.has(t.toLowerCase().trim()),
      ).length;
      return { post: p, score: catMatch + tagOverlap };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime())
    .slice(0, limit)
    .map((x) => x.post);
}
