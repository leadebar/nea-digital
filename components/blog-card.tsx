import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/data/posts";

export function BlogCard({ post, compact = false }: { post: Post; compact?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`group grid content-start ${compact ? "gap-4" : "gap-5"}`}>
      <div className={`relative overflow-hidden bg-linen ${compact ? "aspect-[3/2]" : "aspect-[4/5]"}`}>
        <Image
          src={post.image}
          alt={post.imageAlt ?? post.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div>
        <p className="mag-serif text-base" style={{ color: post.theme?.accent ?? "#4F503D" }}>{post.category}</p>
        <h3 className={`mag-title mt-2 leading-[1.15] text-ink ${compact ? "text-xl" : "text-[1.7rem]"} group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4`}>{post.title}</h3>
        {compact ? null : <p className="mag-text mt-3 text-base leading-7 text-ink/80">{post.excerpt}</p>}
        <p className="mt-3 text-sm text-ink/65">{formatDate(post.date)}, {post.readTime}</p>
      </div>
    </Link>
  );
}
