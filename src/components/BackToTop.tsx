"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-500/50 bg-slate-950/80 text-cyan-300 shadow-[0_0_24px_-6px_rgba(34,211,238,0.55)] backdrop-blur transition-all hover:-translate-y-1 hover:bg-cyan-500/15 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
