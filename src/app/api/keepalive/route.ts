export const dynamic = "force-dynamic";

export async function GET() {
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "https://api.artimagehub.com").trim();
  try {
    const [healthRes, paymentRes] = await Promise.all([
      fetch(`${apiUrl}/health`, {
        signal: AbortSignal.timeout(12000),
        cache: "no-store",
      }),
      fetch(`${apiUrl}/api/payment/dodo-health`, {
        signal: AbortSignal.timeout(12000),
        cache: "no-store",
      }),
    ]);
    const [healthBody, paymentBody] = await Promise.all([
      healthRes.json().catch(() => ({})),
      paymentRes.json().catch(() => ({})),
    ]);
    return Response.json({
      ok: healthRes.ok && paymentRes.ok,
      status: healthRes.status,
      payment_status: paymentRes.status,
      backend: healthBody,
      payment: paymentBody,
      ts: Date.now(),
    });
  } catch (e) {
    return Response.json({ ok: false, error: String(e), ts: Date.now() }, { status: 200 });
  }
}
