#!/usr/bin/env node
/* eslint-disable */

// One-off IndexNow submission for the 2026-05-10 buyer-guide batch.
// 8 new comparison pages replicating the winning /best-photo-restoration-software
// template that converted Rich Horan via DDG organic on 2026-05-09.
// Run after deploy: node scripts/submit-buyer-guide-batch-2026-05-10.js

const SITE_URL = 'https://www.artimagehub.com';
const API_ENDPOINT = `${SITE_URL}/api/indexnow`;

const NEW_URLS = [
  '/artimagehub-vs-remini',
  '/artimagehub-vs-myheritage',
  '/artimagehub-vs-vivid-pix',
  '/artimagehub-vs-photomyne',
  '/artimagehub-vs-yodayo',
  '/best-photo-colorization-tool',
  '/best-old-photo-enhancer',
  '/photo-restoration-app-comparison',
];

async function submit() {
  console.log(`📊 Submitting ${NEW_URLS.length} buyer-guide pages to IndexNow...`);
  console.log(`📍 Site: ${SITE_URL}`);
  NEW_URLS.forEach((u) => console.log(`  - ${u}`));
  console.log('');

  try {
    const res = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls: NEW_URLS }),
    });

    const text = await res.text();
    if (!res.ok) {
      console.error(`❌ HTTP ${res.status}: ${text}`);
      process.exit(1);
    }

    console.log(`✅ ${res.status}`);
    console.log(text);
  } catch (err) {
    console.error('❌ Submit failed:', err.message);
    process.exit(1);
  }
}

submit();
