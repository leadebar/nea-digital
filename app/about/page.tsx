import type { Metadata } from "next";
import { AboutView } from "@/components/views/about-view";

export const metadata: Metadata = {
  title: "Léa Debar, consultante marketing digital",
  description:
    "Néa Digital, c'est deux choses : des services de marketing digital pour les entreprises et indépendants, et une boutique de ressources digitales pour s'organiser au quotidien.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "Léa Debar, consultante marketing digital | Néa Digital",
    description:
      "Des services de marketing digital pour les entreprises et indépendants, et une boutique de ressources digitales pour s'organiser au quotidien.",
    url: "https://www.neadigital.fr/about"
  }
};

export default function Page() {
  return <AboutView />;
}
