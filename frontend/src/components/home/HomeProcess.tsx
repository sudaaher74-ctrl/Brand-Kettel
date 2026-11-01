'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stages = [
  {
    no: '01',
    name: 'Consult',
    line: 'Understand.',
    image: '/imgs/process/01-consult.webp',
    alt: 'Brand Kettle architect and client reviewing a commercial space plan',
    copy: 'Operational needs, spatial flow, acoustics and brand guidelines become a clear project brief.',
  },
  {
    no: '02',
    name: 'Design',
    line: 'Imagine.',
    image: '/imgs/process/02-design.webp',
    alt: 'Interior design team reviewing a 3D retail concept and material samples',
    copy: 'Space planning, photorealistic 3D views and material direction make the vision tangible.',
  },
  {
    no: '03',
    name: 'Engineer',
    line: 'Make it real.',
    image: '/imgs/process/03-engineer.webp',
    alt: 'Craftspeople fabricating bespoke retail joinery in the Brand Kettle workshop',
    copy: 'Detailed drawings, coordinated services and precision-made joinery bring every detail together.',
  },
  {
    no: '04',
    name: 'Deliver',
    line: 'Open with confidence.',
    image: '/imgs/process/04-deliver.webp',
    alt: 'Project team inspecting a completed luxury retail interior before handover',
    copy: 'Site execution, commissioning and quality checks lead to a finished space ready for business.',
  },
];

export default function HomeProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const stage = stages[active];

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#0C0C0D] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(160,122,79,0.16),transparent_48%)]" />

      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65 }}
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880] sm:text-xs"
          >
            04 / The process
          </motion.p>
          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-5 font-display text-4xl font-light leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Four clear stages.<br />
            <span className="font-serif italic text-[#C5A880]">One considered build.</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-[1120px]">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#171718] sm:aspect-[16/8] lg:aspect-[16/7]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={stage.no}
                initial={reducedMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
                transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={stage.image} alt={stage.alt} fill priority={active === 0} sizes="(max-width: 768px) 100vw, 1120px" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/85 via-[#090909]/35 to-[#090909]/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/55 via-transparent to-[#090909]/10" />

                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-12">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
                    <span>Brand Kettle · BuildSpaces</span>
                    <span>{stage.no} / 04</span>
                  </div>

                  <div className="max-w-2xl">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={`${stage.no}-copy`}
                        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                        transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#D5B68C] sm:text-[10px]">{stage.no} / {stage.name}</p>
                        <h3 className="mt-2 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.04em] text-white">{stage.line}</h3>
                        <p className="mt-3 max-w-lg text-xs font-light leading-6 text-white/80 sm:mt-4 sm:text-sm sm:leading-7">{stage.copy}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 grid grid-cols-4 border-y border-white/15 sm:mt-7">
            {stages.map((item, index) => (
              <button
                key={item.no}
                type="button"
                aria-pressed={active === index}
                aria-label={`Show process stage ${item.no}: ${item.name}`}
                onClick={() => setActive(index)}
                className={`group relative flex min-h-[64px] items-center gap-2 border-r border-white/10 px-2 text-left transition-colors last:border-r-0 sm:min-h-[76px] sm:gap-3 sm:px-5 ${active === index ? 'text-white' : 'text-white/45 hover:text-white/80'}`}
              >
                <span className="font-mono text-[9px] text-[#C5A880] sm:text-[10px]">{item.no}</span>
                <span className="text-[10px] font-light uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.14em]">{item.name}</span>
                <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#C5A880] transition-transform duration-500 ${active === index ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs font-light leading-6 text-white/45 sm:text-sm">One accountable team, from first brief to opening day.</p>
            <Link href="/process" className="inline-flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-[#C5A880] sm:text-[10px]">
              Explore the full process <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
