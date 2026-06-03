"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#home", id: "home", label: "home" },
  { href: "/#about", id: "about", label: "about.md" },
  { href: "/#skills", id: "skills", label: "skills.json" },
  { href: "/#projects", id: "projects", label: "projects/" },
  { href: "/#education", id: "education", label: "education.log" },
  { href: "/#contact", id: "contact", label: "contact.exe" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((sec) => {
        const top = (sec as HTMLElement).offsetTop - 120;
        if (window.scrollY >= top) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/70 bg-slate-950/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-slate-500">~/</span>
          <span className="text-cyan-400">sabahat</span>
          <span className="text-slate-500">.dev</span>
          <span className="animate-caret ml-1 text-cyan-400">_</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
                  }`}
                >
                  <span className="text-slate-600">{isActive ? "▸" : " "}</span>{" "}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-md border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-[13px] font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20 hover:text-cyan-200 md:inline-flex"
        >
          <span className="text-slate-500">$</span> hire-me
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <div
        className={`mx-4 mt-2 origin-top overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-3 font-mono">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-[13px] text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
              >
                <span className="text-slate-600">▸</span> {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-center text-[13px] font-semibold text-cyan-300"
            >
              $ hire-me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
