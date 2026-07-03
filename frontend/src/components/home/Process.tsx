'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

type ProcessStep = {
  no: string;
  title: string;
  body: string;
};

export default function Process({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative bg-surface py-[120px]">
      <div className="container-px">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for certainty"
          subtitle="Six disciplined stages — from first conversation to final handover."
        />

        <div ref={ref} className="relative mt-14 sm:mt-24">
          {/* Track */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
          {/* Growing fill */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[19px] top-0 h-full w-px origin-top bg-accent sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-16 sm:space-y-24">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.no} className="relative pl-14 sm:pl-0">
                  {/* Node */}
                  <span className="absolute left-[11px] top-1.5 z-10 grid h-5 w-5 place-items-center rounded-full border-2 border-accent bg-surface sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -30 : 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`sm:w-[calc(50%-2.5rem)] ${
                      left ? 'sm:mr-auto sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                    }`}
                  >
                    <span className="font-display text-4xl font-light tracking-[1px] text-accent/70">{s.no}</span>
                    <h3 className="mt-2 font-display text-2xl font-light tracking-[1px] text-ink">{s.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-ink-secondary">{s.body}</p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
