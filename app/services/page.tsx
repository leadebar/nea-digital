"use client";

import { useEffect } from "react";
import { FAQ } from "@/components/faq";

const services = [
  {
    num: "01",
    title: "Création de site web",
    tagline: "Un site professionnel livré en 2–3 semaines.",
    desc: "De la configuration du nom de domaine à la mise en ligne, je m'occupe de tout. Votre site est rapide, responsive et optimisé pour Google dès le départ.",
    items: ["Nom de domaine & configuration DNS", "Google Business Profile", "5 à 7 pages responsive", "Formulaire de contact", "SEO de base intégré", "Maintenance mensuelle disponible"],
    delay: "0.1s",
  },
  {
    num: "02",
    title: "SEO & Référencement",
    tagline: "Être trouvé sur Google sans payer de publicité.",
    desc: "Un travail de fond durable pour apparaître en première page sur les recherches de vos clients locaux. Audit, optimisation et suivi mensuel.",
    items: ["Audit SEO complet", "Optimisation technique on-page", "Stratégie de mots-clés locaux", "Google Business optimisé", "Rédaction d'articles de blog", "Suivi mensuel & reporting"],
    delay: "0.2s",
  },
  {
    num: "03",
    title: "Google Ads",
    tagline: "Des leads qualifiés dès le premier jour.",
    desc: "Création et gestion de campagnes Google Ads ciblées géographiquement. Vous payez uniquement pour des clics de prospects réels dans votre zone.",
    items: ["Création de campagne Google Ads", "Ciblage géographique local", "Rédaction des annonces", "Suivi & optimisation mensuelle", "Reporting de performance", "Budget maîtrisé"],
    delay: "0.3s",
  },
  {
    num: "04",
    title: "Contenu & Newsletter",
    tagline: "Rester visible sans y passer des heures.",
    desc: "Création de contenu régulier pour maintenir votre présence digitale — articles de blog SEO, newsletter mensuelle et calendrier éditorial.",
    items: ["Calendrier éditorial mensuel", "Rédaction articles de blog SEO", "Newsletter mensuelle", "Mise à jour Google Business", "Rapport de performance", "Suggestions de sujets"],
    delay: "0.4s",
  },
];

const packs = [
  {
    label: "Essentiel",
    name: "PACK PRÉSENCE",
    tagline: "Pour exister en ligne rapidement avec une base solide.",
    items: ["Nom de domaine & configuration", "Google Business Profile", "Site vitrine 5 pages", "SEO de base", "Formation prise en main"],
    featured: false,
  },
  {
    label: "⭐ Recommandé",
    name: "PACK LANCEMENT",
    tagline: "Tout pour lancer une présence complète et générer des leads.",
    items: ["Tout le Pack Présence", "Optimisation SEO on-page", "2 articles de blog SEO", "Stratégie digitale 3 mois", "1 mois de suivi offert"],
    featured: true,
  },
  {
    label: "Mensuel",
    name: "PACK VISIBILITÉ",
    tagline: "Rester visible en continu, sans s'en occuper soi-même.",
    items: ["Maintenance site", "Suivi SEO + 1 article/mois", "Google Business mis à jour", "Newsletter mensuelle", "Rapport mensuel"],
    featured: false,
  },
];

const process = [
  { num: "01", title: "Premier contact", desc: "On échange 30 minutes pour comprendre votre activité, vos objectifs et vos besoins." },
  { num: "02", title: "Devis gratuit", desc: "Je vous envoie une proposition détaillée sous 48h, sans engagement." },
  { num: "03", title: "Lancement", desc: "Une fois validé, on démarre. Vous êtes tenu informé à chaque étape." },
  { num: "04", title: "Livraison & suivi", desc: "Votre projet est livré dans les délais. Un suivi mensuel est disponible." },
];

