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
  name: "La Checklist Audit de Présence Digitale",
  eyebrow: "Freebie",
  headline: "Faites le point sur votre présence en ligne en 20 minutes.",
  description:
    "Une checklist courte pour vérifier ce qui fonctionne, ce qui bloque et ce qu'il faut corriger en premier sur votre site, votre SEO et vos réseaux.",
  pages: "5 pages",
  filePath: "/freebies/audit-presence-digitale.pdf",
  fileName: "audit-presence-digitale.pdf",
  benefits: [
    "Repérer les points bloquants de votre site en quelques minutes.",
    "Vérifier les bases du SEO sans jargon technique.",
    "Faire le tri entre ce qui est urgent et ce qui peut attendre.",
    "Arriver au premier échange avec une vision claire de vos priorités."
  ],
  preview: [
    {
      title: "Site",
      text: "Vitesse, affichage mobile, structure : les points à vérifier en premier."
    },
    {
      title: "SEO",
      text: "Les bases pour être trouvé sur Google, expliquées simplement."
    },
    {
      title: "Contenu",
      text: "Ce qui manque pour donner envie de rester ou de revenir."
    },
    {
      title: "Réseaux",
      text: "Cohérence et régularité, avant la quantité."
    },
    {
      title: "Priorités",
      text: "Un tri simple pour savoir par quoi commencer."
    }
  ],
  faq: [
    {
      question: "Ce freebie remplace-t-il un audit complet ?",
      answer:
        "Non. C'est un point de départ pour repérer vos priorités. Néa Strategy va plus loin avec une analyse complète et un plan d'action détaillé."
    },
    {
      question: "Comment je le reçois ?",
      answer:
        "Après inscription, tu arrives sur une page de téléchargement avec le PDF disponible immédiatement."
    },
    {
      question: "C'est technique ?",
      answer:
        "Non. Chaque point est expliqué simplement, sans jargon, pour être utilisable même sans connaissances techniques."
    },
    {
      question: "Vais-je recevoir trop d'emails ?",
      answer:
        "Non. L'objectif est de rester utile : marketing digital, SEO et actualités importantes, rien de plus."
    }
  ]
};
