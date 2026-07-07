"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const auth_1 = require("../lib/auth");
function requireAuth(req, res, next) {
    const token = req.cookies?.[auth_1.ADMIN_COOKIE];
    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }
    const expected = (0, auth_1.computeAdminToken)();
    if (!expected || !(0, auth_1.safeEqual)(token, expected)) {
        res.status(401).json({ error: 'Invalid or expired session' });
        return;
    }
    next();
}
