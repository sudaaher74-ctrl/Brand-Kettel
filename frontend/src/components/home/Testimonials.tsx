'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by the people who build"
          subtitle="Developers, business owners and brand teams on working with Brand Kettle."
        />
      </div>

      <div className="scene mt-10 sm:mt-14">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-[82vw] max-w-[400px] shrink-0 snap-start rounded-3xl border border-line bg-card p-7 shadow-card"
            >
              <div className="font-display text-5xl leading-none text-accent/40">&ldquo;</div>
              <blockquote className="mt-2 text-base leading-relaxed text-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 font-semibold text-accent">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-ink-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
          <div className="w-1 shrink-0 sm:w-4" aria-hidden />
        </div>
      </div>
    </section>
  );
}
