import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Process from '@/components/home/Process';
import { processSteps as fallbackProcess } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  path: '/process',
  title: 'Our Process — How We Work',
  description: 'Learn about our turnkey interior design and execution process. From initial concept to manufacturing and final handover.',
  socialTitle: 'How Brand Kettle Delivers a Fit-Out, Stage by Stage',
  socialDescription: 'Concept, detailing, factory joinery and site execution run in parallel — the method behind a 3,400 sq ft showroom in 27 days.',
  image: '/imgs/commercial/png1.jpg',
  imageAlt: 'PNG Jewellers showroom fit-out delivered by Brand Kettle BuildSpaces in 27 days',
});

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getProcess() {
  try {
    const res = await fetch(`${API_URL}/api/admin/content?type=processSteps`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProcess;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackProcess;
  } catch (error) {
    console.warn(`Failed to fetch processSteps:`, error);
    return fallbackProcess;
  }
}

export default async function ProcessPage() {
  const processData = await getProcess();

  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 selection:bg-[#A07A4F] selection:text-white">
      {/* Page Header */}
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>04</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Turnkey Methodology</span>
          </div>
          <h1 className="font-display font-light text-[38px] sm:text-[54px] md:text-[68px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Built For <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Absolute Certainty</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl">
            We believe a disciplined process is the foundation of a successful project. Here is how we get from first conversation to factory fabrication and final site handover.
          </p>
        </div>

        {/* Video Architectural Showcase */}
        <div className="mt-10 relative aspect-[16/9] sm:aspect-[21/9] max-h-[500px] w-full overflow-hidden border border-[#18181B]/15 bg-[#121214] shadow-md">
          <video
            src="/imgs/ourprosess.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Brand Kettle build process video"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3 py-1.5 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#18181B]">
            Process in Motion · Factory Joinery to Site
          </div>
        </div>
      </div>

      {/* Six Step Architectural Process Timeline */}
      <Process
        steps={processData}
        eyebrow="Stage by Stage Execution"
        title="Disciplined Delivery"
        subtitle="Concept, detailing, factory joinery, and site execution running with milestone accountability."
        align="center"
      />
    </div>
  );
}
