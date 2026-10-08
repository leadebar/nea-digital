import Link from "next/link";

/** Rend du texte avec des liens au format [libellé](/chemin). Liens internes via next/link. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        const cls = "text-olive underline underline-offset-4 hover:text-ink";
        return href.startsWith("/") ? (
          <Link key={i} href={href} className={cls}>{label}</Link>
        ) : (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
        );
      })}
    </>
  );
}
