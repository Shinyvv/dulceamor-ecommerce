"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/product/product-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Product, ProductCategory } from "@/lib/products";
import { availableCategories } from "@/lib/products";

type CatalogClientProps = {
  products: Product[];
};

export function CatalogClient({ products }: CatalogClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        `${product.name} ${product.shortDescription}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [category, products, query]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-3 rounded-2xl border border-border/70 bg-card/80 p-4 md:grid-cols-[1fr_220px]">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nombre o descripcion..."
          className="h-10 bg-background"
        />
        <Select
          value={category}
          onValueChange={(value) => setCategory(value as ProductCategory | "all")}
        >
          <SelectTrigger className="h-10 w-full bg-background">
            <SelectValue placeholder="Filtrar por categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorias</SelectItem>
            {availableCategories.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/70 px-4 py-10 text-center text-sm text-foreground/75">
          No encontramos productos con esos filtros. Escribenos por WhatsApp para ayudarte con un pedido personalizado.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

