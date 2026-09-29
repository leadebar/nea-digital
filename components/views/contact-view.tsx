"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Tab = "devis" | "question";
type FormState = "idle" | "loading" | "success" | "error";

const initialDevis = { firstName: "", lastName: "", email: "", activity: "", need: "", project: "" };
const initialQuestion = { firstName: "", email: "", subject: "", message: "" };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-sand">{children}</p>;
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
      <main className="bg-porcelain">

        {/* ── OUVERTURE : lettrine + infos, comme les autres pages ── */}
        <section className="px-8 pt-32 pb-16 md:px-16">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <p className="font-editorial text-[clamp(24px,3.4vw,36px)] font-normal leading-[1.35] text-ink">
              <span className="nea-dropcap">D</span>ites-m'en un peu plus sur votre projet ou votre question. Devis gratuit, réponse sous 48h ouvrées, sans engagement.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-[13px] text-ink/60">
              <a href="mailto:contact.neadigital@gmail.com" className="hover:text-sand">contact.neadigital@gmail.com</a>
              <a href="https://fr.pinterest.com/neadigitalpro/?actingBusinessId=1138425749465166573" target="_blank" rel="noopener noreferrer" className="hover:text-sand">Pinterest</a>
            </div>
          </div>
        </section>

        {/* ── FORMULAIRE ── */}
        <section className="border-t border-sand/25 px-8 py-20 md:px-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 flex gap-8 border-b border-sand/25">
              {[
                { id: "devis" as Tab, label: "Devis / Services" },
                { id: "question" as Tab, label: "Question / Planners" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setState("idle"); setFeedback(""); }}
                  className={`-mb-px border-b-2 pb-3 text-[12px] uppercase tracking-[0.1em] transition ${
                    activeTab === tab.id ? "border-sand text-ink" : "border-transparent text-ink/45 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "devis" && (
              <form className="flex flex-col gap-6" onSubmit={(event) => submit("devis", devis, event)}>
                <div className="grid grid-cols-2 gap-5">
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
                <button type="submit" disabled={state === "loading"} className="nea-submit disabled:cursor-wait disabled:opacity-70">
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
              <form className="flex flex-col gap-6" onSubmit={(event) => submit("question", question, event)}>
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
                <button type="submit" disabled={state === "loading"} className="nea-submit disabled:cursor-wait disabled:opacity-70">
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

        {/* ── BAS DE PAGE : deux liens éditoriaux, comme les autres pages ── */}
        <div className="border-t border-sand/25 px-8 py-20 md:px-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-14 md:grid-cols-2">
            <div className="nea-reveal">
              <Eyebrow>Services pro</Eyebrow>
              <h2 className="font-editorial text-[clamp(20px,2.4vw,28px)] font-normal leading-[1.25] text-ink">
                Vous cherchez à développer votre visibilité en ligne ?
              </h2>
              <p className="mt-4 text-[13px] leading-[1.75] text-ink/65">Stratégie, contenu, création de site : je m'occupe de tout. Devis gratuit, sans engagement.</p>
              <a href="/services" className="nea-link mt-5 inline-block">Voir les services →</a>
            </div>

            <div className="nea-reveal md:border-l md:border-sand/25 md:pl-14">
              <Eyebrow>Boutique</Eyebrow>
              <h2 className="font-editorial text-[clamp(20px,2.4vw,28px)] font-normal leading-[1.25] text-ink">
                Vous cherchez un planner digital pour vous organiser ?
              </h2>
              <p className="mt-4 text-[13px] leading-[1.75] text-ink/65">Planners, trackers, finance : des ressources pour gagner en clarté au quotidien.</p>
              <a href="/shop" className="nea-link mt-5 inline-block">Voir la boutique →</a>
            </div>
          </div>
        </div>

      </main>

      <style>{`
        .nea-input { width:100%; padding:12px 14px; border:1px solid rgba(181,80,46,0.25); border-radius:2px; font-family:'Inter',sans-serif; font-size:14px; color:#3A2A20; background:#FBF3E7; transition:border-color 0.2s, box-shadow 0.2s; outline:none; }
        .nea-input:focus { border-color:#B5502E; box-shadow:0 0 0 3px rgba(181,80,46,0.12); }
        .nea-textarea { resize:vertical; min-height:110px; line-height:1.6; }
        .nea-select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238C6B52' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 14px center; }

        .nea-submit { width:100%; background:transparent; border:1px solid #3A2A20; color:#3A2A20; font-family:'Inter',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:14px; cursor:pointer; transition:background 0.3s, color 0.3s; }
        .nea-submit:hover { background:#3A2A20; color:#FBF3E7; }
      `}</style>
    </>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-[0.1em] text-taupe">{label}</label>
      {children}
    </div>
  );
}
