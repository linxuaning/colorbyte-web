export const dynamic = "force-dynamic";

const API_BASE = (
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.PAYMENT_API_URL ||
  "https://api.artimagehub.com"
).trim();

export async function POST(request: Request) {
  const body = await request.text();

  try {
    const upstream = await fetch(`${API_BASE}/api/payment/dodo-create-checkout`, {
      method: "POST",
      headers: {
        "Content-Type": request.headers.get("content-type") || "application/json",
      },
      body,
      signal: AbortSignal.timeout(55000),
      cache: "no-store",
    });

    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
        "Cache-Control": "no-store",
        "X-Checkout-Proxy": "vercel",
      },
    });
  } catch (err) {
    return Response.json(
      {
        detail:
          err instanceof Error
            ? `Checkout proxy failed: ${err.message}`
            : "Checkout proxy failed.",
      },
      {
        status: 504,
        headers: {
          "Cache-Control": "no-store",
          "X-Checkout-Proxy": "vercel",
        },
      },
    );
  }
}

