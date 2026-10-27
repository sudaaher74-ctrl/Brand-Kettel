import RonnHero from '@/components/home/ronn/RonnHero';
import RonnRunningLine from '@/components/home/ronn/RonnRunningLine';
import RonnManifestoQuote from '@/components/home/ronn/RonnManifestoQuote';
import RonnTheses from '@/components/home/ronn/RonnTheses';
import RonnServicesTotem from '@/components/home/ronn/RonnServicesTotem';
import RonnReviews from '@/components/home/ronn/RonnReviews';
import RonnCTA from '@/components/home/ronn/RonnCTA';
import RonnFAQ from '@/components/home/ronn/RonnFAQ';
import { HOME_FAQS } from '@/lib/faqs';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';

export const revalidate = 60;

export default function HomePage() {
  return (
    <div className="w-full bg-[#0A0A0B] selection:bg-[#C5A880] selection:text-[#0A0A0B]">
      {/* FAQPage markup is generated from HOME_FAQS — the same array RonnFAQ
          renders — so the markup can never disagree with the visible answers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(HOME_FAQS, '/'))}
      />

      {/* 1. Hero Section (First Page) */}
      <RonnHero />

      {/* 3. 2nd Scroll: Signature Manifesto Quote ("Our Signature") */}
      <RonnManifestoQuote />

      {/* 4. Next: By the Numbers ("Brand Kettle in figures") */}
      <RonnTheses />

      {/* 5. Running Line Marquee Ticker ("ON THE GROUND / DELIVERED") */}
      <RonnRunningLine />

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
