'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import RealizationVisual from '@/components/home/RealizationVisual';

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

          <div className="grid min-h-[560px] overflow-hidden border border-[#18181B]/10 bg-[#F3EDE3] lg:min-h-[570px] lg:grid-cols-2">
            <div className="relative isolate min-h-[300px] overflow-hidden bg-[#252923] text-[#F4EFE6] sm:min-h-[360px] lg:min-h-[570px]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(244,239,230,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(244,239,230,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-1/4 size-72 rounded-full bg-[#A07A4F]/20 blur-[90px]" />
              <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.16em] text-[#E4D9C8]/65 sm:inset-x-8 sm:top-8 sm:text-[9px]">
                <span>Spatial study / {active.category}</span>
                <span className="text-[#D6A56E]">{String(activeIndex + 1).padStart(2, '0')} — 0{realizations.length}</span>
              </div>
              <RealizationVisual activeIndex={activeIndex} />
              <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between border-t border-[#F4EFE6]/20 pt-3 font-mono text-[7px] uppercase tracking-[0.14em] text-[#E4D9C8]/55 sm:inset-x-8 sm:bottom-8 sm:text-[8px]">
                <span>Brand Kettle / BuildSpaces</span>
                <span>Plan view · 01:{String(activeIndex + 1).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="relative flex min-h-[390px] flex-col justify-between bg-[#F3EDE3] px-6 py-7 sm:px-9 sm:py-9 lg:min-h-[570px] lg:px-10 lg:py-10">
              <div className="flex items-center justify-between gap-4 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#77756E] sm:text-[10px]">
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
                  className="max-w-[25rem] py-10 sm:py-12 lg:py-8"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#73795B]">{active.category} / Brand Kettle BuildSpaces</p>
                  <h3 className="mt-4 font-display text-4xl font-light leading-[0.98] tracking-[-0.05em] text-[#18181B] sm:text-5xl lg:text-[3.4rem]">{active.title}</h3>
                  <p className="mt-5 max-w-lg text-sm leading-6 text-[#5E5B56] sm:text-base sm:leading-7">{active.detail}</p>
                  <div aria-hidden="true" className="mt-7 flex items-center gap-2">
                    <span className="h-px w-10 bg-[#A07A4F]" />
                    <span className="size-1 rounded-full bg-[#A07A4F]" />
                    <span className="h-px w-7 bg-[#18181B]/15" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 border-t border-[#18181B]/15 pt-5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-5">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#77756E]">Scale / precision</p>
                    <p className="mt-1 text-xs font-medium text-[#18181B] sm:text-sm">{active.scale}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#77756E]">Focus</p>
                    <p className="mt-1 text-xs font-medium text-[#18181B] sm:text-sm">{active.focus}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#77756E]">Delivery</p>
                    <p className="mt-1 text-xs font-medium text-[#18181B] sm:text-sm">{active.delivery}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link href="/portfolio" className="group inline-flex items-center gap-2 text-xs font-medium text-[#18181B] transition-colors hover:text-[#A07A4F]">
                    View projects <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
