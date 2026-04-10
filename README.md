# concesionaria

Sitio web configurable para negocios que venden productos. Construido con **Next.js + Tailwind CSS + Framer Motion**.

---

## 🚀 Cómo arrancar

```bash
npm install
npm run dev         # Servidor de desarrollo → http://localhost:3000
npm run build       # Build de producción
```

---

## 🎯 ¿Qué quiero cambiar? → ¿Dónde lo cambio?

Esta es la tabla más importante del proyecto. Para adaptar el sitio a un cliente nuevo, **todo empieza por estos dos archivos**:

| ¿Qué quiero cambiar? | ¿Dónde lo toco? |
|---|---|
| Nombre del negocio | `config.ts` → `name`, `shortName` |
| Descripción / slogan | `config.ts` → `description` |
| URL del sitio | `config.ts` → `url` |
| Color principal (botones, acentos) | `config.ts` → `theme.primaryColor` |
| Fondo oscuro de la web | `config.ts` → `theme.backgroundMain` |
| Fondo de las tarjetas | `config.ts` → `theme.backgroundCard` |
| Colores de texto de tarjetas | `config.ts` → `theme.textColors` |
| Fuente del cuerpo | `config.ts` → `typography.fontBody` |
| Fuente de los títulos | `config.ts` → `typography.fontHeading` |
| Tamaño de texto base | `config.ts` → `typography.sizeBase` |
| Logo del Navbar/Footer | `config.ts` → `logo.main` (subir a `/public/`) |
| Favicon del navegador | `config.ts` → `logo.icon` (subir a `/public/`) |
| Teléfono / WhatsApp | `config.ts` → `contact.phone` |
| Mensaje de WhatsApp | `config.ts` → `contact.whatsappText` |
| Email de contacto | `config.ts` → `contact.email` |
| Ubicación / Google Maps | `config.ts` → `contact.location` y `contact.mapsLink` |
| Instagram | `config.ts` → `socials.instagram` + `instagramHandle` |
| Facebook | `config.ts` → `socials.facebook` + `facebookHandle` |
| Horarios de atención | `config.ts` → `businessHours` |
| Keywords de SEO | `config.ts` → `seo.keywords` |
| Imagen de compartir (og:image) | `config.ts` → `seo.ogImage` |
| **Agregar/quitar productos** | **`data.tsx`** → `productsData` |
| **Agregar/quitar testimonios** | **`data.tsx`** → `testimonialsData` |
| Trabajos del portfolio (Home) | `data.tsx` → `portfolioData` |
| Íconos y links del menú | `data.tsx` → `itemsNavbar` |
| Texto "Por qué elegirnos" | `data.tsx` → `featuresData` |
| Texto "Nuestra Promesa" | `components/sections/FeatureSection.tsx` (inline) |
| Banners de colecciones | `components/sections/CategoryBanners.tsx` (inline) |
| Tipografías de Google Fonts | `app/layout.tsx` → importaciones de `next/font/google` |
| Estilos globales / CSS vars | `app/globals.css` |
| Paleta de colores Tailwind | `tailwind.config.ts` |

---

## 🗂 Estructura del Proyecto

```
PlantillaProducto/
│
├── config.ts             ← ⭐ Configuración del cliente (colores, fuentes, datos)
├── data.tsx              ← ⭐ Contenido del sitio (productos, testimonios, menú)
│
├── app/
│   ├── globals.css       ← Estilos globales + CSS variables
│   ├── layout.tsx        ← Layout raíz: fuentes, metadata, Navbar, Footer
│   ├── page.tsx          ← Home page
│   ├── products/         ← Página de catálogo de productos
│   ├── about/            ← Página Quiénes Somos
│   └── contact/          ← Página de Contacto
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← Navbar flotante "The Nucleus Design"
│   │   ├── Footer.tsx    ← Footer con ubicación, logo, redes y horarios
│   │   └── Header.tsx    ← Header superior
│   │
│   ├── sections/         ← Secciones grandes de la Home y páginas
│   │   ├── HeroStatic.tsx      ← Sección principal con CTA
│   │   ├── FeatureSection.tsx  ← "Nuestra Promesa" (texto de impacto)
│   │   ├── CategoryBanners.tsx ← Bloques de colecciones/categorías
│   │   ├── BestSellers.tsx     ← Grilla de productos destacados con WhatsApp
│   │   ├── Testimonials.tsx    ← Reseñas de clientes
│   │   └── AboutPreview.tsx    ← Preview del "Quiénes Somos" en Home
│   │
│   ├── cards/
│   │   ├── InfoCard.tsx        ← Tarjeta de contacto con link opcional
│   │   └── BannerCard.tsx      ← Tarjeta de banner de categoría
│   │
│   └── ui/               ← Componentes reutilizables base
│       ├── FadeIn.tsx          ← Animación de entrada suave
│       ├── button.tsx          ← Botón base
│       ├── card.tsx            ← Card base (shadcn-like)
│       ├── separador.tsx       ← Línea decorativa plateada
│       └── RacingCardContainer.tsx ← Contenedor glassmorphism oscuro
│
├── types/
│   └── index.ts          ← Tipos TypeScript para todos los datos
│
└── public/               ← Imágenes estáticas (logo, productos, og:image)
```

---

## ✏️ Cómo agregar un producto nuevo

1. Abrir `data.tsx`
2. Copiar uno de los objetos de `productsData`
3. Cambiar el `id` (siguiente número disponible)
4. Completar `title`, `location`, `description`, `category`
5. Subir la imagen a `/public/` y actualizar la ruta en `image`
6. El botón de WhatsApp se genera automáticamente con el nombre del producto

```ts
{
    id: 7,
    title: "Mi Nuevo Producto",
    location: "Colección 2026",
    description: "Descripción del producto.",
    image: "/mi-producto.jpg",
    category: "Premium",
    website: "/contact",
}
```

---

## 🎨 Cómo cambiar el color principal

En `config.ts`, cambiar `primaryColor`:
```ts
theme: {
    primaryColor: "#FFD700",  // ← Dorado, por ejemplo
    primaryHover: "#FFC107",
}
```

El cambio se propaga automáticamente a toda la web: botones, bordes, acentos y brillos.

---

## 🔤 Cómo cambiar las fuentes

1. En `config.ts`, cambiar el nombre de la fuente en `typography`:
```ts
typography: {
    fontBody: "Inter",      // ← Nueva fuente para el cuerpo
    fontHeading: "Cinzel",
}
```
2. En `app/layout.tsx`, actualizar la importación de `next/font/google`:
```ts
import { Inter, Cinzel, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-urbanist" });
```

---

## 📦 Stack tecnológico

- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Carrusel:** Swiper.js
- **Íconos:** Lucide React
- **Fuentes:** Google Fonts (via next/font)

---

*Desarrollado por [Imperia Virtual](https://imperiavirtual.com)*