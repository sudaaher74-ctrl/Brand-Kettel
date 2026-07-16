"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const mongodb_2 = require("mongodb");
const data_1 = require("../lib/data");
const schemas_1 = require("../lib/schemas");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db) {
        return res.json(data_1.staticProjects.map((p, i) => ({ ...p, id: `static-${i}` })));
    }
    const docs = await db.collection('projects').find({}).sort({ order: 1, createdAt: 1 }).toArray();
    if (docs.length === 0) {
        const seed = data_1.staticProjects.map((p, i) => ({ ...p, order: i, createdAt: new Date(), updatedAt: new Date() }));
        await db.collection('projects').insertMany(seed);
        const fresh = await db.collection('projects').find({}).sort({ order: 1 }).toArray();
        return res.json(fresh.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
    }
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.post('/', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.ProjectSchema.parse(req.body);
        const count = await db.collection('projects').countDocuments();
        const doc = { ...validatedData, order: count, createdAt: new Date(), updatedAt: new Date() };
        const result = await db.collection('projects').insertOne(doc);
        res.status(201).json({ id: result.insertedId.toString() });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
router.get('/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(req.params.id);
    const query = isObjectId ? { _id: new mongodb_2.ObjectId(req.params.id) } : { slug: req.params.id };
    const doc = await db.collection('projects').findOne(query);
    if (!doc)
        return res.status(404).json({ error: 'Not found' });
    res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});
router.put('/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const _id = (0, mongodb_1.toObjectId)(req.params.id);
        if (!_id)
            return res.status(400).json({ error: 'Invalid id' });
        const validatedData = schemas_1.ProjectSchema.partial().parse(req.body);
        const update = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
        await db.collection('projects').updateOne({ _id }, { $set: { ...update, updatedAt: new Date() } });
        res.json({ ok: true });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
router.delete('/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const _id = (0, mongodb_1.toObjectId)(req.params.id);
    if (!_id)
        return res.status(400).json({ error: 'Invalid id' });
    await db.collection('projects').deleteOne({ _id });
    res.json({ ok: true });
});
exports.default = router;
