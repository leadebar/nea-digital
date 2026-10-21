import { Mail } from "lucide-react";

// ─── Contenu modifiable ────────────────────────────────────────────────
const EMAIL = "contact.neadigital@gmail.com";
// Le sujet permet de reconnaître les messages venus de la page (et donc des cartes de visite).
const MAIL_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Demande depuis neadigital.fr/bonneval")}`;

// Offre d'entrée mise en avant sur la page. À ajuster selon ce que tu veux offrir.
const welcomeOffer = {
  label: "Offre de lancement",
  title: "Diagnostic offert de 15 minutes",
  desc: "Je regarde votre fiche Google, votre site et vos réseaux, et je vous donne les 3 points qui vous font le plus perdre de clients. Gratuit, sans engagement. Le plan d'action complet, lui, fait l'objet de l'audit."
};

const painPoints = [
  {
    title: "Une fiche Google incomplète",
    desc: "Horaires, photos, avis sans réponse : c'est la première chose que vos futurs clients regardent."
  },
  {
    title: "Pas de site, ou un site qui ne rapporte rien",
    desc: "Un site doit donner envie d'appeler, de réserver ou de demander un devis, pas seulement exister."
  },
  {
    title: "Des réseaux et une communication à l'arrêt",
    desc: "Faute de temps, tout s'arrête. Un rythme simple et régulier suffit pour rester visible."
  }
];

const offers = [
  {
    name: "Audit et plan d'action",
    desc: "Je fais le point sur votre présence en ligne et je vous remets un plan d'action concret, dans l'ordre."
  },
  {
    name: "Création ou refonte de site",
    desc: "Un site rapide, clair et bien placé sur Google, avec un vrai chemin vers l'appel ou la réservation."
  },
  {
    name: "Contenu régulier",
    desc: "Newsletter, articles, publications : je m'occupe de la rédaction et du calendrier, au rythme qui vous convient."
  }
];

const steps = [
  { title: "On se parle", desc: "Un message, ou un appel, pour comprendre votre activité." },
  { title: "Devis sous 48h", desc: "Une proposition chiffrée, claire, sans engagement." },
  { title: "Je m'en occupe", desc: "50 % à la commande, 50 % à la livraison. Un site complet est livré en 2 à 3 semaines." }
];

const faq = [
  {
    question: "Où travaillez-vous ?",
    answer:
      "Je travaille à distance, par téléphone, visio et e-mail, avec des commerces et des indépendants dans toute la France."
  },
  {
    question: "J'ai déjà un site, pouvez-vous l'améliorer ?",
    answer: "Oui. L'audit dit précisément ce qui fonctionne et ce qui est à corriger, puis nous décidons ensemble de la suite."
  },
  {
    question: "Je n'ai pas le temps de m'en occuper.",
    answer: "C'est justement le but. Vous me donnez l'essentiel en un échange, je gère le reste."
  }
];

