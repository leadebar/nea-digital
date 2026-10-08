import { createHmac, timingSafeEqual } from "node:crypto";

const API = "https://api.stripe.com/v1";

export type CheckoutSession = {
  id: string;
  url?: string;
  payment_status: "paid" | "unpaid" | "no_payment_required";
  metadata?: Record<string, string>;
  customer_details?: { email?: string | null } | null;
};

function secretKey() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY manquante");
  return key;
}

export const stripeConfigured = () => Boolean(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(params: URLSearchParams): Promise<CheckoutSession> {
  const res = await fetch(`${API}/checkout/sessions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${secretKey()}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  });
  if (!res.ok) throw new Error(`Stripe ${res.status}: ${await res.text()}`);
  return (await res.json()) as CheckoutSession;
}

export async function retrieveCheckoutSession(id: string): Promise<CheckoutSession | null> {
  if (!/^cs_[A-Za-z0-9_]+$/.test(id)) return null;
  const res = await fetch(`${API}/checkout/sessions/${id}`, {
    headers: { Authorization: `Bearer ${secretKey()}` },
    cache: "no-store"
  });
  if (!res.ok) return null;
  return (await res.json()) as CheckoutSession;
}

/** Vérifie l'en-tête Stripe-Signature (schéma v1, tolérance 5 min). */
export function verifyWebhook(rawBody: string, header: string | null): boolean {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !header) return false;
  const parts = Object.fromEntries(header.split(",").map((p) => p.split("=") as [string, string]));
  const t = parts.t;
  const sigs = header
    .split(",")
    .filter((p) => p.startsWith("v1="))
    .map((p) => p.slice(3));
  if (!t || sigs.length === 0) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  const expected = createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");
  const eb = Buffer.from(expected);
  return sigs.some((s) => {
    const sb = Buffer.from(s);
    return sb.length === eb.length && timingSafeEqual(sb, eb);
  });
}

/** Fichiers payants : JSON dans IMPRIMABLES_FILES, ex. {"freelance-tracker":{"a4":"https://...","letter":"https://..."}} */
export function fileUrl(slug: string, fmt: string): string | null {
  try {
    const map = JSON.parse(process.env.IMPRIMABLES_FILES || "{}") as Record<string, Record<string, string>>;
    return map[slug]?.[fmt] ?? null;
  } catch {
    return null;
  }
}
