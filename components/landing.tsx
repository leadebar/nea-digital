import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/button";
import { Newsletter } from "@/components/newsletter";
import { ProductVisual } from "@/components/product-visual";
import { Product } from "@/data/products";

export function ProductLanding({
  product,
  theme,
  promise,
  outcomes
}: {
  product: Product;
  theme: string;
  promise: string;
  outcomes: string[];
}) {
  return (
    <main>
      <section className="container-premium grid min-h-[82vh] items-center gap-10 py-12 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow mb-5 text-xs text-taupe">{theme}</p>
          <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">{product.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/65">{promise}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/58">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">{product.ctaLabel}</Button>
            <Button href="#details" variant="light">Voir les fichiers inclus</Button>
          </div>
        </div>
        {product.heroVisual ? (
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-linen shadow-soft">
            <Image src={product.heroVisual} alt="" fill priority sizes="(min-width: 768px) 48vw, 100vw" className="object-cover" />
          </div>
        ) : (
          <ProductVisual product={product} large />
        )}
      </section>

      <section className="bg-ink py-20 text-porcelain">
        <div className="container-premium grid gap-6 md:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item} className="rounded-[8px] border border-porcelain/12 p-6">
              <Check className="mb-8 h-5 w-5 text-sand" />
              <p className="text-xl leading-8">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="details" className="container-premium py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-xs text-taupe">Détails</p>
          <h2 className="display-title text-2xl text-ink md:text-4xl">{product.headline}</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[8px] bg-white p-6 shadow-line">
            <p className="eyebrow mb-5 text-[11px] text-taupe">Inclus</p>
            <div className="grid gap-3">
              {product.includes.map((item) => (
                <p key={item} className="border-t border-ink/10 pt-3 text-sm text-ink/70">{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] bg-white p-6 shadow-line">
            <p className="eyebrow mb-5 text-[11px] text-taupe">Formats</p>
            <div className="grid gap-3">
              {product.formats.map((item) => (
                <p key={item} className="border-t border-ink/10 pt-3 text-sm text-ink/70">{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] bg-white p-6 shadow-line">
            <p className="eyebrow mb-5 text-[11px] text-taupe">Pour qui</p>
            <div className="grid gap-3">
              {product.audience.map((item) => (
                <p key={item} className="border-t border-ink/10 pt-3 text-sm text-ink/70">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {product.gallery?.length ? (
        <section className="container-premium pb-24">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-4 text-xs text-taupe">Aperçu</p>
            <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">Un aperçu des fichiers et des pages incluses.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {product.gallery.map((src) => (
              <div key={src} className="relative aspect-[3/2] overflow-hidden rounded-[8px] bg-linen shadow-line">
                <Image src={src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <section className="bg-linen py-20">
        <div className="container-premium grid gap-8 md:grid-cols-[.8fr_1fr]">
          <div>
            <p className="eyebrow mb-4 text-xs text-taupe">Questions</p>
            <h2 className="display-title text-2xl text-ink md:text-4xl">Tout ce qu'il faut savoir avant de commander.</h2>
          </div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {product.faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none text-lg font-medium text-ink">{item.question}</summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
      <div className="fixed inset-x-4 bottom-4 z-30 md:hidden">
        <Button href="/contact">Commander {product.price}</Button>
      </div>
    </main>
  );
}
