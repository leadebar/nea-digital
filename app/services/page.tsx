"use client";

import { useEffect } from "react";
import { FAQ } from "@/components/faq";

const services = [
  {
    num: "01",
    title: "Création de site web",
    tagline: "Livré en 2 à 3 semaines, prêt à être trouvé.",
    desc: "De la configuration du nom de domaine à la mise en ligne. Votre site est rapide, responsive et optimisé pour Google dès le premier jour.",
    items: ["Nom de domaine & configuration DNS", "Google Business Profile", "5 à 7 pages responsive", "Formulaire de contact", "SEO de base intégré", "Maintenance mensuelle disponible"],
  },
  {
    num: "02",
    title: "SEO & Référencement",
    tagline: "Apparaître sur Google sans payer de publicité.",
    desc: "Un travail de fond durable pour apparaître en première page sur les recherches de vos clients locaux. Audit, optimisation et suivi mensuel.",
    items: ["Audit SEO complet", "Optimisation technique on-page", "Stratégie de mots-clés locaux", "Google Business optimisé", "Rédaction d'articles de blog", "Suivi mensuel & reporting"],
  },
  {
    num: "03",
    title: "Google Ads",
    tagline: "Des leads qualifiés dès le premier jour.",
    desc: "Création et gestion de campagnes Google Ads ciblées géographiquement. Vous payez uniquement pour des clics de prospects réels dans votre zone.",
    items: ["Création de campagne Google Ads", "Ciblage géographique local", "Rédaction des annonces", "Suivi & optimisation mensuelle", "Reporting de performance", "Budget maîtrisé"],
  },
  {
    num: "04",
    title: "Contenu & Newsletter",
    tagline: "Rester visible sans y passer des heures.",
    desc: "Création de contenu régulier pour maintenir votre présence digitale — articles de blog SEO, newsletter mensuelle et calendrier éditorial.",
    items: ["Calendrier éditorial mensuel", "Rédaction articles de blog SEO", "Newsletter mensuelle", "Mise à jour Google Business", "Rapport de performance", "Suggestions de sujets"],
  },
];

