import type { Metadata } from "next";
import { HomeView } from "@/components/views/home-view";

export const metadata: Metadata = {
  title: "Consultante marketing digital freelance | Néa Digital",
  description:
    "J'aide les entreprises, marques et indépendants à améliorer leur présence en ligne : stratégie, contenu et création de site, à distance partout en France.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Consultante marketing digital freelance | Néa Digital",
    description:
      "J'aide les entreprises, marques et indépendants à améliorer leur présence en ligne : stratégie, contenu et création de site.",
    url: "https://www.neadigital.fr"
  }
};

export default function Page() {
  return <HomeView />;
}
