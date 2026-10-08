import Image from "next/image";
import Link from "next/link";

const expertises = [
  { title: "Marketing digital", items: ["Stratégie digitale", "SEO et référencement", "Contenu et newsletter", "Création de site web"] },
  { title: "Organisation et productivité", items: ["Planners", "Suivi des revenus et des factures", "Routines et suivi personnel", "Planning de contenu"] }
];

export function AboutView() {
  return (
    <main>
      {/* Introduction */}
      <section className="container-premium grid items-center gap-12 pb-24 pt-16 md:grid-cols-[1.1fr_.9fr] md:gap-20 md:pb-32 md:pt-24">
        <div>
          <p className="mag-serif text-xl text-olive">À propos de Néa Digital</p>
          <h1 className="mag-title mt-5 text-[clamp(2.8rem,6.5vw,5.4rem)] text-ink">Une marque, deux univers.</h1>
          <p className="mag-text mt-8 max-w-xl text-xl leading-9 text-ink/80">
            Néa Digital, c'est deux choses : des <strong className="font-semibold text-ink">services de marketing digital</strong> pour les entreprises, les marques et les indépendants, et une boutique de <strong className="font-semibold text-ink">planners</strong> pour s'organiser au quotidien.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/services" className="focus-ring bg-ink px-7 py-3.5 text-sm font-medium text-porcelain transition hover:bg-olive">Voir les services</Link>
            <Link href="/shop" className="text-sm font-medium text-ink underline underline-offset-8 hover:text-olive">Visiter la boutique</Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/resources/imprimables/networking-planner-4.jpg" alt="Carnet Néa Digital posé près d'une tasse de café" fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Les deux univers */}
      <section className="container-premium grid gap-24 pb-24 md:gap-32 md:pb-32">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/hero-bg-poster.jpg" alt="Bureau en bois avec un ordinateur portable et un carnet" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="mag-serif text-lg text-olive">Pour les entreprises et les indépendants</p>
            <h2 className="mag-title mt-3 text-4xl text-ink md:text-5xl">Services de marketing digital.</h2>
            <p className="mag-text mt-6 max-w-lg text-lg leading-8 text-ink/80">
              Stratégie, contenu et visibilité en ligne, avec la possibilité de créer ou de refondre un site quand le projet le demande. Des prestations soignées, sans jargon, pour développer une présence à la hauteur de votre activité.
            </p>
            <Link href="/services" className="mt-8 inline-block text-sm font-medium text-ink underline underline-offset-8 hover:text-olive">Découvrir les services</Link>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <div className="md:order-2 grid grid-cols-2 gap-3">
            <Image src="/resources/imprimables/freelance-tracker-4.jpg" alt="The Freelance Income Tracker sur un bureau" width={800} height={800} sizes="(min-width: 768px) 22vw, 50vw" className="aspect-[3/4] h-full w-full object-cover" />
            <Image src="/resources/imprimables/skincare-journal-4.jpg" alt="The Skincare Journal près d'un verre d'eau" width={800} height={800} sizes="(min-width: 768px) 22vw, 50vw" className="mt-10 aspect-[3/4] h-full w-full object-cover" />
          </div>
          <div className="md:order-1">
            <p className="mag-serif text-lg text-olive">Pour s'organiser</p>
            <h2 className="mag-title mt-3 text-4xl text-ink md:text-5xl">Les planners.</h2>
            <p className="mag-text mt-6 max-w-lg text-lg leading-8 text-ink/80">
              Suivi des revenus, routine skincare, networking, planning de contenu : des planners simples, pour planifier, prioriser et suivre ce qui compte. Des tableaux Excel arrivent bientôt.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <Link href="/shop" className="text-ink underline underline-offset-8 hover:text-olive">Voir la boutique</Link>
              <Link href="/blog" className="text-ink underline underline-offset-8 hover:text-olive">Lire les guides du blog</Link>
            </div>
          </div>
        </div>
      </section>

      {/* L'approche */}
      <section className="bg-linen py-24 md:py-32">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mag-serif text-lg text-olive">L'approche</p>
            <p className="mag-title mt-5 text-3xl text-ink md:text-5xl">D'un côté, des indépendantes qui veulent s'organiser. De l'autre, des entreprises qui veulent une présence en ligne qui fonctionne.</p>
            <p className="mag-text mx-auto mt-8 max-w-2xl text-lg leading-8 text-ink/80">
              Dans les deux cas, je travaille pareil : je comprends d'abord ce dont vous avez besoin, puis je livre quelque chose d'utilisable tout de suite, sans y ajouter de complexité.
            </p>
            <p className="mag-serif mt-8 text-lg text-olive">Organisation, branding, contenu, conversion.</p>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="container-premium py-24 md:py-32">
        <h2 className="mag-title text-center text-4xl text-ink md:text-5xl">Compétences</h2>
        <div className="mx-auto mt-14 grid max-w-4xl gap-14 md:grid-cols-2 md:gap-24">
          {expertises.map((exp) => (
            <div key={exp.title}>
              <h3 className="mag-serif text-2xl text-ink">{exp.title}</h3>
              <ul className="mag-text mt-5 grid gap-3 text-lg text-ink/80">
                {exp.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container-premium pb-24 text-center md:pb-32">
        <h2 className="mag-title mx-auto max-w-3xl text-4xl text-ink md:text-6xl">Un projet ? Une question ?</h2>
        <p className="mag-text mt-6 text-lg text-ink/80">Je réponds sous 48 h.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link href="/contact" className="focus-ring bg-ink px-7 py-3.5 text-sm font-medium text-porcelain transition hover:bg-olive">Me contacter</Link>
          <a href="mailto:contact.neadigital@gmail.com" className="text-sm font-medium text-ink underline underline-offset-8 hover:text-olive">contact.neadigital@gmail.com</a>
          <a href="https://fr.pinterest.com/neadigitalpro/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink underline underline-offset-8 hover:text-olive">Pinterest</a>
        </div>
      </section>
    </main>
  );
}
