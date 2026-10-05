import type { Metadata } from "next";
import { BonnevalView } from "@/components/views/bonneval-view";

const title = "Marketing digital à Bonneval";
const description =
  "Consultante en marketing digital pour les commerces, restaurants, salons et artisans de Bonneval, Châteaudun, Chartres et Orléans. Site web, Google, contenu. Diagnostic offert.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bonneval" },
  openGraph: {
    title: `${title} | Néa Digital`,
    description,
    url: "https://neadigital.fr/bonneval"
  }
};

export default function Page() {
  return <BonnevalView />;
}
