import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us — Brand Kettle BuildSpaces',
  description:
    'Brand Kettle BuildSpaces is a turnkey interior design, fit-out and furniture solutions company creating retail, commercial and residential environments across India.',
};

const stats = [
  { value: '10+', label: 'Years of Industry Expertise' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '3', label: 'Verticals: Retail · Commercial · Residential' },
  { value: 'Pan India', label: 'Execution Network' },
];



const pillars = [
  { title: 'Design Thinking', body: 'Every project begins with a deep understanding of your brand, brief and business goals.' },
  { title: 'Manufacturing Capability', body: 'In-house fabrication and joinery gives us unmatched quality control and cost efficiency.' },
  { title: 'Turnkey Execution', body: 'One accountable team from concept through construction — no gaps, no surprises.' },
];

const reasons = [
  { title: 'Purpose Before Design', body: 'Every project begins with understanding how the space needs to function—not just how it should look.' },
  { title: 'Precision in Execution', body: 'Design is only as good as its execution. We believe the quality of every detail matters.' },
  { title: 'Timelines You Can Count On', body: 'We value your time as much as our own. Every project is planned with clear milestones and delivered with accountability.' },
  { title: 'Partnerships That Last', body: 'For us, a successful project isn\'t the end of a transaction, it\'s the beginning of a long-term relationship.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Crafted, Built and Experienced"
        subtitle="We combine design thinking, manufacturing capability and turnkey execution to deliver spaces that are functional, immersive and built to last."
        image="/imgs/commercial/home1.png"
      />

      {/* ── Company Introduction ── */}
      <section className="bg-background py-[120px]">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-center">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" /> Our Story
              </span>
              <h2 className="mt-4 text-3xl font-light tracking-[1px] leading-[1.2] text-ink sm:text-4xl md:text-4xl italic">
                &quot;Good spaces aren&apos;t defined by how they look on day one. They&apos;re defined by how well they perform for years to come.&quot;
              </h2>
            </Reveal>
            <div className="space-y-5">
              <Reveal index={1}>
                <p className="text-lg leading-relaxed text-ink-secondary font-light">
                  Built on the execution expertise of Brand Kettle Projects Pvt Ltd, Brand Kettle BuildSpaces brings together design, manufacturing and turnkey execution to create retail, commercial and residential spaces.
                </p>
              </Reveal>
              <Reveal index={2}>
                <p className="text-lg leading-relaxed text-ink-secondary font-light">
                  Every project is thoughtfully designed around our clients&apos; vision, functional needs and the way the space is meant to be experienced.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── By the Numbers ── */}
      <section className="bg-surface py-[120px] border-y border-line">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" /> By the Numbers
            </span>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px lg:grid-cols-4 border border-line overflow-hidden rounded-xl">
            {stats.map((s, i) => (
              <Reveal key={s.label} index={i}>
                <div className="bg-card p-8 text-center group hover:bg-surface transition-colors duration-300">
                  <p className="font-display text-4xl font-light text-accent sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm font-light leading-snug text-ink-secondary">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── Why Choose Us ── */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-px">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch max-h-none lg:max-h-[85vh]">
            {/* Left Column: Large Image */}
            <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[auto] rounded-sm overflow-hidden">
              <Image 
                src="/imgs/commercial/taksha coverimg.png" 
                alt="Why Choose Us" 
                fill 
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Column: Content and Grid */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-2 lg:py-4">
              <Reveal>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-accent" /> Why Choose Us
                </span>
                <h2 className="mt-3 text-3xl font-light tracking-[1px] leading-[1.2] text-ink sm:text-4xl mb-8">
                  An execution-focused partner you can trust
                </h2>
              </Reveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((r, i) => (
                  <Reveal key={r.title} index={i}>
                    <div className="group border border-line bg-card p-5 lg:p-6 h-full transition-colors duration-300 hover:border-accent/40 flex flex-col">
                      <div className="flex h-10 w-10 items-center justify-center border-[1.5px] border-accent/20 bg-surface font-medium text-accent mb-4 text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-medium text-ink mb-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {r.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── Vision & Mission ── */}
      <section className="bg-background py-[120px]">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" /> Purpose
            </span>
          </Reveal>
          <div className="mt-10 grid gap-px border border-line overflow-hidden sm:grid-cols-2 rounded-xl">
            {/* Vision */}
            <Reveal index={0}>
              <div className="bg-card p-10 sm:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-xs font-light uppercase tracking-[0.25em] text-accent">
                    Our Vision
                  </span>
                </div>
                <p className="font-display text-2xl font-light tracking-[1px] leading-snug text-ink sm:text-3xl">
                  Great spaces don&apos;t just host experiences.
                  <span className="text-accent"> They shape them.</span>
                </p>
              </div>
            </Reveal>
            {/* Mission */}
            <Reveal index={1}>
              <div className="bg-surface p-10 sm:p-12 h-full border-l border-line">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-xs font-light uppercase tracking-[0.25em] text-accent">
                    Our Mission
                  </span>
                </div>
                <p className="text-base font-light leading-relaxed text-ink-secondary">
                  We combine design, manufacturing and execution to deliver exceptional retail, commercial and residential environments with <span className="text-ink font-medium">precision, craftsmanship and reliability</span>.
                </p>
                <p className="mt-4 text-base font-light leading-relaxed text-ink-secondary">
                  We strive to redefine how spaces are conceived and delivered by combining <span className="text-ink font-medium">creativity, technical expertise and attention to detail</span> in every project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


    </>
  );
}
