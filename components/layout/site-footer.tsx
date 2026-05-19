import Link from "next/link";
import { Clock3, MapPin, MessageCircleHeart } from "lucide-react";

import { createWhatsAppLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-border/80 bg-secondary/55">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-sm sm:px-6 lg:px-8">
        <div className="grid gap-2">
          <p className="font-heading text-xl font-semibold text-primary">Pastelería Dulce Amor</p>
          <p className="text-foreground/80">Artesanal, cercana y hecha con amor en El Monte.</p>
        </div>

        <div className="grid gap-3 text-foreground/85 sm:grid-cols-3">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 text-primary" />
            Baquedano 711, El Monte, Chile
          </p>
          <p className="flex items-start gap-2">
            <Clock3 className="mt-0.5 size-4 text-primary" />
            Mar-sáb 16:00-20:30 | Dom y festivos hasta 20:00
          </p>
          <Link
            href={createWhatsAppLink("Hola! Quiero hacer una consulta para un pedido.")}
            target="_blank"
            className="flex items-start gap-2 text-primary transition-colors hover:text-primary/80"
          >
            <MessageCircleHeart className="mt-0.5 size-4" />
            +56 9 5510 9631
          </Link>
        </div>

        <p className="text-xs text-foreground/70">© {new Date().getFullYear()} Dulce Amor. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

