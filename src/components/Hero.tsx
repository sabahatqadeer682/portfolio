"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const taglines = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Native Developer",
  "Problem Solver",
];

function useTyping() {
  const [text, setText] = useState("");
  useEffect(() => {
    let idx = 0;
    let char = 0;
    let deleting = false;
    let to: ReturnType<typeof setTimeout>;
    const tick = () => {
      const role = taglines[idx];
      if (!deleting) {
        char++;
        setText(role.slice(0, char));
        if (char === role.length) {
          deleting = true;
          to = setTimeout(tick, 1700);
          return;
        }
      } else {
        char--;
        setText(role.slice(0, char));
        if (char === 0) {
          deleting = false;
          idx = (idx + 1) % taglines.length;
        }
      }
      to = setTimeout(tick, deleting ? 45 : 90);
    };
    to = setTimeout(tick, 400);
    return () => clearTimeout(to);
  }, []);
  return text;
}

export default function Hero() {
  const typed = useTyping();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT - greeting + actions */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 font-mono text-[10px] tracking-wider text-emerald-300 uppercase sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            STATUS::AVAILABLE_FOR_HIRE
          </div>

          <h1 className="font-mono text-[28px] leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-slate-300">
              <span className="text-slate-600">$</span> Hello, I&apos;m
            </span>
            <span className="mt-2 block text-gradient-neon break-words">
              Sabahat Qadeer
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm text-slate-300 sm:text-lg">
            <span className="text-slate-600">//</span>{" "}
            <span className="text-cyan-300">{typed}</span>
            <span className="animate-blink ml-0.5 text-cyan-300">▌</span>{" "}
            engineering MERN web platforms &amp; React Native mobile apps with
            clean UI/UX, secure auth and real-time collaboration features.
          </p>

          <p className="mt-5 font-mono text-[13px] text-slate-300 sm:text-[15px]">
            <span className="text-amber-300">&quot;</span>
            <span className="text-cyan-200">
              Engineering Beyond Boundaries
            </span>
            <span className="text-amber-300">&quot;</span>
          </p>

          {/* Primary actions */}
          <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href="/Sabahat-Qadeer-Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-md border border-emerald-400/50 bg-emerald-400/15 px-4 py-2 font-mono text-[12px] font-semibold text-emerald-200 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400/25 hover:text-emerald-100 hover:shadow-emerald-500/45 sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="text-slate-400">$</span> download-resume
            </a>
            <a
              href="https://github.com/sabahatqadeer682"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 font-mono text-[12px] font-semibold text-cyan-200 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400/20 hover:text-cyan-100 hover:shadow-cyan-500/35 sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              <GithubIcon className="h-4 w-4" />
              github
            </a>
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/50 px-4 py-2 font-mono text-[12px] font-semibold text-slate-200 transition-all hover:border-slate-500 hover:text-slate-50 sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              <span className="text-slate-400">$</span> view-projects
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Social row */}
          <div className="mt-7 flex gap-3">
            <a
              href="https://www.linkedin.com/in/sabahatqadeer"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:text-cyan-200"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/sabahatqadeer682"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:text-cyan-200"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:sabahatqadeerbhati@gmail.com"
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:text-cyan-200"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* RIGHT - code snippet terminal */}
        <div className="term-window min-w-0">
          <div className="term-titlebar">
            <span className="term-dot bg-red-500/70" />
            <span className="term-dot bg-yellow-500/70" />
            <span className="term-dot bg-emerald-500/70" />
            <span className="ml-2 text-slate-500">portfolio.tsx</span>
            <span className="ml-auto text-[11px] text-emerald-400">●</span>
          </div>
          <div className="flex">
            {/* line numbers */}
            <div className="hidden flex-shrink-0 select-none border-r border-slate-800/70 bg-slate-950/50 px-3 py-5 text-right font-mono text-[12px] leading-[1.7] text-slate-700 sm:block">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            {/* code */}
            <pre className="min-w-0 flex-1 overflow-x-auto px-3 py-4 font-mono text-[11px] leading-[1.7] whitespace-pre sm:px-5 sm:py-5 sm:text-[13px]">
              <Line>
                <C>// Welcome to my workspace</C>
              </Line>
              <Line>
                <K>import</K> <P>{"{"} Developer {"}"}</P> <K>from</K>{" "}
                <S>&apos;./multiverse&apos;</S>
                <D>;</D>
              </Line>
              <Line> </Line>
              <Line>
                <K>const</K> <F>Portfolio</F> <D>=</D> <D>()</D> <D>{"=>"}</D>{" "}
                <D>{"{"}</D>
              </Line>
              <Line>
                {"  "}
                <K>return</K> <D>(</D>
              </Line>
              <Line>
                {"    "}
                <D>{"<"}</D>
                <T>Developer</T>
              </Line>
              <Line>
                {"      "}
                <A>name</A>
                <D>=</D>
                <S>&quot;Sabahat Qadeer&quot;</S>
              </Line>
              <Line>
                {"      "}
                <A>role</A>
                <D>=</D>
                <S>&quot;Full Stack Developer&quot;</S>
              </Line>
              <Line>
                {"      "}
                <A>stack</A>
                <D>=</D>
                <S>&quot;MERN + React Native&quot;</S>
              </Line>
              <Line>
                {"      "}
                <A>tagline</A>
                <D>=</D>
                <S>
                  &quot;Engineering Beyond Boundaries&quot;
                </S>
              </Line>
              <Line>
                {"      "}
                <A>typing</A>
                <D>=</D>
                <D>{"{"}</D>
                <S>&quot;{typed || " "}&quot;</S>
                <D>{"}"}</D>
                <span className="animate-blink ml-0.5 text-cyan-300">▌</span>
              </Line>
              <Line>
                {"    "}
                <D>{"/>"}</D>
              </Line>
              <Line>
                {"  "}
                <D>)</D>
                <D>;</D>
              </Line>
              <Line>
                <D>{"}"}</D>
                <D>;</D>
              </Line>
              <Line>
                <K>export</K> <K>default</K> <F>Portfolio</F>
                <D>;</D>
              </Line>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- syntax highlighter helpers ---- */
function Line({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-500">{children}</span>
);
const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-violet-400">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-300">{children}</span>
);
const D = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-500">{children}</span>
);
const F = ({ children }: { children: React.ReactNode }) => (
  <span className="text-amber-300">{children}</span>
);
const T = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cyan-300">{children}</span>
);
const A = ({ children }: { children: React.ReactNode }) => (
  <span className="text-pink-300">{children}</span>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-300">{children}</span>
);
