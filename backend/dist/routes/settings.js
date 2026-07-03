"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const schemas_1 = require("../lib/schemas");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
// Assuming settings are stored in a single document with a specific ID, e.g., 'global_settings'
const SETTINGS_ID = 'global_settings';
// Get settings
router.get('/', async (req, res) => {
    try {
        const db = await (0, mongodb_1.getDb)();
        if (!db)
            return res.status(503).json({ error: 'Database not configured' });
        let settings = await db.collection('settings').findOne({ _id: SETTINGS_ID });
        if (!settings) {
            settings = { _id: SETTINGS_ID }; // Default empty settings
        }
        res.json(settings);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
// Update settings
router.put('/', requireAuth_1.requireAuth, async (req, res) => {
    try {
        const db = await (0, mongodb_1.getDb)();
        if (!db)
            return res.status(503).json({ error: 'Database not configured' });
        const data = schemas_1.SettingsSchema.parse(req.body);
        await db.collection('settings').updateOne({ _id: SETTINGS_ID }, { $set: data }, { upsert: true });
        res.json({ success: true });
    }
    catch (error) {
        const err = error;
        if (err.errors)
            return res.status(400).json({ error: err.errors[0].message });
        res.status(500).json({ error: err.message });
    }
});
exports.default = router;
