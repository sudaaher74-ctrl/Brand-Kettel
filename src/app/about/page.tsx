import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'About Us — A Commercial Interior Design & Build Company',
  description:
    'Brand Kettle BuildSpaces is an execution-focused commercial interior company delivering office interiors, retail fit-outs, jewellery showrooms and turnkey projects across India.',
};

const stats = [
  { value: '250+', label: 'Projects delivered' },
  { value: '12+', label: 'Years of execution' },
  { value: '1.8M', label: 'Sq.ft built' },
  { value: '96%', label: 'On-time handover' },
];

const values = [
  { title: 'Execution first', body: 'We are a build company at heart — design that gets delivered, on site and on time.' },
  { title: 'One accountable team', body: 'Design, build and furnish under one roof, with a single point of accountability.' },
  { title: 'Transparent always', body: 'Clear scope, honest costing and milestone reporting at every stage.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An execution-focused commercial interior company"
        subtitle="We design, build and furnish commercial spaces that perform — from corporate headquarters to retail flagships and turnkey campuses."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=70"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} index={i}>
                <div className="rounded-3xl border border-line bg-card p-6 text-center shadow-soft">
                  <p className="font-display text-4xl font-semibold text-ink">{s.value}</p>
                  <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we stand for"
            title="Built on certainty, not surprises"
            subtitle="Business owners, developers and architects choose us because we deliver what we draw."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} index={i}>
                <div className="h-full rounded-3xl border border-line bg-card p-6 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
