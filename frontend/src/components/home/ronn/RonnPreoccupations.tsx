'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CONCERNS = [
  {
    title: 'LEASE EXPIRATION: STAY OR RELOCATE?',
    shape: 'square',
    description:
      'Renewing or moving: a multi-crore strategic commitment that shapes your business for years. We help you make the right choice based on space planning and objective data.',
    href: '/commercial-fit-outs',
  },
  {
    title: 'INSPIRING TEAMS BACK TO THE WORKPLACE',
    shape: 'diamond',
    description:
      'Looking to bring vibrant collaboration back? The office earns its place when it offers genuine cultural and ergonomic value that remote work cannot match.',
    href: '/commercial-fit-outs',
  },
  {
    title: 'ATTRACTING TALENT & MARQUEE CLIENTS',
    shape: 'circle',
    description:
      'Your physical space directly defines brand perception. Today, premier talent and high-value clients evaluate your environment as much as your service.',
    href: '/jewellery-showrooms',
  },
  {
    title: 'COMPLEX & TIME-CRITICAL FIT-OUTS',
    shape: 'triangle',
    description:
      '27-day turnkeys, high-security jewellery vaults, MEP engineering, acoustic controls. We take on every site risk and unforeseen challenge. Not you.',
    href: '/process',
  },
];

export default function RonnPreoccupations() {
  return (
    <section className="relative overflow-hidden bg-[#070708] text-white py-20 md:py-32 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <div className="mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A880] block mb-3">
            Client Perspectives
          </span>
          <h2 className="font-display font-light text-[36px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight text-white uppercase">
            YOUR KEY <br />
            <span className="font-serif italic text-[#C5A880]">CHALLENGES.</span>
          </h2>
        </div>

        {/* 4 Concern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CONCERNS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[24px] bg-[#121216] border border-white/10 hover:border-[#C5A880]/60 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl"
            >
              <div>
                {/* Geometric Shape Icon (matching Ronnsquare in Champagne Gold) */}
                <div className="w-12 h-12 mb-8 flex items-center justify-center text-[#C5A880] group-hover:scale-110 transition-transform duration-300">
                  {item.shape === 'square' && (
                    <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current">
                      <rect x="4" y="4" width="32" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <rect x="12" y="12" width="16" height="16" fill="currentColor" />
                    </svg>
                  )}
                  {item.shape === 'diamond' && (
                    <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current">
                      <polygon points="20,4 36,20 20,36 4,20" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <polygon points="20,12 28,20 20,28 12,20" fill="currentColor" />
                    </svg>
                  )}
                  {item.shape === 'circle' && (
                    <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current">
                      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="20" cy="8" r="4" fill="currentColor" />
                    </svg>
                  )}
                  {item.shape === 'triangle' && (
                    <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current">
                      <polygon points="20,6 36,34 4,34" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <polygon points="20,16 28,30 12,30" fill="currentColor" />
                    </svg>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-display font-normal text-xl sm:text-2xl text-white tracking-wide uppercase leading-snug mb-4 group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] group-hover:text-white transition-colors"
                >
                  <span>Discover</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
