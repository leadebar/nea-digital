import type { Metadata } from "next";
import { AboutView } from "@/components/views/about-view";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Néa Digital, c'est deux choses : des services de marketing digital pour les entreprises et indépendants, et une boutique de ressources digitales pour s'organiser au quotidien.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "À propos | Néa Digital",
    description:
      "Des services de marketing digital pour les entreprises et indépendants, et une boutique de ressources digitales pour s'organiser au quotidien.",
    url: "https://neadigital.fr/about"
  }
};

export default function Page() {
  return <AboutView />;
}
