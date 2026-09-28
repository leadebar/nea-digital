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

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-3.5 ${light ? "text-[#B08D57]" : "text-[#8A8177]"}`}>
      <span className="w-7 h-[1.5px] bg-[#B08D57]" />
      <span className="font-['DM_Sans'] text-[10px] font-medium tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`font-['Museo_Moderno'] text-[clamp(26px,3.2vw,40px)] leading-[1.2] mb-14 ${light ? "text-white" : "text-[#1C1A1A]"}`}>
      {children}
    </h2>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
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
        <section className="relative bg-[#F5F1EB] flex flex-col items-center justify-center text-center px-12 pt-40 pb-24 overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1C1A1A]/[0.03] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(120px,25vw,380px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >NÉA.</span>

          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#B08D57] mb-7 relative" style={{ animation: "nea-slide-top 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}>
            Stratégie · Contenu · Web
          </p>

          <h1
            className="text-[#1C1A1A] relative"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,8vw,104px)", lineHeight: 0.98, letterSpacing: "0.02em" }}
          >
            <span className="block" style={{ animation: "nea-reveal 0.9s 0.4s cubic-bezier(0.22,1,0.36,1) both" }}>STRATÉGIE, CONTENU,</span>
            <span className="block" style={{ animation: "nea-reveal 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both" }}>SITE WEB.</span>
          </h1>

          <p className="text-[#7A7470] relative mt-4 mb-7 italic font-light" style={{ fontFamily: "'Museo_Moderno','Museo Moderno',serif", fontSize: "clamp(17px,2.2vw,24px)", animation: "nea-fade-up 0.8s 0.85s both" }}>
            Néa Digital, par Léa Debar.
          </p>

          <p className="text-[15px] font-light text-[#5C564F] leading-[1.85] max-w-[540px] mx-auto mb-12 relative" style={{ animation: "nea-fade-up 0.8s 1s both" }}>
            J'aide les entreprises, les marques et les indépendants à construire une présence en ligne qui tient debout : un site qui fonctionne, du contenu qui sort régulièrement, une stratégie qui a du sens pour votre activité.
          </p>

          <div className="flex gap-4 justify-center flex-wrap relative" style={{ animation: "nea-fade-up 0.8s 1.15s both" }}>
            <a href="/contact" className="nea-btn-fill bg-[#1C1A1A] text-white"><span>Demander un devis gratuit</span></a>
            <a href="#services" className="nea-btn-ghost"><span>Voir les offres</span></a>
          </div>
        </section>

        {/* ── OFFRES ── */}
        <section id="services" className="bg-[#F5F1EB] px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Ce que je fais</SectionTag>
            <SectionTitle>Trois façons de travailler ensemble.</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {offers.map((offer, i) => {
              const Icon = offerIcons[offer.key as keyof typeof offerIcons];
              return (
                <div key={offer.key} className="nea-reveal bg-white p-11 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(28,26,26,0.06)]" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#B08D57] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                  <div className="flex items-center gap-4 mb-5">
                    <Icon className="w-9 h-9 text-[#B08D57] shrink-0" />
                    <span className="text-[#EDE8DF] leading-none tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "38px" }}>{offer.num}</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1C1A1A] mb-1" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }}>{offer.title}</h3>
                  <p className="text-[13px] text-[#B08D57] font-medium mb-3 italic">{offer.tagline}</p>
                  <p className="text-[13px] text-[#7A7470] leading-[1.7] mb-6">{offer.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-[#1C1A1A] leading-[1.4]">
                        <span className="text-[#B08D57] text-[11px] mt-[2px] shrink-0">—</span>
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

          {/* Full Harmony */}
          <div className="nea-reveal mt-0.5 bg-[#1C1A1A] p-11 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <HarmonyIcon className="w-9 h-9 text-[#B08D57] mb-4" />
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#B08D57] mb-3">Pack recommandé</p>
              <h3 className="text-[26px] text-white mb-2" style={{ fontFamily: "'Bebas Neue'", letterSpacing: "0.03em" }}>{fullHarmony.name}</h3>
              <p className="text-[14px] text-white/60 leading-[1.7] mb-4 max-w-md">{fullHarmony.desc}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {fullHarmony.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-white/75">
                    <span className="text-[#B08D57]">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="/contact" className="nea-btn-fill bg-white text-[#1C1A1A] whitespace-nowrap"><span>Demander un devis</span></a>
          </div>
          <p className="text-center text-[12px] text-[#9A928C] mt-8 tracking-[0.05em]">Tarifs communiqués sur devis, adaptés à chaque projet.</p>
        </section>

        {/* ── QUIZ ── */}
        <section className="bg-[#F5F1EB] px-12 pb-24">
          <div className="nea-reveal">
            <SectionTag>Quelle offre pour vous</SectionTag>
            <h2 className="font-['Museo_Moderno'] text-[clamp(24px,3vw,34px)] leading-[1.2] text-[#1C1A1A] mb-10">Trouvez votre offre en 3 questions.</h2>
          </div>
          <OfferQuiz />
        </section>

        {/* ── MÉTHODE ── */}
        <section className="bg-white px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Ma méthode</SectionTag>
            <SectionTitle>Comment ça se passe.</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5">
            {processSteps.map((step, i) => (
              <div key={step.num} className="nea-reveal bg-[#F5F1EB] p-9" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="leading-none mb-5 tracking-[0.05em] text-[#B08D57]" style={{ fontFamily: "'Bebas Neue'", fontSize: "34px" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[16px] font-semibold text-[#1C1A1A] mb-3">{step.title}</h3>
                <p className="text-[13px] text-[#7A7470] leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="bg-[#F5F1EB] px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Blog</SectionTag>
            <SectionTitle>Stratégie, contenu, web : quelques repères.</SectionTitle>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative bg-[#1C1A1A] px-12 py-32 text-center overflow-hidden">
          <span className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] whitespace-nowrap leading-none" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(80px,18vw,260px)", letterSpacing: "0.05em" }} aria-hidden="true">CONTACT</span>
          <h2 className="nea-reveal text-white relative tracking-[0.02em] leading-none mb-3" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(42px,6vw,76px)" }}>PARLONS DE<br />VOTRE PROJET.</h2>
          <p className="nea-reveal relative mb-4 italic font-light text-[#B08D57]" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(17px,2vw,22px)" }}>un échange, un devis, sans engagement.</p>
          <p className="nea-reveal text-[13px] text-white/45 tracking-[0.05em] relative mb-10">Devis gratuit · Réponse sous 48h</p>
          <a href="/contact" className="nea-reveal nea-btn-fill bg-white text-[#1C1A1A] inline-block relative"><span>Contactez-moi →</span></a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes nea-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-slide-top { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-reveal { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }

        .nea-reveal { opacity:0; transform:translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-btn-fill { position:relative; overflow:hidden; font-size:12px; font-weight:500; padding:15px 32px; border-radius:2px; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; transition:color 0.35s; display:inline-block; }
        .nea-btn-fill::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nea-btn-fill:hover { color:white; }
        .nea-btn-fill:hover::before { transform:translateY(0); }
        .nea-btn-fill span { position:relative; z-index:1; }

        .nea-btn-ghost { position:relative; overflow:hidden; border:1.5px solid rgba(28,26,26,0.2); color:#1C1A1A; font-size:12px; font-weight:500; padding:15px 32px; border-radius:2px; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; transition:color 0.35s, border-color 0.3s; display:inline-block; }
        .nea-btn-ghost::before { content:''; position:absolute; inset:0; background:rgba(28,26,26,0.06); transform:translateX(-101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nea-btn-ghost:hover { border-color:rgba(28,26,26,0.4); }
        .nea-btn-ghost:hover::before { transform:translateX(0); }
        .nea-btn-ghost span { position:relative; z-index:1; }
      `}</style>
    </>
  );
}
