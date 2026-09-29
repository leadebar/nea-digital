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

function ScallopEdge({ color, flip = false }: { color: string; flip?: boolean }) {
  return <div className={`${flip ? "scallop-edge-up" : "scallop-edge"} ${color}`} aria-hidden="true" />;
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`mb-4 text-[12px] font-medium uppercase tracking-[0.22em] ${onDark ? "text-porcelain/80" : "text-sand"}`}>
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
        <section className="relative isolate bg-sand px-8 pt-32 pb-20 text-center md:px-16">
          <Eyebrow onDark>Néa Digital</Eyebrow>
          <h1
            className="font-editorial font-normal text-porcelain relative mx-auto max-w-4xl"
            style={{ fontSize: "clamp(38px,6vw,72px)", lineHeight: 1.08 }}
          >
            Stratégie, contenu, <em className="font-script italic text-linen">site web</em>.
          </h1>
          <p className="mt-8 max-w-lg mx-auto text-[15px] leading-[1.85] text-porcelain/85">
            J'aide les entreprises, les marques et les indépendants à améliorer leur présence en ligne : un site qui fonctionne, du contenu qui sort régulièrement, une stratégie claire pour votre activité.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="nea-outline-btn nea-outline-btn--cream">Demander un devis gratuit</a>
            <a href="#services" className="nea-outline-btn">Voir les offres</a>
          </div>
        </section>

        {/* ── PHOTO PLEIN CADRE ── */}
        <section className="relative isolate">
          <ScallopEdge color="text-sand" />
          <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
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
              sizes="100vw"
              className="hidden object-cover motion-reduce:block"
            />
            <div className="absolute inset-0 bg-ink/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="#services" className="nea-outline-btn nea-outline-btn--cream">Voir comment je travaille</a>
            </div>
          </div>
        </section>

        {/* ── OFFRES ── */}
        <section id="services" className="bg-porcelain px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal text-center mb-16">
              <Eyebrow>Ce que je fais</Eyebrow>
              <h2 className="font-editorial text-[clamp(28px,3.4vw,40px)] font-normal text-ink">
                Trois façons de travailler <em className="font-script italic text-sand">ensemble</em>.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {offers.map((offer, i) => {
                const Icon = offerIcons[offer.key as keyof typeof offerIcons];
                return (
                  <div key={offer.key} className="nea-reveal text-center md:text-left" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-sand/40 md:mx-0">
                      <Icon className="w-6 h-6 text-sand" />
                    </div>
                    <span className="font-editorial text-[13px] text-sand">{offer.num}</span>
                    <h3 className="font-editorial text-[22px] font-normal text-ink mt-1">{offer.title}</h3>
                    <p className="mt-2 text-[13px] italic text-taupe">{offer.tagline}</p>
                    <p className="mt-4 text-[13px] leading-[1.75] text-ink/65">{offer.desc}</p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {offer.items.map((item) => (
                        <li key={item} className="text-[13px] leading-[1.5] text-ink/70">— {item}</li>
                      ))}
                    </ul>
                    <a href="/contact" className="mt-5 inline-block border-b border-sand pb-0.5 text-[12px] font-medium uppercase tracking-[0.06em] text-sand hover:text-ink transition-colors">
                      Demander un devis
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Full Harmony */}
            <div className="nea-reveal mt-20 rounded-[4px] border border-sand/25 bg-linen p-10 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center text-center md:text-left">
              <div>
                <HarmonyIcon className="h-8 w-8 text-sand mx-auto md:mx-0" />
                <Eyebrow>Pack recommandé</Eyebrow>
                <h3 className="font-editorial text-[26px] font-normal text-ink">{fullHarmony.name}</h3>
                <p className="mt-3 max-w-md mx-auto md:mx-0 text-[14px] leading-[1.75] text-ink/65">{fullHarmony.desc}</p>
                <ul className="mt-5 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                  {fullHarmony.items.map((item) => (
                    <li key={item} className="text-[13px] text-ink/70">— {item}</li>
                  ))}
                </ul>
              </div>
              <a href="/contact" className="nea-outline-btn whitespace-nowrap">Demander un devis</a>
            </div>
            <p className="mt-6 text-center text-[12px] text-ink/40">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
          </div>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl text-center">
            <div className="nea-reveal mb-10">
              <Eyebrow>Quelle offre pour vous</Eyebrow>
              <h2 className="font-editorial text-[clamp(24px,2.8vw,32px)] font-normal text-ink">Trois questions pour y voir clair.</h2>
            </div>
            <OfferQuiz />
          </div>
        </section>

        {/* ── MÉTHODE ── */}
        <section className="bg-porcelain px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl text-center">
            <div className="nea-reveal mb-16">
              <Eyebrow>Ma méthode</Eyebrow>
              <h2 className="font-editorial text-[clamp(28px,3.4vw,40px)] font-normal text-ink">Comment ça se passe.</h2>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 text-left">
              {processSteps.map((step, i) => (
                <div key={step.num} className="nea-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="font-editorial text-[30px] text-sand">{step.num}</span>
                  <h3 className="mt-3 font-editorial text-[16px] font-normal text-ink">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-ink/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal text-center mb-14">
              <Eyebrow>Blog</Eyebrow>
              <h2 className="font-editorial text-[clamp(28px,3.4vw,40px)] font-normal text-ink">Quelques repères, sans jargon.</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative isolate bg-ink px-8 py-32 text-center md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30" aria-hidden="true">
            <Image
              src="/images/contact-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <div className="relative">
            <Eyebrow onDark>Prochaine étape</Eyebrow>
            <h2 className="nea-reveal font-editorial text-porcelain font-normal mb-4" style={{ fontSize: "clamp(32px,4.6vw,56px)", lineHeight: 1.1 }}>
              On en <em className="font-script italic text-sand">parle</em> ?
            </h2>
            <p className="nea-reveal text-[14px] text-porcelain/60 mb-10">Devis gratuit · Réponse sous 48h · Sans engagement</p>
            <a href="/contact" className="nea-reveal nea-outline-btn nea-outline-btn--cream inline-block">Contactez-moi</a>
          </div>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .nea-reveal { opacity:0; transform:translateY(18px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-outline-btn {
          display:inline-block; font-family:'Inter',sans-serif; font-size:12px; font-weight:500;
          text-transform:uppercase; letter-spacing:0.14em; padding:15px 30px;
          border:1px solid rgba(251,243,231,0.7); color:#FBF3E7; background:transparent;
          text-decoration:none; transition: background 0.3s, color 0.3s;
        }
        .nea-outline-btn:hover { background:#FBF3E7; color:#B5502E; }
        .nea-outline-btn--cream { border-color:#FBF3E7; color:#FBF3E7; }
      `}</style>
    </>
  );
}
