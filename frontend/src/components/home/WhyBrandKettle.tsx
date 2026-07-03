'use client';

import { motion } from 'framer-motion';
import { whyCards } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyBrandKettle() {
  return (
    <section className="relative overflow-hidden bg-background py-[140px]">
      {/* soft architectural backdrop */}
      <div className="pointer-events-none absolute inset-0 grain-soft opacity-60" aria-hidden />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Why Brand Kettle"
          title="An execution-focused partner you can trust"
          subtitle="Four reasons developers, business owners and architects choose us for their commercial spaces."
        />

        <div className="scene mt-16 grid gap-6 sm:mt-24 sm:grid-cols-2 max-w-5xl">
          {whyCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateX: -3, rotateY: 3 }}
              style={{ transformStyle: 'preserve-3d', animationDelay: `${i * 0.4}s` }}
              className="animate-floaty rounded-none border border-line bg-card p-10 shadow-none"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-none border-[1.5px] border-accent/20 bg-surface font-medium text-accent">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-8 text-card-heading text-ink">{c.title}</h3>
              <p className="mt-4 text-small text-ink-secondary">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
