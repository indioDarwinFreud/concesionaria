# 📘 Documentación Técnica - MyM Automotores

**Fecha de Última Actualización:** 09/04/2026 (Migración a GitHub)
**Versión del Proyecto:** 3.0 (Concesionaria Independiente)

---

## 🚀 Visión General
> **Nota de Localización:** Todo el contenido, documentación y comunicación del proyecto debe mantenerse en **Español Latino**.

Este documento detalla la arquitectura técnica, la estructura de carpetas y el propósito de los archivos clave del proyecto **MyM Automotores**. El sitio está construido como una landing page de alta gama para concesionaria automotriz, optimizada para SEO y rendimiento utilizando el stack de **Next.js**.

### 🛠 Tech Stack
*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Carrusel:** [Swiper.js](https://swiperjs.com/)

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura modular y semántica para facilitar el mantenimiento y la escalabilidad.

### 1. Directorio Raíz (`/`)
*   **`app/`**: Contiene todas las rutas y páginas de la aplicación (App Router).
*   **`components/`**: Bloques de construcción de la interfaz de usuario (UI).
*   **`public/`**: Archivos estáticos (imágenes, fuentes, iconos) accesibles públicamente.
*   **`lib/` & `utils/`**: Funciones de utilidad y helpers.
*   **`data.tsx`**: **[CRÍTICO]** Base de datos estática del sitio (Textos, Productos, Enlaces).
*   **Configuración**: `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`.

---

## 🔍 Detalle por Carpetas

### 🏛️ `/app` (Rutas)
Aquí reside la lógica de navegación. Cada carpeta representa una URL en el navegador.

| Archivo / Carpeta | Ruta URL | Descripción |
| :--- | :--- | :--- |
| `page.tsx` | `/` | **Página de Inicio**. Contiene el Hero, Features, Testimonios y Call to Action. |
| `layout.tsx` | Global | **Layout Principal**. Define la estructura base (HTML, Body, Navbar, Footer) y fuentes (Cinzel, Urbanist). |
| `about/page.tsx` | `/about` | **Quiénes Somos**. Historia, identidad y pilares de la marca. |
| `contact/page.tsx`| `/contact` | **Contacto**. Formulario inteligente con redirección a WhatsApp API. |
| `products/page.tsx`| `/products` | **Catálogo**. Listado filtrable de productos y elementos de portfolio con modales de vista previa. |
| `globals.css` | N/A | Estilos globales, variables CSS y directivas de Tailwind. |

### 🧩 `/components` (Componentes)
Organizado por función para evitar el "caos de componentes".

#### 🗂️ `components/layout`
Elementos estructurales que aparecen en todas las páginas.
*   **`Navbar.tsx`**: Barra de navegación superior responsive e "Isla de Cristal".
*   **`Header.tsx`**: (Anteriormente usado, verificar uso actual o si está integrado en Navbar).

#### 🖼️ `components/sections`
Secciones completas de página (grandes bloques).
*   **`HeroCarousel.tsx`**: El carrusel principal de la Home con imágenes de impacto.
*   **`FeatureSection.tsx`**: Sección "Por qué elegirnos" (Iconos + Texto).
*   **`FeaturedWorks.tsx`**: Galería de "Nuestros Trabajos" en la Home.

#### 🃏 `components/cards`
Tarjetas individuales reutilizables.
*   **`BannerCard.tsx`**: La tarjeta informativa superpuesta en el carrusel principal (con franjas diagonales).
*   **`FeatureCard.tsx`**: Tarjeta horizontal panorámica usada para mostrar características.
*   **`InfoCard.tsx`**: Tarjeta versátil para mostrar información de contacto o pilares de la empresa (Icono + Título + Texto).

#### 🎨 `components/ui`
Primitivas visuales y elementos de diseño atómico.
*   **`RacingBackground.tsx`**: El fondo con franjas diagonales característico de la marca ("Estilo Racing").
*   **`DiagonalStripes.tsx`**: El componente puramente decorativo de las franjas (SVG/CSS).
*   **`RacingCardContainer.tsx`**: Un contenedor (wrapper) que añade el fondo Racing a cualquier contenido.
*   **`FadeIn.tsx`**: Componente wrapper para animar la entrada de elementos (efecto aparecer).
*   **`button.tsx`**: Botones estandarizados.

---

## ⚙️ Archivos Clave y Configuración

### 📄 `data.tsx` (El "Cerebro" de Contenidos)
Este archivo centraliza **toda la información textual y lógica de datos** del sitio. **Si necesitas cambiar un texto, precio, imagen o enlace, es aquí.**

*   `itemsNavbar`: Enlaces del menú principal.
*   `productsData`: Catálogo completo de artículos y líneas premium con medidas y descripciones genericas.
*   `portfolioData`: Trabajos destacados mostrados en la Home.
*   `carouselImages`: Imágenes del slider principal.
*   `featuresData`: Beneficios de la empresa.
*   `contactData`: Enlaces de redes sociales, teléfono, email y ubicación.

### 🎨 `tailwind.config.ts` (Sistema de Diseño)
Define la identidad visual de PlantillaProducto.
*   **Colores**: Extiende la paleta con colores de marca (probablemente naranjas, negros, grises).
*   **Fuentes**: Define las variables para `font-cinzel` (Títulos) y `font-urbanist` (Cuerpo).
*   **Animaciones**: Configuración de keyframes personalizados si los hay.

### 🛠️ `lib/utils.ts`
*   **`cn(...)`**: Una utilidad estándar en proyectos modernos (clsx + tailwind-merge) para combinar clases CSS condicionalmente sin conflictos.

---

## 📝 Convenciones de Desarrollo
1.  **Nombres de Archivos**:
    *   Componentes: `PascalCase.tsx` (Ej: `BannerCard.tsx`).
    *   Páginas/Utilidades: `kebab-case` o `camelCase` según estándar Next.js (Ej: `page.tsx`, `utils.ts`).
2.  **Estilos**: Utility-first con Tailwind CSS. Evitar CSS modules a menos que sea estrictamente necesario para animaciones complejas.
3.  **Imágenes**: Usar siempre el componente `<Image />` de Next.js para optimización automática. Las rutas son relativas a la carpeta `public`.
4.  **Iconos**: Importar desde `lucide-react`.

---

## 🚀 Flujo de Despliegue (Deploy)
El proyecto está configurado para desplegarse automáticamente en **Vercel** o **Render** (según configuración actual) al hacer push a la rama `main` del repositorio.

**Comandos útiles:**
*   `npm run dev`: Iniciar servidor de desarrollo (Local).
*   `npm run build`: Compilar para producción.
*   `npm run start`: Iniciar servidor de producción (probar build localmente).
*   `npm run lint`: Verificar errores de código.
