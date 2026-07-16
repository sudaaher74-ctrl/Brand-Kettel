import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Process from '@/components/home/Process';
import Link from 'next/link';
import { processSteps as fallbackProcess } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Process — How We Work',
  description:
    'Learn about our turnkey interior design and execution process. From initial concept to manufacturing and final handover.',
};

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
    <>
      <PageHero
        eyebrow="Process"
        title="Built for certainty"
        subtitle="We believe a disciplined process is the foundation of a successful project. Here is how we get from first conversation to final handover."
        image="/imgs/ourprosess.mp4"
        fullScreen={true}
        hideText={true}
      />
      <Process
        steps={processData}
        eyebrow="Process"
        title="Built for certainty"
        subtitle="We believe a disciplined process is the foundation of a successful project. Here is how we get from first conversation to final handover."
        align="center"
      />
    </>
  );
}
