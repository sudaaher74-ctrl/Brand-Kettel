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
        <div className="flex flex-col gap-32 md:gap-48">
          {data.map((item, index) => {
            const isEven = index % 2 !== 0; // index 1 is even (02) visually
            const numStr = String(index + 1).padStart(2, '0');
            
            const titleParts = item.title.split(' ');
            const firstWord = titleParts[0] || '';
            const restWords = titleParts.slice(1).join(' ') || '';

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Container */}
                <div className="w-full md:w-5/12 lg:w-4/12">
                  <Link href={item.link} className="relative w-full aspect-[4/5] block overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1000ms] group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-[800ms]" />
                  </Link>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center">
                  <div className={`flex flex-col w-full max-w-lg mx-auto md:mx-0 ${isEven ? 'md:ml-auto md:mr-12' : 'md:mr-auto md:ml-12'}`}>
                    
                    {/* Large Background Number */}
                    <span className={`text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none font-display text-accent/20 mb-8 ${isEven ? 'self-start' : 'self-end'}`}>
                      {numStr}
                    </span>

                    {/* Title */}
                    <div className="flex flex-col mb-8">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink tracking-wide">
                        {restWords ? (
                          <>
                            <span className="block mb-2 md:mb-4">{firstWord}</span>
                            <div className="flex items-center gap-6">
                              {!isEven && <span className="text-xl font-sans text-accent/60 tracking-widest hidden md:block">{numStr}</span>}
                              <span className="text-accent">{restWords}</span>
                              {isEven && <span className="text-xl font-sans text-accent/60 tracking-widest hidden md:block">{numStr}</span>}
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center gap-6">
                            {!isEven && <span className="text-xl font-sans text-accent/60 tracking-widest hidden md:block">{numStr}</span>}
                            <span className="text-accent">{firstWord}</span>
                            {isEven && <span className="text-xl font-sans text-accent/60 tracking-widest hidden md:block">{numStr}</span>}
                          </div>
                        )}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-body-main text-ink/70 mb-10 md:max-w-md">
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

