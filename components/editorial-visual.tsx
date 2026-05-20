import { BrandLogo } from "@/components/brand-logo";

export function BrandShowcase() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[8px] bg-ink p-7 text-porcelain shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <BrandLogo tone="sand" className="h-10" />
        <span className="eyebrow text-[10px] text-sand">Digital systems</span>
      </div>
      <div className="absolute inset-x-7 bottom-7 grid gap-3">
        {["Planning hebdo", "Mise en avant des ressources", "Suivi des ventes", "Budget & objectifs"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-[6px] border border-porcelain/12 bg-porcelain/6 px-4 py-4">
            <span className="text-sm text-porcelain/82">{item}</span>
            <span className="h-2 w-10 rounded-full bg-sand" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArticleVisual({ label }: { label: string }) {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[8px] bg-linen p-6 shadow-line">
      <BrandLogo className="h-8" />
      <div className="absolute inset-x-6 bottom-6">
        <p className="eyebrow mb-4 text-[10px] text-taupe">Guide Néa Digital</p>
        <p className="editorial-title text-5xl leading-none text-ink">{label}</p>
      </div>
    </div>
  );
}

export function AboutVisual() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-linen p-7 shadow-soft">
      <BrandLogo className="h-10" />
      <div className="absolute inset-x-7 bottom-7 grid gap-3">
        {["Organisation", "Branding", "Contenu", "Conversion"].map((item) => (
          <div key={item} className="rounded-[6px] bg-porcelain px-4 py-4 text-sm text-ink shadow-line">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
