// IndexNow 批量提交脚本 - 浏览器版本
// 在 https://colorbyte.vercel.app 的浏览器 Console 中执行

(async function submitToIndexNow() {
  const SITE_URL = 'https://colorbyte.vercel.app';
  const API_ENDPOINT = '/api/indexnow';

  // 所有博客文章的 slug（122篇）
  const blogSlugs = [
    "ai-photo-restoration-guide",
    "restore-old-photos-free",
    "colorize-black-white-photos",
    "restore-faded-photos",
    "photo-restoration-vs-remini",
    "restore-damaged-photos-ai",
    "photo-restoration-before-after",
    "best-photo-restoration-software",
    "how-ai-photo-restoration-works",
    "preserving-family-history-photos",
    "ai-photo-colorization-accuracy",
    "photo-restoration-tips",
    "vintage-photo-restoration",
    "old-family-photos-restore",
    "ai-vs-manual-restoration",
    "photo-scanning-tips",
    "daguerreotype-restoration",
    "cabinet-card-restoration",
    "tintype-photo-restoration",
    "restore-sepia-photos",
    "fix-scratched-photos",
    "remove-photo-creases",
    "fix-water-damaged-photos",
    "restore-sun-faded-photos",
    "photo-noise-reduction",
    "enhance-blurry-photos",
    "photo-sharpening-techniques",
    "upscale-photos-ai",
    "increase-photo-resolution",
    "photo-enhancement-guide",
    "black-white-colorization-guide",
    "colorize-historical-photos",
    "ai-colorization-vs-manual",
    "photo-colorization-accuracy",
    "colorize-family-photos",
    "restore-1800s-photos",
    "restore-1900s-photos",
    "restore-1920s-photos",
    "restore-1940s-photos",
    "restore-1950s-photos",
    "restore-1960s-photos",
    "restore-1970s-photos",
    "restore-polaroid-photos",
    "fix-kodachrome-fading",
    "restore-slide-photos",
    "digitize-old-photos",
    "photo-archiving-guide",
    "preserve-photo-albums",
    "photo-storage-best-practices",
    "prevent-photo-deterioration",
    "organize-family-photos",
    "photo-metadata-guide",
    "genealogy-photo-tips",
    "funeral-photo-restoration",
    "wedding-photo-restoration",
    "military-photo-restoration",
    "school-photo-restoration",
    "passport-photo-restoration",
    "newspaper-clipping-restoration",
    "photo-collage-restoration",
    "panorama-photo-restoration",
    "large-format-photo-restoration",
    "photo-print-restoration",
    "photo-negative-restoration",
    "photo-slide-restoration",
    "35mm-photo-restoration",
    "medium-format-restoration",
    "large-format-restoration",
    "instant-photo-restoration",
    "digital-photo-restoration",
    "scanned-photo-enhancement",
    "photo-copyright-restoration",
    "photo-ethics-restoration",
    "photo-privacy-guide",
    "photo-backup-strategy",
    "cloud-photo-storage",
    "photo-scanning-resolution",
    "photo-file-formats",
    "jpeg-vs-png-photos",
    "raw-photo-processing",
    "photo-color-correction",
    "photo-exposure-fix",
    "photo-contrast-adjustment",
    "photo-brightness-fix",
    "photo-saturation-guide",
    "photo-white-balance",
    "photo-tone-curves",
    "photo-levels-adjustment",
    "photo-cropping-guide",
    "photo-straightening",
    "photo-perspective-correction",
    "remove-photo-background",
    "photo-object-removal",
    "photo-red-eye-removal",
    "photo-blemish-removal",
    "photo-wrinkle-smoothing",
    "photo-skin-retouching",
    "photo-teeth-whitening",
    "photo-eye-enhancement",
    "photo-makeup-enhancement",
    "photo-hair-enhancement",
    "photo-clothing-fix",
    "photo-jewelry-enhancement",
    "photo-tattoo-removal",
    "photo-scar-removal",
    "photo-face-swap",
    "photo-age-progression",
    "photo-age-regression",
    "photo-gender-swap",
    "photo-style-transfer",
    "photo-artistic-effects",
    "photo-filter-guide",
    "photo-preset-guide",
    "photo-batch-processing",
    "photo-automation-guide",
    "photo-workflow-optimization",
    "photo-quality-assessment",
    "photo-print-preparation",
    "photo-web-optimization",
    "photo-social-media-sizing",
    "photo-watermarking-guide",
    "best-ai-image-upscaler-2026",
    "restore-cabinet-card-photographs",
    "photo-colorization-tutorial",
    "colorization-accuracy-tips",
    "fix-color-faded-pictures"
  ];

  const urls = [
    '/',
    '/old-photo-restoration',
    '/blog',
    '/about',
    '/resources',
    '/privacy',
    '/terms',
    '/sitemap-html',
    ...blogSlugs.map(slug => `/blog/${slug}`)
  ];

  console.log(`📊 Preparing to submit ${urls.length} URLs to IndexNow...`);
  console.log(`📍 Site: ${SITE_URL}`);
  console.log('');

  // Split into batches of 100
  const batchSize = 100;
  const batches = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  console.log(`📦 Split into ${batches.length} batch(es)`);
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`🚀 Submitting batch ${i + 1}/${batches.length} (${batch.length} URLs)...`);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: batch }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log(`✅ Batch ${i + 1} submitted successfully`);
        console.log(`   Submitted URLs:`, data.urls.slice(0, 3).join(', '), '...');
        successCount++;
      } else {
        console.error(`❌ Batch ${i + 1} failed:`, data.error || data);
        failCount++;
      }
    } catch (error) {
      console.error(`❌ Batch ${i + 1} error:`, error.message);
      failCount++;
    }

    // Small delay between batches
    if (i < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log('');
  console.log('✨ IndexNow submission complete!');
  console.log('');
  console.log('📋 Summary:');
  console.log(`   Total URLs: ${urls.length}`);
  console.log(`   Main pages: ${urls.filter(u => !u.startsWith('/blog/')).length}`);
  console.log(`   Blog posts: ${urls.filter(u => u.startsWith('/blog/') && u !== '/blog').length}`);
  console.log(`   Success: ${successCount} batch(es)`);
  console.log(`   Failed: ${failCount} batch(es)`);
  console.log('');
  console.log('⏳ Search engines (Bing, Yandex) will be notified within 24 hours');
  console.log('📌 Note: Google does not support IndexNow - use Google Search Console instead');
})();
