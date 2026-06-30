import ConsultationForm from '@/components/forms/ConsultationForm';

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#e5e4e2] py-24 sm:py-32">
      <div className="container-px relative flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-ink uppercase tracking-widest mb-6">
          Consultation
        </h2>
        <p className="max-w-2xl mx-auto text-base text-ink-muted leading-relaxed mb-12">
          Let&apos;s Build Your Next Project. Share a few details and our team will reach out to plan your space.
        </p>
        <div className="w-full max-w-xl mx-auto">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
