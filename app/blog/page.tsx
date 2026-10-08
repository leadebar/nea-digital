import type { Metadata } from "next";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { categories, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides pour s'organiser (suivi des revenus, routine, networking, planning de contenu) et articles sur la stratégie digitale, le contenu et le web."
};

export default function BlogPage() {
  return (
    <main className="container-premium py-16">
      <div className="grid gap-10 md:grid-cols-[.9fr_1fr] md:items-end">
        <div>
          <p className="mag-serif mb-5 text-xl italic text-taupe">Le blog Néa Digital</p>
          <h1 className="mag-title text-4xl text-ink md:text-6xl">Le blog : organisation, contenu et stratégie digitale.</h1>
        </div>
        <div className="rounded-[8px] bg-white p-3 shadow-line">
          <label className="flex min-h-12 items-center gap-3 px-3 text-sm text-ink/45">
            <Search className="h-4 w-4" />
            <input placeholder="Rechercher un sujet" className="w-full bg-transparent outline-none" />
          </label>
        </div>
      </div>
      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button key={category} className="shrink-0 rounded-[4px] border border-ink/10 px-4 py-2 text-sm text-ink/65 hover:bg-linen">{category}</button>
        ))}
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </main>
  );
}
