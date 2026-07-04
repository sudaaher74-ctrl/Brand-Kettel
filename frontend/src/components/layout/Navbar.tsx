'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, servicesDropdown } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header 
      className={cn(
        'fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-smooth border-b',
        scrolled ? 'bg-background border-line py-2' : 'bg-background border-transparent py-4'
      )}
    >
      <div className="container-px">
        <nav className="flex items-center justify-between rounded-none px-4 py-2.5">
          {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <span className="grid h-9 w-9 place-items-center rounded-none bg-accent text-sm font-semibold text-[#0a0a0a]">
                BK
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-lg font-light text-ink uppercase tracking-[0.28em]">Brand Kettle</span>
                <span className="font-sans text-[10px] uppercase tracking-[0.55em] text-[#777777] font-light">Interiors</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.slice(1).map((l) => {
                if (l.label === 'Services') {
                  return (
                    <div
                      key={l.href}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {/* Services trigger */}
                      <button
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex items-center gap-1 rounded-none px-3 py-2 text-nav"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        Services
                        <svg
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            servicesOpen && 'rotate-180'
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown panel */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.97 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 overflow-hidden border border-accent/15 rounded-none"
                            style={{ background: 'rgba(250, 248, 245, 0.96)', backdropFilter: 'blur(20px)' }}
                          >
                            {/* View all services link */}
                            <div className="border-b border-line px-4 py-2.5">
                              <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent hover:text-accent-soft transition-colors"
                              >
                                All Services →
                              </Link>
                            </div>

                            {servicesDropdown.map((item, i) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setServicesOpen(false)}
                                className={cn(
                                  'group flex items-start gap-3 px-4 py-4 transition-colors hover:bg-white dropdown-menu',
                                  i < servicesDropdown.length - 1 && 'border-b border-line'
                                )}
                              >
                                <span className="mt-0.5 text-xl text-accent/60 group-hover:text-accent transition-colors">
                                  {item.icon}
                                </span>
                                <span>
                                  <span className="block font-sans text-[16px] font-light text-[#444] group-hover:text-black transition-colors">
                                    {item.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-ink-muted">
                                    {item.description}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-none px-3 py-2 text-nav"
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Link href="/contact" className="btn hidden sm:inline-flex">
                Get in Touch
              </Link>
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-none border border-line bg-surface lg:hidden"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="container-px lg:hidden"
          >
            <div className="glass mt-2 border border-accent/15 p-4 rounded-none">
              <div className="grid gap-1">
                {navLinks.map((l, i) => {
                  if (l.label === 'Services') {
                    return (
                      <motion.div
                        key={l.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i }}
                      >
                        {/* Services label */}
                        <div className="px-4 pt-3 pb-1">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                            Services
                          </span>
                        </div>
                        {/* Sub links */}
                        <div className="ml-4 border-l border-line pl-4">
                          <Link
                            href="/services"
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
                          >
                            All Services
                          </Link>
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 py-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
                            >
                              <span className="text-accent/50 text-base">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-nav"
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-accent mt-3 w-full">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
