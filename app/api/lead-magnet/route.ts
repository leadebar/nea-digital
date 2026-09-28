import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "@/lib/email";
import { normalizeEmail, saveNewsletterLead } from "@/lib/lead-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      source?: unknown;
      consent?: unknown;
    };

    const email = normalizeEmail(body.email);

    if (!email) {
      return NextResponse.json(
        { ok: false, message: "Adresse email invalide." },
        { status: 400 }
      );
    }

    if (body.consent !== true) {
      return NextResponse.json(
        { ok: false, message: "Consentement requis pour envoyer le freebie." },
        { status: 400 }
      );
    }

    const source = typeof body.source === "string" ? body.source : "weekly-reset";

    await saveNewsletterLead({ email, source, consent: true });

    // Best-effort : si l'envoi d'email n'est pas configuré ou échoue, on ne bloque
    // jamais le téléchargement du freebie pour l'utilisateur.
    void sendEmail({
      subject: `Nouvelle inscription freebie (${source})`,
      html: `<p><strong>Email :</strong> ${escapeHtml(email)}</p><p><strong>Source :</strong> ${escapeHtml(source)}</p>`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Inscription indisponible pour le moment." },
      { status: 500 }
    );
  }
}
