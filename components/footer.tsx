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
    <footer className="border-t border-ink/10 bg-ink text-porcelain">
      <div className="container-premium grid gap-10 py-14 md:grid-cols-[1.2fr_.6fr_.6fr_.7fr]">
        <div>
          <BrandLogo tone="sand" className="h-10" />
          <p className="mt-5 max-w-md text-sm leading-7 text-porcelain/65">
            Planners, templates et services pour structurer ton digital.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4 text-xs text-sand">Navigation</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-porcelain/70 hover:text-porcelain">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-xs text-sand">Réseaux</p>
          <div className="grid gap-3 text-sm text-porcelain/70">
            <span>TikTok</span>
            <span>Pinterest</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@nea-digital.com</span>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-xs text-sand">Légal</p>
          <div className="grid gap-3">
            {legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-porcelain/70 hover:text-porcelain">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
