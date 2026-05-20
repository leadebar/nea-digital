import { BrandLogo } from "@/components/brand-logo";
import { weeklyResetFreebie } from "@/data/freebies";
import { cn } from "@/lib/utils";

export function FreebieMockup({ compact = false }: { compact?: boolean }) {
  const pages = compact ? weeklyResetFreebie.preview.slice(0, 3) : weeklyResetFreebie.preview;

  return (
    <div className={cn("relative mx-auto w-full max-w-[520px]", compact ? "min-h-[340px]" : "min-h-[520px]")}>
      <div className="absolute inset-x-10 top-8 h-[78%] rotate-[-4deg] rounded-[8px] bg-sand/40 shadow-soft" />
      <div className="absolute inset-x-6 top-4 h-[84%] rotate-[3deg] rounded-[8px] bg-linen shadow-soft" />
      <div className="relative rounded-[8px] border border-ink/10 bg-porcelain p-6 shadow-soft">
        <div className="flex items-start justify-between gap-5">
          <BrandLogo className="h-9" />
          <span className="eyebrow rounded-[4px] border border-ink/10 px-3 py-2 text-[10px] text-taupe">
            {weeklyResetFreebie.pages}
          </span>
        </div>
        <div className={cn("grid", compact ? "mt-20 gap-5" : "mt-28 gap-8")}>
          <div>
            <p className="eyebrow mb-3 text-[10px] text-taupe">{weeklyResetFreebie.eyebrow}</p>
            <p className="display-title text-2xl leading-tight text-ink md:text-3xl">{weeklyResetFreebie.name}</p>
          </div>
          <div className="grid gap-3">
            {pages.map((page, index) => (
              <div key={page.title} className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-[6px] border border-ink/10 bg-white/70 p-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-ink text-xs text-porcelain">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{page.title}</p>
                  {!compact ? <p className="mt-1 text-xs leading-5 text-ink/55">{page.text}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 h-2 w-24 rounded-full bg-olive" />
      </div>
    </div>
  );
}
