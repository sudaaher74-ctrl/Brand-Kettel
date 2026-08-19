import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ProjectScrollReveal from '@/components/home/ProjectScrollReveal';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { fetchJson } from '@/lib/api';
import {
  testimonials as fallbackTestimonials,
  processSteps as fallbackProcessSteps,
} from '@/lib/data';

export const revalidate = 60;

export default async function HomePage() {
  const [testimonials, processSteps] = await Promise.all([
    fetchJson('/api/admin/testimonials', fallbackTestimonials),
    fetchJson('/api/admin/content?type=processSteps', fallbackProcessSteps),
  ]);

  return (
    <>
      {/* 1. Hero — full-screen video */}
      <Hero />

      {/* 2. Welcome — brand manifesto + stats */}
      <Welcome />

      {/* 3. Our Expertise — stacked scroll panels */}
      <ProjectScrollReveal />

      {/* 4. Selected Work — horizontal project preview */}
      <PortfolioPreview />

      {/* 5. Process — how we work */}
      <Process
        steps={processSteps}
        eyebrow="How We Work"
        title="A process built for certainty"
        subtitle="Six disciplined stages — from first conversation to final handover."
      />

      {/* 6. Testimonials — infinite marquee */}
      <Testimonials testimonials={testimonials} />

      {/* 7. CTA — start a project */}
      <ConsultationCTA />
    </>
  );
}
