export type Imprimable = {
  slug: string
  title: string
  subtitle: string
  pitch: string
  inside: string[]
  pages: number
  /** Prix TTC en euros. null = prix non affiché et achat désactivé. */
  price: number | null
  /** Optionnel : lien de l'annonce Etsy. */
  etsyUrl?: string
  /** Couleur de la couverture, utilisée pour les détails graphiques */
  accent: string
  /** Slug de la catégorie de la boutique (voir `categories`) */
  categorie: string
}

/** Catégories de la boutique. Ajoute une ligne ici pour créer un nouvel onglet. */
export const categories = [
  { slug: 'business', label: 'Business' },
  { slug: 'carriere', label: 'Carrière' },
  { slug: 'beaute', label: 'Beauté' },
] as const

export const imprimables: Imprimable[] = [
  {
    slug: 'freelance-tracker',
    title: 'The Freelance Income Tracker',
    subtitle: 'Factures, dépenses et budget',
    pitch: 'Clients, factures, dépenses et budget mensuel au même endroit, pour savoir ce que tu as gagné, ce qui t’est dû et ce que tu peux dépenser.',
    inside: [
      'Fiche activité, objectifs et calcul du tarif minimum',
      '12 suivis de factures et 12 suivis de dépenses',
      'Répertoire clients et suivi de projets',
      'Budget pour revenus irréguliers',
      'Bilans trimestriels',
    ],
    pages: 80,
    price: 9,
    accent: '#0D3E3C',
    categorie: 'business',
  },
  {
    slug: 'skincare-journal',
    title: 'The Skincare Journal',
    subtitle: 'Routine, produits et suivi de la peau',
    pitch: 'Un carnet pour noter ta routine, tes produits et l’état de ta peau, et arrêter de racheter deux fois la même chose. Suivi personnel, pas un avis médical.',
    inside: [
      'Profil de peau et routine matin et soir',
      'Étagère produits avec dates d’ouverture',
      '24 fiches d’avis produit',
      '26 suivis hebdomadaires',
      'Bilans mensuels, produits terminés et liste d’envies',
    ],
    pages: 82,
    price: 9,
    accent: '#31433B',
    categorie: 'beaute',
  },
  {
    slug: 'networking-planner',
    title: 'The Networking Planner',
    subtitle: 'Prises de contact, cafés et relances',
    pitch: 'Un système simple pour contacter, préparer tes échanges et relancer, sans perdre le fil de qui tu as rencontré et de ce qui a été dit.',
    inside: [
      'Liste d’entreprises cibles et journal de contacts',
      '30 fiches de conversation',
      'Modèles de messages',
      '16 plans d’action hebdomadaires',
      'Bilans mensuels',
    ],
    pages: 84,
    price: 9,
    accent: '#1D382E',
    categorie: 'carriere',
  },
  {
    slug: 'social-media-planner',
    title: 'The 90-Day Content Planner',
    subtitle: 'Planifie, prépare et suis tes publications',
    pitch: 'Décide quoi publier, écris par lots et suis ce qui fonctionne, semaine après semaine, sur la plateforme de ton choix.',
    inside: [
      'Marque, audience et piliers de contenu',
      '13 plans de contenu hebdomadaires',
      'Banque d’idées et 28 pages de légendes',
      'Hashtags, suivi des stats et bilans mensuels',
      'Formules d’accroche',
    ],
    pages: 80,
    price: 9,
    accent: '#22304F',
    categorie: 'business',
  },
]
