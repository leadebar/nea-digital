import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const accents: Record<string, string> = {
  linen: "bg-linen text-ink",
  sand: "bg-sand text-ink",
  olive: "bg-olive text-porcelain"
};

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={cn("relative flex flex-col justify-between overflow-hidden rounded-[8px] p-7", large ? "aspect-[4/5]" : "aspect-[4/3]", accents[product.accent])}>
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow text-[10px] opacity-60">{product.category}</span>
        {product.comingSoon ? (
          <span className="rounded-[4px] bg-ink px-3 py-1.5 text-[10px] font-medium tracking-[0.1em] uppercase text-porcelain">
            Prochainement
          </span>
        ) : null}
      </div>
      <div>
        <span className="mb-4 block h-px w-10 bg-current opacity-40" />
        <p className={cn("editorial-title leading-[0.95]", large ? "text-5xl" : "text-4xl")}>{product.name}</p>
        <p className="mt-3 text-sm opacity-70">{product.summary}</p>
      </div>
    </div>
  );
}
