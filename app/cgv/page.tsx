import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "CGV des ressources digitales vendues par Néa Digital."
};

export default function CGVPage() {
  return (
    <LegalPage
      eyebrow="Vente de ressources digitales"
      title="Conditions générales de vente"
      intro="Ces CGV encadrent la vente des ressources digitales Néa Digital. Elles sont prévues pour une micro-entreprise française et doivent être complétées avec les informations réelles de l'entreprise."
    >
      <p><strong>Dernière mise à jour :</strong> 20 mai 2026</p>

      <h2>1. Vendeur</h2>
      <p>Les ressources sont vendues par [Prénom NOM], entrepreneur individuel / micro-entreprise, exerçant sous le nom commercial Néa Digital.</p>
      <p><strong>SIRET :</strong> [SIRET à compléter]</p>
      <p><strong>Adresse :</strong> [adresse professionnelle à compléter]</p>
      <p><strong>Email :</strong> hello@nea-digital.com</p>
      <p><strong>TVA :</strong> TVA non applicable, article 293 B du Code général des impôts, si ce régime est applicable à l'entreprise.</p>

      <h2>2. Ressources concernées</h2>
      <p>Les présentes CGV s'appliquent aux ressources digitales vendues sur le site, notamment les planners numériques, templates, fichiers PDF, ressources d'organisation et contenus téléchargeables.</p>

      <h2>3. Prix</h2>
      <p>Les prix sont indiqués en euros. Le prix applicable est celui affiché au moment de la commande. Néa Digital se réserve le droit de modifier ses prix à tout moment, sans effet sur les commandes déjà validées.</p>

      <h2>4. Commande</h2>
      <p>Le client sélectionne la ressource, vérifie le récapitulatif de commande, accepte les CGV puis procède au paiement. La validation de la commande vaut acceptation pleine et entière des présentes CGV.</p>

      <h2>5. Paiement</h2>
      <p>Le paiement est exigible immédiatement au moment de la commande. Il est effectué via [Stripe / PayPal / autre prestataire à compléter]. Les informations de paiement sont traitées par le prestataire de paiement et ne sont pas stockées par Néa Digital.</p>

      <h2>6. Livraison des ressources digitales</h2>
      <p>Les ressources digitales sont livrées par téléchargement, email ou accès à une page dédiée après validation du paiement. Aucun article physique n'est expédié.</p>

      <h2>7. Droit de rétractation</h2>
      <p>Conformément au droit de la consommation, le consommateur dispose en principe d'un délai de 14 jours pour se rétracter dans le cadre d'une vente à distance.</p>
      <p>Pour les contenus numériques non fournis sur un support matériel, le client peut toutefois demander l'accès immédiat à la ressource avant la fin du délai de rétractation. Dans ce cas, le tunnel de commande doit recueillir son accord préalable exprès pour l'exécution immédiate et sa reconnaissance de la perte de son droit de rétractation.</p>
      <p>Si cet accord exprès et cette renonciation ne sont pas recueillis, le droit de rétractation légal reste applicable.</p>

      <h2>8. Garantie légale de conformité</h2>
      <p>Le client consommateur bénéficie de la garantie légale de conformité applicable aux contenus et services numériques. Si la ressource livrée ne correspond pas à sa description ou présente un défaut de conformité, le client peut contacter Néa Digital à hello@nea-digital.com.</p>

      <h2>9. Conditions d'utilisation des ressources</h2>
      <p>Les ressources achetées sont réservées à un usage personnel ou professionnel individuel selon la licence indiquée sur la page de vente. Toute revente, redistribution, partage public, modification en vue de revente ou mise à disposition gratuite des fichiers est interdite sans autorisation écrite.</p>

      <h2>10. Remboursements</h2>
      <p>En dehors des cas prévus par la loi, les ressources digitales téléchargées ou rendues accessibles immédiatement ne sont pas remboursables lorsque le client a expressément renoncé à son droit de rétractation. Les demandes liées à un problème technique ou à un défaut de conformité sont étudiées au cas par cas.</p>

      <h2>11. Responsabilité</h2>
      <p>Néa Digital fournit des ressources d'organisation, de productivité et de gestion personnelle. Ces ressources ne remplacent pas un conseil professionnel individualisé, notamment juridique, fiscal, financier, comptable ou médical.</p>

      <h2>12. Données personnelles</h2>
      <p>Les données personnelles collectées dans le cadre des commandes sont traitées conformément à la politique de confidentialité disponible sur le site.</p>

      <h2>13. Médiation de la consommation</h2>
      <p>Conformément aux règles applicables, le client consommateur peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu.</p>
      <p><strong>Médiateur :</strong> [nom et coordonnées du médiateur à compléter avant mise en ligne]</p>

      <h2>14. Droit applicable</h2>
      <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité.</p>
    </LegalPage>
  );
}
