'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RonnCTA() {
  return (
    <section className="relative overflow-hidden bg-[#070708] text-white py-24 md:py-36 px-5 sm:px-8 border-b border-white/10">
      {/* Background architectural image with dark gradient */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <Image
          src="/imgs/commercial/ramda encre hotel1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/80 to-[#070708]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A880] block mb-4">
          Start The Conversation
        </span>

        <h2 className="font-display font-light text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] tracking-tight text-white uppercase mb-8">
          A vision? A project? <br />
          <span className="font-serif italic text-[#C5A880]">Let&apos;s talk about it.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A1A1AA] font-light max-w-xl mx-auto leading-relaxed mb-10">
          Whether you are relocating, expanding an office campus, or launching a flagship luxury showroom, our team responds within 24 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black hover:bg-[#C5A880] text-xs sm:text-sm uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-2xl group"
          >
            <span>Let&apos;s connect</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <a
            href="tel:+918959173790"
            className="inline-flex items-center gap-2 px-8 py-5 rounded-full border border-white/20 hover:border-white text-xs sm:text-sm uppercase tracking-[0.16em] font-light text-white transition-all duration-300 hover:bg-white/5"
          >
            <span>Call +91 89591 73790</span>
          </a>
        </div>
      </div>
    </section>
  );
}
