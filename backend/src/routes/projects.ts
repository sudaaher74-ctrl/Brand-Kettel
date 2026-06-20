import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import { ObjectId } from 'mongodb';
import { projects as staticProjects } from '../lib/data';

const router = Router();

router.get('/', async (req, res) => {
  const db = await getDb();
  if (!db) {
    return res.json(staticProjects.map((p, i) => ({ ...p, id: `static-${i}` })));
  }
  const docs = await db.collection('projects').find({}).sort({ order: 1, createdAt: 1 }).toArray();
  if (docs.length === 0) {
    const seed = staticProjects.map((p, i) => ({ ...p, order: i, createdAt: new Date(), updatedAt: new Date() }));
    await db.collection('projects').insertMany(seed);
    const fresh = await db.collection('projects').find({}).sort({ order: 1 }).toArray();
    return res.json(fresh.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
  }
  res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});

router.post('/', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const count = await db.collection('projects').countDocuments();
  const doc = { ...req.body, order: count, createdAt: new Date(), updatedAt: new Date() };
  const result = await db.collection('projects').insertOne(doc);
  res.status(201).json({ id: result.insertedId.toString() });
});

router.get('/:id', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(req.params.id);
  const query = isObjectId ? { _id: new ObjectId(req.params.id) } : { slug: req.params.id };
  const doc = await db.collection('projects').findOne(query);
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});

router.put('/:id', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  const update = Object.fromEntries(Object.entries(req.body).filter(([k]) => k !== '_id' && k !== 'id'));
  await db.collection('projects').updateOne({ _id: new ObjectId(req.params.id) }, { $set: { ...update, updatedAt: new Date() } });
  res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
  const db = await getDb();
  if (!db) return res.status(503).json({ error: 'Database not configured' });
  await db.collection('projects').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ ok: true });
});

export default router;
