export type PostSection = {
  id: string;
  heading: string;
  paragraphs: string[];
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
};

export const categories = ["Stratégie", "Contenu", "Web & SEO"];

export const posts: Post[] = [
  {
    slug: "auditer-sa-presence-en-ligne",
    title: "Auditer sa présence en ligne : par où commencer",
    excerpt: "Site, SEO, contenu, réseaux : une méthode simple pour savoir ce qui fonctionne et ce qui bloque, avant de se lancer dans des changements.",
    category: "Stratégie",
    date: "2026-08-12",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg",
    sections: [
      {
        id: "pourquoi",
        heading: "Pourquoi auditer avant d'agir",
        paragraphs: [
          "La plupart des entreprises ajoutent des actions marketing sans savoir si les bases sont solides : un nouveau post, une pub, une refonte partielle. Le résultat est rarement à la hauteur, parce que le problème n'était pas là où on a cherché.",
          "Un audit sert à poser un diagnostic avant de dépenser du temps ou du budget. Il ne s'agit pas de tout refaire, mais de savoir précisément ce qui mérite d'être corrigé en premier."
        ]
      },
      {
        id: "quatre-axes",
        heading: "Les quatre axes à vérifier",
        paragraphs: [
          "Le site : est-ce qu'un visiteur comprend en quelques secondes ce que vous proposez, et existe-t-il un chemin clair vers le contact ou l'achat ?",
          "Le SEO : le site apparaît-il quand on cherche votre nom ou votre activité, et les pages sont-elles correctement titrées et décrites ?",
          "Le contenu : la dernière publication date-t-elle de moins d'un mois, et chaque contenu a-t-il un objectif identifiable ?",
          "Les réseaux : la fréquence de publication est-elle tenable dans la durée, et savez-vous lequel apporte réellement des clients ?"
        ]
      },
      {
        id: "priorisation",
        heading: "Prioriser plutôt que tout corriger d'un coup",
        paragraphs: [
          "Une fois le diagnostic posé, tout n'a pas la même urgence. Ce qui bloque un visiteur au moment de vous contacter passe avant ce qui améliorerait légèrement la visibilité.",
          "C'est cette hiérarchie — et non une liste de tout ce qui pourrait être amélioré — qui rend un plan d'action réellement suivable."
        ]
      }
    ]
  },
  {
    slug: "calendrier-editorial-sans-y-passer-ses-soirees",
    title: "Tenir un calendrier éditorial sans y passer ses soirées",
    excerpt: "Newsletter, blog, réseaux sociaux : une structure simple pour publier régulièrement sans réinventer le contenu chaque semaine.",
    category: "Contenu",
    date: "2026-07-28",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/33136468/pexels-photo-33136468.jpeg",
    sections: [
      {
        id: "probleme",
        heading: "Le vrai problème n'est pas le manque d'idées",
        paragraphs: [
          "La difficulté n'est presque jamais de trouver un sujet. C'est de le faire chaque semaine, sans que ça devienne une charge qui passe après tout le reste.",
          "Un calendrier éditorial efficace n'est pas une longue liste de sujets à trouver, mais une structure qui indique quoi produire, sous quel format, et pour quel canal."
        ]
      },
      {
        id: "structure",
        heading: "Une structure qui tient sur une seule page",
        paragraphs: [
          "Trois colonnes suffisent : le sujet, le format (article, newsletter, post), et la date de publication. Le reste — brouillons, visuels, brainstorming — vit ailleurs.",
          "L'objectif n'est pas d'avoir un outil sophistiqué, mais un calendrier que vous ouvrez réellement chaque semaine."
        ]
      },
      {
        id: "reutiliser",
        heading: "Réutiliser plutôt que produire à chaque fois",
        paragraphs: [
          "Un article de blog peut devenir trois posts, un paragraphe de newsletter et une question pour les réseaux. La matière existe déjà : il s'agit de la redécouper, pas de la recréer.",
          "Cette logique de réutilisation est souvent ce qui fait la différence entre un calendrier tenu pendant deux mois et un calendrier tenu sur la durée."
        ]
      }
    ]
  },
  {
    slug: "signes-site-internet-perd-des-clients",
    title: "5 signes que votre site vous fait perdre des clients",
    excerpt: "Un site qui existe ne suffit pas. Voici les signaux concrets à vérifier pour savoir si le vôtre convertit vraiment les visites en contacts.",
    category: "Web & SEO",
    date: "2026-06-15",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg",
    sections: [
      {
        id: "comprendre",
        heading: "Un visiteur ne comprend pas votre offre en 5 secondes",
        paragraphs: [
          "Sur la page d'accueil, le visiteur doit savoir immédiatement ce que vous faites et pour qui. Si la réponse demande de faire défiler la page ou de deviner, une bonne partie des visiteurs repart avant d'avoir compris.",
          "Ce point se corrige souvent sans refonte complète : un titre plus direct et une sous-phrase claire suffisent la plupart du temps."
        ]
      },
      {
        id: "mobile",
        heading: "Le site est pensé pour l'ordinateur, pas pour le mobile",
        paragraphs: [
          "La majorité du trafic arrive désormais depuis un téléphone. Un site lent à charger ou difficile à lire sur mobile perd des visiteurs avant même qu'ils aient vu l'offre.",
          "Tester son propre site depuis son téléphone, en conditions réelles, reste le moyen le plus simple de repérer ce type de problème."
        ]
      },
      {
        id: "chemin",
        heading: "Il n'y a pas de chemin clair vers le contact",
        paragraphs: [
          "Un site peut être joli et rater l'essentiel : donner envie de passer à l'étape suivante. Si le bouton de contact est difficile à trouver, ou si le formulaire demande trop d'informations, une partie des visiteurs abandonne.",
          "Un chemin de conversion efficace tient en une ou deux actions maximum, visibles depuis n'importe quelle page."
        ]
      },
      {
        id: "seo",
        heading: "Le site n'apparaît pas sur Google, même sur votre propre nom",
        paragraphs: [
          "Chercher son activité sur Google reste le test le plus rapide. Si le site n'apparaît pas en première page sur son propre nom, il y a probablement un problème d'indexation ou de structure à corriger en priorité."
        ]
      },
      {
        id: "obsolete",
        heading: "Les informations affichées ne sont plus à jour",
        paragraphs: [
          "Une offre qui n'existe plus, un tarif erroné, une photo datée : ces détails semblent mineurs, mais ils entament la confiance d'un visiteur qui hésite déjà à vous contacter.",
          "Un site qui convertit est avant tout un site qu'on entretient, pas seulement un site bien conçu au départ."
        ]
      }
    ]
  }
];
