export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Néa Digital",
    url: "https://nea-digital.com",
    sameAs: ["https://www.tiktok.com/@neadigital", "https://www.pinterest.com/neadigital"],
    description: "Planners, templates et services pour organisation, branding et marketing digital."
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
