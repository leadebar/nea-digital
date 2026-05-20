export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const categories = [
  "Productivité",
  "Organisation",
  "Marketing digital",
  "Pinterest",
  "TikTok",
  "Branding",
  "Finances personnelles",
  "Outils digitaux",
  "Business digital",
  "Lifestyle digital"
];

export const posts: Post[] = [
  {
    slug: "creer-systeme-organisation-digitale",
    title: "Créer une organisation digitale simple",
    excerpt: "Relier objectifs, planning, contenu et finances sans multiplier les outils.",
    category: "Organisation",
    date: "2026-05-01",
    readTime: "7 min"
  },
  {
    slug: "pinterest-marketing-marque-premium",
    title: "Pinterest : donner plus de visibilité à ses ressources digitales",
    excerpt: "Comprendre comment Pinterest peut aider une ressource digitale à être trouvée plus longtemps.",
    category: "Pinterest",
    date: "2026-04-18",
    readTime: "8 min"
  },
  {
    slug: "budget-personnel-clair",
    title: "Finances personnelles : suivre son budget",
    excerpt: "Une structure simple pour suivre revenus, dépenses, épargne et objectifs.",
    category: "Finances personnelles",
    date: "2026-03-26",
    readTime: "6 min"
  }
];