export default function ServicesPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("nea-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".nea-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".svc-3d");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateZ(6px)`;
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });
    return () => handlers.forEach(({ el, move, leave }) => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    });
  }, []);

  return (
    <>
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-[#F3B7C1] px-12 pt-36 pb-24 overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.06] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(100px,20vw,300px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >SERVICES</span>

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 mb-4" style={{ animation: "nea-slide-top 0.7s 0.2s both" }}>
              <span className="w-7 h-[1.5px] bg-white/60" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">Marketing digital · TPE & Artisans</span>
            </div>
            <h1
              className="text-white mb-6 leading-none"
              style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(52px,8vw,100px)", letterSpacing: "0.04em", animation: "nea-reveal 0.9s 0.35s both" }}
            >
              DES SERVICES CONCRETS<br />POUR EXISTER EN LIGNE.
            </h1>
            <p className="text-[16px] font-light text-white/80 leading-[1.8] max-w-xl mb-10" style={{ animation: "nea-fade-up 0.8s 0.6s both" }}>
              Création de site, SEO, Google Ads, contenu — j'accompagne les <strong className="text-white font-medium">TPE, artisans et indépendants</strong> pour développer leur visibilité digitale. Devis gratuit, réponse sous 48h.
            </p>
            <div className="flex gap-4 flex-wrap" style={{ animation: "nea-fade-up 0.8s 0.75s both" }}>
              <a href="/contact" className="nea-btn-fill bg-white text-[#C4687A]"><span>Demander un devis gratuit</span></a>
              <a href="#services-detail" className="nea-btn-ghost"><span>Voir les services ↓</span></a>
            </div>
          </div>
        </section>

        {/* ── SERVICES DÉTAIL ── */}
        <section id="services-detail" className="px-12 py-24">
          <div className="nea-reveal mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[1.5px] bg-[#F3B7C1]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4687A]">Ce que je fais</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              Chaque service, <em className="italic font-light text-[#C4687A]">expliqué clairement.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {services.map((svc) => (
              <div
                key={svc.num}
                className="svc-3d nea-reveal bg-white p-11 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(243,183,193,0.25)]"
                style={{ transitionDelay: svc.delay }}
              >
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F3B7C1] to-[#C4687A] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                <div className="text-[#FAE0E5] leading-none mb-4 tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "56px" }}>{svc.num}</div>
                <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[22px] font-semibold text-[#1C1A1A] mb-1">{svc.title}</h3>
                <p className="text-[13px] text-[#C4687A] font-medium mb-3 italic">{svc.tagline}</p>
                <p className="text-[13px] text-[#9A8A8E] leading-[1.75] mb-6">{svc.desc}</p>
                <ul className="flex flex-col gap-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[#1C1A1A] leading-[1.4]">
                      <span className="text-[#C4687A] text-[11px] mt-[2px] shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#FAE0E5]">
                  <a href="/contact" className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#C4687A] hover:text-[#1C1A1A] transition-colors">
                    Demander un devis →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PACKS ── */}
        <section className="bg-[#1C1A1A] px-12 py-24">
          <div className="nea-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[1.5px] bg-[#F3B7C1]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F3B7C1]">Offres</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-white leading-[1.15]">
              Des packs <em className="italic font-light text-[#F3B7C1]">clés en main</em><br />pensés pour les artisans.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packs.map((pack, i) => (
              <div
                key={pack.name}
                className={`nea-reveal rounded-sm p-9 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] ${pack.featured ? "bg-[#F3B7C1] border-[#F3B7C1]" : "border-white/10 hover:border-[#F3B7C1]/50"}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className={`text-[10px] tracking-[0.15em] uppercase mb-3.5 ${pack.featured ? "text-white/80" : "text-white/40"}`}>{pack.label}</p>
                <h3 className="text-[34px] text-white mb-2 tracking-[0.06em]" style={{ fontFamily: "'Bebas Neue'" }}>{pack.name}</h3>
                <p className={`text-[13px] leading-[1.65] mb-7 ${pack.featured ? "text-white/85" : "text-white/50"}`}>{pack.tagline}</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {pack.items.map((item) => (
                    <li key={item} className={`flex gap-2.5 text-[13px] ${pack.featured ? "text-white/90" : "text-white/65"}`}>
                      <span className={pack.featured ? "text-white/90" : "text-[#F3B7C1]"}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`nea-pack-btn block text-center py-3 rounded-sm text-[11px] font-medium tracking-[0.08em] uppercase ${pack.featured ? "bg-white text-[#C4687A] hover:bg-[#FDF4F6]" : "border border-white/20 text-white hover:border-white/50"}`}
                >
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] text-white/40 mt-8">Tous les tarifs sont sur devis — chaque projet est unique.</p>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="px-12 py-24 bg-[#FDF4F6]">
          <div className="nea-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[1.5px] bg-[#F3B7C1]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4687A]">Comment ça marche</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              De la prise de contact<br />à la <em className="italic font-light text-[#C4687A]">livraison.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5">
            {process.map((step, i) => (
              <div key={step.num} className="nea-reveal bg-white p-8 relative" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-[#FAE0E5] leading-none mb-4 tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "56px" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[18px] font-semibold text-[#1C1A1A] mb-3">{step.title}</h3>
                <p className="text-[13px] text-[#9A8A8E] leading-[1.7]">{step.desc}</p>
                {i < process.length - 1 && (
                  <span className="hidden md:block absolute top-8 -right-3 text-[#F3B7C1] text-xl z-10">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── RÉALISATION ── */}
        <section className="px-12 py-24">
          <div className="nea-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[1.5px] bg-[#F3B7C1]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4687A]">Réalisation</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              Un exemple <em className="italic font-light text-[#C4687A]">concret.</em>
            </h2>
          </div>
          <a
            href="https://lpplomberie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nea-reveal group bg-white block relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(243,183,193,0.25)]"
            style={{ padding: "52px 44px" }}
          >
            <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#C4687A] mb-4">Plomberie · Cagnes-sur-Mer</p>
            <h3 className="text-[42px] text-[#1C1A1A] mb-3 tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'" }}>LP PLOMBERIE</h3>
            <p className="text-[14px] text-[#9A8A8E] leading-[1.75] mb-7 max-w-2xl">
              Création complète du site vitrine, SEO local, Google Business Profile, rédaction de blog SEO et audit Semrush. Résultat : une présence locale forte sur les recherches plombier de proximité à Cagnes-sur-Mer.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Création web", "SEO local", "Google Business", "Blog SEO", "Audit Semrush"].map((pill) => (
                <span key={pill} className="text-[11px] px-3.5 py-1 rounded-full bg-[#FDF4F6] border border-[#FAE0E5] text-[#1C1A1A]">{pill}</span>
              ))}
            </div>
            <span className="absolute bottom-11 right-11 text-[32px] text-[#FAE0E5] transition-all duration-300 group-hover:text-[#C4687A] group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </section>

        {/* ── CTA ── */}
        <section className="relative bg-[#F3B7C1] px-12 py-32 text-center overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.08] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(80px,18vw,260px)", letterSpacing: "0.05em", animation: "nea-watermark 6s ease-in-out infinite" }}
            aria-hidden="true"
          >DEVIS</span>
          <h2 className="nea-reveal text-white relative tracking-[0.04em] leading-none mb-3" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,7vw,90px)" }}>
            DISCUTONS DE<br />VOTRE PROJET.
          </h2>
          <p className="nea-reveal relative mb-4 italic font-light text-white/75" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(18px,2vw,24px)" }}>
            devis gratuit, réponse sous 48h.
          </p>
          <p className="nea-reveal text-[13px] text-white/55 tracking-[0.05em] relative mb-10">Sans engagement · Échange de 30 minutes</p>
          <a href="/contact" className="nea-reveal nea-btn-fill bg-white text-[#C4687A] inline-block"><span>Demander un devis gratuit →</span></a>
        </section>

        <FAQ />

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes nea-fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-slide-top { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-reveal { from { opacity:0; transform:translateY(40px) skewY(3deg); } to { opacity:1; transform:translateY(0) skewY(0); } }
        @keyframes nea-watermark { 0%,100% { transform:translate(-50%,-50%) scale(1); } 50% { transform:translate(-50%,-50%) scale(1.03); } }

        .nea-reveal { opacity:0; transform:translateY(32px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-btn-fill { position:relative; overflow:hidden; font-size:12px; font-weight:500; padding:15px 32px; border-radius:2px; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; transition:color 0.35s; display:inline-block; }
        .nea-btn-fill::before { content:''; position:absolute; inset:0; background:#1C1A1A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nea-btn-fill:hover { color:white; }
        .nea-btn-fill:hover::before { transform:translateY(0); }
        .nea-btn-fill span { position:relative; z-index:1; }

        .nea-btn-ghost { position:relative; overflow:hidden; border:1.5px solid rgba(255,255,255,0.5); color:white; font-size:12px; font-weight:500; padding:15px 32px; border-radius:2px; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; transition:color 0.35s, border-color 0.3s; display:inline-block; }
        .nea-btn-ghost::before { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.15); transform:translateX(-101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nea-btn-ghost:hover { border-color:white; }
        .nea-btn-ghost:hover::before { transform:translateX(0); }
        .nea-btn-ghost span { position:relative; z-index:1; }

        .nea-pack-btn { position:relative; overflow:hidden; transition:color 0.3s, border-color 0.3s; }
        .nea-pack-btn::before { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.12); transform:translateX(-101%); transition:transform 0.35s cubic-bezier(0.4,0,0.2,1); }
        .nea-pack-btn:hover::before { transform:translateX(0); }
      `}</style>
    </>
  );
}
