import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { Newsletter } from "@/components/newsletter";
import { RichText } from "@/components/rich-text";
import { formatDate } from "@/lib/utils";
import { posts } from "@/data/posts";
import { categories as shopCategories, imprimables } from "@/data/imprimables";

type Props = { params: Promise<{ slug: string }> };

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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const others = posts.filter((item) => item.slug !== post.slug);
  const related = [...others.filter((item) => item.category === post.category), ...others.filter((item) => item.category !== post.category)].slice(0, 2);
  const product = post.productSlug ? imprimables.find((p) => p.slug === post.productSlug) : undefined;
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
  const productCategory = product ? shopCategories.find((c) => c.slug === product.categorie)?.label : undefined;

  return (
    <main>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <article className="container-premium py-14">
        <header className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-5 text-xs text-taupe">{post.category} · {formatDate(post.date)} · {post.readTime}</p>
          <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">{post.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/64">{post.excerpt}</p>
        </header>
        <div className="relative mx-auto mt-12 aspect-[16/8] max-w-4xl overflow-hidden rounded-[8px] shadow-line">
          <Image src={post.image} alt={post.imageAlt ?? post.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-28 border-l border-ink/10 pl-5 text-sm text-ink/55">
              <p className="eyebrow mb-4 text-[11px] text-taupe">Sommaire</p>
              {post.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="block py-2 hover:text-ink">{section.heading}</a>
              ))}
              {post.faq?.length ? <a href="#faq" className="block py-2 hover:text-ink">Questions fréquentes</a> : null}
            </div>
          </aside>
          <div className="prose-premium max-w-none">
            {post.sections.map((section) => (
              <div key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}><RichText text={paragraph} /></p>
                ))}
                {section.list ? (
                  <ul className="!my-6 !list-none !pl-0">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 border-t border-ink/10 py-3 text-[15px] leading-7 text-ink/75">
                        <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-olive" />
                        <span><RichText text={item} /></span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            {post.faq?.length ? (
              <div>
                <h2 id="faq">Questions fréquentes</h2>
                {post.faq.map((f) => (
                  <div key={f.q} className="border-t border-ink/10 py-5">
                    <h3 className="text-lg font-medium text-ink">{f.q}</h3>
                    <p className="!mt-2"><RichText text={f.a} /></p>
                  </div>
                ))}
              </div>
            ) : null}
            {post.takeaways?.length ? (
              <div className="!mt-12 rounded-[8px] bg-linen p-7">
                <p className="eyebrow mb-4 text-[11px] text-taupe">À retenir</p>
                <ul className="!my-0 !list-none !pl-0">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-2 text-[15px] leading-7 text-ink/80">
                      <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-olive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {product ? (
              <div className="!mt-12 grid gap-6 rounded-[8px] border border-ink/10 p-6 sm:grid-cols-[140px_1fr] sm:items-center">
                <Image src={`/resources/imprimables/${product.slug}.jpg`} alt={`${product.title}, couverture`} width={800} height={1200} sizes="140px" className="mx-auto aspect-[2/3] w-[140px] rounded-[4px] object-cover shadow-line" />
                <div>
                  <p className="eyebrow text-[11px] text-taupe">{productCategory ?? "Boutique"} · PDF imprimable</p>
                  <p className="mt-2 text-xl font-medium text-ink">{product.title}</p>
                  <p className="!mt-2 text-sm leading-7 text-ink/65">{product.pitch}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    {product.price !== null ? <span className="text-lg font-medium text-ink">{product.price} €</span> : null}
                    <Link href={`/shop/${product.slug}`} className="focus-ring rounded-[4px] bg-ink px-5 py-2.5 text-sm text-porcelain transition hover:bg-olive">Découvrir le carnet</Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </article>
      <Newsletter />
      <section className="container-premium py-20">
        <p className="eyebrow mb-8 text-xs text-taupe">Articles liés</p>
        <div className="grid gap-8 md:grid-cols-2">
          {related.map((item) => <BlogCard key={item.slug} post={item} />)}
        </div>
      </section>
    </main>
  );
}
