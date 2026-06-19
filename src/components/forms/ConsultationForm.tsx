'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projectTypes = [
  'Office Interiors',
  'Retail Fit-Out',
  'Jewellery Showroom',
  'Turnkey Commercial',
  'Residential Interiors',
  'Custom Furniture',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Something went wrong');
      setStatus('success');
      setMessage(json.message || 'Thank you — we will be in touch shortly.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid place-items-center rounded-3xl bg-surface p-10 text-center border border-line"
      >
        <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-2xl text-accent">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">{message}</p>
        <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Name</span>
          <input name="name" required placeholder="Your full name" className="field" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Phone</span>
          <input name="phone" required type="tel" placeholder="+91 00000 00000" className="field" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Email</span>
          <input name="email" required type="email" placeholder="you@company.com" className="field" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Project Type
          </span>
          <select name="projectType" required defaultValue="" className="field">
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your space, location and timeline…"
          className="field resize-none"
        />
      </label>

      {status === 'error' && <p className="text-sm text-red-500">{message}</p>}

      <button type="submit" disabled={status === 'loading'} className="btn-accent mt-1 w-full sm:w-auto">
        {status === 'loading' ? 'Sending…' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
