import type { Metadata } from "next";
import Link from "next/link";
import { ShopCard } from "@/components/shop-card";
import { categories, imprimables } from "@/data/imprimables";
import { NotifyMeForm } from "@/components/notify-me-form";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Planners et carnets imprimables en PDF : freelance, skincare, networking et contenu. Téléchargement immédiat, formats A4 et US Letter."
};

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<{ categorie?: string }> };

export default async function ShopPage({ searchParams }: Props) {
  const { categorie } = await searchParams;
  const active = categories.find((c) => c.slug === categorie)?.slug;
  const items = active ? imprimables.filter((p) => p.categorie === active) : imprimables;
  const tabs = [{ slug: "", label: "Tout" }, ...categories.filter((c) => imprimables.some((p) => p.categorie === c.slug))];

  return (
    <main className="container-premium py-12 md:py-14">
      <div className="max-w-3xl">
        <p className="eyebrow mb-4 text-xs text-taupe">Boutique</p>
        <h1 className="display-title text-2xl leading-tight text-ink md:text-4xl">Planners imprimables, à remplir à la main.</h1>
        <p className="mt-4 text-sm leading-7 text-ink/60">
          Des carnets en PDF à imprimer chez toi ou en imprimerie.
        </p>
      </div>

      <nav aria-label="Catégories" className="mt-8 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = (active ?? "") === tab.slug;
          return (
            <Link
              key={tab.slug || "tout"}
              href={tab.slug ? `/shop?categorie=${tab.slug}` : "/shop"}
              aria-current={isActive ? "page" : undefined}
              className={`focus-ring rounded-full border px-4 py-1.5 text-xs transition ${
                isActive ? "border-ink bg-ink text-porcelain" : "border-ink/15 text-ink/70 hover:border-ink/40"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((p) => <ShopCard key={p.slug} p={p} />)}
      </div>

      <section className="mt-20 border-t border-ink/10 pt-12">
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
