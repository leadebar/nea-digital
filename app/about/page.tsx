import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l'approche de Néa Digital."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="Une marque de ressources digitales pour organiser son quotidien et ses projets."
        text="Néa Digital crée des planners digitaux, templates et ressources pour mieux gérer ses priorités, ses finances et ses idées."
      />
      <section className="container-premium grid gap-12 py-20 md:grid-cols-[.7fr_1fr]">
        <p className="editorial-title text-4xl leading-none text-olive md:text-5xl">Organisation digitale, productivité et clarté.</p>
        <div className="space-y-8 text-lg leading-9 text-ink/68">
          <p>La marque s'adresse aux créatrices, indépendantes et petites marques qui veulent une organisation plus claire.</p>
          <p>L'approche : des outils simples, une identité cohérente et des actions faciles à suivre.</p>
          <p>Le but : gagner du temps, publier avec régularité et améliorer la conversion.</p>
        </div>
      </section>
      <section className="bg-linen py-24">
        <div className="container-premium grid gap-6 md:grid-cols-4">
          {["Clarté", "Design utile", "Régularité", "Croissance"].map((value) => (
            <div key={value} className="rounded-[8px] bg-porcelain p-7 shadow-line">
              <p className="editorial-title text-4xl text-ink">{value}</p>
              <p className="mt-4 text-sm leading-7 text-ink/60">Une priorité concrète dans chaque ressource.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
