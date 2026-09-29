"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Curtain sweep between page navigations: a solid panel slides up to cover
 * the screen, the route changes underneath, then it slides out the top.
 * Falls back to normal Next.js navigation for reduced-motion, external,
 * new-tab, hash and download links.
 */
export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement>(null);
  const pendingHref = useRef<string | null>(null);
  const firstRender = useRef(true);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = curtainRef.current;
    if (!el || reducedMotion.current) return;

    el.style.transition = "transform 0.5s cubic-bezier(0.76,0,0.24,1)";
    el.style.transform = "translateY(-100%)";

    const t = setTimeout(() => {
      el.style.transition = "none";
      el.style.transform = "translateY(100%)";
    }, 520);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (reducedMotion.current) return;
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      if (href.includes("#")) return;

      const url = new URL(href, window.location.origin);
      if (url.pathname === pathname) return;

      e.preventDefault();
      pendingHref.current = href;

      const el = curtainRef.current;
      if (el) {
        el.style.transition = "transform 0.42s cubic-bezier(0.76,0,0.24,1)";
        el.style.transform = "translateY(0%)";
      }

      setTimeout(() => {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }
      }, 420);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] bg-[#1C1A1A]"
      style={{ transform: "translateY(100%)" }}
    />
  );
}
