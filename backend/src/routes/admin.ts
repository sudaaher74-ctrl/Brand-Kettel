import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import { ObjectId } from 'mongodb';
import { BlogPostSchema } from '../lib/schemas';
import { requireAuth } from '../middlewares/requireAuth';

const router = Router();

// --- Blog ---
router.get('/blog', async (req, res) => {
  const db = await getDb();
  if (!db) return res.json([]);
  const docs = await db.collection('blog_posts').find({}).sort({ createdAt: -1 }).toArray();
  res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});

router.post('/blog', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const validatedData = BlogPostSchema.parse(req.body);
    const doc = { ...validatedData, publishedAt: validatedData.published ? new Date() : null, createdAt: new Date(), updatedAt: new Date() };
    const result = await db.collection('blog_posts').insertOne(doc);
    res.status(201).json({ id: result.insertedId.toString() });
  } catch (err: any) {
    res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
});

router.get('/blog/:id', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(req.params.id);
  const query = isObjectId ? { _id: new ObjectId(req.params.id as string) } : { slug: req.params.id };
  const doc = await db.collection('blog_posts').findOne(query);
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});

router.put('/blog/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const validatedData = BlogPostSchema.partial().parse(req.body);
    const update: Record<string, any> = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
    if (update.published && !update.publishedAt) update.publishedAt = new Date();
    await db.collection('blog_posts').updateOne({ _id: new ObjectId(req.params.id as string) }, { $set: { ...update, updatedAt: new Date() } });
    res.json({ ok: true });
  } catch (err: any) {
    res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
});

router.delete('/blog/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  await db.collection('blog_posts').deleteOne({ _id: new ObjectId(req.params.id as string) });
  res.json({ ok: true });
});

// --- Content ---
router.get('/content', async (req, res) => {
  const type = req.query.type as string;
  if (!type) return res.status(400).json({ error: 'Invalid type' });
  const db = await getDb();
  if (!db) return res.json([]);
  const doc = await db.collection('site_content').findOne({ type });
  res.json(doc ? doc.items : []);
});

router.put('/content', requireAuth, async (req, res) => {
  const type = req.query.type as string;
  if (!type) return res.status(400).json({ error: 'Invalid type' });
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const { items } = req.body;
  await db.collection('site_content').updateOne({ type }, { $set: { type, items, updatedAt: new Date() } }, { upsert: true });
  res.json({ ok: true });
});

// --- Leads ---
router.get('/leads', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.json([]);
  const docs = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();
  res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});

router.put('/leads/:id/status', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const { status } = req.body;
    if (!['New', 'Contacted', 'Closed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    await db.collection('leads').updateOne(
      { _id: new ObjectId(req.params.id as string) },
      { $set: { status, updatedAt: new Date() } }
    );
    res.json({ ok: true });
  } catch (err: any) {
    res.status(400).json({ error: 'Failed to update status', details: err.message });
  }
});

router.delete('/leads/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  await db.collection('leads').deleteOne({ _id: new ObjectId(req.params.id as string) });
  res.json({ ok: true });
});

export default router;
