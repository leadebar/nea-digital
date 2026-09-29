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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-sand">{children}</p>
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
        <section className="relative isolate px-8 pt-28 pb-24 md:px-16 md:pt-36 md:pb-32">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow>Néa Digital — Cannes &amp; à distance</Eyebrow>
              <h1
                className="font-editorial font-normal text-ink"
                style={{ fontSize: "clamp(38px,5.4vw,68px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}
              >
                On ne construit pas un site.
                <br />
                On construit ce qui vient <em className="italic text-sand">après</em>.
              </h1>
              <p className="mt-8 max-w-md text-[16px] leading-[1.8] text-ink/70">
                Stratégie, contenu, site web : les trois marchent ensemble ou pas du tout. Je m'occupe des trois, dans l'ordre, pour que votre présence en ligne serve vraiment votre activité.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href="/contact" className="border-b border-ink pb-1 text-[14px] font-medium text-ink transition hover:border-sand hover:text-sand">
                  Demander un devis gratuit →
                </a>
                <a href="#services" className="text-[14px] text-ink/55 transition hover:text-ink">Voir comment je travaille</a>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
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
                sizes="(min-width: 768px) 40vw, 100vw"
                className="hidden object-cover motion-reduce:block"
              />
              <div className="absolute inset-0 border border-ink/10" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-8 md:px-16">
          <div className="h-px bg-ink/10" />
        </div>

        {/* ── OFFRES ── */}
        <section id="services" className="px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal mb-16 max-w-xl">
              <Eyebrow>Ce que je fais</Eyebrow>
              <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal leading-tight text-ink">
                Trois façons de travailler ensemble, une seule direction.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
              {offers.map((offer, i) => {
                const Icon = offerIcons[offer.key as keyof typeof offerIcons];
                return (
                  <div
                    key={offer.key}
                    className={`nea-reveal border-ink/10 px-0 py-10 md:px-10 md:py-2 ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <span className="font-editorial text-[15px] text-sand">{offer.num}</span>
                    <Icon className="mt-4 h-7 w-7 text-ink/40" />
                    <h3 className="mt-5 font-editorial text-[21px] font-normal text-ink">{offer.title}</h3>
                    <p className="mt-2 text-[13px] italic text-ink/50">{offer.tagline}</p>
                    <p className="mt-4 text-[13px] leading-[1.75] text-ink/65">{offer.desc}</p>
                    <ul className="mt-6 flex flex-col gap-2">
                      {offer.items.map((item) => (
                        <li key={item} className="text-[13px] leading-[1.5] text-ink/70">— {item}</li>
                      ))}
                    </ul>
                    <a href="/contact" className="mt-6 inline-block border-b border-ink/30 pb-0.5 text-[12px] font-medium uppercase tracking-[0.06em] text-ink transition hover:border-sand hover:text-sand">
                      Demander un devis
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Full Harmony */}
            <div className="nea-reveal mt-20 grid grid-cols-1 gap-8 border border-ink/15 p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
              <div>
                <HarmonyIcon className="h-7 w-7 text-sand" />
                <Eyebrow>Pack recommandé</Eyebrow>
                <h3 className="font-editorial text-[24px] font-normal text-ink">{fullHarmony.name}</h3>
                <p className="mt-3 max-w-md text-[14px] leading-[1.75] text-ink/65">{fullHarmony.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {fullHarmony.items.map((item) => (
                    <li key={item} className="text-[13px] text-ink/70">— {item}</li>
                  ))}
                </ul>
              </div>
              <a href="/contact" className="whitespace-nowrap border-b border-ink pb-1 text-[14px] font-medium text-ink transition hover:border-sand hover:text-sand">
                Demander un devis →
              </a>
            </div>
            <p className="mt-6 text-[12px] text-ink/40">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
          </div>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-linen px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal mb-10 max-w-xl">
              <Eyebrow>Quelle offre pour vous</Eyebrow>
              <h2 className="font-editorial text-[clamp(24px,2.8vw,32px)] font-normal leading-tight text-ink">
                Trois questions pour y voir clair.
              </h2>
            </div>
            <OfferQuiz />
          </div>
        </section>

        {/* ── MÉTHODE ── */}
        <section className="px-8 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="nea-reveal mb-16 max-w-xl">
              <Eyebrow>Ma méthode</Eyebrow>
              <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal leading-tight text-ink">
                Comment ça se passe, du premier message à la livraison.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              {processSteps.map((step, i) => (
                <div key={step.num} className="nea-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="font-editorial text-[28px] text-ink/20">{step.num}</span>
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
            <div className="nea-reveal mb-14 max-w-xl">
              <Eyebrow>Blog</Eyebrow>
              <h2 className="font-editorial text-[clamp(26px,3vw,36px)] font-normal leading-tight text-ink">
                Quelques repères, sans jargon.
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative isolate px-8 py-32 text-center md:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="nea-reveal font-editorial font-normal text-ink" style={{ fontSize: "clamp(32px,4.4vw,52px)", lineHeight: 1.15 }}>
              On en parle ?
            </h2>
            <p className="nea-reveal mt-4 text-[15px] leading-[1.8] text-ink/60">
              Un échange rapide pour comprendre où vous en êtes, un devis sous 48h, sans engagement de votre côté.
            </p>
            <a href="/contact" className="nea-reveal mt-8 inline-block border-b border-ink pb-1 text-[15px] font-medium text-ink transition hover:border-sand hover:text-sand">
              Contactez-moi →
            </a>
          </div>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .nea-reveal { opacity:0; transform:translateY(16px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }
      `}</style>
    </>
  );
}
