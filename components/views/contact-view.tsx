"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Tab = "devis" | "question";
type FormState = "idle" | "loading" | "success" | "error";

const initialDevis = { firstName: "", lastName: "", email: "", activity: "", need: "", project: "" };
const initialQuestion = { firstName: "", email: "", subject: "", message: "" };

export function ContactView() {
  const [activeTab, setActiveTab] = useState<Tab>("devis");
  const [devis, setDevis] = useState(initialDevis);
  const [question, setQuestion] = useState(initialQuestion);
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(type: Tab, payload: Record<string, string>, event: FormEvent) {
    event.preventDefault();
    setState("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...payload })
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Une erreur est survenue. Réessaie dans un instant.");
      }

      setState("success");
      setFeedback("Message envoyé. Je te réponds sous 48h.");
      if (type === "devis") setDevis(initialDevis);
      else setQuestion(initialQuestion);
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Une erreur est survenue. Réessaie dans un instant.");
    }
  }

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
          <div className="relative isolate bg-[#1C1A1A] flex flex-col justify-center px-14 py-20 overflow-hidden">
            <div className="absolute inset-0 z-0" aria-hidden="true">
              <img
                src="/images/contact-bg.jpg"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-[#1C1A1A]/90" />
            </div>
            <div className="flex items-center gap-3 mb-6 relative" style={{ animation: "ct-fade-up 0.7s 0.2s both" }}>
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57]">Parlons de votre projet</span>
            </div>

            <h1 className="text-white leading-none mb-3 relative" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(52px,6vw,84px)", letterSpacing: "0.03em" }}>
              <span className="block" style={{ animation: "ct-reveal 0.9s 0.35s both" }}>DISCUTONS</span>
              <span className="block" style={{ animation: "ct-reveal 0.9s 0.5s both" }}>ENSEMBLE.</span>
            </h1>

            <p className="italic font-light text-[#B08D57] mb-12 relative" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "18px", animation: "ct-fade-up 0.8s 0.7s both" }}>
              devis gratuit · réponse sous 48h.
            </p>

            <div className="flex flex-col gap-5 relative" style={{ animation: "ct-fade-up 0.8s 0.85s both" }}>
              {[
                { label: "Email", val: "contact.neadigital@gmail.com", href: "mailto:contact.neadigital@gmail.com" },
                { label: "Réponse", val: "Sous 48h ouvrées" },
                { label: "Réseaux", val: "Pinterest", href: "https://fr.pinterest.com/neadigitalpro/?actingBusinessId=1138425749465166573" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#B08D57] shrink-0 mt-[5px]" />
                  <div>
                    <div className="text-[10px] font-medium tracking-[0.08em] uppercase text-white/35 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[14px] text-white/80 hover:text-white"
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.val}
                      </a>
                    ) : (
                      <div className="text-[14px] text-white/80">{item.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Droite — formulaire */}
          <div className="bg-[#F5F1EB] flex flex-col justify-center px-14 py-20" style={{ animation: "ct-fade-in 0.8s 0.3s both" }}>

            {/* Tabs */}
            <div className="flex gap-0 mb-9 border-b-[1.5px] border-[#EDE8DF]">
              {[
                { id: "devis" as Tab, label: "Devis / Services" },
                { id: "question" as Tab, label: "Question / Planners" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setState("idle"); setFeedback(""); }}
                  className={`text-[11px] font-medium tracking-[0.08em] uppercase pb-2.5 pr-5 border-b-2 -mb-[1.5px] transition-all ${
                    activeTab === tab.id
                      ? "text-[#1C1A1A] border-[#1C1A1A]"
                      : "text-[#7A7470] border-transparent hover:text-[#1C1A1A]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Devis */}
            {activeTab === "devis" && (
              <form className="flex flex-col gap-[18px]" onSubmit={(event) => submit("devis", devis, event)}>
                <div className="grid grid-cols-2 gap-3.5">
                  <FormGroup label="Prénom *">
                    <input required type="text" className="ct-input" placeholder="Jean" value={devis.firstName} onChange={(e) => setDevis({ ...devis, firstName: e.target.value })} />
                  </FormGroup>
                  <FormGroup label="Nom *">
                    <input required type="text" className="ct-input" placeholder="Dupont" value={devis.lastName} onChange={(e) => setDevis({ ...devis, lastName: e.target.value })} />
                  </FormGroup>
                </div>
                <FormGroup label="Email *">
                  <input required type="email" className="ct-input" placeholder="jean@exemple.fr" value={devis.email} onChange={(e) => setDevis({ ...devis, email: e.target.value })} />
                </FormGroup>
                <FormGroup label="Votre activité *">
                  <input required type="text" className="ct-input" placeholder="Plombier, boulanger, coach..." value={devis.activity} onChange={(e) => setDevis({ ...devis, activity: e.target.value })} />
                </FormGroup>
                <FormGroup label="Besoin *">
                  <select required className="ct-input ct-select" value={devis.need} onChange={(e) => setDevis({ ...devis, need: e.target.value })}>
                    <option value="">Choisir une prestation</option>
                    <option>Néa Strategy</option>
                    <option>Néa Content</option>
                    <option>Néa Web</option>
                    <option>Full Harmony (pack complet)</option>
                    <option>Autre / Je ne sais pas encore</option>
                  </select>
                </FormGroup>
                <FormGroup label="Votre projet">
                  <textarea className="ct-input ct-textarea" placeholder="Décrivez votre activité et ce que vous souhaitez améliorer..." value={devis.project} onChange={(e) => setDevis({ ...devis, project: e.target.value })} />
                </FormGroup>
                <button type="submit" disabled={state === "loading"} className="ct-btn-submit disabled:cursor-wait disabled:opacity-70">
                  <span>{state === "loading" ? "Envoi..." : "Envoyer ma demande →"}</span>
                </button>
                {feedback ? (
                  <p className={`text-[12px] text-center leading-[1.6] ${state === "error" ? "text-[#B14B3F]" : "text-[#5C7A52]"}`} role={state === "error" ? "alert" : "status"}>
                    {feedback}
                  </p>
                ) : (
                  <p className="text-[11px] text-[#7A7470] text-center leading-[1.6]">Sans engagement · Réponse sous 48h</p>
                )}
              </form>
            )}

            {/* Tab Question */}
            {activeTab === "question" && (
              <form className="flex flex-col gap-[18px]" onSubmit={(event) => submit("question", question, event)}>
                <FormGroup label="Prénom *">
                  <input required type="text" className="ct-input" placeholder="Marie" value={question.firstName} onChange={(e) => setQuestion({ ...question, firstName: e.target.value })} />
                </FormGroup>
                <FormGroup label="Email *">
                  <input required type="email" className="ct-input" placeholder="marie@exemple.fr" value={question.email} onChange={(e) => setQuestion({ ...question, email: e.target.value })} />
                </FormGroup>
                <FormGroup label="Sujet *">
                  <select required className="ct-input ct-select" value={question.subject} onChange={(e) => setQuestion({ ...question, subject: e.target.value })}>
                    <option value="">Choisir un sujet</option>
                    <option>Question sur un planner</option>
                    <option>Problème de téléchargement</option>
                    <option>Version personnalisée</option>
                    <option>Partenariat / Collaboration</option>
                    <option>Autre</option>
                  </select>
                </FormGroup>
                <FormGroup label="Message *">
                  <textarea required className="ct-input ct-textarea" placeholder="Votre question ou message..." value={question.message} onChange={(e) => setQuestion({ ...question, message: e.target.value })} />
                </FormGroup>
                <button type="submit" disabled={state === "loading"} className="ct-btn-submit disabled:cursor-wait disabled:opacity-70">
                  <span>{state === "loading" ? "Envoi..." : "Envoyer →"}</span>
                </button>
                {feedback ? (
                  <p className={`text-[12px] text-center leading-[1.6] ${state === "error" ? "text-[#B14B3F]" : "text-[#5C7A52]"}`} role={state === "error" ? "alert" : "status"}>
                    {feedback}
                  </p>
                ) : (
                  <p className="text-[11px] text-[#7A7470] text-center leading-[1.6]">Réponse sous 48h · <a href="mailto:contact.neadigital@gmail.com" className="underline hover:text-[#1C1A1A]">contact.neadigital@gmail.com</a></p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* ── BAS DE PAGE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="ct-reveal bg-[#FFFFFF] px-14 py-20 flex flex-col justify-center border-r border-[#EDE8DF]">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Services pro</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(22px,2.5vw,32px)] text-[#1C1A1A] leading-[1.2] mb-4">
              Vous cherchez à <em className="italic font-light text-[#7A7470]">développer votre visibilité</em> en ligne ?
            </h2>
            <p className="text-[13px] text-[#7A7470] leading-[1.75] mb-7">Stratégie, contenu, création de site : je m'occupe de tout. Devis gratuit, sans engagement.</p>
            <a href="/services" className="ct-btn-dark inline-block self-start"><span>Voir les services →</span></a>
          </div>

          <div className="ct-reveal bg-[#EDE8DF] px-14 py-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#B08D57]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A7470]">Boutique</span>
            </div>
            <h2 style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }} className="text-[clamp(22px,2.5vw,32px)] text-[#1C1A1A] leading-[1.2] mb-4">
              Vous cherchez un <em className="italic font-light text-[#7A7470]">planner digital</em> pour vous organiser ?
            </h2>
            <p className="text-[13px] text-[#7A7470] leading-[1.75] mb-7">Planners, trackers, finance : des ressources pour gagner en clarté au quotidien.</p>
            <a href="/shop" className="ct-btn-dark inline-block self-start"><span>Voir la boutique →</span></a>
          </div>
        </div>

      </main>

      <style>{`
        @keyframes ct-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ct-fade-in { from { opacity:0; } to { opacity:1; } }
        @keyframes ct-reveal { from { opacity:0; transform:translateY(36px) skewY(2deg); } to { opacity:1; transform:translateY(0) skewY(0); } }

        .ct-reveal { opacity:0; transform:translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .ct-reveal.ct-visible { opacity:1; transform:translateY(0); }

        .ct-input { width:100%; padding:12px 14px; border:1px solid #EDE8DF; border-radius:2px; font-family:'DM Sans',sans-serif; font-size:14px; color:#1C1A1A; background:white; transition:border-color 0.2s, box-shadow 0.2s; outline:none; }
        .ct-input:focus { border-color:#B08D57; box-shadow:0 0 0 3px rgba(200,184,154,0.12); }
        .ct-textarea { resize:vertical; min-height:110px; line-height:1.6; }
        .ct-select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237A7470' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 14px center; }

        .ct-btn-submit { width:100%; background:#1C1A1A; color:white; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; padding:14px; border-radius:2px; border:none; cursor:pointer; position:relative; overflow:hidden; transition:color 0.3s; margin-top:4px; }
        .ct-btn-submit::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ct-btn-submit:hover { color:#1C1A1A; }
        .ct-btn-submit:hover::before { transform:translateY(0); }
        .ct-btn-submit span { position:relative; z-index:1; }

        .ct-btn-dark { position:relative; overflow:hidden; background:#1C1A1A; color:white; font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:11px 22px; border-radius:2px; text-decoration:none; transition:color 0.3s; }
        .ct-btn-dark::before { content:''; position:absolute; inset:0; background:#B08D57; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .ct-btn-dark:hover { color:#1C1A1A; }
        .ct-btn-dark:hover::before { transform:translateY(0); }
        .ct-btn-dark span { position:relative; z-index:1; }
      `}</style>
    </>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[7px]">
      <label className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#7A7470]">{label}</label>
      {children}
    </div>
  );
}
