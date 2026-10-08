import type { MetadataRoute } from "next";
import { imprimables } from "@/data/imprimables";
import { posts } from "@/data/posts";

const routes = [
  "",
  "/about",
  "/shop",
  "/services",
  "/bonneval",
  "/contact",
  "/blog",
  "/weekly-reset",
  "/mentions-legales",
  "/politique-confidentialite",
  "/cgv",
  "/products/digital-planner",
  "/products/90-days-reset",
  "/products/finance-planner"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://neadigital.fr";

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...imprimables.map((p) => ({
      url: `${base}/shop/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
