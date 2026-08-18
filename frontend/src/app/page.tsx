import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ProjectScrollReveal from '@/components/home/ProjectScrollReveal';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { fetchJson } from '@/lib/api';
import {
  testimonials as fallbackTestimonials,
} from '@/lib/data';

export const revalidate = 60;

export default async function HomePage() {
  const [testimonials] = await Promise.all([
    fetchJson('/api/admin/testimonials', fallbackTestimonials),
  ]);

  return (
    <>
      <Hero />
      <Welcome />
      <ProjectScrollReveal />
      <Testimonials testimonials={testimonials} />
      <ConsultationCTA />
    </>
  );
}



