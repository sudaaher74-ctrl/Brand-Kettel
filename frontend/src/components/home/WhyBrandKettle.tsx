'use client';

import { motion } from 'framer-motion';
import { whyCards } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyBrandKettle() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      {/* soft architectural backdrop */}
      <div className="pointer-events-none absolute inset-0 grain-soft opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Why Brand Kettle"
          title="An execution-focused partner you can trust"
          subtitle="Four reasons developers, business owners and architects choose us for their commercial spaces."
        />

        <div className="scene mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {whyCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateX: -3, rotateY: 3 }}
              style={{ transformStyle: 'preserve-3d', animationDelay: `${i * 0.4}s` }}
              className="animate-floaty rounded-3xl border border-line bg-card p-6 shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/12 text-base font-semibold text-accent">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
