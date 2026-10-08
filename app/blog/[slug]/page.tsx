import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { Newsletter } from "@/components/newsletter";
import { RichText } from "@/components/rich-text";
import { formatDate } from "@/lib/utils";
import { posts } from "@/data/posts";
import { categories as shopCategories, imprimables } from "@/data/imprimables";

type Props = { params: Promise<{ slug: string }> };

const defaultTheme = { accent: "#4F503D", tint: "#E9E2DA" };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
      url: `https://neadigital.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      locale: "fr_FR",
      images: [post.image.startsWith("/") ? `https://neadigital.fr${post.image}` : post.image]
    },
    twitter: { card: "summary_large_image" }
  };
}

function Section({ section }: { section: (typeof posts)[number]["sections"][number] }) {
  return (
    <section>
      <h2 id={section.id}>{section.heading}</h2>
      {section.paragraphs.map((paragraph, index) => (
        <p key={index}><RichText text={paragraph} /></p>
      ))}
      {section.list ? (
        <ul className="mag-list">
          {section.list.map((item) => {
            const isModel = item.startsWith("«") || item.startsWith("Variante");
            return isModel ? (
              <li key={item} className="!pl-0 before:!hidden">
                <blockquote className="mag-model">{item}</blockquote>
              </li>
            ) : (
              <li key={item}><RichText text={item} /></li>
            );
          })}
        </ul>
      ) : null}
      {section.figure ? (
        <figure className="my-10 md:-mx-16">
          <div className={section.figure.images.length > 1 ? "grid grid-cols-2 gap-3" : ""}>
            {section.figure.images.map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt} width={1200} height={1200} sizes="(min-width: 768px) 800px, 100vw" className="h-auto w-full" />
            ))}
          </div>
          <figcaption className="mt-3 text-center text-sm text-ink/70">{section.figure.caption}</figcaption>
        </figure>
      ) : null}
    </section>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const theme = post.theme ?? defaultTheme;
  const themeStyle = { "--mag-accent": theme.accent, "--mag-tint": theme.tint } as CSSProperties;
  const others = posts.filter((item) => item.slug !== post.slug);
  const related = [...others.filter((item) => item.category === post.category), ...others.filter((item) => item.category !== post.category)].slice(0, 3);
  const alsoRead = post.alsoRead ? posts.find((item) => item.slug === post.alsoRead) : undefined;
  const product = post.productSlug ? imprimables.find((p) => p.slug === post.productSlug) : undefined;
  const productCategory = product ? shopCategories.find((c) => c.slug === product.categorie) : undefined;
  const absImage = post.image.startsWith("/") ? `https://neadigital.fr${post.image}` : post.image;
  const url = `https://neadigital.fr/blog/${post.slug}`;

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      image: absImage,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "fr-FR",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Néa Digital", url: "https://neadigital.fr" },
      publisher: { "@type": "Organization", name: "Néa Digital", logo: { "@type": "ImageObject", url: "https://neadigital.fr/icon.png" } }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://neadigital.fr" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://neadigital.fr/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url }
      ]
    }
  ];
  if (post.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } }))
    });
  }

  return (
    <main style={themeStyle}>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <article>
        <header className="container-premium pt-12 text-center md:pt-20">
          <nav aria-label="Fil d'Ariane" className="text-sm text-ink/70">
            <Link href="/blog" className="hover:text-ink">Blog</Link>
            <span className="mx-2">/</span>
            <span className="mag-serif" style={{ color: theme.accent }}>{post.category}</span>
          </nav>
          <h1 className="mag-title mx-auto mt-8 max-w-5xl text-[clamp(2.5rem,7.2vw,5.6rem)] text-ink">{post.title}</h1>
          <p className="mag-text mx-auto mt-8 max-w-2xl text-xl leading-8 text-ink/80 md:text-[1.375rem] md:leading-9">{post.excerpt}</p>
          <p className="mt-8 text-sm text-ink/70">
            Par <Link href="/about" className="underline underline-offset-4 hover:text-ink">Néa Digital</Link>, le {formatDate(post.date)}, {post.readTime} de lecture
          </p>
        </header>

        <div className="container-premium mt-12 md:mt-16">
          <div className="relative mx-auto aspect-[4/3] max-w-6xl overflow-hidden sm:aspect-[16/9]">
            <Image src={post.image} alt={post.imageAlt ?? post.title} fill priority sizes="(min-width: 1180px) 1150px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="container-premium mt-16 md:mt-20">
          <div className="mx-auto max-w-[40rem]">
            <nav aria-label="Sommaire" className="mb-14 text-[15px]" style={{ background: theme.tint }}>
              <div className="p-6 md:p-8">
                <p className="mag-serif text-xl" style={{ color: theme.accent }}>Dans cet article</p>
                <ul className="mt-4 grid gap-2.5 text-ink">
                  {post.sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`} className="hover:text-ink hover:underline hover:underline-offset-4">{section.heading}</a></li>
                  ))}
                  {post.faq?.length ? <li><a href="#faq" className="hover:text-ink hover:underline hover:underline-offset-4">Questions fréquentes</a></li> : null}
                </ul>
              </div>
            </nav>

            <div className="mag-body">
              {post.sections.map((section, index) => (
                <div key={section.id}>
                  <Section section={section} />
                  {index === 2 && post.pullquote ? (
                    <aside className="my-20 text-center md:-mx-16">
                      <p className="mag-pullquote">{post.pullquote}</p>
                    </aside>
                  ) : null}
                  {index === 3 && alsoRead ? (
                    <aside className="my-14 grid items-center gap-5 p-5 sm:grid-cols-[150px_1fr]" style={{ background: theme.tint }}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-square">
                        <Image src={alsoRead.image} alt="" fill sizes="150px" className="object-cover" />
                      </div>
                      <div>
                        <p className="mag-serif text-lg" style={{ color: theme.accent }}>À lire aussi</p>
                        <p className="mag-serif mt-1 text-2xl leading-tight">
                          <Link href={`/blog/${alsoRead.slug}`} className="!no-underline hover:!underline">{alsoRead.title}</Link>
                        </p>
                      </div>
                    </aside>
                  ) : null}
                </div>
              ))}

              {post.faq?.length ? (
                <section>
                  <h2 id="faq">Questions fréquentes</h2>
                  <div className="mt-8 grid gap-9">
                    {post.faq.map((f) => (
                      <div key={f.q}>
                        <h3 className="mag-serif text-2xl leading-snug text-ink">{f.q}</h3>
                        <p className="!mt-2"><RichText text={f.a} /></p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            {post.takeaways?.length ? (
              <div className="mt-20 p-8 md:p-10" style={{ background: theme.tint }}>
                <p className="mag-serif text-3xl" style={{ color: theme.accent }}>À retenir</p>
                <ul className="mag-list mag-body !mt-6 !text-[1.1rem]">
                  {post.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {product ? (
          <div className="container-premium mt-20 md:mt-28">
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-12 text-porcelain md:grid-cols-[260px_1fr] md:gap-14 md:px-14 md:py-16" style={{ background: theme.accent }}>
              <Image src={`/resources/imprimables/${product.slug}.jpg`} alt={`${product.title}, couverture`} width={800} height={1200} sizes="260px" className="mx-auto h-auto w-[200px] shadow-soft md:w-full" />
              <div>
                <p className="mag-serif text-lg text-porcelain/90">
                  {productCategory ? <Link href={`/shop?categorie=${productCategory.slug}`} className="hover:underline">{productCategory.label}</Link> : "Boutique"}
                </p>
                <p className="mag-title mt-3 text-4xl md:text-5xl">{product.title}</p>
                <p className="mag-text mt-5 max-w-md text-lg leading-8 text-porcelain">{product.pitch}</p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link href={`/shop/${product.slug}`} className="focus-ring bg-porcelain px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-linen">Découvrir le planner</Link>
                  {product.price !== null ? <span className="mag-serif text-3xl">{product.price} €</span> : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </article>

      <section className="container-premium mt-24 md:mt-32">
        <h2 className="mag-title text-center text-4xl md:text-5xl">Continuer la lecture</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {related.map((item) => <BlogCard key={item.slug} post={item} />)}
        </div>
        <p className="mt-12 text-center text-[15px] text-ink/60">
          <Link href="/blog" className="underline underline-offset-4 hover:text-ink">Tous les articles</Link>
          <span className="mx-3">et</span>
          <Link href="/shop" className="underline underline-offset-4 hover:text-ink">toute la boutique</Link>
        </p>
      </section>

      <div className="mt-24 md:mt-32">
        <Newsletter />
      </div>
    </main>
  );
}
