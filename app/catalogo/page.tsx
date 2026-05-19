import type { Metadata } from "next";

import { CatalogClient } from "@/components/product/catalog-client";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catálogo | Dulce Amor",
  description: "Descubre tortas, donas, pasteles y coctelería artesanal de Dulce Amor.",
};

export default function CatalogoPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 grid gap-2">
        <h1 className="font-heading text-4xl font-semibold">Catálogo Dulce Amor</h1>
        <p className="max-w-2xl text-sm text-foreground/80 sm:text-base">
          Elige tu favorito y encarga directo por WhatsApp. Todo se prepara artesanalmente y con dedicación.
        </p>
      </div>
      <CatalogClient products={products} />
    </section>
  );
}

