'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Commercial() {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="container-px flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start max-w-lg mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-ink uppercase mb-6">
            Commercial Interiors
          </h2>
          <p className="text-base text-ink-muted leading-relaxed mb-8">
            At Brand Kettle, our passion is creating spaces that truly feel impactful. From turnkey commercial workspaces and bespoke furniture to retail transformations, every detail is carefully crafted by our in-house team.
          </p>
          <Link
            href="/commercial-projects"
            className="inline-flex items-center justify-center border border-ink px-8 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-surface"
          >
            Learn More
          </Link>
        </div>

        {/* Right Side: Portrait Image */}
        <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
          <div className="relative w-full aspect-[4/5] bg-card overflow-hidden">
            <Image
              src="/imgs/p061_076.jpg"
              alt="Commercial workspace interior design"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
