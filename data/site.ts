export const navItems = [
  { label: "Boutique", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" }
];

// Source unique des 3 offres + le pack Full Harmony.
// Utilisé par la home et la page /services pour garantir une seule
// version des offres sur tout le site.
export const offers = [
  {
    num: "01",
    key: "strategy",
    title: "Néa Strategy",
    tagline: "Clarifier votre présence et votre plan d'action.",
    desc: "Un audit complet de votre visibilité actuelle et une feuille de route claire pour les prochains mois.",
    items: ["Audit de présence digitale", "Analyse de la concurrence locale", "Plan d'action priorisé", "Recommandations concrètes"]
  },
  {
    num: "02",
    key: "content",
    title: "Néa Content",
    tagline: "Rester visible, sans y passer vos journées.",
    desc: "Newsletter, articles de blog, posts LinkedIn ou Instagram — un contenu régulier pensé pour votre clientèle.",
    items: ["Newsletter mensuelle", "Articles de blog SEO", "Posts réseaux sociaux", "Calendrier éditorial"]
  },
  {
    num: "03",
    key: "web",
    title: "Néa Web",
    tagline: "Un site qui vous représente et qui se trouve sur Google.",
    desc: "Création ou refonte de site vitrine, optimisé pour le référencement local et pensé pour convertir.",
    items: ["Création ou refonte de site", "Nom de domaine & configuration", "SEO de base intégré", "Formulaire de contact"]
  }
];

export const fullHarmony = {
  name: "Full Harmony",
  tagline: "Le pack complet : stratégie, contenu et site réunis.",
  desc: "Pour qui veut une présence digitale cohérente de bout en bout, sans jongler entre plusieurs prestataires.",
  items: ["Tout Néa Strategy", "Tout Néa Content", "Tout Néa Web", "Un seul interlocuteur, un suivi mensuel"]
};

export const processSteps = [
  { num: "01", title: "Premier contact", desc: "On échange pour comprendre votre activité, vos objectifs et vos besoins." },
  { num: "02", title: "Devis gratuit", desc: "Je vous envoie une proposition détaillée sous 48h, sans engagement de votre part." },
  { num: "03", title: "Lancement", desc: "Une fois validé, on démarre : 50% à la commande, 50% à la livraison." },
  { num: "04", title: "Livraison & suivi", desc: "Votre projet est livré dans les délais annoncés. Un suivi mensuel est disponible." }
];

// FAQ affichée sur la home et la page /services.
export const servicesFaq = [
  {
    question: "Comment se passe le paiement ?",
    answer: "50% à la commande, 50% à la livraison. Un devis détaillé est envoyé avant tout engagement."
  },
  {
    question: "J'ai déjà un site, pouvez-vous simplement l'améliorer ?",
    answer: "Oui. Néa Web inclut aussi bien la création que la refonte ou l'optimisation d'un site existant."
  },
  {
    question: "Quels sont les délais ?",
    answer: "Réponse sous 48h pour un devis. Un site est généralement livré en 2 à 3 semaines selon le projet."
  },
  {
    question: "Puis-je prendre une seule offre plutôt que le pack complet ?",
    answer: "Oui, Néa Strategy, Néa Content et Néa Web sont disponibles séparément. Full Harmony est le pack qui réunit les trois."
  }
];

// FAQ affichée sur la boutique (ressources digitales).
export const shopFaq = [
  {
    question: "Les ressources sont-elles compatibles Notion, GoodNotes ou PDF ?",
    answer: "Oui selon la ressource. Le format est indiqué sur chaque page."
  },
  {
    question: "Puis-je demander une version personnalisée ?",
    answer: "Oui. Envoie ta demande via la page contact."
  }
];

// Conservé pour compatibilité : alias vers la FAQ boutique.
export const faq = shopFaq;
