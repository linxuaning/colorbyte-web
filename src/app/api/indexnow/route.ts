import { NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY || '7f8b9c2d4e5a6f1b3c8d9e0a1b2c3d4e';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://artimagehub.com';

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Submit to Bing/Yandex via IndexNow
    const indexNowPayload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls.map(url =>
        url.startsWith('http') ? url : `${SITE_URL}${url}`
      ),
    };

    // Submit to IndexNow (Bing & Yandex)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(indexNowPayload),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: `Submitted ${urls.length} URL(s) to IndexNow`,
        urls: indexNowPayload.urlList,
      });
    } else {
      const errorText = await response.text();
      console.error('IndexNow submission failed:', errorText);
      return NextResponse.json(
        {
          success: false,
          error: 'IndexNow submission failed',
          details: errorText
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    indexNowKey: INDEXNOW_KEY,
    siteUrl: SITE_URL,
  });
}
