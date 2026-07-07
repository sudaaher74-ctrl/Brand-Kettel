import { Router } from 'express';
import { ADMIN_COOKIE, computeAdminToken, safeEqual } from '../lib/auth';

const router = Router();

router.post('/login', (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const token = computeAdminToken();
  if (!adminPassword || !token) {
    return res.status(500).json({ error: 'Admin not configured. Set ADMIN_PASSWORD and APP_SECRET env vars.' });
  }
  const supplied = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!supplied || !safeEqual(supplied, adminPassword)) {
    return res.status(401).json({ error: 'Invalid password' });
  }
  res.cookie(ADMIN_COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 });
  res.json({ ok: true });
});

router.post('/logout', (req, res) => {
  res.clearCookie(ADMIN_COOKIE, { path: '/' });
  res.json({ ok: true });
});

export default router;
