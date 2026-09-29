"use client";

import { useEffect } from "react";

const expertises = [
  { num: "01", title: "Marketing digital", items: ["Stratégie digitale", "SEO & référencement", "Contenu & newsletter", "Création de site web"] },
  { num: "02", title: "Organisation & productivité", items: ["Planners digitaux", "Trackers d'habitudes", "Suivi financier", "Gestion de projets", "Systèmes d'organisation"] },
];

export function AboutView() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("ab-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".ab-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <main>

        {/* ── HERO ── */}
        <section className="bg-[#1C1A1A] px-12 pt-36 pb-24 relative overflow-hidden">
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: "ab-slide-top 0.7s 0.2s both" }}>
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57]">Néa Digital</span>
            </div>
            <h1
              className="text-white leading-none mb-6"
              style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,7vw,88px)", letterSpacing: "0.03em", animation: "ab-reveal 0.9s 0.35s both" }}
            >
              UNE MARQUE,<br />DEUX UNIVERS.
            </h1>
            <p
              className="text-[16px] font-light text-white/65 leading-[1.85] max-w-2xl"
              style={{ animation: "ab-fade-up 0.8s 0.6s both" }}
            >
              Néa Digital, c'est deux choses : des <strong className="text-white/90 font-medium">services marketing digital</strong> pour les entreprises, marques et indépendants, et une boutique de <strong className="text-white/90 font-medium">ressources digitales</strong> pour s'organiser au quotidien.
            </p>
          </div>
        </section>

        {/* ── DEUX UNIVERS ── */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="ab-reveal bg-[#F5F1EB] px-12 py-20 border-r border-[#EDE8DF]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Pour les pros</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(24px,3vw,36px)] text-[#1C1A1A] leading-[1.15] mb-5">
              Services marketing pour entreprises & indépendants.
            </h2>
            <p className="text-[14px] text-[#7A7470] leading-[1.8] mb-8">
              Stratégie, contenu et visibilité digitale, avec la possibilité de créer ou refondre un site quand le projet le demande. J'accompagne entreprises, marques et indépendants pour développer une présence en ligne à la hauteur de leur activité, avec des prestations soignées, sans jargon.
            </p>
            <a href="/services" className="ab-btn-dark inline-block"><span>Voir les services →</span></a>
          </div>

          <div className="ab-reveal bg-[#EDE8DF] px-12 py-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Pour s'organiser</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(24px,3vw,36px)] text-[#1C1A1A] leading-[1.15] mb-5">
              Ressources digitales pour s'organiser.
            </h2>
            <p className="text-[14px] text-[#7A7470] leading-[1.8] mb-8">
              Planners digitaux, trackers d'habitudes, suivi financier : des outils simples pour planifier, prioriser et suivre ce qui compte. Compatibles GoodNotes, Notability et imprimables A4.
            </p>
            <a href="/shop" className="ab-btn-dark inline-block"><span>Voir la boutique →</span></a>
          </div>
        </section>

        {/* ── APPROCHE ── */}
        <section className="bg-[#FFFFFF] px-12 py-24">
          <div className="ab-reveal mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">L'approche</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              Une même approche pour les deux.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            <div className="ab-reveal md:col-span-2 bg-[#F5F1EB] p-11">
              <p className="text-[16px] text-[#1C1A1A] leading-[1.85] mb-6">
                D'un côté, des créatrices et indépendantes qui veulent une organisation plus claire. De l'autre, des entreprises qui veulent une présence en ligne qui tient debout.
              </p>
              <p className="text-[15px] text-[#7A7470] leading-[1.85]">
                Dans les deux cas, je travaille pareil : je comprends d'abord ce dont vous avez besoin, puis je livre quelque chose d'utilisable tout de suite, <strong className="text-[#1C1A1A] font-medium">sans y ajouter de complexité</strong>.
              </p>
            </div>
            <div className="ab-reveal bg-[#1C1A1A] p-11 flex flex-col justify-between">
              <div>
                {["Organisation", "Branding", "Contenu", "Conversion"].map((tag) => (
                  <span key={tag} className="inline-block text-[11px] font-medium tracking-[0.1em] uppercase text-[#B08D57] border border-[#B08D57]/30 rounded-sm px-3 py-1 mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div>
                <a href="mailto:contact.neadigital@gmail.com" className="block text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2 hover:text-white/60">contact.neadigital@gmail.com</a>
                <a href="https://fr.pinterest.com/neadigitalpro/?actingBusinessId=1138425749465166573" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-white/60">Pinterest</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERTISES ── */}
        <section className="bg-[#1C1A1A] px-12 py-24">
          <div className="ab-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57]">Expertises</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-white leading-[1.15]">
              Compétences.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {expertises.map((exp, i) => (
              <div key={exp.num} className="ab-reveal bg-[#1C1A1A] p-11" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-white/10 leading-none mb-5 tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "56px" }}>{exp.num}</div>
                <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[22px] font-semibold text-white mb-6">{exp.title}</h3>
                <ul className="flex flex-col gap-3">
                  {exp.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-white/60">
                      <span className="w-4 h-px bg-[#B08D57] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#F5F1EB] px-12 py-28 relative overflow-hidden">
          <div className="relative text-center">
            <h2 className="ab-reveal text-[#1C1A1A] leading-none mb-4 tracking-[0.04em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(44px,6vw,80px)" }}>
              UN PROJET ?<br />UNE QUESTION ?
            </h2>
            <p className="ab-reveal italic font-light text-[#7A7470] mb-10" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(16px,2vw,22px)" }}>
              je réponds sous 48h.
            </p>
            <a href="/contact" className="ab-reveal ab-btn-dark inline-block"><span>Contactez-moi →</span></a>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes ab-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ab-slide-top { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ab-reveal { from { opacity:0; transform:translateY(36px) skewY(2deg); } to { opacity:1; transform:translateY(0) skewY(0); } }

        .ab-reveal { opacity:0; transform:translateY(28px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .ab-reveal.ab-visible { opacity:1; transform:translateY(0); }

        .ab-btn-dark { position:relative; overflow:hidden; background:#1C1A1A; color:white; font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:12px 24px; border-radius:2px; text-decoration:none; transition:color 0.3s; display:inline-block; }
        .ab-btn-dark::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ab-btn-dark:hover { color:#1C1A1A; }
        .ab-btn-dark:hover::before { transform:translateY(0); }
        .ab-btn-dark span { position:relative; z-index:1; }
      `}</style>
    </>
  );
}
