"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crypto_1 = __importDefault(require("crypto"));
const router = (0, express_1.Router)();
const ADMIN_COOKIE = 'brandkettle_admin_token';
function computeAdminToken() {
    const adminPassword = process.env.ADMIN_PASSWORD || '';
    const appSecret = process.env.APP_SECRET || 'fallback-secret-for-dev';
    return crypto_1.default.createHash('sha256').update(`${adminPassword}:${appSecret}`).digest('hex');
}
router.post('/login', (req, res) => {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword)
        return res.status(500).json({ error: 'Admin not configured. Set ADMIN_PASSWORD env var.' });
    if (!req.body.password || req.body.password !== adminPassword) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    const token = computeAdminToken();
    res.cookie(ADMIN_COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 });
    res.json({ ok: true });
});
router.post('/logout', (req, res) => {
    res.clearCookie(ADMIN_COOKIE, { path: '/' });
    res.json({ ok: true });
});
exports.default = router;
