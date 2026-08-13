'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const projectTypes = [
  'Office Interiors',
  'Retail Fit-Out',
  'Jewellery Showroom',
  'Turnkey Commercial',
  'Residential Interiors',
  'Custom Furniture',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ConsultationForm({ theme = 'dark' }: { theme?: 'dark' | 'gold' }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const isGold = theme === 'gold';

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
      
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Something went wrong');
        setStatus('success');
        setMessage(json.message || 'Thank you — we will be in touch shortly.');
        form.reset();
      } else {
        throw new Error('Could not connect to the backend server. If you are on the live site, the backend may not be deployed yet.');
      }
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
        className={
          isGold
            ? 'grid place-items-center rounded-[28px] bg-black/10 p-10 text-center'
            : 'grid place-items-center rounded-3xl bg-surface p-10 text-center border border-line'
        }
      >
        <div
          className={
            isGold
              ? 'grid h-14 w-14 place-items-center rounded-full bg-black/20 text-2xl text-black'
              : 'grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-2xl text-accent'
          }
        >
          ✓
        </div>
        <h3 className={isGold ? 'mt-5 font-display text-2xl font-semibold text-black' : 'mt-5 font-display text-2xl font-semibold text-ink'}>
          Request received
        </h3>
        <p className={isGold ? 'mt-2 max-w-sm text-sm text-black/70' : 'mt-2 max-w-sm text-sm text-ink-muted'}>{message}</p>
        <button
          onClick={() => setStatus('idle')}
          className={
            isGold
              ? 'mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white'
              : 'btn-ghost mt-6'
          }
        >
          Send another
        </button>
      </motion.div>
    );
  }

  const labelCls = isGold
    ? 'text-sm font-medium text-black/70'
    : 'text-xs font-semibold uppercase tracking-wider text-ink-muted';
  const fieldCls = isGold
    ? 'rounded-2xl bg-black/10 px-5 py-4 text-[15px] text-black placeholder:text-black/45 outline-none transition focus:bg-black/15'
    : 'field';

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5">
        <span className={labelCls}>{isGold ? 'Your name' : 'Name'}</span>
        <input name="name" required placeholder="Name" className={fieldCls} />
      </label>

      <label className="grid gap-1.5">
        <span className={labelCls}>{isGold ? 'Your Phone' : 'Phone'}</span>
        <input name="phone" required type="tel" placeholder="+91 00000 00000" className={fieldCls} />
      </label>

      <label className="grid gap-1.5">
        <span className={labelCls}>Email</span>
        <input name="email" required type="email" placeholder="you@company.com" className={fieldCls} />
      </label>

      <label className="grid gap-1.5">
        <span className={labelCls}>{isGold ? 'Services' : 'Project Type'}</span>
        <select name="projectType" required defaultValue="" className={fieldCls}>
          <option value="" disabled>
            {isGold ? 'Select a service' : 'Select a project type'}
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      {!isGold && (
        <label className="grid gap-1.5">
          <span className={labelCls}>Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your space, location and timeline…"
            className="field resize-none"
          />
        </label>
      )}

      {status === 'error' && (
        <p className={isGold ? 'text-sm text-red-700' : 'text-sm text-red-500'}>{message}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={
          isGold
            ? 'mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black/85 disabled:opacity-60'
            : 'btn-accent mt-1 w-full sm:w-auto'
        }
      >
        {isGold && <Send className="h-4 w-4" />}
        {status === 'loading' ? 'Sending…' : isGold ? 'Submit' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
