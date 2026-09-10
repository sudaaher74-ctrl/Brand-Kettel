'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

/**
 * Must stay in sync with PROJECT_TYPES in backend/src/lib/leadValidation.ts —
 * the server rejects anything outside that enum.
 */
const projectTypes = [
  'Office Interiors',
  'Retail Fit-Out',
  'Jewellery Showroom',
  'Turnkey Commercial',
  'Residential Interiors',
  'Custom Furniture',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ConsultationForm({ theme = 'gold' }: { theme?: 'dark' | 'gold' }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const isGold = theme === 'gold';

  // Stable, collision-free ids so the same form can appear twice on a page
  // (contact page and project detail page) without duplicating DOM ids.
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;
  const errorId = id('error');

  const errorRef = useRef<HTMLParagraphElement>(null);

  // Stamped when the form mounts. The server rejects submissions that arrive
  // less than 2s later — no human fills five fields that fast, but a bot does.
  const [formLoadedAt, setFormLoadedAt] = useState<number | null>(null);
  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  // Move focus to the error so screen-reader and keyboard users are told the
  // submission failed rather than being left on the button.
  useEffect(() => {
    if (status === 'error') errorRef.current?.focus();
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formLoadedAt: formLoadedAt ?? Date.now() }),
      });

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        throw new Error('unexpected response');
      }

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'request failed');

      setStatus('success');
      setMessage(json.message || 'Thank you — we will be in touch shortly.');
      form.reset();
    } catch (err) {
      setStatus('error');
      // The server already returns a deliberately generic message; anything
      // else (network, parse) is reported the same way rather than surfacing
      // internal detail to the visitor.
      setMessage(
        err instanceof Error && err.message !== 'unexpected response' && err.message !== 'request failed'
          ? err.message
          : 'We could not send your request. Please try again, or call us on +91 89591 73790.',
      );
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        aria-live="polite"
        className={
          isGold
            ? 'grid place-items-center rounded-[28px] bg-white/5 p-10 text-center'
            : 'grid place-items-center rounded-3xl bg-surface p-10 text-center border border-line'
        }
      >
        <div
          aria-hidden="true"
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
  const hintCls = isGold ? 'text-xs text-white/40' : 'text-xs text-ink-muted';
  const fieldCls = isGold
    ? 'rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-[#C5A880] focus:bg-white/10 [&>option]:bg-[#121216] [&>option]:text-white'
    : 'field';

  const hasError = status === 'error';
  // Every field points at the shared error region so assistive tech announces
  // the failure from whichever field the user lands on.
  const describedBy = (hintId?: string) =>
    [hintId, hasError ? errorId : null].filter(Boolean).join(' ') || undefined;

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-1.5">
        <label className={labelCls} htmlFor={id('name')}>
          Name
        </label>
        <input
          id={id('name')}
          name="name"
          required
          autoComplete="name"
          minLength={2}
          maxLength={100}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy()}
          placeholder="Your full name or company"
          className={fieldCls}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <label className={labelCls} htmlFor={id('phone')}>
            Phone Number
          </label>
          <input
            id={id('phone')}
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy(id('phone-hint'))}
            placeholder="+91 00000 00000"
            className={fieldCls}
          />
          <span id={id('phone-hint')} className={hintCls}>
            10-digit Indian mobile number.
          </span>
        </div>

        <div className="grid gap-1.5">
          <label className={labelCls} htmlFor={id('email')}>
            Email Address
          </label>
          <input
            id={id('email')}
            name="email"
            required
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy()}
            placeholder="you@company.com"
            className={fieldCls}
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label className={labelCls} htmlFor={id('projectType')}>
          Project Category
        </label>
        <select
          id={id('projectType')}
          name="projectType"
          required
          defaultValue=""
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy()}
          className={fieldCls}
        >
          <option value="" disabled>
            Select project category (e.g. Office, Retail, Showroom)
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-1.5">
        <label className={labelCls} htmlFor={id('message')}>
          Space Details &amp; Timeline
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={3}
          maxLength={2000}
          aria-describedby={describedBy(id('message-hint'))}
          placeholder="Estimated area (sq ft), city location, and target delivery date…"
          className={`${fieldCls} resize-none`}
        />
        <span id={id('message-hint')} className={hintCls}>
          Optional. Up to 2000 characters.
        </span>
      </div>

      {/*
        Honeypot. Hidden from sighted users and from assistive technology, and
        removed from the tab order, so only an automated form-filler reaches it.
        Any value here makes the server reject the submission.
        Positioned off-screen rather than display:none, which some bots detect.
      */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={id('company')}>Company (leave this field empty)</label>
        <input id={id('company')} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p
        ref={errorRef}
        id={errorId}
        role="alert"
        tabIndex={-1}
        hidden={!hasError}
        className={isGold ? 'text-sm text-red-400 outline-none' : 'text-sm text-red-500 outline-none'}
      >
        {hasError ? message : ''}
      </p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={
          isGold
            ? 'mt-2 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#C5A880] hover:bg-white text-[#0A0A0B] px-8 py-4 text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl disabled:opacity-60 cursor-pointer'
            : 'btn-accent mt-1 w-full sm:w-auto'
        }
      >
        {isGold && <Send className="h-4 w-4" aria-hidden="true" />}
        {status === 'loading' ? 'Sending…' : isGold ? 'Submit Project Inquiry' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
