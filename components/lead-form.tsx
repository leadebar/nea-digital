"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  source: string;
  buttonLabel?: string;
  redirectTo?: string;
  compact?: boolean;
  className?: string;
};

type FormState = "idle" | "loading" | "success" | "error";

export function LeadForm({
  source,
  buttonLabel = "Recevoir le freebie",
  redirectTo = "/download-success",
  compact = false,
  className
}: LeadFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setState("error");
      setMessage("Entre une adresse email pour recevoir le freebie.");
      return;
    }

    if (!consent) {
      setState("error");
      setMessage("Coche la case pour recevoir le freebie et les emails Néa Digital.");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, consent })
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Impossible d'enregistrer l'inscription.");
      }

      setState("success");
      setMessage("C'est prêt. Le téléchargement s'ouvre dans un instant.");
      window.setTimeout(() => router.push(redirectTo), 650);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue. Réessaie dans un instant.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("rounded-[8px] border border-ink/10 bg-porcelain p-3 shadow-line", className)}
    >
      <div className={cn("grid gap-3", compact ? "sm:grid-cols-[1fr_auto]" : "lg:grid-cols-[1fr_auto]")}>
        <label className="sr-only" htmlFor={`${source}-email`}>
          Adresse email
        </label>
        <input
          id={`${source}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="ton@email.com"
          className="focus-ring min-h-12 rounded-[4px] border border-transparent bg-white px-4 text-sm text-ink outline-none placeholder:text-ink/38"
          aria-invalid={state === "error"}
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-[4px] border border-ink bg-ink px-6 text-sm font-medium text-porcelain transition duration-300 hover:border-olive hover:bg-olive disabled:cursor-wait disabled:opacity-70"
        >
          {state === "loading" ? "Envoi..." : state === "success" ? "C'est prêt" : buttonLabel}
        </button>
      </div>
      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-ink/58">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-ink/20 accent-olive"
          disabled={state === "loading"}
        />
        <span>J'accepte de recevoir le freebie et les emails Néa Digital. Désinscription possible à tout moment.</span>
      </label>
      {message ? (
        <p
          className={cn(
            "mt-4 rounded-[4px] px-4 py-3 text-sm",
            state === "success" ? "bg-olive/10 text-olive" : "bg-sand/25 text-ink"
          )}
          role={state === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
