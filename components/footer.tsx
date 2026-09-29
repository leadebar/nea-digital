"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { navItems } from "@/data/site";
import { BrandLogo } from "@/components/brand-logo";

const legalItems = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "CGV", href: "/cgv" }
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-linen text-ink">
      <div className="container-premium grid gap-10 py-14 md:grid-cols-[1.2fr_.6fr_.6fr_.7fr]">
        <div>
          <BrandLogo tone="sand" className="h-10" />
          <p className="mt-5 max-w-md text-sm leading-7 text-ink/65">
            Marketing digital pour les entreprises, ressources d'organisation pour les particuliers.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4 text-xs text-sand">Navigation</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ink/70 hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-xs text-sand">Réseaux</p>
          <div className="grid gap-3 text-sm text-ink/70">
            <a href="https://fr.pinterest.com/neadigitalpro/?actingBusinessId=1138425749465166573" target="_blank" rel="noopener noreferrer" className="hover:text-ink">Pinterest</a>
            <a href="mailto:contact.neadigital@gmail.com" className="flex items-center gap-2 hover:text-ink"><Mail className="h-4 w-4" /> contact.neadigital@gmail.com</a>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-xs text-sand">Légal</p>
          <div className="grid gap-3">
            {legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ink/70 hover:text-ink">
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("nea-open-cookie-preferences"))}
              className="text-left text-sm text-ink/70 hover:text-ink"
            >
              Gérer les cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
