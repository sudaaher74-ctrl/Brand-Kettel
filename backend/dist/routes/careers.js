"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const mongodb_2 = require("mongodb");
const schemas_1 = require("../lib/schemas");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
// --- Job Openings ---
router.get('/jobs', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('job_openings').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
router.post('/jobs', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.JobOpeningSchema.parse(req.body);
        const doc = { ...validatedData, createdAt: new Date(), updatedAt: new Date() };
        const result = await db.collection('job_openings').insertOne(doc);
        res.status(201).json({ id: result.insertedId.toString() });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
router.get('/jobs/:id', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    const doc = await db.collection('job_openings').findOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    if (!doc)
        return res.status(404).json({ error: 'Not found' });
    res.json({ ...doc, id: doc._id.toString(), _id: undefined });
});
router.put('/jobs/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.JobOpeningSchema.partial().parse(req.body);
        const update = Object.fromEntries(Object.entries(validatedData).filter(([k]) => k !== '_id' && k !== 'id'));
        await db.collection('job_openings').updateOne({ _id: new mongodb_2.ObjectId(req.params.id) }, { $set: { ...update, updatedAt: new Date() } });
        res.json({ ok: true });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
router.delete('/jobs/:id', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    await db.collection('job_openings').deleteOne({ _id: new mongodb_2.ObjectId(req.params.id) });
    // Also delete applications? Not required, but good practice.
    res.json({ ok: true });
});
// --- Job Applications ---
router.get('/applications', requireAuth_1.requireAuth, async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.json([]);
    const docs = await db.collection('job_applications').find({}).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(d => ({ ...d, id: d._id.toString(), _id: undefined })));
});
// This is public (for users to apply)
router.post('/applications', async (req, res) => {
    const db = await (0, mongodb_1.getDb)();
    if (!db)
        return res.status(503).json({ error: 'Database not configured' });
    try {
        const validatedData = schemas_1.JobApplicationSchema.parse(req.body);
        const doc = { ...validatedData, createdAt: new Date() };
        const result = await db.collection('job_applications').insertOne(doc);
        res.status(201).json({ id: result.insertedId.toString() });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: 'Validation failed', details: err.errors });
    }
});
exports.default = router;