const heading = { fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" } as const;
const display = { fontFamily: "'Bebas Neue'" } as const;

export function BonnevalView() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#F5F1EB] px-6 pb-16 pt-32 text-center md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#B08D57]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B08D57]">
              Site web · Google · Contenu
            </span>
            <span className="h-px w-7 bg-[#B08D57]" />
          </div>
          <h1
            className="mb-5 leading-none text-[#1C1A1A]"
            style={{ ...display, fontSize: "clamp(40px,8vw,76px)", letterSpacing: "0.02em" }}
          >
            VOTRE COMMERCE MÉRITE D'ÊTRE TROUVÉ EN LIGNE.
          </h1>
          <p className="mx-auto mb-9 max-w-md text-[15px] font-light leading-[1.85] text-[#5C564F]">
            Je suis Léa Debar, consultante en marketing digital. J'aide les commerces, restaurants, salons et artisans
            à être visibles sur Google et à recevoir plus de demandes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={MAIL_HREF}
              className="inline-flex min-h-12 items-center gap-2 rounded-[2px] bg-[#1C1A1A] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#B08D57]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Écrivez-moi
            </a>
          </div>
          <p className="mt-5 text-[12px] font-light text-[#5C564F]">
            Ou à{" "}
            <a href={MAIL_HREF} className="underline underline-offset-4 transition-colors hover:text-[#B08D57]">
              {EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* OFFRE D'ENTRÉE */}
      <section className="bg-[#1C1A1A] px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B08D57]">{welcomeOffer.label}</p>
          <h2 className="mb-4 text-[clamp(26px,4vw,38px)] leading-[1.2] text-white" style={heading}>
            {welcomeOffer.title}
          </h2>
          <p className="mx-auto mb-7 max-w-lg text-[14px] font-light leading-[1.8] text-white/70">{welcomeOffer.desc}</p>
          <a
            href={MAIL_HREF}
            className="inline-flex min-h-12 items-center rounded-[2px] bg-[#F5F1EB] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-[#1C1A1A] transition-colors hover:bg-[#B08D57] hover:text-white"
          >
            Demander mon diagnostic
          </a>
        </div>
      </section>

      {/* CONSTATS */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Ce qui coûte des clients, le plus souvent.
          </h2>
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {painPoints.map((p) => (
              <div key={p.title} className="md:border-l md:border-[#1C1A1A]/10 md:px-8 md:first:border-l-0 md:first:pl-0">
                <h3 className="mb-2 text-[17px] font-semibold text-[#1C1A1A]" style={heading}>{p.title}</h3>
                <p className="text-[13px] leading-[1.75] text-[#7A7470]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="bg-[#F5F1EB] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Ce que je peux faire pour vous.
          </h2>
          <p className="mb-10 text-[13px] text-[#7A7470]">Chaque projet fait l'objet d'un devis gratuit, adapté à votre activité.</p>
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {offers.map((o) => (
              <div key={o.name} className="md:border-l md:border-[#1C1A1A]/10 md:px-8 md:first:border-l-0 md:first:pl-0">
                <h3 className="mb-3 text-[19px] font-semibold text-[#1C1A1A]" style={heading}>{o.name}</h3>
                <p className="text-[13px] leading-[1.75] text-[#7A7470]">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Simple, du premier échange à la livraison.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="md:border-l md:border-[#1C1A1A]/10 md:pl-8 md:first:border-l-0 md:first:pl-0">
                <h3 className="mb-2 text-[17px] font-semibold text-[#1C1A1A]" style={heading}>{s.title}</h3>
                <p className="text-[13px] leading-[1.75] text-[#7A7470]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="bg-[#F5F1EB] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Qui est derrière Néa Digital.
          </h2>
          <p className="text-[14px] font-light leading-[1.9] text-[#5C564F]">
            Léa Debar, 5 ans d'expérience en marketing digital (site, référencement Google, newsletters, contenu) et une
            formation en marketing du luxe. Vous avez affaire à une seule personne, qui répond elle-même au téléphone.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Questions fréquentes.
          </h2>
          <div className="divide-y divide-[#EDE8DF] border-y border-[#EDE8DF]">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none text-[16px] font-medium text-[#1C1A1A]">{item.question}</summary>
                <p className="mt-3 text-[14px] leading-[1.8] text-[#7A7470]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#1C1A1A] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 leading-none tracking-[0.02em] text-white" style={{ ...display, fontSize: "clamp(38px,6vw,64px)" }}>
            PARLONS DE <span className="text-[#B08D57]">VOTRE ACTIVITÉ.</span>
          </h2>
          <p className="mb-9 text-[14px] font-light text-white/60">Un message suffit. Réponse sous 48h, devis gratuit.</p>
          <a
            href={MAIL_HREF}
            className="inline-flex min-h-12 items-center gap-2 rounded-[2px] bg-[#F5F1EB] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-[#1C1A1A] transition-colors hover:bg-[#B08D57] hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}
