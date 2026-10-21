export type Secteur = {
  slug: string;
  nom: string;
  /** Balise <title> (le gabarit ajoute " | Néa Digital"). */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problemes: { titre: string; texte: string }[];
  actions: { titre: string; texte: string }[];
  faq: { question: string; answer: string }[];
  articles: string[];
  reference?: { nom: string; domaine: string; accroche: string; points: string[]; label: string; href: string; image?: string; imageMobile?: string };
};

export const secteurs: Secteur[] = [
  {
    slug: "restaurants",
    nom: "Restaurants",
    metaTitle: "Site web et SEO pour restaurant",
    metaDescription:
      "Création de site web, fiche Google et référencement local pour restaurants : être trouvé quand on cherche où manger près de chez soi. Diagnostic offert.",
    h1: "Site web et référencement pour restaurants.",
    intro:
      "Un client qui cherche où dîner regarde d'abord Google : la fiche, les avis, les horaires, le menu. Je m'occupe de ce qui s'affiche à ce moment-là, pour que votre restaurant soit trouvé, que l'information soit juste et que réserver soit simple.",
    problemes: [
      { titre: "Une fiche Google incomplète", texte: "Horaires faux, peu de photos, avis sans réponse : c'est la première chose que voient vos futurs clients." },
      { titre: "Un site qui n'aide pas à réserver", texte: "Menu en PDF illisible sur mobile, pas de bouton de réservation, adresse difficile à trouver." },
      { titre: "Une visibilité qui dépend des réseaux", texte: "Si vos publications s'arrêtent, plus personne ne vous trouve. Le référencement, lui, travaille en continu." }
    ],
    actions: [
      { titre: "Fiche Google optimisée", texte: "Catégories, horaires, photos, description et suivi des avis, pour apparaître sur les recherches proches." },
      { titre: "Site rapide et lisible sur mobile", texte: "Carte, horaires, accès et réservation visibles en quelques secondes." },
      { titre: "Pages pensées pour la recherche locale", texte: "Des textes écrits pour les recherches de vos clients (type de cuisine, quartier, privatisation, événements)." },
      { titre: "Newsletter ou actualités régulières", texte: "Menus de saison, événements, nouveautés : un rythme simple que je peux tenir pour vous." }
    ],
    faq: [
      { question: "Faut-il un site si j'ai déjà une fiche Google ?", answer: "La fiche Google est indispensable, mais un site vous appartient et sert de base : carte à jour, réservation, pages qui remontent sur des recherches précises. Les deux se complètent." },
      { question: "Travaillez-vous avec des restaurants loin de chez vous ?", answer: "Oui. Je travaille à distance, par téléphone, visio et e-mail, partout en France." },
      { question: "Combien de temps avant de voir des résultats ?", answer: "La fiche Google peut bouger en quelques semaines. Pour le site et le référencement, comptez plusieurs mois. Je ne promets pas de position précise." }
    ],
    articles: ["seo-local-etre-visible-dans-sa-ville", "signes-site-internet-perd-des-clients"]
  },
  {
    slug: "salons",
    nom: "Salons de coiffure et de beauté",
    metaTitle: "Site web et SEO pour salon de coiffure ou de beauté",
    metaDescription:
      "Site web, fiche Google et référencement local pour salons de coiffure, instituts et esthéticiennes : plus de prises de rendez-vous. Diagnostic offert.",
    h1: "Site web et référencement pour salons de coiffure et de beauté.",
    intro:
      "Vos clientes cherchent un salon près de chez elles, regardent les photos et les avis, puis réservent. Je vous aide à apparaître au bon moment, avec un site clair et une prise de rendez-vous simple.",
    problemes: [
      { titre: "Peu visible dans votre quartier", texte: "Sans fiche Google soignée, un salon voisin apparaît avant vous sur les mêmes recherches." },
      { titre: "Un site qui ne montre pas votre travail", texte: "Prestations, tarifs, équipe et photos doivent être clairs pour donner envie de réserver." },
      { titre: "Aucun temps pour la communication", texte: "Entre les clientes et la gestion, les publications passent en dernier." }
    ],
    actions: [
      { titre: "Fiche Google complète", texte: "Prestations, photos, horaires et réponses aux avis, pour les recherches du type « coiffeur près de moi »." },
      { titre: "Site avec prise de rendez-vous", texte: "Liste des prestations, galerie, équipe et lien de réservation en évidence." },
      { titre: "Pages par prestation", texte: "Une page par service (coloration, soin du visage, onglerie...) pour être trouvé sur des recherches précises." },
      { titre: "Contenu et newsletter", texte: "Offres, nouveautés, conseils : un calendrier simple pour rester présent sans y passer vos soirées." }
    ],
    faq: [
      { question: "Je travaille déjà avec un logiciel de réservation, est-ce compatible ?", answer: "Oui, le lien ou le widget de votre outil s'intègre au site. Je ne vous demande pas de changer d'outil." },
      { question: "Dois-je fournir mes photos ?", answer: "Idéalement oui, elles reflètent votre salon. Je vous indique quoi photographier et comment les préparer." },
      { question: "Faut-il être sur les réseaux sociaux ?", answer: "Pas obligatoirement. La fiche Google et le site apportent des clientes sans publier tous les jours." }
    ],
    articles: ["seo-local-etre-visible-dans-sa-ville", "calendrier-editorial-sans-y-passer-ses-soirees"]
  },
  {
    slug: "artisans",
    nom: "Artisans",
    metaTitle: "Site web et SEO pour artisan (plombier, électricien...)",
    metaDescription:
      "Site web, fiche Google et référencement local pour artisans : plombiers, électriciens, menuisiers. Être trouvé par les clients de votre zone. Diagnostic offert.",
    h1: "Site web et référencement pour artisans.",
    intro:
      "Quand un client a une fuite ou une panne, il cherche sur Google et appelle l'un des premiers résultats. Je vous aide à en faire partie : fiche Google, site clair, pages par zone et par intervention.",
    problemes: [
      { titre: "Dépendre uniquement du bouche-à-oreille", texte: "Il fonctionne, mais il ne suffit pas à remplir un planning ni à changer de zone." },
      { titre: "Pas de site, ou un site introuvable", texte: "Un site doit dire ce que vous faites, où, et donner un numéro à appeler." },
      { titre: "Une fiche Google peu travaillée", texte: "Zone d'intervention, services et avis clients comptent beaucoup sur les recherches urgentes." }
    ],
    actions: [
      { titre: "Fiche Google avec zone d'intervention", texte: "Services, communes couvertes, photos de chantiers et réponses aux avis." },
      { titre: "Site simple qui fait téléphoner", texte: "Numéro cliquable, devis en ligne, services et réalisations visibles dès l'arrivée." },
      { titre: "Pages par intervention et par commune", texte: "Par exemple « dépannage plomberie » ou « installation électrique » avec la zone concernée, pour les recherches locales." },
      { titre: "Suivi simple", texte: "Un point régulier sur les appels et les demandes qui viennent du site." }
    ],
    faq: [
      { question: "Je me déplace dans plusieurs communes, comment le montrer ?", answer: "Avec une zone d'intervention sur la fiche Google et des pages dédiées aux communes principales, sans texte répété d'une page à l'autre." },
      { question: "Je n'ai pas de photos de chantiers, c'est un problème ?", answer: "Pas au départ. On commence avec ce que vous avez, puis je vous indique comment en constituer au fil des chantiers." },
      { question: "Pouvez-vous gérer le site après sa mise en ligne ?", answer: "Oui, je peux m'occuper des mises à jour et des nouveaux contenus, ou vous laisser autonome selon votre préférence." }
    ],
    articles: ["seo-local-etre-visible-dans-sa-ville", "combien-de-temps-pour-voir-des-resultats"],
    reference: {
      nom: "LP Plomberie",
      domaine: "lpplomberie.com",
      accroche: "Le site web et l'Instagram d'une entreprise de plomberie, que je fais évoluer au fil du temps.",
      points: ["Appel et devis en un clic, sur ordinateur et mobile", "Pages services, réalisations, avis et FAQ", "Stratégie Instagram"],
      image: "/images/references/lp-plomberie-desktop.jpg",
      imageMobile: "/images/references/lp-plomberie-mobile.jpg",
      label: "Voir le site",
      href: "https://lpplomberie.com"
    }
  }
];
