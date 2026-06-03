import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Entry = {
  hash: string;
  branch: string;
  date: string;
  title: string;
  org: string;
  bullets: string[];
};

const entries: Entry[] = [
  {
    hash: "f4a9c1b",
    branch: "main",
    date: "2022 - 2026",
    title: "Bachelor of Software Engineering",
    org: "Riphah International University, Islamabad - Gulberg Green Campus",
    bullets: [
      "Designed & developed multiple production-grade web and mobile applications",
      "Built full-stack MERN apps with JWT auth, RESTful APIs and MongoDB",
      "Followed full SDLC: requirements → design → development → testing → deploy",
      "Collaborated in teams using GitHub-based workflows and structured task planning",
    ],
  },
  {
    hash: "9d2e7a3",
    branch: "training",
    date: "Bootcamps",
    title: "Professional Training Courses",
    org: "Hands-on MERN, React Native, HTML/CSS, Software Engineering, Photoshop",
    bullets: [
      "Completed hands-on training across the MERN stack and React Native",
      "Strengthened engineering fundamentals + design (Photoshop)",
    ],
  },
  {
    hash: "2c81f0e",
    branch: "ics",
    date: "Intermediate",
    title: "FCS - Pre-Computer Science",
    org: "Punjab Group College, Wah Cantt",
    bullets: [
      "Built a strong foundation in physics, mathematics & computer science",
      "First exposure to programming, logic building & analytical reasoning",
    ],
  },
  {
    hash: "0a14bd2",
    branch: "matric",
    date: "Matric",
    title: "Secondary School Certificate",
    org: "F.G. Girls High School No. 8, Wah Cantt",
    bullets: ["Completed matriculation with strong academic standing"],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          cmd="git log --education"
          title="Education"
          subtitle="Commit history of my academic journey"
        />

        <Reveal>
          <div className="term-window">
            <div className="term-titlebar">
              <span className="term-dot bg-red-500/70" />
              <span className="term-dot bg-yellow-500/70" />
              <span className="term-dot bg-emerald-500/70" />
              <span className="ml-2 text-slate-500">$ git log --education</span>
            </div>
            <div className="space-y-7 p-6 font-mono text-[13px]">
              {entries.map((e, i) => (
                <div key={e.hash} className="relative">
                  {/* connecting line */}
                  {i < entries.length - 1 && (
                    <div className="absolute top-5 left-[7px] h-full w-px bg-slate-800" />
                  )}

                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3.5 w-3.5 rounded-full border border-cyan-500/50 bg-cyan-500/20" />
                    <span className="text-amber-300">commit</span>
                    <span className="text-amber-300">{e.hash}</span>
                    <span className="text-slate-500">(</span>
                    <span className="text-cyan-300">HEAD →</span>
                    <span className="text-emerald-400">{e.branch}</span>
                    <span className="text-slate-500">)</span>
                  </div>
                  <div className="mt-1 ml-6 text-slate-500">
                    Author: <span className="text-slate-300">Sabahat Qadeer</span>{" "}
                    &lt;sabahatqadeerbhati@gmail.com&gt;
                  </div>
                  <div className="ml-6 text-slate-500">
                    Date:   <span className="text-slate-300">{e.date}</span>
                  </div>

                  <div className="mt-3 ml-6 rounded-md border border-slate-800 bg-slate-900/40 p-4">
                    <h3 className="text-[15px] font-bold text-slate-100">
                      {e.title}
                    </h3>
                    <h4 className="mt-0.5 text-[12px] font-medium text-cyan-300">
                      {e.org}
                    </h4>
                    <ul className="mt-3 space-y-1.5">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-[13px] text-slate-400"
                        >
                          <span className="text-emerald-400">+</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
