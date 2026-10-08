export type Imprimable = {
  slug: string
  title: string
  subtitle: string
  pitch: string
  inside: string[]
  pages: number
  /** À DÉFINIR : prix en euros. null = prix non affiché. */
  price: number | null
  /** À DÉFINIR : lien de paiement (Lemon Squeezy, Gumroad, Stripe Payment Link). Vide = bouton désactivé. */
  buyUrl: string
  /** Optionnel : lien de l'annonce Etsy. */
  etsyUrl?: string
  /** Couleur de la couverture, utilisée pour les détails graphiques */
  accent: string
}

export const imprimables: Imprimable[] = [
  {
    slug: 'freelance-tracker',
    title: 'The Freelance Income Tracker',
    subtitle: 'Invoices, expenses and budgets',
    pitch: 'Clients, factures, dépenses et budget mensuel au même endroit, pour savoir ce que tu as gagné, ce qui t’est dû et ce que tu peux dépenser.',
    inside: [
      'Fiche activité, objectifs et calcul du tarif minimum',
      '12 suivis de factures et 12 suivis de dépenses',
      'Répertoire clients et suivi de projets',
      'Budget pour revenus irréguliers',
      'Bilans trimestriels',
    ],
    pages: 80,
    price: null,
    buyUrl: '',
    accent: '#0D3E3C',
  },
  {
    slug: 'skincare-journal',
    title: 'The Skincare Journal',
    subtitle: 'Routine, products and skin log',
    pitch: 'Un carnet pour noter ta routine, tes produits et l’état de ta peau, et arrêter de racheter deux fois la même chose. Suivi personnel, pas un avis médical.',
    inside: [
      'Profil de peau et routine matin et soir',
      'Étagère produits avec dates d’ouverture',
      '24 fiches d’avis produit',
      '26 suivis hebdomadaires',
      'Bilans mensuels, produits terminés et wishlist',
    ],
    pages: 82,
    price: null,
    buyUrl: '',
    accent: '#31433B',
  },
  {
    slug: 'networking-planner',
    title: 'The Networking Planner',
    subtitle: 'Outreach, coffee chats and follow-ups',
    pitch: 'Un système simple pour contacter, préparer tes échanges et relancer, sans perdre le fil de qui tu as rencontré et de ce qui a été dit.',
    inside: [
      'Liste d’entreprises cibles et journal de contacts',
      '30 fiches de conversation',
      'Modèles de messages',
      '16 plans d’action hebdomadaires',
      'Bilans mensuels',
    ],
    pages: 84,
    price: null,
    buyUrl: '',
    accent: '#1D382E',
  },
  {
    slug: 'social-media-planner',
    title: 'The 90-Day Content Planner',
    subtitle: 'Plan, batch and track your posts',
    pitch: 'Décide quoi publier, écris par lots et suis ce qui fonctionne, semaine après semaine, sur la plateforme de ton choix.',
    inside: [
      'Marque, audience et piliers de contenu',
      '13 plans de contenu hebdomadaires',
      'Banque d’idées et 28 pages de légendes',
      'Hashtags, suivi des stats et bilans mensuels',
      'Formules d’accroche',
    ],
    pages: 80,
    price: null,
    buyUrl: '',
    accent: '#22304F',
  },
]
