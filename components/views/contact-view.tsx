"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Tab = "devis" | "question";
type FormState = "idle" | "loading" | "success" | "error";

const initialDevis = { firstName: "", lastName: "", email: "", activity: "", need: "", project: "" };
const initialQuestion = { firstName: "", email: "", subject: "", message: "" };

function KickerRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-sand" />
      <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">{children}</span>
    </div>
  );
}

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
        throw new Error(result.message || "Une erreur est survenue. Réessayez dans un instant.");
      }

      setState("success");
      setFeedback("Message envoyé. Je vous réponds sous 48h.");
      if (type === "devis") setDevis(initialDevis);
      else setQuestion(initialQuestion);
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Une erreur est survenue. Réessayez dans un instant.");
    }
  }

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
        <section className="px-8 pt-32 pb-16 md:px-16">
          <div className="mx-auto max-w-5xl">
            <KickerRule>Parlons de votre projet</KickerRule>
            <h1
              className="font-display font-extrabold uppercase text-ink"
              style={{ fontSize: "clamp(38px,6vw,84px)", lineHeight: 0.96, letterSpacing: "-0.02em" }}
            >
              Discutons
              <br />
              <span className="text-sand">ensemble.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.8] text-ink/65">Devis gratuit · réponse sous 48h ouvrées.</p>
            <div className="mt-6 flex flex-col gap-1 text-[13px] text-ink/55">
              <a href="mailto:contact.neadigital@gmail.com" className="hover:text-sand">contact.neadigital@gmail.com</a>
              <a href="https://fr.pinterest.com/neadigitalpro/?actingBusinessId=1138425749465166573" target="_blank" rel="noopener noreferrer" className="hover:text-sand">Pinterest</a>
            </div>
          </div>
        </section>

        {/* ── FORMULAIRE ── */}
        <section className="px-8 py-20 md:px-16">
          <div className="mx-auto max-w-2xl rounded-[4px] bg-linen p-8 md:p-12">
            <div className="mb-9 flex gap-8 border-b border-ink/12">
              {[
                { id: "devis" as Tab, label: "Devis / Services" },
                { id: "question" as Tab, label: "Question / Planners" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setState("idle"); setFeedback(""); }}
                  className={`-mb-px border-b-2 pb-3 font-display text-[11px] font-extrabold uppercase tracking-[0.08em] transition ${
                    activeTab === tab.id ? "border-sand text-ink" : "border-transparent text-ink/40 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "devis" && (
              <form className="flex flex-col gap-5" onSubmit={(event) => submit("devis", devis, event)}>
                <div className="grid grid-cols-2 gap-4">
                  <FormGroup label="Prénom *">
                    <input required type="text" className="nea-input" placeholder="Jean" value={devis.firstName} onChange={(e) => setDevis({ ...devis, firstName: e.target.value })} />
                  </FormGroup>
                  <FormGroup label="Nom *">
                    <input required type="text" className="nea-input" placeholder="Dupont" value={devis.lastName} onChange={(e) => setDevis({ ...devis, lastName: e.target.value })} />
                  </FormGroup>
                </div>
                <FormGroup label="Email *">
                  <input required type="email" className="nea-input" placeholder="jean@exemple.fr" value={devis.email} onChange={(e) => setDevis({ ...devis, email: e.target.value })} />
                </FormGroup>
                <FormGroup label="Votre activité *">
                  <input required type="text" className="nea-input" placeholder="Plombier, boulanger, coach..." value={devis.activity} onChange={(e) => setDevis({ ...devis, activity: e.target.value })} />
                </FormGroup>
                <FormGroup label="Besoin *">
                  <select required className="nea-input nea-select" value={devis.need} onChange={(e) => setDevis({ ...devis, need: e.target.value })}>
                    <option value="">Choisir une prestation</option>
                    <option>Néa Strategy</option>
                    <option>Néa Content</option>
                    <option>Néa Web</option>
                    <option>Full Harmony (pack complet)</option>
                    <option>Autre / Je ne sais pas encore</option>
                  </select>
                </FormGroup>
                <FormGroup label="Votre projet">
                  <textarea className="nea-input nea-textarea" placeholder="Décrivez votre activité et ce que vous souhaitez améliorer..." value={devis.project} onChange={(e) => setDevis({ ...devis, project: e.target.value })} />
                </FormGroup>
                <button type="submit" disabled={state === "loading"} className="nea-btn nea-btn--fill w-full border-0 text-center disabled:cursor-wait disabled:opacity-70">
                  {state === "loading" ? "Envoi..." : "Envoyer ma demande →"}
                </button>
                {feedback ? (
                  <p className={`text-center text-[12px] leading-[1.6] ${state === "error" ? "text-red-700" : "text-olive"}`} role={state === "error" ? "alert" : "status"}>
                    {feedback}
                  </p>
                ) : (
                  <p className="text-center text-[12px] leading-[1.6] text-ink/45">Sans engagement · Réponse sous 48h</p>
                )}
              </form>
            )}

            {activeTab === "question" && (
              <form className="flex flex-col gap-5" onSubmit={(event) => submit("question", question, event)}>
                <FormGroup label="Prénom *">
                  <input required type="text" className="nea-input" placeholder="Marie" value={question.firstName} onChange={(e) => setQuestion({ ...question, firstName: e.target.value })} />
                </FormGroup>
                <FormGroup label="Email *">
                  <input required type="email" className="nea-input" placeholder="marie@exemple.fr" value={question.email} onChange={(e) => setQuestion({ ...question, email: e.target.value })} />
                </FormGroup>
                <FormGroup label="Sujet *">
                  <select required className="nea-input nea-select" value={question.subject} onChange={(e) => setQuestion({ ...question, subject: e.target.value })}>
                    <option value="">Choisir un sujet</option>
                    <option>Question sur un planner</option>
                    <option>Problème de téléchargement</option>
                    <option>Version personnalisée</option>
                    <option>Partenariat / Collaboration</option>
                    <option>Autre</option>
                  </select>
                </FormGroup>
                <FormGroup label="Message *">
                  <textarea required className="nea-input nea-textarea" placeholder="Votre question ou message..." value={question.message} onChange={(e) => setQuestion({ ...question, message: e.target.value })} />
                </FormGroup>
                <button type="submit" disabled={state === "loading"} className="nea-btn nea-btn--fill w-full border-0 text-center disabled:cursor-wait disabled:opacity-70">
                  {state === "loading" ? "Envoi..." : "Envoyer →"}
                </button>
                {feedback ? (
                  <p className={`text-center text-[12px] leading-[1.6] ${state === "error" ? "text-red-700" : "text-olive"}`} role={state === "error" ? "alert" : "status"}>
                    {feedback}
                  </p>
                ) : (
                  <p className="text-center text-[12px] leading-[1.6] text-ink/45">
                    Réponse sous 48h · <a href="mailto:contact.neadigital@gmail.com" className="underline hover:text-sand">contact.neadigital@gmail.com</a>
                  </p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* ── BAS DE PAGE : index numéroté, comme about ── */}
        <section className="px-8 py-20 md:px-16">
          <div className="mx-auto max-w-5xl border-t border-ink/12">
            {[
              { num: "01", tag: "Services pro", title: "Vous cherchez à développer votre visibilité en ligne ?", desc: "Stratégie, contenu, création de site : je m'occupe de tout. Devis gratuit, sans engagement.", href: "/services", cta: "Services →" },
              { num: "02", tag: "Boutique", title: "Vous cherchez un planner digital pour vous organiser ?", desc: "Planners, trackers, finance : des ressources pour gagner en clarté au quotidien.", href: "/shop", cta: "Boutique →" }
            ].map((block, i) => (
              <div key={block.num} className="nea-reveal nea-offer-row group border-b border-ink/12 py-10" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr_1.4fr_auto] md:items-center md:gap-8">
                  <span className="font-display text-[15px] font-extrabold text-sand">{block.num}</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-ink/45">{block.tag}</p>
                    <h2 className="font-display text-[18px] font-extrabold text-ink">{block.title}</h2>
                  </div>
                  <p className="text-[13px] leading-[1.7] text-ink/60">{block.desc}</p>
                  <a href={block.href} className="whitespace-nowrap font-display text-[11px] font-extrabold uppercase tracking-[0.06em] text-ink transition-colors group-hover:text-sand">
                    {block.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <style>{`
        .nea-input { width:100%; padding:12px 14px; border:1px solid rgba(227,54,62,0.2); border-radius:2px; font-family:'DM Sans',sans-serif; font-size:14px; color:#2B2320; background:#FFF8EC; transition:border-color 0.2s, box-shadow 0.2s; outline:none; }
        .nea-input:focus { border-color:#E3363E; box-shadow:0 0 0 3px rgba(227,54,62,0.12); }
        .nea-textarea { resize:vertical; min-height:110px; line-height:1.6; }
        .nea-select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237A7470' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 14px center; }
      `}</style>
    </>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink/50">{label}</label>
      {children}
    </div>
  );
}
