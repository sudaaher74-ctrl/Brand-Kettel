import { NextResponse } from 'next/server';

/**
 * Collector for Content-Security-Policy violation reports.
 *
 * The policy ships as Content-Security-Policy-Report-Only, so browsers POST
 * here instead of blocking anything. Read the logs for a week; once nothing
 * legitimate is being reported, rename the header to Content-Security-Policy
 * in next.config.mjs to start enforcing.
 *
 * This endpoint is public by necessity (browsers send reports unauthenticated),
 * so it accepts nothing but a small JSON body, never echoes the body back, and
 * always answers 204.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 16 * 1024;

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get('content-length') ?? 0);
    if (length > MAX_BODY_BYTES) {
      return new NextResponse(null, { status: 413 });
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return new NextResponse(null, { status: 413 });
    }

    const parsed = JSON.parse(raw) as Record<string, unknown>;
    // Browsers send either the legacy `csp-report` shape or a Reporting API array.
    const reports = Array.isArray(parsed) ? parsed : [parsed['csp-report'] ?? parsed];

    for (const report of reports) {
      const r = (report ?? {}) as Record<string, unknown>;
      const body = (r.body ?? r) as Record<string, unknown>;
      console.warn('[csp-report]', {
        documentUri: body['document-uri'] ?? body.documentURL,
        violatedDirective: body['violated-directive'] ?? body.effectiveDirective,
        blockedUri: body['blocked-uri'] ?? body.blockedURL,
        disposition: body.disposition,
      });
    }
  } catch {
    // A malformed report is not worth a 4xx round trip; drop it silently.
  }

  return new NextResponse(null, { status: 204 });
}
