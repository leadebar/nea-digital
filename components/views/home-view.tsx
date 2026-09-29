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

// ─── DATA ────────────────────────────────────────────────────────────────────

const offerIcons = { strategy: StrategyIcon, content: ContentIcon, web: WebIcon } as const;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ScallopEdge({ color = "text-porcelain", flip = false }: { color?: string; flip?: boolean }) {
  return <div className={`${flip ? "scallop-edge-up" : "scallop-edge"} ${color}`} aria-hidden="true" />;
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`mb-4 font-display text-[13px] font-extrabold uppercase tracking-[0.04em] ${onDark ? "text-porcelain" : "text-sand"}`}>
      {children}
    </p>
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
      <main className="relative">

        {/* ── HERO ── */}
        <section className="relative isolate bg-sand px-8 pt-16 pb-0 md:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 pb-16 pt-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <Eyebrow onDark>Agence marketing digital</Eyebrow>
              <h1
                className="font-display font-extrabold text-porcelain uppercase"
                style={{ fontSize: "clamp(38px,5.6vw,66px)", lineHeight: 1.02, letterSpacing: "-0.01em" }}
              >
                Stratégie, contenu,
                <br />
                site web.
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-porcelain/85 mx-auto md:mx-0">
                J'aide les entreprises, les marques et les indépendants à améliorer leur présence en ligne : un site qui fonctionne, du contenu qui sort régulièrement, une stratégie claire pour votre activité.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
                <a href="/contact" className="nea-pill nea-pill--cream">Demander un devis gratuit</a>
                <a href="#services" className="nea-pill nea-pill--outline">Voir les offres</a>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border-4 border-porcelain shadow-soft">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero-bg-poster.jpg"
                className="h-full w-full object-cover motion-reduce:hidden"
                onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
              <Image
                src="/images/hero-bg-poster.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 80vw"
                className="hidden object-cover motion-reduce:block"
              />
            </div>
          </div>
          <ScallopEdge color="text-porcelain" />
        </section>

        {/* ── OFFRES ── */}
        <section id="services" className="bg-porcelain px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal text-center">
              <Eyebrow>Ce que je fais</Eyebrow>
              <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-extrabold uppercase text-ink mb-16">
                Comment travailler ensemble
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {offers.map((offer, i) => {
                const Icon = offerIcons[offer.key as keyof typeof offerIcons];
                return (
                  <div
                    key={offer.key}
                    className="nea-reveal rounded-[24px] border-2 border-ink/10 bg-linen p-8 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sand">
                        <Icon className="w-6 h-6 text-porcelain" />
                      </div>
                      <span className="font-display text-[13px] font-extrabold uppercase text-sand">{offer.num}</span>
                    </div>
                    <h3 className="font-display text-[20px] font-extrabold text-ink mb-1">{offer.title}</h3>
                    <p className="text-[13px] text-sand font-semibold mb-3">{offer.tagline}</p>
                    <p className="text-[13px] text-ink/65 leading-[1.7] mb-6">{offer.desc}</p>
                    <ul className="flex flex-col gap-2 mb-8">
                      {offer.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-ink leading-[1.4]">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sand shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="nea-pill nea-pill--outline-small">Demander un devis</a>
                  </div>
                );
              })}
            </div>

            {/* Full Harmony */}
            <div className="nea-reveal mt-8 rounded-[28px] bg-ink p-11 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <HarmonyIcon className="w-9 h-9 text-sand mb-4" />
                <p className="font-display text-[12px] font-extrabold uppercase tracking-[0.04em] text-sand mb-3">Pack recommandé</p>
                <h3 className="font-display text-[26px] font-extrabold text-porcelain mb-2">{fullHarmony.name}</h3>
                <p className="text-[14px] text-porcelain/65 leading-[1.7] mb-4 max-w-md">{fullHarmony.desc}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {fullHarmony.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-porcelain/80">
                      <span className="text-sand">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contact" className="nea-pill nea-pill--cream whitespace-nowrap">Demander un devis</a>
            </div>
            <p className="text-center text-[12px] text-ink/40 mt-8">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
          </div>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-porcelain px-8 pb-24 md:px-16">
          <div className="mx-auto max-w-6xl text-center">
            <div className="nea-reveal">
              <Eyebrow>Quelle offre pour vous</Eyebrow>
              <h2 className="font-display text-[clamp(24px,3vw,32px)] font-extrabold uppercase text-ink mb-10">Trouvez votre offre en 3 questions</h2>
            </div>
            <OfferQuiz />
          </div>
        </section>

        {/* ── MÉTHODE ── */}
        <section className="relative isolate bg-ink px-8 pb-24 pt-16 md:px-16">
          <ScallopEdge color="text-porcelain" flip />
          <div className="mx-auto max-w-6xl text-center mt-8">
            <div className="nea-reveal">
              <Eyebrow onDark>Ma méthode</Eyebrow>
              <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-extrabold uppercase text-porcelain mb-16">Comment ça se passe</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 text-left">
              {processSteps.map((step, i) => (
                <div key={step.num} className="nea-reveal rounded-[20px] bg-porcelain/[0.06] p-7" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="font-display font-extrabold text-sand text-[30px] mb-3">{step.num}</div>
                  <h3 className="font-display text-[15px] font-extrabold text-porcelain mb-2">{step.title}</h3>
                  <p className="text-[13px] text-porcelain/60 leading-[1.7]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="bg-porcelain px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal text-center">
              <Eyebrow>Blog</Eyebrow>
              <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-extrabold uppercase text-ink mb-16">Quelques repères</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative isolate bg-sand px-8 py-28 text-center md:px-16">
          <h2 className="nea-reveal font-display text-porcelain uppercase font-extrabold mb-3" style={{ fontSize: "clamp(34px,5.5vw,64px)", lineHeight: 1.02 }}>
            Parlons de votre projet
          </h2>
          <p className="nea-reveal text-[14px] text-porcelain/80 mb-10">Devis gratuit · Réponse sous 48h · Sans engagement</p>
          <a href="/contact" className="nea-reveal nea-pill nea-pill--cream inline-block">Contactez-moi</a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .nea-reveal { opacity:0; transform:translateY(20px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-pill {
          display:inline-block; font-family:'Bricolage Grotesque',sans-serif; font-size:13px; font-weight:800;
          text-transform:uppercase; letter-spacing:0.02em; padding:14px 30px; border-radius:9999px;
          text-decoration:none; border:2.5px solid transparent; transition: all 0.2s;
        }
        .nea-pill--cream { background:#FFF8EC; color:#E3363E; border-color:#FFF8EC; }
        .nea-pill--cream:hover { background:transparent; color:#FFF8EC; border-color:#FFF8EC; }
        .nea-pill--outline { background:transparent; color:#FFF8EC; border-color:#FFF8EC; }
        .nea-pill--outline:hover { background:#FFF8EC; color:#E3363E; }
        .nea-pill--outline-small { display:inline-block; font-family:'Bricolage Grotesque',sans-serif; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; padding:10px 20px; border-radius:9999px; text-decoration:none; border:2px solid #E3363E; color:#E3363E; transition: all 0.2s; }
        .nea-pill--outline-small:hover { background:#E3363E; color:#FFF8EC; }
      `}</style>
    </>
  );
}
