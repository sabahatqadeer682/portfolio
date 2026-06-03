import Image from "next/image";
import { Download } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const stats = [
  { label: "projects", value: "10+" },
  { label: "stack tools", value: "15+" },
  { label: "yrs learning", value: "4" },
  { label: "deploy time", value: "<5m" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          cmd="cat about.md"
          title="About"
          subtitle="Who I am and what I do"
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="term-window">
              <div className="term-titlebar">
                <span className="term-dot bg-red-500/70" />
                <span className="term-dot bg-yellow-500/70" />
                <span className="term-dot bg-emerald-500/70" />
                <span className="ml-2 text-slate-500">about.md</span>
              </div>
              <div className="space-y-4 p-6 font-mono text-[14px] leading-relaxed text-slate-400">
                <p>
                  <span className="text-slate-600"># </span>
                  <span className="text-slate-100">$ whoami</span>
                </p>
                <p>
                  I&apos;m a motivated{" "}
                  <span className="text-cyan-300">Full Stack Developer</span>{" "}
                  with strong hands-on experience in the MERN stack and Android
                  mobile app development using{" "}
                  <span className="text-cyan-300">React Native</span>. Passionate
                  about building modern, scalable, user-focused web &amp; mobile
                  applications.
                </p>
                <p>
                  <span className="text-slate-600"># </span>
                  <span className="text-slate-100">$ experience</span>
                </p>
                <p>
                  I&apos;ve gained practical experience through academic and
                  personal projects - including{" "}
                  <span className="text-emerald-300">CollaXion</span>, an
                  AI-powered University–Industry Collaboration Platform - where
                  I worked on real-world system design, authentication and
                  real-time collaboration features.
                </p>
                <p>
                  <span className="text-slate-600"># </span>
                  <span className="text-slate-100">$ approach</span>
                </p>
                <p>
                  Always eager to enhance existing applications and build
                  better, more optimized solutions through continuous learning.
                  Strong team player with proven analytical thinking and
                  problem-solving skills.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {/* Big profile photo card */}
            <div className="mb-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-4 animate-spin-slow rounded-full border border-dashed border-cyan-400/30" />
                <div className="absolute inset-0 -m-8 animate-spin-slower rounded-full border border-dashed border-emerald-400/25" />

                <div className="animate-float relative h-48 w-48 rounded-full bg-gradient-to-br from-cyan-400 via-emerald-400 to-amber-300 p-[3px] shadow-[0_0_60px_-10px_rgba(34,211,238,0.55)] sm:h-56 sm:w-56">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-950">
                    <Image
                      src="/ProfileImage.jpeg"
                      alt="Sabahat Qadeer"
                      fill
                      sizes="224px"
                      className="object-cover"
                      style={{ objectPosition: "50% 28%" }}
                    />
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/95 px-4 py-2 font-mono text-[12px] backdrop-blur-md shadow-lg shadow-cyan-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <span className="text-slate-400">@</span>
                  <span className="text-cyan-300">sabahat</span>
                </div>

                <div className="absolute -top-2 -right-2 flex items-center gap-1.5 rounded-md border border-emerald-400/40 bg-slate-950/95 px-2.5 py-1 font-mono text-[10px] tracking-wider text-emerald-300 uppercase shadow-lg backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  hire-able
                </div>
              </div>
            </div>

            <div className="term-window">
              <div className="term-titlebar">
                <span className="term-dot bg-red-500/70" />
                <span className="term-dot bg-yellow-500/70" />
                <span className="term-dot bg-emerald-500/70" />
                <span className="ml-2 text-slate-500">profile.json</span>
              </div>
              <div className="p-6 font-mono text-[13px]">
                <div className="text-slate-400">
                  <span className="text-slate-500">&#123;</span>
                </div>
                <div className="ml-3 space-y-1.5 py-1">
                  <Field k="operator" v="Sabahat Qadeer" />
                  <Field k="role" v="Software Engineer" />
                  <Field k="location" v="Wah Cantt, Pakistan" />
                  <Field k="email" v="sabahatqadeerbhati@gmail.com" />
                  <Field k="linkedin" v="in/sabahatqadeer" />
                  <Field k="degree" v="BS Software Engineering" />
                  <Field k="university" v="Riphah International University" />
                  <Field k="status" v="available" status />
                </div>
                <div className="text-slate-400">
                  <span className="text-slate-500">&#125;</span>
                </div>

                <a
                  href="/Sabahat-Qadeer-Resume.pdf"
                  download
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-emerald-400/50 bg-emerald-400/10 px-4 py-2.5 font-mono text-[12px] font-semibold text-emerald-300 shadow-lg shadow-emerald-500/15 transition-all hover:bg-emerald-400/20 hover:text-emerald-200 hover:shadow-emerald-500/30"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span className="text-slate-400">$</span> download
                  resume.pdf
                </a>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-md border border-slate-800 bg-slate-900/50 p-3 text-center"
                >
                  <div className="font-mono text-xl font-bold text-cyan-300">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] tracking-wider text-slate-500 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  k,
  v,
  status,
}: {
  k: string;
  v: string;
  status?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-1.5">
      <span className="text-violet-400">&quot;{k}&quot;</span>
      <span className="text-slate-500">:</span>
      {status ? (
        <span className="inline-flex items-center gap-1.5 text-emerald-400">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          &quot;{v}&quot;
        </span>
      ) : (
        <span className="break-all text-emerald-300">&quot;{v}&quot;</span>
      )}
      <span className="text-slate-500">,</span>
    </div>
  );
}
