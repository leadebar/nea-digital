import { Sparkles, Layers, Palette, TrendingUp } from "lucide-react";
import { Button } from "@/components/button";
import { BlogCard } from "@/components/blog-card";
import { BrandShowcase } from "@/components/editorial-visual";
import { FAQ } from "@/components/faq";
import { MotionDiv, reveal } from "@/components/motion";
import { Newsletter } from "@/components/newsletter";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { services } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="container-premium grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 md:grid-cols-[1.05fr_.95fr]">
        <MotionDiv {...reveal}>
          <p className="eyebrow mb-5 text-xs text-taupe">Organisation digitale · Productivité · Finances</p>
          <h1 className="display-title max-w-xl text-balance text-3xl leading-tight text-ink md:text-4xl">
            Organisation digitale simple et claire.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
            Planners digitaux, templates et ressources pour suivre tes projets, ta productivité et tes finances personnelles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/shop">Voir la boutique</Button>
            <Button href="/services" variant="light">Découvrir les services</Button>
          </div>
        </MotionDiv>
        <MotionDiv {...reveal}>
          <BrandShowcase />
        </MotionDiv>
      </section>

      <section className="bg-ink py-24 text-porcelain">
        <div className="container-premium grid gap-10 md:grid-cols-[.75fr_1fr]">
          <p className="editorial-title text-4xl leading-none text-sand md:text-5xl">Organisation digitale simple et utile.</p>
          <div>
            <p className="text-xl leading-9 md:text-2xl">Néa Digital rassemble des ressources digitales pour planifier, prioriser et suivre ce qui compte.</p>
            <p className="mt-6 text-porcelain/62">L’objectif : gagner du temps et garder une organisation lisible.</p>
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <SectionHeading
          eyebrow="Boutique"
          title="Les ressources Néa Digital."
          text="Planners digitaux, templates d'organisation, productivité et finances personnelles."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="bg-linen py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Services" title="Services d'organisation digitale, stratégie et optimisation web." />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="rounded-[8px] bg-porcelain p-6 shadow-line">
                <Sparkles className="mb-10 h-5 w-5 text-olive" />
                <h3 className="editorial-title text-3xl text-ink">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium grid gap-8 py-24 md:grid-cols-5">
        {[
          ["Clarté", Layers],
          ["Cohérence", Palette],
          ["Structure", Sparkles],
          ["Design", Palette],
          ["Stratégie", TrendingUp]
        ].map(([label, Icon]) => (
          <div key={label as string} className="border-t border-ink/12 pt-5">
            <Icon className="mb-8 h-5 w-5 text-taupe" />
            <p className="editorial-title text-4xl text-ink">{label as string}</p>
          </div>
        ))}
      </section>

      <section className="bg-porcelain py-24">
        <div className="container-premium grid items-end gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4 text-xs text-taupe">Résultat</p>
            <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">Une organisation qui aide à décider plus vite chaque semaine.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Offres claires", "Actions priorisées", "Suivi régulier"].map((item) => (
              <div key={item} className="rounded-[8px] bg-white p-6 shadow-line">
                <p className="text-lg font-medium text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <SectionHeading eyebrow="Blog" title="Articles SEO sur organisation digitale, productivité et marketing digital." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>

      <Newsletter />
      <FAQ />
    </main>
  );
}
