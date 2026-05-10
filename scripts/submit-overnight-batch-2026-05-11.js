#!/usr/bin/env node
/* eslint-disable */

// Overnight 2026-05-11 IndexNow batch — pings Bing/Yandex for:
// 1. apex i18n homepages (5/10 ab1f19c just shipped — was EN-only before)
// 2. GEO phase 1 apex pages (5/10 80741cd H2 question format applied)
// 3. zh-CN locale tool pages (Baidu route)
// Per memory: Bing CTR 4.7% > Google 2.1%, prioritize Bing.

const SITE_URL = 'https://www.artimagehub.com';
const API_ENDPOINT = `${SITE_URL}/api/indexnow`;

const URLS = [
  // 1. apex i18n homepages (KO/JA/etc just localized 5/10 ab1f19c)
  '/ko',
  '/ja',
  '/es',
  '/pt-BR',
  '/fr',
  '/de',
  '/zh-CN',

  // 2. apex tool pages (GEO phase 1 H2 question + FAQ schema landed)
  '/old-photo-restoration',
  '/photo-colorizer',
  '/photo-enhancer',
  '/photo-denoiser',
  '/photo-deblurrer',
  '/jpeg-artifact-remover',

  // 3. KO/JA tool pages (GEO benefit — Korean/Japanese SERPs)
  '/ko/old-photo-restoration',
  '/ja/old-photo-restoration',
  '/ko/photo-colorizer',
  '/ja/photo-colorizer',

  // 4. zh-CN locale apex + tools (Baidu route)
  '/zh-CN/old-photo-restoration',
  '/zh-CN/photo-colorizer',
  '/zh-CN/photo-enhancer',
];

async function submit() {
  console.log(`📊 Submitting ${URLS.length} URLs to IndexNow (Bing/Yandex)...`);
  URLS.forEach((u) => console.log(`  - ${u}`));
  console.log('');
  try {
    const res = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls: URLS }),
    });
    const text = await res.text();
    console.log(`${res.ok ? '✅' : '❌'} ${res.status}`);
    console.log(text.slice(0, 1500));
  } catch (e) {
    console.error('❌', e.message);
    process.exit(1);
  }
}

submit();
