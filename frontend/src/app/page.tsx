import RonnTopBar from '@/components/home/ronn/RonnTopBar';
import RonnHero from '@/components/home/ronn/RonnHero';
import RonnRunningLine from '@/components/home/ronn/RonnRunningLine';
import RonnManifestoQuote from '@/components/home/ronn/RonnManifestoQuote';
import RonnTheses from '@/components/home/ronn/RonnTheses';
import RonnServicesTotem from '@/components/home/ronn/RonnServicesTotem';
import RonnReviews from '@/components/home/ronn/RonnReviews';
import RonnCTA from '@/components/home/ronn/RonnCTA';
import RonnFAQ from '@/components/home/ronn/RonnFAQ';

export const revalidate = 60;

export default function HomePage() {
  return (
    <div className="w-full bg-[#0A0A0B] selection:bg-[#C5A880] selection:text-[#0A0A0B]">
      {/* 1. Top Announcement Bar */}
      <RonnTopBar />

      {/* 2. Hero Section */}
      <RonnHero />

      {/* 3. Running Line Marquee Ticker ("ON THE GROUND / DELIVERED") */}
      <RonnRunningLine />

      {/* 4. Signature Manifesto Quote */}
      <RonnManifestoQuote />

      {/* 5. Numbers / Theses ("Brand Kettle in figures") */}
      <RonnTheses />

      {/* 6. Services Stacking Totem ("Our End-to-End Accompaniment") */}
      <RonnServicesTotem />

      {/* 7. Client Reviews ("Listen to Them / They trust us") */}
      <RonnReviews />

      {/* 8. Big Punchy CTA Banner ("A vision? A project?") */}
      <RonnCTA />

      {/* 9. FAQ Accordion */}
      <RonnFAQ />
    </div>
  );
}
