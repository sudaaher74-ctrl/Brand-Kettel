import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import { ObjectId } from 'mongodb';
import { ServiceSchema } from '../lib/schemas';
import { requireAuth } from '../middlewares/requireAuth';

const router = Router();

router.get('/', async (req, res) => {
  const db = await getDb();
  if (!db) return res.json([]);
  const docs = await db.collection('services').find({}).sort({ createdAt: -1 }).toArray();
  res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});

router.post('/', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const validatedData = ServiceSchema.parse(req.body);
    const doc = { ...validatedData, createdAt: new Date(), updatedAt: new Date() };
    const result = await db.collection('services').insertOne(doc);
    res.status(201).json({ id: result.insertedId.toString() });
  } catch (error) {
    const err = error as any;
    res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
});

router.get('/:id', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const doc = await db.collection('services').findOne({ _id: new ObjectId(req.params.id as string) });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});

router.put('/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  try {
    const validatedData = ServiceSchema.partial().parse(req.body);
    const update = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
    await db.collection('services').updateOne(
      { _id: new ObjectId(req.params.id as string) },
      { $set: { ...update, updatedAt: new Date() } }
    );
    res.json({ ok: true });
  } catch (error) {
    const err = error as any;
    res.status(400).json({ error: 'Validation failed', details: err.errors });
  }
});

router.delete('/:id', requireAuth, async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  await db.collection('services').deleteOne({ _id: new ObjectId(req.params.id as string) });
  res.json({ ok: true });
});

export default router;
