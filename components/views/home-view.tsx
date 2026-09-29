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

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-3.5 ${light ? "text-sand" : "text-olive"}`}>
      <span className="inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-sand px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.05em] text-ink">
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`font-display text-[clamp(28px,3.4vw,42px)] font-extrabold leading-[1.15] mb-14 ${light ? "text-porcelain" : "text-ink"}`}>
      {children}
    </h2>
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
        <section className="relative isolate bg-porcelain flex flex-col items-center justify-center text-center px-12 pt-40 pb-24 overflow-hidden">
          {/* Fond vidéo flouté (loop, muet). Respecte "réduire les animations" en repassant sur le poster. */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-bg-poster.jpg"
              className="w-full h-full object-cover scale-110 motion-reduce:hidden"
              style={{ filter: "blur(4px) saturate(1.15) brightness(1.05)" }}
              onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <Image
              src="/images/hero-bg-poster.jpg"
              alt=""
              fill
              sizes="100vw"
              className="hidden motion-reduce:block object-cover scale-110"
              style={{ filter: "blur(4px) saturate(1.15) brightness(1.05)" }}
            />
            <div className="absolute inset-0 bg-porcelain/70" />
          </div>

          <p
            className="inline-block relative mb-7 rotate-[-2deg] rounded-full border-2 border-ink bg-sand px-4 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.05em] text-ink"
            style={{ animation: "nea-slide-top 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Agence marketing digital
          </p>

          <h1
            className="font-editorial font-extrabold text-ink relative"
            style={{ fontSize: "clamp(44px,7.5vw,96px)", lineHeight: 1, letterSpacing: "-0.01em" }}
          >
            <span className="block" style={{ animation: "nea-reveal 0.9s 0.4s cubic-bezier(0.22,1,0.36,1) both" }}>Stratégie, contenu,</span>
            <span className="block text-olive" style={{ animation: "nea-reveal 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both" }}>site web.</span>
          </h1>

          <p className="text-[15px] text-ink/70 leading-[1.85] max-w-[540px] mx-auto mt-6 mb-12 relative" style={{ animation: "nea-fade-up 0.8s 1s both" }}>
            J'aide les entreprises, les marques et les indépendants à améliorer leur présence en ligne : un site qui fonctionne, du contenu qui sort régulièrement, une stratégie claire pour votre activité.
          </p>

          <div className="flex gap-4 justify-center flex-wrap relative" style={{ animation: "nea-fade-up 0.8s 1.15s both" }}>
            <a href="/contact" className="nea-btn-fill"><span>Demander un devis gratuit</span></a>
            <a href="#services" className="nea-btn-ghost"><span>Voir les offres</span></a>
          </div>
        </section>

        {/* ── OFFRES ── */}
        <section id="services" className="bg-linen px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Ce que je fais</SectionTag>
            <SectionTitle>Comment travailler ensemble.</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, i) => {
              const Icon = offerIcons[offer.key as keyof typeof offerIcons];
              return (
                <div
                  key={offer.key}
                  className="nea-reveal rounded-3xl border-2 border-ink bg-white p-9 relative overflow-hidden shadow-pop transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1B1035]"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-ink bg-sand shrink-0">
                      <Icon className="w-6 h-6 text-ink" />
                    </div>
                    <span className="font-editorial font-extrabold text-linen leading-none tracking-[0.02em] text-[40px]">{offer.num}</span>
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-ink mb-1">{offer.title}</h3>
                  <p className="text-[13px] text-olive font-bold mb-3">{offer.tagline}</p>
                  <p className="text-[13px] text-ink/65 leading-[1.7] mb-6">{offer.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-ink leading-[1.4]">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-olive shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="text-[11px] font-bold tracking-[0.05em] uppercase text-ink border-b-2 border-olive pb-0.5 hover:text-olive transition-colors">
                    Demander un devis →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Full Harmony */}
          <div className="nea-reveal mt-8 rounded-3xl border-2 border-ink bg-ink p-11 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-sand bg-transparent">
                <HarmonyIcon className="w-6 h-6 text-sand" />
              </div>
              <p className="inline-block rotate-[-2deg] rounded-full border-2 border-sand bg-transparent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-sand mb-3">Pack recommandé</p>
              <h3 className="font-editorial text-[26px] font-extrabold text-porcelain mb-2">{fullHarmony.name}</h3>
              <p className="text-[14px] text-porcelain/65 leading-[1.7] mb-4 max-w-md">{fullHarmony.desc}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {fullHarmony.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-porcelain/80">
                    <span className="text-sand">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="/contact" className="nea-btn-fill nea-btn-fill--cream whitespace-nowrap"><span>Demander un devis</span></a>
          </div>
          <p className="text-center text-[12px] text-taupe mt-8 tracking-[0.02em]">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-linen px-12 pb-24">
          <div className="nea-reveal">
            <SectionTag>Quelle offre pour vous</SectionTag>
            <h2 className="font-display text-[clamp(24px,3vw,34px)] font-extrabold leading-[1.2] text-ink mb-10">Trouvez votre offre en 3 questions.</h2>
          </div>
          <OfferQuiz />
        </section>

        {/* ── MÉTHODE ── */}
        <section className="bg-porcelain px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Ma méthode</SectionTag>
            <SectionTitle>Comment ça se passe.</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="nea-reveal rounded-3xl border-2 border-ink bg-white p-8 shadow-pop transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1B1035]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-editorial font-extrabold leading-none mb-5 tracking-[0.02em] text-olive text-[34px]">{step.num}</div>
                <h3 className="font-display text-[16px] font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-[13px] text-ink/65 leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="bg-linen px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Blog</SectionTag>
            <SectionTitle>Stratégie, contenu, web : quelques repères.</SectionTitle>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative isolate bg-ink px-12 py-32 text-center overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image
              src="/images/contact-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-ink/90" />
          </div>

          <h2 className="nea-reveal font-editorial text-porcelain relative tracking-[-0.01em] leading-[0.95] mb-3 font-extrabold uppercase" style={{ fontSize: "clamp(40px,6vw,72px)" }}>Parlons de<br />votre projet.</h2>
          <p className="nea-reveal relative mb-4 font-display font-bold text-sand" style={{ fontSize: "clamp(17px,2vw,22px)" }}>un échange, un devis, sans engagement.</p>
          <p className="nea-reveal text-[13px] text-porcelain/50 tracking-[0.02em] relative mb-10">Devis gratuit · Réponse sous 48h</p>
          <a href="/contact" className="nea-reveal nea-btn-fill nea-btn-fill--cream inline-block relative"><span>Contactez-moi →</span></a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes nea-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-slide-top { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-reveal { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }

        .nea-reveal { opacity:0; transform:translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-btn-fill {
          display:inline-block; position:relative; font-family:'Space Grotesk',sans-serif; font-size:13px; font-weight:700;
          padding:15px 30px; border-radius:9999px; text-decoration:none; letter-spacing:0.01em;
          background:#FF5A5F; color:#FFF4E3; border:2px solid #1B1035;
          box-shadow:6px 6px 0 0 #1B1035; transition: transform 0.2s, box-shadow 0.2s;
        }
        .nea-btn-fill:hover { transform:translate(-2px,-2px); box-shadow:8px 8px 0 0 #1B1035; }
        .nea-btn-fill:active { transform:translate(0,0); box-shadow:3px 3px 0 0 #1B1035; }
        .nea-btn-fill--cream { background:#FFF4E3; color:#1B1035; }

        .nea-btn-ghost {
          display:inline-block; position:relative; font-family:'Space Grotesk',sans-serif; font-size:13px; font-weight:700;
          padding:15px 30px; border-radius:9999px; text-decoration:none; letter-spacing:0.01em;
          background:transparent; color:#1B1035; border:2px solid #1B1035;
          box-shadow:6px 6px 0 0 #1B1035; transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .nea-btn-ghost:hover { transform:translate(-2px,-2px); box-shadow:8px 8px 0 0 #1B1035; background:#EAE1FF; }
        .nea-btn-ghost:active { transform:translate(0,0); box-shadow:3px 3px 0 0 #1B1035; }
      `}</style>
    </>
  );
}
