"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../lib/mongodb");
const nodemailer_1 = __importDefault(require("nodemailer"));
const schemas_1 = require("../lib/schemas");
const router = (0, express_1.Router)();
const transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || ''
    }
});
router.post('/', async (req, res) => {
    try {
        const validatedData = schemas_1.LeadSchema.parse(req.body);
        const lead = { ...validatedData, source: 'website-consultation', createdAt: new Date() };
        const db = await (0, mongodb_1.getDb)();
        if (db)
            await db.collection('leads').insertOne(lead);
        else
            console.info('[contact] lead received (no MONGODB_URI configured):', lead);
        // Send email notification
        if (process.env.SMTP_HOST && process.env.SMTP_USER) {
            try {
                await transporter.sendMail({
                    from: process.env.SMTP_USER,
                    to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
                    subject: `New Lead: ${validatedData.name} (${validatedData.projectType})`,
                    html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
            <p><strong>Message:</strong><br/>${(validatedData.message || 'No message provided').replace(/\n/g, '<br/>')}</p>
          `
                });
                console.info('[contact] email notification sent');
            }
            catch (emailErr) {
                console.error('[contact] failed to send email notification:', emailErr);
            }
        }
        else {
            console.info('[contact] email notification skipped (missing SMTP credentials)');
        }
        res.json({ ok: true, message: 'Thank you — our team will contact you within one business day.' });
    }
    catch (error) {
        const err = error;
        console.error('[contact] failed to store lead:', err);
        if (err.errors) { // Zod error
            res.status(400).json({ error: 'Validation failed', details: err.errors });
        }
        else {
            res.status(500).json({ error: 'We could not submit your request. Please try again or call us directly.' });
        }
    }
});
exports.default = router;
