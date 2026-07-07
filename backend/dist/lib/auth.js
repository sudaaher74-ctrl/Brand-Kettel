"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMIN_COOKIE = void 0;
exports.computeAdminToken = computeAdminToken;
exports.safeEqual = safeEqual;
const crypto_1 = __importDefault(require("crypto"));
exports.ADMIN_COOKIE = 'brandkettle_admin_token';
/**
 * Computes the admin session token. Both ADMIN_PASSWORD and APP_SECRET must be
 * set to strong, secret values — there is no insecure fallback. If either is
 * missing the process refuses to authenticate anyone.
 */
function computeAdminToken() {
    const adminPassword = process.env.ADMIN_PASSWORD;
    const appSecret = process.env.APP_SECRET;
    if (!adminPassword || !appSecret)
        return null;
    return crypto_1.default.createHash('sha256').update(`${adminPassword}:${appSecret}`).digest('hex');
}
/** Constant-time comparison to avoid leaking the token via timing. */
function safeEqual(a, b) {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length)
        return false;
    return crypto_1.default.timingSafeEqual(bufA, bufB);
}
