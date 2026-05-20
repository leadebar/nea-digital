import type { Metadata } from "next";
import { ProductLanding } from "@/components/landing";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Finance Planner",
  description: "Planner finance pour budget, dépenses, épargne et objectifs."
};

export default function FinancePlannerPage() {
  return (
    <ProductLanding
      product={products[2]}
      theme="Finances personnelles"
      promise="Un planner pour suivre ton budget, tes dépenses, ton épargne et tes objectifs."
      outcomes={["Vue mensuelle du budget.", "Suivi des dépenses et de l'épargne.", "Objectifs financiers faciles à lire."]}
    />
  );
}
