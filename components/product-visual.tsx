import Image from "next/image";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

// Teinte neutre par accent, en attendant les vrais visuels de chaque produit.
// Pas de photo littérale du produit : juste une texture papier + un voile de couleur.
const accentTints: Record<string, string> = {
  linen: "rgba(233, 226, 218, 0.82)",
  sand: "rgba(205, 187, 163, 0.82)",
  olive: "rgba(79, 80, 61, 0.82)"
};

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  const tint = accentTints[product.accent] ?? accentTints.linen;

  return (
    <div className={cn("relative overflow-hidden rounded-[8px]", large ? "aspect-[4/5]" : "aspect-[4/3]")}>
      <Image src="/images/contact-bg.jpg" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ backgroundColor: tint }} />
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
