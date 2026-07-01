'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CaseStudy } from '@/lib/projectsData';
import CaseStudyCard from './CaseStudyCard';

const CATEGORIES = ['All', 'Retail', 'Hospitality', 'Workspace', 'Government', 'Residential', 'Commercial Spaces', 'Luxury Retail', 'Jewellery Showroom', 'Office'];

export default function FilterableProjectGallery({ projects }: { projects: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
      {filteredProjects.map((project, index) => (
        <CaseStudyCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
