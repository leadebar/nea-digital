import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Planners digitaux, templates et ressources Néa Digital."
};

export default function ShopPage() {
  const filters = ["Tous", "Planners", "Templates", "Ressources", "Finance"];

  return (
    <main className="container-premium py-16">
      <div className="max-w-3xl">
        <p className="eyebrow mb-5 text-xs text-taupe">Boutique</p>
        <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">Boutique de planners digitaux, templates et ressources d'organisation.</h1>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} className="focus-ring rounded-[4px] border border-ink/10 px-5 py-3 text-sm text-ink/70 hover:bg-linen">{filter}</button>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </main>
  );
}
