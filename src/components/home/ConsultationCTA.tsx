import ConsultationForm from '@/components/forms/ConsultationForm';
import Reveal from '@/components/ui/Reveal';

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="container-px relative">
        <Reveal>
          <div className="glass mx-auto max-w-3xl rounded-[2rem] p-6 shadow-float sm:p-10">
            <div className="text-center">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-accent" /> Consultation
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Let&apos;s Build Your Next Project
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
                Share a few details and our team will reach out to plan your space.
              </p>
            </div>
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
