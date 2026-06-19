import Hero from '@/components/home/Hero';
import ProjectReveal from '@/components/home/ProjectReveal';
import Expertise from '@/components/home/Expertise';
import Showcase from '@/components/home/Showcase';
import Process from '@/components/home/Process';
import Commercial from '@/components/home/Commercial';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectReveal />
      <Expertise />
      <Showcase />
      <Process />
      <Commercial />
      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
