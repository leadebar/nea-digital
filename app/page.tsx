"use client";

import { useEffect, useRef } from "react";
import { ProductCard } from "@/components/product-card";
import { BlogCard } from "@/components/blog-card";
import { Newsletter } from "@/components/newsletter";
import { FAQ } from "@/components/faq";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { offers, fullHarmony, servicesFaq } from "@/data/site";

// ─── DATA ────────────────────────────────────────────────────────────────────

const realisations = [
  {
    tag: "Plomberie · Cagnes-sur-Mer",
    name: "LP PLOMBERIE",
    desc: "Création du site vitrine, SEO local, mise en place de Google Business et rédaction de blog.",
    pills: ["Création web", "SEO local", "Google Business", "Blog"],
    href: "https://lpplomberie.com",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-3.5 ${light ? "text-[#C8B89A]" : "text-[#7A7470]"}`}>
      <span className="w-7 h-[1.5px] bg-[#C8B89A]" />
      <span className="font-['DM_Sans'] text-[10px] font-medium tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`font-['Museo_Moderno'] text-[clamp(28px,3.5vw,44px)] leading-[1.15] mb-14 ${light ? "text-white" : "text-[#1C1A1A]"}`}>
      {children}
    </h2>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    const pts = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.4 + 0.1,
    }));
    let raf: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,184,154,${p.o})`; ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { window.removeEventListener("resize", handleResize); cancelAnimationFrame(raf); };
  }, []);

  // 3D cards
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".svc-3d");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`;
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });
    return () => handlers.forEach(({ el, move, leave }) => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    });
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("nea-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".nea-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Particles */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="relative min-h-screen bg-[#1C1A1A] flex flex-col items-center justify-center text-center px-12 pt-32 pb-20 overflow-hidden">
          <span
            className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.05] whitespace-nowrap leading-none"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(120px,25vw,380px)", letterSpacing: "0.05em", animation: "nea-watermark 8s ease-in-out infinite" }}
            aria-hidden="true"
          >NÉA.</span>

          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C8B89A] mb-6 relative" style={{ animation: "nea-slide-top 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}>
            Stratégie · Contenu · Web
          </p>

          <h1
            className="text-white relative"
            style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(64px,10vw,130px)", lineHeight: 0.95, letterSpacing: "0.04em" }}
          >
            <span className="block" style={{ animation: "nea-reveal 0.9s 0.4s cubic-bezier(0.22,1,0.36,1) both" }}>VOTRE VISIBILITÉ</span>
            <span className="block" style={{ animation: "nea-reveal 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both" }}>EN LIGNE</span>
          </h1>

          <p className="text-white/70 relative mt-3 mb-6 italic font-light" style={{ fontFamily: "'Museo_Moderno','Museo Moderno',serif", fontSize: "clamp(18px,2.5vw,28px)", animation: "nea-fade-up 0.8s 0.85s both" }}>
            enfin entre de bonnes mains.
          </p>

          <p className="text-[15px] font-light text-white/60 leading-[1.8] max-w-[500px] mx-auto mb-12 relative" style={{ animation: "nea-fade-up 0.8s 1s both" }}>
            Néa Digital accompagne les <strong className="text-white font-medium">TPE, artisans et indépendants</strong> pour créer et développer leur présence digitale — de A à Z, sans jargon.
          </p>

          <div className="flex gap-4 justify-center flex-wrap relative" style={{ animation: "nea-fade-up 0.8s 1.15s both" }}>
            <a href="/contact" className="nea-btn-fill bg-[#F5F1EB] text-[#1C1A1A]"><span>Demander un devis gratuit</span></a>
            <a href="#services" className="nea-btn-ghost"><span>Voir les offres</span></a>
          </div>

          <div className="flex gap-14 justify-center mt-[72px] pt-11 border-t border-white/10 w-full max-w-[560px] relative" style={{ animation: "nea-fade-up 0.8s 1.3s both" }}>
            {[{ num: "48H", label: "Délai de réponse" }, { num: "2–3", label: "Semaines pour un site" }, { num: "100%", label: "Sur devis, sans engagement" }].map((s) => (
              <div key={s.label} className="flex flex-col items-center group">
                <span className="text-white leading-none tracking-[0.05em] transition-transform group-hover:scale-110" style={{ fontFamily: "'Bebas Neue'", fontSize: "42px" }}>{s.num}</span>
                <span className="text-[10px] text-white/45 mt-1 tracking-[0.1em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── OFFRES ── */}
        <section id="services" className="bg-[#F5F1EB] px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Nos offres</SectionTag>
            <SectionTitle>Trois offres <em className="italic font-light text-[#7A7470]">claires</em>,<br />pensées pour les artisans.</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {offers.map((offer, i) => (
              <div key={offer.key} className="svc-3d nea-reveal bg-white p-11 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(28,26,26,0.08)]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8B89A] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                <div className="text-[#EDE8DF] leading-none mb-5 tracking-[0.05em] transition-colors duration-300 hover:text-[#C8B89A]" style={{ fontFamily: "'Bebas Neue'", fontSize: "64px" }}>{offer.num}</div>
                <h3 className="text-[21px] font-semibold text-[#1C1A1A] mb-1" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',sans-serif" }}>{offer.title}</h3>
                <p className="text-[13px] text-[#C8B89A] font-medium mb-3 italic">{offer.tagline}</p>
                <p className="text-[13px] text-[#7A7470] leading-[1.7] mb-6">{offer.desc}</p>
                <ul className="flex flex-col gap-2">
                  {offer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[#1C1A1A] leading-[1.4]">
                      <span className="text-[#C8B89A] text-[11px] mt-[2px] shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Full Harmony */}
          <div className="nea-reveal mt-0.5 bg-[#1C1A1A] p-11 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#C8B89A] mb-3">Pack recommandé</p>
              <h3 className="text-[28px] text-white mb-2" style={{ fontFamily: "'Bebas Neue'", letterSpacing: "0.04em" }}>{fullHarmony.name}</h3>
              <p className="text-[14px] text-white/60 leading-[1.7] mb-4 max-w-md">{fullHarmony.desc}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {fullHarmony.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-white/75">
                    <span className="text-[#C8B89A]">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="/contact" className="nea-btn-fill bg-[#F5F1EB] text-[#1C1A1A] whitespace-nowrap"><span>Demander un devis</span></a>
          </div>
          <p className="text-center text-[12px] text-[#9A928C] mt-8 tracking-[0.05em]">Tous les tarifs sont communiqués sur devis — chaque projet est unique.</p>
        </section>

        {/* ── RÉALISATIONS ── */}
        <section id="realisations" className="px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Réalisations</SectionTag>
            <SectionTitle>Un projet <em className="italic font-light text-[#7A7470]">réel</em>.</SectionTitle>
          </div>
          <div className="grid grid-cols-1 gap-0.5 max-w-2xl">
            {realisations.map((r, i) => (
              <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer"
                className="nea-reveal group bg-[#F5F1EB] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(28,26,26,0.1)] block"
                style={{ padding: "52px 44px", transitionDelay: `${i * 0.1}s` }}
              >
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#C8B89A] mb-4">{r.tag}</p>
                <h3 className="text-[42px] text-[#1C1A1A] mb-3 tracking-[0.05em]" style={{ fontFamily: "'Bebas Neue'" }}>{r.name}</h3>
                <p className="text-[14px] text-[#7A7470] leading-[1.75] mb-7">{r.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {r.pills.map((pill) => (
                    <span key={pill} className="text-[11px] px-3.5 py-1 rounded-full bg-white border border-[#EDE8DF] text-[#1C1A1A] transition-colors group-hover:bg-[#EDE8DF]">{pill}</span>
                  ))}
                </div>
                <span className="absolute bottom-11 right-11 text-[32px] text-[#EDE8DF] transition-all duration-300 group-hover:text-[#C8B89A] group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── PRODUITS ── */}
        <section id="boutique" className="bg-[#EDE8DF] px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Boutique</SectionTag>
            <SectionTitle>Des ressources digitales<br />pour <em className="italic font-light text-[#7A7470]">s'organiser</em> au quotidien.</SectionTitle>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="px-12 py-24">
          <div className="nea-reveal">
            <SectionTag>Blog</SectionTag>
            <SectionTitle>Articles sur le marketing digital,<br />le SEO et <em className="italic font-light text-[#7A7470]">l'organisation</em>.</SectionTitle>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="relative bg-[#1C1A1A] px-12 py-32 text-center overflow-hidden">
          <span className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.04] whitespace-nowrap leading-none" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(80px,18vw,260px)", letterSpacing: "0.05em", animation: "nea-watermark 6s ease-in-out infinite" }} aria-hidden="true">CONTACT</span>
          <h2 className="nea-reveal text-white relative tracking-[0.04em] leading-none mb-3" style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(48px,7vw,90px)" }}>PRÊT·E À PASSER<br />À L'ACTION ?</h2>
          <p className="nea-reveal relative mb-4 italic font-light text-[#C8B89A]" style={{ fontFamily: "'Museo Moderno','Museo_Moderno',serif", fontSize: "clamp(18px,2vw,24px)" }}>votre présence digitale vous attend.</p>
          <p className="nea-reveal text-[13px] text-white/45 tracking-[0.05em] relative mb-10">Devis gratuit · Réponse sous 48h · Sans engagement</p>
          <a href="/contact" className="nea-reveal nea-btn-fill bg-[#F5F1EB] text-[#1C1A1A] inline-block relative"><span>Contactez-moi →</span></a>
        </section>

        <Newsletter />
        <FAQ items={servicesFaq} title="Questions fréquentes sur les services." />

      </main>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Museo+Moderno:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes nea-fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-slide-top { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nea-reveal { from { opacity:0; transform:translateY(40px) skewY(3deg); } to { opacity:1; transform:translateY(0) skewY(0); } }
        @keyframes nea-watermark { 0%,100% { transform:translate(-50%,-50%) scale(1); } 50% { transform:translate(-50%,-50%) scale(1.03); } }

        .nea-reveal { opacity:0; transform:translateY(32px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .nea-reveal.nea-visible { opacity:1; transform:translateY(0); }

        .nea-btn-fill { position:relative; overflow:hidden; font-size:12px; font-weight:500; padding:15px 32px; border-radius:2px; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; transition:color 0.35s; display:inline-block; }
        .nea-btn-fill::before { content:''; position:absolute; inset:0; background:#C8B89A; transform:translateY(101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nea-btn-fill:hover { color:#1C1A1A; }
        .nea-btn-fill:hover::before { transform:translateY(0); }
        .nea-btn-fill span { position:relative; z-index:1; }

        .nea-btn-ghost { position:relative; overflow:hidden; border:1.5px solid rgba(255,255,255,0.25); color:white; font-size:12px; font-weight:500; padding:15px 32px; border-radius:2px; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; transition:color 0.35s, border-color 0.3s; display:inline-block; }
        .nea-btn-ghost::before { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.1); transform:translateX(-101%); transition:transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .nea-btn-ghost:hover { border-color:rgba(255,255,255,0.5); }
        .nea-btn-ghost:hover::before { transform:translateX(0); }
        .nea-btn-ghost span { position:relative; z-index:1; }

        .nea-pack-btn { position:relative; overflow:hidden; transition:color 0.3s, border-color 0.3s; }
        .nea-pack-btn::before { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.12); transform:translateX(-101%); transition:transform 0.35s cubic-bezier(0.4,0,0.2,1); }
        .nea-pack-btn:hover::before { transform:translateX(0); }
      `}</style>
    </>
  );
}
