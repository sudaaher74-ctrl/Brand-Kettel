import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { SERVICES_DATA, getServiceDetail } from '@/lib/servicesData';
import {
  ORGANIZATION_ID,
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScript,
} from '@/lib/structuredData';
import { absoluteUrl } from '@/lib/site';

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceDetail(resolvedParams.slug);
  if (!service) return {};

  return pageMetadata({
    path: `/services/${service.slug}`,
    title: service.title,
    description: service.description,
    socialTitle: `${service.name} — Brand Kettle BuildSpaces`,
    socialDescription: service.description,
    image: service.heroImage,
    imageAlt: `${service.title} by Brand Kettle BuildSpaces`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = getServiceDetail(resolvedParams.slug);
  if (!service) notFound();

  const canonicalPath = `/services/${service.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(canonicalPath)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: absoluteUrl(canonicalPath),
    provider: { '@id': ORGANIZATION_ID },
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path: canonicalPath },
  ]);

  return (
    <article className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(service.faqs, canonicalPath))}
      />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Specialized Commercial Discipline</span>
            <span className="text-[#18181B]/30">·</span>
            <span>Turnkey Delivery</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-6">
            {service.name}
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            {service.description}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#18181B] text-[#FAF8F5] hover:bg-[#A07A4F] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm"
            >
              Discuss Your {service.name} Project →
            </Link>
          </div>
        </div>

        {/* Hero Visual Media */}
        <div className="relative aspect-[21/9] w-full bg-[#18181B] border border-[#18181B]/15 overflow-hidden mb-20 shadow-md">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 2-Column: Scope of Work & Business Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Detailed Scope of Work */}
          <div className="bg-white border border-[#18181B]/15 p-8 sm:p-12 shadow-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-2">
              Deliverables &amp; Execution
            </span>
            <h2 className="font-display font-light text-3xl text-[#18181B] uppercase tracking-tight mb-8">
              Scope of Work Included
            </h2>
            <div className="space-y-6">
              {service.scopeOfWork.map((scope) => (
                <div key={scope.no} className="border-b border-[#18181B]/10 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-semibold text-[#A07A4F]">{scope.no} /</span>
                    <h3 className="font-display font-medium text-lg text-[#18181B] uppercase">{scope.title}</h3>
                  </div>
                  <p className="text-sm text-[#71717A] font-light leading-relaxed pl-7">{scope.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits & Direct In-House Edge */}
          <div className="space-y-8">
            <div className="bg-[#121214] text-white border border-[#18181B]/20 p-8 sm:p-12 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold block mb-2">
                Commercial Value
              </span>
              <h2 className="font-display font-light text-3xl text-white uppercase tracking-tight mb-6">
                Why Enterprises Choose Brand Kettle
              </h2>
              <div className="space-y-6">
                {service.businessBenefits.map((b, i) => (
                  <div key={i} className="space-y-1.5">
                    <h3 className="text-base font-medium text-white flex items-center gap-2">
                      <span className="text-[#A07A4F] font-bold">✓</span> {b.title}
                    </h3>
                    <p className="text-sm text-white/70 font-light leading-relaxed pl-5">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EFE9DF] border border-[#18181B]/15 p-8 sm:p-10">
              <h3 className="font-display font-medium text-xl text-[#18181B] uppercase mb-2">
                Need a Custom Bill of Quantities (BOQ)?
              </h3>
              <p className="text-sm text-[#71717A] font-light leading-relaxed mb-6">
                Our commercial estimating team reviews your floor plans and technical brief to provide a fully itemized BOQ with transparent material specifications within 48 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#18181B] font-semibold hover:text-[#A07A4F] underline underline-offset-4"
              >
                Request Quotation &amp; Site Audit →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Delivered Realizations */}
        {service.relatedProjects.length > 0 && (
          <section className="mb-20">
            <div className="border-b border-[#18181B]/15 pb-4 mb-8 flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-1">
                  On-Site Realizations
                </span>
                <h2 className="font-display font-light text-3xl text-[#18181B] uppercase">
                  Projects Delivering This Scope
                </h2>
              </div>
              <Link href="/portfolio" className="font-mono text-xs uppercase tracking-wider text-[#A07A4F] hover:underline">
                View All Work →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {service.relatedProjects.map((p) => (
                <div key={p.slug} className="group bg-white border border-[#18181B]/15 overflow-hidden shadow-sm">
                  <div className="relative aspect-[16/10] w-full bg-[#18181B]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-light text-xl text-[#18181B] uppercase">{p.name}</h3>
                      <p className="text-xs text-[#71717A] font-mono uppercase tracking-wider">{p.category}</p>
                    </div>
                    <Link
                      href={`/portfolio/${p.slug}`}
                      className="font-mono text-xs uppercase tracking-wider text-[#A07A4F] font-semibold group-hover:text-[#18181B] transition-colors"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Service FAQs */}
        <section className="mb-20 bg-white border border-[#18181B]/15 p-8 sm:p-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
            Technical Clarity
          </span>
          <h2 className="font-display font-light text-3xl text-[#18181B] uppercase mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((f, i) => (
              <div key={i} className="border-b border-[#18181B]/10 pb-6 last:border-0 last:pb-0">
                <h3 className="font-display font-medium text-lg text-[#18181B] mb-2">{f.q}</h3>
                <p className="text-sm text-[#71717A] font-light leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Specialized Services Navigation */}
        <section className="pt-8 border-t border-[#18181B]/15">
          <p className="font-mono text-xs uppercase tracking-widest text-[#71717A] mb-4">
            Other Turnkey Commercial Capabilities:
          </p>
          <div className="flex flex-wrap gap-3">
            {SERVICES_DATA.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="px-4 py-2 bg-white border border-[#18181B]/15 hover:border-[#A07A4F] text-xs font-mono uppercase tracking-wider text-[#18181B] hover:text-[#A07A4F] transition-all"
              >
                {s.name} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
