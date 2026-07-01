import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import { ObjectId } from 'mongodb';
import { TestimonialSchema } from '../lib/schemas';
import { requireAuth } from '../middlewares/requireAuth';

const router = Router();

router.get('/', async (req, res) => {
  const db = await getDb();
  if (!db) return res.json([]);
  const docs = await db.collection('testimonials').find({}).sort({ createdAt: -1 }).toArray();
  res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});

router.post('/', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const validatedData = TestimonialSchema.parse(req.body);
    const doc = { ...validatedData, createdAt: new Date(), updatedAt: new Date() };
    const result = await db.collection('testimonials').insertOne(doc);
    res.status(201).json({ id: result.insertedId.toString() });
  } catch (err: any) {
    res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
});

router.get('/:id', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const doc = await db.collection('testimonials').findOne({ _id: new ObjectId(req.params.id as string) });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});

router.put('/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const validatedData = TestimonialSchema.partial().parse(req.body);
    const update = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
    await db.collection('testimonials').updateOne(
      { _id: new ObjectId(req.params.id as string) },
      { $set: { ...update, updatedAt: new Date() } }
    );
    res.json({ ok: true });
  } catch (err: any) {
    res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
});

router.delete('/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  await db.collection('testimonials').deleteOne({ _id: new ObjectId(req.params.id as string) });
  res.json({ ok: true });
});

export default router;
