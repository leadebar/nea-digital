import { ProductJsonLd } from "@/components/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImprimableDetail } from "@/components/imprimables-list";
import { categories, imprimables } from "@/data/imprimables";
import { posts } from "@/data/posts";

export const dynamic = "force-dynamic";

const seo: Record<string, { title: string; description: string }> = {
  "freelance-tracker": {
    title: "Suivi de revenus freelance imprimable (PDF)",
    description: "Suivi de factures, dépenses et budget pour revenus irréguliers, avec calcul du tarif minimum. PDF imprimable A4 et US Letter, téléchargement immédiat."
  },
  "skincare-journal": {
    title: "Journal skincare imprimable (PDF)",
    description: "Fiches d'avis produits, étagère de produits avec dates d'ouverture et suivi hebdomadaire de la peau. PDF imprimable A4 et US Letter."
  },
  "networking-planner": {
    title: "Planner de networking imprimable (PDF)",
    description: "Modèles de messages, journal de contacts et plans d'action hebdomadaires pour préparer cafés et relances. PDF imprimable A4 et US Letter."
  },
  "social-media-planner": {
    title: "Planner contenu 90 jours imprimable (PDF)",
    description: "Banque d'idées, pages de légendes, formules d'accroche et plans hebdomadaires pour planifier 90 jours de publications. PDF imprimable A4 et US Letter."
  }
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = imprimables.find((item) => item.slug === slug);
  if (!p) return {};
  return {
    title: seo[slug]?.title ?? p.title,
    alternates: { canonical: `/shop/${slug}` },
    description: seo[slug]?.description ?? `${p.title} : ${p.subtitle}. PDF à imprimer, formats A4 et US Letter, téléchargement immédiat.`
  };
}

export default async function ImprimablePage({ params }: Props) {
  const { slug } = await params;
  const p = imprimables.find((item) => item.slug === slug);
  if (!p) notFound();
  const categorie = categories.find((c) => c.slug === p.categorie);
  const guide = posts.find((post) => post.productSlug === p.slug);

  return (
    <main className="container-premium py-12 md:py-16">
      {p.price !== null ? (
        <ProductJsonLd
          slug={p.slug}
          name={seo[slug]?.title ?? p.title}
          description={seo[slug]?.description ?? p.pitch}
          price={p.price}
        />
      ) : null}
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
      {guide ? (
        <p className="mt-12 text-sm text-ink/60">
          Pour aller plus loin : <Link href={`/blog/${guide.slug}`} className="text-olive underline underline-offset-4 hover:text-ink">{guide.title}</Link>
        </p>
      ) : null}
      <p className="mt-16 max-w-2xl text-xs leading-6 text-ink/40">
        Outils d'organisation personnelle. Ils ne constituent pas un avis médical, juridique, fiscal ou financier.
      </p>
    </main>
  );
}
