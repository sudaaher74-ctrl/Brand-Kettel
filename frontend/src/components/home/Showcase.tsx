'use client';

import type { Project } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Showcase({ featured }: { featured: Project }) {
  return (
    <section className="relative h-[60vh] sm:h-[80vh] w-full bg-surface overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={featured.image}
          alt={`${featured.name} — ${featured.category}`}
          className="object-cover"
          fill
          sizes="100vw"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white uppercase tracking-widest mb-4">
          Our Portfolio
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/90 font-light mb-8">
          Browse our extensive commercial and residential portfolios, showcasing how we&apos;ve transformed our clients&apos; vision to reality across the globe.
        </p>
        <Link 
          href={`/portfolio`} 
          className="inline-flex items-center justify-center border border-white px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
