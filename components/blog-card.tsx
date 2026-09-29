import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/data/posts";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group grid gap-5">
      <div className="relative aspect-[16/11] overflow-hidden rounded-[8px] shadow-line">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <p className="eyebrow text-[11px] text-taupe">{post.category} · {formatDate(post.date)} · {post.readTime}</p>
        <h3 className="mt-3 text-2xl font-medium leading-tight text-ink transition group-hover:text-olive">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/60">{post.excerpt}</p>
      </div>
    </Link>
  );
}
