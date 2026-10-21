import type { Metadata } from "next";
import { BonnevalView } from "@/components/views/bonneval-view";

const title = "Marketing digital pour commerces et artisans";
const description =
  "Consultante en marketing digital pour les commerces, restaurants, salons et artisans. Site web, Google, contenu. Diagnostic offert.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bonneval" },
  openGraph: {
    images: ["https://www.neadigital.fr/opengraph-image"],
    title: `${title} | Néa Digital`,
    description,
    url: "https://www.neadigital.fr/bonneval"
  }
};

export default function Page() {
  return <BonnevalView />;
}
