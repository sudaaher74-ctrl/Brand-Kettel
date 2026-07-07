"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Fail fast if admin auth is misconfigured — never run with insecure defaults.
if (!process.env.ADMIN_PASSWORD || !process.env.APP_SECRET) {
    console.error('FATAL: ADMIN_PASSWORD and APP_SECRET must both be set to strong secret values.');
    process.exit(1);
}
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Health check
app.get('/', (req, res) => {
    res.json({ status: 'ok' });
});
const contactLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});
// Strict limiter to slow brute-force of the admin password.
const loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: { error: 'Too many login attempts, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});
const admin_1 = __importDefault(require("./routes/admin"));
const projects_1 = __importDefault(require("./routes/projects"));
const contact_1 = __importDefault(require("./routes/contact"));
const auth_1 = __importDefault(require("./routes/auth"));
const seo_1 = __importDefault(require("./routes/seo"));
const services_1 = __importDefault(require("./routes/services"));
const careers_1 = __importDefault(require("./routes/careers"));
const testimonials_1 = __importDefault(require("./routes/testimonials"));
const upload_1 = __importDefault(require("./routes/upload"));
const settings_1 = __importDefault(require("./routes/settings"));
const path_1 = __importDefault(require("path"));
// Public auth routes (login is rate-limited to resist brute force)
app.use('/api/admin/login', loginLimiter);
app.use('/api/admin', auth_1.default);
// Static uploads serving
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../public/uploads')));
// Admin API routes (auth handled individually per route)
app.use('/api/admin/projects', projects_1.default);
app.use('/api/admin/services', services_1.default);
app.use('/api/admin/careers', careers_1.default);
app.use('/api/admin/testimonials', testimonials_1.default);
app.use('/api/admin/upload', upload_1.default);
app.use('/api/admin/settings', settings_1.default);
app.use('/api/admin', admin_1.default);
// Public rate-limited routes
app.use('/api/contact', contactLimiter, contact_1.default);
// Public SEO routes
app.use('/api/seo', seo_1.default);
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
