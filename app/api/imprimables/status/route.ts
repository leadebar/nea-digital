import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Diagnostic : indique seulement si les variables existent (jamais leur valeur). */
export function GET() {
  let filesOk = false;
  try {
    const map = JSON.parse(process.env.IMPRIMABLES_FILES || "{}") as Record<string, Record<string, string>>;
    filesOk = Object.keys(map).length === 4 && Object.values(map).every((v) => v.a4 && v.letter);
  } catch {
    filesOk = false;
  }
  return NextResponse.json({
    environnement: process.env.VERCEL_ENV ?? "local",
    STRIPE_SECRET_KEY: Boolean(process.env.STRIPE_SECRET_KEY),
    STRIPE_WEBHOOK_SECRET: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
    IMPRIMABLES_FILES: filesOk,
    NEXT_PUBLIC_SITE_URL: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY)
  });
}
