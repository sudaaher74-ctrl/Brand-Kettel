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
            ? 'grid place-items-center rounded-[28px] bg-white/5 p-10 text-center'
            : 'grid place-items-center rounded-3xl bg-surface p-10 text-center border border-line'
        }
      >
        <div
          className={
            isGold
              ? 'grid h-14 w-14 place-items-center rounded-full bg-accent/20 text-2xl text-accent'
              : 'grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-2xl text-accent'
          }
        >
          ✓
        </div>
        <h3 className={isGold ? 'mt-5 font-display text-2xl font-semibold text-white' : 'mt-5 font-display text-2xl font-semibold text-ink'}>
          Request received
        </h3>
        <p className={isGold ? 'mt-2 max-w-sm text-sm text-white/60' : 'mt-2 max-w-sm text-sm text-ink-muted'}>{message}</p>
        <button
          onClick={() => setStatus('idle')}
          className={
            isGold
              ? 'mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#15120f]'
              : 'btn-ghost mt-6'
          }
        >
          Send another
        </button>
      </motion.div>
    );
  }

  const labelCls = isGold
    ? 'text-xs uppercase tracking-wider font-medium text-white/70'
    : 'text-xs font-semibold uppercase tracking-wider text-ink-muted';
  const fieldCls = isGold
    ? 'rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-[#C5A880] focus:bg-white/10 [&>option]:bg-[#121216] [&>option]:text-white'
    : 'field';

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5">
        <span className={labelCls}>Name</span>
        <input name="name" required placeholder="Your full name or company" className={fieldCls} />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5">
          <span className={labelCls}>Phone Number</span>
          <input name="phone" required type="tel" placeholder="+91 00000 00000" className={fieldCls} />
        </label>

        <label className="grid gap-1.5">
          <span className={labelCls}>Email Address</span>
          <input name="email" required type="email" placeholder="you@company.com" className={fieldCls} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className={labelCls}>Project Category</span>
        <select name="projectType" required defaultValue="" className={fieldCls}>
          <option value="" disabled>
            Select project category (e.g. Office, Retail, Showroom)
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className={labelCls}>Space Details &amp; Timeline</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Estimated area (sq ft), city location, and target delivery date…"
          className={`${fieldCls} resize-none`}
        />
      </label>

      {status === 'error' && (
        <p className={isGold ? 'text-sm text-red-400' : 'text-sm text-red-500'}>{message}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={
          isGold
            ? 'mt-2 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#C5A880] hover:bg-white text-[#0A0A0B] px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl disabled:opacity-60 cursor-pointer'
            : 'btn-accent mt-1 w-full sm:w-auto'
        }
      >
        {isGold && <Send className="h-4 w-4" />}
        {status === 'loading' ? 'Sending…' : isGold ? 'Submit Project Inquiry' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
