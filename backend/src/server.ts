import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

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

import adminRoutes from './routes/admin';
import projectsRoutes from './routes/projects';
import contactRoutes from './routes/contact';
import authRoutes from './routes/auth';

app.use('/api/admin', adminRoutes);
app.use('/api/admin/projects', projectsRoutes);
app.use('/api/admin', authRoutes); // login/logout
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
