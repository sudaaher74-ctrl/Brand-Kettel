'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MoveUpRight } from 'lucide-react';

const realizations = [
  {
    title: 'Retail flagships',
    category: 'Retail',
    detail: 'Distinctive storefronts and considered customer journeys, built to make a brand felt at every turn.',
    scale: '4,200 sq ft',
    focus: 'Luxury fit-out',
    delivery: 'Turnkey',
  },
  {
    title: 'Corporate workplaces',
    category: 'Workplace',
    detail: 'Calm, high-performing offices shaped around the way teams meet, think and do their best work.',
    scale: '25,000 sq ft',
    focus: 'Acoustic interiors',
    delivery: 'Design + build',
  },
  {
    title: 'Flagship destinations',
    category: 'Commercial',
    detail: 'Large-scale spaces where circulation, material and light come together in one clear experience.',
    scale: '18,500 sq ft',
    focus: 'Atrium build',
    delivery: 'Turnkey',
  },
  {
    title: 'Hospitality & dining',
    category: 'Hospitality',
    detail: 'Welcoming places to gather, with crafted details and practical performance behind the atmosphere.',
    scale: '8,500 sq ft',
    focus: 'Bespoke interiors',
    delivery: 'Design + build',
  },
  {
    title: 'Precision joinery',
    category: 'Craft',
    detail: 'Architectural millwork made in-house, with careful detailing from the first cut to final installation.',
    scale: '±0.5 mm',
    focus: '5-axis CNC',
    delivery: 'Made in-house',
  },
];

function SpatialDrawing() {
  return (
    <svg aria-hidden="true" viewBox="0 0 440 360" fill="none" className="pointer-events-none absolute -right-8 -top-5 h-[19rem] w-[23rem] max-w-[78%] text-[#60694B]/60 sm:right-2 sm:top-0 sm:h-[23rem] sm:w-[28rem]">
      <motion.path
        d="M55 64h130v57h66V75h125v100h-51v111H202v-55H55V64Z"
        stroke="currentColor"
        strokeWidth="1.25"
        initial={{ pathLength: 0, opacity: 0.2 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <motion.path
        d="M185 64v94h66V75M55 231h103v-54h-42V64m209 0v82h-51v140M158 231v55m-37-109h51m80-52h124m-124 41h175"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.56 }}
        transition={{ duration: 1.2, delay: 0.25, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="251"
        cy="158"
        r="5"
        fill="#A07A4F"
        initial={{ scale: 0.7, opacity: 0.4 }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="55" cy="64" r="3" fill="#A07A4F" />
      <circle cx="376" cy="75" r="3" fill="#A07A4F" />
      <circle cx="325" cy="286" r="3" fill="#A07A4F" />
    </svg>
  );
}

export default function HomeRealizations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const active = realizations[activeIndex];

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % realizations.length);
    }, 6200);
    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, prefersReducedMotion]);

  return (
    <section
      id="collection"
      data-motion="rise"
      aria-labelledby="home-realizations-title"
      className="relative isolate overflow-hidden border-y border-[#18181B]/10 bg-[#F6F3EE] py-20 text-[#18181B] sm:py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-28 top-8 size-[28rem] rounded-full bg-[#A07A4F]/[0.07] blur-3xl" />
        <div className="absolute -left-32 bottom-0 size-[24rem] rounded-full bg-[#60694B]/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-[#18181B]/15 pb-6 sm:pb-8">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">02 / Realizations</p>
            <h2 id="home-realizations-title" className="mt-5 max-w-4xl font-display text-4xl font-light leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Spaces with purpose.<br />
              <em className="font-serif font-normal text-[#60694B]">Built to last.</em>
            </h2>
          </div>
          <div className="flex items-end gap-5 sm:gap-7">
            <p className="max-w-[220px] pb-1 text-sm leading-6 text-[#71717A]">From first brief to final handover, every detail has a reason.</p>
            <div className="border-l border-[#18181B]/15 pl-5 sm:pl-7">
              <p className="font-display text-4xl font-medium leading-none tracking-tight sm:text-5xl">120<span className="text-[#A07A4F]">+</span></p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#71717A]">spaces delivered</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-8">
          <nav aria-label="Realization categories" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-0">
            {realizations.map((item, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  type="button"
                  key={item.title}
                  aria-current={selected ? 'step' : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex min-h-[76px] items-center gap-3 border px-3 text-left transition-colors sm:px-4 lg:min-h-[78px] lg:border-x-0 lg:border-t-0 lg:px-2 ${selected ? 'border-[#18181B]/20 bg-white/70' : 'border-[#18181B]/10 bg-transparent hover:bg-white/50'}`}
                >
                  <span className={`font-mono text-[10px] transition-colors ${selected ? 'text-[#A07A4F]' : 'text-[#71717A]/70'}`}>0{index + 1}</span>
                  <span className={`flex-1 text-sm transition-colors sm:text-base ${selected ? 'font-medium text-[#18181B]' : 'font-light text-[#71717A] group-hover:text-[#18181B]'}`}>{item.category}</span>
                  <MoveUpRight className={`size-3.5 transition-all ${selected ? 'translate-x-0 opacity-100 text-[#A07A4F]' : '-translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-60'}`} aria-hidden="true" />
                  {selected && !prefersReducedMotion && !paused && (
                    <motion.span
                      key={`progress-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[2px] bg-[#A07A4F] lg:bottom-0"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6.2, ease: 'linear' }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="relative min-h-[400px] overflow-hidden border border-[#18181B]/10 bg-[#E9E9E1] p-6 sm:min-h-[430px] sm:p-9 lg:min-h-[490px] lg:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(24,24,27,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.035)_1px,transparent_1px)] [background-size:34px_34px]" />
            <SpatialDrawing />
            <div className="relative z-10 flex h-full min-h-[350px] flex-col justify-between sm:min-h-[350px] lg:min-h-[390px]">
              <div className="flex items-center justify-between gap-4 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#71717A] sm:text-[10px]">
                <span>Selected realization</span>
                <span className="text-[#A07A4F]">{String(activeIndex + 1).padStart(2, '0')} / 0{realizations.length}</span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-xl pb-3 pt-28 sm:pt-36 lg:pt-40"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#60694B]">{active.category} / Brand Kettle BuildSpaces</p>
                  <h3 className="mt-4 font-display text-4xl font-light leading-[0.98] tracking-[-0.05em] text-[#18181B] sm:text-5xl lg:text-6xl">{active.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-[#52525B] sm:text-base sm:leading-7">{active.detail}</p>
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 flex flex-wrap items-end justify-between gap-5 border-t border-[#18181B]/15 pt-5">
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#71717A]">Scale / precision</p>
                    <p className="mt-1 text-xs font-medium text-[#18181B] sm:text-sm">{active.scale}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#71717A]">Focus</p>
                    <p className="mt-1 text-xs font-medium text-[#18181B] sm:text-sm">{active.focus}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#71717A]">Delivery</p>
                    <p className="mt-1 text-xs font-medium text-[#18181B] sm:text-sm">{active.delivery}</p>
                  </div>
                </div>
                <Link href="/portfolio" className="group inline-flex items-center gap-2 text-xs font-medium text-[#18181B] transition-colors hover:text-[#A07A4F]">
                  View projects <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
