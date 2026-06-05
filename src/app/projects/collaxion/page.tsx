import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Globe, Smartphone } from "lucide-react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CollaXion - Case Study | Sabahat Qadeer",
  description:
    "Case study of CollaXion - an AI-powered University–Industry Collaboration Platform built with the MERN stack and React Native.",
};

const features = [
  {
    title: "Role-Based Access",
    text: "Separate flows for Students, Industry, Internship Incharge & Liaison.",
  },
  {
    title: "JWT Authentication",
    text: "Secure token-based authentication and multi-stage approval workflows.",
  },
  {
    title: "Gemini AI",
    text: "CV parsing, skill extraction and personalized internship recommendations.",
  },
  {
    title: "Real-Time Chat",
    text: "WebSocket-powered messaging for instant team communication.",
  },
  {
    title: "Maps Discovery",
    text: "Google Maps based industry & company discovery near the student.",
  },
  {
    title: "MoU Management",
    text: "Track agreements, advisory meetings and university events end-to-end.",
  },
];

const workflow = [
  {
    step: "01",
    title: "AI CV Parsing",
    text: "Gemini AI extracts skills, experience and projects from uploaded CVs.",
  },
  {
    step: "02",
    title: "Smart Matching",
    text: "Recommends best-fit internships based on extracted skills.",
  },
  {
    step: "03",
    title: "Multi-Stage Approval",
    text: "Liaison and Internship Incharge approve in a structured workflow.",
  },
  {
    step: "04",
    title: "MoUs & Events",
    text: "Manage agreements, advisory meetings and industry events.",
  },
];

const tech = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "React Native",
  "Gemini AI",
  "WebSocket",
  "JWT",
  "Google Maps API",
  "REST APIs",
];

export default function CollaXionPage() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />

      <main className="px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/50 px-4 py-2 font-mono text-[13px] text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="text-slate-500">cd</span> ..
            </Link>
          </Reveal>

          {/* Hero terminal */}
          <Reveal delay={80}>
            <div className="term-window mt-8">
              <div className="term-titlebar">
                <span className="term-dot bg-red-500/70" />
                <span className="term-dot bg-yellow-500/70" />
                <span className="term-dot bg-emerald-500/70" />
                <span className="ml-2 text-slate-500">~/projects/collaxion</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] tracking-wider text-emerald-400 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  live
                </span>
              </div>
              <div className="grid items-center gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:p-10">
                <div>
                  <div className="font-mono text-[12px] text-slate-500">
                    <span className="text-emerald-400">$</span>{" "}
                    <span className="text-slate-400">cat</span>{" "}
                    <span className="text-cyan-300">README.md</span>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-[0_0_28px_-4px_rgba(34,211,238,0.55)] sm:h-20 sm:w-20">
                      <Image
                        src="/collaxion-logo.png"
                        alt="CollaXion logo"
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h1 className="font-mono text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      <span className="text-gradient">CollaXion</span>
                    </h1>
                  </div>
                  <p className="mt-3 font-mono text-[13px] text-cyan-300">
                    // AI-powered University–Industry Collaboration Platform
                  </p>
                  <p className="mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-400">
                    A full-stack collaborative platform that connects students,
                    universities and industry partners. Built with the{" "}
                    <span className="text-cyan-300">MERN stack</span> and{" "}
                    <span className="text-cyan-300">React Native</span> for web
                    + mobile access - role-based dashboards, AI-driven
                    internship matching and real-time collaboration features.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-slate-800 bg-slate-900/60 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center sm:h-72 sm:w-72">
                    <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-cyan-500/40" />
                    <div className="absolute inset-5 animate-spin-slower rounded-full border border-dashed border-emerald-500/30" />
                    <div className="animate-float flex h-36 w-36 items-center justify-center rounded-full bg-white p-5 shadow-[0_0_50px_-6px_rgba(34,211,238,0.55)] sm:h-52 sm:w-52 sm:p-6">
                      <Image
                        src="/collaxion-logo.png"
                        alt="CollaXion logo"
                        width={200}
                        height={200}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Demo videos */}
          <section className="mt-16">
            <Reveal>
              <div className="font-mono text-[13px] text-slate-500">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-slate-400">play</span>{" "}
                <span className="text-cyan-300">demos/</span>
              </div>
              <h2 className="mt-2 font-mono text-2xl font-bold sm:text-3xl">
                <span className="text-slate-600">#</span>{" "}
                <span className="text-slate-100">Live demos</span>
              </h2>
              <p className="mt-1.5 font-mono text-[13px] text-slate-500">
                <span className="text-slate-600">//</span> Walkthroughs of the
                web platform and React Native mobile app
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal delay={80}>
                <div className="term-window overflow-hidden">
                  <div className="term-titlebar">
                    <span className="term-dot bg-red-500/70" />
                    <span className="term-dot bg-yellow-500/70" />
                    <span className="term-dot bg-emerald-500/70" />
                    <Globe className="ml-2 h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-slate-300">web-demo.mp4</span>
                    <span className="ml-auto rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] tracking-wider text-cyan-300 uppercase">
                      web
                    </span>
                  </div>
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full bg-black"
                  >
                    <source src="/videos/collaxion-web.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="term-window overflow-hidden">
                  <div className="term-titlebar">
                    <span className="term-dot bg-red-500/70" />
                    <span className="term-dot bg-yellow-500/70" />
                    <span className="term-dot bg-emerald-500/70" />
                    <Smartphone className="ml-2 h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-slate-300">app-demo.mp4</span>
                    <span className="ml-auto rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] tracking-wider text-emerald-400 uppercase">
                      android
                    </span>
                  </div>
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full bg-black"
                  >
                    <source src="/videos/collaxion-app.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Features */}
          <section className="mt-16">
            <Reveal>
              <div className="font-mono text-[13px] text-slate-500">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-slate-400">grep</span>{" "}
                <span className="text-cyan-300">features</span>
              </div>
              <h2 className="mt-2 font-mono text-2xl font-bold sm:text-3xl">
                <span className="text-slate-600">#</span>{" "}
                <span className="text-slate-100">Key features</span>
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="h-full rounded-md border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-cyan-500/40">
                    <div className="font-mono text-[11px] text-slate-500">
                      // feature.{i + 1}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-slate-100">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-slate-400">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Workflow */}
          <section className="mt-16">
            <Reveal>
              <div className="font-mono text-[13px] text-slate-500">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-slate-400">run</span>{" "}
                <span className="text-cyan-300">workflow</span>
              </div>
              <h2 className="mt-2 font-mono text-2xl font-bold sm:text-3xl">
                <span className="text-slate-600">#</span>{" "}
                <span className="text-slate-100">End-to-end workflow</span>
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((s, i) => (
                <Reveal key={s.step} delay={i * 70}>
                  <div className="h-full rounded-md border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-cyan-500/40">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] text-slate-500">
                        step.{s.step}
                      </span>
                      <span className="font-mono text-2xl font-bold text-slate-800">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-slate-100">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-slate-400">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CTA */}
          <Reveal>
            <div className="mt-16 rounded-md border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-emerald-500/10 p-6 text-center sm:p-10">
              <div className="font-mono text-[12px] text-slate-500">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-cyan-300">./collaborate.sh</span>
              </div>
              <h2 className="mt-3 font-mono text-2xl font-bold text-slate-100 sm:text-3xl">
                Interested in working together?
              </h2>
              <p className="mt-2 text-slate-400">
                I&apos;d love to bring this kind of energy to your project.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/15 px-5 py-2.5 font-mono text-[13px] font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/25"
              >
                <span className="text-slate-500">$</span> let-s-talk
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
