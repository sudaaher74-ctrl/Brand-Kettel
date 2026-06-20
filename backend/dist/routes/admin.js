"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const mongodb_2 = require("mongodb");
const router = (0, express_1.Router)();
// --- Blog ---
router.get('/blog', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('blog_posts').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.post('/blog', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const body = req.body;
    const doc = { ...body, publishedAt: body.published ? new Date() : null, createdAt: new Date(), updatedAt: new Date() };
    const result = await db.collection('blog_posts').insertOne(doc);
    res.status(201).json({ id: result.insertedId.toString() });
});
router.get('/blog/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const doc = await db.collection('blog_posts').findOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    if (!doc)
        return res.status(404).json({ error: 'Not found' });
    res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});
router.put('/blog/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const update = Object.fromEntries(Object.entries(req.body).filter(([k]) => k !== '_id' && k !== 'id'));
    if (update.published && !update.publishedAt)
        update.publishedAt = new Date();
    await db.collection('blog_posts').updateOne({ _id: new mongodb_2.ObjectId(req.params.id) }, { $set: { ...update, updatedAt: new Date() } });
    res.json({ ok: true });
});
router.delete('/blog/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    await db.collection('blog_posts').deleteOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    res.json({ ok: true });
});
// --- Content ---
router.get('/content', async (req, res) => {
    const type = req.query.type;
    if (!type)
        return res.status(400).json({ error: 'Invalid type' });
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const doc = await db.collection('site_content').findOne({ type });
    res.json(doc ? doc.items : []);
});
router.put('/content', async (req, res) => {
    const type = req.query.type;
    if (!type)
        return res.status(400).json({ error: 'Invalid type' });
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const { items } = req.body;
    await db.collection('site_content').updateOne({ type }, { $set: { type, items, updatedAt: new Date() } }, { upsert: true });
    res.json({ ok: true });
});
// --- Leads ---
router.get('/leads', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.delete('/leads/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    await db.collection('leads').deleteOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    res.json({ ok: true });
});
exports.default = router;
