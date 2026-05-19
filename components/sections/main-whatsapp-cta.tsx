"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function MainWhatsAppCta() {
  return (
    <section className="pb-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-3xl border border-border/80 bg-card p-6 text-center sm:p-10"
        >
          <h2 className="font-heading text-3xl font-semibold text-foreground">Reserva o encarga por WhatsApp</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/80 sm:text-base">
            Te respondemos de forma cercana y rápida para coordinar tu pedido, retiro o personalización.
          </p>

          <Separator className="my-6 bg-border/70" />

          <Button
            className="h-12 rounded-full bg-[#25d366] px-8 text-base text-white hover:bg-[#1faa52]"
            onClick={() =>
              window.open(createWhatsAppLink("Hola! Quiero reservar o encargar productos de Dulce Amor."), "_blank")
            }
          >
            <MessageCircle className="size-5" />
            Ir a WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

