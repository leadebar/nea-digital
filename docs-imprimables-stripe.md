# Imprimables : paiement Stripe et livraison

Flux : bouton Acheter -> `/api/imprimables/checkout` -> Stripe Checkout (9 EUR) -> `/merci?session_id=...` (liens de téléchargement) + email via webhook.
Les PDF ne sont PAS dans ce dépôt (public). Ils sont lus à la demande depuis une URL privée/non devinable, uniquement si Stripe confirme le paiement.

## Variables d'environnement (Vercel, Production et Preview)
- `STRIPE_SECRET_KEY` : clé secrète Stripe (sk_live_... ou sk_test_...)
- `STRIPE_WEBHOOK_SECRET` : secret du webhook (whsec_...)
- `IMPRIMABLES_FILES` : JSON `{"freelance-tracker":{"a4":"URL","letter":"URL"}, "skincare-journal":{...}, "networking-planner":{...}, "social-media-planner":{...}}`
- `RESEND_API_KEY` (+ `NEA_CONTACT_FROM` avec un domaine vérifié) : envoi de l'email d'achat à l'acheteuse
- `NEXT_PUBLIC_SITE_URL` : `https://neadigital.fr`
- Option : `STRIPE_SKIP_TOS=1` pour désactiver la case de consentement (déconseillé, voir CGV)

## Stripe
- Webhook : endpoint `https://neadigital.fr/api/imprimables/webhook`, événements `checkout.session.completed` et `checkout.session.async_payment_succeeded`.
- Paramètres > Public details : renseigner l'URL des CGV (`/cgv`), requise pour la case de consentement.
- Tester d'abord en mode test (carte 4242 4242 4242 4242).
