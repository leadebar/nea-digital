import { NextResponse } from "next/server";
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

    await saveNewsletterLead({
      email,
      source: typeof body.source === "string" ? body.source : "weekly-reset",
      consent: true
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Inscription indisponible pour le moment." },
      { status: 500 }
    );
  }
}
