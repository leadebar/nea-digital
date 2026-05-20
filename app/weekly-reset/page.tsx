import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { FAQ } from "@/components/faq";
import { FreebieMockup } from "@/components/freebie-mockup";
import { LeadForm } from "@/components/lead-form";
import { MotionDiv, MotionSection, reveal } from "@/components/motion";
import { ProductCard } from "@/components/product-card";
import { weeklyResetFreebie } from "@/data/freebies";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "The Weekly Reset Checklist",
  description:
    "Télécharge The Weekly Reset Checklist, un freebie Néa Digital pour organiser ta semaine, clarifier tes priorités et améliorer ta productivité.",
  openGraph: {
    title: "The Weekly Reset Checklist | Néa Digital",
    description:
      "Un mini freebie premium pour remettre ta semaine au clair en 20 minutes.",
    url: "/weekly-reset"
  }
};

export default function WeeklyResetPage() {
  return (
    <main>
      <section className="container-premium grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 md:grid-cols-[.95fr_1.05fr]">
        <MotionDiv {...reveal}>
          <p className="eyebrow mb-5 text-xs text-taupe">{weeklyResetFreebie.eyebrow}</p>
          <h1 className="display-title text-balance text-3xl leading-tight text-ink md:text-5xl">
            {weeklyResetFreebie.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">{weeklyResetFreebie.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#weekly-reset-form">Recevoir le freebie</Button>
            <Button href="/shop" variant="light">Voir les ressources premium</Button>
          </div>
        </MotionDiv>
        <MotionDiv {...reveal}>
          <FreebieMockup />
        </MotionDiv>
      </section>

      <section className="bg-ink py-20 text-porcelain">
        <div className="container-premium grid gap-6 md:grid-cols-4">
          {weeklyResetFreebie.benefits.map((benefit) => (
            <MotionDiv key={benefit} {...reveal} className="border-t border-porcelain/14 pt-5">
              <Check className="mb-8 h-5 w-5 text-sand" />
              <p className="text-sm leading-7 text-porcelain/76">{benefit}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      <MotionSection {...reveal} className="container-premium py-24">
        <div className="grid gap-10 md:grid-cols-[.65fr_1fr]">
          <div>
            <p className="eyebrow mb-4 text-xs text-taupe">Aperçu</p>
            <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">
              Un reset court, utile, sans remplacer un planner complet.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {weeklyResetFreebie.preview.map((page, index) => (
              <div key={page.title} className="rounded-[8px] bg-white p-6 shadow-line">
                <span className="eyebrow text-[10px] text-taupe">Page {index + 1}</span>
                <h3 className="mt-6 text-lg font-medium text-ink">{page.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{page.text}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <section id="weekly-reset-form" className="bg-linen py-20 md:py-24">
        <div className="container-premium grid items-center gap-10 md:grid-cols-[.9fr_1fr]">
          <MotionDiv {...reveal}>
            <FreebieMockup compact />
          </MotionDiv>
          <MotionDiv {...reveal}>
            <p className="eyebrow mb-4 text-xs text-taupe">Téléchargement gratuit</p>
            <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">
              Reçois la checklist maintenant.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink/65">
              Entre ton email et accède au PDF. Simple, rapide, sans créer de compte.
            </p>
            <div className="mt-8 max-w-2xl">
              <LeadForm source="weekly-reset-page" />
            </div>
          </MotionDiv>
        </div>
      </section>

      <FAQ items={weeklyResetFreebie.faq} />

      <section className="bg-porcelain py-24">
        <div className="container-premium">
          <MotionDiv {...reveal} className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-6 h-6 w-6 text-olive" />
            <p className="eyebrow mb-4 text-xs text-taupe">Aller plus loin</p>
            <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">
              Le freebie donne le départ. Les ressources premium structurent la suite.
            </h2>
          </MotionDiv>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-porcelain/94 p-3 backdrop-blur md:hidden">
        <Link
          href="#weekly-reset-form"
          className="focus-ring flex min-h-12 items-center justify-center rounded-[4px] bg-ink px-5 text-sm font-medium text-porcelain"
        >
          Recevoir le freebie
        </Link>
      </div>
    </main>
  );
}
