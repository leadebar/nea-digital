"use client";

import { useEffect } from "react";
import Image from "next/image";
import { BlogCard } from "@/components/blog-card";
import { Newsletter } from "@/components/newsletter";
import { FAQ } from "@/components/faq";
import { StrategyIcon, ContentIcon, WebIcon, HarmonyIcon } from "@/components/offer-icons";
import { OfferQuiz } from "@/components/offer-quiz";
import { posts } from "@/data/posts";
import { offers, fullHarmony, processSteps, servicesFaq } from "@/data/site";
import { formatDate } from "@/lib/utils";

// ─── DATA ────────────────────────────────────────────────────────────────────

const offerIcons = { strategy: StrategyIcon, content: ContentIcon, web: WebIcon } as const;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-sand">{children}</p>;
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

        {/* ── OUVERTURE : lettrine + paragraphe éditorial, pas de gros titre centré ── */}
        <section className="px-8 pt-32 pb-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Néa Digital</Eyebrow>
            <p className="font-editorial text-[clamp(24px,3.4vw,36px)] font-normal leading-[1.35] text-ink">
              <span className="nea-dropcap">O</span>n ne vend pas de la stratégie, du contenu ou un site web séparément. On construit une présence en ligne qui tient debout, dans l'ordre : d'abord comprendre où vous en êtes, puis écrire ce qui vous représente, puis donner à tout ça une adresse qui fonctionne.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <a href="/contact" className="nea-link">Demander un devis gratuit</a>
              <a href="#offres" className="nea-link nea-link--muted">Lire la suite ↓</a>
            </div>
          </div>
        </section>

        {/* ── OFFRES : spread éditorial alterné, pas de grille ── */}
        <section id="offres" className="px-8 py-20 md:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 border-b border-sand/25 pb-6">
              <Eyebrow>Ce que je fais</Eyebrow>
              <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal text-ink">Trois façons de travailler ensemble.</h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-20">
              {offers.map((offer, i) => {
                const Icon = offerIcons[offer.key as keyof typeof offerIcons];
                const reversed = i % 2 === 1;
                return (
                  <div
                    key={offer.key}
                    className={`nea-reveal grid grid-cols-1 items-start gap-6 md:grid-cols-[100px_1fr] ${reversed ? "md:[&>*:first-child]:order-2 md:[&>*:first-child]:text-right" : ""}`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className={reversed ? "md:flex md:flex-col md:items-end" : ""}>
                      <span className="font-editorial text-[15px] text-sand">{offer.num}</span>
                      <div className={`mt-2 flex h-12 w-12 items-center justify-center rounded-full border border-sand/40 ${reversed ? "md:ml-auto" : ""}`}>
                        <Icon className="h-5 w-5 text-sand" />
                      </div>
                    </div>
                    <div className={reversed ? "md:text-right" : ""}>
                      <h3 className="font-editorial text-[24px] font-normal text-ink">{offer.title}</h3>
                      <p className="mt-1 text-[13px] italic text-taupe">{offer.tagline}</p>
                      <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-ink/65 md:max-w-none">{offer.desc}</p>
                      <ul className={`mt-4 flex flex-wrap gap-x-6 gap-y-1 ${reversed ? "md:justify-end" : ""}`}>
                        {offer.items.map((item) => (
                          <li key={item} className="text-[13px] text-ink/55">{item}</li>
                        ))}
                      </ul>
                      <a href="/contact" className="nea-link mt-5 inline-block">Demander un devis</a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full Harmony */}
            <div className="nea-reveal mt-20 border border-sand/25 p-10 text-center md:p-14">
              <HarmonyIcon className="mx-auto h-8 w-8 text-sand mb-4" />
              <Eyebrow>Pack recommandé</Eyebrow>
              <h3 className="font-editorial text-[26px] font-normal text-ink">{fullHarmony.name}</h3>
              <p className="mx-auto mt-3 max-w-md text-[14px] leading-[1.75] text-ink/65">{fullHarmony.desc}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {fullHarmony.items.map((item) => (
                  <span key={item} className="text-[13px] text-ink/60">— {item}</span>
                ))}
              </div>
              <a href="/contact" className="nea-link mt-6 inline-block">Demander un devis →</a>
            </div>
            <p className="mt-6 text-center text-[12px] text-ink/40">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
          </div>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Quelle offre pour vous</Eyebrow>
            <h2 className="font-editorial text-[clamp(24px,2.8vw,32px)] font-normal text-ink mb-10">Trois questions pour y voir clair.</h2>
            <OfferQuiz />
          </div>
        </section>

        {/* ── MÉTHODE : liste verticale annotée ── */}
        <section className="px-8 py-24 md:px-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-14 text-center">
              <Eyebrow>Ma méthode</Eyebrow>
              <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal text-ink">Comment ça se passe.</h2>
            </div>
            <div className="relative border-l border-sand/30 pl-8">
              {processSteps.map((step, i) => (
                <div key={step.num} className="nea-reveal relative pb-10 last:pb-0" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-sand bg-porcelain" />
                  <span className="font-editorial text-[13px] text-sand">{step.num}</span>
                  <h3 className="mt-1 font-editorial text-[18px] font-normal text-ink">{step.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.75] text-ink/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG : sommaire en liste, pas de grille de cartes ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-14 text-center">
              <Eyebrow>Blog</Eyebrow>
              <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal text-ink">Quelques repères, sans jargon.</h2>
            </div>
            <div className="flex flex-col divide-y divide-sand/20 border-t border-b border-sand/20">
              {posts.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="nea-reveal group flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <h3 className="font-editorial text-[18px] font-normal text-ink transition group-hover:text-sand">{post.title}</h3>
                  <span className="shrink-0 text-[12px] uppercase tracking-[0.1em] text-taupe">{formatDate(post.date)}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA : signature discrète ── */}
        <section id="contact" className="px-8 py-32 text-center md:px-16">
          <p className="nea-reveal mb-3 text-[12px] uppercase tracking-[0.22em] text-sand">Prochaine étape</p>
          <h2 className="nea-reveal font-editorial font-normal text-ink" style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.2 }}>
            On en parle ?
          </h2>
          <p className="nea-reveal mt-4 text-[14px] text-ink/55">Devis gratuit · Réponse sous 48h · Sans engagement</p>
          <a href="/contact" className="nea-reveal nea-link mt-7 inline-block text-[16px]">Contactez-moi →</a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .nea-reveal { opacity:0; transform:translateY(14px); transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-dropcap {
          float:left; font-family:'Fraunces',serif; font-size:64px; line-height:0.8;
          padding-top:8px; padding-right:8px; color:#B5502E;
        }

        .nea-link {
          font-family:'Inter',sans-serif; font-size:14px; font-weight:500; color:#3A2A20;
          border-bottom:1px solid #B5502E; padding-bottom:2px; text-decoration:none; transition: color 0.25s;
        }
        .nea-link:hover { color:#B5502E; }
        .nea-link--muted { color:#8C6B52; border-bottom-color:#8C6B52; }
        .nea-link--muted:hover { color:#B5502E; border-bottom-color:#B5502E; }
      `}</style>
    </>
  );
}
