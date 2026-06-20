import type { Metadata } from 'next';
import ConsultationForm from '@/components/forms/ConsultationForm';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Contact — Book a Consultation',
  description:
    'Book a consultation with Brand Kettle BuildSpaces for commercial interiors, office fit-outs, retail design, jewellery showrooms and turnkey projects.',
};

const points = [
  { label: 'Email', value: 'hello@brandkettle.com', href: 'mailto:hello@brandkettle.com' },
  { label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000' },
  { label: 'Studios', value: 'Bengaluru · Mumbai · Hyderabad' },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-surface pt-28 sm:pt-36">
      <div
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="container-px relative pb-20 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" /> Contact
              </span>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
                Let&apos;s Build Your Next Project
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
                Tell us about your space and timeline. Our team typically responds within one
                business day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {points.map((p, i) => (
                <Reveal key={p.label} index={i + 3}>
                  <div className="rounded-2xl border border-line bg-card p-5 shadow-soft">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      {p.label}
                    </p>
                    {p.href ? (
                      <a href={p.href} className="mt-1 block text-base font-semibold text-ink hover:text-accent">
                        {p.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-semibold text-ink">{p.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal index={1}>
            <div className="glass rounded-[2rem] p-6 shadow-float sm:p-8">
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
