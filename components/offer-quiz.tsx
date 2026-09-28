"use client";

import { useState } from "react";
import { StrategyIcon, ContentIcon, WebIcon, HarmonyIcon } from "@/components/offer-icons";
import { offers, fullHarmony } from "@/data/site";

type Key = "strategy" | "content" | "web";
type Score = Record<Key, number>;

type Option = {
  label: string;
  score?: Partial<Score>;
  harmony?: true;
};

type Question = {
  prompt: string;
  options: Option[];
};

const questions: Question[] = [
  {
    prompt: "Quel est votre principal besoin aujourd'hui ?",
    options: [
      { label: "Savoir où j'en suis et quoi faire en premier", score: { strategy: 3 } },
      { label: "Publier du contenu régulièrement sans y passer mes soirées", score: { content: 3 } },
      { label: "Un site qui donne envie de me contacter", score: { web: 3 } },
      { label: "Être accompagné·e sur tout, du site à la communication", harmony: true }
    ]
  },
  {
    prompt: "Où en est votre site aujourd'hui ?",
    options: [
      { label: "Je n'en ai pas encore", score: { web: 2 } },
      { label: "Il existe mais ne me ressemble plus", score: { web: 2 } },
      { label: "Il fonctionne bien, ce n'est pas la priorité", score: { strategy: 1, content: 1 } }
    ]
  },
  {
    prompt: "Qu'est-ce qui vous ferait gagner le plus de temps ?",
    options: [
      { label: "Ne plus avoir à écrire moi-même", score: { content: 2 } },
      { label: "Avoir un plan clair à suivre", score: { strategy: 2 } },
      { label: "Ne plus avoir à penser à tout ça", harmony: true }
    ]
  }
];

const offerByKey = Object.fromEntries(offers.map((o) => [o.key, o]));
const offerIcons = { strategy: StrategyIcon, content: ContentIcon, web: WebIcon } as const;

export function OfferQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState<Score>({ strategy: 0, content: 0, web: 0 });
  const [forceHarmony, setForceHarmony] = useState(false);
  const [done, setDone] = useState(false);

  const answer = (opt: Option) => {
    if (opt.harmony) setForceHarmony(true);
    if (opt.score) {
      setScore((prev) => ({
        strategy: prev.strategy + (opt.score?.strategy ?? 0),
        content: prev.content + (opt.score?.content ?? 0),
        web: prev.web + (opt.score?.web ?? 0)
      }));
    }
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setStep(0);
    setScore({ strategy: 0, content: 0, web: 0 });
    setForceHarmony(false);
    setDone(false);
  };

  const entries = Object.entries(score) as [Key, number][];
  const max = Math.max(...entries.map(([, v]) => v));
  const top = entries.filter(([, v]) => v === max).map(([k]) => k);
  const isHarmony = forceHarmony || top.length >= 2 || max === 0;
  const winningKey = top[0] ?? "strategy";
  const ResultIcon = isHarmony ? HarmonyIcon : offerIcons[winningKey];

  return (
    <div className="nea-reveal mx-auto max-w-2xl rounded-[8px] bg-white p-9 md:p-12 shadow-[0_30px_80px_rgba(28,26,26,0.06)]">
      {!done ? (
        <>
          <div className="mb-8 flex items-center gap-2">
            {questions.map((_, i) => (
              <span
                key={i}
                className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-[#B08D57]" : "bg-[#EDE8DF]"}`}
              />
            ))}
          </div>
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57] mb-4">
            Question {step + 1} / {questions.length}
          </p>
          <h3 className="text-[22px] md:text-[26px] text-[#1C1A1A] mb-8 leading-[1.25]" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }}>
            {questions[step].prompt}
          </h3>
          <div className="flex flex-col gap-3">
            {questions[step].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => answer(opt)}
                className="group flex items-center justify-between gap-4 rounded-[4px] border border-[#EDE8DF] px-5 py-4 text-left text-[14px] text-[#1C1A1A] transition-all duration-250 hover:border-[#B08D57] hover:bg-[#F5F1EB]"
              >
                {opt.label}
                <span className="shrink-0 text-[#B08D57] opacity-0 transition-opacity duration-250 group-hover:opacity-100">→</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <ResultIcon className="mx-auto w-10 h-10 text-[#B08D57] mb-5" />
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#B08D57] mb-3">
            {isHarmony ? "On vous recommande" : "L'offre qui vous correspond"}
          </p>
          <h3 className="text-[26px] md:text-[32px] text-[#1C1A1A] mb-4" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }}>
            {isHarmony ? fullHarmony.name : offerByKey[winningKey].title}
          </h3>
          <p className="text-[14px] text-[#7A7470] leading-[1.8] max-w-md mx-auto mb-8">
            {isHarmony ? fullHarmony.desc : offerByKey[winningKey].tagline}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="nea-btn-fill bg-[#1C1A1A] text-white"><span>Demander un devis</span></a>
            <button onClick={restart} className="nea-btn-ghost"><span>Refaire le test</span></button>
          </div>
        </div>
      )}
    </div>
  );
}
