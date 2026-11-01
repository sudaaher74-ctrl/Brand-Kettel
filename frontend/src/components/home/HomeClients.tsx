import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const clientProjects = [
  {
    name: 'Gucci',
    type: 'Luxury retail',
    location: 'India',
    image: '/imgs/commercial/gucci-green.webp',
    alt: 'Gucci luxury retail interior with emerald marble and custom display joinery',
  },
  {
    name: 'PNG Jewellers',
    type: 'Jewellery flagship',
    location: 'Mumbai',
    image: '/imgs/commercial/png1.jpg',
    alt: 'PNG Jewellers showroom delivered by Brand Kettle in Goregaon, Mumbai',
  },
  {
    name: 'GIVA',
    type: 'Jewellery retail',
    location: 'India',
    image: '/imgs/commercial/giva.webp',
    alt: 'GIVA jewellery showroom interior with clean white and gold finishes',
  },
  {
    name: 'Malabar Gold & Diamonds',
    type: 'Luxury retail',
    location: 'India',
    image: '/imgs/commercial/malabar-gold-cover.webp',
    alt: 'Malabar Gold and Diamonds retail interior project',
  },
  {
    name: 'Ramada Encore',
    type: 'Hospitality',
    location: 'Bareilly',
    image: '/imgs/commercial/ramada-encore-bareilly-hotel.jpg',
    alt: 'Ramada Encore hotel interior project in Bareilly',
  },
  {
    name: '&Work',
    type: 'Workplace',
    location: 'Faridabad',
    image: '/imgs/commercial/and-work-faridabad-coworking.jpg',
    alt: '&Work collaborative workspace in Faridabad',
  },
  {
    name: 'Pret A Manger',
    type: 'Hospitality',
    location: 'New Delhi',
    image: '/imgs/commercial/p080_111.jpg',
    alt: 'Pret A Manger restaurant interior at Select City Walk, Delhi',
  },
];

function ProjectCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={duplicate || undefined}>
      {clientProjects.map((project) => (
        <article
          key={`${duplicate ? 'duplicate-' : ''}${project.name}`}
          className="group relative h-[300px] w-[216px] shrink-0 overflow-hidden rounded-[3px] border border-white/10 bg-[#171718] sm:h-[360px] sm:w-[258px] lg:h-[390px] lg:w-[282px]"
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 640px) 216px, (max-width: 1024px) 258px, 282px"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D3B58E]">{project.type} · {project.location}</p>
            <h3 className="mt-2 text-xl font-light text-white sm:text-2xl">{project.name}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomeClients() {
  return (
    <section aria-labelledby="home-clients-title" className="overflow-hidden bg-[#0C0C0D] pb-24 pt-16 text-white sm:pb-28 sm:pt-20 lg:pb-32">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div data-motion="rise" className="mb-8 flex items-center justify-between border-t border-white/15 pt-5">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C5A880] sm:text-[10px]">07 / Built together</p>
          <p className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 sm:block">Selected work · 2018—2026</p>
        </div>
      </div>

      <div
        role="region"
        aria-label="Selected Brand Kettle client projects"
        tabIndex={0}
        className="bk-clients-viewport overflow-x-auto focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C5A880]"
      >
        <div className="bk-clients-track flex w-max" aria-label="Selected Brand Kettle client projects">
          <ProjectCards />
          <ProjectCards duplicate />
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-2 max-w-[1480px] px-5 text-center sm:px-8 lg:px-10">
        <h2 id="home-clients-title" data-motion="rise" className="font-display text-[clamp(3.5rem,12vw,10rem)] font-light uppercase leading-[0.86] tracking-[-0.065em] text-white">
          Our Clients
        </h2>
        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 border-t border-white/15 pt-5 sm:flex-row sm:gap-8 sm:text-left">
          <p className="max-w-xl text-xs font-light leading-6 text-white/55 sm:text-sm">
            Distinct brands. Different spaces. One shared commitment to getting every detail right.
          </p>
          <Link href="/portfolio" className="inline-flex shrink-0 items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-[#C5A880] sm:text-[10px]">
            Explore selected projects <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
