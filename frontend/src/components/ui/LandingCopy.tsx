import Link from 'next/link';
import type { LandingContent } from '@/lib/landingContent';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';

/** Long-form copy, FAQ and internal links for a landing page. Emits FAQPage JSON-LD. */
export default function LandingCopy({ content, path }: { content: LandingContent; path: string }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(content.faqs, path))} />
      <section className="bg-background py-16 sm:py-24">
        <div className="container-px max-w-3xl">
          {content.intro.map((p, i) => (
            <p key={i} className="text-body-main mb-6">{p}</p>
          ))}
          {content.sections.map((s) => (
            <div key={s.heading} className="mt-10">
              <h2 className="text-2xl sm:text-3xl text-ink">{s.heading}</h2>
              <p className="text-body-main mt-4">{s.body}</p>
            </div>
          ))}

          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl text-ink">Frequently asked questions</h2>
            <dl className="mt-6 space-y-6">
              {content.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="text-body-main mt-2">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="Related pages" className="mt-16 flex flex-wrap gap-x-6 gap-y-3">
            {content.related.map((r) => (
              <Link key={r.href} href={r.href} className="underline underline-offset-4 text-ink hover:text-accent">
                {r.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}

