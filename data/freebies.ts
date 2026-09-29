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
  name: "Les 5 Piliers d'une Présence Digitale qui Convertit",
  eyebrow: "Freebie",
  headline: "Ce qui différencie une présence en ligne qui attire des clients de celle qui n'attire personne.",
  description:
    "Un guide court pour comprendre les 5 leviers qui font vraiment la différence : positionnement, site, contenu, visibilité et suivi. De quoi savoir où regarder en premier.",
  pages: "6 pages",
  filePath: "/freebies/5-piliers-presence-digitale.pdf",
  fileName: "5-piliers-presence-digitale.pdf",
  benefits: [
    "Comprendre les 5 leviers qui font vraiment la différence.",
    "Repérer en un coup d'œil ce qui manque à ta présence actuelle.",
    "Avoir un langage commun pour en discuter avec un prestataire.",
    "Savoir par où commencer, sans jargon inutile."
  ],
  preview: [
    {
      title: "Positionnement",
      text: "Ce que tu vends, à qui, et pourquoi toi plutôt qu'un autre."
    },
    {
      title: "Site",
      text: "Ce qui transforme une visite en contact."
    },
    {
      title: "Contenu",
      text: "Ce qui construit la confiance dans la durée."
    },
    {
      title: "Visibilité",
      text: "Être vu au bon moment, par les bonnes personnes."
    },
    {
      title: "Suivi",
      text: "Ce qui permet de savoir si ça fonctionne vraiment."
    }
  ],
  faq: [
    {
      question: "Ce guide remplace-t-il un accompagnement ?",
      answer:
        "Non. Il donne les repères pour comprendre où regarder. Néa Digital va plus loin avec un accompagnement adapté à ta situation."
    },
    {
      question: "Comment je le reçois ?",
      answer:
        "Après inscription, tu arrives sur une page de téléchargement avec le PDF disponible immédiatement."
    },
    {
      question: "C'est théorique ou concret ?",
      answer:
        "Les deux : chaque pilier est expliqué simplement, avec des exemples concrets, sans jargon inutile."
    },
    {
      question: "Vais-je recevoir trop d'emails ?",
      answer:
        "Non. L'objectif est de rester utile : marketing digital, SEO et actualités importantes, rien de plus."
    }
  ]
};
