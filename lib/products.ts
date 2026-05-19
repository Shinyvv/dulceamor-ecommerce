import { categoryLabels } from "@/lib/whatsapp";

export type ProductCategory =
  | "tortas"
  | "pasteles"
  | "dulces"
  | "donas"
  | "cocteleria-dulce"
  | "cocteleria-salada"
  | "personalizadas";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
  featured: boolean;
  availableSizes?: string[];
};

export const products: Product[] = [
  {
    slug: "torta-red-velvet-amor",
    name: "Torta Red Velvet Amor",
    category: "tortas",
    price: 28990,
    shortDescription: "Bizcocho húmedo con crema de queso y berries frescos.",
    description:
      "Una torta artesanal con capas suaves de red velvet, relleno cremoso y terminaciones delicadas en tonos rosados.",
    images: [
      "/images/productos/torta-red-velvet-1.svg",
      "/images/productos/torta-red-velvet-2.svg",
    ],
    featured: true,
    availableSizes: ["8 porciones", "12 porciones", "20 porciones"],
  },
  {
    slug: "donas-glaseadas-florales",
    name: "Donas Glaseadas Florales",
    category: "donas",
    price: 9990,
    shortDescription: "Pack de 6 donas esponjosas con glaseado rosa y toppings.",
    description:
      "Donas frescas del día con glaseado de vainilla rosada y detalles florales comestibles que enamoran en cada mordida.",
    images: ["/images/productos/donas-1.svg", "/images/productos/donas-2.svg"],
    featured: true,
    availableSizes: ["Pack x6", "Pack x12"],
  },
  {
    slug: "pastel-limon-frambuesa",
    name: "Pastel Limón Frambuesa",
    category: "pasteles",
    price: 4990,
    shortDescription: "Contraste cítrico con crema suave y mermelada artesanal.",
    description:
      "Pastel individual de textura ligera, con base de mantequilla, crema de limón y corazón de frambuesa.",
    images: ["/images/productos/pastel-limon-1.svg", "/images/productos/pastel-limon-2.svg"],
    featured: false,
  },
  {
    slug: "cocteleria-dulce-signature",
    name: "Coctelería Dulce Signature",
    category: "cocteleria-dulce",
    price: 23990,
    shortDescription: "Mini tartas, trufas y cupcakes para celebraciones especiales.",
    description:
      "Selección premium para eventos, cumpleaños o regalos corporativos con una presentación boutique.",
    images: ["/images/productos/coctel-dulce-1.svg", "/images/productos/coctel-dulce-2.svg"],
    featured: true,
    availableSizes: ["20 piezas", "40 piezas", "60 piezas"],
  },
  {
    slug: "cocteleria-salada-brunch",
    name: "Coctelería Salada Brunch",
    category: "cocteleria-salada",
    price: 25990,
    shortDescription: "Bocados salados para complementar tu mesa dulce.",
    description:
      "Mini quiches, tapaditos y bocados horneados pensados para celebraciones familiares y eventos íntimos.",
    images: ["/images/productos/coctel-salado-1.svg", "/images/productos/coctel-salado-2.svg"],
    featured: false,
    availableSizes: ["30 piezas", "50 piezas", "80 piezas"],
  },
  {
    slug: "dulces-del-dia-surtidos",
    name: "Dulces del Día Surtidos",
    category: "dulces",
    price: 6990,
    shortDescription: "Selección diaria de dulces artesanales recién preparados.",
    description:
      "Una caja surtida con los favoritos del día: brownies, alfajores, tartaletas y sorpresas dulces.",
    images: ["/images/productos/dulces-dia-1.svg", "/images/productos/dulces-dia-2.svg"],
    featured: true,
    availableSizes: ["Caja chica", "Caja mediana", "Caja grande"],
  },
  {
    slug: "torta-personalizada-flores",
    name: "Torta Personalizada Flores",
    category: "personalizadas",
    price: 34990,
    shortDescription: "Diseño a pedido según tu idea, temática y celebración.",
    description:
      "Cuéntanos tu inspiración y creamos una torta única con decoración floral, colores y mensaje personalizado.",
    images: [
      "/images/productos/torta-personalizada-1.svg",
      "/images/productos/torta-personalizada-2.svg",
    ],
    featured: true,
    availableSizes: ["15 porciones", "25 porciones", "40 porciones"],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, category: ProductCategory): Product[] {
  return products
    .filter((product) => product.slug !== slug && product.category === category)
    .slice(0, 3);
}

export const availableCategories = Array.from(
  new Set(products.map((product) => product.category)),
).map((category) => ({
  value: category,
  label: categoryLabels[category],
}));

