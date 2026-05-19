# Handoff - Pasteleria Dulce Amor

## 1) Resumen ejecutivo
Este proyecto implementa una landing page comercial + catalogo simple para Pasteleria Dulce Amor, con enfoque mobile-first y conversion por WhatsApp.

El alcance definido se respeto de forma estricta:
- No hay carrito.
- No hay checkout.
- No hay pagos online.
- Toda accion de conversion lleva a WhatsApp.

La solucion se construyo con Next.js App Router, TypeScript fuerte, Tailwind v4, componentes shadcn/ui y animaciones con Motion.

## 2) Contexto de negocio
Marca: Pasteleria Dulce Amor.

Objetivo principal:
- Convertir trafico social (especialmente Instagram) en conversaciones directas de venta por WhatsApp.

Posicionamiento:
- Pasteleria artesanal, calida, cercana, femenina, visual e "instagrammable".

Direccion visual aplicada:
- Paleta rosada + neutros suaves.
- Tarjetas tipo boutique.
- Fondos con gradientes suaves y patron floral sutil.
- Jerarquia emocional: hero, confianza, productos, personalizacion y CTA final.

## 3) Stack y versiones
Versiones obligatorias aplicadas:
- Next.js: 16.2.6
- TypeScript: 6.0.3 (linea 6.0)
- Tailwind CSS: 4.3.0
- shadcn CLI: 4.7.0
- Motion: 12.38.0

Package manager:
- pnpm

Notas de implementacion:
- Se uso la salida actual de shadcn/ui 4.7, que genera componentes sobre `@base-ui/react`.
- `toast` de shadcn esta deprecado en el registry actual, por eso se uso `sonner` como reemplazo oficial.

## 4) Estructura final del proyecto
Estructura principal:

- `app/`
  - `page.tsx` (landing)
  - `catalogo/page.tsx` (catalogo)
  - `producto/[slug]/page.tsx` (detalle de producto)
  - `api/productos/route.ts` (endpoint JSON de productos)
  - `loading.tsx` (skeleton global)
  - `error.tsx` (error boundary)
  - `layout.tsx` (layout global + metadata + header/footer + floating button + toaster)
  - `globals.css` (tokens visuales y tema)

- `components/`
  - `layout/` (header, footer, floating whatsapp)
  - `sections/` (hero, destacados, experiencia, personalizadas, CTA final)
  - `product/` (card, carousel, cliente de filtros)
  - `ui/` (shadcn/base-ui: button, card, badge, dialog, sheet, form, input, textarea, select, skeleton, carousel, separator, sonner)

- `lib/`
  - `products.ts` (modelo, dataset, helpers)
  - `whatsapp.ts` (numero, mensajes, links y formato de precio)
  - `utils.ts`

- `hooks/`
  - `use-toast.ts`

- `styles/`
  - `brand-effects.css` (glow, overlay y patron)

- `public/images/`
  - `ambiente/` y `productos/` (assets SVG actuales)

## 5) Arquitectura y decisiones tecnicas
### 5.1 Datos de producto en capa local (`lib/products.ts`)
Decision:
- Mantener catalogo como fuente local tipada para velocidad de entrega, cero dependencia externa y facil despliegue estatico.

Motivo:
- El alcance no pedia panel admin ni CMS.
- Facilita SSG de rutas de producto y rendimiento estable.

Tradeoff:
- Para crecer, convendra migrar a CMS o DB.

### 5.2 API interna (`app/api/productos/route.ts`)
Decision:
- Exponer un endpoint simple con el mismo dataset local.

Motivo:
- Permite futura integracion (apps, dashboards, automatizaciones) sin romper el contrato de datos.

### 5.3 Generacion estatica de detalle de producto
Decision:
- `generateStaticParams()` para `/producto/[slug]`.

Motivo:
- Mejor rendimiento y SEO para catalogo estable.

### 5.4 Sistema visual en tokens Tailwind v4
Decision:
- Definir colores/tokens en `app/globals.css` con variables semanticas (`--primary`, `--secondary`, etc.) en tonos rosados/neutros.

Motivo:
- Escalabilidad de marca y consistencia entre secciones.

### 5.5 Fuentes fallback locales en CSS
Decision:
- Usar stack local (`Nunito Sans` fallback, `Baskerville/Georgia`) en variables CSS, sin `next/font` remoto.

Motivo:
- El entorno de build de trabajo tuvo restricciones de red para Google Fonts.
- Evita fallos de compilacion y hace el build reproducible offline.

Tradeoff:
- Diferencias visuales menores segun sistema operativo.

### 5.6 Componentes UI con shadcn/base-ui
Decision:
- Usar componentes generados por shadcn/ui 4.7 y extender solo donde hacia falta.

