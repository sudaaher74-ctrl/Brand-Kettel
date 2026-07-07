'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks, servicesDropdown } from "@/lib/data";

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <span
      className="w-9 h-9 grid place-items-center bg-accent text-[#0a0a0a] font-semibold text-sm rounded-none"
    >
      BK
    </span>
    <span className="hidden flex-col leading-none sm:flex">
      <span className="font-display text-lg font-light text-ink uppercase tracking-[0.28em]">Brand Kettle</span>
      <span className="font-sans text-[10px] uppercase tracking-[0.55em] text-ink-muted font-light">Interiors</span>
    </span>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: "rgba(11, 11, 13, 0.82)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: "1px solid var(--line)",
              }
            : { borderBottom: "1px solid transparent" }
        }
      >
        <div className="container-px mx-auto flex items-center justify-between h-[74px]">
          <Link href="/" onClick={() => setMobileOpen(false)}><Logo /></Link>

          <div className="hidden min-[900px]:flex items-center gap-9">
            {navLinks.slice(1).map((link) => (
              link.label === 'Services' ? (
                <div key={link.label} className="relative group">
                  <Link href={link.href} className="text-sm font-medium text-ink-muted hover:text-white transition-colors py-6 flex items-center gap-1.5 cursor-pointer">
                    {link.label} <span className="text-[9px] opacity-60">▼</span>
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-[60px] left-[-20px] min-w-[260px] bg-surface border border-line rounded-none overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col translate-y-2 group-hover:translate-y-0 shadow-2xl">
                    {servicesDropdown.map(service => (
                      <Link key={service.href} href={service.href} className="px-5 py-3.5 hover:bg-[#202025] text-ink-muted hover:text-accent border-b border-line transition-colors text-[13px] font-medium flex items-center gap-3">
                        <span className="text-lg opacity-70">{service.icon}</span>
                        <div className="flex flex-col">
                          <span className="text-white transition-colors">{service.label}</span>
                          <span className="text-[10px] font-normal opacity-60 mt-0.5">{service.description}</span>
                        </div>
                      </Link>
                    ))}
                    <Link href="/services" className="px-5 py-3.5 hover:bg-[#202025] text-ink-muted hover:text-white transition-colors text-[13px] font-medium flex items-center justify-between">
                      View All Services
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-muted hover:text-white transition-colors py-4"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link href="/contact" className="btn-accent !py-2.5 !px-5 !text-sm">
              Get in Touch →
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="min-[900px]:hidden p-2 text-white"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/50 min-[900px]:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[78%] max-w-[340px] min-[900px]:hidden px-8 pt-24 pb-8 flex flex-col gap-1.5 overflow-y-auto"
              style={{ background: "var(--surface)", borderLeft: "1px solid var(--line)" }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
              {navLinks.map((link) => (
                link.label === 'Services' ? (
                  <div key={link.label} className="border-b border-line flex flex-col py-3">
                    <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-xl font-medium text-white mb-3 font-display">{link.label}</Link>
                    <div className="flex flex-col pl-4 gap-3">
                      {servicesDropdown.map(service => (
                        <Link key={service.href} href={service.href} onClick={() => setMobileOpen(false)} className="text-ink-muted hover:text-accent text-[15px] flex items-center justify-between pr-4">
                          {service.label} <span>↗</span>
                        </Link>
                      ))}
                      <Link href="/services" onClick={() => setMobileOpen(false)} className="text-ink-muted hover:text-white text-[15px] flex items-center justify-between pr-4 mt-2">
                        View All Services <span>→</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3.5 text-xl font-medium text-white border-b border-line font-display"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-accent w-full justify-center mt-5"
              >
                Get in Touch →
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
