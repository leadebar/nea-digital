import type { Post } from "@/data/posts";

export const localPosts: Post[] = [
  {
    slug: "repondre-aux-avis-google-negatifs",
    title: "Répondre à un avis Google négatif : méthode et modèles",
    metaTitle: "Répondre à un avis Google négatif : méthode et modèles",
    excerpt: "Un avis négatif n'est pas une catastrophe si la réponse est bonne. Une méthode en quatre étapes, avec des modèles de réponse à adapter.",
    category: "Web & SEO",
    date: "2026-10-21",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg",
    alsoRead: "seo-local-etre-visible-dans-sa-ville",
    sections: [
      {
        id: "pourquoi-repondre",
        heading: "Pourquoi répondre, même quand l'avis est injuste",
        paragraphs: [
          "Votre réponse n'est pas écrite pour la personne mécontente. Elle est écrite pour les clients suivants, qui lisent les avis avant de vous appeler ou de réserver. Ils regardent surtout comment vous réagissez quand quelque chose se passe mal.",
          "Une réponse calme et précise à un avis négatif rassure souvent davantage qu'une série de cinq étoiles sans commentaire. À l'inverse, une réponse agacée ou défensive fait fuir plus de clients que l'avis lui-même."
        ]
      },
      {
        id: "methode",
        heading: "Une méthode en quatre étapes",
        paragraphs: [
          "Attendez avant de répondre. Une réponse écrite à chaud est rarement la bonne. Quelques heures suffisent, mais ne laissez pas l'avis sans réponse pendant des semaines.",
          "Puis suivez toujours le même ordre, ce qui vous évite de réfléchir à chaque fois."
        ],
        list: [
          "Remercier : le client a pris le temps de s'exprimer.",
          "Reconnaître : dire ce qui n'a pas fonctionné, sans se justifier à l'excès.",
          "Proposer : une solution concrète ou un contact direct pour en parler.",
          "Rester bref : quelques lignes, sans détails qui exposent le client."
        ]
      },
      {
        id: "modeles",
        heading: "Trois modèles à adapter",
        paragraphs: ["Adaptez-les avec vos mots et le détail réel de la situation. Une réponse copiée-collée se repère immédiatement."],
        list: [
          "« Merci d'avoir pris le temps de nous écrire. Nous sommes désolés que votre expérience n'ait pas été à la hauteur. Pouvez-vous nous contacter au [numéro] pour que nous en parlions ? »",
          "Variante pour un retard : « Vous avez raison, le délai annoncé n'a pas été respecté et nous nous en excusons. Voici ce que nous avons changé pour que cela ne se reproduise pas : [action]. »",
          "Variante pour un avis qui ne correspond à aucun client connu : « Nous ne retrouvons pas votre passage dans nos dossiers. Pouvez-vous nous contacter pour que nous puissions comprendre ce qui s'est passé ? »"
        ]
      },
      {
        id: "faux-avis",
        heading: "Quand l'avis est faux ou abusif",
        paragraphs: [
          "Vous ne pouvez pas supprimer un avis simplement parce qu'il vous déplaît. Google ne retire que ceux qui enfreignent ses règles : propos injurieux, publicité, avis sans rapport avec votre activité, ou conflit d'intérêts.",
          "Si l'avis entre dans ces cas, signalez-le depuis votre fiche. Répondez quand même poliment en attendant la décision, car l'examen peut prendre du temps et rien ne garantit son issue."
        ]
      },
      {
        id: "demander-des-avis",
        heading: "Le meilleur remède : davantage d'avis positifs",
        paragraphs: [
          "Un avis négatif pèse moins quand il est entouré de nombreux avis récents. Demandez systématiquement aux clients satisfaits, à la fin d'une prestation, de laisser un mot. Un lien direct vers votre fiche, envoyé par message ou affiché sur place, facilite beaucoup le geste.",
          "N'offrez pas de contrepartie en échange d'un avis : c'est contraire aux règles de Google."
        ]
      }
    ],
    takeaways: [
      "Répondez pour les clients à venir, pas pour l'auteur de l'avis.",
      "Remerciez, reconnaissez, proposez, restez bref.",
      "Seuls les avis qui enfreignent les règles de Google peuvent être retirés.",
      "Demandez régulièrement des avis aux clients satisfaits."
    ],
    faq: [
      { q: "Faut-il répondre à tous les avis ?", a: "Idéalement oui, y compris les positifs, avec un mot court et sincère. Les avis négatifs sont ceux qui méritent le plus de soin." },
      { q: "Combien de temps pour répondre ?", a: "Quelques jours au maximum. Une réponse tardive vaut mieux que pas de réponse, mais une réponse rapide montre de la réactivité." },
      { q: "Puis-je demander à un client de modifier son avis ?", a: "Oui, après avoir résolu son problème, vous pouvez poliment lui indiquer qu'il peut mettre à jour son avis. Ne le lui imposez pas." }
    ]
  },
  {
    slug: "fiche-google-business-checklist",
    title: "Fiche Google de votre commerce : la checklist complète",
    metaTitle: "Fiche Google Business : checklist pour commerces et artisans",
    excerpt: "Catégories, horaires, photos, description, avis : les points à vérifier sur votre fiche Google pour apparaître sur les recherches proches de chez vous.",
    category: "Web & SEO",
    date: "2026-10-21",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/7663519/pexels-photo-7663519.jpeg",
    alsoRead: "repondre-aux-avis-google-negatifs",
    sections: [
      {
        id: "role",
        heading: "À quoi sert la fiche Google",
        paragraphs: [
          "Quand quelqu'un cherche un restaurant, un coiffeur ou un plombier près de chez lui, Google affiche souvent en premier une carte avec quelques fiches d'établissements. C'est là que se jouent beaucoup d'appels et de visites, avant même que le client voie votre site.",
          "La fiche est gratuite. Elle est aussi la partie du référencement sur laquelle vous avez le plus de prise rapidement."
        ]
      },
      {
        id: "identite",
        heading: "Identité et catégories",
        paragraphs: [
          "Utilisez le nom réel de votre activité, sans y ajouter de mots-clés : Google peut suspendre une fiche dont le nom est bourré de termes de recherche.",
          "Choisissez avec soin la catégorie principale, qui compte beaucoup : « Restaurant italien » est plus précis que « Restaurant ». Ajoutez ensuite quelques catégories secondaires qui correspondent vraiment à vos prestations."
        ]
      },
      {
        id: "infos",
        heading: "Informations pratiques",
        paragraphs: ["Une information fausse coûte directement des clients : un horaire erroné, un numéro qui ne répond pas, un lien cassé."],
        list: [
          "Horaires à jour, avec les jours fériés et les fermetures exceptionnelles.",
          "Numéro de téléphone que vous décrochez réellement.",
          "Lien vers votre site, vers la page la plus utile (réservation ou devis).",
          "Zone d'intervention si vous vous déplacez chez vos clients.",
          "Description qui présente votre activité en quelques phrases claires (750 caractères maximum)."
        ]
      },
      {
        id: "photos",
        heading: "Photos et contenu",
        paragraphs: [
          "Les fiches avec de vraies photos donnent davantage confiance. Montrez votre établissement, vos réalisations, votre équipe, vos produits. Évitez les images de banque d'images : elles se voient.",
          "Publiez de temps en temps une actualité (offre, nouveauté, événement). Ce n'est pas indispensable, mais cela montre que la fiche est suivie."
        ]
      },
      {
        id: "avis",
        heading: "Avis et suivi",
        paragraphs: [
          "Répondez aux avis, positifs comme négatifs, et demandez-en régulièrement aux clients satisfaits. Une fois par mois, passez cinq minutes sur la fiche pour vérifier que tout est encore exact.",
          "Vous pouvez aussi consulter dans la fiche le nombre d'appels et de demandes d'itinéraire : c'est un bon indicateur de ce qu'elle vous rapporte."
        ]
      }
    ],
    takeaways: [
      "La fiche Google est gratuite et décisive sur les recherches proches de chez vous.",
      "Le nom doit rester celui de l'activité, sans mots-clés ajoutés.",
      "La catégorie principale doit être la plus précise possible.",
      "Une information fausse fait perdre des clients : vérifiez la fiche chaque mois."
    ],
    faq: [
      { q: "Faut-il un site pour avoir une fiche Google ?", a: "Non, la fiche fonctionne sans site. Avoir un site aide cependant à présenter plus en détail vos prestations et à être trouvé sur d'autres recherches." },
      { q: "Peut-on avoir une fiche sans adresse ouverte au public ?", a: "Oui, si vous vous déplacez chez vos clients : vous pouvez masquer l'adresse et indiquer une zone d'intervention." },
      { q: "Combien de temps avant que la fiche soit visible ?", a: "Après validation par Google, qui peut passer par un appel vidéo ou un courrier, la fiche apparaît en quelques jours. Sa position dépend ensuite de la concurrence locale." }
    ]
  },
  {
    slug: "site-vitrine-artisan-ce-qu-il-faut",
    title: "Site d'artisan : ce qu'il faut vraiment mettre dessus",
    metaTitle: "Site d'artisan : les pages et contenus indispensables",
    excerpt: "Plombier, électricien, menuisier : les pages, les informations et les réflexes d'un site qui fait téléphoner, sans superflu.",
    category: "Web & SEO",
    date: "2026-10-21",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/5706021/pexels-photo-5706021.jpeg",
    alsoRead: "signes-site-internet-perd-des-clients",
    sections: [
      {
        id: "objectif",
        heading: "L'objectif : un appel ou une demande de devis",
        paragraphs: [
          "Le site d'un artisan n'a pas besoin d'être spectaculaire. Il doit répondre vite à trois questions : que faites-vous, où intervenez-vous, et comment vous joindre.",
          "Un visiteur qui a une urgence ne lit pas. Il regarde l'écran quelques secondes, puis appelle ou quitte la page."
        ]
      },
      {
        id: "page-accueil",
        heading: "Ce que la page d'accueil doit montrer",
        paragraphs: ["Tout ce qui est utile doit être visible sans défiler."],
        list: [
          "Votre métier et votre zone dans le titre, par exemple « Plombier à [ville] ».",
          "Un numéro cliquable depuis un téléphone.",
          "Un bouton de demande de devis.",
          "Vos principales interventions, en quelques lignes.",
          "Une ou deux réalisations en photo."
        ]
      },
      {
        id: "pages",
        heading: "Les pages à créer",
        paragraphs: [
          "Une page par grande intervention (par exemple dépannage, installation, rénovation) permet d'être trouvé sur des recherches précises. Chaque page doit avoir un texte à elle, pas le même paragraphe répété.",
          "Ajoutez une page de réalisations, avec de vraies photos de chantiers et, si le client est d'accord, quelques mots de sa part. Une FAQ répond aux questions qu'on vous pose au téléphone et vous évite des appels inutiles."
        ]
      },
      {
        id: "local",
        heading: "Être trouvé dans votre zone",
        paragraphs: [
          "Indiquez clairement les communes où vous intervenez, dans le texte et sur votre fiche Google. Si votre zone est large, des pages dédiées aux communes principales aident, à condition que le contenu soit réellement différent d'une page à l'autre.",
          "Faites correspondre vos informations partout : nom, numéro et site doivent être identiques sur votre site, votre fiche Google et vos annuaires."
        ]
      },
      {
        id: "erreurs",
        heading: "Les erreurs fréquentes",
        paragraphs: [
          "Un site lent ou illisible sur téléphone fait perdre la majorité des visiteurs, qui viennent presque tous de leur mobile. Les photos trop lourdes, les textes trop longs et les formulaires interminables sont les causes habituelles.",
          "Autre erreur courante : ne jamais mettre le site à jour. Une page qui annonce des horaires ou des tarifs dépassés nuit plus qu'elle ne rend service."
        ]
      }
    ],
    takeaways: [
      "Un site d'artisan doit faire téléphoner ou demander un devis, rien de plus.",
      "Métier, zone et numéro cliquable doivent être visibles dès l'arrivée.",
      "Une page par intervention, avec un texte propre à chacune.",
      "Nom, numéro et site doivent être identiques partout."
    ],
    faq: [
      { q: "Un artisan a-t-il vraiment besoin d'un site ?", a: "Ce n'est pas obligatoire, mais un site vous appartient, ne dépend d'aucune plateforme et permet d'être trouvé sur des recherches précises que la fiche Google ne couvre pas." },
      { q: "Combien de pages faut-il ?", a: "Pour commencer : accueil, une page par grande intervention, réalisations, FAQ et contact. On complète ensuite selon les demandes réelles." },
      { q: "Faut-il un blog ?", a: "Pas au départ. Il devient utile quand vous avez le temps d'écrire régulièrement sur les questions que vos clients posent." }
    ]
  },
  {
    slug: "site-ou-reseaux-sociaux-commerce-local",
    title: "Site web ou réseaux sociaux : que choisir pour un commerce local",
    metaTitle: "Site web ou réseaux sociaux pour un commerce local ?",
    excerpt: "Les réseaux demandent du temps chaque semaine, le site travaille en continu. Ce que chacun apporte, et par où commencer quand on a peu de temps.",
    category: "Stratégie",
    date: "2026-10-21",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/30332440/pexels-photo-30332440.jpeg",
    alsoRead: "calendrier-editorial-sans-y-passer-ses-soirees",
    sections: [
      {
        id: "difference",
        heading: "Deux outils qui ne jouent pas le même rôle",
        paragraphs: [
          "Les réseaux sociaux servent à rester visible auprès de personnes qui vous connaissent déjà ou qui tombent sur vos publications. Le site et la fiche Google servent à être trouvé par quelqu'un qui cherche activement votre service.",
          "Ce n'est pas la même intention : le premier attire l'attention, le second répond à un besoin immédiat."
        ]
      },
      {
        id: "reseaux",
        heading: "Ce que les réseaux apportent, et leur coût",
        paragraphs: [
          "Les réseaux permettent de montrer votre travail, de rester présent dans l'esprit de vos clients et de créer un lien. Ils fonctionnent mieux pour les activités très visuelles.",
          "Leur limite : ils demandent un rythme régulier. Quand vous arrêtez de publier, la visibilité tombe très vite, et vous dépendez des règles d'une plateforme qui changent."
        ]
      },
      {
        id: "site",
        heading: "Ce que le site et la fiche Google apportent",
        paragraphs: [
          "Un site bien construit et une fiche Google à jour travaillent sans que vous y consacriez du temps chaque semaine. Ils vous font apparaître quand un client cherche, exactement au moment où il veut acheter ou réserver.",
          "Le résultat n'est pas immédiat : le référencement demande plusieurs mois pour produire son effet. En contrepartie, il ne s'arrête pas quand vous partez en vacances."
        ]
      },
      {
        id: "commencer",
        heading: "Par où commencer quand on manque de temps",
        paragraphs: [
          "Si vous ne pouvez faire qu'une chose, commencez par la fiche Google : elle est gratuite et rapide à mettre en place. Ensuite, un site simple et clair, qui indique ce que vous faites, où et comment vous joindre.",
          "Les réseaux viennent en complément, au rythme que vous pouvez réellement tenir. Une publication par semaine tenue pendant un an vaut mieux qu'une présence quotidienne abandonnée au bout de deux mois."
        ]
      }
    ],
    takeaways: [
      "Les réseaux attirent l'attention, le site et la fiche Google répondent à une recherche.",
      "Les réseaux exigent un rythme régulier, le référencement travaille en continu.",
      "Avec peu de temps : fiche Google d'abord, site ensuite, réseaux en complément."
    ],
    faq: [
      { q: "Peut-on avoir des clients sans réseaux sociaux ?", a: "Oui. Beaucoup d'activités locales reçoivent leurs demandes par Google et le bouche-à-oreille. Les réseaux aident surtout les métiers très visuels." },
      { q: "Le site remplace-t-il la fiche Google ?", a: "Non, les deux se complètent. La fiche couvre les recherches proches de chez vous, le site détaille vos prestations et couvre d'autres recherches." }
    ]
  }
];
