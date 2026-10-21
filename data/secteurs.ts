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
    articles: ["fiche-google-business-checklist", "repondre-aux-avis-google-negatifs", "seo-local-etre-visible-dans-sa-ville"]
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
    articles: ["fiche-google-business-checklist", "site-ou-reseaux-sociaux-commerce-local", "calendrier-editorial-sans-y-passer-ses-soirees"]
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
    articles: ["site-vitrine-artisan-ce-qu-il-faut", "fiche-google-business-checklist", "repondre-aux-avis-google-negatifs"],
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
  },
  {
    slug: "agences-immobilieres",
    nom: "Agences immobilières",
    metaTitle: "Marketing digital pour agence immobilière : site, SEO, newsletters",
    metaDescription:
      "Site web, référencement local, newsletters et contenu pour agences immobilières et agents indépendants. Une consultante qui travaille chaque jour dans l'immobilier.",
    h1: "Marketing digital pour agences immobilières.",
    intro:
      "Je travaille au quotidien en marketing digital dans l'immobilier : diffusion des annonces sur les portails, base de contacts, référencement, newsletters. Je mets cette expérience au service des agences et des agents indépendants qui veulent être mieux trouvés par les acquéreurs et les vendeurs de leur secteur.",
    problemes: [
      { titre: "Un site qui ne se distingue pas", texte: "Les mêmes annonces que sur les portails, sans contenu propre sur votre secteur : Google n'a aucune raison de vous mettre en avant." },
      { titre: "Une base de contacts peu exploitée", texte: "Des acquéreurs et des vendeurs que personne ne relance, faute de temps ou d'outil adapté." },
      { titre: "Peu de visibilité sur votre quartier", texte: "Les recherches du type « agence immobilière + ville » se jouent sur la fiche Google et sur des pages locales soignées." }
    ],
    actions: [
      { titre: "Pages de quartiers et de villes", texte: "Des contenus utiles sur chaque secteur (prix, ambiance, vie locale), écrits pour les recherches des acquéreurs et des vendeurs." },
      { titre: "Fiche Google et avis", texte: "Fiche complète, avis clients suivis et réponses, pour la recherche locale." },
      { titre: "Newsletters et relance de la base", texte: "Newsletters acquéreurs et vendeurs, segmentation simple, rythme tenable." },
      { titre: "Site clair et rapide", texte: "Parcours de contact évident, estimation en ligne, pages de biens lisibles sur mobile." }
    ],
    faq: [
      { question: "Travaillez-vous avec des agents indépendants ?", answer: "Oui, comme avec des agences plus structurées. L'ampleur du travail s'adapte à votre taille et à votre temps disponible." },
      { question: "Travaillez-vous avec votre diffuseur de logiciel actuel ?", answer: "Oui. Je m'adapte à vos outils (logiciel de gestion, diffusion sur les portails, outil d'emailing) plutôt que de vous en faire changer." },
      { question: "Faut-il un blog pour une agence ?", answer: "Pas obligatoirement, mais des pages de quartier et quelques articles utiles aident beaucoup le référencement local. Je définis avec vous un rythme réaliste." }
    ],
    articles: ["fiche-google-business-checklist", "seo-local-etre-visible-dans-sa-ville", "relancer-sa-newsletter-sans-repartir-de-zero"]
  },
  {
    slug: "professions-liberales",
    nom: "Professions libérales",
    metaTitle: "Site web et SEO pour profession libérale",
    metaDescription:
      "Site web, fiche Google et référencement pour professions libérales : avocats, consultants, architectes, experts-comptables, kinésithérapeutes. Diagnostic offert.",
    h1: "Site web et référencement pour professions libérales.",
    intro:
      "Un nouveau client vous cherche d'abord sur Google : votre nom, votre spécialité, votre ville. Je construis une présence sobre et crédible, qui explique clairement ce que vous faites et facilite la prise de contact, dans le respect des règles de votre profession.",
    problemes: [
      { titre: "Une présence qui rassure peu", texte: "Un site daté ou trop vague donne peu envie de prendre contact, alors que le choix repose sur la confiance." },
      { titre: "Une spécialité mal expliquée", texte: "Les clients cherchent un besoin précis, pas un titre. Sans pages dédiées, vous n'apparaissez pas sur ces recherches." },
      { titre: "Aucune visibilité locale", texte: "La fiche Google et les pages par spécialité sont souvent absentes ou incomplètes." }
    ],
    actions: [
      { titre: "Site sobre et lisible", texte: "Présentation, spécialités, parcours et contact, avec un ton qui correspond à votre pratique." },
      { titre: "Pages par spécialité", texte: "Une page par domaine d'intervention, écrite pour les questions que se posent vos clients." },
      { titre: "Fiche Google et prise de rendez-vous", texte: "Fiche à jour et lien de rendez-vous visible, pour les recherches locales." },
      { titre: "Articles de fond", texte: "Quelques contenus utiles sur les questions fréquentes, qui montrent votre expertise sans promesse excessive." }
    ],
    faq: [
      { question: "Les règles de ma profession limitent-elles la communication ?", answer: "Certaines professions encadrent la publicité. Je rédige dans un ton informatif et je vous laisse valider les textes avec les règles de votre ordre ou de votre organisation." },
      { question: "Dois-je être présent sur les réseaux sociaux ?", answer: "Pas obligatoirement. Un site clair et une fiche Google soignée suffisent souvent à démarrer." },
      { question: "Pouvez-vous rédiger les textes ?", answer: "Oui, à partir d'un échange avec vous. Vous relisez et validez chaque texte avant publication." }
    ],
    articles: ["auditer-sa-presence-en-ligne", "fiche-google-business-checklist", "site-ou-reseaux-sociaux-commerce-local"]
  },
  {
    slug: "coachs-et-independants",
    nom: "Coachs et indépendants",
    metaTitle: "Site web et SEO pour coach et indépendant",
    metaDescription:
      "Site web, référencement et newsletters pour coachs, formateurs et indépendants : un site qui explique votre offre et trouve des clients sans dépendre des réseaux.",
    h1: "Site web et référencement pour coachs et indépendants.",
    intro:
      "Quand on travaille seul, le temps manque pour tout faire. Je vous aide à poser des bases simples : un site qui explique clairement votre offre, des pages qui remontent sur Google et une newsletter pour rester en contact, sans dépendre d'une plateforme.",
    problemes: [
      { titre: "Une offre difficile à comprendre", texte: "Si un visiteur ne comprend pas en dix secondes ce que vous proposez et pour qui, il repart." },
      { titre: "Une dépendance aux réseaux sociaux", texte: "Votre visibilité s'arrête dès que vous arrêtez de publier, et la plateforme peut changer ses règles." },
      { titre: "Pas de base de contacts", texte: "Sans liste d'abonnés, chaque lancement repart de zéro." }
    ],
    actions: [
      { titre: "Site centré sur votre offre", texte: "Pour qui, pour quoi, comment ça se passe, et comment réserver un premier échange." },
      { titre: "Référencement de vos thématiques", texte: "Des pages et articles écrits pour les recherches de vos futurs clients." },
      { titre: "Newsletter simple", texte: "Un formulaire d'inscription, une première séquence d'accueil et un rythme que vous pouvez tenir." },
      { titre: "Un cadre pour le contenu", texte: "Un calendrier léger qui évite de réinventer chaque semaine." }
    ],
    faq: [
      { question: "Je n'ai pas encore de clients, est-ce trop tôt ?", answer: "Non, c'est même le bon moment pour poser des bases propres. On commence petit, puis on développe selon vos premiers retours." },
      { question: "Dois-je écrire moi-même les textes ?", answer: "Vous me donnez la matière en un échange, je rédige, vous relisez et validez." },
      { question: "Quelle différence avec un site fait soi-même ?", answer: "Le gain principal est la structure : parcours clair, pages pensées pour la recherche et configuration technique correcte dès le départ." }
    ],
    articles: ["site-ou-reseaux-sociaux-commerce-local", "calendrier-editorial-sans-y-passer-ses-soirees", "relancer-sa-newsletter-sans-repartir-de-zero"]
  },
  {
    slug: "boutiques",
    nom: "Boutiques et e-commerce",
    metaTitle: "Site web et SEO pour boutique et e-commerce",
    metaDescription:
      "Référencement, fiches produits et newsletters pour boutiques en ligne et commerces de détail : être trouvé par des clients qui cherchent vos produits.",
    h1: "Référencement et contenu pour boutiques et e-commerce.",
    intro:
      "Une boutique se gagne sur les recherches précises : un produit, une matière, un usage. Je travaille vos fiches produits, vos catégories et vos newsletters pour que les bonnes personnes vous trouvent et reviennent.",
    problemes: [
      { titre: "Des fiches produits trop courtes", texte: "Un titre et deux lignes ne répondent ni aux questions des clients ni aux recherches sur Google." },
      { titre: "Des catégories peu visibles", texte: "Les pages de catégories sont souvent celles qui remontent le mieux, mais elles restent sans texte." },
      { titre: "Peu de clients qui reviennent", texte: "Sans newsletter ni relance, chaque vente dépend d'un nouveau visiteur." }
    ],
    actions: [
      { titre: "Fiches produits rédigées", texte: "Titres, descriptions et informations utiles, écrits pour les clients et pour la recherche." },
      { titre: "Pages de catégories", texte: "Textes d'introduction et structure claire pour les recherches générales." },
      { titre: "Newsletter et relances", texte: "Nouveautés, restocks, offres de saison et rappels de panier selon votre outil." },
      { titre: "Suivi des recherches", texte: "Un point régulier sur ce que les clients tapent pour vous trouver." }
    ],
    faq: [
      { question: "Travaillez-vous sur toutes les plateformes ?", answer: "Je travaille surtout sur les sites de boutique autonomes et sur les contenus. Pour une plateforme précise, parlons-en lors du premier échange." },
      { question: "Combien de produits puis-je faire traiter ?", answer: "On commence par les produits les plus importants, puis on étend progressivement." },
      { question: "Les résultats sont-ils rapides ?", answer: "Le référencement demande plusieurs mois. Les newsletters et fiches mieux écrites peuvent améliorer les ventes plus vite." }
    ],
    articles: ["site-ou-reseaux-sociaux-commerce-local", "relancer-sa-newsletter-sans-repartir-de-zero", "combien-de-temps-pour-voir-des-resultats"]
  },
  {
    slug: "hotels-et-gites",
    nom: "Hôtels, gîtes et chambres d'hôtes",
    metaTitle: "Site web et SEO pour hôtel, gîte et chambre d'hôtes",
    metaDescription:
      "Site web, fiche Google et référencement pour hôtels, gîtes et chambres d'hôtes : recevoir davantage de réservations directes. Diagnostic offert.",
    h1: "Site web et référencement pour hôtels, gîtes et chambres d'hôtes.",
    intro:
      "Les plateformes de réservation prennent une commission sur chaque séjour. Un site clair, une fiche Google soignée et une newsletter pour vos anciens clients vous aident à recevoir davantage de réservations en direct.",
    problemes: [
      { titre: "Une dépendance aux plateformes", texte: "Vous êtes visible là où vous payez une commission, mais peu ailleurs." },
      { titre: "Un site qui ne donne pas envie de réserver", texte: "Des photos peu mises en valeur, des tarifs flous, un parcours de réservation compliqué." },
      { titre: "Peu de liens avec les anciens clients", texte: "Les clients qui ont aimé leur séjour ne sont pas relancés." }
    ],
    actions: [
      { titre: "Site qui met le lieu en valeur", texte: "Photos, chambres, atmosphère, tarifs et accès à la réservation clairs." },
      { titre: "Fiche Google et avis", texte: "Fiche complète, avis suivis et réponses, pour les recherches du type « où dormir à [ville] »." },
      { titre: "Pages locales et saisonnières", texte: "Contenus sur la région, les activités et les événements, qui attirent des visiteurs avant leur choix d'hébergement." },
      { titre: "Newsletter pour les anciens clients", texte: "Quelques envois par an : saison, offres, nouveautés." }
    ],
    faq: [
      { question: "Mon logiciel de réservation est-il compatible ?", answer: "Dans la plupart des cas, oui : le lien ou le module de réservation s'intègre au site." },
      { question: "Dois-je arrêter les plateformes ?", answer: "Pas nécessairement. L'objectif est d'ajouter des réservations directes, pas de tout remplacer." },
      { question: "Travaillez-vous en plusieurs langues ?", answer: "Je rédige en français. Pour d'autres langues, parlons-en lors du premier échange." }
    ],
    articles: ["fiche-google-business-checklist", "seo-local-etre-visible-dans-sa-ville", "repondre-aux-avis-google-negatifs"]
  }
];
