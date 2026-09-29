export type PostSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  sections: PostSection[];
  takeaways: string[];
};

export const categories = ["Stratégie", "Contenu", "Web & SEO"];

export const posts: Post[] = [
  {
    slug: "auditer-sa-presence-en-ligne",
    title: "Auditer sa présence en ligne : par où commencer",
    excerpt: "Site, SEO, contenu, réseaux : une méthode simple pour savoir ce qui fonctionne et ce qui bloque, avant de se lancer dans des changements.",
    category: "Stratégie",
    date: "2026-08-12",
    readTime: "9 min",
    image: "https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg",
    sections: [
      {
        id: "pourquoi",
        heading: "Pourquoi auditer avant d'agir",
        paragraphs: [
          "La plupart des entreprises ajoutent des actions marketing sans savoir si les bases sont solides : un nouveau post, une campagne de pub, une refonte partielle du site. Le résultat est rarement à la hauteur, parce que le problème n'était pas là où on a cherché.",
          "C'est une situation qu'on retrouve très souvent : une entreprise qui publie beaucoup, mais dont le site ne convertit pas ; ou l'inverse, un site soigné qui reste invisible parce que personne ne travaille le référencement. Dans les deux cas, ajouter de l'action ne corrige rien tant que le vrai point de blocage n'est pas identifié.",
          "Un audit sert à poser ce diagnostic avant de dépenser du temps ou du budget. Il ne s'agit pas de tout refaire, mais de savoir précisément ce qui mérite d'être corrigé en premier, et ce qui, au contraire, fonctionne déjà et ne doit pas être touché."
        ]
      },
      {
        id: "site",
        heading: "Le site : la vitrine que personne ne relit",
        paragraphs: [
          "Un site se construit une fois, puis on l'oublie. Les offres changent, les tarifs évoluent, une page reste en ligne alors qu'elle ne correspond plus à rien, et personne ne s'en aperçoit, parce que personne ne le relit avec un regard neuf.",
          "L'audit consiste à se remettre à la place d'un visiteur qui découvre le site pour la première fois : comprend-il en quelques secondes ce que vous proposez ? Trouve-t-il facilement comment vous contacter ? Le site s'affiche-t-il correctement sur son téléphone ?"
        ],
        list: [
          "Le site s'affiche correctement sur mobile, pas seulement sur ordinateur",
          "Le temps de chargement reste raisonnable, sans attente frustrante",
          "Un visiteur comprend l'offre en quelques secondes, sans avoir à chercher",
          "Il existe un chemin clair vers le contact ou l'achat, visible depuis chaque page",
          "Les informations affichées (offres, tarifs, coordonnées) sont à jour"
        ]
      },
      {
        id: "seo",
        heading: "Le SEO : être trouvé, pas juste exister",
        paragraphs: [
          "Un site qui existe sans apparaître sur Google reste largement invisible, même s'il est bien conçu. Le test le plus simple reste de chercher son propre nom ou son activité depuis un moteur de recherche : si le site n'apparaît pas en première page, il y a probablement un problème de structure ou d'indexation à corriger avant tout le reste.",
          "Le SEO n'est pas qu'une affaire de mots-clés. Il tient aussi à des détails techniques simples à vérifier : chaque page a-t-elle un titre et une description propres ? Les images ont-elles un texte alternatif ? Aucune page utile n'est-elle bloquée par erreur aux moteurs de recherche ?"
        ]
      },
      {
        id: "contenu-reseaux",
        heading: "Contenu et réseaux : la régularité avant la quantité",
        paragraphs: [
          "Un contenu isolé, aussi bon soit-il, a peu d'effet. Ce qui construit la confiance, c'est la régularité : un rythme de publication tenable, maintenu sur plusieurs mois, plutôt qu'une accumulation ponctuelle suivie de longs silences.",
          "Sur les réseaux, la question à se poser n'est pas « est-ce que je publie assez », mais « est-ce que je publie sur le bon canal, pour les bonnes personnes ». Un compte actif mais qui n'apporte aucun contact ne mérite pas le même temps qu'un canal qui, même moins suivi, convertit réellement."
        ]
      },
      {
        id: "priorisation",
        heading: "Prioriser plutôt que tout corriger d'un coup",
        paragraphs: [
          "Une fois le diagnostic posé, tout n'a pas la même urgence. Ce qui bloque un visiteur au moment de vous contacter passe avant ce qui améliorerait légèrement la visibilité à long terme.",
          "Un moyen simple de trier : reprendre chaque point relevé et le classer en trois colonnes : à corriger cette semaine, à corriger ce mois-ci, à prévoir plus tard sans urgence. C'est cette hiérarchie, et non une liste de tout ce qui pourrait être amélioré, qui rend un plan d'action réellement suivable."
        ]
      }
    ],
    takeaways: [
      "Un audit sert à identifier le vrai point de blocage avant d'ajouter de nouvelles actions.",
      "Site, SEO, contenu et réseaux se vérifient séparément : un problème sur un axe n'en révèle pas forcément un sur les autres.",
      "Toutes les corrections n'ont pas la même urgence : prioriser change tout."
    ]
  },
  {
    slug: "calendrier-editorial-sans-y-passer-ses-soirees",
    title: "Tenir un calendrier éditorial sans y passer ses soirées",
    excerpt: "Newsletter, blog, réseaux sociaux : une structure simple pour publier régulièrement sans réinventer le contenu chaque semaine.",
    category: "Contenu",
    date: "2026-07-28",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/33136468/pexels-photo-33136468.jpeg",
    sections: [
      {
        id: "probleme",
        heading: "Le vrai problème n'est pas le manque d'idées",
        paragraphs: [
          "La difficulté n'est presque jamais de trouver un sujet. C'est de le faire chaque semaine, sans que ça devienne une charge qui passe après tout le reste, après les clients, après l'administratif, après tout ce qui semble plus urgent sur le moment.",
          "Résultat : le contenu part par vagues. Trois semaines actives, puis un silence de deux mois. Ce rythme irrégulier coûte plus cher qu'un rythme plus modeste mais tenu, parce qu'il faut à chaque fois reconstruire l'habitude de lecture chez ceux qui suivent.",
          "Un calendrier éditorial efficace n'est pas une longue liste de sujets à trouver, mais une structure qui indique quoi produire, sous quel format, et pour quel canal, de façon à ne plus avoir à se poser la question chaque semaine."
        ]
      },
      {
        id: "structure",
        heading: "Une structure qui tient sur une seule page",
        paragraphs: [
          "Trois colonnes suffisent la plupart du temps : le sujet, le format (article, newsletter, post), et la date de publication. Le reste (brouillons, visuels, brainstorming) vit ailleurs, dans un dossier ou un document séparé.",
          "L'objectif n'est pas d'avoir un outil sophistiqué avec des dizaines de champs, mais un calendrier que vous ouvrez réellement chaque semaine, sans effort. Un calendrier trop complet, qu'on n'ouvre plus au bout d'un mois, ne sert à rien."
        ],
        list: [
          "Sujet : une phrase, pas un titre définitif",
          "Format : article, newsletter, post, ou les trois à la fois",
          "Canal : où ce contenu sera publié en premier",
          "Date : une échéance réaliste, pas une date idéale"
        ]
      },
      {
        id: "reutiliser",
        heading: "Réutiliser plutôt que produire à chaque fois",
        paragraphs: [
          "Un article de blog peut devenir trois posts, un paragraphe de newsletter et une question pour les réseaux. La matière existe déjà : il s'agit de la redécouper, pas de la recréer entièrement à chaque publication.",
          "Cette logique de réutilisation est souvent ce qui fait la différence entre un calendrier tenu pendant deux mois et un calendrier tenu sur la durée. Produire une fois, diffuser plusieurs fois, sous des formats adaptés à chaque canal."
        ]
      },
      {
        id: "rythme-realiste",
        heading: "Choisir un rythme qu'on peut vraiment tenir",
        paragraphs: [
          "Un rythme ambitieux annoncé puis abandonné envoie un signal plus négatif qu'un rythme modeste tenu sans faille. Mieux vaut une newsletter mensuelle publiée quinze mois de suite qu'une newsletter hebdomadaire arrêtée au bout de trois semaines.",
          "Le bon rythme est celui qui survit aux semaines chargées, pas celui qui fonctionne seulement quand tout va bien."
        ]
      }
    ],
    takeaways: [
      "Le problème n'est pas de trouver des idées, mais de tenir un rythme dans la durée.",
      "Un calendrier simple, ouvert chaque semaine, vaut mieux qu'un outil complet qu'on abandonne.",
      "Un contenu peut se redécouper en plusieurs formats plutôt que d'en produire un nouveau à chaque fois."
    ]
  },
  {
    slug: "signes-site-internet-perd-des-clients",
    title: "5 signes que votre site vous fait perdre des clients",
    excerpt: "Un site qui existe ne suffit pas. Voici les signaux concrets à vérifier pour savoir si le vôtre convertit vraiment les visites en contacts.",
    category: "Web & SEO",
    date: "2026-06-15",
    readTime: "9 min",
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg",
    sections: [
      {
        id: "comprendre",
        heading: "Un visiteur ne comprend pas votre offre en 5 secondes",
        paragraphs: [
          "Sur la page d'accueil, le visiteur doit savoir immédiatement ce que vous faites et pour qui. Si la réponse demande de faire défiler la page ou de deviner, une bonne partie des visiteurs repart avant d'avoir compris, et ne reviendra pas.",
          "Ce point se corrige souvent sans refonte complète : un titre plus direct et une sous-phrase claire suffisent la plupart du temps. L'erreur la plus courante consiste à mettre en avant un slogan élégant mais vague, plutôt qu'une phrase simple qui dit concrètement ce qui est proposé."
        ]
      },
      {
        id: "mobile",
        heading: "Le site est pensé pour l'ordinateur, pas pour le mobile",
        paragraphs: [
          "La majorité du trafic arrive désormais depuis un téléphone. Un site lent à charger ou difficile à lire sur mobile perd des visiteurs avant même qu'ils aient vu l'offre : texte trop petit, boutons difficiles à toucher, menu qui ne s'ouvre pas correctement.",
          "Tester son propre site depuis son téléphone, en conditions réelles (pas seulement en réduisant la fenêtre du navigateur sur ordinateur), reste le moyen le plus simple de repérer ce type de problème."
        ]
      },
      {
        id: "chemin",
        heading: "Il n'y a pas de chemin clair vers le contact",
        paragraphs: [
          "Un site peut être joli et rater l'essentiel : donner envie de passer à l'étape suivante. Si le bouton de contact est difficile à trouver, ou si le formulaire demande trop d'informations, une partie des visiteurs abandonne avant d'aller au bout.",
          "Un chemin de conversion efficace tient en une ou deux actions maximum, visibles depuis n'importe quelle page, pas seulement depuis une page « contact » qu'il faut aller chercher dans un menu."
        ]
      },
      {
        id: "seo",
        heading: "Le site n'apparaît pas sur Google, même sur votre propre nom",
        paragraphs: [
          "Chercher son activité sur Google reste le test le plus rapide. Si le site n'apparaît pas en première page sur son propre nom, il y a probablement un problème d'indexation ou de structure à corriger en priorité, avant même de penser à se positionner sur des recherches plus larges.",
          "Ce problème est souvent invisible pour le propriétaire du site : on tape rarement son propre nom sur Google, puisqu'on connaît déjà l'adresse. Ce sont les nouveaux visiteurs, ceux qui ne connaissent pas encore l'adresse exacte, qui en subissent les conséquences."
        ]
      },
      {
        id: "obsolete",
        heading: "Les informations affichées ne sont plus à jour",
        paragraphs: [
          "Une offre qui n'existe plus, un tarif erroné, une photo datée : ces détails semblent mineurs, mais ils entament la confiance d'un visiteur qui hésite déjà à vous contacter. Un site qui n'a pas été mis à jour depuis longtemps donne l'impression que l'activité elle-même est à l'arrêt.",
          "Un site qui convertit est avant tout un site qu'on entretient, pas seulement un site bien conçu au départ. Une révision rapide tous les quelques mois suffit généralement à éviter ce type de décalage."
        ]
      }
    ],
    takeaways: [
      "Un visiteur doit comprendre l'offre en quelques secondes, sans avoir à chercher.",
      "Le test mobile et la recherche de son propre nom sur Google sont les deux vérifications les plus rapides à faire.",
      "Un site qui convertit est un site entretenu, pas seulement un site bien conçu au départ."
    ]
  },
  {
    slug: "combien-de-temps-pour-voir-des-resultats",
    title: "Combien de temps pour voir des résultats en marketing digital",
    excerpt: "SEO, contenu, notoriété : des délais réalistes pour ne pas juger une action trop tôt, ni attendre trop longtemps avant d'ajuster.",
    category: "Stratégie",
    date: "2026-09-08",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/30332440/pexels-photo-30332440.jpeg",
    sections: [
      {
        id: "pas-immediat",
        heading: "Rien n'est instantané, mais tout n'est pas long non plus",
        paragraphs: [
          "Une refonte de site peut changer la perception d'un visiteur immédiatement. Un référencement naturel, lui, prend généralement plusieurs mois avant de produire des résultats visibles. Confondre les deux délais mène à de mauvaises décisions : arrêter une action SEO trop tôt parce qu'elle « ne marche pas », ou au contraire attendre trop longtemps avant de corriger un site qui ne convertit visiblement pas.",
          "Cette confusion des délais est l'une des causes les plus fréquentes de déception en marketing digital : non pas parce que les actions ne fonctionnent pas, mais parce qu'elles sont jugées au mauvais moment."
        ]
      },
      {
        id: "reperes",
        heading: "Des repères, pas des promesses",
        paragraphs: [
          "Le SEO demande généralement plusieurs mois avant les premiers effets mesurables, et davantage encore sur des mots-clés concurrentiels. Le contenu régulier (newsletter, réseaux) construit la confiance sur la durée : les effets se voient sur plusieurs mois d'affilée, rarement sur une seule publication. Un site refondu peut, lui, améliorer la conversion dès sa mise en ligne, puisque le changement est immédiatement visible par les visiteurs.",
          "Ces repères ne sont pas des garanties chiffrées : ils dépendent du secteur, de la concurrence et du point de départ. Ils servent surtout à fixer les bonnes attentes avant de commencer, pour ne pas juger une action avec l'horizon de temps d'une autre."
        ],
        list: [
          "Refonte de site : effet visible dès la mise en ligne",
          "Contenu régulier : premiers effets sur plusieurs mois de suite",
          "SEO : premiers résultats mesurables après plusieurs mois, davantage sur les mots-clés concurrentiels"
        ]
      },
      {
        id: "mesurer",
        heading: "Mesurer sans se focaliser sur le mauvais chiffre",
        paragraphs: [
          "Le trafic seul ne dit rien de la performance réelle. Un site peut recevoir plus de visites sans générer plus de contacts, si ces visites ne correspondent pas à la bonne audience. Ce qui compte, c'est le nombre de contacts ou de ventes générés, et son évolution mois après mois plutôt que semaine après semaine.",
          "Un point mensuel, avec deux ou trois indicateurs suivis dans la durée, donne une vision plus fiable qu'un tableau de bord consulté tous les jours. Les variations quotidiennes sont souvent du bruit ; c'est la tendance sur plusieurs semaines qui indique si une action fonctionne vraiment."
        ]
      },
      {
        id: "ajuster",
        heading: "Savoir quand ajuster, et quand patienter",
        paragraphs: [
          "Toutes les actions ne méritent pas le même délai avant d'être remises en question. Un problème de conversion sur le site (un visiteur qui ne trouve pas comment contacter) doit être corrigé rapidement, dès qu'il est identifié. Un plan de contenu, en revanche, mérite d'être tenu plusieurs mois avant d'être jugé, parce que ses effets sont cumulatifs plutôt qu'immédiats."
        ]
      }
    ],
    takeaways: [
      "Chaque type d'action a son propre délai : confondre ces délais fausse le jugement.",
      "Le trafic seul ne suffit pas à mesurer une performance : ce sont les contacts générés qui comptent.",
      "Un problème de conversion se corrige vite ; un plan de contenu se juge sur plusieurs mois."
    ]
  },
  {
    slug: "relancer-sa-newsletter-sans-repartir-de-zero",
    title: "Relancer sa newsletter sans repartir de zéro",
    excerpt: "Une liste qui dort depuis des mois n'est pas perdue. Voici comment la réactiver sans donner l'impression de réapparaître par surprise.",
    category: "Contenu",
    date: "2026-08-25",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/5706021/pexels-photo-5706021.jpeg",
    sections: [
      {
        id: "pas-perdue",
        heading: "Une liste inactive n'est pas une liste morte",
        paragraphs: [
          "Une base d'abonnés qui n'a pas reçu d'email depuis longtemps garde de la valeur : ces personnes se sont inscrites volontairement à un moment donné, souvent parce qu'un sujet ou une offre les intéressait. La question n'est pas de repartir de zéro, mais de recréer le lien sans faire comme si de rien n'était.",
          "Beaucoup renoncent à relancer une liste ancienne par crainte d'être perçus comme intrusifs. C'est l'inverse qui pose problème le plus souvent : ne jamais relancer, et laisser une audience acquise s'éteindre complètement faute d'avoir pris le risque d'un email de reprise."
        ]
      },
      {
        id: "reprise",
        heading: "Reconnaître la pause plutôt que l'ignorer",
        paragraphs: [
          "Le premier email de reprise gagne à assumer le silence : dire simplement qu'on n'a pas écrit depuis un moment, et pourquoi on revient, passe mieux qu'un email qui fait comme si la newsletter n'avait jamais été interrompue.",
          "Cet email sert à réengager, pas à tout annoncer d'un coup. Il vaut mieux qu'il soit court, qu'il explique la raison du silence en une phrase, et qu'il donne une bonne raison concrète de continuer à lire, plutôt que de vouloir rattraper des mois de contenu en un seul envoi."
        ]
      },
      {
        id: "nettoyer",
        heading: "Nettoyer avant de relancer",
        paragraphs: [
          "Avant l'email de reprise, il est utile de vérifier l'état de la liste : adresses invalides, doublons, inscriptions très anciennes qui ne correspondent plus à l'activité actuelle. Une liste plus courte mais plus engagée délivre de meilleurs résultats qu'une liste large mais inactive.",
          "Ce nettoyage protège aussi la délivrabilité : envoyer à des adresses inactives depuis longtemps peut nuire à la réputation de l'expéditeur auprès des messageries, et donc à l'arrivée des emails suivants en boîte de réception plutôt qu'en indésirables."
        ]
      },
      {
        id: "rythme",
        heading: "Reprendre à un rythme tenable",
        paragraphs: [
          "Repartir sur un rythme trop ambitieux (une newsletter par semaine après six mois de silence) mène souvent à une nouvelle interruption. Un rythme mensuel, tenu régulièrement, construit plus de confiance qu'un rythme hebdomadaire abandonné après trois envois.",
          "Il est toujours possible d'accélérer une fois que le rythme de base est stable et que la régularité ne demande plus d'effort particulier."
        ]
      }
    ],
    takeaways: [
      "Une liste inactive garde de la valeur : elle ne mérite pas d'être abandonnée sans un email de reprise.",
      "Le premier email doit assumer le silence, pas faire comme si de rien n'était.",
      "Un rythme modeste et tenu vaut mieux qu'un rythme ambitieux vite abandonné."
    ]
  },
  {
    slug: "seo-local-etre-visible-dans-sa-ville",
    title: "SEO local : être visible dans sa ville avant tout",
    excerpt: "Avant de viser un référencement national, s'assurer d'apparaître pour les recherches faites près de chez soi change souvent plus de choses.",
    category: "Web & SEO",
    date: "2026-08-04",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/7663519/pexels-photo-7663519.jpeg",
    sections: [
      {
        id: "priorite",
        heading: "Pourquoi le local passe souvent avant le national",
        paragraphs: [
          "Pour une activité qui dépend d'une zone géographique, apparaître sur une recherche large et concurrentielle a moins d'impact qu'apparaître sur une recherche locale, faite par quelqu'un déjà prêt à passer à l'action.",
          "Le volume de recherche est plus faible, mais l'intention est plus forte : une personne qui cherche un service près de chez elle est souvent plus proche de la décision qu'une personne qui fait une recherche générale et compare des dizaines de résultats.",
          "Viser d'abord le national avant d'avoir consolidé le local revient souvent à se battre sur un terrain très concurrentiel, alors qu'une position solide sur les recherches locales suffit déjà à générer des contacts réguliers."
        ]
      },
      {
        id: "bases",
        heading: "Les bases à vérifier en premier",
        paragraphs: [
          "La fiche d'établissement Google doit être complète et à jour : adresse, horaires, catégorie, photos récentes. C'est souvent le premier élément qu'un visiteur consulte, avant même de cliquer sur le site.",
          "Le nom de la ville ou de la zone d'intervention doit apparaître naturellement dans les titres et les textes du site, sans être répété de façon artificielle, ce qui pourrait au contraire nuire au référencement plutôt que l'aider."
        ],
        list: [
          "Fiche d'établissement Google complète, avec horaires et photos à jour",
          "Nom de la ville ou de la zone d'intervention présent naturellement sur le site",
          "Informations cohérentes partout : site, réseaux, annuaires professionnels",
          "Une page dédiée par zone d'intervention si plusieurs villes sont couvertes"
        ]
      },
      {
        id: "coherence",
        heading: "La cohérence compte plus que la quantité",
        paragraphs: [
          "Les informations doivent être identiques partout où elles apparaissent : site, réseaux, annuaires professionnels. Une adresse ou un numéro de téléphone qui diffère d'une plateforme à l'autre sème le doute, aussi bien chez les visiteurs que dans la façon dont les moteurs de recherche évaluent la fiabilité de l'établissement."
        ]
      },
      {
        id: "avis",
        heading: "Les avis comptent plus qu'on ne le pense",
        paragraphs: [
          "Le nombre et la régularité des avis influencent à la fois la confiance des visiteurs et le classement local. Un établissement avec dix avis récents inspire davantage confiance qu'un établissement avec cinquante avis vieux de plusieurs années, même si le total est plus élevé.",
          "Demander un avis après une prestation réussie, simplement et au bon moment, reste l'un des leviers les plus efficaces et les moins coûteux pour améliorer sa visibilité locale, bien plus qu'une action technique complexe."
        ]
      }
    ],
    takeaways: [
      "Une recherche locale correspond souvent à une intention plus forte qu'une recherche nationale.",
      "La fiche Google et la cohérence des informations comptent avant toute optimisation avancée.",
      "Des avis récents et réguliers pèsent plus qu'un grand nombre d'avis anciens."
    ]
  }
];