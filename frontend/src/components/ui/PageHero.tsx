import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  fullScreen = false,
  hideText = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  fullScreen?: boolean;
  hideText?: boolean;
}) {
  const isVideo = image.endsWith('.mp4');

  if (fullScreen) {
    return (
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-[#121214]">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {isVideo ? (
            <video
              src={image}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={image}
              alt={title}
              className="object-cover"
              fill
              priority
              sizes="100vw"
            />
          )}
          {!hideText && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#121214]/60 via-black/40 to-[#121214]" />
          )}
        </div>

        {/* Content */}
        {!hideText && (
          <div className="container-px relative z-10 text-center text-white mt-16 sm:mt-0 max-w-4xl mx-auto">
            <div className="bk-rise inline-flex items-center gap-2 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15 px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#A07A4F]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#18181B]">
                {eyebrow}
              </span>
            </div>
            <h1 className="bk-rise bk-rise-delay-1 font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-[0.02em] leading-[1.1]">
              {title}
            </h1>
            {subtitle && (
              <p className="bk-rise bk-rise-delay-2 mt-6 text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-28 sm:pt-36">
      <div className="container-px relative pb-14 sm:pb-20 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Column: Typography */}
          <div>
            <div className="bk-rise inline-flex items-center gap-2 bg-[#F2EDE4] border border-[#18181B]/15 px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#A07A4F]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">
                {eyebrow}
              </span>
            </div>
            <h1 className="bk-rise bk-rise-delay-1 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#18181B] uppercase tracking-[0.02em] leading-[1.15]">
              {title}
            </h1>
            {subtitle && (
              <p className="bk-rise bk-rise-delay-2 mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Column: Framed Media */}
          <div className="bk-rise bk-rise-delay-1 relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#18181B]/15 bg-[#F2EDE4] shadow-md">
              {isVideo ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
