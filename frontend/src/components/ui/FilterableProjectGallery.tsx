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
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 md:mb-16">
        {FILTER_TABS.map((tab) => {
          const isActive = activeCategory === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-[0.14em] font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-[#C5A880] text-[#0A0A0B] shadow-[0_0_20px_rgba(197,168,128,0.3)] font-semibold'
                  : 'bg-[#121216] text-[#A1A1AA] hover:text-white hover:bg-white/10 border border-white/10'
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <CaseStudyCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
