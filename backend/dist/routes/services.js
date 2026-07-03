"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const mongodb_2 = require("mongodb");
const schemas_1 = require("../lib/schemas");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('services').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.post('/', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.ServiceSchema.parse(req.body);
        const doc = { ...validatedData, createdAt: new Date(), updatedAt: new Date() };
        const result = await db.collection('services').insertOne(doc);
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
    const doc = await db.collection('services').findOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    if (!doc)
        return res.status(404).json({ error: 'Not found' });
    res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});
router.put('/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.ServiceSchema.partial().parse(req.body);
        const update = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
        await db.collection('services').updateOne({ _id: new mongodb_2.ObjectId(req.params.id) }, { $set: { ...update, updatedAt: new Date() } });
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
    await db.collection('services').deleteOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    res.json({ ok: true });
});
exports.default = router;
