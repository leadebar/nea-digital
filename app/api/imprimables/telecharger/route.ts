import { NextResponse } from "next/server";
import { imprimables } from "@/data/imprimables";
import { fileUrl, retrieveCheckoutSession } from "@/lib/stripe";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session") ?? "";
  const fmt = searchParams.get("fmt") ?? "";

  if (fmt !== "a4" && fmt !== "letter") return new NextResponse("Format inconnu", { status: 400 });

  const session = await retrieveCheckoutSession(sessionId);
  const slug = session?.metadata?.slug;
  if (!session || session.payment_status !== "paid" || !slug || !imprimables.some((p) => p.slug === slug)) {
    return new NextResponse("Achat introuvable ou non payé.", { status: 403 });
  }

  const url = fileUrl(slug, fmt);
  if (!url) return new NextResponse("Fichier momentanément indisponible. Écris à contact.neadigital@gmail.com.", { status: 503 });

  const upstream = await fetch(url, { cache: "no-store" });
  if (!upstream.ok || !upstream.body) return new NextResponse("Fichier indisponible.", { status: 502 });

  const label = fmt === "a4" ? "A4" : "US-Letter";
  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slug}-${label}.pdf"`,
      "Cache-Control": "private, no-store"
    }
  });
}
