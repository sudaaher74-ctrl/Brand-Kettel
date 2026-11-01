'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

type ProcessStep = { no: string; title: string; body: string };

const phases = [
  {
    no: '01',
    title: 'Consult',
    verb: 'Understand.',
    image: '/imgs/process/01-consult.webp',
    alt: 'Brand Kettle architect and client reviewing a commercial space plan on site',
    fallback: 'We begin with your brand, business goals, space, budget and timeline—so every decision serves the way your team and customers use it.',
  },
  {
    no: '02',
    title: 'Design',
    verb: 'Imagine.',
    image: '/imgs/process/02-design.webp',
    alt: 'Interior design team presenting a retail concept and material palette',
    fallback: 'Our studio turns the brief into a clear spatial concept, photorealistic 3D views and a considered material palette.',
  },
  {
    no: '03',
    title: 'Engineer',
    verb: 'Make it real.',
    image: '/imgs/process/03-engineer.webp',
    alt: 'Craftspeople precisely fabricating bespoke retail joinery in a workshop',
    fallback: 'Detailed drawings, quantities, schedules and custom joinery are coordinated before installation begins.',
  },
  {
    no: '04',
    title: 'Deliver',
    verb: 'Open with confidence.',
    image: '/imgs/process/04-deliver.webp',
    alt: 'Project team inspecting a completed luxury retail interior before handover',
    fallback: 'Our site team manages installation, quality checks and snag resolution, then hands over a finished space ready to use.',
  },
];

const sourceGroups = [[0], [1], [2], [3, 4, 5]];

export default function Process({
  steps,
  eyebrow = 'Our process',
  subtitle = 'One accountable team brings the vision into focus, engineers every detail, and delivers a space ready for business.',
}: {
  steps: ProcessStep[];
  eyebrow?: string;
  subtitle?: string;
}) {
  const reducedMotion = useReducedMotion();
  const detailFor = (group: number[]) => {
    const details = group.map((index) => steps[index]?.body).filter(Boolean);
    return details.length ? details.join(' ') : undefined;
  };

  return (
    <section className="relative bg-[#FAF8F5] text-[#18181B] selection:bg-[#A07A4F] selection:text-white">
      <div className="mx-auto max-w-[1480px] px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="grid items-end gap-8 pb-10 sm:pb-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65 }}
              className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F] sm:text-xs"
            >
              <span>04</span><span className="text-[#18181B]/30">/</span><span>{eyebrow}</span>
            </motion.div>
            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl font-display text-[clamp(2.7rem,7vw,6.8rem)] font-light leading-[0.98] tracking-[-0.055em]"
            >
              From first conversation to <span className="font-serif italic tracking-[-0.04em] text-[#A07A4F]">final handover.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="max-w-md text-sm font-light leading-8 text-[#71717A] sm:text-base lg:pb-2"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="space-y-5 sm:space-y-7">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.no}
              initial={reducedMotion ? false : { opacity: 0, y: 42, clipPath: 'inset(8% 0 8% 0 round 2px)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0% 0 round 2px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="group relative isolate min-h-[440px] overflow-hidden bg-[#292725] sm:min-h-[560px] lg:min-h-[650px]"
            >
              <Image
                src={phase.image}
                alt={phase.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 1400px"
                className="-z-20 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171716]/85 via-[#171716]/52 to-[#171716]/5" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#171716]/35 via-transparent to-[#171716]/10" />

              <div className="flex min-h-[440px] flex-col justify-between p-6 text-white sm:min-h-[560px] sm:p-10 lg:min-h-[650px] lg:p-14">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/75 sm:text-xs">Brand Kettle · {phase.title}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/35 font-mono text-xs text-white sm:h-12 sm:w-12">{phase.no}</span>
                </div>

                <div className="max-w-3xl pb-4 sm:pb-7">
                  <motion.p
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65, delay: 0.16 }}
                    className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#D2B38C] sm:text-xs"
                  >
                    The process · 0{index + 1}
                  </motion.p>
                  <motion.h2
                    initial={reducedMotion ? false : { opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-[clamp(3.3rem,9vw,8rem)] font-light leading-[0.88] tracking-[-0.06em]"
                  >
                    {phase.verb}
                  </motion.h2>
                  <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/80 sm:mt-7 sm:text-base sm:leading-8">
                    {detailFor(sourceGroups[index]) || phase.fallback}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[#18181B]/15 pt-8 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">Ready to begin?</p>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-tight tracking-tight sm:text-5xl">Let’s make your next space work harder.</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-5 border-b border-[#18181B] pb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#A07A4F] hover:text-[#A07A4F]">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
