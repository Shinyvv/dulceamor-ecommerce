import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { ProductImageCarousel } from "@/components/product/product-image-carousel";
import { ProductCard } from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import {
  categoryLabels,
  createProductOrderMessage,
  createWhatsAppLink,
  formatCLP,
} from "@/lib/whatsapp";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Producto no encontrado | Dulce Amor" };
  }

  return {
    title: `${product.name} | Dulce Amor`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category);
  const whatsappHref = createWhatsAppLink(createProductOrderMessage(product));

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/catalogo" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80">
        <ArrowLeft className="size-4" />
        Volver al catálogo
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProductImageCarousel name={product.name} images={product.images} />

        <div className="grid h-fit gap-4 rounded-2xl border border-border/80 bg-card p-5">
          <Badge className="w-fit bg-primary/12 text-primary" variant="secondary">
            {categoryLabels[product.category]}
          </Badge>
          <h1 className="font-heading text-3xl font-semibold">{product.name}</h1>
          <p className="text-sm text-foreground/80 sm:text-base">{product.description}</p>
          <p className="text-2xl font-semibold text-primary">{formatCLP(product.price)}</p>

          {product.availableSizes && product.availableSizes.length > 0 ? (
            <div className="grid gap-2">
              <p className="text-sm font-semibold text-foreground">Opciones disponibles</p>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <Badge key={size} variant="outline" className="border-primary/30 text-foreground/90">
                    {size}
                  </Badge>
                ))}
              </div>
            </div>
          ) : null}

          <Separator className="bg-border/70" />

          <Button
            className="h-11 bg-[#25d366] text-white hover:bg-[#1faa52]"
            nativeButton={false}
            render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
          >
            <MessageCircle className="size-4" />
            Encargar por WhatsApp
          </Button>
        </div>
      </div>

      {relatedProducts.length > 0 ? (
        <div className="grid gap-4">
          <h2 className="font-heading text-2xl font-semibold">Tambien podria gustarte</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
