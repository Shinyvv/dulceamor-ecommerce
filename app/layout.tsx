import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Pasteleria Dulce Amor | Catalogo artesanal",
  description:
    "Tortas, donas, pasteles y cocteleria artesanal en El Monte. Encarga por WhatsApp en Pasteleria Dulce Amor.",
  keywords: [
    "pasteleria",
    "tortas personalizadas",
    "donas",
    "El Monte",
    "pedidos por WhatsApp",
  ],
  openGraph: {
    title: "Dulce Amor",
    description: "Endulza tus momentos con amor. Pedidos por WhatsApp.",
    images: ["/images/ambiente/vitrina-principal.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full brand-shell">
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
