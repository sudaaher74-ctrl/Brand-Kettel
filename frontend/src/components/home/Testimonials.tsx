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
    <section className="relative bg-surface py-[140px]">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by the people who build"
        />
      </div>

      <div className="scene mt-16 sm:mt-24">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-[82vw] max-w-[400px] shrink-0 snap-start rounded-none border border-line bg-card p-10 shadow-none"
            >
              <div className="font-display text-5xl leading-none text-accent/40">&ldquo;</div>
              <blockquote className="mt-4 text-body-main">{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-none border-[1.5px] border-accent/20 bg-surface font-medium text-accent">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-small font-medium text-ink">{t.name}</span>
                  <span className="block text-xs uppercase tracking-widest text-ink-muted mt-1">{t.role}</span>
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
