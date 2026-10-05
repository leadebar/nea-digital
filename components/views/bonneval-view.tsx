import { Phone, Mail } from "lucide-react";

// ─── Contenu modifiable ────────────────────────────────────────────────
const PHONE_DISPLAY = "07 66 61 29 67";
const PHONE_HREF = "tel:+33766612967";
const EMAIL = "contact.neadigital@gmail.com";

// Offre d'entrée mise en avant sur la page. À ajuster selon ce que tu veux offrir.
const welcomeOffer = {
  label: "Offre de lancement",
  title: "Mini-audit offert",
  desc: "En 15 minutes, je regarde votre fiche Google, votre site et vos réseaux, et je vous dis ce qui vous fait perdre des clients. Gratuit, sans engagement."
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
    price: "400 €",
    unit: "à partir de",
    desc: "Je fais le point sur votre présence en ligne et je vous remets un plan d'action concret, dans l'ordre."
  },
  {
    name: "Création ou refonte de site",
    price: "1 500 €",
    unit: "à partir de",
    desc: "Un site rapide, clair et bien placé sur Google, avec un vrai chemin vers l'appel ou la réservation."
  },
  {
    name: "Contenu régulier",
    price: "300 €",
    unit: "par mois",
    desc: "Newsletter, articles, publications : je m'occupe de la rédaction et du calendrier."
  }
];

const steps = [
  { num: "01", title: "On se parle", desc: "Un appel ou un passage en boutique, pour comprendre votre activité." },
  { num: "02", title: "Devis sous 48h", desc: "Une proposition chiffrée, claire, sans engagement." },
  { num: "03", title: "Je m'en occupe", desc: "50 % à la commande, 50 % à la livraison. Un site complet est livré en 2 à 3 semaines." }
];

const faq = [
  {
    question: "Où travaillez-vous ?",
    answer:
      "À Bonneval et dans les environs (Châteaudun, Cloyes, Brou, Illiers-Combray), ainsi qu'à Chartres et Orléans. Je peux aussi travailler à distance avec vous."
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
              Bonneval · Chartres · Orléans
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
            de Bonneval et des environs à être visibles sur Google et à recevoir plus de demandes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center gap-2 rounded-[2px] bg-[#1C1A1A] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#B08D57]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-[2px] border border-[#1C1A1A] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-[#1C1A1A] transition-colors hover:border-[#B08D57] hover:text-[#B08D57]"
            >
              Demander un devis
            </a>
          </div>
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
            href={PHONE_HREF}
            className="inline-flex min-h-12 items-center rounded-[2px] bg-[#F5F1EB] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-[#1C1A1A] transition-colors hover:bg-[#B08D57] hover:text-white"
          >
            Réserver mon mini-audit
          </a>
        </div>
      </section>

      {/* CONSTATS */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Ce qui coûte des clients, le plus souvent.
          </h2>
          <div className="grid gap-px bg-[#EDE8DF] md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-white p-8">
                <span className="mb-4 block h-[2px] w-8 bg-[#B08D57]" />
                <h3 className="mb-2 text-[17px] font-semibold text-[#1C1A1A]" style={heading}>{p.title}</h3>
                <p className="text-[13px] leading-[1.75] text-[#7A7470]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES ET PRIX */}
      <section className="bg-[#F5F1EB] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-[#1C1A1A]" style={heading}>
            Des tarifs clairs, dès le départ.
          </h2>
          <p className="mb-10 text-[13px] text-[#7A7470]">Chaque projet fait l'objet d'un devis précis. Voici les points de départ.</p>
          <div className="grid gap-0.5 md:grid-cols-3">
            {offers.map((o) => (
              <div key={o.name} className="relative bg-white p-8">
                <span className="absolute left-0 right-0 top-0 h-[2px] bg-[#B08D57]" />
                <h3 className="mb-4 text-[19px] font-semibold text-[#1C1A1A]" style={heading}>{o.name}</h3>
                <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-[#7A7470]">{o.unit}</p>
                <p className="mb-4 leading-none text-[#B08D57]" style={{ ...display, fontSize: "46px" }}>{o.price}</p>
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
              <div key={s.num}>
                <p className="mb-3 leading-none text-[#B08D57]" style={{ ...display, fontSize: "40px" }}>{s.num}</p>
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
          <p className="mb-9 text-[14px] font-light text-white/60">Un appel suffit. Réponse sous 48h, devis gratuit.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center gap-2 rounded-[2px] bg-[#F5F1EB] px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-[#1C1A1A] transition-colors hover:bg-[#B08D57] hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-white/30 px-7 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:border-[#B08D57] hover:text-[#B08D57]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Écrire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
