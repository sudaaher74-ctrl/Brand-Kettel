'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

export default function ProjectReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={ref} className="relative bg-surface py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What we build"
          title="Projects that float to life as you scroll"
          subtitle="From corporate headquarters to retail flagships — explore the spaces we design, build and furnish."
        />

        <div className="scene mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            // Each card floats upward at a slightly different speed → layered depth.
            const speed = 40 + (i % 3) * 26;
            return <FloatingCard key={p.slug} progress={scrollYProgress} speed={speed} index={i} project={p} />;
          })}
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  progress,
  speed,
  index,
  project,
}: {
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  speed: number;
  index: number;
  project: (typeof projects)[number];
}) {
  const y = useTransform(progress, [0, 1], [speed, -speed]);

  return (
    <motion.div style={{ y }} className="will-change-transform">
      <TiltCard className="group h-full overflow-hidden rounded-none bg-card shadow-card">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            style={{ transform: 'translateZ(40px)' }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent" />
          <span className="absolute left-4 top-4 rounded-sm bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-4" style={{ transform: 'translateZ(60px)' }}>
            <p className="text-xs font-medium text-white/80">{project.category}</p>
            <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <span className="text-sm text-ink-muted">{project.location}</span>
          <span className="text-sm font-semibold text-ink">{project.area}</span>
        </div>
      </TiltCard>
    </motion.div>
  );
}
