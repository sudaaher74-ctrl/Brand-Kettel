import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import nodemailer from 'nodemailer';
import { ContactSubmissionSchema, escapeHtml } from '../lib/leadValidation';

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

/**
 * The only message the client ever sees for a rejected submission.
 *
 * Per-field validation detail is deliberately withheld: it tells a bot exactly
 * which rule tripped (honeypot, timing check, phone format) and how to adapt.
 * The specifics are logged server-side instead.
 */
const GENERIC_REJECTION = 'Please check your details and try again.';
const GENERIC_FAILURE = 'We could not submit your request. Please try again or call us directly.';

router.post('/', async (req, res) => {
  const parsed = ContactSubmissionSchema.safeParse(req.body);

  if (!parsed.success) {
    // Log the reason, return nothing useful to the caller.
    console.warn('[contact] rejected submission:', {
      ip: req.ip,
      issues: parsed.error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
    });
    res.status(400).json({ error: GENERIC_REJECTION });
    return;
  }

  // Drop the anti-bot fields; they are not part of the lead record.
  const { company: _honeypot, formLoadedAt: _formLoadedAt, ...submission } = parsed.data;

  const lead = {
    ...submission,
    source: 'website-consultation',
    status: 'New' as const,
    createdAt: new Date(),
  };

  try {
    const db = await getDb();
    if (db) {
      // The MongoDB driver sends this as BSON with the document as a bound
      // parameter — the values are never concatenated into a query string.
      await db.collection('leads').insertOne(lead);
    } else {
      console.info('[contact] lead received (no MONGODB_URI configured):', {
        name: lead.name,
        projectType: lead.projectType,
      });
    }
  } catch (error) {
    console.error('[contact] failed to store lead:', error);
    res.status(500).json({ error: GENERIC_FAILURE });
    return;
  }

  // Email notification is best-effort: a lead already saved must not be
  // reported as a failure because SMTP is down.
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
        replyTo: lead.email,
        // Values are sanitised of control characters upstream, so neither the
        // subject nor any header can be split by submitted content.
        subject: `New Lead: ${lead.name} (${lead.projectType})`,
        html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
            <p><strong>Project Type:</strong> ${escapeHtml(lead.projectType)}</p>
            <p><strong>Message:</strong><br/>${escapeHtml(lead.message || 'No message provided').replace(/\n/g, '<br/>')}</p>
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
});

export default router;
