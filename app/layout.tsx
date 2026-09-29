import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/seo";

const GTM_ID = "GTM-KLTZFQNP";

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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
