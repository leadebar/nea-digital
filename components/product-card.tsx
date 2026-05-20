import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductVisual } from "@/components/product-visual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={product.href} className="group block overflow-hidden rounded-[8px] bg-white shadow-line transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <ProductVisual product={product} />
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="eyebrow text-[11px] text-taupe">{product.category}</p>
          <p className="text-sm text-ink/60">{product.price}</p>
        </div>
        <h3 className="editorial-title text-3xl text-ink">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/62">{product.summary}</p>
        <span className="mt-6 inline-flex border-b border-olive pb-1 text-sm font-medium text-olive">Voir la ressource</span>
      </div>
    </Link>
  );
}
