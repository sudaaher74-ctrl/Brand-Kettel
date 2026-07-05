import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Careers — Brand Kettle BuildSpaces',
  description:
    'Join the Brand Kettle team. Explore open positions in interior design, project management, manufacturing and more.',
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

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <section className="relative overflow-hidden bg-surface pt-28 sm:pt-36 pb-12">
        <div className="container-px">
          <SectionHeading
            eyebrow="Careers"
            title="Build spaces. Build your career."
            subtitle="We're always looking for passionate individuals who share our commitment to craft, precision and thoughtful design."
          />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px max-w-4xl mx-auto">
          {jobs.length === 0 ? (
            <Reveal>
              <div className="text-center py-20 border border-line rounded-xl bg-card">
                <p className="text-ink-muted text-lg">No open positions right now.</p>
                <p className="text-ink-muted text-sm mt-2">
                  We&apos;re always interested in hearing from talented people.{' '}
                  <Link href="/contact" className="text-accent hover:underline">
                    Get in touch
                  </Link>{' '}
                  and tell us about yourself.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, i) => (
                <Reveal key={job.id} index={i}>
                  <div className="group border border-line bg-card p-8 sm:p-10 transition-colors hover:border-accent/40">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl font-display font-light tracking-[0.5px] text-ink group-hover:text-accent transition-colors">
                          {job.title}
                        </h2>
                        <div className="mt-3 flex flex-wrap gap-3">
                          {job.location && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-light text-ink-secondary">
                              <span className="w-1 h-1 bg-accent/40" />
                              {job.location}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5 text-xs font-light text-ink-secondary">
                            <span className="w-1 h-1 bg-accent/40" />
                            {job.type || 'Full-time'}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/contact?subject=Career Application: ${encodeURIComponent(job.title)}`}
                        className="btn-accent shrink-0 text-sm"
                      >
                        Apply Now
                      </Link>
                    </div>

                    {job.description && (
                      <div className="mt-6 text-sm font-light leading-relaxed text-ink-secondary">
                        {job.description.split('\n').map((line, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-2' : ''}>
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    {job.requirements && (
                      <div className="mt-6 pt-6 border-t border-line">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted mb-3">
                          Requirements
                        </h3>
                        <div className="text-sm font-light leading-relaxed text-ink-secondary">
                          {job.requirements.split('\n').map((line, idx) => (
                            <p key={idx} className={idx > 0 ? 'mt-1' : ''}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* General CTA */}
          <Reveal index={jobs.length + 1}>
            <div className="mt-16 border border-line bg-surface p-8 sm:p-12 text-center">
              <h3 className="font-display text-2xl font-light tracking-[0.5px] text-ink">
                Don&apos;t see the right role?
              </h3>
              <p className="mt-3 text-sm font-light text-ink-secondary max-w-md mx-auto">
                We&apos;re always on the lookout for exceptional talent. Send us your portfolio and tell us what excites you about interior design.
              </p>
              <Link href="/contact" className="btn-accent mt-6 inline-flex">
                Send Your Profile
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
