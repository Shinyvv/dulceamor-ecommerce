"use client";

import Link from "next/link";
import { Menu, PhoneCall, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createWhatsAppLink } from "@/lib/whatsapp";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Tortas a pedido", href: "/#personalizadas" },
  { label: "Contacto", href: "/#contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-full bg-primary/15 p-2">
            <Store className="size-5 text-primary" />
          </span>
          <span className="font-heading text-xl font-semibold text-primary">Dulce Amor</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => window.open(createWhatsAppLink("Hola! Quiero hacer un pedido en Dulce Amor."), "_blank")}
            className="bg-[#25d366] text-white hover:bg-[#1faa52]"
          >
            <PhoneCall className="size-4" />
            Pedir por WhatsApp
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Abrir menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card">
            <SheetHeader>
              <SheetTitle className="font-heading text-primary">Pastelería Dulce Amor</SheetTitle>
              <SheetDescription>Diseños artesanales y pedidos por WhatsApp.</SheetDescription>
            </SheetHeader>

            <nav className="grid gap-3 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-border/70 px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-4">
              <Button
                onClick={() => window.open(createWhatsAppLink("Hola! Quiero coordinar un pedido en Dulce Amor."), "_blank")}
                className="w-full bg-[#25d366] text-white hover:bg-[#1faa52]"
              >
                <PhoneCall className="size-4" />
                Reservar ahora
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

