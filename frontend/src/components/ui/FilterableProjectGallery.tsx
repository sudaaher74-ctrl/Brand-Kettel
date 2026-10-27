'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CaseStudy } from '@/lib/projectsData';
import CaseStudyCard from './CaseStudyCard';

const FILTER_TABS = [
  { label: 'All Projects', value: 'All' },
  { label: 'Retail & Luxury', value: 'Retail' },
  { label: 'Jewellery Showrooms', value: 'Jewellery Showroom' },
  { label: 'Workspaces & Offices', value: 'Office' },
  { label: 'Hospitality', value: 'Hospitality' },
  { label: 'Commercial Spaces', value: 'Commercial Spaces' },
];

export default function FilterableProjectGallery({ projects }: { projects: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hasFiltered, setHasFiltered] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    const cat = p.category || '';
    if (activeCategory === 'Office') {
      return cat === 'Office' || cat === 'Workspace' || cat === 'Commercial Spaces';
    }
    return cat.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 md:mb-16">
        {FILTER_TABS.map((tab) => {
          const isActive = activeCategory === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => {
                setActiveCategory(tab.value);
                setHasFiltered(true);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.16em] font-mono transition-all duration-300 border cursor-pointer ${
                isActive
                  ? 'bg-[#18181B] text-[#FAF8F5] border-[#18181B] font-semibold shadow-sm'
                  : 'bg-white/70 text-[#18181B]/70 hover:text-[#18181B] hover:bg-[#F2EDE4] border-[#18181B]/15'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid gap-6 sm:gap-8 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={hasFiltered ? { opacity: 0, scale: 0.96 } : false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={hasFiltered ? undefined : 'bk-rise'}
              style={hasFiltered ? undefined : { animationDelay: `${Math.min(index, 5) * 0.05}s` }}
            >
              <CaseStudyCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
