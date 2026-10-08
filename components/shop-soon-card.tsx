import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

const tints: Record<string, string> = {
  linen: "rgba(233, 226, 218, 0.82)",
  sand: "rgba(205, 187, 163, 0.82)",
  olive: "rgba(79, 80, 61, 0.82)"
};

/** Vignette « Prochainement », même format que ShopCard. */
export function ShopSoonCard({ product }: { product: Product }) {
  return (
    <Link href={product.href} className="focus-ring group block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-[6px] shadow-line transition duration-500 group-hover:-translate-y-1 group-hover:shadow-soft">
        <Image src="/images/contact-bg.jpg" alt="" fill sizes="(min-width: 1280px) 16vw, (min-width: 768px) 24vw, 46vw" className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: tints[product.accent] ?? tints.linen }} />
        <span className="absolute left-2 top-2 rounded-[3px] bg-ink px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-porcelain">
          Prochainement
        </span>
      </div>
      <div className="mt-3">
        <p className="eyebrow text-[10px] text-taupe">{product.category}</p>
        <h3 className="mt-1 text-sm font-medium leading-snug text-ink group-hover:underline group-hover:underline-offset-4">{product.name}</h3>
        <p className="mt-1 text-xs leading-5 text-ink/50">{product.summary}</p>
      </div>
    </Link>
  );
}
