import { ImprimableGallery } from "@/components/ImprimableGallery";
import { imprimables } from "@/data/imprimables";
import { stripeConfigured } from "@/lib/stripe";

export function ImprimablesList() {
  return (
      <div className="space-y-24">
        {imprimables.map((p, index) => (
          <article key={p.slug} className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <ImprimableGallery slug={p.slug} title={p.title} />
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
                {p.price !== null && stripeConfigured() ? (
                  <form method="post" action="/api/imprimables/checkout">
                    <input type="hidden" name="slug" value={p.slug} />
                    <button type="submit" className="focus-ring rounded-[4px] bg-ink px-6 py-3 text-sm text-porcelain transition hover:bg-olive">Acheter</button>
                  </form>
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
  );
}
