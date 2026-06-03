"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-[width] duration-100"
      style={{ width: `${w}%` }}
    />
  );
}
