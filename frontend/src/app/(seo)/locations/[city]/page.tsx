import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Location = {
  id: string;
  slug: string;
  city: string;
  title: string;
  description: string;
};

async function getLocation(slug: string): Promise<Location | null> {
  try {
    const res = await fetch(`http://localhost:3001/api/seo/locations/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const location = await getLocation(resolvedParams.city);
  if (!location) return {};
  
  return {
    title: `${location.title} | Brand Kettle`,
    description: location.description,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const location = await getLocation(resolvedParams.city);
  if (!location) notFound();

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Brand Kettle BuildSpaces',
    image: 'https://brandkettle.com/logo.png',
    telephone: '+9189591737990',
    url: `https://brandkettle.com/locations/${location.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressCountry: 'IN'
    }
  };

  return (
    <article className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-slate-500 font-medium tracking-widest uppercase mb-4 block">Service Area</span>
          <h1 className="font-display text-4xl md:text-6xl text-slate-900 mb-6">{location.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {location.description} We bring our premium turnkey interior solutions directly to your doorstep in {location.city}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Why choose us in {location.city}?</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Brand Kettle is widely recognized as the leading commercial interior fit-out company serving the <strong>{location.city}</strong> region. 
              Our deep understanding of local compliance, vendor networks, and architectural nuances allows us to deliver projects on time and within budget.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-700 font-medium">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Turnkey Project Execution
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-medium">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Local Vendor Network
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-medium">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Premium Material Selection
              </li>
            </ul>
            <a href="/contact" className="inline-block mt-4 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">
              Start Your Project in {location.city}
            </a>
          </div>
          
          <div className="bg-slate-100 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-500 font-medium">Serving {location.city} & surrounding areas</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
