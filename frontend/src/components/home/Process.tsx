'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProcessStep = {
  no: string;
  title: string;
  body: string;
};

export default function Process({
  steps,
  eyebrow = 'Turnkey Methodology',
  title = 'A Process Built for Certainty',
  subtitle = 'Six disciplined stages — from discovery to factory joinery and final handover.',
}: {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative bg-[#0A0A0B] text-white py-24 md:py-36 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>{eyebrow}</span>
            <span>✦</span>
          </div>
          <h2 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
            Built for <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#C5A880]">Absolute Certainty</span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative mt-16 sm:mt-24 max-w-5xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          
          {/* Active Growing Gold Fill Line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[19px] top-0 h-full w-px origin-top bg-[#C5A880] shadow-[0_0_12px_#C5A880] sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-12 sm:space-y-20">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.no} className="relative pl-14 sm:pl-0">
                  {/* Glowing Timeline Center Node */}
                  <span className="absolute left-[11px] top-6 z-10 grid h-5 w-5 place-items-center rounded-full border-2 border-[#C5A880] bg-[#0A0A0B] shadow-[0_0_12px_rgba(197,168,128,0.5)] sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-[#C5A880]" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -25 : 25, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`sm:w-[calc(50%-3rem)] ${
                      left ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <div className="rounded-[24px] bg-[#121216] p-7 sm:p-9 border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 shadow-2xl group">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-serif italic text-xs text-[#C5A880] uppercase tracking-widest font-medium">
                          Stage {s.no}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#C5A880] group-hover:text-[#0A0A0B] text-white/60 flex items-center justify-center text-xs font-semibold transition-colors">
                          {s.no}
                        </span>
                      </div>

                      <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#C5A880] transition-colors">
                        {s.title}
                      </h3>

                      <p className="mt-4 text-sm text-[#A1A1AA] font-light leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom Consultation CTA Strip */}
        <div className="mt-28 max-w-4xl mx-auto rounded-[28px] bg-[#121216] border border-white/10 p-8 sm:p-14 text-center shadow-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-3">
            Ready to Begin?
          </span>
          <h3 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-4">
            Discuss Your Space With Our Project Directors
          </h3>
          <p className="text-sm text-[#A1A1AA] font-light max-w-xl mx-auto mb-8">
            Get an upfront architectural consultation, timeline roadmap, and comprehensive turnkey fit-out estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl"
            >
              Start a Project →
            </Link>
            <a
              href="tel:+918959173790"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.14em] font-light transition-all duration-300"
            >
              Call +91 89591 73790
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
