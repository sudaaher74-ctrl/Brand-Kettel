"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    const { name, phone, email, projectType, message } = req.body;
    if (!name || !phone || !email || !projectType) {
        return res.status(400).json({ error: 'Name, phone, email and project type are required.' });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk)
        return res.status(400).json({ error: 'Please enter a valid email address.' });
    const lead = { name, phone, email, projectType, message: message ?? '', source: 'website-consultation', createdAt: new Date() };
    try {
        const db = await (0, mongodb_1.getDb)();
        if (db)
            await db.collection('leads').insertOne(lead);
        else
            console.info('[contact] lead received (no MONGODB_URI configured):', lead);
        res.json({ ok: true, message: 'Thank you — our team will contact you within one business day.' });
    }
    catch (err) {
        console.error('[contact] failed to store lead:', err);
        res.status(500).json({ error: 'We could not submit your request. Please try again or call us directly.' });
    }
});
exports.default = router;
