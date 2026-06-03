import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Tone = "cyan" | "emerald" | "violet" | "amber" | "pink" | "sky";
type Skill = { name: string; tone: Tone; ring: 0 | 1 | 2 };

const skills: Skill[] = [
  // Ring 0 - core
  { name: "React.js", tone: "cyan", ring: 0 },
  { name: "Node.js", tone: "emerald", ring: 0 },
  { name: "React Native", tone: "cyan", ring: 0 },
  { name: "Next.js", tone: "cyan", ring: 0 },
  { name: "JavaScript", tone: "amber", ring: 0 },

  // Ring 1 - mid
  { name: "TypeScript", tone: "sky", ring: 1 },
  { name: "Express.js", tone: "emerald", ring: 1 },
  { name: "MongoDB", tone: "emerald", ring: 1 },
  { name: "Firebase", tone: "amber", ring: 1 },
  { name: "RESTful APIs", tone: "cyan", ring: 1 },
  { name: "JWT Auth", tone: "emerald", ring: 1 },
  { name: "WebSocket", tone: "violet", ring: 1 },
  { name: "GitHub", tone: "violet", ring: 1 },
  { name: "UI/UX Design", tone: "pink", ring: 1 },
  { name: "Java", tone: "amber", ring: 1 },

  // Ring 2 - outer
  { name: "Gemini AI", tone: "violet", ring: 2 },
  { name: "JSX", tone: "sky", ring: 2 },
  { name: "HTML5", tone: "pink", ring: 2 },
  { name: "CSS3", tone: "pink", ring: 2 },
  { name: "Socket.io", tone: "violet", ring: 2 },
  { name: "Encrypted Storage", tone: "violet", ring: 2 },
  { name: "Photoshop", tone: "pink", ring: 2 },
  { name: "Google Maps API", tone: "pink", ring: 2 },
  { name: "Agile / Scrum", tone: "sky", ring: 2 },
  { name: "App Debugging", tone: "amber", ring: 2 },
  { name: "Mobile App Security", tone: "sky", ring: 2 },
];

const toneColor: Record<Tone, { stroke: string; fill: string; text: string }> = {
  cyan: { stroke: "#22d3ee", fill: "rgba(34,211,238,0.18)", text: "#a5f3fc" },
  emerald: { stroke: "#34d399", fill: "rgba(52,211,153,0.18)", text: "#a7f3d0" },
  violet: { stroke: "#a78bfa", fill: "rgba(167,139,250,0.18)", text: "#ddd6fe" },
  amber: { stroke: "#fbbf24", fill: "rgba(251,191,36,0.18)", text: "#fde68a" },
  pink: { stroke: "#f472b6", fill: "rgba(244,114,182,0.18)", text: "#fbcfe8" },
  sky: { stroke: "#38bdf8", fill: "rgba(56,189,248,0.18)", text: "#bae6fd" },
};

const W = 1100;
const H = 700;
const CX = W / 2;
const CY = H / 2;
const radii: [number, number, number] = [180, 290, 410];

// Group by ring so each ring spreads its members evenly
const byRing = [0, 1, 2].map((r) => skills.filter((s) => s.ring === r));

