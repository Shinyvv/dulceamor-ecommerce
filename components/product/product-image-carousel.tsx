"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProductImageCarouselProps = {
  name: string;
  images: string[];
};

export function ProductImageCarousel({ name, images }: ProductImageCarouselProps) {
  return (
    <Carousel className="w-full" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={`${image}-${index}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-card">
              <Image
                src={image}
                alt={`${name} - imagen ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-background/90" />
      <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-background/90" />
    </Carousel>
  );
}

