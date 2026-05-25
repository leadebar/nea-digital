import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://nea-digital.com"),
  title: {
    default: "Néa Digital | Planners, stratégie digitale et organisation",
    template: "%s | Néa Digital"
  },
  description:
    "Néa Digital crée des planners, templates et services pour organiser ton activité digitale.",
  keywords: [
    "planner digital",
    "organisation digitale",
    "productivité",
    "finances personnelles",
    "marketing digital",
    "stratégie digitale",
    "Pinterest",
    "TikTok",
    "outils digitaux",
    "templates digitaux",
    "optimisation web"
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nea-digital.com",
    siteName: "Néa Digital",
    title: "Néa Digital",
    description: "Planners, templates et services pour organisation digitale."
  },
  twitter: {
    card: "summary_large_image",
    title: "Néa Digital",
    description: "Planners, templates et services pour organiser ton digital."
  },         
  verification: {
    other: {
      "p:domain_verify": "787c16db9f9201d42bed07da8ccf182f"
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
      </body>
    </html>
  );
}
