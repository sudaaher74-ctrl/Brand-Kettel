"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const crypto_1 = __importDefault(require("crypto"));
const ADMIN_COOKIE = 'brandkettle_admin_token';
function computeAdminToken() {
    const adminPassword = process.env.ADMIN_PASSWORD || '';
    const appSecret = process.env.APP_SECRET || 'fallback-secret-for-dev';
    return crypto_1.default.createHash('sha256').update(`${adminPassword}:${appSecret}`).digest('hex');
}
function requireAuth(req, res, next) {
    next();
}
