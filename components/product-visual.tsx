import Image from "next/image";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[8px]", large ? "aspect-[4/5]" : "aspect-[4/3]")}>
      <Image src={product.cardImage} alt={product.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-4">
        <span className="rounded-[4px] bg-white/90 px-3 py-1.5 text-[10px] font-medium tracking-[0.08em] uppercase text-ink backdrop-blur">
          {product.category}
        </span>
        {product.comingSoon ? (
          <span className="rounded-[4px] bg-ink px-3 py-1.5 text-[10px] font-medium tracking-[0.1em] uppercase text-porcelain">
            Prochainement
          </span>
        ) : null}
      </div>
    </div>
  );
}
