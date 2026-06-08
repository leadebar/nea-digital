"use client";

import { useEffect, useState } from "react";

type Tab = "devis" | "question";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<Tab>("devis");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("ct-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".ct-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <main>

        {/* ── HERO SPLIT ── */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-[58px]">

          {/* Gauche — infos */}
          <div className="bg-[#1C1A1A] flex flex-col justify-center px-14 py-20 relative overflow-hidden">
            <span
              className="pointer-events-none select-none absolute bottom-[-20px] left-[-10px] text-white/[0.04] leading-none"
              style={{ fontFamily: "'Bebas Neue'", fontSize: "200px", letterSpacing: "0.05em" }}
              aria-hidden="true"
            >CONTACT</span>

            <div className="flex items-center gap-3 mb-6 relative" style={{ animation: "ct-fade-up 0.7s 0.2s both" }}>
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C8B89A]">Parlons de votre projet</span>
            </div>

            <h1 className="text-white leading-none mb-3 relative" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(52px,6vw,84px)", letterSpacing: "0.03em" }}>
              <span className="block" style={{ animation: "ct-reveal 0.9s 0.35s both" }}>DISCUTONS</span>
              <span className="block" style={{ animation: "ct-reveal 0.9s 0.5s both" }}>ENSEMBLE.</span>
            </h1>

            <p className="italic font-light text-[#C8B89A] mb-10 relative" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "18px", animation: "ct-fade-up 0.8s 0.7s both" }}>
              devis gratuit · réponse sous 48h.
            </p>

            <div className="flex flex-col gap-5 relative" style={{ animation: "ct-fade-up 0.8s 0.85s both" }}>
              {[
                { label: "Email", val: "hello@nea-digital.com" },
                { label: "Réponse", val: "Sous 48h ouvrées" },
                { label: "Réseaux", val: "TikTok · Pinterest" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8B89A] shrink-0" />
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.08em] uppercase text-white/40 mb-0.5">{item.label}</div>
                    <div className="text-[14px] text-white/85">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Droite — formulaire */}
          <div className="bg-[#FDF4F6] flex flex-col justify-center px-14 py-20" style={{ animation: "ct-fade-in 0.8s 0.3s both" }}>

            {/* Tabs */}
            <div className="flex gap-0 mb-9 border-b border-[#FAE0E5]">
              {[
                { id: "devis" as Tab, label: "Devis / Services" },
                { id: "question" as Tab, label: "Question / Planners" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[12px] font-medium tracking-[0.08em] uppercase pb-3 pr-5 border-b-2 -mb-px transition-all ${
                    activeTab === tab.id
                      ? "text-[#C4687A] border-[#C4687A]"
                      : "text-[#7A7470] border-transparent hover:text-[#1C1A1A]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Devis */}
            {activeTab === "devis" && (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <FormGroup label="Prénom *">
                    <input type="text" className="ct-input" placeholder="Jean" />
                  </FormGroup>
                  <FormGroup label="Nom *">
                    <input type="text" className="ct-input" placeholder="Dupont" />
                  </FormGroup>
                </div>
                <FormGroup label="Email *">
                  <input type="email" className="ct-input" placeholder="jean@exemple.fr" />
                </FormGroup>
                <FormGroup label="Votre activité *">
                  <input type="text" className="ct-input" placeholder="Plombier, boulanger, coach..." />
                </FormGroup>
                <FormGroup label="Besoin *">
                  <select className="ct-input ct-select">
                    <option value="">Choisir une prestation</option>
                    <option>Création de site web</option>
                    <option>SEO & Référencement</option>
                    <option>Google Ads</option>
                    <option>Contenu & Newsletter</option>
                    <option>Pack complet</option>
                    <option>Autre / Je ne sais pas encore</option>
                  </select>
                </FormGroup>
                <FormGroup label="Votre projet en quelques mots">
                  <textarea className="ct-input ct-textarea" placeholder="Décrivez votre activité, votre situation actuelle et ce que vous souhaitez améliorer..." />
                </FormGroup>
                <button className="ct-btn-submit bg-[#C4687A]"><span>Envoyer ma demande →</span></button>
                <p className="text-[11px] text-[#7A7470] text-center leading-[1.6]">Sans engagement · Je vous réponds sous 48h</p>
              </div>
            )}

            {/* Tab Question */}
            {activeTab === "question" && (
              <div className="flex flex-col gap-5">
                <FormGroup label="Prénom *">
                  <input type="text" className="ct-input" placeholder="Marie" />
                </FormGroup>
                <FormGroup label="Email *">
                  <input type="email" className="ct-input" placeholder="marie@exemple.fr" />
                </FormGroup>
                <FormGroup label="Sujet *">
                  <select className="ct-input ct-select">
                    <option value="">Choisir un sujet</option>
                    <option>Question sur un planner</option>
                    <option>Problème de téléchargement</option>
                    <option>Demande de version personnalisée</option>
                    <option>Partenariat / Collaboration</option>
                    <option>Autre</option>
                  </select>
                </FormGroup>
                <FormGroup label="Message *">
                  <textarea className="ct-input ct-textarea" placeholder="Votre question ou message..." />
                </FormGroup>
                <button className="ct-btn-submit bg-[#F3B7C1]"><span>Envoyer →</span></button>
                <p className="text-[11px] text-[#7A7470] text-center leading-[1.6]">Réponse sous 48h · hello@nea-digital.com</p>
              </div>
            )}
          </div>
        </section>

        {/* ── BAS DE PAGE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="ct-reveal bg-[#F5F1EB] px-14 py-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#C8B89A]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Services pro</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(22px,2.5vw,34px)] text-[#1C1A1A] leading-[1.2] mb-5">
              Vous êtes <em className="italic font-light text-[#7A7470]">artisan ou TPE</em> et vous cherchez à développer votre visibilité ?
            </h2>
            <p className="text-[13px] text-[#7A7470] leading-[1.75] mb-7">Création de site, SEO, Google Ads — je m'occupe de tout. Devis gratuit, sans engagement.</p>
            <a href="/services" className="ct-btn-dark inline-block self-start"><span>Voir les services →</span></a>
          </div>

          <div className="ct-reveal bg-[#F3B7C1] px-14 py-20 flex flex-col justify-center relative overflow-hidden">
            <span className="pointer-events-none select-none absolute bottom-[-20px] right-[-10px] text-white/[0.07] leading-none" style={{ fontFamily: "'Bebas Neue'", fontSize: "180px" }} aria-hidden="true">NÉA.</span>
            <div className="flex items-center gap-3 mb-3 relative">
              <span className="w-7 h-px bg-white/40" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60">Boutique</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(22px,2.5vw,34px)] text-white leading-[1.2] mb-5 relative">
              Vous cherchez un <em className="italic font-light text-white/70">planner digital</em> pour vous organiser ?
            </h2>
            <p className="text-[13px] text-white/75 leading-[1.75] mb-7 relative">Planners, trackers, finance — des ressources pour gagner en clarté au quotidien.</p>
            <a href="/shop" className="ct-btn-white inline-block self-start relative"><span>Voir la boutique →</span></a>
          </div>
        </div>

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes ct-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ct-fade-in { from { opacity:0; } to { opacity:1; } }
        @keyframes ct-reveal { from { opacity:0; transform:translateY(36px) skewY(2deg); } to { opacity:1; transform:translateY(0) skewY(0); } }

        .ct-reveal { opacity:0; transform:translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .ct-reveal.ct-visible { opacity:1; transform:translateY(0); }

        .ct-input { width:100%; padding:12px 16px; border:1px solid #FAE0E5; border-radius:2px; font-family:'DM Sans',sans-serif; font-size:14px; color:#1C1A1A; background:white; transition:border-color 0.2s, box-shadow 0.2s; outline:none; }
        .ct-input:focus { border-color:#F3B7C1; box-shadow:0 0 0 3px rgba(243,183,193,0.15); }
        .ct-textarea { resize:vertical; min-height:120px; line-height:1.6; }
        .ct-select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A7470' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 14px center; }

        .ct-btn-submit { width:100%; color:white; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:15px; border-radius:2px; border:none; cursor:pointer; position:relative; overflow:hidden; transition:opacity 0.2s; }
        .ct-btn-submit::before { content:''; position:absolute; inset:0; background:#1C1A1A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ct-btn-submit:hover::before { transform:translateY(0); }
        .ct-btn-submit span { position:relative; z-index:1; }

        .ct-btn-dark { position:relative; overflow:hidden; background:#1C1A1A; color:white; font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:12px 24px; border-radius:2px; text-decoration:none; transition:color 0.3s; }
        .ct-btn-dark::before { content:''; position:absolute; inset:0; background:#C8B89A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ct-btn-dark:hover::before { transform:translateY(0); }
        .ct-btn-dark span { position:relative; z-index:1; }

        .ct-btn-white { position:relative; overflow:hidden; background:white; color:#C4687A; font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:12px 24px; border-radius:2px; text-decoration:none; transition:color 0.3s; }
        .ct-btn-white::before { content:''; position:absolute; inset:0; background:#1C1A1A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ct-btn-white:hover { color:white; }
        .ct-btn-white:hover::before { transform:translateY(0); }
        .ct-btn-white span { position:relative; z-index:1; }
      `}</style>
    </>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-[#7A7470] mb-2">{label}</label>
      {children}
    </div>
  );
}
