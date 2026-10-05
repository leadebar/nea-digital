"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-KLTZFQNP";
const STORAGE_KEY = "nea-cookie-consent";

type Consent = "unknown" | "accepted" | "refused";

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>("unknown");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;

    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    if (stored === "accepted" || stored === "refused") {
      setConsent(stored);
      setVisible(false);
    } else {
      setVisible(true);
    }

    function handleReopen() {
      setVisible(true);
    }

    window.addEventListener("nea-open-cookie-preferences", handleReopen);
    return () => window.removeEventListener("nea-open-cookie-preferences", handleReopen);
  }, []);

  // Suivi des clics sur les liens mail et téléphone, uniquement après consentement.
  useEffect(() => {
    if (consent !== "accepted") return;

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href^='mailto:'], a[href^='tel:']") as HTMLAnchorElement | null;
      if (!link) return;

      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: link.href.startsWith("mailto:") ? "click_email" : "click_phone",
        page_path: window.location.pathname
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consent]);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Le consentement reste valable pour la session même si le stockage échoue.
    }
    setConsent("accepted");
    setVisible(false);
  }

  function refuse() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "refused");
    } catch {
      // idem
    }
    setConsent("refused");
    setVisible(false);
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      ) : null}

      {visible ? (
        <div role="dialog" aria-live="polite" aria-label="Préférences cookies" className="fixed inset-x-4 bottom-4 z-50 md:inset-x-auto md:right-6">
          <div className="mx-auto max-w-lg rounded-[8px] border border-ink/10 bg-white p-5 shadow-soft">
            <p className="text-sm leading-6 text-ink/75">
              Ce site utilise des cookies de mesure d&apos;audience (Google Analytics) pour comprendre comment il est
              utilisé. Aucune donnée n&apos;est revendue ni utilisée à des fins publicitaires.{" "}
              <Link href="/politique-confidentialite" className="underline underline-offset-4 hover:text-ink">
                En savoir plus
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={accept}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-[4px] border border-ink bg-ink px-5 text-sm font-medium text-porcelain transition duration-300 hover:border-olive hover:bg-olive"
              >
                Accepter
              </button>
              <button
                type="button"
                onClick={refuse}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-[4px] border border-ink/14 bg-transparent px-5 text-sm font-medium text-ink transition duration-300 hover:bg-linen"
              >
                Refuser
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
