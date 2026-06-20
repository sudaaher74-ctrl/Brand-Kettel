import { Router } from 'express';
import { getDb } from '../lib/mongodb';

const router = Router();

router.get('/services/:slug', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const doc = await db.collection('services').findOne({ slug: req.params.slug });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});

router.get('/locations/:city', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const doc = await db.collection('locations').findOne({ slug: req.params.city });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});

// Endpoints to get ALL for the sitemap
router.get('/services', async (req, res) => {
  const db = await getDb();
  if (!db) return res.json([]);
  const docs = await db.collection('services').find({}, { projection: { slug: 1 } }).toArray();
  res.json(docs);
});

router.get('/locations', async (req, res) => {
  const db = await getDb();
  if (!db) return res.json([]);
  const docs = await db.collection('locations').find({}, { projection: { slug: 1 } }).toArray();
  res.json(docs);
});

export default router;
