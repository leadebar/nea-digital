import type { Metadata } from "next";
import { ContactView } from "@/components/views/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discutons de votre projet : devis gratuit pour un accompagnement stratégie, contenu ou site web, réponse sous 48h.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact | Néa Digital",
    description: "Discutons de votre projet : devis gratuit, réponse sous 48h.",
    url: "https://neadigital.fr/contact"
  }
};

export default function Page() {
  return <ContactView />;
}