Motivo:
- Mantener base reusable y consistente.
- Mejor accesibilidad por defecto.

### 5.7 Correccion de accesibilidad en Button + links
Decision:
- En botones que renderizan `Link` o `a`, se seteo `nativeButton={false}`.

Motivo:
- Evitar warning/semantica invalida de Base UI y preservar accesibilidad.

## 6) UX y conversion (decisiones funcionales)
### 6.1 Embudo de conversion
Se diseno un embudo de 5 pasos:
1. Hero emocional con CTA doble.
2. Validacion visual con destacados.
3. Confianza de marca (artesanal + ingredientes + detalle).
4. Flujo de tortas personalizadas (punto de alto ticket).
5. CTA final fuerte hacia WhatsApp.

### 6.2 WhatsApp como unica accion de compra
Decision:
- Centralizar enlaces con `createWhatsAppLink()` en `lib/whatsapp.ts`.

Motivo:
- Consistencia de mensajes.
- Mantenimiento simple del numero unico.

Puntos de contacto a WhatsApp:
- Header desktop.
- Menu mobile.
- Hero.
- Product cards.
- Detalle de producto.
- Seccion personalizadas.
- CTA principal final.
- Boton flotante.
- Footer.

### 6.3 Formulario guiado para tortas personalizadas
Decision:
- `react-hook-form + zod` dentro de dialog.

Motivo:
- Capturar contexto util antes de abrir WhatsApp (nombre, porciones, fecha, idea).
- Mejorar calidad del lead desde la primera conversacion.

## 7) Animaciones y percepcion de marca
Se uso `motion/react` con criterio:
- Fade/slide de entrada en hero y bloques.
- Stagger en seccion experiencia.
- Hover lift en cards.

Decision:
- Animacion suave y breve (sin exceso) para sensacion premium sin afectar usabilidad mobile.

## 8) Performance
Medidas aplicadas:
- `next/image` en hero, cards y detalle.
- Rutas de producto prerenderizadas.
- Layout y componentes modulares para cacheo y mantenimiento.
- Skeleton para estados de carga.

## 9) SEO y metadata
Configurado en `app/layout.tsx`:
- `title`, `description`, `keywords`, `openGraph`.
- `metadataBase` configurable por `NEXT_PUBLIC_SITE_URL`.

## 10) Componentes UI implementados (requisito)
Implementados en `components/ui`:
- Button
- Card
- Badge
- Dialog
- Sheet
- Form
- Input
- Textarea
- Select
- Skeleton
- Carousel
- Separator
- Toast (wrapper via `components/ui/toast.tsx` + `sonner`)

Nota:
- El registry actual de shadcn depreca `toast` clasico, por eso se implemento wrapper estable sobre sonner.

## 11) Riesgos, tradeoffs y deuda tecnica consciente
1. Assets actuales en SVG generico
- Se usaron assets SVG de trabajo para mantener consistencia visual inmediata.
- Recomendado: reemplazar por fotografia real optimizada (`.webp`) de local y productos.

2. Texto mixto con y sin tildes
- Durante ajustes de encoding en Windows se normalizaron varios textos a ASCII para asegurar build estable.
- Recomendado: una pasada editorial final del copy.

3. Datos hardcoded
- Correcto para MVP.
- Recomendado en fase 2: CMS (Sanity/Contentful/Strapi) o DB con panel interno.

4. Dependencias no usadas inmediatamente
- `next-themes`/`radix-ui` quedaron por arrastre de templates/registry.
- No bloquea, pero se puede limpiar en hardening.

## 12) Guia operativa
Comandos:
- Desarrollo: `pnpm dev`
- Lint: `pnpm lint`
- Build: `pnpm build`
- Produccion local: `pnpm start`

## 13) Propuesta de fase 2
1. Reemplazar SVG por fotos reales optimizadas y generar variantes responsive.
2. Agregar tracking de conversion (Meta Pixel + GA4 + eventos WhatsApp click).
3. Migrar catalogo a CMS.
4. Agregar seccion de testimonios/reviews y contenido UGC de Instagram.
5. Agregar `sitemap`, `robots`, metadata por producto mas rica (OG por slug).

## 14) Estado de entrega
Estado actual:
- Implementacion completa y funcional.
- Sin carrito/checkout/pagos (segun requerimiento).
- Enrutamiento, UI reusable, conversion por WhatsApp y build productivo validados.

Ultima validacion ejecutada:
- `pnpm lint` OK
- `pnpm build` OK

---
Si otro equipo retoma este proyecto, el punto de extension recomendado es `lib/products.ts` + `components/product/` para evolucion de catalogo, y `components/sections/` para iteracion comercial de conversion.
