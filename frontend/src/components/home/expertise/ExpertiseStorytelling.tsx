'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type ExpertiseData = {
  title: string;
  description: string;
  services: string[];
  focus: string;
  link: string;
  icon: React.ReactNode;
};

const FALLBACK_DATA: ExpertiseData[] = [
  {
    title: 'Commercial & Corporate Interiors',
    description: 'Designing productive, elegant, and future-ready workspaces that reflect brand identity and improve the overall employee experience.',
    services: ['Corporate Offices', 'IT Workspaces', 'Executive Cabins'],
    focus: 'Workplaces, headquarters, and corporate environments designed for performance. Delivery of fast, precise fit-outs from bare shell to final handover.',
    link: '/commercial-fit-outs',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <path d="M9 22v-4h6v4"></path>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M8 14h.01"></path>
      </svg>
    )
  },
  {
    title: 'Jewellery Showrooms & Retail Fit-Outs',
    description: 'Crafting luxurious retail environments that elevate the customer experience and beautifully showcase every collection.',
    services: ['Gold Showrooms', 'Diamond Boutiques', 'Display Planning'],
    focus: 'Secure, luminous showroom design crafted for high-value displays. Conversion-focused retail experiences that elevate the brand at every customer touchpoint.',
    link: '/jewellery-showrooms',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
        <path d="M6 3h12l4 6-10 13L2 9z"></path>
        <path d="M11 3 8 9l4 13 4-13-3-6"></path>
        <path d="M2 9h20"></path>
      </svg>
    )
  },
  {
    title: 'Residential Interiors',
    description: 'Creating timeless homes that combine comfort, functionality, and refined aesthetics for modern living.',
    services: ['Luxury Homes', 'Villas', 'Apartments'],
    focus: 'Bespoke homes where comfort, craft, and detail meet. Creating private interiors that redefine contemporary living.',
    link: '/residential-interiors',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  }
];

export default function ExpertiseStorytelling({ services }: { services?: any[] }) {
  const data = FALLBACK_DATA; 

  return (
    <section className="relative w-full bg-background py-16 md:py-24">
      <div className="container-px">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-nav text-accent tracking-[0.2em] uppercase">Our Expertise</span>
            <div className="w-12 h-px bg-accent/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-ink tracking-wide">
            Our Core Interior <span className="text-accent italic font-light">Solutions</span>
          </h2>
          <p className="mt-6 text-ink-secondary max-w-2xl text-lg font-light">
            End-to-end interior solutions tailored to your space, your brand, and your lifestyle.
          </p>
        </motion.div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-10">
          {data.map((item, index) => {
            const numStr = String(index + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col pt-8"
              >
                {/* Overlapping Number */}
                <div className="absolute top-0 left-8 w-[60px] h-[60px] rounded-full bg-background border-[1.5px] border-accent/40 flex items-center justify-center z-10 font-display text-xl md:text-2xl text-accent shadow-[0_0_15px_rgba(var(--accent),0.1)]">
                  {numStr}
                </div>

                {/* Card */}
                <div className="flex-1 flex flex-col border-[1.5px] border-accent/20 rounded-[24px] rounded-tl-[64px] p-6 md:p-8 pt-12 bg-surface hover:border-accent/40 transition-colors duration-500 shadow-card">
                  
                  {/* Icon & Title */}
                  <div className="flex flex-col gap-4 mb-6 mt-1">
                    <div className="shrink-0 opacity-90">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display text-ink leading-tight pr-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-ink-secondary text-sm md:text-[15px] leading-relaxed mb-6 min-h-[70px]">
                    {item.description}
                  </p>

                  {/* Sub Services */}
                  <div className="mb-6">
                    <h4 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">
                      Key Sub-Services
                    </h4>
                    <ul className="space-y-2.5">
                      {item.services.map(service => (
                        <li key={service} className="flex items-center gap-3 text-sm md:text-[15px] text-ink-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-accent/10 mb-6" />

                  {/* Focus */}
                  <div className="mb-8 flex-1">
                    <h4 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">
                      Focus
                    </h4>
                    <p className="text-sm md:text-[15px] text-ink-secondary leading-relaxed">
                      {item.focus}
                    </p>
                  </div>

                  {/* Explore More */}
                  <Link href={item.link} className="group flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] text-ink hover:text-accent transition-colors uppercase w-fit mt-auto">
                    Explore More
                    <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-line group-hover:border-accent transition-colors text-accent shrink-0">
                      →
                    </span>
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
