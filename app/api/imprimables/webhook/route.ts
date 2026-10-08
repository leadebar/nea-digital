import { NextResponse } from "next/server";
import { imprimables } from "@/data/imprimables";
import { escapeHtml, sendEmail } from "@/lib/email";
import { verifyWebhook, type CheckoutSession } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const raw = await request.text();
  if (!verifyWebhook(raw, request.headers.get("stripe-signature"))) {
    return new NextResponse("Signature invalide", { status: 400 });
  }

  const event = JSON.parse(raw) as { type: string; data: { object: CheckoutSession } };

  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
    const session = event.data.object;
    const product = imprimables.find((p) => p.slug === session.metadata?.slug);
    const email = session.customer_details?.email;

    if (product && email && session.payment_status === "paid") {
      const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://neadigital.fr";
      const link = `${origin}/merci?session_id=${encodeURIComponent(session.id)}`;
      await sendEmail({
        to: email,
        subject: `Ton téléchargement : ${product.title}`,
        html: `<p>Merci pour ton achat.</p><p><strong>${escapeHtml(product.title)}</strong> est prêt. Tu y trouveras les fichiers A4 et US Letter, ainsi que la couverture en image :</p><p><a href="${link}">Télécharger mes fichiers</a></p><p>Le lien reste valable, garde cet email. Une question ? Réponds simplement à ce message.</p><p>Néa Digital</p>`
      });
    }
  }

  return NextResponse.json({ received: true });
}
