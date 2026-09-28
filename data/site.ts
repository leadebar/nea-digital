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
    tagline: "Un diagnostic clair, un plan d'action précis.",
    desc: "Audit de votre présence digitale, analyse de votre positionnement et feuille de route priorisée pour les mois à venir.",
    items: ["Audit de présence digitale", "Analyse de positionnement et de concurrence", "Plan d'action priorisé", "Recommandations argumentées"]
  },
  {
    num: "02",
    key: "content",
    title: "Néa Content",
    tagline: "Une prise de parole régulière et cohérente.",
    desc: "Newsletter, articles, réseaux sociaux : un contenu pensé pour votre image de marque et votre audience, sans y passer vos journées.",
    items: ["Newsletter", "Articles de blog SEO", "Contenu réseaux sociaux", "Calendrier éditorial"]
  },
  {
    num: "03",
    key: "web",
    title: "Néa Web",
    tagline: "Un site à la hauteur de ce que vous proposez.",
    desc: "Création ou refonte de site, pensé pour représenter votre marque, se trouver sur Google et convertir vos visiteurs.",
    items: ["Création ou refonte de site", "Architecture & configuration technique", "SEO intégré dès la conception", "Formulaire de contact & conversion"]
  }
];

export const fullHarmony = {
  name: "Full Harmony",
  tagline: "Le pack complet : stratégie, contenu et site réunis.",
  desc: "Pour qui veut une présence digitale cohérente de bout en bout, portée par un seul interlocuteur plutôt que plusieurs prestataires à coordonner.",
  items: ["Tout Néa Strategy", "Tout Néa Content", "Tout Néa Web", "Un interlocuteur unique, un suivi mensuel"]
};

export const processSteps = [
  { num: "01", title: "Premier échange", desc: "On prend le temps de comprendre votre activité, votre positionnement et vos objectifs." },
  { num: "02", title: "Proposition détaillée", desc: "Un devis argumenté sous 48h, adapté à votre besoin réel — sans engagement de votre part." },
  { num: "03", title: "Exécution suivie", desc: "50% à la commande, 50% à la livraison. Vous êtes informé·e à chaque étape." },
  { num: "04", title: "Livraison & suivi", desc: "Un livrable soigné, dans les délais annoncés, avec un suivi mensuel disponible." }
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
