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
  name: "The Weekly Reset Checklist",
  eyebrow: "Freebie",
  headline: "Remets ta semaine au clair en 20 minutes.",
  description:
    "Une checklist premium et volontairement courte pour faire le point, choisir tes priorités et repartir avec une semaine plus lisible.",
  pages: "5 pages",
  filePath: "/freebies/the-weekly-reset-checklist.pdf",
  fileName: "the-weekly-reset-checklist.pdf",
  benefits: [
    "Faire le point sans tout reprendre à zéro.",
    "Choisir les 3 priorités qui comptent vraiment.",
    "Organiser une semaine plus calme et plus claire.",
    "Créer un quick win avant de passer aux ressources complètes."
  ],
  preview: [
    {
      title: "Reset rapide",
      text: "Une page pour vider la tête et fermer les boucles ouvertes."
    },
    {
      title: "Priorités",
      text: "Un tri simple pour garder uniquement les actions utiles."
    },
    {
      title: "Semaine claire",
      text: "Une structure courte pour poser les blocs essentiels."
    },
    {
      title: "Glow up discret",
      text: "Un mini rituel pour garder ton énergie et ton organisation."
    },
    {
      title: "Prochaine étape",
      text: "Un pont naturel vers les planners et templates premium."
    }
  ],
  faq: [
    {
      question: "Le freebie remplace-t-il un planner complet ?",
      answer:
        "Non. Il donne un reset rapide pour la semaine. Les planners premium vont plus loin avec suivi, objectifs, finances et routines."
    },
    {
      question: "Comment je le reçois ?",
      answer:
        "Après inscription, tu arrives sur une page de téléchargement avec le PDF disponible immédiatement."
    },
    {
      question: "Est-ce imprimable ?",
      answer:
        "Oui. Le format est simple, léger et pensé pour une utilisation digitale ou imprimée."
    },
    {
      question: "Vais-je recevoir trop d'emails ?",
      answer:
        "Non. L'objectif est de rester utile : organisation, clarté, ressources et nouveautés importantes."
    }
  ]
};
