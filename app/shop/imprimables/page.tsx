import type { Metadata } from "next";
import Image from "next/image";
import { imprimables } from "@/data/imprimables";

export const metadata: Metadata = {
  title: "Planners imprimables",
  description: "Quatre planners et carnets imprimables en PDF : freelance, skincare, networking et contenu. Téléchargement immédiat, formats A4 et US Letter."
};

export default function ImprimablesPage() {
  return (
    <main className="container-premium py-16">
      <div className="max-w-3xl">
        <p className="eyebrow mb-5 text-xs text-taupe">Boutique</p>
        <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">Planners imprimables, à remplir à la main.</h1>
        <p className="mt-5 text-sm leading-7 text-ink/60">
          Quatre carnets en PDF à imprimer chez toi ou en imprimerie. Les textes et mises en page ont été réalisés avec des outils d'IA et relus par mes soins.
        </p>
      </div>

      <div className="mt-16 space-y-24">
        {imprimables.map((p, index) => (
          <article key={p.slug} className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <Image
                src={`/resources/imprimables/${p.slug}-mockup.jpg`}
                alt={`${p.title} en situation`}
                width={1200}
                height={1200}
                className="h-auto w-full rounded-[8px] shadow-line"
              />
            </div>
            <div>
              <p className="eyebrow text-[11px]" style={{ color: p.accent }}>PDF imprimable, {p.pages} pages</p>
              <h2 className="editorial-title mt-3 text-4xl text-ink">{p.title}</h2>
              <p className="mt-1 text-sm text-ink/50">{p.subtitle}</p>
              <p className="mt-5 text-sm leading-7 text-ink/65">{p.pitch}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/70">
                {p.inside.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none" style={{ background: p.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-ink/45">Fichiers A4 et US Letter inclus. Téléchargement immédiat, rien n'est expédié.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {p.price !== null ? <span className="text-xl font-medium text-ink">{p.price} €</span> : null}
                {p.buyUrl ? (
                  <a href={p.buyUrl} className="focus-ring rounded-[4px] bg-ink px-6 py-3 text-sm text-porcelain transition hover:bg-olive">Acheter</a>
                ) : (
                  <span className="rounded-[4px] border border-ink/10 px-6 py-3 text-sm text-ink/40">Bientôt disponible</span>
                )}
                {p.etsyUrl ? (
                  <a href={p.etsyUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-olive underline underline-offset-4">Voir sur Etsy</a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-24 max-w-2xl text-xs leading-6 text-ink/40">
        Outils d'organisation personnelle. Ils ne constituent pas un avis médical, juridique, fiscal ou financier.
      </p>
    </main>
  );
}
