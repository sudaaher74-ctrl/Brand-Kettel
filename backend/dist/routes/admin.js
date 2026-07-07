"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const mongodb_2 = require("mongodb");
const schemas_1 = require("../lib/schemas");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
// --- Blog ---
router.get('/blog', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('blog_posts').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.post('/blog', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.BlogPostSchema.parse(req.body);
        const doc = { ...validatedData, publishedAt: validatedData.published ? new Date() : null, createdAt: new Date(), updatedAt: new Date() };
        const result = await db.collection('blog_posts').insertOne(doc);
        res.status(201).json({ id: result.insertedId.toString() });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
router.get('/blog/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(req.params.id);
    const query = isObjectId ? { _id: new mongodb_2.ObjectId(req.params.id) } : { slug: req.params.id };
    const doc = await db.collection('blog_posts').findOne(query);
    if (!doc)
        return res.status(404).json({ error: 'Not found' });
    res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});
router.put('/blog/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const _id = (0, mongodb_1.toObjectId)(req.params.id);
        if (!_id)
            return res.status(400).json({ error: 'Invalid id' });
        const validatedData = schemas_1.BlogPostSchema.partial().parse(req.body);
        const update = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
        if (update.published && !update.publishedAt)
            update.publishedAt = new Date();
        await db.collection('blog_posts').updateOne({ _id }, { $set: { ...update, updatedAt: new Date() } });
        res.json({ ok: true });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
router.delete('/blog/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const _id = (0, mongodb_1.toObjectId)(req.params.id);
    if (!_id)
        return res.status(400).json({ error: 'Invalid id' });
    await db.collection('blog_posts').deleteOne({ _id });
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
router.put('/content', requireAuth_1.requireAuth, async (req, res) => {
    const type = req.query.type;
    if (!type)
        return res.status(400).json({ error: 'Invalid type' });
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const { items } = req.body;
    if (!Array.isArray(items))
        return res.status(400).json({ error: 'items must be an array' });
    await db.collection('site_content').updateOne({ type }, { $set: { type, items, updatedAt: new Date() } }, { upsert: true });
    res.json({ ok: true });
});
// --- Leads ---
router.get('/leads', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.put('/leads/:id/status', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const { status } = req.body;
        if (!['New', 'Contacted', 'Closed'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }
        const _id = (0, mongodb_1.toObjectId)(req.params.id);
        if (!_id)
            return res.status(400).json({ error: 'Invalid id' });
        await db.collection('leads').updateOne({ _id }, { $set: { status, updatedAt: new Date() } });
        res.json({ ok: true });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update status' });
    }
});
router.delete('/leads/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const _id = (0, mongodb_1.toObjectId)(req.params.id);
    if (!_id)
        return res.status(400).json({ error: 'Invalid id' });
    await db.collection('leads').deleteOne({ _id });
    res.json({ ok: true });
});
exports.default = router;
