import { BrandLogo } from "@/components/brand-logo";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="container-premium py-16">
      <header className="grid gap-8 border-b border-ink/10 pb-12 md:grid-cols-[.72fr_1fr] md:items-end">
        <div>
          <BrandLogo className="mb-8 h-9" />
          <p className="eyebrow mb-4 text-xs text-taupe">{eyebrow}</p>
          <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">{title}</h1>
        </div>
        <p className="max-w-2xl text-base leading-8 text-ink/65">{intro}</p>
      </header>
      <div className="legal-content mx-auto mt-12 max-w-4xl">{children}</div>
    </main>
  );
}
