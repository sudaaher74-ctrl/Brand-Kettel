import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Brand Kettle BuildSpaces',
  description:
    'Brand Kettle BuildSpaces is a turnkey interior design, fit-out and furniture solutions company creating retail, commercial and residential environments across India.',
};

const stats = [
  { value: '10+', label: 'Years of Industry Expertise' },
  { value: '500+', label: 'Projects Delivered' },
  { value: 'Pan India', label: 'Execution Network' },
  { value: '3', label: 'Verticals: Retail · Commercial · Residential' },
];

const segments = [
  {
    tag: 'Retail',
    title: 'Luxury Jewellery Showrooms & Retail Environments',
    body: 'Precision lighting, secure display systems and immersive retail experiences engineered for premium brands.',
    icon: '◈',
  },
  {
    tag: 'Commercial',
    title: 'Corporate Workplaces & Turnkey Offices',
    body: 'Performance-driven corporate interiors and end-to-end fit-outs built for productivity and brand identity.',
    icon: '◉',
  },
  {
    tag: 'Residential',
    title: 'Bespoke Residential Interiors',
    body: 'Refined private homes where comfort, craft and detail converge under a single accountable team.',
    icon: '◎',
  },
];

const pillars = [
  { title: 'Design Thinking', body: 'Every project begins with a deep understanding of your brand, brief and business goals.' },
  { title: 'Manufacturing Capability', body: 'In-house fabrication and joinery gives us unmatched quality control and cost efficiency.' },
  { title: 'Turnkey Execution', body: 'One accountable team from concept through construction — no gaps, no surprises.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Crafted, Built and Experienced"
        subtitle="We combine design thinking, manufacturing capability and turnkey execution to deliver spaces that are functional, immersive and built to last."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=70"
      />

      {/* ── Company Introduction ── */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-center">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" /> Who we are
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl md:text-5xl">
                An integrated platform for every interior need
              </h2>
            </Reveal>
            <div className="space-y-5">
              <Reveal index={1}>
                <p className="text-base leading-relaxed text-ink-muted">
                  Brand Kettle BuildSpaces is a <span className="text-ink font-medium">turnkey interior design, fit-out and furniture solutions company</span> creating retail, commercial and residential environments across India.
                </p>
              </Reveal>
              <Reveal index={2}>
                <p className="text-base leading-relaxed text-ink-muted">
                  Built on the execution expertise of Brand Kettle Projects, we combine <span className="text-ink font-medium">design thinking, manufacturing capability and turnkey execution</span> to deliver spaces that are functional, immersive and built to last.
                </p>
              </Reveal>
              <Reveal index={3}>
                <p className="text-base leading-relaxed text-ink-muted">
                  We bring together craftsmanship, precision and execution excellence under one integrated platform — from luxury jewellery showrooms and retail environments to corporate workplaces and bespoke residential interiors.
                </p>
              </Reveal>
              <Reveal index={4}>
                <p className="text-base leading-relaxed text-accent font-medium italic border-l-2 border-accent pl-4">
                  &quot;We believe great spaces are not just designed — they are crafted, built and experienced.&quot;
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── By the Numbers ── */}
      <section className="bg-surface py-16 sm:py-20 border-y border-line">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" /> By the Numbers
            </span>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px lg:grid-cols-4 border border-line overflow-hidden">
            {stats.map((s, i) => (
              <Reveal key={s.label} index={i}>
                <div className="bg-card p-8 text-center group hover:bg-surface transition-colors duration-300">
                  <p className="font-display text-4xl font-semibold text-accent sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-ink-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" /> What we build
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl">
              Three verticals. One team. Zero compromises.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-line overflow-hidden sm:grid-cols-3">
            {segments.map((seg, i) => (
              <Reveal key={seg.tag} index={i}>
                <div className="group bg-card p-8 hover:bg-surface transition-colors duration-300 h-full">
                  <div className="flex items-start justify-between">
                    <span className="text-3xl text-accent">{seg.icon}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent border border-accent/30 px-2 py-1">
                      {seg.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink leading-snug">
                    {seg.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{seg.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Integrated Platform ── */}
      <section className="bg-surface py-16 sm:py-24 border-y border-line">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" /> Our platform
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl">
                Three pillars that make us different
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted max-w-md">
                We don&apos;t just design — we manufacture, build and hand over. That end-to-end control is what sets us apart.
              </p>
            </Reveal>
            <div className="divide-y divide-line border border-line">
              {pillars.map((p, i) => (
                <Reveal key={p.title} index={i + 1}>
                  <div className="group flex gap-6 p-6 bg-card hover:bg-background transition-colors duration-300">
                    <span className="shrink-0 font-display text-3xl font-semibold text-accent/30 group-hover:text-accent transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" /> Purpose
            </span>
          </Reveal>
          <div className="mt-10 grid gap-px border border-line overflow-hidden sm:grid-cols-2">
            {/* Vision */}
            <Reveal index={0}>
              <div className="bg-card p-10 sm:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Our Vision
                  </span>
                </div>
                <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
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
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Our Mission
                  </span>
                </div>
                <p className="text-base leading-relaxed text-ink-muted">
                  We combine design, manufacturing and execution to deliver exceptional retail, commercial and residential environments with <span className="text-ink font-medium">precision, craftsmanship and reliability</span>.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  We strive to redefine how spaces are conceived and delivered by combining <span className="text-ink font-medium">creativity, technical expertise and attention to detail</span> in every project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-surface py-16 sm:py-20 border-t border-line">
        <div className="container-px">
          <Reveal>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                  Ready to build your next space?
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Let&apos;s start a conversation about your project.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/portfolio" className="btn-ghost">
                  View Projects
                </Link>
                <Link href="/contact" className="btn-accent">
                  Book Consultation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
