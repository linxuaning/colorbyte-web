export const dynamic = "force-dynamic";

export async function GET() {
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "https://backend.artimagehub.com").trim();
  try {
    const res = await fetch(`${apiUrl}/health`, {
      signal: AbortSignal.timeout(12000),
    });
    const body = await res.json().catch(() => ({}));
    return Response.json({ ok: res.ok, status: res.status, backend: body, ts: Date.now() });
  } catch (e) {
    return Response.json({ ok: false, error: String(e), ts: Date.now() }, { status: 200 });
  }
}
