import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers — Brand Kettle BuildSpaces',
  description:
    'Join the Brand Kettle team. Explore careers in commercial architecture, turnkey fit-outs, project management, and joinery manufacturing across India.',
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  isActive: boolean;
  createdAt: string;
};

async function getJobs(): Promise<JobOpening[]> {
  try {
    const res = await fetch(`${API_URL}/api/admin/careers/jobs`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.filter((j: JobOpening) => j.isActive !== false);
  } catch {
    return [];
  }
}

const CULTURE_PILLARS = [
  {
    num: '01',
    title: 'Pan-India Project Scale',
    desc: 'Work on landmark commercial campuses, flagship luxury showrooms, and high-footfall retail destinations across India.',
  },
  {
    num: '02',
    title: 'In-House Factory Precision',
    desc: 'Collaborate directly with our joinery and fabrication works to transform architectural concepts into physical reality.',
  },
  {
    num: '03',
    title: 'Execution Rigor',
    desc: 'Be part of a high-speed execution culture where 3,400 sq ft turnkey flagships are planned and delivered in 27 days.',
  },
  {
    num: '04',
    title: 'Merit-First Growth',
    desc: 'Transparent project ownership, leadership responsibility, and rapid career progression based on craft and accountability.',
  },
];

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <div className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>Talent &amp; Leadership</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-tight uppercase text-white">
            Build Spaces. <br />
            <span className="font-serif italic font-normal text-[#C5A880]">Build Your Career.</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl mx-auto">
            We are always seeking ambitious architects, interior project managers, and joinery engineers who share our devotion to craft, speed, and precision.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <section className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-2">
              Why Brand Kettle
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white uppercase tracking-tight">
              A Culture of Architectural Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_PILLARS.map((p) => (
              <div
                key={p.num}
                className="rounded-[20px] bg-[#121216] p-7 border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif italic text-xs text-[#C5A880] mb-3 block">{p.num}</span>
                  <h3 className="font-display text-base font-medium uppercase tracking-wide text-white mb-3">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed mt-2">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions List */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-wide">
              Current Openings
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium">
              {jobs.length} Active {jobs.length === 1 ? 'Role' : 'Roles'}
            </span>
          </div>

          {jobs.length === 0 ? (
            <div className="rounded-[24px] bg-[#121216] border border-white/10 p-10 sm:p-14 text-center">
              <span className="w-3 h-3 rounded-full bg-[#C5A880] inline-block animate-pulse mb-4" />
              <h4 className="font-display font-light text-xl text-white uppercase mb-2">
                No Specific Role Openings Listed Today
              </h4>
              <p className="text-sm text-[#A1A1AA] font-light max-w-md mx-auto mb-8">
                We are always expanding our turnkey architectural and site execution teams across India. Send your portfolio and resume directly to our leadership team.
              </p>
              <a
                href="mailto:vini@brandkettle.in?subject=Spontaneous%20Application%20-%20Architectural%20%26%20Project%20Role"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-xl"
              >
                Submit Spontaneous Application →
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-[24px] bg-[#121216] border border-white/10 hover:border-[#C5A880]/50 p-8 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h4 className="font-display font-light text-2xl text-white uppercase tracking-wide">
                        {job.title}
                      </h4>
                      <div className="mt-2.5 flex flex-wrap gap-2.5">
                        {job.location && (
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#C5A880] uppercase tracking-wider font-medium">
                            {job.location}
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/70 uppercase tracking-wider font-light">
                          {job.type || 'Full-time'}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`mailto:vini@brandkettle.in?subject=Application for ${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A880] text-[#0A0A0B] hover:bg-white text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shrink-0"
                    >
                      Apply Now →
                    </a>
                  </div>

                  {job.description && (
                    <div className="mt-6 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed border-t border-white/5 pt-5">
                      {job.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
