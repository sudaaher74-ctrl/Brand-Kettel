import { Request } from 'express';
import { ADMIN_COOKIE, computeAdminToken, safeEqual } from '../lib/auth';

/**
 * Non-blocking variant of requireAuth: reports whether the caller holds a valid
 * admin session without rejecting the request.
 *
 * Used by endpoints the admin UI and the public site share, so the public gets
 * the published subset while an authenticated admin still sees drafts.
 */
export function isAuthenticated(req: Request): boolean {
  const token = req.cookies?.[ADMIN_COOKIE];
  if (!token) return false;
  const expected = computeAdminToken();
  return Boolean(expected) && safeEqual(token, expected as string);
}
