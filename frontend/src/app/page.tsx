'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main id="top" className="overflow-hidden bg-[#FAF8F5] text-[#18181B] selection:bg-[#A07A4F] selection:text-white">
      
      {/* ─── 00 / HEADER ─── */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-[#18181B]/15">
        <div className="mx-auto flex h-24 max-w-[1480px] items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <a href="#top" aria-label="Brand Kettle home" className="block bg-[#FAF8F5] p-2">
            <Image
              src="/logo.png"
              alt="Brand Kettle BuildSpaces"
              width={160}
              height={44}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.2em] md:flex text-[#18181B]" aria-label="Main navigation">
            <a className="transition-opacity hover:opacity-45" href="#collection">Collection</a>
            <a className="transition-opacity hover:opacity-45" href="#capabilities">Capabilities</a>
            <a className="transition-opacity hover:opacity-45" href="#process">Process</a>
            <a className="transition-opacity hover:opacity-45" href="#philosophy">Philosophy</a>
            <a className="transition-opacity hover:opacity-45" href="#contact">Contact</a>
            <Link className="transition-opacity hover:opacity-45" href="/about">About</Link>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden border-b border-[#18181B] pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] lg:block hover:opacity-60 transition-opacity">
              Start a project
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#18181B] md:hidden hover:bg-black/5"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-[#18181B]/15 bg-[#FAF8F5] px-5 py-6 md:hidden">
            <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#18181B]">
              <a onClick={() => setMobileMenuOpen(false)} href="#collection">Collection</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#capabilities">Capabilities</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#process">Process</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#philosophy">Philosophy</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact">Contact</a>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about">About</Link>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-[#A07A4F] pt-2">
                Start a project →
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[780px] px-5 pb-20 pt-32 lg:h-[96svh] lg:px-10 lg:pb-10 lg:pt-28">
        {/* Giant Watermark Typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[17%] overflow-hidden text-center font-display text-[14vw] sm:text-[16vw] tracking-wider leading-none text-[#18181B]/[0.04] select-none font-bold whitespace-nowrap"
        >
          BRAND KETTLE
        </div>

        <div className="relative mx-auto grid h-full max-w-[1480px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="z-10 order-2 lg:order-1 lg:col-span-4 lg:self-end lg:pb-24">
            <p className="max-w-xs border-l border-[#18181B] pl-4 text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#18181B]">
              Premium furniture · Precision manufacturing · Custom interiors
            </p>
            
            <h1 className="mt-7 max-w-md text-6xl leading-[0.84] sm:text-7xl lg:text-[5.5rem] font-light text-[#18181B]">
              Furniture,<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">crafted</em> to a<br />
              higher standard.
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#71717A]">
              Where sophisticated design meets German engineering, for homes, hotels, offices and landmark projects.
            </p>
          </div>

          {/* Center Column: Showcase Image Frame + Floating Explore Stamp */}
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden bg-[#EFECE6] relative shadow-none">
              <Image
                src="/assets/akshat-hero.jpg"
                alt="Brand Kettle custom living and dining interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.025]"
              />
            </div>

            {/* Circular Floating Explore Stamp */}
            <a
              href="#collection"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none bg-[#18181B] text-[#FAF8F5] shadow-none hover:bg-[#18181B]/85 absolute -bottom-8 right-4 size-28 rounded-full p-0 sm:size-32 lg:-right-7 flex-col text-[10px] uppercase tracking-[0.2em]"
            >
              <span>Explore</span>
              <ArrowDown className="size-4" />
            </a>
          </div>

          {/* Right Column: Architectural Detail Tile & Technical Tag */}
          <div className="order-3 hidden lg:col-span-3 lg:block lg:self-end lg:pb-20">
            <div className="relative ml-auto aspect-square max-w-64 overflow-hidden bg-[#EFECE6]">
              <Image
                src="/assets/akshat-kitchen.jpg"
                alt="Brand Kettle furniture material detail"
                fill
                sizes="260px"
                className="h-full w-full scale-150 object-cover object-left mix-blend-multiply"
              />
              <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#18181B]">
                Detail / 01—24
              </span>
            </div>

            <div className="mt-14 text-right text-[10px] uppercase tracking-[0.2em] text-[#18181B]">
              <p className="font-semibold">Engineered for living</p>
              <p className="mt-2 text-[#71717A]">Accuracy / material / finish</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 01 / PHILOSOPHY ─── */}
      <section id="philosophy" className="mx-auto grid max-w-[1480px] gap-12 border-t border-[#18181B]/15 px-5 py-24 lg:grid-cols-12 lg:px-10 lg:py-36 bg-[#FAF8F5]">
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
            01 / Philosophy
          </p>
        </div>

        <div className="lg:col-span-6">
          <h2 className="text-6xl leading-[0.9] lg:text-8xl font-light text-[#18181B]">
            Precision is<br />
            <em className="font-normal font-serif italic text-[#A07A4F]">our luxury.</em>
          </h2>
        </div>

        <div className="max-w-xl lg:col-span-4 lg:pt-20">
          <p className="font-display text-3xl leading-tight lg:text-4xl text-[#18181B]">
            Luxury isn’t only about how furniture looks. It is about how precisely it is made.
          </p>
          <p className="mt-8 text-sm leading-7 text-[#71717A]">
            Our manufacturing process combines experienced craftsmanship with German machinery and precision technology, allowing us to achieve exceptional accuracy, consistency and finishing across every component.
          </p>
        </div>
      </section>

      {/* ─── THE MAKING OF PRECISION (CAD BLUEPRINT SCHEMATICS) ─── */}
      <section className="bg-[#0F0F12] py-20 text-[#F4F4F5] lg:py-28 border-y border-white/10">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          
          {/* Header */}
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5A880] lg:col-span-3">
              The making of precision
            </p>
            <h2 className="text-5xl leading-[0.95] lg:col-span-6 lg:text-7xl font-light text-white">
              Engineering, made <em className="font-serif italic font-light text-[#C5A880]">visible.</em>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-white/50 lg:col-span-3">
              Tolerance / consistency / control.<br />
              Every detail resolved before production.
            </p>
          </div>

          {/* 4 Architectural Blueprint Articles */}
          <div className="grid overflow-hidden rounded-3xl border border-white/15 md:grid-cols-2">
            
            {/* Card 01: German Machinery */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">01 — 04</span>
                <span className="text-white/35">CUT / 01</span>
              </div>

              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full text-white/70">
                  <defs>
                    <pattern id="grid-0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M16 0H0V16" className="fill-none stroke-current text-white/10" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-0)" />
                  <g className="fill-none stroke-current" strokeWidth="1">
                    <path d="M52 130h216M72 130V78h176v52M92 78V55h136v23M110 55l8-16h84l8 16M62 148h196" />
                    <path d="M110 39v-14m100 30V25M44 78h32m168 0h32" strokeDasharray="4 5" />
                    <circle cx="160" cy="92" r="22" />
                    <path d="M145 92h30M160 77v30" />
                  </g>
                  <g className="fill-current text-[#C5A880] font-mono text-[7px]">
                    <text x="12" y="18">AXIS / 01</text>
                    <text x="250" y="178">REV. A</text>
                  </g>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white group-hover:text-[#C5A880] transition-colors">
                  German Machinery
                </h3>
                <p className="text-sm leading-6 text-white/55">
                  Precise cutting, drilling, edge processing and component manufacturing.
                </p>
              </div>
            </article>

            {/* Card 02: Precision Manufacturing */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">02 — 04</span>
                <span className="text-white/35">ALIGN / 02</span>
              </div>

              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full text-white/70">
                  <defs>
                    <pattern id="grid-1" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M16 0H0V16" className="fill-none stroke-current text-white/10" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-1)" />
                  <g className="fill-none stroke-current" strokeWidth="1">
                    <rect x="72" y="45" width="176" height="100" />
                    <rect x="88" y="59" width="144" height="72" strokeDasharray="4 4" />
                    <path d="M48 45h18m-18 100h18M54 45v100M72 158v16m176-16v16M72 166h176" />
                    <circle cx="160" cy="95" r="25" />
                    <path d="M122 95h76M160 57v76" />
                  </g>
                  <g className="fill-current text-[#C5A880] font-mono text-[7px]">
                    <text x="12" y="18">AXIS / 02</text>
                    <text x="250" y="178">REV. A</text>
                  </g>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white group-hover:text-[#C5A880] transition-colors">
                  Precision Manufacturing
                </h3>
                <p className="text-sm leading-6 text-white/55">
                  Accuracy and consistency across individual pieces and complete projects.
                </p>
              </div>
            </article>

            {/* Card 03: Refined Finishing */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">03 — 04</span>
                <span className="text-white/35">EDGE / 03</span>
              </div>

              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full text-white/70">
                  <defs>
                    <pattern id="grid-2" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M16 0H0V16" className="fill-none stroke-current text-white/10" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-2)" />
                  <g className="fill-none stroke-current" strokeWidth="1">
                    <path d="M63 135l45-88h135l14 20-45 88H77z" />
                    <path d="M108 47l14 20h135M77 155l45-88M212 155l45-88" />
                    <path d="M95 112h126M102 98h126M109 84h126" strokeDasharray="3 4" />
                    <circle cx="243" cy="67" r="5" />
                  </g>
                  <g className="fill-current text-[#C5A880] font-mono text-[7px]">
                    <text x="12" y="18">AXIS / 03</text>
                    <text x="250" y="178">REV. A</text>
                  </g>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white group-hover:text-[#C5A880] transition-colors">
                  Refined Finishing
                </h3>
                <p className="text-sm leading-6 text-white/55">
                  Selected materials and exacting processes create a sophisticated final appearance.
                </p>
              </div>
            </article>

            {/* Card 04: Built for Performance */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">04 — 04</span>
                <span className="text-white/35">LOAD / 04</span>
              </div>

              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full text-white/70">
                  <defs>
                    <pattern id="grid-3" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M16 0H0V16" className="fill-none stroke-current text-white/10" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-3)" />
                  <g className="fill-none stroke-current" strokeWidth="1">
                    <path d="M58 137h204M78 137V66h164v71M96 66l16-20h96l16 20M104 137v-32h112v32" />
                    <path d="M160 23v65m-8-8 8 8 8-8M80 154v16m160-16v16M80 162h160" />
                    <path d="M62 106h196" strokeDasharray="4 5" />
                  </g>
                  <g className="fill-current text-[#C5A880] font-mono text-[7px]">
                    <text x="12" y="18">AXIS / 04</text>
                    <text x="250" y="178">REV. A</text>
                  </g>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white group-hover:text-[#C5A880] transition-colors">
                  Built for Performance
                </h3>
                <p className="text-sm leading-6 text-white/55">
                  Engineered not just to look premium, but to perform reliably every day.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ─── 02 / COLLECTION ─── */}
      <section id="collection" className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36 bg-[#FAF8F5]">
        <div className="mb-16 grid items-end border-b border-[#18181B]/15 pb-7 md:grid-cols-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F] md:col-span-3">
            02 / Collection
          </p>
          <h2 className="mt-4 text-6xl leading-none md:col-span-6 md:mt-0 lg:text-8xl font-light text-[#18181B]">
            Made for<br />
            <em className="font-normal font-serif italic text-[#A07A4F]">your space.</em>
          </h2>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-[#71717A] md:col-span-3 md:block">
            Premium finishes.<br />
            Intelligent storage.<br />
            Precision detailing.
          </p>
        </div>

        {/* 3 Staggered Columns (Akshat Signature Offset) */}
        <div className="grid gap-6 md:grid-cols-12 items-start">
          
          {/* Card 1: Kitchens */}
          <article className="md:col-span-5 group">
            <div className="relative overflow-hidden bg-[#EFECE6] aspect-[4/5]">
              <Image
                src="/assets/akshat-kitchen.jpg"
                alt="Brand Kettle kitchens"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />
              <span className="absolute left-4 top-4 bg-[#FAF8F5] px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-[#18181B]">
                FIG. 01
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
              <div>
                <h3 className="text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Kitchens
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A]">
                  Contemporary kitchens designed around your lifestyle, with intelligent planning and uncompromising finishes.
                </p>
              </div>
              <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F]" />
            </div>
          </article>

          {/* Card 2: Wardrobes (Offset md:mt-28) */}
          <article className="md:col-span-4 md:mt-28 group">
            <div className="relative overflow-hidden bg-[#EFECE6] aspect-[4/5]">
              <Image
                src="/assets/akshat-wardrobe.jpg"
                alt="Brand Kettle wardrobes"
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />
              <span className="absolute left-4 top-4 bg-[#FAF8F5] px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-[#18181B]">
                FIG. 02
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
              <div>
                <h3 className="text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Wardrobes
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A]">
                  From minimalist sliding wardrobes to luxurious walk-in systems, planned around your space.
                </p>
              </div>
              <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F]" />
            </div>
          </article>

          {/* Card 3: Sofas & Partitions (Offset md:mt-56) */}
          <article className="md:col-span-3 md:mt-56 group">
            <div className="relative overflow-hidden bg-[#EFECE6] aspect-[4/5]">
              <Image
                src="/assets/akshat-living.jpg"
                alt="Brand Kettle sofas & partitions"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />
              <span className="absolute left-4 top-4 bg-[#FAF8F5] px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-[#18181B]">
                FIG. 03
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Sofas &amp; Partitions
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A]">
                  Comfort, proportion and architectural character—custom made for the spaces they belong to.
                </p>
              </div>
              <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F]" />
            </div>
          </article>

        </div>

        {/* Sub-Grid Rows */}
        <div className="mt-12 grid border-t border-[#18181B]/15 sm:grid-cols-2">
          <div className="border-b border-[#18181B]/15 py-8 sm:pr-12 sm:odd:border-r">
            <h3 className="text-3xl font-light text-[#18181B]">Beds</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#71717A]">
              Strong construction, refined proportions and luxurious detailing for a calm, complete bedroom.
            </p>
          </div>
          <div className="border-b border-[#18181B]/15 py-8 sm:pl-12">
            <h3 className="text-3xl font-light text-[#18181B]">Architectural Partitions</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#71717A]">
              Elegant transitions for residences, offices, hospitality environments and commercial interiors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 03 / CAPABILITIES ─── */}
      <section id="capabilities" className="bg-[#EFECE6] py-24 lg:py-36 text-[#18181B]">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
                03 / Capabilities
              </p>
            </div>
            
            <h2 className="text-6xl leading-[0.9] lg:col-span-6 lg:text-8xl font-light text-[#18181B]">
              Furniture for<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">every scale.</em>
            </h2>

            <p className="max-w-xl self-end text-sm leading-7 text-[#71717A] lg:col-span-4">
              Our capabilities extend beyond individual homes. We manufacture for residential, hospitality, commercial and institutional projects—with the infrastructure for bespoke and bulk requirements.
            </p>
          </div>

          <div className="mt-20 grid gap-x-10 border-t border-[#18181B]/15 md:grid-cols-2">
            {/* 01 Hospitality */}
            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8">
              <span className="font-mono text-[10px] text-[#A07A4F]">01</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Hospitality
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A]">
                  Complete solutions for guest rooms, suites, common areas and back-of-house requirements.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#18181B] transition-transform group-hover:translate-x-2" />
            </article>

            {/* 02 Hostels & Student Housing */}
            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8">
              <span className="font-mono text-[10px] text-[#A07A4F]">02</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Hostels &amp; Student Housing
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A]">
                  Durable, functional and scalable furniture for accommodation and residential institutions.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#18181B] transition-transform group-hover:translate-x-2" />
            </article>

            {/* 03 Offices */}
            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8">
              <span className="font-mono text-[10px] text-[#A07A4F]">03</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Offices
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A]">
                  Workstations, storage, meeting rooms, cabins, reception areas and custom furniture.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#18181B] transition-transform group-hover:translate-x-2" />
            </article>

            {/* 04 Bulk Furniture */}
            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8">
              <span className="font-mono text-[10px] text-[#A07A4F]">04</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Bulk Furniture
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A]">
                  Consistent large-volume manufacturing for developers, contractors, institutions and businesses.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#18181B] transition-transform group-hover:translate-x-2" />
            </article>
          </div>
        </div>
      </section>

      {/* ─── 04 / PROCESS ─── */}
      <section id="process" className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36 bg-[#FAF8F5]">
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F] lg:col-span-2">
            04 / Process
          </p>
          <div className="lg:col-span-7">
            <h2 className="text-6xl leading-[0.88] lg:text-8xl font-light text-[#18181B]">
              Understand. Design.<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">Engineer. Deliver.</em>
            </h2>
          </div>
          <p className="max-w-md self-end text-sm leading-7 text-[#71717A] lg:col-span-3">
            We work closely with architects, designers, developers, contractors and homeowners to translate requirements into precisely manufactured furniture.
          </p>
        </div>

        {/* 6 Step Cards with Animated Scale Lines */}
        <div className="mt-20 grid border-t border-[#18181B]/15 md:grid-cols-2 lg:grid-cols-3">
          
          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r hover:bg-black/[0.015] transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>01</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/15 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">Consult</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A]">
              We understand your requirements, space, design language and functional needs.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r hover:bg-black/[0.015] transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>02</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/15 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">Design</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A]">
              Our team develops furniture solutions around your space and specifications.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-black/[0.015] transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>03</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/15 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">Engineer</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A]">
              Every component is planned for accurate manufacturing, assembly and installation.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r hover:bg-black/[0.015] transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>04</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/15 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">Manufacture</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A]">
              Advanced German machinery and skilled workmanship bring the design to life.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r hover:bg-black/[0.015] transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>05</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/15 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">Finish</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A]">
              Every surface, edge, joint and detail is inspected for a refined final finish.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-black/[0.015] transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>06</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/15 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">Install</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A]">
              Our team ensures the finished furniture is installed accurately and professionally.
            </p>
          </article>

        </div>
      </section>

      {/* ─── PRECISION IS A MINDSET (CONTRAST BANNER) ─── */}
      <section className="bg-[#0F0F12] py-24 text-white lg:py-36 border-y border-white/10">
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Made with technology. Finished by people.
            </p>
            <h2 className="mt-6 text-6xl leading-[0.88] lg:text-8xl font-light text-white">
              Precision is not<br />
              a machine setting.<br />
              <em className="font-normal font-serif italic text-[#C5A880]">It is a mindset.</em>
            </h2>
          </div>

          <div className="self-end">
            <p className="font-display text-3xl leading-tight text-white">
              Technology gives us precision. Experience gives us judgment.
            </p>
            <p className="mt-7 leading-8 text-white/65">
              German manufacturing technology delivers accuracy and repeatability, while experienced professionals ensure every piece meets the visual and functional standards expected from premium furniture.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 05 / THE AKSHAT / BK STANDARD ─── */}
      <section className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36 bg-[#FAF8F5]">
        <div className="flex items-end justify-between border-b border-[#18181B]/15 pb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
            05 / The Brand Kettle standard
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#71717A]">
            Specification BK—06
          </p>
        </div>

        <div className="mt-8 grid border-t border-[#18181B]/15 md:grid-cols-2 lg:grid-cols-3">
          
          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">01</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Precision</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
              Accurate manufacturing for cleaner lines, better alignment and consistent results.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">02</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Consistency</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
              The same attention to detail across a single piece or hundreds of units.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">03</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Customisation</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
              Furniture designed around your dimensions, requirements and design language.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">04</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Quality</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
              Carefully selected materials and controlled manufacturing processes.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">05</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Finish</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
              Premium surfaces, refined edges and meticulous detailing.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">06</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Reliability</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
              A systematic approach to manufacturing and project execution.
            </p>
          </article>

        </div>
      </section>

      {/* ─── EDITORIAL QUOTE ─── */}
      <section className="bg-[#EFECE6] px-5 py-24 text-center lg:py-36 text-[#18181B]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
          Built for those who notice the details
        </p>

        <blockquote className="mx-auto mt-8 max-w-5xl font-display text-5xl leading-[0.95] lg:text-8xl font-light text-[#18181B]">
          “A perfectly aligned door.<br />
          <em className="font-serif italic font-normal text-[#A07A4F]">A seamless edge.</em><br />
          A finish refined from every angle.”
        </blockquote>

        <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-[#71717A]">
          These details may seem small. Together, they define the difference between ordinary furniture and exceptional furniture.
        </p>
      </section>

      {/* ─── 06 / START A PROJECT ─── */}
      <section id="contact" className="bg-[#18181B] py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-[1480px] items-end gap-12 px-5 lg:grid-cols-12 lg:px-10">
          
          <div className="lg:col-span-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              06 / Start a project
            </p>
            <h2 className="mt-6 text-6xl leading-[0.88] lg:text-8xl font-light text-white">
              Tell us about<br />
              <em className="font-normal font-serif italic text-[#C5A880]">your next project.</em>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-8 max-w-md text-sm leading-7 text-white/70 font-light">
              Homes, hotels, offices or large-scale requirements—our team will help develop the right furniture solution.
            </p>
            
            <a
              href="https://wa.me/918959173790"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-current bg-transparent text-white hover:bg-white hover:text-[#18181B] h-12 px-7 text-xs uppercase tracking-[0.16em] transition-all duration-300"
            >
              <span>Enquire now</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#FAF8F5] px-5 py-12 lg:px-10 text-[#18181B] border-t border-[#18181B]/15">
        <div className="mx-auto flex max-w-[1480px] flex-col items-start justify-between gap-8 border-b border-[#18181B]/15 pb-10 md:flex-row md:items-end">
          <Image
            src="/logo.png"
            alt="Brand Kettle BuildSpaces"
            width={180}
            height={50}
            className="h-12 w-auto object-contain"
          />
          <p className="max-w-xl text-xs uppercase leading-6 tracking-[0.12em] text-[#71717A]">
            Kitchens · Wardrobes · Partitions · Sofas · Beds · Hotel Furniture · Hostel Furniture · Office Furniture · Bulk Furniture
          </p>
        </div>

        <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-3 pt-6 text-xs text-[#71717A] md:flex-row">
          <p>Premium Furniture. Precision Manufacturing.</p>
          <p>German Machinery · Premium Finishing</p>
        </div>
      </footer>

    </main>
  );
}
