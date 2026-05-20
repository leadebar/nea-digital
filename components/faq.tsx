import { faq } from "@/data/site";

export function FAQ({ items = faq }: { items?: typeof faq }) {
  return (
    <section className="container-premium py-20">
      <div className="grid gap-8 md:grid-cols-[.7fr_1fr]">
        <div>
          <p className="eyebrow mb-4 text-xs text-taupe">FAQ</p>
          <h2 className="display-title text-2xl text-ink md:text-4xl">Questions fréquentes sur les ressources digitales.</h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="cursor-pointer list-none text-lg font-medium text-ink">{item.question}</summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/62">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
