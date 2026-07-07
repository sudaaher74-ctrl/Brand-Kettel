import { Request, Response, NextFunction } from 'express';
import { ADMIN_COOKIE, computeAdminToken, safeEqual } from '../lib/auth';

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const token = req.cookies?.[ADMIN_COOKIE];
  if (!token) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }
  const expected = computeAdminToken();
  if (!expected || !safeEqual(token, expected)) {
    res.status(401).json({ error: 'Invalid or expired session' });
    return;
  }
  next();
}
