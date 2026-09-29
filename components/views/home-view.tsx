"use client";

import { useEffect } from "react";
import { BlogCard } from "@/components/blog-card";
import { Newsletter } from "@/components/newsletter";
import { FAQ } from "@/components/faq";
import { StrategyIcon, ContentIcon, WebIcon, HarmonyIcon } from "@/components/offer-icons";
import { OfferQuiz } from "@/components/offer-quiz";
import { posts } from "@/data/posts";
import { offers, fullHarmony, processSteps, servicesFaq } from "@/data/site";

// ─── DATA ────────────────────────────────────────────────────────────────────

const offerIcons = { strategy: StrategyIcon, content: ContentIcon, web: WebIcon } as const;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function KickerRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px w-10 bg-sand" />
      <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">{children}</span>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export function HomeView() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("nea-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".nea-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <main className="relative bg-porcelain">

        {/* ── HERO : un seul bloc, pas de photo/vidéo séparée ── */}
        <section className="relative isolate px-8 pt-32 pb-24 md:px-16 md:pt-44 md:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <KickerRule>Agence marketing digital</KickerRule>
            <h1
              className="font-display font-extrabold text-ink uppercase"
              style={{ fontSize: "clamp(42px,8vw,120px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              Stratégie. Contenu.
              <br />
              <span className="text-sand">Site web.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.8] text-ink/65">
              J'aide les entreprises, les marques et les indépendants à améliorer leur présence en ligne : un site qui fonctionne, du contenu qui sort régulièrement, une stratégie claire pour votre activité.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="nea-btn nea-btn--fill">Demander un devis</a>
              <a href="#offres" className="nea-btn nea-btn--line">Voir les offres ↓</a>
            </div>
          </div>
        </section>

        {/* ── OFFRES : index numéroté, pas de cartes ── */}
        <section id="offres" className="px-8 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <KickerRule>Ce que je fais</KickerRule>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase text-ink mb-4">
              Comment travailler ensemble
            </h2>

            <div className="mt-8 border-t border-ink/12">
              {offers.map((offer, i) => {
                const Icon = offerIcons[offer.key as keyof typeof offerIcons];
                return (
                  <div key={offer.key} className="nea-reveal nea-offer-row group border-b border-ink/12 py-8" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr_1.4fr_auto] md:items-center md:gap-8">
                      <span className="font-display text-[15px] font-extrabold text-sand">{offer.num}</span>
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-sand shrink-0" />
                        <div>
                          <h3 className="font-display text-[20px] font-extrabold text-ink">{offer.title}</h3>
                          <p className="text-[12px] italic text-ink/50">{offer.tagline}</p>
                        </div>
                      </div>
                      <p className="text-[13px] leading-[1.7] text-ink/60">{offer.desc}</p>
                      <a href="/contact" className="font-display text-[11px] font-extrabold uppercase tracking-[0.06em] text-ink whitespace-nowrap group-hover:text-sand transition-colors">
                        Devis →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full Harmony — bloc statement centré */}
            <div className="nea-reveal mt-16 rounded-[4px] bg-ink px-8 py-14 text-center md:px-16">
              <HarmonyIcon className="mx-auto h-8 w-8 text-sand mb-5" />
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand mb-4">Pack recommandé</p>
              <h3 className="font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase text-porcelain">{fullHarmony.name}</h3>
              <p className="mx-auto mt-4 max-w-lg text-[14px] leading-[1.75] text-porcelain/65">{fullHarmony.desc}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {fullHarmony.items.map((item) => (
                  <span key={item} className="text-[13px] text-porcelain/75">✓ {item}</span>
                ))}
              </div>
              <a href="/contact" className="nea-btn nea-btn--fill mt-8 inline-block">Demander un devis</a>
            </div>
            <p className="mt-6 text-center text-[12px] text-ink/40">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
          </div>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <KickerRule>Quelle offre pour vous</KickerRule>
            <h2 className="font-display text-[clamp(24px,2.8vw,32px)] font-extrabold uppercase text-ink mb-10">Trois questions pour trancher</h2>
            <OfferQuiz />
          </div>
        </section>

        {/* ── MÉTHODE : ligne de temps horizontale ── */}
        <section className="px-8 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <KickerRule>Ma méthode</KickerRule>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase text-ink mb-16">Comment ça se passe</h2>
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

        {/* ── BLOG : asymétrique, un post en avant ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <KickerRule>Blog</KickerRule>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase text-ink mb-14">Quelques repères</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                {posts[0] ? <BlogCard post={posts[0]} /> : null}
              </div>
              <div className="flex flex-col gap-8">
                {posts.slice(1, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA : bloc plein, une ligne ── */}
        <section id="contact" className="bg-sand px-8 py-28 text-center md:px-16">
          <h2 className="nea-reveal font-display font-extrabold uppercase text-porcelain" style={{ fontSize: "clamp(32px,5.2vw,64px)", lineHeight: 1.02 }}>
            Parlons de votre projet.
          </h2>
          <p className="nea-reveal mt-4 text-[14px] text-porcelain/80">Devis gratuit · Réponse sous 48h · Sans engagement</p>
          <a href="/contact" className="nea-reveal nea-btn nea-btn--cream mt-9 inline-block">Contactez-moi</a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>
    </>
  );
}
