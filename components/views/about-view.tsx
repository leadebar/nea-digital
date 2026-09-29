"use client";

import { useEffect } from "react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-sand">{children}</p>;
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
    <main className="bg-porcelain">

      {/* ── OUVERTURE : lettrine, comme la home ── */}
      <section className="px-8 pt-32 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>À propos</Eyebrow>
          <p className="font-editorial text-[clamp(24px,3.4vw,36px)] font-normal leading-[1.35] text-ink">
            <span className="nea-dropcap">N</span>éa Digital, c'est deux choses : des services marketing digital pour les entreprises, marques et indépendants, et une boutique de ressources digitales pour s'organiser au quotidien. Une même exigence, deux façons d'y répondre.
          </p>
        </div>
      </section>

      {/* ── DEUX UNIVERS : colonnes bordées, pas de blocs pleins ── */}
      <section className="border-t border-sand/25 px-8 py-20 md:px-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-14 md:grid-cols-2">
          <div className="nea-reveal">
            <Eyebrow>Pour les pros</Eyebrow>
            <h2 className="font-editorial text-[clamp(22px,2.6vw,30px)] font-normal leading-[1.25] text-ink">
              Services marketing pour entreprises & indépendants.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.8] text-ink/65">
              Stratégie, contenu et visibilité digitale, avec la possibilité de créer ou refondre un site quand le projet le demande. J'accompagne entreprises, marques et indépendants pour développer une présence en ligne à la hauteur de leur activité, sans jargon.
            </p>
            <a href="/services" className="nea-link mt-6 inline-block">Voir les services →</a>
          </div>

          <div className="nea-reveal md:border-l md:border-sand/25 md:pl-14">
            <Eyebrow>Pour s'organiser</Eyebrow>
            <h2 className="font-editorial text-[clamp(22px,2.6vw,30px)] font-normal leading-[1.25] text-ink">
              Ressources digitales pour s'organiser.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.8] text-ink/65">
              Planners digitaux, trackers d'habitudes, suivi financier : des outils simples pour planifier, prioriser et suivre ce qui compte. Compatibles GoodNotes, Notability et imprimables A4.
            </p>
            <a href="/shop" className="nea-link mt-6 inline-block">Voir la boutique →</a>
          </div>
        </div>
      </section>

      {/* ── APPROCHE : paragraphe éditorial + tags, pas de bloc sombre ── */}
      <section className="bg-linen px-8 py-24 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>L'approche</Eyebrow>
          <h2 className="nea-reveal font-editorial text-[clamp(26px,3vw,36px)] font-normal text-ink">Une même approche pour les deux.</h2>
          <p className="nea-reveal mt-6 text-[16px] leading-[1.85] text-ink/75">
            D'un côté, des créatrices et indépendantes qui veulent une organisation plus claire. De l'autre, des entreprises qui veulent une présence en ligne qui fonctionne vraiment. Dans les deux cas, je travaille pareil : je comprends d'abord ce dont vous avez besoin, puis je livre quelque chose d'utilisable tout de suite, sans y ajouter de complexité.
          </p>
          <div className="nea-reveal mt-8 flex flex-wrap gap-3">
            {["Organisation", "Branding", "Contenu", "Conversion"].map((tag) => (
              <span key={tag} className="border border-sand/40 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-taupe">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISES : liste verticale annotée, même langage que la home ── */}
      <section className="px-8 py-24 md:px-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-14 text-center">
            <Eyebrow>Expertises</Eyebrow>
            <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal text-ink">Compétences.</h2>
          </div>
          <div className="flex flex-col gap-14">
            {expertises.map((exp, i) => (
              <div key={exp.num} className="nea-reveal relative border-l border-sand/30 pl-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-sand bg-porcelain" />
                <span className="font-editorial text-[13px] text-sand">{exp.num}</span>
                <h3 className="mt-1 font-editorial text-[20px] font-normal text-ink">{exp.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
                  {exp.items.map((item) => (
                    <li key={item} className="text-[13px] text-ink/55">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA : signature discrète, cohérente avec la home ── */}
      <section id="contact" className="border-t border-sand/25 px-8 py-32 text-center md:px-16">
        <p className="nea-reveal mb-3 text-[12px] uppercase tracking-[0.22em] text-sand">Un projet, une question</p>
        <h2 className="nea-reveal font-editorial font-normal text-ink" style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.2 }}>
          On en parle ?
        </h2>
        <p className="nea-reveal mt-4 text-[14px] text-ink/55">Je réponds sous 48h.</p>
        <a href="/contact" className="nea-reveal nea-link mt-7 inline-block text-[16px]">Contactez-moi →</a>
      </section>

    </main>
  );
}
