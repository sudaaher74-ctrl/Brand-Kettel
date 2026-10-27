'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#18181B]/15 bg-[#FAF8F5]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 md:h-24 max-w-[1480px] items-center justify-between px-5 lg:px-10">
        
        {/* Brand Kettle Logo */}
        <Link href="/" className="group flex items-center p-1" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Brand Kettle BuildSpaces"
            width={160}
            height={44}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Services removed per request) */}
        <nav className="hidden items-center gap-8 xl:gap-10 text-[10px] font-semibold uppercase tracking-[0.2em] md:flex text-[#18181B]" aria-label="Main navigation">
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-opacity hover:opacity-50"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Action */}
        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="hidden border-b border-[#18181B] pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] lg:block text-[#18181B] hover:opacity-60 transition-opacity"
          >
            Start a project
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-none p-1 text-[#18181B] md:hidden hover:opacity-60 transition-opacity"
            aria-label="Toggle navigation"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-[#18181B]/15 bg-[#FAF8F5] px-6 py-6 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#18181B]">
              <Link onClick={() => setOpen(false)} href="/about" className="py-2 border-b border-[#18181B]/10">
                About
              </Link>
              <Link onClick={() => setOpen(false)} href="/portfolio" className="py-2 border-b border-[#18181B]/10">
                Portfolio
              </Link>
              <Link onClick={() => setOpen(false)} href="/process" className="py-2 border-b border-[#18181B]/10">
                Process
              </Link>
              <Link onClick={() => setOpen(false)} href="/blog" className="py-2 border-b border-[#18181B]/10">
                Blog
              </Link>
              <Link onClick={() => setOpen(false)} href="/careers" className="py-2 border-b border-[#18181B]/10">
                Careers
              </Link>
              <Link onClick={() => setOpen(false)} href="/contact" className="py-2 text-[#A07A4F] flex items-center justify-between">
                <span>Start a project</span>
                <ArrowRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
