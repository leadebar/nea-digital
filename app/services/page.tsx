import type { Metadata } from "next";
import { ServicesView } from "@/components/views/services-view";

export const metadata: Metadata = {
  title: "Création de site web, SEO et contenu",
  description:
    "Stratégie digitale, contenu et création de site, à la carte ou dans un pack complet. Devis gratuit, réponse sous 48h.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    images: ["https://www.neadigital.fr/opengraph-image"],
    title: "Création de site web, SEO et contenu | Néa Digital",
    description:
      "Stratégie digitale, contenu et création de site, à la carte ou dans un pack complet. Devis gratuit, réponse sous 48h.",
    url: "https://www.neadigital.fr/services"
  }
};

export default function Page() {
  return <ServicesView />;
}
