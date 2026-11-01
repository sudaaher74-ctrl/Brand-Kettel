'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type RealizationVisualProps = { activeIndex: number };

const scenes = [
  { accent: '#D6A56E', label: 'CUSTOMER FLOW', detail: 'VITRINE / DISPLAY / CASH' },
  { accent: '#C0CCA8', label: 'TEAM NEIGHBOURHOODS', detail: 'FOCUS / MEET / COLLABORATE' },
  { accent: '#A8BFCC', label: 'PUBLIC CONCOURSE', detail: 'ARRIVAL / ATRIUM / RETAIL' },
  { accent: '#D89B7D', label: 'GUEST JOURNEY', detail: 'WELCOME / DINE / GATHER' },
  { accent: '#D6C29D', label: 'CNC TOOLPATH', detail: 'CUT / EDGE / ASSEMBLE' },
];

function FlowPath({ d, accent }: { d: string; accent: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <path d={d} fill="none" stroke={accent} strokeOpacity=".24" strokeWidth="7" strokeLinecap="round" />
      <motion.path
        d={d}
        fill="none"
        stroke={accent}
        strokeOpacity=".9"
        strokeWidth="1.7"
        strokeDasharray="4 6"
        strokeLinecap="round"
        animate={reduceMotion ? undefined : { strokeDashoffset: [0, -40] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      />
    </>
  );
}

function RetailScene({ accent }: { accent: string }) {
  return (
    <g stroke="#E4D9C8" strokeWidth="1.25">
      <path d="M79 100h83v150H79zM278 100h83v150h-83z" fill="#D8CBB6" fillOpacity=".23" />
      {[122, 164, 206].map((y) => <path key={y} d={`M80 ${y}h82M279 ${y}h81`} />)}
      <path d="M185 92h70v24h-70z" fill={accent} fillOpacity=".14" />
      <path d="M185 224h70v26h-70z" fill={accent} fillOpacity=".18" />
      {[102, 144, 186, 228].map((y) => <circle key={y} cx="92" cy={y} r="3" fill={accent} stroke="none" />)}
      {[102, 144, 186, 228].map((y) => <circle key={y} cx="348" cy={y} r="3" fill={accent} stroke="none" />)}
      <FlowPath accent={accent} d="M219 292V267Q219 258 210 258H178V142Q178 132 189 132H258V188Q258 198 270 198H294" />
      <text x="188" y="88" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">FEATURE WALL</text>
      <text x="181" y="279" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">ENTRY</text>
    </g>
  );
}

function WorkplaceScene({ accent }: { accent: string }) {
  return (
    <g stroke="#E4D9C8" strokeWidth="1.25">
      <path d="M78 101h115v55H78zM249 101h112v55H249zM78 202h115v54H78zM249 202h112v54H249z" fill="#D8CBB6" fillOpacity=".19" />
      <path d="M206 85v187M233 85v187M64 177h311" strokeDasharray="3 5" strokeOpacity=".48" />
      {[103, 135, 267, 311].map((x) => <g key={x}>
        <path d={`M${x} 120h30v12h-30z`} fill={accent} fillOpacity=".22" />
        <circle cx={x + 15} cy="143" r="4" fill={accent} fillOpacity=".45" />
        <path d={`M${x + 15} 166v15`} />
        <circle cx={x + 15} cy="188" r="4" fill={accent} fillOpacity=".45" />
        <path d={`M${x} 221h30v12h-30z`} fill={accent} fillOpacity=".22" />
      </g>)}
      <FlowPath accent={accent} d="M63 281H102V180H220V78H347V180H378" />
      <text x="85" y="95" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">TEAM ZONE A</text>
      <text x="255" y="95" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">TEAM ZONE B</text>
    </g>
  );
}

function CommercialScene({ accent }: { accent: string }) {
  return (
    <g stroke="#E4D9C8" strokeWidth="1.25">
      <path d="M73 94h294v174H73z" fill="#D8CBB6" fillOpacity=".12" />
      <path d="M86 107h73v51H86zM281 107h73v51h-73zM86 205h73v50H86zM281 205h73v50h-73z" fill={accent} fillOpacity=".13" />
      <path d="M177 114h84v135h-84z" fill="#D8CBB6" fillOpacity=".16" />
      <path d="M190 126h58v108h-58z" fill={accent} fillOpacity=".08" strokeDasharray="4 4" />
      <path d="M164 178h110M219 106v153" strokeDasharray="3 5" strokeOpacity=".6" />
      <path d="M299 180h49m-49 8h49m-49 8h49" />
      <FlowPath accent={accent} d="M64 181H171M266 181H380M220 75V107M220 259V288" />
      <text x="188" y="171" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">OPEN ATRIUM</text>
      <text x="286" y="174" fill={accent} stroke="none" fontSize="6.5" fontFamily="monospace" letterSpacing=".8">ESCALATOR</text>
    </g>
  );
}

function HospitalityScene({ accent }: { accent: string }) {
  return (
    <g stroke="#E4D9C8" strokeWidth="1.25">
      <path d="M77 98h285v34H77z" fill={accent} fillOpacity=".18" />
      <path d="M88 106h60m12 0h60m12 0h60m12 0h45" stroke={accent} strokeOpacity=".58" />
      {[{ x: 132, y: 179 }, { x: 230, y: 179 }, { x: 326, y: 179 }, { x: 132, y: 235 }, { x: 230, y: 235 }, { x: 326, y: 235 }].map(({ x, y }) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="16" fill="#D8CBB6" fillOpacity=".24" />
          <path d={`M${x - 6} ${y}h12M${x} ${y - 6}v12`} stroke={accent} strokeOpacity=".66" />
          {[0, 90, 180, 270].map((angle) => <circle key={angle} cx={x + Math.cos(angle * Math.PI / 180) * 23} cy={y + Math.sin(angle * Math.PI / 180) * 23} r="2.4" fill={accent} fillOpacity=".48" />)}
        </g>
      ))}
      <FlowPath accent={accent} d="M61 285H93V158H347V278H380" />
      <text x="80" y="90" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">SERVICE BAR</text>
      <text x="283" y="280" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">GARDEN EDGE</text>
    </g>
  );
}

function CraftScene({ accent }: { accent: string }) {
  return (
    <g stroke="#E4D9C8" strokeWidth="1.25">
      <path d="M80 94h280v172H80z" fill="#D8CBB6" fillOpacity=".2" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={`v${i}`} d={`M${101 + i * 34} 110v140`} strokeOpacity=".23" />)}
      {[0, 1, 2, 3].map((i) => <path key={`h${i}`} d={`M93 ${124 + i * 32}h252`} strokeOpacity=".23" />)}
      <path d="M105 121h102v39H105zM241 121h91v71h-91zM105 185h102v54H105zM241 207h91v31h-91z" fill={accent} fillOpacity=".14" />
      <circle cx="286" cy="157" r="18" fill="#D8CBB6" stroke={accent} strokeWidth="1.5" />
      <circle cx="286" cy="157" r="7" fill={accent} fillOpacity=".35" />
      <FlowPath accent={accent} d="M87 278H348V197H224V109H89V166H220V245H311V127H250" />
      <text x="103" y="113" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing="1">OAK / VENEER</text>
      <text x="260" y="184" fill={accent} stroke="none" fontSize="7" fontFamily="monospace" letterSpacing=".7">TOOL HEAD</text>
    </g>
  );
}

