'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';

function StopText({ 
  progress, 
  start, 
  end, 
  title, 
  subtitle 
}: { 
  progress: MotionValue<number>;
  start: number;
  end: number;
  title: string;
  subtitle?: string;
}) {
  // Fade in during the first 20% of the segment, hold, fade out during the last 20%
  const opacity = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [20, 0, 0, -20]
  );

  return (
    <motion.div 
      style={{ opacity, y }} 
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
    >
      <h2 className="font-display text-4xl sm:text-6xl font-light tracking-[1px] text-ink max-w-2xl text-balance drop-shadow-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-ink-secondary uppercase tracking-[0.2em] font-light">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // We have 6 segments. Each takes ~16.6% of the scroll.
  // 0: Intro (0 -> 1/6)
  // 1: Reception (1/6 -> 2/6)
  // 2: Conference Room (2/6 -> 3/6)
  // 3: CEO Cabin (3/6 -> 4/6)
  // 4: Open Workspace (4/6 -> 5/6)
  // 5: Pantry (5/6 -> 6/6)
  // 6: Final CTA (At 1.0)
  
  const segments = 6;
  const step = 1 / segments;

  const finalOpacity = useTransform(scrollProgress, [0.9, 0.95], [0, 1]);
  const finalY = useTransform(scrollProgress, [0.9, 0.95], [20, 0]);

  return (
    <div className="relative w-full h-full">
      {/* HUD Elements */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 flex flex-col gap-1">
        <div className="w-12 h-px bg-ink-secondary mb-2" />
        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-secondary">Project: Blueprint</p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">Scale: 1:100</p>
      </div>

      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12">
        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-secondary">
          Scroll to explore ↓
        </p>
      </div>

      {/* Stop 1: Reception */}
      <StopText 
        progress={scrollProgress} 
        start={step * 1} 
        end={step * 2} 
        title="Premium Commercial Interiors" 
        subtitle="Reception" 
      />

      {/* Stop 2: Conference */}
      <StopText 
        progress={scrollProgress} 
        start={step * 2} 
        end={step * 3} 
        title="Designed for Collaboration" 
        subtitle="Conference Room" 
      />

      {/* Stop 3: CEO Cabin */}
      <StopText 
        progress={scrollProgress} 
        start={step * 3} 
        end={step * 4} 
        title="Luxury Executive Spaces" 
        subtitle="CEO Cabin" 
      />

      {/* Stop 4: Workspace */}
      <StopText 
        progress={scrollProgress} 
        start={step * 4} 
        end={step * 5} 
        title="Smart Productivity" 
        subtitle="Open Workspace" 
      />

      {/* Stop 5: Pantry */}
      <StopText 
        progress={scrollProgress} 
        start={step * 5} 
        end={step * 6} 
        title="Employee Experience" 
        subtitle="Pantry" 
      />

      {/* Final Stop: CTA */}
      <motion.div 
        style={{ opacity: finalOpacity, y: finalY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
      >
        <h2 className="font-display text-5xl sm:text-7xl font-light tracking-[1px] text-ink">
          Let&apos;s Build Your Workspace
        </h2>
        <div className="mt-12">
          <Link href="/contact" className="btn-accent inline-block">
            Start a Project
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
