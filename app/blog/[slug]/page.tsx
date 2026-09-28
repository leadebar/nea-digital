import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
        <div className="relative mx-auto mt-12 aspect-[16/8] max-w-4xl overflow-hidden rounded-[8px] shadow-line">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-28 border-l border-ink/10 pl-5 text-sm text-ink/55">
              <p className="eyebrow mb-4 text-[11px] text-taupe">Sommaire</p>
              {post.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="block py-2 hover:text-ink">{section.heading}</a>
              ))}
            </div>
          </aside>
          <div className="prose-premium max-w-none">
            {post.sections.map((section) => (
              <div key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ))}
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