const packs = [
  {
    label: "Essentiel",
    name: "PACK PRÉSENCE",
    tagline: "Pour exister en ligne rapidement avec une base solide.",
    items: ["Nom de domaine", "Google Business Profile", "Site vitrine 5 pages", "SEO de base", "Formation prise en main"],
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
  { num: "02", title: "Devis gratuit", desc: "Je vous envoie une proposition détaillée sous 48h, sans engagement de votre part." },
  { num: "03", title: "Lancement", desc: "Une fois validé, on démarre. Vous êtes informé à chaque étape, sans surprise." },
  { num: "04", title: "Livraison & suivi", desc: "Votre projet est livré dans les délais. Un suivi mensuel est disponible." },
];

export default function ServicesPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("pro-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".pro-reveal").forEach((el) => obs.observe(el));
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
        <section className="min-h-screen bg-[#1C1A1A] grid grid-cols-1 md:grid-cols-2 pt-[72px] overflow-hidden">
          <div className="flex flex-col justify-center px-12 py-20">
            <div className="flex items-center gap-3 mb-6" style={{ animation: "pro-fade-up 0.7s 0.2s both" }}>
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C8B89A]">Marketing digital · TPE & Artisans</span>
            </div>
            <h1 className="text-white mb-3 leading-none" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(52px,6vw,88px)", letterSpacing: "0.03em" }}>
              <span className="block" style={{ animation: "pro-reveal 0.9s 0.35s both" }}>VOTRE PRÉSENCE</span>
              <span className="block" style={{ animation: "pro-reveal 0.9s 0.5s both" }}>DIGITALE,</span>
              <span className="block" style={{ animation: "pro-reveal 0.9s 0.65s both" }}>SANS JARGON.</span>
            </h1>
            <p className="italic font-light text-[#C8B89A] mb-8" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(16px,2vw,22px)", animation: "pro-fade-up 0.8s 0.8s both" }}>
              site web, seo, google ads, contenu.
            </p>
            <p className="text-[14px] font-light text-white/60 leading-[1.8] max-w-[420px] mb-11" style={{ animation: "pro-fade-up 0.8s 0.95s both" }}>
              J'accompagne les <strong className="text-white/90 font-medium">TPE, artisans et indépendants</strong> pour créer et développer leur visibilité en ligne — de A à Z, résultats mesurables.
            </p>
            <div className="flex gap-4 flex-wrap" style={{ animation: "pro-fade-up 0.8s 1.1s both" }}>
              <a href="/contact" className="pro-btn-cream"><span>Devis gratuit →</span></a>
              <a href="#services-detail" className="pro-btn-outline"><span>Voir les services</span></a>
            </div>
          </div>

          <div className="bg-[#F5F1EB] flex flex-col justify-center px-12 py-20" style={{ animation: "pro-fade-in 1s 0.4s both" }}>
            <div className="flex flex-col gap-8">
              {[
                { num: "48H", label: "Délai de réponse garanti" },
                { num: "2–3", label: "Semaines pour livrer un site complet" },
                { num: "100%", label: "Sur devis, sans engagement" },
              ].map((stat, i) => (
                <div key={stat.label} className={`${i < 2 ? "border-b border-[#EDE8DF] pb-8" : ""}`}>
                  <div className="leading-none tracking-[0.05em] text-[#1C1A1A]" style={{ fontFamily: "'Bebas Neue'", fontSize: "52px" }}>{stat.num}</div>
                  <div className="text-[12px] text-[#7A7470] mt-1 tracking-[0.05em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services-detail" className="bg-[#F5F1EB] px-12 py-24">
          <div className="pro-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Ce que je fais</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              Des prestations <em className="italic font-light text-[#7A7470]">claires</em><br />et des livrables concrets.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {services.map((svc, i) => (
              <div key={svc.num} className={`svc-3d pro-reveal bg-white p-11 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(28,26,26,0.08)]`} style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#1C1A1A] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                <div className="leading-none mb-4 tracking-[0.05em] text-[#EDE8DF] transition-colors duration-300 hover:text-[#C8B89A]" style={{ fontFamily: "'Bebas Neue'", fontSize: "56px" }}>{svc.num}</div>
                <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[22px] font-semibold text-[#1C1A1A] mb-1">{svc.title}</h3>
                <p className="text-[13px] text-[#C8B89A] font-medium mb-3 italic">{svc.tagline}</p>
                <p className="text-[13px] text-[#7A7470] leading-[1.75] mb-6">{svc.desc}</p>
                <ul className="flex flex-col gap-2 mb-8">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[#1C1A1A] leading-[1.4]">
                      <span className="text-[#C8B89A] text-[11px] flex-shrink-0 mt-[2px]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#1C1A1A] border-b border-[#C8B89A] pb-0.5 hover:text-[#7A7470] transition-colors">
                  Demander un devis →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── PACKS ── */}
        <section className="bg-[#1C1A1A] px-12 py-24">
          <div className="pro-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C8B89A]">Offres</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-white leading-[1.15]">
              Des packs <em className="italic font-light text-[#C8B89A]">clés en main</em><br />pensés pour les artisans.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {packs.map((pack, i) => (
              <div
                key={pack.name}
                className={`pro-reveal p-10 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] ${pack.featured ? "bg-[#F5F1EB] border-[#F5F1EB]" : "bg-[#1C1A1A] border-white/[0.08] hover:border-[#C8B89A]"}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className={`text-[10px] tracking-[0.15em] uppercase mb-3.5 ${pack.featured ? "text-[#7A7470]" : "text-white/30"}`}>{pack.label}</p>
                <h3 className={`text-[30px] mb-2 tracking-[0.06em] ${pack.featured ? "text-[#1C1A1A]" : "text-white"}`} style={{ fontFamily: "'Bebas Neue'" }}>{pack.name}</h3>
                <p className={`text-[13px] leading-[1.6] mb-6 ${pack.featured ? "text-[#7A7470]" : "text-white/45"}`}>{pack.tagline}</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {pack.items.map((item) => (
                    <li key={item} className={`flex gap-2.5 text-[13px] ${pack.featured ? "text-[#1C1A1A]" : "text-white/60"}`}>
                      <span className={pack.featured ? "text-[#C8B89A]" : "text-white/20"}>—</span>{item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`pro-pack-btn block text-center py-3 rounded-sm text-[11px] font-medium tracking-[0.08em] uppercase ${pack.featured ? "bg-[#1C1A1A] text-[#F5F1EB] border border-[#1C1A1A]" : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"}`}
                >
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] text-white/25 mt-8 tracking-[0.05em]">Tous les tarifs sont sur devis — chaque projet est unique.</p>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="bg-[#F5F1EB] px-12 pt-24 pb-0">
          <div className="pro-reveal mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Comment ça marche</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(28px,3.5vw,44px)] text-[#1C1A1A] leading-[1.15]">
              De la prise de contact<br />à la <em className="italic font-light text-[#7A7470]">livraison.</em>
            </h2>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {process.map((step, i) => (
            <div
              key={step.num}
              className={`pro-reveal bg-white p-11 border-r border-[#EDE8DF] last:border-r-0 transition-colors duration-300 hover:bg-[#F5F1EB]`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="leading-none mb-5 tracking-[0.05em] text-[#EDE8DF] transition-colors duration-300 group-hover:text-[#C8B89A]" style={{ fontFamily: "'Bebas Neue'", fontSize: "56px" }}>{step.num}</div>
              <h3 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[18px] font-semibold text-[#1C1A1A] mb-3">{step.title}</h3>
              <p className="text-[13px] text-[#7A7470] leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <section id="contact" className="relative bg-[#1C1A1A] px-12 py-32 overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.04] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(80px,18vw,260px)", letterSpacing: "0.05em" }}
            aria-hidden="true"
          >DEVIS</span>
          <div className="relative max-w-2xl">
            <h2 className="pro-reveal text-white leading-none mb-4 tracking-[0.04em]" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,7vw,88px)" }}>
              DISCUTONS DE<br /><span className="text-[#C8B89A]">VOTRE PROJET.</span>
            </h2>
            <p className="pro-reveal italic font-light text-white/50 mb-4" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(16px,2vw,22px)" }}>
              devis gratuit, réponse sous 48h.
            </p>
            <p className="pro-reveal text-[12px] text-white/25 tracking-[0.08em] uppercase mb-10">Sans engagement · Échange de 30 minutes</p>
            <a href="/contact" className="pro-reveal pro-btn-cream inline-block"><span>Contactez-moi →</span></a>
          </div>
        </section>

        <FAQ />

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes pro-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pro-fade-in { from { opacity:0; } to { opacity:1; } }
        @keyframes pro-reveal { from { opacity:0; transform:translateY(36px) skewY(2deg); } to { opacity:1; transform:translateY(0) skewY(0); } }

        .pro-reveal { opacity:0; transform:translateY(28px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .pro-reveal.pro-visible { opacity:1; transform:translateY(0); }

        .pro-btn-cream { position:relative; overflow:hidden; background:#F5F1EB; color:#1C1A1A; font-size:12px; font-weight:500; padding:14px 30px; border-radius:2px; text-decoration:none; letter-spacing:0.07em; text-transform:uppercase; transition:color 0.35s; display:inline-block; }
        .pro-btn-cream::before { content:''; position:absolute; inset:0; background:#C8B89A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .pro-btn-cream:hover::before { transform:translateY(0); }
        .pro-btn-cream span { position:relative; z-index:1; }

        .pro-btn-outline { position:relative; overflow:hidden; border:1px solid rgba(255,255,255,0.25); color:rgba(255,255,255,0.8); font-size:12px; font-weight:500; padding:14px 30px; border-radius:2px; text-decoration:none; letter-spacing:0.07em; text-transform:uppercase; transition:color 0.3s, border-color 0.3s; display:inline-block; }
        .pro-btn-outline::before { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.08); transform:translateX(-101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .pro-btn-outline:hover { border-color:rgba(255,255,255,0.5); color:white; }
        .pro-btn-outline:hover::before { transform:translateX(0); }
        .pro-btn-outline span { position:relative; z-index:1; }

        .pro-pack-btn { position:relative; overflow:hidden; transition:color 0.3s, border-color 0.3s; }
        .pro-pack-btn::before { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.08); transform:translateX(-101%); transition:transform 0.35s cubic-bezier(0.4,0,0.2,1); }
        .pro-pack-btn:hover::before { transform:translateX(0); }
      `}</style>
    </>
  );
}
