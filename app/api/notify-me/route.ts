import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "@/lib/email";
import { normalizeEmail, saveNewsletterLead } from "@/lib/lead-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      product?: unknown;
      consent?: unknown;
    };

    const email = normalizeEmail(body.email);

    if (!email) {
      return NextResponse.json({ ok: false, message: "Adresse email invalide." }, { status: 400 });
    }

    if (body.consent !== true) {
      return NextResponse.json(
        { ok: false, message: "Coche la case pour être prévenu·e par email." },
        { status: 400 }
      );
    }

    const product = typeof body.product === "string" && body.product.trim() ? body.product.trim() : "Boutique Néa Digital";
    const source = `notify-${product.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

    await saveNewsletterLead({ email, source, consent: true });

    // Best-effort : on ne bloque jamais la confirmation pour la visiteuse si l'envoi échoue.
    void sendEmail({
      subject: `Prévenez-moi : ${product}`,
      html: `<p><strong>Produit :</strong> ${escapeHtml(product)}</p><p><strong>Email :</strong> ${escapeHtml(email)}</p>`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Inscription indisponible pour le moment." }, { status: 500 });
  }
}
