"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const auth_1 = require("../lib/auth");
/**
 * Non-blocking variant of requireAuth: reports whether the caller holds a valid
 * admin session without rejecting the request.
 *
 * Used by endpoints the admin UI and the public site share, so the public gets
 * the published subset while an authenticated admin still sees drafts.
 */
function isAuthenticated(req) {
    const token = req.cookies?.[auth_1.ADMIN_COOKIE];
    if (!token)
        return false;
    const expected = (0, auth_1.computeAdminToken)();
    return Boolean(expected) && (0, auth_1.safeEqual)(token, expected);
}
