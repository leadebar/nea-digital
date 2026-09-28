"use client";

import { useEffect } from "react";
import { FAQ } from "@/components/faq";
import { StrategyIcon, ContentIcon, WebIcon, HarmonyIcon } from "@/components/offer-icons";
import { offers, fullHarmony, processSteps, servicesFaq } from "@/data/site";

const offerIcons = { strategy: StrategyIcon, content: ContentIcon, web: WebIcon } as const;

export default function ServicesPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("pro-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".pro-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <main>

        {/* ── HERO ── */}
        <section className="bg-[#F5F1EB] px-12 pt-40 pb-24 text-center relative overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1C1A1A]/[0.03] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(100px,20vw,280px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >SERVICES</span>
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6" style={{ animation: "pro-fade-up 0.7s 0.2s both" }}>
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57]">Stratégie · Contenu · Web</span>
              <span className="w-7 h-px bg-[#B08D57]" />
            </div>
            <h1 className="text-[#1C1A1A] mb-4 leading-none" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(44px,7vw,80px)", letterSpacing: "0.02em" }}>
              <span className="block" style={{ animation: "pro-reveal 0.9s 0.35s both" }}>UNE PRÉSENCE DIGITALE</span>
              <span className="block" style={{ animation: "pro-reveal 0.9s 0.5s both" }}>PENSÉE AVEC EXIGENCE.</span>
            </h1>
            <p className="italic font-light text-[#7A7470] mb-8" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(16px,2vw,20px)", animation: "pro-fade-up 0.8s 0.8s both" }}>
              trois offres, un pack complet.
            </p>
            <p className="text-[14px] font-light text-[#5C564F] leading-[1.85] max-w-[440px] mx-auto mb-11" style={{ animation: "pro-fade-up 0.8s 0.95s both" }}>
              J'accompagne <strong className="text-[#1C1A1A] font-medium">entreprises, marques et indépendants</strong> qui veulent une présence en ligne à la hauteur de ce qu'ils proposent.
            </p>
            <div className="flex gap-4 flex-wrap justify-center" style={{ animation: "pro-fade-up 0.8s 1.1s both" }}>
              <a href="/contact" className="pro-btn-dark"><span>Devis gratuit →</span></a>
              <a href="#services-detail" className="pro-btn-outline"><span>Voir les offres</span></a>
            </div>
          </div>
        </section>

        <section className="bg-white px-12 py-10 border-y border-[#EDE8DF]">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 max-w-3xl mx-auto">
            {["48H de délai de réponse", "2–3 semaines pour un site complet", "Tarifs sur devis, sans surprise"].map((s) => (
              <p key={s} className="text-[12px] text-[#7A7470] tracking-[0.02em]">{s}</p>
            ))}
          </div>
        </section>

        {/* ── OFFRES ── */}
        <section id="services-detail" className="bg-[#F5F1EB] px-12 py-24">
          <div className="pro-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Ce que je fais</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(26px,3.2vw,40px)] text-[#1C1A1A] leading-[1.2]">
              Trois offres <em className="italic font-light text-[#8A8177]">claires</em><br />et des livrables soignés.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {offers.map((offer, i) => {
              const Icon = offerIcons[offer.key as keyof typeof offerIcons];
              return (
                <div key={offer.key} className="bg-white p-11 relative overflow-hidden pro-reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#B08D57]" />
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-9 h-9 text-[#B08D57] shrink-0" />
                    <span className="leading-none tracking-[0.05em] text-[#EDE8DF]" style={{ fontFamily: "'Bebas Neue'", fontSize: "38px" }}>{offer.num}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[21px] font-semibold text-[#1C1A1A] mb-1">{offer.title}</h3>
                  <p className="text-[13px] text-[#B08D57] font-medium mb-3 italic">{offer.tagline}</p>
                  <p className="text-[13px] text-[#7A7470] leading-[1.75] mb-6">{offer.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-[#1C1A1A] leading-[1.4]">
                        <span className="text-[#B08D57] text-[11px] flex-shrink-0 mt-[2px]">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#1C1A1A] border-b border-[#B08D57] pb-0.5 hover:text-[#7A7470] transition-colors">
                    Demander un devis →
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FULL HARMONY ── */}
        <section className="bg-[#1C1A1A] px-12 py-24">
          <div className="pro-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57]">Pack recommandé</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(26px,3.2vw,40px)] text-white leading-[1.2]">
              {fullHarmony.name} <em className="italic font-light text-[#B08D57]">— tout réuni.</em>
            </h2>
          </div>
          <div className="pro-reveal bg-[#F5F1EB] p-11 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <HarmonyIcon className="w-9 h-9 text-[#B08D57] mb-4" />
              <p className="text-[15px] text-[#1C1A1A] leading-[1.7] mb-6 max-w-lg">{fullHarmony.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fullHarmony.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-[#1C1A1A]">
                    <span className="text-[#B08D57]">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="/contact" className="pro-pack-btn-dark whitespace-nowrap"><span>Demander un devis</span></a>
          </div>
          <p className="text-center text-[12px] text-white/25 mt-8 tracking-[0.05em]">Tarifs communiqués sur devis — chaque projet est unique.</p>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="bg-[#F5F1EB] px-12 pt-24 pb-0">
          <div className="pro-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Comment ça marche</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(26px,3.2vw,40px)] text-[#1C1A1A] leading-[1.2]">
              De la prise de contact<br />à la <em className="italic font-light text-[#8A8177]">livraison.</em>
            </h2>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className="pro-reveal bg-white p-11 border-r border-[#EDE8DF] last:border-r-0"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="leading-none mb-5 tracking-[0.05em] text-[#B08D57]" style={{ fontFamily: "'Bebas Neue'", fontSize: "40px" }}>{step.num}</div>
              <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[17px] font-semibold text-[#1C1A1A] mb-3">{step.title}</h3>
              <p className="text-[13px] text-[#7A7470] leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <section id="contact" className="relative bg-[#1C1A1A] px-12 py-32 overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(80px,18vw,260px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >DEVIS</span>
          <div className="relative max-w-2xl">
            <h2 className="pro-reveal text-white leading-none mb-4 tracking-[0.02em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(42px,6vw,76px)" }}>
              DISCUTONS DE<br /><span className="text-[#B08D57]">VOTRE PROJET.</span>
            </h2>
            <p className="pro-reveal italic font-light text-white/50 mb-4" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(16px,2vw,22px)" }}>
              devis gratuit, réponse sous 48h.
            </p>
            <p className="pro-reveal text-[12px] text-white/25 tracking-[0.08em] uppercase mb-10">Sans engagement · 50% à la commande, 50% à la livraison</p>
            <a href="/contact" className="pro-reveal pro-btn-cream inline-block"><span>Contactez-moi →</span></a>
          </div>
        </section>

        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes pro-fade-up { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pro-reveal { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }

        .pro-reveal { opacity:0; transform:translateY(20px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .pro-reveal.pro-visible { opacity:1; transform:translateY(0); }

        .pro-btn-dark { position:relative; overflow:hidden; background:#1C1A1A; color:white; font-size:12px; font-weight:500; padding:14px 30px; border-radius:2px; text-decoration:none; letter-spacing:0.07em; text-transform:uppercase; transition:color 0.35s; display:inline-block; }
        .pro-btn-dark::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .pro-btn-dark:hover::before { transform:translateY(0); }
        .pro-btn-dark span { position:relative; z-index:1; }

        .pro-btn-cream { position:relative; overflow:hidden; background:#F5F1EB; color:#1C1A1A; font-size:12px; font-weight:500; padding:14px 30px; border-radius:2px; text-decoration:none; letter-spacing:0.07em; text-transform:uppercase; transition:color 0.35s; display:inline-block; }
        .pro-btn-cream::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .pro-btn-cream:hover { color:white; }
        .pro-btn-cream:hover::before { transform:translateY(0); }
        .pro-btn-cream span { position:relative; z-index:1; }

        .pro-btn-outline { position:relative; overflow:hidden; border:1px solid rgba(28,26,26,0.2); color:#1C1A1A; font-size:12px; font-weight:500; padding:14px 30px; border-radius:2px; text-decoration:none; letter-spacing:0.07em; text-transform:uppercase; transition:color 0.3s, border-color 0.3s; display:inline-block; }
        .pro-btn-outline::before { content:''; position:absolute; inset:0; background:rgba(28,26,26,0.05); transform:translateX(-101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .pro-btn-outline:hover { border-color:rgba(28,26,26,0.4); }
        .pro-btn-outline:hover::before { transform:translateX(0); }
        .pro-btn-outline span { position:relative; z-index:1; }

        .pro-pack-btn-dark { position:relative; overflow:hidden; background:#1C1A1A; color:#F5F1EB; font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:15px 30px; border-radius:2px; text-decoration:none; display:inline-block; text-align:center; transition:color 0.3s; }
        .pro-pack-btn-dark::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .pro-pack-btn-dark:hover { color:white; }
        .pro-pack-btn-dark:hover::before { transform:translateY(0); }
        .pro-pack-btn-dark span { position:relative; z-index:1; }
      `}</style>
    </>
  );
}
