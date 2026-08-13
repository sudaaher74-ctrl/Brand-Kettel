import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import Expertise from '@/components/home/Expertise';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import WhyBrandKettle from '@/components/home/WhyBrandKettle';
import { fetchJson } from '@/lib/api';
import {
  services as fallbackServices,
  testimonials as fallbackTestimonials,
} from '@/lib/data';

export const revalidate = 60;

export default async function HomePage() {
  const [services, testimonials] = await Promise.all([
    fetchJson('/api/admin/services', fallbackServices),
    fetchJson('/api/admin/testimonials', fallbackTestimonials),
  ]);

  return (
    <>
      <Hero />
      <Welcome />
      <Expertise services={services.slice(0, 3)} />
      <WhyBrandKettle />
      <Testimonials testimonials={testimonials} />
      <ConsultationCTA />
    </>
  );
}

