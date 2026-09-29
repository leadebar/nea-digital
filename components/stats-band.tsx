"use client";

import { useEffect, useRef, useState } from "react";

type CountStat = { type: "count"; value: number; suffix: string; label: string };
type TextStat = { type: "text"; display: string; label: string };
type Stat = CountStat | TextStat;

// Only real, verifiable figures here — no invented client counts or results.
const items: Stat[] = [
  { type: "count", value: 5, suffix: " ans", label: "d'expérience en marketing digital" },
  { type: "count", value: 48, suffix: "h", label: "de délai de réponse" },
  { type: "text", display: "Sur devis", label: "adapté à chaque projet, sans surprise" }
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let raf = 0;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatTile({ stat, active }: { stat: Stat; active: boolean }) {
  if (stat.type === "text") {
    return (
      <div className={`text-center transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"}`}>
        <p style={{ fontFamily: "'Bebas Neue'" }} className="text-[#B08D57] leading-none text-[clamp(36px,5vw,56px)]">
          {stat.display}
        </p>
        <p className="mt-3 text-[13px] text-white/60">{stat.label}</p>
      </div>
    );
  }

  const value = useCountUp(stat.value, active);
  return (
    <div className="text-center">
      <p style={{ fontFamily: "'Bebas Neue'" }} className="text-[#B08D57] leading-none text-[clamp(40px,5vw,64px)]">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-3 text-[13px] text-white/60">{stat.label}</p>
    </div>
  );
}

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(true); }),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#1C1A1A] px-12 py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-3">
        {items.map((stat) => (
          <StatTile key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </div>
  );
}
