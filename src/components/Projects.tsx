import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Project = {
  title: string;
  slug: string;
  sub: string;
  desc: string;
  tech: string[];
  status: "live" | "completed" | "archived";
  metrics?: { label: string; value: string }[];
  href?: string;
  logo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "CollaXion",
    slug: "collaxion",
    sub: "AI-powered University–Industry Collaboration Platform",
    desc:
      "Full-stack MERN + React Native platform with role-based access (Students, Industry, Internship Incharge, Liaison), JWT auth, multi-stage approval, Gemini AI CV parsing, real-time WebSocket chat and Google Maps based industry discovery.",
    tech: ["MERN", "React Native", "Gemini AI", "WebSocket", "JWT", "Maps API"],
    status: "live",
    metrics: [
      { label: "roles", value: "4" },
      { label: "platforms", value: "web+app" },
      { label: "ai", value: "Gemini" },
    ],
    href: "/projects/collaxion",
    logo: "/collaxion-logo.png",
    featured: true,
  },
  {
    title: "Food Fusion",
    slug: "food-fusion",
    sub: "Full Stack Restaurant Web Application",
    desc:
      "MERN-based restaurant platform with online ordering, cart, order tracking, table reservation with time slots and admin approval.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    status: "completed",
    metrics: [
      { label: "flow", value: "e2e" },
      { label: "ui", value: "responsive" },
    ],
  },
  {
    title: "Stitch & Style",
    slug: "stitch-style",
    sub: "Tailor Management Mobile App",
    desc:
      "React Native mobile app for tailor shops - customer profiles, measurements, order tracking and Firebase auth with real-time updates from placement to delivery.",
    tech: ["React Native", "Firebase", "Realtime DB"],
    status: "completed",
    metrics: [
      { label: "platform", value: "android" },
      { label: "auth", value: "firebase" },
    ],
  },
  {
    title: "Hospital Management System",
    slug: "hms",
    sub: "Java Desktop Application",
    desc:
      "Desktop application built in Java for managing patient, doctor and staff records. Applied OOP principles for a modular, scalable design.",
    tech: ["Java", "OOP", "Desktop"],
    status: "completed",
    metrics: [
      { label: "paradigm", value: "OOP" },
      { label: "type", value: "desktop" },
    ],
  },
  {
    title: "Food Website",
    slug: "food-website",
    sub: "Responsive Restaurant Showcase",
    desc:
      "Fully responsive static website showcasing a restaurant menu and business services with mobile-first design and cross-browser compatibility.",
    tech: ["HTML5", "CSS3", "Responsive"],
    status: "completed",
    metrics: [
      { label: "design", value: "mobile-first" },
    ],
  },
];

const statusColor: Record<Project["status"], string> = {
  live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  completed: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  archived: "bg-slate-700/30 text-slate-400 border-slate-700",
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          cmd="ls -la projects/"
          title="Projects"
          subtitle="Pinned repositories - a selection of things I've built"
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 60}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard p={p} />
            </Reveal>
          ))}

          <Reveal delay={projects.length * 60}>
            <div className="term-window flex h-full flex-col">
              <div className="term-titlebar">
                <span className="term-dot bg-red-500/70" />
                <span className="term-dot bg-yellow-500/70" />
                <span className="term-dot bg-emerald-500/70" />
                <span className="ml-2 text-slate-500">collab.sh</span>
              </div>
              <div className="flex flex-1 flex-col justify-center p-5 font-mono sm:p-6">
                <p className="text-[13px] text-slate-500">// next-up</p>
                <h3 className="mt-2 text-lg font-bold text-slate-100">
                  Have a project in mind?
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  Let&apos;s collaborate and build something great together.
                </p>
                <Link
                  href="#contact"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-[13px] font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20"
                >
                  <span className="text-slate-500">$</span> get-in-touch
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <article className="group term-window flex h-full flex-col transition-colors hover:border-cyan-500/40">
      <div className="term-titlebar">
        <span className="term-dot bg-red-500/70" />
        <span className="term-dot bg-yellow-500/70" />
        <span className="term-dot bg-emerald-500/70" />
        <span className="ml-2 text-slate-500">{p.slug}/</span>
        {p.href && (
          <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 font-mono sm:p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            {p.logo && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-[0_0_24px_-6px_rgba(34,211,238,0.45)]">
                <Image
                  src={p.logo}
                  alt={`${p.title} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-base font-bold text-slate-100 sm:text-lg">
                {p.title}
              </h3>
              <p className="mt-0.5 text-[11px] text-cyan-300/90">{p.sub}</p>
            </div>
          </div>
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] tracking-wider uppercase ${statusColor[p.status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {p.status}
          </span>
        </div>

        <p className="text-[13px] leading-relaxed text-slate-400">{p.desc}</p>

        {p.metrics && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {p.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1.5 text-center"
              >
                <div className="text-[12px] font-bold text-cyan-300">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[9px] tracking-wider text-slate-500 uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-[10px] text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );

  if (p.href) {
    return (
      <Link href={p.href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
