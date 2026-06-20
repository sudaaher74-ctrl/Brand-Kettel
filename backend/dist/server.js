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
const requireAuth_1 = require("./middlewares/requireAuth");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
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
const admin_1 = __importDefault(require("./routes/admin"));
const projects_1 = __importDefault(require("./routes/projects"));
const contact_1 = __importDefault(require("./routes/contact"));
const auth_1 = __importDefault(require("./routes/auth"));
const seo_1 = __importDefault(require("./routes/seo"));
// Public auth routes
app.use('/api/admin', auth_1.default);
// Protected admin routes
app.use('/api/admin/projects', requireAuth_1.requireAuth, projects_1.default);
app.use('/api/admin', requireAuth_1.requireAuth, admin_1.default);
// Public rate-limited routes
app.use('/api/contact', contactLimiter, contact_1.default);
// Public SEO routes
app.use('/api/seo', seo_1.default);
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
