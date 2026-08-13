import { Mail, Phone, MapPin } from 'lucide-react';
import ConsultationForm from '@/components/forms/ConsultationForm';
import Reveal from '@/components/ui/Reveal';

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#EDEAE4] py-20 md:py-28">
      <div className="container-px relative">
        <Reveal>
          <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-6 shadow-xl sm:p-10 md:p-14">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left: copy + contact info */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white pl-1.5 pr-4 py-1.5 text-sm font-semibold text-accent">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1a1410] text-white">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  Start A Project
                </span>

                <h2 className="mt-6 font-display text-[36px] sm:text-[44px] font-extrabold leading-[1.05] text-[#1a1410]">
                  Let&apos;s Build Your
                  <br />
                  Next Project
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6b6459]">
                  Ready to launch your next space? Fill out the form or reach out directly to
                  start a conversation about your project.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <a href="tel:+918959173799" className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1a1410] text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-[#1a1410]">+91 89591 73799</span>
                  </a>
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1a1410] text-white">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-[#1a1410]">Indore, India</span>
                  </span>
                </div>

                <a href="mailto:hello@brandkettle.com" className="mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1a1410] text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-[#1a1410]">hello@brandkettle.com</span>
                </a>
              </div>

              {/* Right: form on dark panel */}
              <div className="rounded-[28px] bg-[#15120f] p-6 sm:p-8">
                <ConsultationForm theme="gold" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
