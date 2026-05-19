"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sparkles, Store } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="brand-shell relative overflow-hidden border-b border-border/70 bg-secondary/55 py-10 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-5"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            Boutique pastelera artesanal en El Monte
          </span>

          <h1 className="font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
            {"Endulza tus momentos con amor \u{1F496}"}
          </h1>

          <p className="max-w-xl text-base text-foreground/80 sm:text-lg">
            Pastelería artesanal hecha con dedicación y cariño. Diseñamos cada creación para que tu celebración sea cálida, cercana y deliciosa.
          </p>

          <div className="grid gap-3 sm:flex sm:items-center">
            <Button className="h-11 px-6" onClick={() => router.push("/catalogo")}>
              Ver productos
            </Button>
            <Button
              className="h-11 bg-[#25d366] px-6 text-white hover:bg-[#1faa52]"
              onClick={() =>
                window.open(createWhatsAppLink("Hola! Quiero pedir productos de Dulce Amor."), "_blank")
              }
            >
              Pedir por WhatsApp
            </Button>
          </div>

          <p className="inline-flex items-center gap-2 text-xs text-foreground/70">
            <Store className="size-3.5" />
            Baquedano 711, El Monte · Mar-sáb 16:00-20:30
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="flower-pattern absolute -inset-3 rounded-[2rem] opacity-60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/80 bg-card soft-glow">
            <Image
              src="/images/ambiente/vitrina-principal.svg"
              alt="Vitrina de Dulce Amor con decoración floral rosada"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



