export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  href: string;
  accent: string;
  includes: string[];
  headline: string;
  description: string;
  ctaLabel: string;
  benefits: string[];
  formats: string[];
  audience: string[];
  heroVisual?: string;
  gallery?: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const products: Product[] = [
  {
    slug: "digital-planner",
    name: "Néa Digital Planner",
    category: "Organisation",
    price: "29 EUR",
    summary: "Planifie tes semaines, tes objectifs et tes projets au même endroit.",
    href: "/products/digital-planner",
    accent: "linen",
    includes: ["Planner principal 2026", "PDF A4 imprimable", "4 bonus inclus", "Version Google Sheets", "Guide d'utilisation"],
    headline: "Un planner 2026 complet pour organiser l'année sans multiplier les fichiers.",
    description:
      "Le Néa Digital Planner réunit planning annuel, objectifs, routines, suivi projets et espaces de bilan. Il est pensé pour être utilisé en digital ou imprimé, avec une version Google Sheets pour suivre certains éléments plus facilement.",
    ctaLabel: "Commander le planner",
    benefits: [
      "Clarifier les priorités de l'année, du mois et de la semaine.",
      "Garder au même endroit les routines, projets et objectifs.",
      "Utiliser un format compatible impression, tablette et Google Sheets."
    ],
    formats: [
      "PDF principal au format A4, haute qualité 300 dpi.",
      "4 bonus : Budget, Student, Habit et Wellness.",
      "Version Google Sheets / Excel avec guide pas-à-pas.",
      "Utilisation possible sur GoodNotes, Notability ou Notes Apple."
    ],
    audience: [
      "Pour organiser une année complète sans planner trop chargé.",
      "Pour suivre projets personnels, études, activité ou finances.",
      "Pour celles qui veulent une ressource imprimable et digitale."
    ],
    heroVisual: "/resources/digital-planner/lifestyle-hero.png",
    gallery: [
      "/resources/digital-planner/collection.png",
      "/resources/digital-planner/open-planner.png",
      "/resources/digital-planner/pages-mosaic.png",
      "/resources/digital-planner/ipad-mockup.png"
    ],
    faq: [
      {
        question: "Comment je reçois le planner ?",
        answer:
          "Téléchargement immédiat après paiement. Tu reçois aussi un e-mail avec tous les fichiers : PDF principal, 4 bonus et version Google Sheets, sous 2 minutes maximum."
      },
      {
        question: "Comment ça marche avec Google Sheets ?",
        answer:
          "Tu importes le fichier dans Google Drive, tu fais clic droit, puis Ouvrir avec Google Sheets et Enregistrer comme Google Sheets. Un guide pas-à-pas est inclus dans le téléchargement."
      },
      {
        question: "Le planner est-il imprimable ?",
        answer:
          "Oui. Le format A4 standard est prévu pour une impression haute qualité en 300 dpi. Tu peux l'imprimer, le faire relier ou l'utiliser en digital sur tablette."
      },
      {
        question: "Est-ce que je peux l'utiliser pour 2027 ?",
        answer:
          "L'édition 2026 est datée pour cette année. Une édition 2027 sera disponible, avec une remise de fidélité prévue pour les clientes de l'édition 2026."
      },
      {
        question: "Et si je ne suis pas satisfaite ?",
        answer:
          "Tu envoies un mail dans les 14 jours suivant ton achat. Le remboursement est intégral, sans question et sans justification."
      },
      {
        question: "Le paiement est-il sécurisé ?",
        answer:
          "Oui. Le paiement passe par Stripe ou PayPal. Aucune coordonnée bancaire ne transite par nos serveurs."
      },
      {
        question: "Est-ce que je peux l'offrir ?",
        answer:
          "Oui. Pour une crémaillère, un nouveau départ, une fin d'études ou un anniversaire, écris-nous pour demander une version cadeau personnalisée."
      }
    ]
  },
  {
    slug: "90-days-reset",
    name: "90 Days Reset",
    category: "Reset personnel",
    price: "34 EUR",
    summary: "Un plan de 90 jours pour faire le point et reprendre une routine stable.",
    href: "/products/90-days-reset",
    accent: "sand",
    includes: ["Audit de départ", "Vision 90 jours", "Suivi habitudes", "Pages journaling", "Bilans hebdomadaires"],
    headline: "Une ressource guidée pour reprendre une routine claire sur 90 jours.",
    description:
      "90 Days Reset aide à faire le tri, poser des priorités et suivre une progression réaliste pendant trois mois. La structure reste simple : observer, choisir, planifier, ajuster.",
    ctaLabel: "Commander le reset",
    benefits: [
      "Faire le point sur ses priorités personnelles et professionnelles.",
      "Mettre en place des habitudes faciles à suivre.",
      "Mesurer les progrès chaque semaine sans surcharge."
    ],
    formats: [
      "PDF digital et imprimable.",
      "Pages d'audit, routines, journaling et bilans.",
      "Structure non datée utilisable à tout moment de l'année."
    ],
    audience: [
      "Pour repartir sur une base plus claire.",
      "Pour remettre de l'ordre dans ses habitudes.",
      "Pour suivre une période de changement sans système compliqué."
    ],
    faq: [
      {
        question: "Quand puis-je commencer le reset ?",
        answer: "Quand tu veux. La ressource n'est pas liée à une date précise."
      },
      {
        question: "Est-ce imprimable ?",
        answer: "Oui, les pages sont pensées pour une utilisation digitale ou imprimée."
      },
      {
        question: "Combien de temps faut-il chaque semaine ?",
        answer: "Un point court de 20 à 30 minutes suffit pour remplir le bilan et préparer la semaine suivante."
      }
    ]
  },
  {
    slug: "finance-planner",
    name: "Finance Planner",
    category: "Finances personnelles",
    price: "27 EUR",
    summary: "Suis ton budget, tes dépenses, ton épargne et tes objectifs.",
    href: "/products/finance-planner",
    accent: "olive",
    includes: ["Budget mensuel", "Suivi dépenses", "Épargne", "Dettes", "Objectifs financiers"],
    headline: "Un planner finance pour suivre son argent avec méthode.",
    description:
      "Finance Planner rassemble budget mensuel, dépenses, épargne, dettes et objectifs financiers. Il aide à lire sa situation plus rapidement et à prendre de meilleures décisions.",
    ctaLabel: "Commander le planner finance",
    benefits: [
      "Comprendre les entrées, sorties et dépenses récurrentes.",
      "Suivre l'épargne et les objectifs mois après mois.",
      "Garder une vue simple sur les dettes et priorités financières."
    ],
    formats: [
      "PDF digital et imprimable.",
      "Tableaux mensuels pour budget, dépenses et objectifs.",
      "Pages de suivi pour épargne, dettes et bilans."
    ],
    audience: [
      "Pour reprendre le contrôle de son budget personnel.",
      "Pour suivre une épargne ou un objectif précis.",
      "Pour éviter les tableaux trop complexes."
    ],
    faq: [
      {
        question: "Est-ce adapté si je débute avec le budget ?",
        answer: "Oui. Les pages sont pensées pour suivre l'essentiel sans jargon financier."
      },
      {
        question: "Puis-je l'utiliser chaque mois ?",
        answer: "Oui. La structure est prévue pour un suivi mensuel régulier."
      },
      {
        question: "Est-ce un conseil financier personnalisé ?",
        answer: "Non. C'est une ressource d'organisation personnelle, pas un conseil financier individualisé."
      }
    ]
  }
];
