"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/products";
import { categoryLabels, createProductOrderMessage, createWhatsAppLink, formatCLP } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-border/80 bg-card/90 py-0 soft-glow">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            priority={false}
          />
        </div>

        <CardHeader className="space-y-2 pb-2">
          <Badge className="w-fit bg-primary/15 text-primary" variant="secondary">
            {categoryLabels[product.category]}
          </Badge>
          <CardTitle className="font-heading text-lg text-foreground">{product.name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-foreground/80">{product.shortDescription}</p>
          <p className="text-lg font-semibold text-primary">{formatCLP(product.price)}</p>
        </CardContent>

        <CardFooter className="grid gap-2 bg-transparent">
          <Button
            onClick={() => window.open(createWhatsAppLink(createProductOrderMessage(product)), "_blank")}
            className="w-full bg-[#25d366] text-white hover:bg-[#1faa52]"
          >
            <MessageCircle className="size-4" />
            Encargar por WhatsApp
          </Button>
          <Button
            variant="outline"
            className="w-full"
            nativeButton={false}
            render={<Link href={`/producto/${product.slug}`} />}
          >
            Ver detalle
            <ArrowUpRight className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
