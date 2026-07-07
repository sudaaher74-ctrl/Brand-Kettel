import crypto from 'crypto';

export const ADMIN_COOKIE = 'brandkettle_admin_token';

/**
 * Computes the admin session token. Both ADMIN_PASSWORD and APP_SECRET must be
 * set to strong, secret values — there is no insecure fallback. If either is
 * missing the process refuses to authenticate anyone.
 */
export function computeAdminToken(): string | null {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const appSecret = process.env.APP_SECRET;
  if (!adminPassword || !appSecret) return null;
  return crypto.createHash('sha256').update(`${adminPassword}:${appSecret}`).digest('hex');
}

/** Constant-time comparison to avoid leaking the token via timing. */
export function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
