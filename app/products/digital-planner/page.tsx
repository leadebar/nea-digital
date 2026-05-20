import type { Metadata } from "next";
import { ProductLanding } from "@/components/landing";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Digital Planner",
  description: "Néa Digital Planner pour organisation et productivité."
};

export default function DigitalPlannerPage() {
  return (
    <ProductLanding
      product={products[0]}
      theme="Planner digital"
      promise="Un planner pour organiser tes semaines, prioriser tes tâches et suivre tes projets."
      outcomes={["Plan hebdomadaire clair.", "Objectifs, routines et projets centralisés.", "Suivi simple à mettre à jour."]}
    />
  );
}
