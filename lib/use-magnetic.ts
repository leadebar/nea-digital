"use client";

import { useEffect, useRef } from "react";

/**
 * Pulls an element gently toward the cursor when hovered, and snaps it back
 * on mouse leave. Disabled on touch devices and for reduced-motion users.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el!.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    }

    function handleLeave() {
      el!.style.transform = "translate(0, 0)";
    }

    el.style.transition =
      "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease";
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
