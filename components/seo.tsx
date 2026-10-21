const SITE = "https://www.neadigital.fr";

export function JsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE}/#organization`,
      name: "Néa Digital",
      url: SITE,
      logo: `${SITE}/icon.png`,
      image: `${SITE}/icon.png`,
      email: "contact.neadigital@gmail.com",
      areaServed: { "@type": "Country", name: "France" },
      serviceType: ["Création de site web", "Référencement naturel (SEO)", "Rédaction de contenu et newsletters", "Stratégie de marketing digital"],
      founder: { "@id": `${SITE}/#lea-debar` },
      sameAs: ["https://fr.pinterest.com/neadigitalpro/", "https://www.etsy.com/shop/NeaDigitalStudio"],
      description:
        "Consultante marketing digital freelance : création de site web, SEO, contenu et newsletters pour entreprises, commerces et indépendants partout en France. Boutique de planners imprimables."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE}/#lea-debar`,
      name: "Léa Debar",
      jobTitle: "Consultante marketing digital freelance",
      url: `${SITE}/about`,
      worksFor: { "@id": `${SITE}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Néa Digital",
      url: SITE,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE}/#organization` }
    }
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ProductJsonLd({
  slug,
  name,
  description,
  price,
  image
}: {
  slug: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(image ? { image } : {}),
    brand: { "@type": "Brand", name: "Néa Digital" },
    url: `${SITE}/shop/${slug}`,
    offers: {
      "@type": "Offer",
      price: price.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE}/shop/${slug}`
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
