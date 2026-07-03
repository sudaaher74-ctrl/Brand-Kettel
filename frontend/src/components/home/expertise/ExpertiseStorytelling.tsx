'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ExpertiseData = {
  title: string;
  description: string;
  services: string[];
  image: string;
  link: string;
};

const EXPERTISE_DATA: ExpertiseData[] = [
  {
    title: 'Commercial Interiors',
    description: 'Designing productive, elegant, and future-ready workspaces that reflect your brand and improve employee experience.',
    services: ['Corporate Offices', 'IT Workspaces', 'Executive Cabins'],
    image: '/imgs/experties2.png',
    link: '/commercial-fit-outs'
  },
  {
    title: 'Jewellery Showrooms',
    description: 'Crafting luxurious retail environments that elevate customer experience and beautifully showcase every collection.',
    services: ['Gold Showrooms', 'Diamond Boutiques', 'Display Planning'],
    image: '/imgs/experties1.png',
    link: '/jewellery-showrooms'
  },
  {
    title: 'Residential Interiors',
    description: 'Creating timeless homes that combine comfort, functionality, and refined aesthetics for modern living.',
    services: ['Luxury Homes', 'Villas', 'Apartments'],
    image: '/imgs/residential3.png',
    link: '/residential-interiors'
  }
];

export default function ExpertiseStorytelling() {
  return (
    <section className="relative w-full bg-surface2 py-[120px]">
      <div className="container-px">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-sm font-mono uppercase tracking-widest text-accent">Our Expertise</span>
            <div className="w-12 h-px bg-accent/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-ink tracking-[1px]">
            Spaces Designed for Purpose
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {EXPERTISE_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col group glass-card p-6"
            >
              {/* Image Container */}
              <Link href={item.link} className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-xl block">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-accent/60 tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px w-8 bg-line" />
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl font-light tracking-[1px] text-ink mb-4">
                  <Link href={item.link} className="hover:text-accent transition-colors">
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-ink-secondary leading-relaxed mb-8 flex-grow font-light">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-sm text-ink-secondary font-light">
                  {item.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-none bg-accent/40" />
                      {service}
                    </li>
                  ))}
                </ul>

                <Link href={item.link} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-accent hover:text-ink transition-colors group/link w-fit">
                  View Projects
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
