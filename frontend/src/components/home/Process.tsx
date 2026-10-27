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
    <section className="relative bg-[#FAF8F5] text-[#18181B] py-20 md:py-28 border-t border-[#18181B]/15 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>04</span>
            <span className="text-[#18181B]/30">/</span>
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-[#18181B]">
            Built for <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#A07A4F]">Absolute Certainty</span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative mt-12 sm:mt-20 max-w-5xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-[#18181B]/15 sm:left-1/2 sm:-translate-x-1/2" />
          
          {/* Active Growing Bronze Fill Line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[19px] top-0 h-full w-px origin-top bg-[#A07A4F] sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-12 sm:space-y-16">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.no} className="relative pl-14 sm:pl-0">
                  {/* Timeline Center Node */}
                  <span className="absolute left-[11px] top-6 z-10 grid h-5 w-5 place-items-center border border-[#A07A4F] bg-[#FAF8F5] sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-1.5 w-1.5 bg-[#A07A4F]" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -25 : 25, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`sm:w-[calc(50%-3rem)] ${
                      left ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <div className="bg-[#F2EDE4] p-7 sm:p-9 border border-[#18181B]/15 hover:border-[#18181B]/60 transition-all duration-300 shadow-sm group">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold">
                          Stage {s.no}
                        </span>
                        <span className="w-7 h-7 bg-white/70 group-hover:bg-[#18181B] group-hover:text-[#FAF8F5] text-[#18181B] border border-[#18181B]/10 flex items-center justify-center font-mono text-[11px] font-semibold transition-colors">
                          {s.no}
                        </span>
                      </div>

                      <h3 className="font-display font-light text-2xl sm:text-3xl text-[#18181B] uppercase tracking-wide group-hover:text-[#A07A4F] transition-colors">
                        {s.title}
                      </h3>

                      <p className="mt-4 text-sm text-[#71717A] font-light leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom Consultation CTA Strip in Deep Charcoal (Home Page Contrast Banner) */}
        <div className="mt-28 max-w-4xl mx-auto bg-[#121214] text-white border border-[#18181B]/20 p-8 sm:p-14 text-center shadow-xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-3">
            Ready to Begin?
          </span>
          <h3 className="font-display font-light text-3xl sm:text-4xl text-white uppercase mb-4">
            Discuss Your Space With Our Project Directors
          </h3>
          <p className="text-sm text-white/70 font-light max-w-xl mx-auto mb-8">
            Get an upfront architectural consultation, timeline roadmap, and comprehensive turnkey fit-out estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] text-[#18181B] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all shadow-sm"
            >
              Start a Project →
            </Link>
            <a
              href="tel:+918959173790"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white text-white font-mono text-[11px] uppercase tracking-[0.18em] font-light transition-all"
            >
              Call +91 89591 73790
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
