'use client';

export default function TopographicLines({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#18181B" strokeWidth="1" strokeOpacity="0.055">
        {/* Organic architectural contour elevations (bottom-left outward concentric waves) */}
        <path d="M-100 950 C120 900, 240 820, 280 660 C320 500, 220 380, 140 320 C60 260, 20 280, -100 240" />
        <path d="M-100 900 C150 860, 270 780, 320 620 C370 460, 260 330, 170 270 C80 210, 40 230, -100 190" />
        <path d="M-100 850 C180 810, 310 730, 360 570 C410 410, 290 280, 190 220 C90 160, 50 180, -100 140" />
        <path d="M-100 800 C210 760, 350 680, 400 520 C450 360, 320 230, 220 170 C120 110, 70 130, -100 90" />
        <path d="M-100 750 C240 710, 390 630, 440 470 C490 310, 350 180, 240 120 C130 60, 80 80, -100 40" />
        <path d="M-100 700 C270 660, 430 580, 480 420 C530 260, 380 130, 260 70 C140 10, 90 30, -100 -10" />
        <path d="M-100 650 C300 610, 470 530, 520 370 C570 210, 410 80, 280 20 C150 -40, 100 -20, -100 -60" />
        <path d="M-100 600 C330 560, 510 480, 560 320 C610 160, 440 30, 300 -30 C160 -90, 110 -70, -100 -110" />

        {/* Outer subtle ripples */}
        <path d="M-80 1050 C180 980, 380 920, 500 780 C620 640, 580 450, 480 320 C380 190, 260 110, 60 50" />
        <path d="M-50 1100 C220 1020, 430 960, 550 820 C670 680, 630 490, 520 360 C410 230, 290 150, 90 90" />
        <path d="M0 1150 C260 1060, 480 1000, 600 860 C720 720, 680 530, 560 400 C440 270, 320 190, 120 130" />
        <path d="M50 1200 C300 1100, 530 1040, 650 900 C770 760, 730 570, 600 440 C470 310, 350 230, 150 170" />
      </g>
    </svg>
  );
}
