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
    tagline: "Savoir où vous en êtes, et quoi faire ensuite.",
    desc: "J'audite votre présence en ligne et vos concurrents, puis je vous donne un plan d'action concret, dans l'ordre.",
    items: ["Audit de présence digitale", "Analyse de positionnement et de concurrence", "Plan d'action priorisé", "Recommandations argumentées"]
  },
  {
    num: "02",
    key: "content",
    title: "Néa Content",
    tagline: "Du contenu qui sort régulièrement, sans retomber sur vous.",
    desc: "Newsletter, articles de blog, réseaux sociaux : je gère la rédaction et le calendrier, vous gardez la main sur le fond.",
    items: ["Newsletter", "Articles de blog SEO", "Contenu réseaux sociaux", "Calendrier éditorial"]
  },
  {
    num: "03",
    key: "web",
    title: "Néa Web",
    tagline: "Un site qui marche, pas juste qui existe.",
    desc: "Création ou refonte : un site rapide, bien structuré pour Google, avec un vrai chemin vers le contact ou l'achat.",
    items: ["Création ou refonte de site", "Architecture & configuration technique", "SEO intégré dès la conception", "Formulaire de contact & conversion"]
  }
];

export const fullHarmony = {
  name: "Full Harmony",
  tagline: "Stratégie, contenu et site, réunis.",
  desc: "Les trois offres ensemble, pour ne pas avoir à coordonner plusieurs prestataires vous-même.",
  items: ["Tout Néa Strategy", "Tout Néa Content", "Tout Néa Web", "Un seul interlocuteur, un suivi mensuel"]
};

export const processSteps = [
  { num: "01", title: "Premier échange", desc: "On parle de votre activité, de ce qui bloque et de ce que vous voulez atteindre." },
  { num: "02", title: "Devis", desc: "Une proposition chiffrée sous 48h, sans engagement." },
  { num: "03", title: "Travail", desc: "50% à la commande, 50% à la livraison. Vous savez où ça en est à chaque étape." },
  { num: "04", title: "Livraison", desc: "Dans les délais annoncés. Un suivi mensuel reste possible ensuite." }
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
