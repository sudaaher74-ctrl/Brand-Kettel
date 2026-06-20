'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Camera-forward feel: background pushes in, mid layer drifts, content lifts.
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '-32%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.78]);

  return (
    <section ref={ref} className="relative h-[115svh] w-full scene overflow-hidden">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Background interior — camera pushes forward */}
        <motion.div
          style={{ scale: bgScale, y: bgY }}
          className="absolute inset-0 will-change-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imgs/commercial/home1.png"
            alt="Modern commercial office interior by Brand Kettle BuildSpaces"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </motion.div>

        {/* Deep dark overlay for luxury black theme */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/50" />

        {/* Floating mid-depth furniture chip */}
        <motion.div
          style={{ y: midY }}
          className="pointer-events-none absolute right-4 top-[26%] hidden sm:block"
        >
          <div className="glass animate-floaty rounded-2xl px-4 py-3 shadow-float">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
              Now building
            </p>
            <p className="text-sm font-medium text-ink">42,000 sq.ft HQ · Bengaluru</p>
          </div>
        </motion.div>

        {/* Foreground floating stat */}
        <motion.div
          style={{ y: fgY }}
          className="pointer-events-none absolute bottom-[14%] left-4 hidden sm:block"
        >
          <div className="glass rounded-2xl px-4 py-3 shadow-float">
            <p className="font-display text-2xl font-semibold text-ink">250+</p>
            <p className="text-xs text-ink-muted">Commercial projects delivered</p>
          </div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="absolute inset-0 flex items-end pb-20 sm:items-center sm:pb-0"
        >
          <div className="container-px">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow"
            >
              <span className="h-px w-6 bg-accent" />
              Design · Build · Furnish
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl md:text-7xl"
            >
              Creating Commercial Spaces That Inspire Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              Premium Design, Build &amp; Furnish solutions for offices, retail stores, showrooms and
              modern workspaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/portfolio" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-ghost">
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
