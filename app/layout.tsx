import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { GrainOverlay } from "@/components/grain-overlay";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { JsonLd } from "@/components/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://neadigital.fr"),
  title: {
    default: "Néa Digital | Stratégie digitale, contenu et création de site",
    template: "%s | Néa Digital"
  },
  description:
    "Néa Digital accompagne entreprises, marques et indépendants sur leur stratégie digitale, leur contenu et leur site web, et propose une boutique de planners pour s'organiser au quotidien.",
  keywords: [
    "stratégie digitale",
    "marketing digital",
    "création de site web",
    "référencement SEO",
    "contenu et newsletter",
    "audit de présence en ligne",
    "planner digital",
    "organisation et productivité"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://neadigital.fr",
    siteName: "Néa Digital",
    title: "Néa Digital | Stratégie digitale, contenu et création de site",
    description: "Stratégie digitale, contenu et création de site pour entreprises et indépendants, et une boutique de ressources pour s'organiser au quotidien."
  },
  twitter: {
    card: "summary_large_image",
    title: "Néa Digital",
    description: "Stratégie digitale, contenu et création de site pour entreprises et indépendants."
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    other: {
      "p:domain_verify": "787c16db9f9201d42bed07da8ccf182f"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        <GrainOverlay />
        <PageTransition />
      </body>
    </html>
  );
}
