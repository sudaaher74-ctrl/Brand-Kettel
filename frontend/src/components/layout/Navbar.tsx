'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, servicesDropdown } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 xl:gap-9 text-[10px] font-semibold uppercase tracking-[0.2em] md:flex text-[#18181B]" aria-label="Main navigation">
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
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 uppercase transition-opacity hover:opacity-50"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200 text-[#18181B]/60',
                        servicesOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 overflow-hidden border border-[#18181B]/15 bg-[#FAF8F5] shadow-2xl rounded-none"
                      >
                        <div className="border-b border-[#18181B]/10 px-4 py-3 flex items-center justify-between bg-[#F2EDE4]">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold">
                            Disciplines
                          </span>
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#18181B] hover:text-[#A07A4F] transition-colors"
                          >
                            All Services →
                          </Link>
                        </div>

                        <div className="py-1">
                          {servicesDropdown.map((item, i) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className={cn(
                                'group flex items-start gap-3 px-4 py-3 transition-colors hover:bg-[#F2EDE4]',
                                i < servicesDropdown.length - 1 && 'border-b border-[#18181B]/5'
                              )}
                            >
                              <span className="mt-0.5 text-base text-[#A07A4F] group-hover:scale-110 transition-transform">
                                {item.icon}
                              </span>
                              <span>
                                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                                  {item.label}
                                </span>
                                <span className="mt-0.5 block text-[11px] leading-tight text-[#71717A] font-light">
                                  {item.description}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
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
                className="transition-opacity hover:opacity-50"
              >
                {l.label}
              </Link>
            );
          })}
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
              <Link onClick={() => setOpen(false)} href="/about" className="py-1 border-b border-[#18181B]/10">
                About
              </Link>

              {/* Mobile Services */}
              <div className="py-1 border-b border-[#18181B]/10">
                <div className="flex items-center justify-between text-[#A07A4F] text-[10px] tracking-[0.22em] mb-2 font-mono">
                  <span>DISCIPLINES</span>
                  <Link onClick={() => setOpen(false)} href="/services" className="text-[#18181B]">
                    Overview →
                  </Link>
                </div>
                <div className="pl-3 space-y-2 border-l border-[#A07A4F]/40 my-2">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-[11px] font-medium text-[#18181B]/80 hover:text-[#A07A4F]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link onClick={() => setOpen(false)} href="/portfolio" className="py-1 border-b border-[#18181B]/10">
                Portfolio
              </Link>
              <Link onClick={() => setOpen(false)} href="/process" className="py-1 border-b border-[#18181B]/10">
                Process
              </Link>
              <Link onClick={() => setOpen(false)} href="/blog" className="py-1 border-b border-[#18181B]/10">
                Blog
              </Link>
              <Link onClick={() => setOpen(false)} href="/careers" className="py-1 border-b border-[#18181B]/10">
                Careers
              </Link>
              <Link onClick={() => setOpen(false)} href="/contact" className="py-1 text-[#A07A4F] flex items-center justify-between">
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
