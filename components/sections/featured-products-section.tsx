import { ProductCard } from "@/components/product/product-card";
import { featuredProducts } from "@/lib/products";

export function FeaturedProductsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 grid gap-2">
        <h2 className="font-heading text-3xl font-semibold text-foreground">Productos destacados</h2>
        <p className="max-w-2xl text-sm text-foreground/80 sm:text-base">
          Tortas, donas, dulces y coctelería en una propuesta dulce, elegante y lista para compartir.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}

