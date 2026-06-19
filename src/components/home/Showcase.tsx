'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { projects } from '@/lib/data';

const featured = projects.find((p) => p.slug === 'meridian-turnkey-campus') ?? projects[0];

const facts = [
  { label: 'Project', value: featured.name },
  { label: 'Location', value: featured.location },
  { label: 'Category', value: featured.category },
  { label: 'Area', value: featured.area },
  { label: 'Completed', value: featured.year },
];

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Background scales up; foreground card drifts the opposite way → depth.
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const fgY = useTransform(scrollYProgress, [0, 0.5, 1], ['8%', '0%', '-8%']);
  const headOpacity = useTransform(scrollYProgress, [0, 0.15, 0.4], [0, 1, 1]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-surface">
      <div className="sticky top-0 h-svh w-full scene overflow-hidden">
        {/* Background image layer */}
        <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0 will-change-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featured.image}
            alt={`${featured.name} — ${featured.category}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-white/60" />
        </motion.div>

        {/* Heading */}
        <motion.div
          style={{ opacity: headOpacity }}
          className="absolute inset-x-0 top-[16%] z-10"
        >
          <div className="container-px text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-accent" /> Immersive showcase
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              A turnkey commercial campus, delivered end-to-end
            </h2>
          </div>
        </motion.div>

        {/* Progressive fact layers */}
        <motion.div style={{ y: fgY }} className="absolute inset-x-0 bottom-10 z-10">
          <div className="container-px">
            <div className="glass mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl shadow-float sm:grid-cols-5">
              {facts.map((f, i) => (
                <Fact key={f.label} progress={scrollYProgress} index={i} total={facts.length} {...f} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Fact({
  progress,
  index,
  total,
  label,
  value,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  label: string;
  value: string;
}) {
  const start = 0.25 + (index / total) * 0.5;
  const opacity = useTransform(progress, [start, start + 0.12], [0, 1]);
  const y = useTransform(progress, [start, start + 0.12], [16, 0]);

  return (
    <motion.div style={{ opacity, y }} className="bg-white/70 p-4 text-center sm:text-left">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </motion.div>
  );
}
