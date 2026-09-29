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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-linen px-3 py-1 font-editorial text-[11px] text-olive">
      <span className="h-1.5 w-1.5 rounded-full bg-sand" />
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(26px,3.2vw,38px)] font-bold leading-tight text-ink mb-14">
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
      <main className="relative bg-porcelain">

        {/* ── HERO ── */}
        <section className="relative isolate flex flex-col items-center justify-center text-center px-8 pt-36 pb-24 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25" aria-hidden="true">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-bg-poster.jpg"
              className="w-full h-full object-cover motion-reduce:hidden"
              style={{ filter: "grayscale(1) contrast(1.2)" }}
              onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-porcelain/80" />
          </div>

          <div className="nea-reveal relative mb-7" style={{ animation: "nea-fade-up 0.7s 0.1s both" }}>
            <Tag>Marketing digital, sans détour</Tag>
          </div>

          <h1
            className="font-display font-extrabold text-ink relative"
            style={{ fontSize: "clamp(38px,6.5vw,84px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
          >
            <span className="block" style={{ animation: "nea-reveal 0.8s 0.25s both" }}>Un site qui vend.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sand to-olive" style={{ animation: "nea-reveal 0.8s 0.4s both" }}>
              Du contenu qui sort.
            </span>
          </h1>

          <p className="font-mono text-[13px] text-taupe leading-[1.8] max-w-[480px] mx-auto mt-7 mb-10 relative" style={{ animation: "nea-fade-up 0.7s 0.6s both" }}>
            // stratégie + contenu + site web, pilotés par une seule personne. pas de jargon, pas de blabla, un plan clair et des livrables dans les temps.
          </p>

          <div className="flex gap-4 justify-center flex-wrap relative" style={{ animation: "nea-fade-up 0.7s 0.75s both" }}>
            <a href="/contact" className="nea-btn-solid">Demander un devis →</a>
            <a href="#services" className="nea-btn-outline">Voir les offres</a>
          </div>

          <div className="nea-reveal relative mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[12px] font-mono text-taupe" style={{ animation: "nea-fade-up 0.7s 0.9s both" }}>
            <span>5 ans d'expérience</span>
            <span className="h-1 w-1 rounded-full bg-taupe/40" />
            <span>Réponse sous 48h</span>
            <span className="h-1 w-1 rounded-full bg-taupe/40" />
            <span>Tarifs sur devis</span>
          </div>
        </section>

        {/* ── OFFRES ── */}
        <section id="services" className="px-8 py-24 md:px-16">
          <div className="nea-reveal">
            <Tag>Ce que je fais</Tag>
            <div className="mt-5">
              <SectionTitle>Trois briques. Un seul plan.</SectionTitle>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {offers.map((offer, i) => {
              const Icon = offerIcons[offer.key as keyof typeof offerIcons];
              return (
                <div
                  key={offer.key}
                  className="nea-reveal rounded-xl border border-ink/12 bg-linen p-8 relative overflow-hidden transition-all duration-300 hover:border-sand/50 hover:shadow-glow"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 bg-porcelain">
                      <Icon className="w-5 h-5 text-olive" />
                    </div>
                    <span className="font-mono text-[12px] text-taupe">{offer.num}/03</span>
                  </div>
                  <h3 className="font-display text-[19px] font-bold text-ink mb-1">{offer.title}</h3>
                  <p className="text-[13px] text-sand font-medium mb-3">{offer.tagline}</p>
                  <p className="text-[13px] text-taupe leading-[1.7] mb-6">{offer.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-ink/80 leading-[1.4]">
                        <span className="mt-[7px] h-1 w-1 rounded-full bg-olive shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="font-mono text-[11px] font-medium uppercase tracking-[0.05em] text-olive hover:text-sand transition-colors">
                    Demander un devis →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Full Harmony */}
          <div className="nea-reveal mt-4 rounded-xl border border-sand/30 bg-linen p-11 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center" style={{ boxShadow: "0 0 60px rgba(198,255,61,0.05)" }}>
            <div>
              <HarmonyIcon className="w-8 h-8 text-sand mb-4" />
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand mb-3">Pack recommandé</p>
              <h3 className="font-display text-[24px] font-bold text-ink mb-2">{fullHarmony.name}</h3>
              <p className="text-[14px] text-taupe leading-[1.7] mb-4 max-w-md">{fullHarmony.desc}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {fullHarmony.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-ink/80">
                    <span className="text-sand">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="/contact" className="nea-btn-solid whitespace-nowrap">Demander un devis</a>
          </div>
          <p className="text-center text-[12px] text-taupe mt-8 font-mono">// tarifs communiqués sur devis, adaptés à chaque projet</p>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="nea-reveal">
            <Tag>Quelle offre pour vous</Tag>
            <h2 className="font-display text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-ink mt-5 mb-10">Trois questions pour trancher.</h2>
          </div>
          <OfferQuiz />
        </section>

        {/* ── MÉTHODE ── */}
        <section className="px-8 py-24 md:px-16">
          <div className="nea-reveal">
            <Tag>Ma méthode</Tag>
            <div className="mt-5">
              <SectionTitle>Comment ça se passe.</SectionTitle>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="nea-reveal rounded-xl border border-ink/12 bg-linen p-7" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-mono text-[12px] text-sand mb-4">{step.num}</div>
                <h3 className="font-display text-[15px] font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-[13px] text-taupe leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="nea-reveal">
            <Tag>Blog</Tag>
            <div className="mt-5">
              <SectionTitle>Stratégie, contenu, web : quelques repères.</SectionTitle>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative isolate px-8 py-32 text-center md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image
              src="/images/contact-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20 grayscale"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>

          <p className="nea-reveal relative font-mono text-[12px] text-sand mb-4">// prochaine étape</p>
          <h2 className="nea-reveal font-display text-ink relative tracking-[-0.01em] leading-[1.05] mb-6 font-extrabold" style={{ fontSize: "clamp(34px,5.5vw,60px)" }}>
            On regarde ça ensemble ?
          </h2>
          <p className="nea-reveal text-[14px] text-taupe relative mb-10">Devis gratuit · Réponse sous 48h · Sans engagement</p>
          <a href="/contact" className="nea-reveal nea-btn-solid inline-block relative">Contactez-moi →</a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes nea-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-reveal { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }

        .nea-reveal { opacity:0; transform:translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-btn-solid {
          display:inline-block; font-family:'Sora',sans-serif; font-size:13px; font-weight:700;
          padding:14px 28px; border-radius:6px; text-decoration:none;
          background:#C6FF3D; color:#0B0F1A; transition: box-shadow 0.25s, transform 0.2s;
        }
        .nea-btn-solid:hover { box-shadow:0 0 0 1px rgba(198,255,61,0.5), 0 0 40px rgba(198,255,61,0.25); transform:translateY(-2px); }

        .nea-btn-outline {
          display:inline-block; font-family:'Sora',sans-serif; font-size:13px; font-weight:700;
          padding:14px 28px; border-radius:6px; text-decoration:none;
          background:transparent; color:#E8ECF5; border:1px solid rgba(232,236,245,0.2);
          transition: border-color 0.25s, color 0.25s;
        }
        .nea-btn-outline:hover { border-color:#4DD8FF; color:#4DD8FF; }
      `}</style>
    </>
  );
}
