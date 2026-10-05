"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  tone?: "light" | "dark";
};

export function CopyEmailButton({ email, tone = "dark" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Secours pour les navigateurs qui refusent l'API presse-papiers.
      const field = document.createElement("textarea");
      field.value = email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand("copy");
      } catch {
        // Rien de plus à faire : l'adresse reste visible à l'écran.
      }
      document.body.removeChild(field);
    }

    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "copy_email", page_path: window.location.pathname });

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  }

  const color = tone === "dark" ? "text-white/70 hover:text-white" : "text-[#5C564F] hover:text-[#1C1A1A]";

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 text-[12px] font-light underline underline-offset-4 transition-colors ${color}`}
      aria-live="polite"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? "Adresse copiée" : "Copier l'adresse e-mail"}
    </button>
  );
}
