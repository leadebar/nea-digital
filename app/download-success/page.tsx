import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/button";
import { FreebieMockup } from "@/components/freebie-mockup";
import { MotionDiv, reveal } from "@/components/motion";
import { weeklyResetFreebie } from "@/data/freebies";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Téléchargement confirmé",
  description:
    "Télécharge The Weekly Reset Checklist et découvre les ressources premium Néa Digital pour organiser ta semaine.",
  robots: {
    index: false,
    follow: true
  }
};

const socialLinks = [
  { label: "Pinterest", href: "https://www.pinterest.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" }
];

export default function DownloadSuccessPage() {
  return (
    <main>
      <section className="container-premium grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 md:grid-cols-[.9fr_1.1fr]">
        <MotionDiv {...reveal}>
          <p className="eyebrow mb-5 text-xs text-taupe">Téléchargement prêt</p>
          <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">
            Ta checklist est disponible.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/66">
            Télécharge le PDF, fais ton reset, puis garde les ressources premium sous la main si tu veux structurer davantage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={weeklyResetFreebie.filePath}
              download={weeklyResetFreebie.fileName}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-ink bg-ink px-6 text-sm font-medium text-porcelain transition duration-300 hover:border-olive hover:bg-olive"
            >
              <Download className="h-4 w-4" />
              Télécharger le PDF
            </a>
            <Button href="/shop" variant="light">Voir les ressources premium</Button>
          </div>
        </MotionDiv>
        <MotionDiv {...reveal}>
          <FreebieMockup />
        </MotionDiv>
      </section>

      <section className="bg-linen py-20">
        <div className="container-premium grid gap-10 md:grid-cols-[.7fr_1fr]">
          <div>
            <p className="eyebrow mb-4 text-xs text-taupe">Réseaux</p>
            <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">
              Retrouve Néa Digital sur Pinterest et TikTok.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="focus-ring flex min-h-20 items-center justify-between rounded-[8px] bg-porcelain px-5 text-sm font-medium text-ink shadow-line transition hover:bg-white"
              >
                {link.label}
                <ExternalLink className="h-4 w-4 text-taupe" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-4 text-xs text-taupe">Lecture utile</p>
          <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">
            Continuer avec des articles simples et actionnables.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
