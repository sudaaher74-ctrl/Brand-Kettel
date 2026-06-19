import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Process from '@/components/home/Process';

export const metadata: Metadata = {
  title: 'Our Process — From Discovery to Handover',
  description:
    'The Brand Kettle BuildSpaces process: Discovery, Design, Planning, Execution, Quality Check and Handover — a disciplined path to a delivered space.',
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A disciplined path from idea to handover"
        subtitle="Six stages designed to remove uncertainty and deliver your space on time."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=70"
      />
      <Process />
    </>
  );
}
