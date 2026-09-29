"use client";

import { useEffect } from "react";

function KickerRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-sand" />
      <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">{children}</span>
    </div>
  );
}

const expertises = [
  { num: "01", title: "Marketing digital", items: ["Stratégie digitale", "SEO & référencement", "Contenu & newsletter", "Création de site web"] },
  { num: "02", title: "Organisation & productivité", items: ["Planners digitaux", "Trackers d'habitudes", "Suivi financier", "Gestion de projets", "Systèmes d'organisation"] }
];

export function AboutView() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("nea-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".nea-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative bg-porcelain">

      {/* ── HERO : titre géant, pas de bloc sombre plein écran ── */}
      <section className="px-8 pt-32 pb-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <KickerRule>Néa Digital</KickerRule>
          <h1
            className="font-display font-extrabold uppercase text-ink"
            style={{ fontSize: "clamp(38px,6vw,84px)", lineHeight: 0.96, letterSpacing: "-0.02em" }}
          >
            Une marque,
            <br />
            <span className="text-sand">deux univers.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.8] text-ink/65">
            Néa Digital, c'est deux choses : des services marketing digital pour les entreprises, marques et indépendants, et une boutique de ressources digitales pour s'organiser au quotidien.
          </p>
        </div>
      </section>

      {/* ── DEUX UNIVERS : index numéroté, comme les offres de la home ── */}
      <section className="px-8 py-20 md:px-16">
        <div className="mx-auto max-w-5xl border-t border-ink/12">
          {[
            { num: "01", tag: "Pour les pros", title: "Services marketing pour entreprises & indépendants.", desc: "Stratégie, contenu et visibilité digitale, avec la possibilité de créer ou refondre un site quand le projet le demande. Des prestations soignées, sans jargon.", href: "/services", cta: "Services →" },
            { num: "02", tag: "Pour s'organiser", title: "Ressources digitales pour s'organiser.", desc: "Planners digitaux, trackers d'habitudes, suivi financier : des outils simples pour planifier, prioriser et suivre ce qui compte.", href: "/shop", cta: "Boutique →" }
          ].map((block, i) => (
            <div key={block.num} className="nea-reveal nea-offer-row group border-b border-ink/12 py-10" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr_1.4fr_auto] md:items-center md:gap-8">
                <span className="font-display text-[15px] font-extrabold text-sand">{block.num}</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/45">{block.tag}</p>
                  <h2 className="font-display text-[20px] font-extrabold text-ink">{block.title}</h2>
                </div>
                <p className="text-[13px] leading-[1.7] text-ink/60">{block.desc}</p>
                <a href={block.href} className="whitespace-nowrap font-display text-[11px] font-extrabold uppercase tracking-[0.06em] text-ink transition-colors group-hover:text-sand">
                  {block.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPROCHE : bloc statement, comme Full Harmony ── */}
      <section className="px-8 py-24 md:px-16">
        <div className="nea-reveal mx-auto max-w-5xl rounded-[4px] bg-ink px-8 py-16 text-center md:px-16">
          <p className="mb-4 font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">L'approche</p>
          <h2 className="font-display text-[clamp(24px,3.2vw,40px)] font-extrabold uppercase text-porcelain">
            Une même approche pour les deux.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.85] text-porcelain/70">
            D'un côté, des créatrices et indépendantes qui veulent une organisation plus claire. De l'autre, des entreprises qui veulent une présence en ligne qui fonctionne vraiment. Dans les deux cas, je travaille pareil : je comprends d'abord ce dont vous avez besoin, puis je livre quelque chose d'utilisable tout de suite.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Organisation", "Branding", "Contenu", "Conversion"].map((tag) => (
              <span key={tag} className="rounded-[2px] border border-sand/40 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-sand">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISES : ligne de temps horizontale, comme la méthode ── */}
      <section className="bg-linen px-8 py-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <KickerRule>Expertises</KickerRule>
          <h2 className="mb-14 font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase text-ink">Compétences</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {expertises.map((exp, i) => (
              <div key={exp.num} className="nea-reveal rounded-[4px] bg-porcelain p-9 shadow-line" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="font-display text-[13px] font-extrabold text-sand">{exp.num}</span>
                <h3 className="mt-2 font-display text-[19px] font-extrabold text-ink">{exp.title}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {exp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-ink/60">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-sand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA : bloc plein, une ligne, comme la home ── */}
      <section id="contact" className="bg-sand px-8 py-28 text-center md:px-16">
        <h2 className="nea-reveal font-display font-extrabold uppercase text-porcelain" style={{ fontSize: "clamp(30px,4.8vw,58px)", lineHeight: 1.02 }}>
          Un projet ? Une question ?
        </h2>
        <p className="nea-reveal mt-4 text-[14px] text-porcelain/80">Je réponds sous 48h.</p>
        <a href="/contact" className="nea-reveal nea-btn nea-btn--cream mt-9 inline-block">Contactez-moi</a>
      </section>

    </main>
  );
}
