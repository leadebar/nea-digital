import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "@/lib/email";

export const runtime = "nodejs";

const NOT_CONFIGURED_MESSAGE =
  "L'envoi automatique n'est pas encore activé sur le site. Écris-moi directement à contact.neadigital@gmail.com, je te répondrai aussi vite.";
const SEND_FAILED_MESSAGE =
  "L'envoi a échoué. Écris-moi directement à contact.neadigital@gmail.com en attendant.";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const type = body.type === "question" ? "question" : "devis";

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ ok: false, message: "Adresse email invalide." }, { status: 400 });
    }

    if (!isNonEmptyString(body.firstName)) {
      return NextResponse.json({ ok: false, message: "Le prénom est requis." }, { status: 400 });
    }

    const email = (body.email as string).trim();
    const firstName = (body.firstName as string).trim();

    let subject: string;
    let html: string;

    if (type === "devis") {
      if (!isNonEmptyString(body.lastName) || !isNonEmptyString(body.activity) || !isNonEmptyString(body.need)) {
        return NextResponse.json({ ok: false, message: "Merci de compléter tous les champs obligatoires." }, { status: 400 });
      }

      const lastName = (body.lastName as string).trim();
      const activity = (body.activity as string).trim();
      const need = (body.need as string).trim();
      const project = isNonEmptyString(body.project) ? (body.project as string).trim() : "";

      subject = `Demande de devis - ${firstName} ${lastName}`;
      html = `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Activité :</strong> ${escapeHtml(activity)}</p>
        <p><strong>Besoin :</strong> ${escapeHtml(need)}</p>
        <p><strong>Projet :</strong><br/>${escapeHtml(project).replace(/\n/g, "<br/>") || "-"}</p>
      `;
    } else {
      if (!isNonEmptyString(body.subject) || !isNonEmptyString(body.message)) {
        return NextResponse.json({ ok: false, message: "Merci de compléter tous les champs obligatoires." }, { status: 400 });
      }

      const subjectField = (body.subject as string).trim();
      const message = (body.message as string).trim();

      subject = `Question - ${firstName} (${subjectField})`;
      html = `
        <h2>Nouvelle question</h2>
        <p><strong>Prénom :</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Sujet :</strong> ${escapeHtml(subjectField)}</p>
        <p><strong>Message :</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `;
    }

    const result = await sendEmail({ subject, html, replyTo: email });

    if (!result.ok) {
      const message = result.reason === "not-configured" ? NOT_CONFIGURED_MESSAGE : SEND_FAILED_MESSAGE;
      return NextResponse.json({ ok: false, message }, { status: result.reason === "not-configured" ? 503 : 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: SEND_FAILED_MESSAGE }, { status: 500 });
  }
}
