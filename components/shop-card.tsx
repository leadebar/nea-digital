import Image from "next/image";
import Link from "next/link";
import { categories, type Imprimable } from "@/data/imprimables";

export function ShopCard({ p }: { p: Imprimable }) {
  const categorie = categories.find((c) => c.slug === p.categorie)?.label;

  return (
    <Link href={`/shop/${p.slug}`} className="focus-ring group block">
      <div className="overflow-hidden rounded-[6px] bg-linen shadow-line transition duration-500 group-hover:-translate-y-1 group-hover:shadow-soft">
        <Image
          src={`/resources/imprimables/${p.slug}.jpg`}
          alt={`${p.title}, couverture`}
          width={800}
          height={1200}
          sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 19vw, (min-width: 768px) 24vw, (min-width: 640px) 30vw, 46vw"
          className="aspect-[2/3] h-auto w-full object-cover"
        />
      </div>
      <div className="mt-3">
        {categorie ? <p className="eyebrow text-[10px] text-taupe">{categorie}</p> : null}
        <h2 className="mt-1 text-sm font-medium leading-snug text-ink group-hover:underline group-hover:underline-offset-4">{p.title}</h2>
        <p className="mt-1 text-xs leading-5 text-ink/50">{p.subtitle}</p>
        <p className="mt-2 text-sm text-ink">{p.price !== null ? `${p.price} €` : "Bientôt"}</p>
      </div>
    </Link>
  );
}
