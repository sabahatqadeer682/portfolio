"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("has-custom-cursor");

    let tx = -100;
    let ty = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let pressed = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
    };

    const onDown = () => {
      pressed = true;
      if (ringRef.current) ringRef.current.dataset.press = "true";
    };
    const onUp = () => {
      pressed = false;
      if (ringRef.current) ringRef.current.dataset.press = "false";
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !ringRef.current) return;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover'], .node-group"
      );
      ringRef.current.dataset.hover = interactive ? "true" : "false";
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const tick = () => {
      const ease = pressed ? 0.32 : 0.18;
      rx += (tx - rx) * ease;
      ry += (ty - ry) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden />
    </>
  );
}
