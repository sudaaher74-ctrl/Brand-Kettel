import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Process from '@/components/home/Process';
import { processSteps as fallbackProcess } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  path: '/process',
  title: 'Our Process — How We Work',
  description: 'See how Brand Kettle takes a commercial interior from first consultation through design, engineering, execution and final handover.',
  socialTitle: 'From First Conversation to Final Handover',
  socialDescription: 'Four clear phases bring your commercial space to life: consult, design, engineer and deliver.',
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
    console.warn('Failed to fetch processSteps:', error);
    return fallbackProcess;
  }
}

export default async function ProcessPage() {
  const processData = await getProcess();
  return (
    <main className="min-h-screen bg-[#FAF8F5] pt-20 sm:pt-24">
      <Process
        steps={processData}
        eyebrow="A considered way to build"
        subtitle="One accountable team brings the vision into focus, engineers every detail, and delivers a space ready for business."
      />
    </main>
  );
}
