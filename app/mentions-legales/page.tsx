import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Néa Digital."
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Cette page regroupe les informations d'identification de l'éditeur du site Néa Digital."
    >
      <p><strong>Dernière mise à jour :</strong> 28 septembre 2026</p>

      <div className="mb-8 rounded-[8px] border border-[#B08D57]/30 bg-[#F5F1EB] p-5 text-sm text-[#7A7470]">
        Deux informations restent à ajouter avant mise en ligne officielle : le numéro de SIRET et l'adresse du siège d'activité. Ce sont des données personnelles que je ne peux pas deviner à ta place.
      </div>

      <h2>Éditeur du site</h2>
      <p><strong>Nom commercial :</strong> Néa Digital</p>
      <p><strong>Éditeur :</strong> Léa Debar, entrepreneur individuel (micro-entreprise)</p>
      <p><strong>SIRET :</strong> [SIRET à compléter]</p>
      <p><strong>Adresse du siège :</strong> [adresse professionnelle à compléter]</p>
      <p><strong>Email :</strong> contact.neadigital@gmail.com</p>
      <p><strong>Directrice de la publication :</strong> Léa Debar</p>

      <h2>Activité</h2>
      <p>Néa Digital propose des services de stratégie digitale, création de contenu et création de site web, ainsi que des ressources digitales (planners numériques, templates, contenus d'accompagnement).</p>

      <h2>Hébergement</h2>
      <p><strong>Hébergeur :</strong> Vercel Inc.</p>
      <p><strong>Adresse :</strong> 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</p>
      <p><strong>Site web :</strong> vercel.com</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les textes, visuels, logos, éléments graphiques, ressources digitales et contenus disponibles sur ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction, diffusion, adaptation ou exploitation non autorisée est interdite.</p>

      <h2>Responsabilité</h2>
      <p>Néa Digital met en œuvre des moyens raisonnables pour assurer l'exactitude des informations publiées. Le site peut toutefois contenir des erreurs, omissions ou informations devenues obsolètes. Les ressources proposées sont des supports d'organisation et ne constituent pas un conseil juridique, financier, fiscal ou médical personnalisé.</p>

      <h2>Contact</h2>
      <p>Pour toute question concernant le site ou les ressources, vous pouvez écrire à : contact.neadigital@gmail.com.</p>
    </LegalPage>
  );
}
