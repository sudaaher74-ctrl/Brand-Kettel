'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

type ExpertiseData = {
  title: string;
  description: string;
  services: string[];
};

const EXPERTISE_DATA: ExpertiseData[] = [
  {
    title: 'Commercial Interiors',
    description: 'Designing productive, elegant, and future-ready workspaces that reflect your brand and improve employee experience.',
    services: ['Corporate Offices', 'IT Workspaces', 'Executive Cabins', 'Conference Rooms', 'Reception Areas', 'Cafeterias']
  },
  {
    title: 'Jewellery Showrooms',
    description: 'Crafting luxurious retail environments that elevate customer experience and beautifully showcase every collection.',
    services: ['Gold Showrooms', 'Diamond Boutiques', 'Premium Retail Spaces', 'Display Planning', 'Luxury Lighting', 'Custom Furniture']
  },
  {
    title: 'Residential Interiors',
    description: 'Creating timeless homes that combine comfort, functionality, and refined aesthetics for modern living.',
    services: ['Luxury Homes', 'Villas', 'Apartments', 'Modular Kitchens', 'Living Rooms', 'Bedrooms', 'Custom Furniture']
  }
];

function ExpertisePane({ data, progress, index }: { data: ExpertiseData, progress: MotionValue<number>, index: number }) {
  // Each pane occupies 1/3 of the scroll progress
  // Index 0: 0.0 to 0.33
  // Index 1: 0.33 to 0.66
  // Index 2: 0.66 to 1.0

  const start = index * (1 / 3);
  const end = (index + 1) * (1 / 3);
  
  // Fade in during the first 10% of its slot, fade out during the last 10%
  const fadeStart = start + 0.02;
  const fadeEnd = end - 0.02;

  // We want the text to crossfade, so:
  // If it's the first one, it starts visible.
  // If it's the last one, it stays visible at the end.
  const opacity = useTransform(
    progress,
    [start - 0.05, fadeStart, fadeEnd, end + 0.05],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start - 0.05, fadeStart, fadeEnd, end + 0.05],
    [20, 0, 0, -20]
  );

  // Z-index management so the active one is clickable if needed
  const pointerEvents = useTransform(progress, (v) => (v >= start && v <= end) ? 'auto' : 'none');

  return (
    <motion.div 
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-mono text-accent/60 tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="h-px w-12 bg-line" />
      </div>

      <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-6 tracking-tight">
        {data.title}
      </h2>
      
      <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-md">
        {data.description}
      </p>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-ink mb-4">
          Services
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-ink-muted">
          {data.services.map((s, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-accent/40" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <button className="text-sm font-semibold tracking-wide uppercase text-accent hover:text-ink transition-colors group flex items-center gap-2">
          View Projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function ExpertiseContent({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full">
      {EXPERTISE_DATA.map((data, index) => (
        <ExpertisePane 
          key={data.title} 
          data={data} 
          progress={scrollProgress} 
          index={index} 
        />
      ))}
    </div>
  );
}
