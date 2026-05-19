"use client";

import { Heart, Leaf, Sparkle } from "lucide-react";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Hecho a mano",
    description: "Cada preparación se trabaja de forma artesanal en nuestro taller.",
    icon: Heart,
  },
  {
    title: "Ingredientes frescos",
    description: "Seleccionamos materias primas de calidad para un sabor auténtico.",
    icon: Leaf,
  },
  {
    title: "Detalle boutique",
    description: "Decoración floral y estética dulce pensada para sorprender.",
    icon: Sparkle,
  },
];

export function ExperienceSection() {
  return (
    <section className="bg-card/55 py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-7 text-center"
        >
          <h2 className="font-heading text-3xl font-semibold">Una experiencia artesanal y cercana</h2>
          <p className="mx-auto mt-3 max-w-3xl text-foreground/80">
            Cada creación está hecha a mano, con ingredientes frescos y mucho amor.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full border-border/70 bg-background/95 py-0">
                <CardContent className="grid gap-3 p-5">
                  <span className="w-fit rounded-full bg-primary/12 p-2 text-primary">
                    <value.icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-foreground/80">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

