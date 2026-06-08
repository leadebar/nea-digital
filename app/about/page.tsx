"use client";

import { useEffect } from "react";

const valeurs = [
  { title: "Clarté", desc: "Des ressources et des services pensés pour aller à l'essentiel, sans surcharge." },
  { title: "Design utile", desc: "Chaque visuel, chaque outil a une raison d'être. Rien pour faire joli, tout pour servir." },
  { title: "Régularité", desc: "Avancer un peu chaque jour plutôt que tout faire d'un coup. La constance prime sur l'intensité." },
  { title: "Croissance", desc: "Chaque action — un planner rempli, un site optimisé — est un pas vers un objectif plus grand." },
];

const expertises = [
  { num: "01", title: "Marketing digital", items: ["Stratégie digitale", "SEO & référencement", "Google Ads", "Contenu & newsletter", "Création de site web"] },
  { num: "02", title: "Organisation & productivité", items: ["Planners digitaux", "Trackers d'habitudes", "Suivi financier", "Gestion de projets", "Systèmes d'organisation"] },
];

export default function AboutPage() {
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
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(100px,20vw,280px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >À PROPOS</span>

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: "ab-slide-top 0.7s 0.2s both" }}>
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C8B89A]">Néa Digital</span>
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
              Néa Digital c'est à la fois une offre de <strong className="text-white/90 font-medium">services marketing digital</strong> pour les TPE et artisans, et une boutique de <strong className="text-white/90 font-medium">ressources digitales</strong> pour les femmes qui veulent s'organiser mieux. Deux univers distincts, une même exigence de clarté et de résultats.
            </p>
          </div>
        </section>

        {/* ── DEUX UNIVERS ── */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="ab-reveal bg-[#F5F1EB] px-12 py-20 border-r border-[#EDE8DF]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Pour les pros</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(24px,3vw,36px)] text-[#1C1A1A] leading-[1.15] mb-5">
              Services marketing<br /><em className="italic font-light text-[#7A7470]">pour TPE & artisans.</em>
            </h2>
            <p className="text-[14px] text-[#7A7470] leading-[1.8] mb-8">
              Création de site web, SEO local, Google Ads, contenu — j'accompagne les artisans et indépendants pour développer leur visibilité en ligne. Des prestations concrètes, des résultats mesurables, sans jargon.
            </p>
            <a href="/services" className="ab-btn-dark inline-block"><span>Voir les services →</span></a>
          </div>

          <div className="ab-reveal bg-[#EDE8DF] px-12 py-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Pour s'organiser</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(24px,3vw,36px)] text-[#1C1A1A] leading-[1.15] mb-5">
              Ressources digitales<br /><em className="italic font-light text-[#7A7470]">pour gagner en clarté.</em>
            </h2>
            <p className="text-[14px] text-[#7A7470] leading-[1.8] mb-8">
              Planners digitaux, trackers d'habitudes, suivi financier — des outils simples pour planifier, prioriser et suivre ce qui compte. Compatibles GoodNotes, Notability et imprimables A4.
            </p>
            <a href="/shop" className="ab-btn-dark inline-block"><span>Voir la boutique →</span></a>
          </div>
        </section>

        {/* ── APPROCHE ── */}
        <section className="bg-[#FFFFFF] px-12 py-24">
          <div className="ab-reveal mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">L'approche</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              Des outils <em className="italic font-light text-[#7A7470]">simples</em>,<br />une identité <em className="italic font-light text-[#7A7470]">cohérente</em>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            <div className="ab-reveal md:col-span-2 bg-[#F5F1EB] p-11">
              <p className="text-[16px] text-[#1C1A1A] leading-[1.85] mb-6">
                La marque s'adresse aux créatrices, indépendantes et petites marques qui veulent une organisation plus claire — ainsi qu'aux artisans et TPE qui cherchent à exister en ligne sans y passer des heures.
              </p>
              <p className="text-[15px] text-[#7A7470] leading-[1.85]">
                L'objectif dans les deux cas est le même : <strong className="text-[#1C1A1A] font-medium">gagner du temps</strong>, avancer avec régularité et avoir des actions faciles à suivre. Pas de complexité inutile, pas de promesses vagues — juste des outils et des services qui fonctionnent.
              </p>
            </div>
            <div className="ab-reveal bg-[#1C1A1A] p-11 flex flex-col justify-between">
              <div>
                {["Organisation", "Branding", "Contenu", "Conversion"].map((tag) => (
                  <span key={tag} className="inline-block text-[11px] font-medium tracking-[0.1em] uppercase text-[#C8B89A] border border-[#C8B89A]/30 rounded-sm px-3 py-1 mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2">hello@nea-digital.com</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/30">TikTok · Pinterest</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALEURS ── */}
        <section className="bg-[#F5F1EB] px-12 py-24">
          <div className="ab-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Valeurs</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              Ce qui guide<br /><em className="italic font-light text-[#7A7470]">chaque décision.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5">
            {valeurs.map((v, i) => (
              <div key={v.title} className="ab-reveal bg-white p-9 transition-colors duration-300 hover:bg-[#EDE8DF]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-[#EDE8DF] leading-none mb-4 tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "48px" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[18px] font-semibold text-[#1C1A1A] mb-3">{v.title}</h3>
                <p className="text-[13px] text-[#7A7470] leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERTISES ── */}
        <section className="bg-[#1C1A1A] px-12 py-24">
          <div className="ab-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C8B89A]">Expertises</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-white leading-[1.15]">
              Ce que je <em className="italic font-light text-[#C8B89A]">sais faire.</em>
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
                      <span className="w-4 h-px bg-[#C8B89A] shrink-0" />
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
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EDE8DF] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(80px,18vw,240px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >NÉA.</span>
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes ab-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ab-slide-top { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ab-reveal { from { opacity:0; transform:translateY(36px) skewY(2deg); } to { opacity:1; transform:translateY(0) skewY(0); } }

        .ab-reveal { opacity:0; transform:translateY(28px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .ab-reveal.ab-visible { opacity:1; transform:translateY(0); }

        .ab-btn-dark { position:relative; overflow:hidden; background:#1C1A1A; color:white; font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:12px 24px; border-radius:2px; text-decoration:none; transition:color 0.3s; display:inline-block; }
        .ab-btn-dark::before { content:''; position:absolute; inset:0; background:#C8B89A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ab-btn-dark:hover { color:#1C1A1A; }
        .ab-btn-dark:hover::before { transform:translateY(0); }
        .ab-btn-dark span { position:relative; z-index:1; }
      `}</style>
    </>
  );
}
