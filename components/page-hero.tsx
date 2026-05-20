import { Button } from "@/components/button";
import { AboutVisual } from "@/components/editorial-visual";

export function PageHero({
  eyebrow,
  title,
  text,
  cta
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="container-premium grid min-h-[72vh] items-center gap-10 py-16 md:grid-cols-[1.05fr_.95fr]">
      <div>
        <p className="eyebrow mb-5 text-xs text-taupe">{eyebrow}</p>
        <h1 className="display-title text-balance text-3xl leading-tight text-ink md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink/65">{text}</p>
        {cta ? <div className="mt-8"><Button href={cta.href}>{cta.label}</Button></div> : null}
      </div>
      <AboutVisual />
    </section>
  );
}
