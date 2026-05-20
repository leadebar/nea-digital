"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/82 backdrop-blur-xl">
      <nav className="container-premium flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring" aria-label="Néa Digital accueil">
          <BrandLogo lockup="stacked" className="h-11 md:h-12" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink/70 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Button href="/shop" variant="dark">Boutique</Button>
        </div>
        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="focus-ring rounded-[4px] border border-ink/10 p-3 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-ink/10 bg-porcelain px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="editorial-title text-3xl text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
