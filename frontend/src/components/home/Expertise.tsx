'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string; // Keep this in type to match props from page.tsx, but we won't render it
};

export default function Expertise({ services }: { services: Service[] | null }) {
  if (!services || !Array.isArray(services) || services.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-background py-[140px]">
      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Our expertise"
          title="Six disciplines. One accountable team."
          subtitle="Discover the core services we offer to design, build, and furnish your commercial spaces end-to-end."
        />

        <div className="mt-16 grid gap-6 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-line bg-card p-10 shadow-none transition-all duration-300 hover:border-accent/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 transition-colors duration-500 group-hover:from-accent/[0.03] group-hover:to-transparent" />
              
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-service-title text-accent/30 transition-colors duration-300 group-hover:text-accent/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-none border border-line bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-ink-muted group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mb-4 text-card-heading text-ink group-hover:text-accent transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-small text-ink-secondary">
                  {s.description}
                </p>
              </div>

              {/* Decorative accent line that expands on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
