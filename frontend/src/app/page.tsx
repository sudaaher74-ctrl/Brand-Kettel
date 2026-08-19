import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ProjectScrollReveal from '@/components/home/ProjectScrollReveal';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { fetchJson } from '@/lib/api';
import { testimonials as fallbackTestimonials } from '@/lib/data';

export const revalidate = 60;

export default async function HomePage() {
  const [testimonials] = await Promise.all([
    fetchJson('/api/admin/testimonials', fallbackTestimonials),
  ]);

  return (
    <>
      {/* 1. Hero — full-screen video */}
      <Hero />

      {/* 2. Welcome — brand manifesto + stats */}
      <Welcome />

      {/* 3. Our Expertise — stacked scroll panels */}
      <ProjectScrollReveal />

      {/* 4. Testimonials — infinite marquee */}
      <Testimonials testimonials={testimonials} />

      {/* 5. CTA — start a project */}
      <ConsultationCTA />
    </>
  );
}
