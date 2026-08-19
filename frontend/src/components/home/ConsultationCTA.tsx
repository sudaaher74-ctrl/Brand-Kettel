import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import ConsultationForm from '@/components/forms/ConsultationForm';
import Reveal from '@/components/ui/Reveal';
import Image from 'next/image';

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Full-bleed background image at very low opacity */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/imgs/commercial/ramda encre hotel1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.07]"
          aria-hidden
        />
        {/* Gradient so left side (text) is darker */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>

      {/* Top accent line */}
      <div className="container-px mb-16 relative">
        <div className="gold-line" />
      </div>

      <div className="container-px relative">
        <Reveal>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            {/* Left: copy + contact info */}
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Start A Project
              </span>

              <h2 className="mt-6 font-display font-light text-white leading-[1.05] tracking-[0.02em] text-[40px] md:text-[54px] lg:text-[64px]">
                Let&apos;s Build<br />
                <span className="text-accent italic">Your Vision.</span>
              </h2>

              <p className="mt-6 max-w-md text-body-main">
                Ready to launch your next space? Fill out the form or reach out directly to
                start a conversation about your project.
              </p>

              {/* Contact details */}
              <div className="mt-10 flex flex-col gap-5">
                <a
                  href="tel:+918959173799"
                  className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 border border-line/50 group-hover:border-accent/50 transition-colors duration-300 shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-light text-white/30 mb-0.5">Phone</p>
                    <p className="text-[14px] font-light tracking-wide">+91 89591 73799</p>
                  </div>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="mailto:hello@brandkettle.com"
                  className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 border border-line/50 group-hover:border-accent/50 transition-colors duration-300 shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-light text-white/30 mb-0.5">Email</p>
                    <p className="text-[14px] font-light tracking-wide">hello@brandkettle.com</p>
                  </div>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <span className="flex items-center gap-4 text-white/30">
                  <span className="flex items-center justify-center w-10 h-10 border border-line/30 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-light text-white/20 mb-0.5">Studio</p>
                    <p className="text-[14px] font-light tracking-wide">Indore, India</p>
                  </div>
                </span>
              </div>
            </div>

            {/* Right: form on dark surface panel */}
            <div className="border border-line/30 bg-surface/60 p-6 sm:p-8 backdrop-blur-sm">
              <ConsultationForm theme="gold" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom accent line */}
      <div className="container-px mt-16 relative">
        <div className="gold-line" />
      </div>
    </section>
  );
}
