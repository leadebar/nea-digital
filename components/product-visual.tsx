import type { Product } from "@/data/products";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

const accents: Record<string, string> = {
  linen: "bg-linen text-ink",
  sand: "bg-sand text-ink",
  olive: "bg-olive text-porcelain"
};

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[8px] p-5 shadow-line", large ? "aspect-[4/5]" : "aspect-[4/3]", accents[product.accent])}>
      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
        <BrandLogo tone={product.accent === "olive" ? "sand" : "dark"} className="h-7" />
        <span className="eyebrow text-[10px] opacity-70">{product.category}</span>
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-[8px] bg-porcelain/88 p-5 text-ink shadow-soft backdrop-blur">
        <p className="eyebrow mb-4 text-[10px] text-taupe">Ressource digitale</p>
        <p className="editorial-title text-4xl leading-none">{product.name}</p>
        <div className="mt-5 grid gap-2">
          {product.includes.slice(0, large ? 5 : 3).map((item) => (
            <span key={item} className="rounded-[4px] border border-ink/10 px-3 py-2 text-xs text-ink/65">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
