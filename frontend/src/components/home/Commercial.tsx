'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import Image from 'next/image';

export default function Commercial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Camera glides forward + slightly pans across the workspace.
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const panelOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const panelY = useTransform(scrollYProgress, [0.1, 0.45], [40, 0]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-background">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <motion.div style={{ scale, x }} className="absolute inset-0 will-change-transform">
          <Image
            src="/imgs/p061_076.jpg"
            alt="Cinematic walkthrough of a commercial workspace interior"
            className="object-cover"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex items-center">
          <div className="container-px">
            <motion.div style={{ opacity: panelOpacity, y: panelY }} className="max-w-xl">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" /> Our core
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink sm:text-5xl">
                Commercial Interiors Are Our Core Expertise
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                We deliver office interiors, retail environments, showrooms, and turnkey commercial
                spaces designed for performance and brand impact.
              </p>
              <MagneticButton className="mt-8">
                <Link href="/commercial-projects" className="btn-primary">
                  Explore Commercial Projects
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
