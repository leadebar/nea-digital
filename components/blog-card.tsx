import Link from "next/link";
import { ArticleVisual } from "@/components/editorial-visual";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/data/posts";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group grid gap-5">
      <ArticleVisual label={post.category} />
      <div>
        <p className="eyebrow text-[11px] text-taupe">{post.category} · {formatDate(post.date)} · {post.readTime}</p>
        <h3 className="mt-3 text-2xl font-medium leading-tight text-ink transition group-hover:text-olive">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/60">{post.excerpt}</p>
      </div>
    </Link>
  );
}
