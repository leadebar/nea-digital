import type { Metadata } from "next";
import { ProductLanding } from "@/components/landing";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "90 Days Reset",
  description: "90 Days Reset pour organisation personnelle et routine."
};

export default function ResetPage() {
  return (
    <ProductLanding
      product={products[1]}
      theme="Reset · 90 jours"
      promise="Un programme guidé pour faire le point, poser tes priorités et reprendre une routine."
      outcomes={["Audit personnel simple.", "Habitudes et priorités suivies chaque semaine.", "Bilan clair à la fin des 90 jours."]}
    />
  );
}
