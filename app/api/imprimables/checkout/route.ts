import { NextResponse } from "next/server";
import { imprimables } from "@/data/imprimables";
import { createCheckoutSession, stripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData();
  const slug = String(form.get("slug") ?? "");
  const product = imprimables.find((p) => p.slug === slug);
  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  if (!product || product.price === null || !stripeConfigured()) {
    return NextResponse.redirect(`${origin}/shop`, 303);
  }

  const p = new URLSearchParams({
    mode: "payment",
    locale: "fr",
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "eur",
    "line_items[0][price_data][unit_amount]": String(Math.round(product.price * 100)),
    "line_items[0][price_data][product_data][name]": `${product.title} (PDF à imprimer)`,
    "line_items[0][price_data][product_data][description]": `${product.subtitle}. Fichiers A4 et US Letter, téléchargement immédiat.`,
    "metadata[slug]": product.slug,
    success_url: `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/shop`
  });

  // Accord exprès pour l'accès immédiat et renonciation au droit de rétractation (voir CGV).
  // Nécessite l'URL des CGV renseignée dans Stripe (Paramètres > Public details). Désactiver avec STRIPE_SKIP_TOS=1.
  if (process.env.STRIPE_SKIP_TOS !== "1") {
    p.set("consent_collection[terms_of_service]", "required");
    p.set(
      "custom_text[terms_of_service_acceptance][message]",
      "Je demande l'accès immédiat au contenu numérique, je renonce à mon droit de rétractation et j'accepte les [CGV](" + origin + "/cgv)."
    );
  }

  try {
    const session = await createCheckoutSession(p);
    return NextResponse.redirect(session.url!, 303);
  } catch (error) {
    console.error("checkout imprimable", error);
    return NextResponse.redirect(`${origin}/shop?erreur=paiement`, 303);
  }
}
