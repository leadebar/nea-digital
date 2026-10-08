import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImprimableDetail } from "@/components/imprimables-list";
import { categories, imprimables } from "@/data/imprimables";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = imprimables.find((item) => item.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: `${p.title} : ${p.subtitle}. PDF à imprimer, formats A4 et US Letter, téléchargement immédiat.`
  };
}

export default async function ImprimablePage({ params }: Props) {
  const { slug } = await params;
  const p = imprimables.find((item) => item.slug === slug);
  if (!p) notFound();
  const categorie = categories.find((c) => c.slug === p.categorie);

  return (
    <main className="container-premium py-12 md:py-16">
      <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-ink/50">
        <Link href="/shop" className="underline-offset-4 hover:underline">Boutique</Link>
        {categorie ? (
          <>
            <span className="mx-2">/</span>
            <Link href={`/shop?categorie=${categorie.slug}`} className="underline-offset-4 hover:underline">{categorie.label}</Link>
          </>
        ) : null}
      </nav>
      <ImprimableDetail p={p} />
      <p className="mt-16 max-w-2xl text-xs leading-6 text-ink/40">
        Outils d'organisation personnelle. Ils ne constituent pas un avis médical, juridique, fiscal ou financier. Les textes et mises en page ont été réalisés avec des outils d'IA et relus par mes soins.
      </p>
    </main>
  );
}
