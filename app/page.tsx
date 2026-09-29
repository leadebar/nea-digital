import type { Metadata } from "next";
import { HomeView } from "@/components/views/home-view";

export const metadata: Metadata = {
  title: "Néa Digital | Stratégie digitale, contenu et création de site",
  description:
    "J'aide les entreprises, marques et indépendants à améliorer leur présence en ligne : stratégie, contenu et création de site, sur la Côte d'Azur et à distance.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Néa Digital | Stratégie digitale, contenu et création de site",
    description:
      "J'aide les entreprises, marques et indépendants à améliorer leur présence en ligne : stratégie, contenu et création de site.",
    url: "https://neadigital.fr"
  }
};

export default function Page() {
  return <HomeView />;
}