const Scene = [RetailScene, WorkplaceScene, CommercialScene, HospitalityScene, CraftScene];

export default function RealizationVisual({ activeIndex }: RealizationVisualProps) {
  const reduceMotion = useReducedMotion();
  const scene = scenes[activeIndex];
  const SceneDrawing = Scene[activeIndex];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={activeIndex}
          viewBox="0 0 440 360" preserveAspectRatio="xMidYMid meet"
          fill="none"
          className="absolute inset-0 h-full w-full"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 7 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02, y: -5 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M52 68h336v225H52z" fill="#34382F" fillOpacity=".82" stroke="#E4D9C8" strokeOpacity=".35" strokeWidth="1" />
          <path d="M64 80h312v201H64z" stroke="#E4D9C8" strokeOpacity=".19" strokeDasharray="2 5" />
          <path d="M52 51v-9m336 9v-9M52 46h336" stroke={scene.accent} strokeOpacity=".62" strokeWidth=".9" />
          <path d="m52 46 6-3m-6 3 6 3m330-3-6-3m6 3-6 3" stroke={scene.accent} strokeOpacity=".62" strokeWidth=".9" />
          <text x="166" y="38" fill={scene.accent} fontSize="7" fontFamily="monospace" letterSpacing="1.1">DESIGN STUDY / NOT TO SCALE</text>
          <SceneDrawing accent={scene.accent} />
          <rect x="65" y="305" width="167" height="24" rx="12" fill="#252923" fillOpacity=".96" stroke={scene.accent} strokeOpacity=".28" />
          <circle cx="78" cy="317" r="3" fill={scene.accent} />
          <text x="88" y="319.5" fill={scene.accent} fontSize="7" fontFamily="monospace" letterSpacing=".85">{scene.label}</text>
          <text x="270" y="322" fill="#D4C9B8" fontSize="6.3" fontFamily="monospace" letterSpacing=".65">{scene.detail}</text>
          <motion.circle
            cx="377"
            cy="64"
            r="3.5"
            fill={scene.accent}
            animate={reduceMotion ? undefined : { scale: [0.8, 1.2, 0.8], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      </AnimatePresence>
    </div>
  );
}
