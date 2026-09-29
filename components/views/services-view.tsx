"use client";

import { useEffect } from "react";
import { FAQ } from "@/components/faq";
import { StrategyIcon, ContentIcon, WebIcon, HarmonyIcon } from "@/components/offer-icons";
import { offers, fullHarmony, processSteps, servicesFaq } from "@/data/site";

const offerIcons = { strategy: StrategyIcon, content: ContentIcon, web: WebIcon } as const;

function KickerRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-sand" />
      <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">{children}</span>
    </div>
  );
}

export function ServicesView() {
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

      {/* ── HERO ── */}
      <section className="px-8 pt-32 pb-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <KickerRule>Stratégie · Contenu · Web</KickerRule>
          <h1
            className="font-display font-extrabold uppercase text-ink"
            style={{ fontSize: "clamp(38px,6vw,84px)", lineHeight: 0.96, letterSpacing: "-0.02em" }}
          >
            Mes services.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.8] text-ink/65">
            J'accompagne entreprises, marques et indépendants qui veulent un site qui marche et une communication qui tient dans la durée.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            {["48h de délai de réponse", "2–3 semaines pour un site complet", "Tarifs sur devis, sans surprise"].map((s) => (
              <p key={s} className="text-[12px] text-ink/45">{s}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="/contact" className="nea-btn nea-btn--fill">Devis gratuit</a>
            <a href="#offres" className="nea-btn nea-btn--line">Voir les offres ↓</a>
          </div>
        </div>
      </section>

      {/* ── OFFRES : index numéroté, identique à la home ── */}
      <section id="offres" className="px-8 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <KickerRule>Ce que je fais</KickerRule>
          <h2 className="mb-4 font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase text-ink">
            Trois offres, prises séparément ou ensemble
          </h2>

          <div className="mt-8 border-t border-ink/12">
            {offers.map((offer, i) => {
              const Icon = offerIcons[offer.key as keyof typeof offerIcons];
              return (
                <div key={offer.key} className="nea-reveal nea-offer-row group border-b border-ink/12 py-8" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr_1.4fr_auto] md:items-center md:gap-8">
                    <span className="font-display text-[15px] font-extrabold text-sand">{offer.num}</span>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-sand" />
                      <div>
                        <h3 className="font-display text-[20px] font-extrabold text-ink">{offer.title}</h3>
                        <p className="text-[12px] italic text-ink/50">{offer.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[13px] leading-[1.7] text-ink/60">{offer.desc}</p>
                    <a href="/contact" className="whitespace-nowrap font-display text-[11px] font-extrabold uppercase tracking-[0.06em] text-ink transition-colors group-hover:text-sand">
                      Devis →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="nea-reveal mt-16 rounded-[4px] bg-ink px-8 py-14 text-center md:px-16">
            <HarmonyIcon className="mx-auto mb-5 h-8 w-8 text-sand" />
            <p className="mb-4 font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">Pack recommandé</p>
            <h3 className="font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase text-porcelain">{fullHarmony.name}</h3>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-[1.75] text-porcelain/65">{fullHarmony.desc}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {fullHarmony.items.map((item) => (
                <span key={item} className="text-[13px] text-porcelain/75">✓ {item}</span>
              ))}
            </div>
            <a href="/contact" className="nea-btn nea-btn--fill mt-8 inline-block">Demander un devis</a>
          </div>
          <p className="mt-6 text-center text-[12px] text-ink/40">Tarifs communiqués sur devis. Chaque projet est unique.</p>
        </div>
      </section>

      {/* ── PROCESSUS : ligne de temps horizontale, comme la home ── */}
      <section className="bg-linen px-8 py-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <KickerRule>Comment ça marche</KickerRule>
          <h2 className="mb-16 font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase text-ink">De la prise de contact à la livraison</h2>
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-ink/15 md:block" />
            {processSteps.map((step, i) => (
              <div key={step.num} className="nea-reveal relative" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="relative z-10 mb-5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-sand">
                  <span className="h-2 w-2 rounded-full bg-porcelain" />
                </div>
                <span className="font-display text-[12px] font-extrabold text-sand">{step.num}</span>
                <h3 className="mt-2 font-display text-[16px] font-extrabold text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-sand px-8 py-28 text-center md:px-16">
        <h2 className="nea-reveal font-display font-extrabold uppercase text-porcelain" style={{ fontSize: "clamp(30px,4.8vw,58px)", lineHeight: 1.02 }}>
          Discutons de votre projet.
        </h2>
        <p className="nea-reveal mt-4 text-[14px] text-porcelain/80">Devis gratuit · Réponse sous 48h · 50% à la commande, 50% à la livraison</p>
        <a href="/contact" className="nea-reveal nea-btn nea-btn--cream mt-9 inline-block">Contactez-moi</a>
      </section>

      <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

    </main>
  );
}
