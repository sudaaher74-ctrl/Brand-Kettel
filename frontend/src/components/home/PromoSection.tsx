import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

/**
 * Text block (heading + body + CTA) above a full-width image.
 * Mirrors the Interior Design / Portfolio / Showroom promo blocks on
 * palmlivingae.com. Reused for the Brand Kettle homepage.
 */
export default function PromoSection({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
  image,
  alt,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-px text-center">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-accent" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal index={1}>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold uppercase leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            {body}
          </p>
        </Reveal>
        <Reveal index={3}>
          <div className="mt-8 flex justify-center">
            <Link href={ctaHref} className="btn-accent">
              {ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal index={4} className="mt-12 sm:mt-16">
        <div className="relative h-[55vh] w-full overflow-hidden sm:h-[70vh]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
