import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  path: '/careers',
  title: 'Careers — Brand Kettle BuildSpaces',
  description: 'Join the Brand Kettle team. Explore careers in commercial architecture, turnkey fit-outs, project management, and joinery manufacturing across India.',
  socialTitle: 'Careers at Brand Kettle BuildSpaces',
  socialDescription: 'Roles in commercial architecture, site project management and factory joinery, on live pan-India fit-out projects.',
  image: '/imgs/commercial/brandkettle2.jpg',
  imageAlt: 'Brand Kettle BuildSpaces studio workspace where the design and project teams sit',
});

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
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>05</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Talent &amp; Leadership</span>
            <span className="text-[#18181B]/30">—</span>
            <span>Careers</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[52px] md:text-[64px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Build Spaces. <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Build Your Career.</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl mx-auto">
            We are always seeking ambitious architects, interior project managers, and joinery engineers who share our devotion to craft, speed, and precision.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
              Why Brand Kettle
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight">
              A Culture of Architectural Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_PILLARS.map((p) => (
              <div
                key={p.num}
                className="bg-[#F2EDE4] p-7 border border-[#18181B]/15 hover:border-[#18181B]/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-3 block">{p.num}</span>
                  <h3 className="font-display text-base font-semibold uppercase tracking-wide text-[#18181B] mb-3">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs text-[#71717A] font-light leading-relaxed mt-2">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions List */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#18181B]/15">
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#18181B] uppercase tracking-wide">
              Current Openings
            </h3>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A07A4F] font-semibold">
              {jobs.length} Active {jobs.length === 1 ? 'Role' : 'Roles'}
            </span>
          </div>

          {jobs.length === 0 ? (
            <div className="bg-[#F2EDE4] border border-[#18181B]/15 p-10 sm:p-14 text-center shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A07A4F] inline-block animate-pulse mb-4" />
              <h4 className="font-display font-light text-2xl text-[#18181B] uppercase mb-2">
                No Specific Role Openings Listed Today
              </h4>
              <p className="text-sm text-[#71717A] font-light max-w-md mx-auto mb-8">
                We are always expanding our turnkey architectural and site execution teams across India. Send your portfolio and resume directly to our leadership team.
              </p>
              <a
                href="mailto:vini@brandkettle.in?subject=Spontaneous%20Application%20-%20Architectural%20%26%20Project%20Role"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
              >
                Submit Spontaneous Application →
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-[#18181B]/15 hover:border-[#18181B]/50 p-8 transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h4 className="font-display font-light text-2xl text-[#18181B] uppercase tracking-wide">
                        {job.title}
                      </h4>
                      <div className="mt-2.5 flex flex-wrap gap-2.5">
                        {job.location && (
                          <span className="px-3 py-1 bg-[#F2EDE4] border border-[#18181B]/15 font-mono text-[10px] text-[#A07A4F] uppercase tracking-wider font-semibold">
                            {job.location}
                          </span>
                        )}
                        <span className="px-3 py-1 bg-[#F2EDE4] border border-[#18181B]/15 font-mono text-[10px] text-[#71717A] uppercase tracking-wider font-light">
                          {job.type || 'Full-time'}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`mailto:vini@brandkettle.in?subject=Application for ${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[10px] uppercase tracking-[0.16em] font-semibold transition-all duration-300 shrink-0"
                    >
                      Apply Now →
                    </a>
                  </div>

                  {job.description && (
                    <div className="mt-6 text-xs sm:text-sm text-[#71717A] font-light leading-relaxed border-t border-[#18181B]/10 pt-5">
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
