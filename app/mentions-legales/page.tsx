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
      intro="Cette page regroupe les informations d'identification de l'éditeur du site Néa Digital. Les champs entre crochets sont à compléter avant la mise en ligne."
    >
      <p><strong>Dernière mise à jour :</strong> 20 mai 2026</p>

      <h2>Éditeur du site</h2>
      <p><strong>Nom commercial :</strong> Néa Digital</p>
      <p><strong>Éditeur :</strong> [Prénom NOM], entrepreneur individuel / micro-entreprise</p>
      <p><strong>SIRET :</strong> [SIRET à compléter]</p>
      <p><strong>Adresse du siège :</strong> [adresse professionnelle à compléter]</p>
      <p><strong>Email :</strong> hello@nea-digital.com</p>
      <p><strong>Directeur de la publication :</strong> [Prénom NOM]</p>

      <h2>Activité</h2>
      <p>Néa Digital propose des ressources digitales, notamment des planners numériques, templates, ressources d'organisation et contenus d'accompagnement. Des services de stratégie digitale, organisation digitale et optimisation web peuvent également être proposés.</p>

      <h2>Hébergement</h2>
      <p><strong>Hébergeur :</strong> Vercel Inc.</p>
      <p><strong>Adresse :</strong> [adresse de l'hébergeur à confirmer selon le compte ou le contrat Vercel]</p>
      <p><strong>Site web :</strong> vercel.com</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les textes, visuels, logos, éléments graphiques, ressources digitales et contenus disponibles sur ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction, diffusion, adaptation ou exploitation non autorisée est interdite.</p>

      <h2>Responsabilité</h2>
      <p>Néa Digital met en œuvre des moyens raisonnables pour assurer l'exactitude des informations publiées. Le site peut toutefois contenir des erreurs, omissions ou informations devenues obsolètes. Les ressources proposées sont des supports d'organisation et ne constituent pas un conseil juridique, financier, fiscal ou médical personnalisé.</p>

      <h2>Contact</h2>
      <p>Pour toute question concernant le site ou les ressources, vous pouvez écrire à : hello@nea-digital.com.</p>
    </LegalPage>
  );
}
