import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { imprimables } from "@/data/imprimables";
import { retrieveCheckoutSession, stripeConfigured } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Merci pour ton achat",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default async function MerciPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  const session = session_id && stripeConfigured() ? await retrieveCheckoutSession(session_id) : null;
  const product = imprimables.find((p) => p.slug === session?.metadata?.slug);
  const paid = session?.payment_status === "paid" && product;

  const btn =
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-ink bg-ink px-6 text-sm font-medium text-porcelain transition duration-300 hover:border-olive hover:bg-olive";

  return (
    <main className="container-premium py-24">
      <div className="max-w-xl">
        {paid ? (
          <>
            <p className="eyebrow mb-5 text-xs text-taupe">Paiement confirmé</p>
            <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">Merci, ton planner est prêt.</h1>
            <p className="mt-5 text-sm leading-7 text-ink/65">
              {product.title}. Imprime-le chez toi ou en imprimerie. Un email avec ce lien t'a aussi été envoyé, garde-le.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`/api/imprimables/telecharger?session=${session_id}&fmt=a4`} className={btn}>
                <Download className="h-4 w-4" /> PDF A4
              </a>
              <a href={`/api/imprimables/telecharger?session=${session_id}&fmt=letter`} className={btn}>
                <Download className="h-4 w-4" /> PDF US Letter
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="display-title text-3xl leading-tight text-ink md:text-5xl">Achat introuvable.</h1>
            <p className="mt-5 text-sm leading-7 text-ink/65">
              Si tu viens de payer, patiente quelques secondes et recharge la page, ou écris à contact.neadigital@gmail.com.
            </p>
            <Link href="/shop/imprimables" className="mt-8 inline-block text-sm text-olive underline underline-offset-4">
              Retour aux planners
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
