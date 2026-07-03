'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import type { Project } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Showcase({ featured }: { featured: Project | null }) {
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

  if (!featured) return null;

  const facts = [
    { label: 'Project', value: featured.name },
    { label: 'Location', value: featured.location },
    { label: 'Category', value: featured.category },
    { label: 'Area', value: featured.area },
    { label: 'Completed', value: featured.year },
  ];

  return (
    <section ref={ref} className="relative h-[260vh] bg-background">
      <div className="sticky top-0 h-svh w-full scene overflow-hidden">
        {/* Background image layer */}
        <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0 will-change-transform">
          <Image
            src={featured.image}
            alt={`${featured.name} — ${featured.category}`}
            className="object-cover"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/10 to-black/30" />
        </motion.div>

        {/* Heading */}
        <motion.div
          style={{ opacity: headOpacity }}
          className="absolute inset-x-0 top-[16%] z-10"
        >
          <div className="container-px text-center">
            <span className="eyebrow justify-center text-white">
              <span className="h-px w-6 bg-accent" /> Immersive showcase
            </span>
            <div className="mt-8 flex justify-center pointer-events-auto">
              <Link href={`/portfolio/${featured.slug}`} className="btn-accent !rounded-none px-10 py-5">
                View Project Details
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Progressive fact layers */}
        <motion.div style={{ y: fgY }} className="absolute inset-x-0 bottom-10 z-10">
          <div className="container-px">
            <div className="glass mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl shadow-soft sm:grid-cols-5">
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
    <motion.div style={{ opacity, y }} className="bg-white/90 p-4 text-center sm:text-left">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{label}</p>
      <p className="mt-1 text-sm font-light text-ink">{value}</p>
    </motion.div>
  );
}
