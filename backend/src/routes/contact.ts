import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import nodemailer from 'nodemailer';

const router = Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

router.post('/', async (req, res) => {
  const { name, phone, email, projectType, message } = req.body;
  if (!name || !phone || !email || !projectType) {
    return res.status(400).json({ error: 'Name, phone, email and project type are required.' });
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return res.status(400).json({ error: 'Please enter a valid email address.' });

  const lead = { name, phone, email, projectType, message: message ?? '', source: 'website-consultation', createdAt: new Date() };

  try {
    const db = await getDb();
    if (db) await db.collection('leads').insertOne(lead);
    else console.info('[contact] lead received (no MONGODB_URI configured):', lead);

    // Send email notification
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
          subject: `New Lead: ${name} (${projectType})`,
          html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Message:</strong><br/>${(message || 'No message provided').replace(/\n/g, '<br/>')}</p>
          `
        });
        console.info('[contact] email notification sent');
      } catch (emailErr) {
        console.error('[contact] failed to send email notification:', emailErr);
      }
    } else {
      console.info('[contact] email notification skipped (missing SMTP credentials)');
    }

    res.json({ ok: true, message: 'Thank you — our team will contact you within one business day.' });
  } catch (err) {
    console.error('[contact] failed to store lead:', err);
    res.status(500).json({ error: 'We could not submit your request. Please try again or call us directly.' });
  }
});

export default router;
