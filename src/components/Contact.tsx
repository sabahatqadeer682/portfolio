"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Status = { kind: "idle" | "success" | "error"; text: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const f = e.currentTarget;
    const data = new FormData(f);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    setSending(true);
    setStatus({ kind: "idle", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          kind: "error",
          text: json?.error || "Failed to send. Please try again.",
        });
      } else {
        setStatus({
          kind: "success",
          text: "✓ Message sent! Sabahat will reply to your email soon.",
        });
        f.reset();
      }
    } catch {
      setStatus({
        kind: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSending(false);
      setTimeout(() => setStatus({ kind: "idle", text: "" }), 8000);
    }
  }

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          cmd="./contact.exe"
          title="Contact"
          subtitle="Open to opportunities, internships & freelance work"
        />

        <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* curl-style info card */}
          <Reveal>
            <div className="term-window">
              <div className="term-titlebar">
                <span className="term-dot bg-red-500/70" />
                <span className="term-dot bg-yellow-500/70" />
                <span className="term-dot bg-emerald-500/70" />
                <span className="ml-2 text-slate-500">connect.sh</span>
              </div>
              <div className="p-4 font-mono text-[12px] sm:p-6 sm:text-[13px]">
                <p className="text-slate-500"># Reach me directly</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre text-slate-400">
                  <span className="text-violet-400">curl</span>{" "}
                  <span className="text-cyan-300">--connect</span>{" "}
                  <span className="text-emerald-300">sabahat</span>
                  {"\n"}
                  <span className="text-slate-600">  </span>
                  <span className="text-cyan-300">--via</span>{" "}
                  <span className="text-emerald-300">
                    &quot;email&quot;
                  </span>{" "}
                  <span className="text-slate-600">\</span>
                  {"\n"}
                  <span className="text-slate-600">  </span>
                  <span className="text-cyan-300">--reply</span>{" "}
                  <span className="text-emerald-300">&quot;within 24h&quot;</span>
                </pre>

                <ul className="mt-6 space-y-2.5 text-[12px] sm:text-[13px]">
                  <li className="flex flex-wrap items-baseline gap-2">
                    <span className="text-violet-400">email</span>
                    <span className="text-slate-500">→</span>
                    <a
                      href="mailto:sabahatqadeerbhati@gmail.com"
                      className="break-all text-emerald-300 hover:text-cyan-300 hover:underline"
                    >
                      sabahatqadeerbhati@gmail.com
                    </a>
                  </li>
                  <li className="flex flex-wrap items-baseline gap-2">
                    <span className="text-violet-400">location</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-emerald-300">
                      Wah Cantt, Punjab, PK
                    </span>
                  </li>
                  <li className="flex flex-wrap items-baseline gap-2">
                    <span className="text-violet-400">linkedin</span>
                    <span className="text-slate-500">→</span>
                    <a
                      href="https://www.linkedin.com/in/sabahatqadeer"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-300 hover:text-cyan-300 hover:underline"
                    >
                      in/sabahatqadeer
                    </a>
                  </li>
                  <li className="flex flex-wrap items-baseline gap-2">
                    <span className="text-violet-400">availability</span>
                    <span className="text-slate-500">→</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      open to work
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/sabahatqadeer"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/sabahatqadeer682"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <div className="term-window">
              <div className="term-titlebar">
                <span className="term-dot bg-red-500/70" />
                <span className="term-dot bg-yellow-500/70" />
                <span className="term-dot bg-emerald-500/70" />
                <span className="ml-2 text-slate-500">send-message.ts</span>
              </div>
              <form onSubmit={onSubmit} className="relative p-4 font-mono sm:p-6">
                <div className="text-[13px] text-slate-500">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-300">message</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-slate-400">&#123;</span>
                </div>

                <div className="mt-3 ml-3 space-y-3">
                  <Field name="name" label="name" />
                  <Field name="email" label="email" type="email" />
                  <Field name="subject" label="subject" />
                  <Field name="message" label="message" textarea />
                </div>

                {/* honeypot — hidden from real users, bots fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <div className="mt-3 text-[13px] text-slate-400">&#125;;</div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-5 py-3 text-[13px] font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      sending...
                    </>
                  ) : (
                    <>
                      <span className="text-slate-500">$</span> ./send.sh
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {status.text && (
                  <div
                    className={`mt-4 rounded-md border p-3 text-center text-[12px] ${
                      status.kind === "error"
                        ? "border-pink-500/40 bg-pink-500/10 text-pink-300"
                        : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block font-mono text-[12px] text-violet-400"
      >
        &quot;{label}&quot;
        <span className="text-slate-500">:</span>
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required
          placeholder={`"your ${label}..."`}
          className="block w-full rounded-md border border-slate-800 bg-slate-950/70 px-3 py-2 font-mono text-[16px] text-emerald-300 placeholder-slate-700 outline-none transition-colors focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/25 sm:text-[13px]"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={`"your ${label}..."`}
          className="block w-full rounded-md border border-slate-800 bg-slate-950/70 px-3 py-2 font-mono text-[16px] text-emerald-300 placeholder-slate-700 outline-none transition-colors focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/25 sm:text-[13px]"
        />
      )}
    </div>
  );
}
