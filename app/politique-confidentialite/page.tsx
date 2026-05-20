import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité RGPD de Néa Digital."
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="RGPD"
      title="Politique de confidentialité"
      intro="Cette politique explique quelles données personnelles peuvent être collectées sur le site Néa Digital, pourquoi elles sont utilisées et comment exercer vos droits."
    >
      <p><strong>Dernière mise à jour :</strong> 20 mai 2026</p>

      <h2>Responsable du traitement</h2>
      <p>Le responsable du traitement est [Prénom NOM], entrepreneur individuel exerçant sous le nom commercial Néa Digital.</p>
      <p><strong>Email de contact :</strong> hello@nea-digital.com</p>

      <h2>Données collectées</h2>
      <p>Selon votre utilisation du site, Néa Digital peut collecter les données suivantes :</p>
      <ul>
        <li>nom et prénom ;</li>
        <li>adresse email ;</li>
        <li>message transmis via le formulaire de contact ;</li>
        <li>informations nécessaires au traitement d'une commande ;</li>
        <li>données techniques strictement nécessaires au fonctionnement du site.</li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <ul>
        <li><strong>Répondre aux demandes de contact :</strong> intérêt légitime ou mesures précontractuelles.</li>
        <li><strong>Gérer les commandes de ressources digitales :</strong> exécution du contrat.</li>
        <li><strong>Envoyer la newsletter :</strong> consentement de l'utilisateur.</li>
        <li><strong>Respecter les obligations comptables et légales :</strong> obligation légale.</li>
        <li><strong>Sécuriser et améliorer le site :</strong> intérêt légitime.</li>
      </ul>

      <h2>Durées de conservation</h2>
      <ul>
        <li>Données de contact : jusqu'à 3 ans après le dernier échange.</li>
        <li>Données liées aux commandes et factures : durée légale de conservation applicable.</li>
        <li>Données newsletter : jusqu'au retrait du consentement ou désinscription.</li>
        <li>Cookies techniques : durée limitée au fonctionnement du service.</li>
      </ul>

      <h2>Destinataires</h2>
      <p>Les données sont destinées à Néa Digital et aux prestataires nécessaires au fonctionnement du site, à l'hébergement, à l'envoi d'emails, au paiement en ligne et à la délivrance des ressources digitales.</p>

      <h2>Transferts hors Union européenne</h2>
      <p>Certains prestataires techniques, notamment l'hébergeur, peuvent être situés hors Union européenne. Lorsque cela est nécessaire, Néa Digital veille à utiliser des prestataires encadrant les transferts de données selon les mécanismes prévus par le RGPD.</p>

      <h2>Cookies</h2>
      <p>Le site utilise les cookies strictement nécessaires à son fonctionnement. Si des outils de mesure d'audience, de publicité ou de suivi marketing sont ajoutés ultérieurement, un bandeau de consentement et une politique cookies dédiée devront être mis en place.</p>

      <h2>Newsletter</h2>
      <p>L'inscription à la newsletter est facultative. Vous pouvez vous désinscrire à tout moment via le lien présent dans les emails ou en écrivant à hello@nea-digital.com.</p>

      <h2>Vos droits</h2>
      <p>Conformément au RGPD, vous pouvez demander l'accès, la rectification, l'effacement, la limitation, l'opposition au traitement ou la portabilité de vos données lorsque ces droits s'appliquent.</p>
      <p>Pour exercer vos droits, contactez : hello@nea-digital.com.</p>
      <p>Vous pouvez également déposer une réclamation auprès de la CNIL : cnil.fr.</p>
    </LegalPage>
  );
}
