export type Freebie = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  pages: string;
  filePath: string;
  fileName: string;
  benefits: string[];
  preview: Array<{
    title: string;
    text: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const weeklyResetFreebie: Freebie = {
  slug: "weekly-reset",
  name: "Le Brief Prêt-à-Remplir",
  eyebrow: "Freebie",
  headline: "Arrivez au premier échange avec un projet déjà clair.",
  description:
    "Un document court à remplir avant qu'on se parle : objectifs, existant, contraintes, inspirations. De quoi gagner du temps dès le premier rendez-vous.",
  pages: "4 pages",
  filePath: "/freebies/brief-pret-a-remplir.pdf",
  fileName: "brief-pret-a-remplir.pdf",
  benefits: [
    "Clarifier ses objectifs avant même le premier échange.",
    "Réunir en un seul document ce qui existe déjà (site, réseaux, contenus).",
    "Gagner du temps sur le premier rendez-vous.",
    "Arriver avec des attentes précises, pas juste une idée floue."
  ],
  preview: [
    {
      title: "Objectifs",
      text: "Ce que vous voulez atteindre, concrètement."
    },
    {
      title: "Existant",
      text: "Ce qui existe déjà : site, réseaux, contenus, outils."
    },
    {
      title: "Contraintes",
      text: "Délais, budget approximatif, points de vigilance."
    },
    {
      title: "Inspirations",
      text: "Ce que vous aimez, ce que vous voulez éviter."
    }
  ],
  faq: [
    {
      question: "Ce document remplace-t-il un premier échange ?",
      answer:
        "Non. Il le prépare. On en reparle ensemble pour affiner et répondre à vos questions."
    },
    {
      question: "Comment je le reçois ?",
      answer:
        "Après inscription, tu arrives sur une page de téléchargement avec le PDF disponible immédiatement."
    },
    {
      question: "C'est technique ?",
      answer:
        "Non. Aucune connaissance technique ou marketing n'est nécessaire pour le remplir."
    },
    {
      question: "Vais-je recevoir trop d'emails ?",
      answer:
        "Non. L'objectif est de rester utile : marketing digital, SEO et actualités importantes, rien de plus."
    }
  ]
};
