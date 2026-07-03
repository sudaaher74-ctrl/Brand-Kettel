import ConsultationForm from '@/components/forms/ConsultationForm';
import Reveal from '@/components/ui/Reveal';

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-[120px]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />
      <div className="container-px relative">
        <Reveal>
          <div className="glass-card mx-auto max-w-3xl p-6 sm:p-12">
            <div className="text-center">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-accent" /> Consultation
              </span>
              <h2 className="mt-4 text-3xl font-light tracking-[1px] leading-tight text-ink sm:text-4xl">
                Let&apos;s Build Your Next Project
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-ink-secondary font-light">
                Share a few details and our team will reach out to plan your space.
              </p>
            </div>
            <div className="mt-10">
              <ConsultationForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
