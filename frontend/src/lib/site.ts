/**
 * Single source of truth for the canonical production origin.
 *
 * The production build was emitting `http://localhost:3000` into every
 * `<link rel="canonical">`, `og:url` and `og:image` because
 * `NEXT_PUBLIC_SITE_URL` resolved to a localhost value at build time.
 * A missing-or-empty check alone is not enough — a *wrongly set* env var
 * reintroduces the bug — so any loopback origin is rejected outright and
 * the hardcoded production origin wins.
 */
export const PRODUCTION_SITE_URL = 'https://www.brandkettle.co.in';

const LOOPBACK_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1', '[::1]']);

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return PRODUCTION_SITE_URL;

  try {
    const parsed = new URL(raw);
    // Never let a loopback origin leak into canonical/OG tags.
    if (LOOPBACK_HOSTS.has(parsed.hostname)) return PRODUCTION_SITE_URL;
    // Only http(s) origins are meaningful here.
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return PRODUCTION_SITE_URL;
    // Strip any trailing slash so `${SITE_URL}/path` never doubles up.
    return parsed.origin;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();

/** Absolute URL builder for JSON-LD and anywhere a relative URL is not allowed. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE_URL).toString();
}

/** Backend API origin. Server-side only in production; falls back to the local dev server. */
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