const positioned = skills.map((s) => {
  const ringIdx = s.ring;
  const within = byRing[ringIdx].indexOf(s);
  const total = byRing[ringIdx].length;
  // stagger the ring start angle so labels don't stack across rings
  const startOffset = ringIdx * (Math.PI / Math.max(total, 1));
  const angle = (within / total) * Math.PI * 2 + startOffset - Math.PI / 2;
  const r = radii[ringIdx];
  const x = CX + Math.cos(angle) * r * 1.05;
  const y = CY + Math.sin(angle) * r * 0.78;
  return { ...s, x, y, idx: skills.indexOf(s) };
});

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          cmd="cat skills.json"
          title="Skills"
          subtitle="My stack graph - live nodes orbiting the core"
        />

        <Reveal>
          <div className="term-window">
            <div className="term-titlebar">
              <span className="term-dot bg-red-500/70" />
              <span className="term-dot bg-yellow-500/70" />
              <span className="term-dot bg-emerald-500/70" />
              <span className="ml-2 text-slate-500">$~/portfolio/skills.graph</span>
              <span className="text-slate-700">·</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                live
              </span>
              <span className="ml-auto hidden items-center gap-1.5 font-mono text-[11px] text-slate-500 sm:inline-flex">
                <Sparkles className="h-3 w-3 text-amber-300" />
                hover the nodes
              </span>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-6">
              <div className="pointer-events-none absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-pink-500/10 blur-[80px]" />

              <p className="relative mb-2 font-mono text-[12px] text-slate-500">
                <span className="text-slate-600">//</span> {skills.length} nodes ·
                3 orbital rings · connected to one core
              </p>

              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="relative h-auto w-full select-none"
                role="img"
                aria-label="Skills graph"
              >
                <defs>
                  <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
                    <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </radialGradient>
                  <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* orbit rings */}
                {radii.map((r, i) => (
                  <ellipse
                    key={r}
                    cx={CX}
                    cy={CY}
                    rx={r * 1.05}
                    ry={r * 0.78}
                    fill="none"
                    stroke="rgba(148,163,184,0.16)"
                    strokeWidth={1}
                    strokeDasharray="2 8"
                    className={`orbit orbit-${i}`}
                  />
                ))}

                {/* core glow */}
                <circle cx={CX} cy={CY} r={160} fill="url(#core-glow)" />

                {/* edges from core to every node */}
                {positioned.map((p) => (
                  <line
                    key={`edge-${p.name}`}
                    x1={CX}
                    y1={CY}
                    x2={p.x}
                    y2={p.y}
                    stroke={toneColor[p.tone].stroke}
                    strokeOpacity={0.22}
                    strokeWidth={1}
                    strokeDasharray="3 7"
                    className="edge-flow"
                  />
                ))}

                {/* core node */}
                <g>
                  <circle
                    cx={CX}
                    cy={CY}
                    r={44}
                    fill="rgba(2,8,23,0.95)"
                    stroke="rgba(34,211,238,0.6)"
                    strokeWidth={1.5}
                    className="core-pulse"
                    filter="url(#soft-glow)"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={28}
                    fill="none"
                    stroke="rgba(74,222,128,0.5)"
                    strokeWidth={1}
                    strokeDasharray="3 4"
                    className="core-ring"
                  />
                  <text
                    x={CX}
                    y={CY - 2}
                    textAnchor="middle"
                    fill="#67e8f9"
                    fontSize="13"
                    fontFamily="var(--font-jetbrains), monospace"
                    fontWeight={600}
                  >
                    {"<stack/>"}
                  </text>
                  <text
                    x={CX}
                    y={CY + 14}
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="9"
                    fontFamily="var(--font-jetbrains), monospace"
                  >
                    sabahat
                  </text>
                </g>

                {/* traveling pulses along each edge */}
                {positioned.map((p, i) => {
                  const dur = 3 + (i % 5) * 0.4;
                  const delay = (i * 0.18) % 4;
                  return (
                    <circle
                      key={`pulse-${p.name}`}
                      r={2.5}
                      fill={toneColor[p.tone].stroke}
                      opacity={0}
                    >
                      <animateMotion
                        dur={`${dur}s`}
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                        path={`M ${CX},${CY} L ${p.x},${p.y}`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.9;1"
                        dur={`${dur}s`}
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}

                {/* skill nodes */}
                {positioned.map((p, i) => {
                  const c = toneColor[p.tone];
                  const r = p.ring === 0 ? 9 : p.ring === 1 ? 7 : 6;
                  return (
                    <g
                      key={p.name}
                      className="node-group"
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    >
                      {/* halo */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={r + 6}
                        fill={c.fill}
                        opacity={0.35}
                        className="node-halo"
                        style={{ animationDelay: `${(i * 0.12) % 2}s` }}
                      />
                      {/* outer */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={r}
                        fill="rgba(2,8,23,0.9)"
                        stroke={c.stroke}
                        strokeWidth={1.5}
                        filter="url(#soft-glow)"
                      />
                      {/* inner dot */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={r * 0.45}
                        fill={c.stroke}
                        className="node-blink"
                        style={{ animationDelay: `${(i * 0.17) % 2}s` }}
                      />
                      {/* label */}
                      <text
                        x={p.x}
                        y={p.y - (r + 8)}
                        textAnchor="middle"
                        fill={c.text}
                        fontSize={p.ring === 0 ? 12 : 11}
                        fontFamily="var(--font-jetbrains), monospace"
                        fontWeight={p.ring === 0 ? 600 : 500}
                        className="node-label"
                      >
                        {p.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <p className="relative mt-2 text-center font-mono text-[11px] text-slate-600">
                <span className="text-emerald-400">$</span> always-learning ·
                always-shipping ·{" "}
                <span className="animate-blink text-cyan-300">_</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
