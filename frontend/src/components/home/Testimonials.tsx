'use client';

import { motion } from 'framer-motion';
import { Caveat } from 'next/font/google';
import { Quote, Star } from 'lucide-react';

const caveat = Caveat({ subsets: ['latin'], weight: ['600'] });

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-[140px]">
      {/* Graph-paper grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        }}
        aria-hidden
      />

      <div className="container-px relative">
        {/* Heading */}
        <div className="text-center">
          <h2 className="leading-none">
            <span className={`${caveat.className} block text-[40px] sm:text-[48px] text-ink-secondary`}>
              what
            </span>
            <span className="mt-1 block font-display text-[40px] sm:text-[56px] font-bold text-ink tracking-tight">
              Our Client Say
            </span>
          </h2>

          <div className="mt-7 flex items-center justify-center gap-4">
            <span className="h-px w-14 sm:w-24 bg-line" />
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent stroke-accent" />
              ))}
            </div>
            <span className="h-px w-14 sm:w-24 bg-line" />
          </div>
        </div>

        {/* Cards */}
        <div className="scene mt-16 sm:mt-20">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[86vw] max-w-[420px] shrink-0 snap-start rounded-[28px] border border-line/70 bg-transparent px-8 pt-12 pb-10 text-center sm:px-10"
              >
                {/* Quote badge */}
                <div className="absolute -top-6 right-8 grid h-14 w-14 place-items-center rounded-2xl bg-surface-elevated shadow-lg sm:right-10">
                  <Quote className="h-6 w-6 text-ink-muted" fill="currentColor" strokeWidth={0} />
                </div>

                <blockquote className="mx-auto max-w-xs text-lg font-semibold leading-relaxed text-ink sm:text-xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-ink-secondary">
                  – {t.name}
                </figcaption>
              </motion.figure>
            ))}
            <div className="w-1 shrink-0 sm:w-4" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
