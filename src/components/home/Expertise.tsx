'use client';

import { services } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Expertise() {
  return (
    <section className="relative bg-background py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our expertise"
          title="Six disciplines. One accountable team."
          subtitle="Swipe through the services we design, build and furnish end-to-end."
        />
      </div>

      {/* Edge-to-edge swipeable rail */}
      <div className="scene mt-10 sm:mt-14">
        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollPaddingLeft: '1.25rem' }}
        >
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, rotateY: -10, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotateY: 4, rotateX: -2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-none bg-card shadow-card sm:w-[360px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-sm bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {s.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{s.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="w-1 shrink-0 sm:w-4" aria-hidden />
        </div>
      </div>
    </section>
  );
}
