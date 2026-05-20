import Link from "next/link";
import { FreebieMockup } from "@/components/freebie-mockup";
import { LeadForm } from "@/components/lead-form";
import { MotionDiv, reveal } from "@/components/motion";
import { weeklyResetFreebie } from "@/data/freebies";

export function Newsletter() {
  return (
    <section className="bg-linen py-20 md:py-24">
      <div className="container-premium grid items-center gap-10 md:grid-cols-[1fr_.82fr]">
        <MotionDiv {...reveal}>
          <p className="eyebrow mb-4 text-xs text-taupe">Reset gratuit</p>
          <h2 className="display-title text-2xl leading-tight text-ink md:text-4xl">
            Télécharge {weeklyResetFreebie.name}.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/65 md:text-lg">
            Une checklist de 5 pages pour remettre ta semaine au clair, prioriser et repartir avec plus de structure.
          </p>
          <div className="mt-8 max-w-2xl">
            <LeadForm source="home-weekly-reset" compact />
          </div>
          <Link href="/weekly-reset" className="mt-5 inline-flex text-sm font-medium text-olive underline underline-offset-8">
            The Weekly Reset Checklist
          </Link>
        </MotionDiv>
        <MotionDiv {...reveal}>
          <FreebieMockup compact />
        </MotionDiv>
      </div>
    </section>
  );
}
