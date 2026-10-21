import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQ } from "@/components/faq";
import { posts } from "@/data/posts";
import { secteurs } from "@/data/secteurs";

type Props = { params: Promise<{ secteur: string }> };

export function generateStaticParams() {
  return secteurs.map((s) => ({ secteur: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { secteur } = await params;
  const s = secteurs.find((x) => x.slug === secteur);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.metaTitle} | Néa Digital`,
      description: s.metaDescription,
      url: `https://www.neadigital.fr/services/${s.slug}`
    }
  };
}

export default async function SecteurPage({ params }: Props) {
  const { secteur } = await params;
  const s = secteurs.find((x) => x.slug === secteur);
  if (!s) notFound();
  const articles = s.articles.map((slug) => posts.find((p) => p.slug === slug)).filter((p) => !!p);
  const autres = secteurs.filter((x) => x.slug !== s.slug);
  const url = `https://www.neadigital.fr/services/${s.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.metaTitle,
      description: s.metaDescription,
      url,
      provider: { "@id": "https://www.neadigital.fr/#organization" },
      areaServed: { "@type": "Country", name: "France" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.neadigital.fr" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.neadigital.fr/services" },
        { "@type": "ListItem", position: 3, name: s.nom, item: url }
      ]
    }
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-[#F5F1EB] px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-ink/50">
            <Link href="/services" className="underline-offset-4 hover:underline">Services</Link>
            <span className="mx-2">/</span>
            <span>{s.nom}</span>
          </nav>
          <h1 className="display-title text-4xl leading-[1.05] text-ink md:text-6xl">{s.h1}</h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-8 text-ink/70">{s.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-[2px] bg-[#1C1A1A] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#B08D57]">
              Demander mon diagnostic offert
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="display-title mb-10 text-2xl text-ink md:text-4xl">Ce qui fait perdre des clients.</h2>
          <div className="grid gap-px bg-[#EDE8DF] md:grid-cols-3">
            {s.problemes.map((p) => (
              <div key={p.titre} className="bg-white p-8">
                <span className="mb-4 block h-[2px] w-8 bg-[#B08D57]" />
                <h3 className="mb-2 text-lg font-semibold text-ink">{p.titre}</h3>
                <p className="text-sm leading-7 text-ink/65">{p.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="display-title mb-10 text-2xl text-ink md:text-4xl">Ce que je mets en place.</h2>
          <div className="grid gap-0.5 md:grid-cols-2">
            {s.actions.map((a) => (
              <div key={a.titre} className="relative bg-white p-8">
                <span className="absolute left-0 right-0 top-0 h-[2px] bg-[#B08D57]" />
                <h3 className="mb-2 text-lg font-semibold text-ink">{a.titre}</h3>
                <p className="text-sm leading-7 text-ink/65">{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {s.reference ? (
        <section className="bg-[#1C1A1A] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B08D57]">Réalisation</p>
              <h2 className="display-title mb-4 text-3xl text-white md:text-5xl">{s.reference.nom}</h2>
              <p className="mb-6 max-w-md text-[15px] font-light leading-8 text-white/70">{s.reference.accroche}</p>
              <ul className="mb-8 space-y-2 text-sm text-white/80">
                {s.reference.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <span className="h-px w-5 bg-[#B08D57]" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={s.reference.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-[2px] bg-[#F5F1EB] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-[#1C1A1A] transition-colors hover:bg-[#B08D57] hover:text-white"
              >
                {s.reference.label}
              </a>
            </div>
            <a href={s.reference.href} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${s.reference.domaine}`} className="group block">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[#2A2726] shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 truncate rounded bg-white/5 px-3 py-1 text-[11px] text-white/50">{s.reference.domaine}</span>
                </div>
                {s.reference.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.reference.image} alt={`Capture du site ${s.reference.nom}`} className="block w-full" loading="lazy" />
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center text-sm tracking-[0.2em] text-white/30">{s.reference.domaine.toUpperCase()}</div>
                )}
              </div>
            </a>
          </div>
        </section>
      ) : null}

      <FAQ items={s.faq.map((f) => ({ question: f.question, answer: f.answer }))} title="Questions fréquentes." />

      <section className="bg-white px-6 pb-16 md:px-12 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="display-title mb-6 text-xl text-ink md:text-2xl">À lire aussi.</h2>
          <ul className="space-y-3 text-sm">
            {articles.map((a) => (
              <li key={a!.slug}>
                <Link href={`/blog/${a!.slug}`} className="underline underline-offset-4 hover:text-[#B08D57]">{a!.title}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink/60">
            Autres secteurs :{" "}
            {autres.map((o, i) => (
              <span key={o.slug}>
                {i > 0 ? ", " : ""}
                <Link href={`/services/${o.slug}`} className="underline underline-offset-4 hover:text-[#B08D57]">{o.nom.toLowerCase()}</Link>
              </span>
            ))}
            .
          </p>
        </div>
      </section>
    </main>
  );
}
