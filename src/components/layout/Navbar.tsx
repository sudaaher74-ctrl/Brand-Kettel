'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-500 ease-smooth',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        <div className="container-px">
          <nav
            className={cn(
              'flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ease-smooth',
              scrolled ? 'glass shadow-soft' : 'bg-transparent'
            )}
          >
            <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">
                BK
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-sm font-semibold text-ink">Brand Kettle</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  BuildSpaces
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.slice(1, 8).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link href="/contact" className="btn-accent hidden sm:inline-flex">
                Book Consultation
              </Link>
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white lg:hidden"
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={cn(
                      'absolute left-0 top-0 h-0.5 w-5 bg-ink transition-all duration-300',
                      open && 'top-1.5 rotate-45'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute left-0 top-2.5 h-0.5 w-5 bg-ink transition-all duration-300',
                      open && 'top-1.5 -rotate-45'
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="container-px lg:hidden"
          >
            <div className="glass mt-2 rounded-3xl p-4 shadow-card">
              <div className="grid gap-1">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-surface"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-accent mt-3 w-full">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
