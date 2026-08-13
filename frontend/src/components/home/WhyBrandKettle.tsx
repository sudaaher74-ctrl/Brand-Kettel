'use client';

import { motion } from 'framer-motion';
import { whyCards } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyBrandKettle() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-[140px] flex items-center min-h-svh lg:min-h-0">
      {/* soft architectural backdrop */}
      <div className="pointer-events-none absolute inset-0 grain-soft opacity-60" aria-hidden />

      <div className="container-px relative w-full">
        {/* Heading — centered */}
        <SectionHeading
          eyebrow="Why Brand Kettle"
          title="An execution-focused partner you can trust"
          subtitle="Four reasons developers, business owners and architects choose us for their commercial spaces."
          align="center"
          className="mb-12 lg:mb-16"
        />

        {/* 4 Boxes */}
        <div className="scene grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-line bg-surface/50 p-8 md:p-10 shadow-lg backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-surface-elevated font-medium text-accent shadow-sm">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-8 text-2xl font-display text-ink leading-tight">{c.title}</h3>
              <p className="mt-4 text-base text-ink-secondary leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
