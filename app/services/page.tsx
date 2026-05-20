import type { Metadata } from "next";
import { Button } from "@/components/button";
import { FAQ } from "@/components/faq";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Services Néa Digital : stratégie, contenu, web et organisation."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="container-premium py-16">
        <p className="eyebrow mb-5 text-xs text-taupe">Services</p>
        <h1 className="display-title max-w-4xl text-3xl leading-tight text-ink md:text-5xl">Services pour clarifier ta stratégie digitale, ton organisation et ton site.</h1>
      </section>
      <section className="container-premium grid gap-5 pb-20 md:grid-cols-2">
        {services.map((service, index) => (
          <article key={service.name} className="rounded-[8px] bg-white p-8 shadow-line">
            <p className="eyebrow mb-10 text-xs text-taupe">0{index + 1}</p>
            <h2 className="editorial-title text-5xl text-ink">{service.name}</h2>
            <p className="mt-4 text-base leading-8 text-ink/64">{service.summary}</p>
            <ul className="mt-8 grid gap-3">
              {service.features.map((feature) => (
                <li key={feature} className="border-t border-ink/10 pt-3 text-sm text-ink/70">{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="bg-ink py-20 text-porcelain">
        <div className="container-premium grid gap-10 md:grid-cols-[1fr_.8fr]">
          <h2 className="display-title text-2xl leading-tight md:text-4xl">Un accompagnement en étapes, du diagnostic au plan d'action.</h2>
          <div className="space-y-5 text-porcelain/70">
            <p>Audit, priorités, plan d'action, puis suivi. Tu sais quoi corriger et dans quel ordre.</p>
            <Button href="/contact" variant="cream">Demander une consultation</Button>
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  );
}
