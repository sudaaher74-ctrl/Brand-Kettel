import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Service = {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
};

async function getService(slug: string): Promise<Service | null> {
  try {
    const res = await fetch(`http://localhost:3001/api/seo/services/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = await getService(resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: `${service.title} | Brand Kettle`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = await getService(resolvedParams.slug);
  if (!service) notFound();

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is included in ${service.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our ${service.name} services include end-to-end design, planning, and execution tailored to your specific commercial requirements.`
        }
      }
    ]
  };

  return (
    <article className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-slate-900 mb-6">{service.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 flex items-center justify-center p-8">
             <div className="text-center">
               <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 text-white rounded-full flex items-center justify-center">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Execution</h3>
               <p className="text-slate-600">Delivering high-quality {service.name.toLowerCase()} with precision and unmatched craftsmanship.</p>
             </div>
          </div>
          <div className="space-y-6 text-lg text-slate-700">
            <p>
              When it comes to <strong>{service.name}</strong>, Brand Kettle BuildSpaces is the premier choice for B2B enterprises. We understand that your commercial space is a direct reflection of your brand identity.
            </p>
            <p>
              Our turnkey approach means you only deal with one expert team from conceptualization to final handover. We optimize space, prioritize functionality, and create stunning visual impacts that drive business results.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors mt-6">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
