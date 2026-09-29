import type { Metadata } from "next";
import { ServicesView } from "@/components/views/services-view";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Stratégie digitale, contenu et création de site, à la carte ou dans un pack complet. Devis gratuit, réponse sous 48h.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Services | Néa Digital",
    description:
      "Stratégie digitale, contenu et création de site, à la carte ou dans un pack complet. Devis gratuit, réponse sous 48h.",
    url: "https://neadigital.fr/services"
  }
};

export default function Page() {
  return <ServicesView />;
}
