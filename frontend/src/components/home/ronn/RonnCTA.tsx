'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function RonnCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#070708] text-white py-24 lg:py-36 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      {/* Background architectural image with subtle opacity */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15">
        <Image
          src="/imgs/commercial/ramda encre hotel1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/85 to-[#070708]" />
      </div>

      <div className="relative z-10 max-w-[1480px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-end">
          
          {/* Left Column (8 cols): Index + Monumental Heading */}
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880] mb-6">
              06 / Start A Project
            </p>

            <h2 className="text-5xl leading-[0.88] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white uppercase">
              A vision? A project? <br />
              <span className="font-serif italic font-normal text-[#C5A880] lowercase">let&apos;s talk about it.</span>
            </h2>
          </div>

          {/* Right Column (4 cols): Description & High-End Action Triggers */}
          <div className="lg:col-span-4">
            <p className="mb-8 max-w-md text-sm leading-7 text-[#A1A1AA] font-light">
              Flagship luxury retail, corporate campus expansions, or turnkey hospitality — our design and engineering leads respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between px-7 py-4 border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#0A0A0B] text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 group"
              >
                <span>Initiate Project Consultation</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+918959173790"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-white/10 hover:border-white text-[11px] font-mono uppercase tracking-wider text-white transition-all duration-300"
                >
                  <Phone className="size-3.5 text-[#C5A880]" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://wa.me/918959173790"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-white/10 hover:border-[#25D366] text-[11px] font-mono uppercase tracking-wider text-white transition-all duration-300"
                >
                  <MessageSquare className="size-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
