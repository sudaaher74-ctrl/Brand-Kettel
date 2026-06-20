"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
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
const admin_1 = __importDefault(require("./routes/admin"));
const projects_1 = __importDefault(require("./routes/projects"));
const contact_1 = __importDefault(require("./routes/contact"));
const auth_1 = __importDefault(require("./routes/auth"));
app.use('/api/admin', admin_1.default);
app.use('/api/admin/projects', projects_1.default);
app.use('/api/admin', auth_1.default); // login/logout
app.use('/api/contact', contact_1.default);
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
