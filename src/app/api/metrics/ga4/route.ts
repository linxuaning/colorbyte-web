/**
 * GA4 Data API — daily UV endpoint
 *
 * GET /api/metrics/ga4?days=7
 *
 * Env vars required (set in Vercel dashboard after andy provides credentials):
 *   GA4_CREDENTIALS_JSON  — full service account JSON as string
 *   GA4_PROPERTY_ID       — numeric GA4 property ID (e.g. "123456789")
 *
 * Protected by internal key header:
 *   x-internal-key: artimagehub-internal-2026
 */

import { NextResponse } from 'next/server';
import { createSign } from 'crypto';

const INTERNAL_KEY = 'artimagehub-internal-2026';

interface ServiceAccountCreds {
  client_email: string;
  private_key: string;
  token_uri: string;
}

/** Build a signed RS256 JWT for Google service account auth. */
function buildJwt(creds: ServiceAccountCreds, scope: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({
      iss: creds.client_email,
      scope,
      aud: creds.token_uri,
      iat: now,
      exp: now + 3600,
    })
  ).toString('base64url');

  const unsigned = `${header}.${payload}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(creds.private_key, 'base64url');
  return `${unsigned}.${sig}`;
}

/** Exchange a signed JWT for a Google OAuth access token. */
async function getAccessToken(creds: ServiceAccountCreds): Promise<string> {
  const jwt = buildJwt(creds, 'https://www.googleapis.com/auth/analytics.readonly');
  const resp = await fetch(creds.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Token exchange failed (${resp.status}): ${text.slice(0, 200)}`);
  }
  const data = await resp.json() as { access_token: string };
  return data.access_token;
}

export async function GET(request: Request) {
  // Auth check
  const key = request.headers.get('x-internal-key');
  if (key !== INTERNAL_KEY) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const credsJson = process.env.GA4_CREDENTIALS_JSON;
  const propertyId = process.env.GA4_PROPERTY_ID;

  if (!credsJson || !propertyId) {
    return NextResponse.json(
      { error: 'GA4_CREDENTIALS_JSON and GA4_PROPERTY_ID are not configured' },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const days = Math.min(parseInt(searchParams.get('days') ?? '7', 10), 90);

  let creds: ServiceAccountCreds;
  try {
    creds = JSON.parse(credsJson) as ServiceAccountCreds;
  } catch {
    return NextResponse.json({ error: 'GA4_CREDENTIALS_JSON is not valid JSON' }, { status: 503 });
  }

  try {
    const token = await getAccessToken(creds);

    const body = {
      dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'conversions' },
      ],
      orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }],
    };

    const resp = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`GA4 API error (${resp.status}): ${text.slice(0, 300)}`);
    }

    const raw = await resp.json() as {
      rows?: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }[];
    };

    const rows = (raw.rows ?? []).map((r) => ({
      date: r.dimensionValues[0].value,
      uv: parseInt(r.metricValues[0].value, 10),
      sessions: parseInt(r.metricValues[1].value, 10),
      conversions: parseInt(r.metricValues[2].value, 10),
    }));

    const totalUv = rows.reduce((s, r) => s + r.uv, 0);
    const totalConversions = rows.reduce((s, r) => s + r.conversions, 0);

    return NextResponse.json({
      property_id: propertyId,
      days,
      total_uv: totalUv,
      total_conversions: totalConversions,
      daily: rows,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
