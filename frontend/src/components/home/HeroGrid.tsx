'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * Full-width 2x2 image-tile hero (mirrors palmlivingae.com hero grid).
 * Each tile is a large lifestyle photo with a category label + CTA.
 * Content/values are Brand Kettle's own.
 */
const tiles = [
  {
    label: 'Commercial',
    href: '/commercial-fit-outs',
    image: '/imgs/commercial/work co workspace.jpg',
    alt: 'Commercial Fit-Outs by Brand Kettle',
  },
  {
    label: 'Retail',
    href: '/retail-fit-outs',
    image: '/imgs/commercial/gucci.png',
    alt: 'Retail Store Interiors by Brand Kettle',
  },
  {
    label: 'Jewellery',
    href: '/jewellery-showrooms',
    image: '/imgs/commercial/jwellary.png',
    alt: 'Jewellery Showrooms by Brand Kettle',
  },
  {
    label: 'Residential',
    href: '/residential-interiors',
    image: '/imgs/residential/p076_107.jpg',
    alt: 'Residential Interiors by Brand Kettle',
  },
];

export default function HeroGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {tiles.map((tile, index) => (
        <Link
          key={tile.label}
          href={tile.href}
          className="group relative block h-[55vh] w-full overflow-hidden md:h-[60vh]"
        >
          <Image
            src={tile.image}
            alt={tile.alt}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="font-display text-4xl font-medium uppercase tracking-[0.15em] text-white sm:text-5xl md:text-6xl">
              {tile.label}
            </h2>
            <span className="mt-5 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors group-hover:border-accent group-hover:text-accent">
              Explore
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
