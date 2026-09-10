"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSubmissionSchema = exports.MIN_SUBMIT_MS = exports.PROJECT_TYPES = void 0;
exports.normalizeIndianPhone = normalizeIndianPhone;
exports.escapeHtml = escapeHtml;
const zod_1 = require("zod");
/**
 * The six categories the contact form offers. Anything else is rejected —
 * the client <select> is not trusted to constrain this.
 */
exports.PROJECT_TYPES = [
    'Office Interiors',
    'Retail Fit-Out',
    'Jewellery Showroom',
    'Turnkey Commercial',
    'Residential Interiors',
    'Custom Furniture',
];
/** Minimum time a genuine human takes between page load and submit. */
exports.MIN_SUBMIT_MS = 2000;
/** Anything older than this is a stale or replayed timestamp. */
const MAX_FORM_AGE_MS = 6 * 60 * 60 * 1000;
/** Every control character, including tab and newline. */
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;
/** Every control character except newline, which paragraph breaks need. */
const CONTROL_CHARS_KEEP_NEWLINE = /[\u0000-\u0009\u000B-\u001F\u007F]/g;
/**
 * Strips control characters and collapses runaway whitespace, then trims.
 *
 * Applied before a value reaches the database, the notification email or a log
 * line, so a submitted value can never inject newlines into an email header or
 * control sequences into a terminal log.
 */
function sanitize(value) {
    return value.replace(CONTROL_CHARS, ' ').replace(/[ \t]{2,}/g, ' ').trim();
}
/** Same as sanitize but keeps paragraph breaks, which matter in the message body. */
function sanitizeMultiline(value) {
    return value
        .replace(/\r\n/g, '\n')
        .replace(CONTROL_CHARS_KEEP_NEWLINE, ' ')
        .replace(/[ \t]{2,}/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}
/**
 * Normalises an Indian mobile number to E.164 (+91XXXXXXXXXX).
 *
 * Accepts the shapes people actually type: 9876543210, 09876543210,
 * +91 98765 43210, 0091-9876543210. Returns null if it is not a valid Indian
 * mobile number (10 digits, leading 6-9).
 */
function normalizeIndianPhone(input) {
    const digits = input.replace(/\D/g, '');
    let local = digits;
    if (local.startsWith('0091'))
        local = local.slice(4);
    else if (local.startsWith('91') && local.length === 12)
        local = local.slice(2);
    else if (local.startsWith('0') && local.length === 11)
        local = local.slice(1);
    if (!/^[6-9]\d{9}$/.test(local))
        return null;
    return `+91${local}`;
}
/**
 * Server-side contract for a contact-form submission.
 *
 * `.strict()` matters: without it an attacker could post extra keys that the
 * route would spread straight into the MongoDB document.
 */
exports.ContactSubmissionSchema = zod_1.z
    .object({
    name: zod_1.z
        .string()
        .transform(sanitize)
        .pipe(zod_1.z.string().min(2, 'Name is too short').max(100, 'Name is too long')),
    phone: zod_1.z
        .string()
        .max(30)
        .transform((v) => normalizeIndianPhone(v))
        .refine((v) => v !== null, 'Enter a valid 10-digit Indian mobile number'),
    email: zod_1.z
        .string()
        .transform(sanitize)
        .pipe(zod_1.z.string().max(254).email('Enter a valid email address'))
        .transform((v) => v.toLowerCase()),
    projectType: zod_1.z.enum(exports.PROJECT_TYPES, { message: 'Select a valid project category' }),
    message: zod_1.z
        .string()
        .max(2000, 'Message is too long')
        .transform(sanitizeMultiline)
        .optional()
        .default(''),
    // Honeypot: a field hidden from humans by CSS. Bots fill every input they
    // find, so any value here means the submission is automated.
    company: zod_1.z.string().max(200).optional().default(''),
    // Milliseconds since epoch, stamped when the form mounted.
    formLoadedAt: zod_1.z.coerce.number().int().optional(),
})
    .strict()
    .superRefine((data, ctx) => {
    if (data.company.trim() !== '') {
        ctx.addIssue({ code: 'custom', path: ['company'], message: 'Honeypot field was filled' });
    }
    if (data.formLoadedAt !== undefined) {
        const elapsed = Date.now() - data.formLoadedAt;
        if (elapsed < exports.MIN_SUBMIT_MS) {
            ctx.addIssue({
                code: 'custom',
                path: ['formLoadedAt'],
                message: `Submitted after only ${elapsed}ms`,
            });
        }
        if (elapsed > MAX_FORM_AGE_MS) {
            ctx.addIssue({ code: 'custom', path: ['formLoadedAt'], message: 'Form timestamp is stale' });
        }
    }
});
/** Escapes a value for safe interpolation into the HTML notification email. */
function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
