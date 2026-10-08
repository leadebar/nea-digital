import type { Metadata } from "next";
import { ImprimablesList } from "@/components/imprimables-list";
import { NotifyMeForm } from "@/components/notify-me-form";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Planners et carnets imprimables en PDF : freelance, skincare, networking et contenu. Téléchargement immédiat, formats A4 et US Letter."
};

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <main className="container-premium py-16">
      <div className="max-w-3xl">
        <p className="eyebrow mb-5 text-xs text-taupe">Boutique</p>
        <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">Planners imprimables, à remplir à la main.</h1>
        <p className="mt-5 text-sm leading-7 text-ink/60">
          Quatre carnets en PDF à imprimer chez toi ou en imprimerie. Les textes et mises en page ont été réalisés avec des outils d'IA et relus par mes soins.
        </p>
      </div>

      <div className="mt-16">
        <ImprimablesList />
      </div>

      <section className="mt-28 border-t border-ink/10 pt-16">
        <p className="eyebrow mb-4 text-xs text-taupe">Bientôt</p>
        <h2 className="display-title text-2xl leading-tight text-ink md:text-3xl">La Méthode Néa, planners digitaux à venir.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
        <div className="mt-12 max-w-md rounded-[8px] bg-linen p-8">
          <p className="eyebrow mb-3 text-xs text-taupe">Aucune date encore fixée</p>
          <h3 className="text-lg font-medium text-ink">Sois prévenue dès l'ouverture.</h3>
          <div className="mt-6">
            <NotifyMeForm product="Boutique Néa Digital" />
          </div>
        </div>
      </section>

      <p className="mt-24 max-w-2xl text-xs leading-6 text-ink/40">
        Outils d'organisation personnelle. Ils ne constituent pas un avis médical, juridique, fiscal ou financier.
      </p>
    </main>
  );
}
