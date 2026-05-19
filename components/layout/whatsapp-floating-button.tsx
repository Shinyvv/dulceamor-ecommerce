"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <Button
      className="fixed right-4 bottom-4 z-50 h-12 rounded-full bg-[#25d366] px-4 text-white shadow-lg shadow-[#25d366]/30 hover:bg-[#1faa52]"
      onClick={() => window.open(createWhatsAppLink("Hola! Quiero hacer un pedido en Dulce Amor."), "_blank")}
    >
      <MessageCircle className="size-5" />
      WhatsApp
    </Button>
  );
}

