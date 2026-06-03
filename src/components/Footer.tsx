import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, Heart, Coffee } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

const stack = [
  { name: "Next.js", tone: "text-cyan-300" },
  { name: "TypeScript", tone: "text-sky-300" },
  { name: "Tailwind", tone: "text-emerald-300" },
  { name: "Framer-ish", tone: "text-violet-300" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/70 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950 px-6 pt-14 pb-6 lg:px-10">
      {/* top neon hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-56 w-56 rounded-full bg-pink-500/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + status */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center font-mono text-base font-semibold tracking-tight"
            >
              <span className="text-slate-500">~/</span>
              <span className="text-cyan-400">sabahat</span>
              <span className="text-slate-500">.dev</span>
              <span className="animate-blink ml-1 text-cyan-300">_</span>
            </Link>
            <p className="mt-3 max-w-xs font-mono text-[12px] leading-relaxed text-slate-500">
              <span className="text-slate-600">//</span> Full Stack Developer
              crafting modern, scalable, user-focused web &amp; mobile
              experiences.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 font-mono text-[11px] text-emerald-300 shadow-[0_0_18px_-4px_rgba(74,222,128,0.4)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              available-for-hire
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href="https://www.linkedin.com/in/sabahatqadeer"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <LinkedinIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://github.com/sabahatqadeer682"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <GithubIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="mailto:sabahatqadeerbhati@gmail.com"
                aria-label="Email"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
              <span className="text-emerald-400">$</span> ls ./pages
            </h3>
            <ul className="space-y-2 font-mono text-[13px]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="text-slate-700 transition-colors group-hover:text-cyan-400">
                      &gt;
                    </span>
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
              <span className="text-emerald-400">$</span> cat contact.txt
            </h3>
            <ul className="space-y-3 font-mono text-[12px] text-slate-400">
              <li>
                <a
                  href="mailto:sabahatqadeerbhati@gmail.com"
                  className="group inline-flex items-start gap-2 transition-colors hover:text-emerald-300"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/70 transition-colors group-hover:text-emerald-300" />
                  <span className="break-all">
                    sabahatqadeerbhati@gmail.com
                  </span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pink-400/70" />
                <span>Wah Cantt, Pakistan</span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sabahatqadeer"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-2 transition-colors hover:text-cyan-300"
                >
                  <LinkedinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70 transition-colors group-hover:text-cyan-300" />
                  <span>in/sabahatqadeer</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sabahatqadeer682"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-2 transition-colors hover:text-violet-300"
                >
                  <GithubIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/70 transition-colors group-hover:text-violet-300" />
                  <span>@sabahatqadeer682</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Built with */}
          <div>
            <h3 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
              <span className="text-emerald-400">$</span> cat package.json
            </h3>
            <div className="rounded-md border border-slate-800 bg-slate-900/40 p-4 font-mono text-[12px] backdrop-blur-sm">
              <div className="text-slate-500">{"{"}</div>
              <div className="ml-3 space-y-1.5 py-1">
                <div>
                  <span className="text-violet-400">&quot;built-with&quot;</span>
                  <span className="text-slate-500">: [</span>
                </div>
                <div className="ml-3 flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <span
                      key={s.name}
                      className={`rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-[11px] ${s.tone}`}
                    >
                      &quot;{s.name}&quot;
                    </span>
                  ))}
                </div>
                <div className="text-slate-500">],</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-violet-400">&quot;coffee&quot;</span>
                  <span className="text-slate-500">:</span>
                  <span className="inline-flex items-center gap-1 text-amber-300">
                    <Coffee className="h-3 w-3" />
                    <span>&quot;always&quot;</span>
                  </span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-violet-400">&quot;version&quot;</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-emerald-300">
                    &quot;{year}.06.0&quot;
                  </span>
                </div>
              </div>
              <div className="text-slate-500">{"}"}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/70 pt-5 font-mono text-[11px] text-slate-600 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">$</span>
            <span>
              echo &quot;© {year} Sabahat Qadeer - crafted with
            </span>
            <Heart className="inline h-3 w-3 animate-pulse text-pink-400" />
            <span>&amp;</span>
            <Coffee className="inline h-3 w-3 text-amber-400" />
            <span>&quot;</span>
            <span className="animate-blink text-cyan-300">_</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-slate-500">deployed · {year}</span>
            </span>
            <a
              href="#home"
              className="group inline-flex items-center gap-1 rounded border border-slate-800 px-2.5 py-1 text-slate-500 transition-all hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <span>top</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
