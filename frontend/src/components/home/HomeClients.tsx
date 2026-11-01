import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ClientWordmark = { name: string; className: string; accessibleName?: string };

const clientRows: ClientWordmark[][] = [
  [
    { name: 'GUCCI', className: 'font-serif text-[2rem] tracking-[0.08em]' },
    { name: 'Taksha', className: 'font-display text-[1.8rem] font-medium tracking-[0.04em]' },
    { name: 'PNG Jewellers', className: 'font-serif text-[1.65rem] font-semibold tracking-[-0.04em]' },
    { name: 'GIVA', className: 'font-display text-[2rem] font-semibold tracking-[0.18em]' },
    { name: 'INDRIYA', className: 'font-display text-[1.65rem] font-medium tracking-[0.14em]' },
    { name: 'Havana Lounge', className: 'font-serif text-[1.6rem] italic tracking-[0.01em]' },
    { name: 'PRET A MANGER', className: 'font-display text-[1.25rem] font-bold tracking-[0.1em]' },
  ],
  [
    { name: 'Ramada Encore', className: 'font-display text-[1.55rem] font-semibold tracking-[0.01em]' },
    { name: 'Nanokirti', className: 'font-display text-[1.7rem] font-semibold tracking-[-0.04em]' },
    { name: '&Work', className: 'font-display text-[2rem] font-semibold tracking-[-0.08em]' },
    { name: 'Malabar Gold & Diamonds', className: 'font-serif text-[1.25rem] font-semibold tracking-[-0.02em]' },
    { name: 'LIC', accessibleName: 'Life Insurance Corporation of India (LIC)', className: 'font-display text-[2.2rem] font-bold tracking-[0.12em]' },
    { name: 'GEM Jeevan Tara', className: 'font-display text-[1.45rem] font-semibold tracking-[-0.02em]' },
    { name: 'IEML', className: 'font-display text-[2rem] font-bold tracking-[0.16em]' },
  ],
];

const clientAccents = ['#171717', '#60694B', '#7A1732', '#242424', '#514338', '#7A412B', '#184E36'];

function LogoRow({ row, reverse = false }: { row: number; reverse?: boolean }) {
  const clients = clientRows[row];
  const items = [...clients, ...clients];

  return (
    <div className="home-client-marquee-mask overflow-hidden">
      <div className={`home-client-marquee-track ${reverse ? 'home-client-marquee-track-reverse' : ''}`}>
        {items.map((client, index) => {
          const isDuplicate = index >= clients.length;
          return (
            <div
              className="home-client-logo-card"
              key={`${row}-${client.name}-${index}`}
              role="img"
              aria-label={client.accessibleName ?? client.name}
              aria-hidden={isDuplicate ? true : undefined}
            >
              <span className={client.className} style={{ color: clientAccents[(index % clients.length)] }}>
                {client.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HomeClients() {
  return (
    <section aria-labelledby="home-clients-title" className="home-clients-section">
      <div className="mx-auto max-w-[1480px] px-5 pt-20 text-center sm:pt-24 lg:px-10 lg:pt-28">
        <p className="home-clients-eyebrow">Our clients</p>
        <h2 id="home-clients-title" className="mx-auto mt-5 max-w-4xl text-4xl font-light leading-[1.03] tracking-[-0.055em] text-[#18181B] sm:text-5xl lg:text-7xl">
          Trusted by brands<br className="hidden sm:block" /> across industries.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#71717A] sm:text-base">
          We bring ambitious retail, hospitality and workplace environments to life.
        </p>
      </div>

      <div className="home-clients-rows mt-12 space-y-4 pb-2 sm:mt-16 sm:space-y-5 lg:mt-20">
        <LogoRow row={0} />
        <LogoRow row={1} reverse />
      </div>

      <div className="pb-20 pt-8 text-center sm:pb-24 lg:pb-28">
        <Link href="/portfolio" className="group inline-flex items-center gap-3 text-sm font-medium text-[#18181B] transition-colors hover:text-[#A07A4F]">
          <span>Explore our work</span>
          <span className="grid size-9 place-items-center bg-[#18181B] text-white transition-transform group-hover:translate-x-1 group-hover:bg-[#A07A4F]">
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
