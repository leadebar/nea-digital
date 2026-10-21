import type { Metadata } from "next";
import { ContactView } from "@/components/views/contact-view";

export const metadata: Metadata = {
  title: "Devis et diagnostic gratuit marketing digital",
  description:
    "Discutons de votre projet : devis gratuit pour un accompagnement stratégie, contenu ou site web, réponse sous 48h.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Devis et diagnostic gratuit marketing digital | Néa Digital",
    description: "Discutons de votre projet : devis gratuit, réponse sous 48h.",
    url: "https://www.neadigital.fr/contact"
  }
};

export default function Page() {
  return <ContactView />;
}
