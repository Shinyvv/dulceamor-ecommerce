import type { Product, ProductCategory } from "@/lib/products";

export const WHATSAPP_NUMBER = "56955109631";

export const categoryLabels: Record<ProductCategory, string> = {
  tortas: "Tortas",
  pasteles: "Pasteles",
  dulces: "Dulces del día",
  donas: "Donas",
  "cocteleria-dulce": "Coctelería dulce",
  "cocteleria-salada": "Coctelería salada",
  personalizadas: "Personalizadas",
};

export function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createProductOrderMessage(product: Product): string {
  return `Hola! Me gustaria pedir este producto: ${product.name}.`;
}

