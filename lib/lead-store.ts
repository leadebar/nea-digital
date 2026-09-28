import { mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

export type NewsletterLead = {
  email: string;
  source: string;
  consent: true;
  createdAt: string;
  provider: "local" | "convertkit-ready" | "beehiiv-ready" | "resend-ready";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(email: unknown) {
  if (typeof email !== "string") {
    return null;
  }

  const normalized = email.trim().toLowerCase();

  if (!emailPattern.test(normalized)) {
    return null;
  }

  return normalized;
}

export async function saveNewsletterLead(input: {
  email: string;
  source: string;
  consent: true;
}) {
  const lead: NewsletterLead = {
    ...input,
    createdAt: new Date().toISOString(),
    provider: resolveProvider()
  };

  try {
    await saveToLocalJson(lead);
  } catch (error) {
    // Le stockage local (fichier .data/) échoue sur les plateformes au système de
    // fichiers en lecture seule comme Vercel. On ne bloque jamais le téléchargement
    // du freebie pour ça : on logue l'erreur et on continue.
    console.error("saveNewsletterLead: échec du stockage local", error);
  }

  return lead;
}

function resolveProvider(): NewsletterLead["provider"] {
  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
    return "convertkit-ready";
  }

  if (process.env.BEEHIIV_API_KEY && process.env.BEEHIIV_PUBLICATION_ID) {
    return "beehiiv-ready";
  }

  if (process.env.RESEND_API_KEY && process.env.NEWSLETTER_NOTIFY_TO) {
    return "resend-ready";
  }

  return "local";
}

async function saveToLocalJson(lead: NewsletterLead) {
  const directory = process.env.NEA_LEADS_DIR || path.join(os.tmpdir(), "nea-digital-leads");
  const filePath = path.join(directory, "weekly-reset-leads.json");

  await mkdir(directory, { recursive: true });

  let leads: NewsletterLead[] = [];

  try {
    leads = JSON.parse(await readFile(filePath, "utf8")) as NewsletterLead[];
  } catch {
    leads = [];
  }

  const existingIndex = leads.findIndex((item) => item.email === lead.email);

  if (existingIndex >= 0) {
    leads[existingIndex] = { ...leads[existingIndex], ...lead };
  } else {
    leads.push(lead);
  }

  await writeFile(filePath, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}
