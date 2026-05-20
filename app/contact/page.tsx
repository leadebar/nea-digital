import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Néa Digital pour une question, une collaboration ou une consultation."
};

export default function ContactPage() {
  return (
    <main className="container-premium grid min-h-[78vh] items-center gap-12 py-16 md:grid-cols-[.8fr_1fr]">
      <div>
        <p className="eyebrow mb-5 text-xs text-taupe">Contact</p>
        <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">Contact pour une question ou une demande de service.</h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-ink/64">Écris pour une question sur une ressource, un partenariat ou une demande de service.</p>
        <div className="mt-8 grid gap-3 text-sm text-ink/70">
          <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@nea-digital.com</p>
          <p>TikTok · Pinterest</p>
        </div>
      </div>
      <form className="grid gap-4 rounded-[8px] bg-white p-6 shadow-line md:p-8">
        {["Nom", "Email", "Sujet"].map((label) => (
          <label key={label} className="grid gap-2 text-sm text-ink/70">
            {label}
            <input className="min-h-12 rounded-[8px] border border-ink/10 bg-porcelain px-4 outline-none focus:border-olive" />
          </label>
        ))}
        <label className="grid gap-2 text-sm text-ink/70">
          Message
          <textarea rows={6} className="rounded-[8px] border border-ink/10 bg-porcelain p-4 outline-none focus:border-olive" />
        </label>
        <button className="focus-ring min-h-12 rounded-[4px] bg-ink px-6 text-sm font-medium text-porcelain hover:bg-olive">Envoyer</button>
      </form>
    </main>
  );
}
