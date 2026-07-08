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

const FALLBACK_DATA: ExpertiseData[] = [
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

/** Map an API service object to our display shape */
function mapApiServices(apiServices: any[]): ExpertiseData[] {
  return apiServices.slice(0, 6).map(s => ({
    title: s.title || s.name || 'Service',
    description: s.description || '',
    services: s.subServices || s.tags || [],
    image: s.image || '/imgs/experties2.png',
    link: s.link || s.href || '#',
  }));
}

type Props = {
  services?: any[];
};

export default function ExpertiseStorytelling({ services }: Props) {
  const data: ExpertiseData[] =
    services && services.length > 0 ? mapApiServices(services) : FALLBACK_DATA;

  return (
    <section className="relative w-full bg-background py-[140px]">
      <div className="container-px">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16 sm:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-nav text-accent">Our Expertise</span>
            <div className="w-12 h-px bg-accent/40" />
          </div>
          <h2 className="text-section text-ink">
            Spaces Designed for Purpose
          </h2>
        </motion.div>

        {/* Asymmetric Editorial Runway */}
        <div className="flex flex-col gap-24 md:gap-40">
          {data.map((item, index) => {
            const isEven = index % 2 !== 0; // index 1 is even (02) visually
            const numStr = String(index + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row gap-12 md:gap-20 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text Animation Container (Replacing Image) */}
                <div className="w-full md:w-1/2 flex items-center p-8 md:p-12 relative overflow-hidden bg-ink/[0.02] border border-ink/[0.05]">
                  <motion.div 
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                      }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col w-full h-full justify-center gap-6 md:gap-8"
                  >
                    {item.services.map((service, i) => (
                      <motion.div
                        key={service}
                        variants={{
                          hidden: { opacity: 0, x: isEven ? 40 : -40, filter: 'blur(4px)' },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            filter: 'blur(0px)',
                            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                          }
                        }}
                        className="group/service flex items-end gap-4 border-b border-ink/10 pb-4 cursor-default"
                      >
                        <span className="text-xs md:text-sm font-mono text-accent/50 mb-1">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-2xl md:text-4xl lg:text-5xl font-display text-ink/40 group-hover/service:text-accent group-hover/service:translate-x-4 transition-all duration-500">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-4 md:py-16">
                  <div className={`w-full max-w-lg mx-auto md:mx-0 ${isEven ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'}`}>
                    
                    {/* Number and Title */}
                    <div className="mb-8">
                      <span className="block text-2xl md:text-3xl font-display text-accent mb-4">
                        {numStr}
                      </span>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink tracking-wide">
                        {item.title.split(' ').map((word, i) => (
                           <span key={i} className="block">{word}</span>
                        ))}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-body-main text-ink/70 mb-10">
                      {item.description}
                    </p>

                    {/* Link */}
                    <Link href={item.link} className="inline-flex items-center gap-3 text-nav text-ink hover:text-accent transition-colors group/link w-fit">
                      Explore {item.title}
                      <span className="transition-transform group-hover/link:translate-x-2 text-accent">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

