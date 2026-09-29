export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Néa Digital",
    url: "https://neadigital.fr",
    logo: "https://neadigital.fr/icon.png",
    email: "contact.neadigital@gmail.com",
    sameAs: ["https://fr.pinterest.com/neadigitalpro/"],
    description: "Stratégie digitale, contenu et création de site pour entreprises et indépendants, ainsi qu'une boutique de ressources digitales pour s'organiser au quotidien."
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
