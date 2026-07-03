import ConsultationForm from '@/components/forms/ConsultationForm';
import Reveal from '@/components/ui/Reveal';

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-[140px]">
      <div className="container-px relative">
        <Reveal>
          <div className="bg-card border border-line mx-auto max-w-[800px] p-8 sm:p-14">
            <div className="text-center">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-accent" /> Consultation
              </span>
              <h2 className="mt-6 text-card-heading text-ink">
                Let&apos;s Build Your Next Project
              </h2>
              <p className="mx-auto mt-4 max-w-[500px] text-body-main">
                Share a few details and our team will reach out to plan your space.
              </p>
            </div>
            <div className="mt-12">
              <ConsultationForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
