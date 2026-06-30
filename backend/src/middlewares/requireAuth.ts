import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

const ADMIN_COOKIE = 'brandkettle_admin_token';

function computeAdminToken() {
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  const appSecret = process.env.APP_SECRET || 'fallback-secret-for-dev';
  return crypto.createHash('sha256').update(`${adminPassword}:${appSecret}`).digest('hex');
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  next();
}
