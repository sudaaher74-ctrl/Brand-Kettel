import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { requireAuth } from './middlewares/requireAuth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

import adminRoutes from './routes/admin';
import projectsRoutes from './routes/projects';
import contactRoutes from './routes/contact';
import authRoutes from './routes/auth';
import seoRoutes from './routes/seo';
import servicesRoutes from './routes/services';
import careersRoutes from './routes/careers';
import testimonialsRoutes from './routes/testimonials';
import uploadRoutes from './routes/upload';
import settingsRoutes from './routes/settings';
import path from 'path';

// Public auth routes
app.use('/api/admin', authRoutes);

// Static uploads serving
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Admin API routes (auth handled individually per route)
app.use('/api/admin/projects', projectsRoutes);
app.use('/api/admin/services', servicesRoutes);
app.use('/api/admin/careers', careersRoutes);
app.use('/api/admin/testimonials', testimonialsRoutes);
app.use('/api/admin/upload', uploadRoutes);
app.use('/api/admin/settings', settingsRoutes);
app.use('/api/admin', adminRoutes);

// Public rate-limited routes
app.use('/api/contact', contactLimiter, contactRoutes);

// Public SEO routes
app.use('/api/seo', seoRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
