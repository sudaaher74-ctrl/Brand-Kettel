"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../lib/auth");
const router = (0, express_1.Router)();
router.post('/login', (req, res) => {
    const adminPassword = process.env.ADMIN_PASSWORD;
    const token = (0, auth_1.computeAdminToken)();
    if (!adminPassword || !token) {
        return res.status(500).json({ error: 'Admin not configured. Set ADMIN_PASSWORD and APP_SECRET env vars.' });
    }
    const supplied = typeof req.body?.password === 'string' ? req.body.password : '';
    if (!supplied || !(0, auth_1.safeEqual)(supplied, adminPassword)) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    res.cookie(auth_1.ADMIN_COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 });
    res.json({ ok: true });
});
router.post('/logout', (req, res) => {
    res.clearCookie(auth_1.ADMIN_COOKIE, { path: '/' });
    res.json({ ok: true });
});
exports.default = router;
