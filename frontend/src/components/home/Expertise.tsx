'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { HardHat, Network, RefreshCw, ArrowUpRight } from 'lucide-react';

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

const ICONS = [HardHat, Network, RefreshCw];

export default function Expertise({ services }: { services: Service[] | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const items = (services ?? []).slice(0, 3);
  const total = items.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(total - 1, Math.max(0, Math.floor(v * total))));
  });

  if (total === 0) return null;

  return (
    <section ref={sectionRef} className="relative bg-background" style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 h-svh w-full overflow-hidden">

        {/* Header bar */}
        <div className="absolute inset-x-0 top-0 z-30 pt-8 md:pt-10 pointer-events-none">
          <div className="container-px flex items-center justify-between">
            <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold">
              O u r &nbsp; E x p e r t i e s
            </span>
            <span className="font-display text-sm text-white/70 tracking-widest tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4">
          {items.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-500 ${
                i === active ? 'h-6 w-1.5 bg-accent' : 'h-1.5 w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>

        {items.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Slide
              key={s.title}
              service={s}
              icon={Icon}
              index={i}
              total={total}
              progress={scrollYProgress}
              isActive={i === active}
            />
          );
        })}
      </div>
    </section>
  );
}

function Slide({
  service,
  icon: Icon,
  index,
  total,
  progress,
  isActive,
}: {
  service: Service;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isActive: boolean;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const overlap = segment * 0.05;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const input = [
    isFirst ? 0 : start - overlap,
    isFirst ? start : start + overlap,
    isLast ? end : end - overlap,
    isLast ? 1 : end + overlap,
  ];
  const opacity = useTransform(progress, input, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const scale = useTransform(progress, [start, end], [1.12, 1]);
  const contentY = useTransform(progress, input, [40, 0, 0, -40]);

  return (
    <motion.div
      style={{ opacity, pointerEvents: isActive ? 'auto' : 'none' }}
      className="absolute inset-0"
    >
      <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
        <img
          src={service.image || `https://placehold.co/1600x1000/131317/8D7458?text=${service.title.split(' ').join('+')}`}
          alt={service.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20" />
      </motion.div>

      <motion.div style={{ y: contentY }} className="absolute inset-x-0 bottom-0 z-10 pb-16 md:pb-24">
        <div className="container-px">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              <span className="font-display text-xs text-white/60 tracking-widest">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl text-white mb-6 leading-tight font-display font-light tracking-wide">
              {service.title}
            </h3>

            <div
              className="text-sm md:text-base text-white/70 leading-relaxed mb-8 max-w-lg prose prose-invert prose-sm prose-p:text-white/70 prose-li:text-white/70"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />

            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white hover:text-background transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
