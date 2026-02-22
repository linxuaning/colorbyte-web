#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.artimagehub.com';
const API_ENDPOINT = `${SITE_URL}/api/indexnow`;

// Get all blog post slugs
function getAllBlogSlugs() {
  const blogDir = path.join(__dirname, '../src/content/blog');
  const files = fs.readdirSync(blogDir);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

// Build URL list
function buildUrlList() {
  const slugs = getAllBlogSlugs();

  const urls = [
    '/',
    '/old-photo-restoration',
    '/photo-colorizer',
    '/photo-enhancer',
    '/blog',
    '/about',
    '/resources',
    '/privacy',
    '/terms',
    '/sitemap-html',
    ...slugs.map(slug => `/blog/${slug}`)
  ];

  return urls;
}

// Submit to IndexNow
async function submitToIndexNow() {
  const urls = buildUrlList();

  console.log(`📊 Preparing to submit ${urls.length} URLs to IndexNow...`);
  console.log(`📍 Site: ${SITE_URL}`);
  console.log('');

  // Split into batches of 100 (IndexNow limit is 10,000 but we'll be conservative)
  const batchSize = 100;
  const batches = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  console.log(`📦 Split into ${batches.length} batch(es)`);
  console.log('');

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
      } else {
        console.error(`❌ Batch ${i + 1} failed:`, data.error || data);
      }
    } catch (error) {
      console.error(`❌ Batch ${i + 1} error:`, error.message);
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
  console.log('');
  console.log('⏳ Search engines will be notified within 24 hours');
}

// Run
submitToIndexNow().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
