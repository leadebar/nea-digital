import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleVisual } from "@/components/editorial-visual";
import { BlogCard } from "@/components/blog-card";
import { Newsletter } from "@/components/newsletter";
import { formatDate } from "@/lib/utils";
import { posts } from "@/data/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article"
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <article className="container-premium py-14">
        <header className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-5 text-xs text-taupe">{post.category} · {formatDate(post.date)} · {post.readTime}</p>
          <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">{post.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/64">{post.excerpt}</p>
        </header>
        <div className="mx-auto mt-12 max-w-4xl">
          <ArticleVisual label={post.category} />
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-28 border-l border-ink/10 pl-5 text-sm text-ink/55">
              <p className="eyebrow mb-4 text-[11px] text-taupe">Sommaire</p>
              <a href="#clarte" className="block py-2 hover:text-ink">Clarifier</a>
              <a href="#systeme" className="block py-2 hover:text-ink">Structurer</a>
              <a href="#rituel" className="block py-2 hover:text-ink">Suivre</a>
            </div>
          </aside>
          <div className="prose-premium max-w-none">
            <h2 id="clarte">Commencer par les priorités</h2>
            <p>Liste ce que tu dois suivre chaque semaine : objectifs, contenus, ventes, finances et projets en cours.</p>
            <p>Garde uniquement les informations utiles. Moins il y a de champs, plus le système sera utilisé.</p>
            <h2 id="systeme">Structurer les espaces</h2>
            <p>Crée des pages simples avec des noms évidents : planning, contenus, offres, finances et ressources.</p>
            <p>Pour une marque digitale, cette base suffit pour relier production, publication et conversion.</p>
            <h2 id="rituel">Suivre chaque semaine</h2>
            <p>Prévois un point court : revoir les chiffres, choisir les priorités, déplacer les tâches et supprimer le reste.</p>
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
