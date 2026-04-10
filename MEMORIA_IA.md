# MEMORIA DE INTELIGENCIA ARTIFICIAL (UNIFICADA)

## Identidad
**Nombre:** Gravithy
**Rol:** Asistente de Programación Full Stack & Compañero de Equipo
**Lema:** "Traducimos códigos binarios para que se entiendan las cosas."

## Directivas Estrictas (Reglas de Oro)
1.  **Autenticidad de Datos TOTAL:** NUNCA inventar datos de ninguna forma (reseñas, nombres, testimonios, precios, etc.). Siempre preguntar al usuario ante la duda o falta de información real.
2.  **Eficiencia de Proceso:** No grabar ni documentar procesos de trabajo (screenshots/recordings de pasos intermedios) a menos que sea pedido explícitamente, para no perder tiempo.
3.  **Documentación en Español:** Todos los planes de implementación (`implementation_plan.md`), listas de tareas (`task.md`) y documentación de trabajo deben redactarse íntegramente en español para mantener la coherencia y claridad con el usuario.
4.  **Educación Continua:** Ante una corrección del usuario, actualizar esta memoria inmediatamente para no repetir errores.

## Preferencias del Usuario
1.  **Idioma:** Español Latino (Argentino/Informal) - **EXCLUYENTE**. No usar "chaval", "os", "vosotros", etc. Usemos "che", "viste", "mirá", o un neutro latino profesional.
2.  **Estilo de Trabajo:** "Somos un buen equipo".
3.  **Estética:** Premium, Dorados, Negro, Naranja (para PlantillaProducto), Diseño Moderno, "Wow factor".
4.  **Enfoque:** Frontend visualmente impactante.

## Proyectos Activos
### 1. Imperia Virtual (Proyecto Principal)
*   **Descripción:** Plataforma premium para conectar emprendimientos (tipo Mercado Libre pero exclusivo).
*   **Estado:** Frontend avanzado con carrusel animado, tarjetas de negocios y reseñas reales integradas.
*   **Stack:** Next.js, Tailwind CSS, Framer Motion/Swiper.
*   **Diseño:** Degradados metálicos (`text-gold-gradient`), Logo minimalista.

### 2. PlantillaProducto (Sub-Producto)
*   **Descripción:** Plantilla web premium, escalable y configurable, diseñada originalmente como un taller gráfico pero adaptada a un producto genérico y altamente profesional. Es la base fundacional de MyM Automotores.
*   **Estado:** Sitio web principal (Home). Branding plateado y neutro. Antes de Enero 2026, era "Imperia Virtual". Desplegado en `plantillaproducto.com`.

### 3. MyM Automotores (Concesionaria)
*   **Descripción:** Landing page de alta gama para comercialización de vehículos usados y 0km. 
*   **Estado:** Versión final migrada. Implementa jerarquía de datos automotriz (Año, KM, Precio) y sellos de confianza.
*   **Stack:** Next.js, Tailwind CSS, Lucide Icons.
*   **Diseño:** Tema **MYM_RED** (Negro/Rojo vibrante), Glassmorphism avanzado, UI orientada a la conversión vía WhatsApp.

## Notas Técnicas Generales (Estandarización)
*   **Separación de Responsabilidades:** Los datos de secciones (testimonios, productos, etc.) deben externalizarse a archivos específicos en la carpeta `data/`.
*   **Estilos Swiper:** Los estilos personalizados de carruseles deben residir en `app/globals.css` para evitar CSS incrustado en componentes.
*   **Navegación ("The Nucleus Design"):** La "Isla de Cristal" o pastilla de navegación (Navbar) usa efectos de anillo flotante y centrado estricto para el master icon central (IV / EG).
*   **Tipografía:**
    *   Títulos/Logos (PlantillaProducto): **Cinzel** (Google Fonts).
    *   Cuerpo/General (Ambos): **Urbanist** (Google Fonts).
    *   Títulos/Logos (Imperia Virtual): **Playfair Display** / **Georgia**.
    *   **Imágenes Externas:** Para usar `<NextImage>` con dominios como `images.unsplash.com`, es OBLIGATORIO configurar `remotePatterns` en `next.config.ts`.
    *   **LCP Optimization:** Se ha priorizado el uso de `next/image` en todo el sitio para mejorar el LCP (Largest Contentful Paint) y la experiencia de usuario.

## Bitácora de Cambios (Log Global)

**Diciembre 2025**
*   **10/12/2025:** Creación de memoria inicial `MEMORIA_IA.md`. Despliegue de Imperia Virtual en Vercel resolviendo bugs de Turbopack/Next.js y arreglos ESLint. Refactorización del NavBar a "Isla de Cristal". Integración cliente "Hermanieros". (Imperia Virtual & Base)
*   **15/12/2025:** Refactorización de fondos globales (`bg-degrade-azul`). Partículas limitadas a la Home Page. (Imperia Virtual & Base)

**Enero 2026 (Rebranding PlantillaProducto)**
*   **05/01/2026:** Inicio de Rebranding para el Taller Gráfico ("PlantillaProducto"). Nuevo botón naranja sólido, layout actualizado con nuevo título. (PlantillaProducto)
*   **13/01/2026:** Rebranding completo de la Home. Implementación de componente `FeatureCard.tsx`. Paleta `primary` naranja (`#f97316`) y textura global `bg-orange.jpg`. Ajuste móvil 150vh/vw. (PlantillaProducto)
*   **16/01/2026:** Efecto "fumigado" en el logo al scrollear. Separación de datos en `productsData` y `portfolioData`. Catálogo técnico de banderas con nueva UI modal de previsualización en pantalla completa. (PlantillaProducto)
*   **26/01/2026:** Ajustes de tipografía (Gotham Style) en la vista de Productos y animaciones de switch (Banderas/Banners) "Sliding Pill" con framer-motion. (PlantillaProducto)
*   **27/01/2026:** Extraída lógica decorativa naranja a `RacingBackground.tsx`. Deep linking en Productos (`/products?category=Banner`). (PlantillaProducto)
*   **29/01/2026:** Estilización "Naranja Imperatriz" para las tarjetas de "Quiénes Somos" garantizando alineación premium y contraste. (PlantillaProducto)

**Febrero 2026 (Refinamiento y Deployments)**
*   **09/02/2026:** Refactor integral de Contacto. Redirección WhatsApp-First, eliminando fricción. Arquitectura consolidada (`RacingCardContainer.tsx`, `InfoCard.tsx`). Mantenimiento de Next.js (error "Element type is invalid" fix). (Emperatriz)
*   **10/02/2026:** Repositorio subido a GitHub y deploys base en Render. Organización final de componentes (`layout/`, `sections/`, `cards/`, `ui/`). (PlantillaProducto)
*   **15/02/2026:** Reorganización profunda de `imperia-virtual`. Creación de `ESTRUCTURA_PROYECTO.md`. Fix de rutas muertas. (Imperia Virtual)
*   **16/02/2026:** Estandarización de documentación base creando `DOCUMENTACION_TECNICA.md` en ambos repositorios. Integración de la filosofía WhatsApp-First para todo canal de contacto orgánico (removido mail en forma nativa). (Global)
*   **18/02/2026:** Adquisición y delegación DNS del dominio. Definición obligatoria de Español Argentino/Informal para el agente. (PlantillaProducto)
*   **19/02/2026:** Se documentó bug visual pasivo de Turbopack (`[baseline-browser-mapping] The data in this module is over dos meses old`). Removido input de mail del form de contacto para simplificar a un botón simple. (Imperia Virtual)
*   **23/02/2026:** Refactor visual pesado. Imperia Virtual abstrajo su UI a `business-card.tsx` globalizando el diseño. PlantillaProducto construyó un nuevo *Footer Global Premium* (`components/layout/Footer.tsx`) con Glassmorphism oscuro y línea radial dorada Glow con firma maestra "Creado por Imperia Virtual". (Global)
*   **24/02/2026 - 25/02/2026:** La evolución del "Navbar V2 (The Nucleus Design)", reduciendo fuertemente el padding-y (`py-1.5`) para engordar los Símbolos Centrales (IV y EG) y dejarlos rebasar de la "pastilla". 
    - En Imperia Virtual se optimizó UX de la web principal removiendo link muerto de Testimonios y añadiendo Reseñas Reales embebidas de Google Maps en la home.
    - Se aplicó un centrado milimétrico (`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`) en ambos Navbares (PlantillaProducto e Imperia) para solucionar bugs de posición absoluta asimétrica (hundimiento visual) en dispositivos móviles, asegurando una presencia impactante 100% simétrica y responsiva. Unificación de los archivos `MEMORIA_IA.md` lograda con éxito. (Global)
    - **[BUG CERRADO - 25/02/2026]**: Se solucionó de raíz el bug de Safari/iOS (navbar desplazado en X e Y al scrollear). Se aplicó `overflow-x-hidden` global en `<html>` y `<body>` (evitando recálculos asimétricos de centrado en viewport móvil) y en la barra de navegación propiamente dicha se implementó el soporte nativo de `pb-[env(safe-area-inset-bottom)]` combinado con `left-0 w-full` (reemplazando flex+inset). El navbar V2 The Nucleus Design funciona ahora con solidez militar en ecosistemas Apple.
    - **[INICIO BLUEPRINT TEMPLATES]**: Se definió crear dos plantillas base altamente escalables (Productos y Servicios) aplicando *Arquitectura Config-Driven* (manejo de marca, colores y catálogo a través de un único archivo `config.ts`). El Navbar Genérico retornará tráfico a Imperia Virtual. 
    - **[CAMBIO DE ENTORNO - BLUEPRINT]**: Se suspende la creación de las plantillas dentro del repositorio temporal de `imperia-virtual`. El usuario indica que abrirá de forma nativa el repositorio de `PlantillaProducto` para utilizar su código fuente y estructura real como base fundacional para la creación de las plantillas genéricas. Se confirmó y validó que no quedó rastro del código de las plantillas genéricas en la instancia de `imperia-virtual`.
*   **25/02/2026 (Noche) - Ejecución Blueprint PlantillaProducto:**
    - Limpieza absoluta de la identidad "Emperatriz Taller Gráfico". Se eliminaron logos antíguos, backgrounds (`bg-orange.jpg`) y referencias de colores estáticos codificados en los componentes.
    - Se implementó la **Arquitectura Config-Driven** creando un archivo central `config.ts` desde el cual toda la web (Metadata, Navbar, Footer y `data.tsx`) consume su esquema de colores, logo y enlaces.
    - Paleta de colores migrada de un Naranja Estático a un Plateado/Neutral dinámico y elegante (`#c0c0c0` general, inyectado vía variables CSS al Tailwind global).
    - **Generalización total:** Se eliminó el vasto catálogo de "banderas" y la jerga "textil" del portal. Se introdujo texto _filler_ orientado a "Soluciones Premium" con categorías versátiles (`Premium`, `Essential`, `Innovación`). La base funge ahora como un *Boilerplate* puro, neutro y altamente profesional, completamente desligado de su contexto de negocio original.
*   **26/02/2026 (Noche) - Rediseño Home como Plantilla E-Commerce Genérica:**
    - **[OBJETIVO]**: Transformar el boilerplate neutro en una landing page de ventas muy directo al punto, orientada a emprendedores que venden productos (ropa, zapatillas, bijouterie, celulares, etc.) sin local físico.
    - **[FILOSOFÍA WHATSAPP-FIRST]**: Todos los botones de acción de los productos generan un enlace dinámico a WhatsApp con el texto: *"Hola, me interesa el producto: [Nombre del Producto]"*. De esta manera, cada consulta llega directamente al teléfono del cliente.
    - **[ESTÉTICA]**: Se adoptó la paleta de colores de **Imperia Virtual** para los fondos (`backgroundMain: linear-gradient(170deg, #021824 0%, #011b1a 100%)`). Todas las tarjetas usan ahora un fondo plateado premium (`backgroundCard: #f3f4f6`) con textos oscuros para máxima legibilidad. El color primario de los detalles y botones pasó a ser un Plata/Silver (`primaryColor: #C0C0C0`), eliminando los anteriores acentos azules (`#0066FF`). Toda la página es oscura pero con un contraste elegante y metálico.
    - **[ESTRUCTURA HOME FINAL]**: Hero -> Sobre Nosotros (Preview) -> Nuestra Promesa -> Colecciones (Banners) -> Productos Destacados -> Testimonios.
    - **[NUEVOS COMPONENTES]**:
        - `HeroStatic.tsx`: Reemplaza `HeroCarousel`. Sección Hero estática con título (`siteConfig.name`), subtítulo (`siteConfig.description`) y botón de presupuesto a `/contact`. Sin carrusel.
        - `AboutPreview.tsx`: Nueva sección visual inyectada debajo del Hero. Presenta una tarjeta glassmorphism con imagen de alta calidad e información introductoria ("El estándar de excelencia").
        - `BestSellers.tsx`: Reemplaza `FeaturedWorks`. Grilla de productos con botón de WhatsApp dinámico por producto. Fondo de tarjeta plata y sombras metálicas.
        - `CategoryBanners.tsx`: Dos "bloques" visuales grandes que enlazan a colecciones (`/products?category=...`). Efecto hover de escala e iluminación plata.
        - `Testimonials.tsx`: Sección de reseñas de clientes con estrellas, tarjetas fondo plata y avatar de iniciales.
        - `FeatureSection.tsx`: Rediseñada como "Texto Descomunal" centrado (sin tarjetas), genérico para cualquier negocio. Transmite confianza con tipografía de alto impacto.
        - `Footer.tsx`: Refactorizado para consumir la propiedad `backgroundFooter` directamente desde `config.ts`, usando la misma textura en degradado azul marino de Imperia Virtual.
    - **[CONFIG.TS ACTUALIZADO]**: El bloque `theme` del `config.ts` controla 100% de la paleta. Los fondos oscuros harcodeados fueron purgados.
*   **28/02/2026 - Ultra-Simplificación del Boilerplate:**
    - Creación de un nuevo micro-componente `<Separador />` elegante con líneas en gradiente plateado para estructurar secciones de la Home de manera sofisticada. 
    - Limpieza profunda de textos, categorías específicas (Premium, Essential, Innovación) y elementos estilísticos (barras de búsqueda con filtros, tabs) en `/products`, `/about` y `/contact` para dejar el Boilerplate en su mínima expresión, listo para amoldarse a cualquier cliente sin que arrastre conceptos del template anterior.
    - Se eliminó el `<RacingBackground />` diagonal de las tarjetas (`RacingCardContainer`) buscando una estética puramente limpia, apoyándose en la sobriedad metálica de la configuración actual.
    - **[TAREAS COMPLETADAS]**:
- [x] Analyze current themes in `config.ts`
- [x] Redesign neon button in `HeroStatic.tsx` (Transparent + Silver Outline)
- [x] Refactor neon button to a reusable component `NeonButton.tsx`
- [x] Integrate `NeonButton` into `HeroStatic.tsx`
- [x] Integrate `NeonButton` into `app/contact/page.tsx`
- [x] Generate/Find background images for the 3 themes (Silver, Gold, Blue)
- [x] Implement site-wide background images in `config.ts`
- [x] Implement card-specific background textures in `ProductCard`, `InfoCard`, etc.
- [x] Verify visual harmony and responsiveness
- [x] Finalize documentation in `MEMORIA_IA.md`
*   **02/03/2026 - Centralización Avanzada de Colores y Textos:**
    - Integración profunda de `siteConfig.theme` en todas las tarjetas de la plataforma (`Card`, `RacingCardContainer`, `InfoCard`, `BestSellers`, `Testimonials`, `Products`).
    - Se introdujo el bloque dinámico `textColors` en el archivo principal `config.ts`.
    - Esto permite modificar el color del fondo de TODAS las tarjetas de la web (`backgroundCard`) y el color de sus títulos y descripciones desde un único lugar, eliminando las clases fijas (`text-white`, `text-neutral-900`) de Tailwind en los componentes.
*   **05/03/2026 - Logros de Estandarización y Temas:**
    - **[UNIFICACIÓN DE PRODUCTOS]**: Se consolidó toda la UI de los productos en un único componente `ProductCard.tsx`. Esto garantiza que cualquier cambio de diseño, botón o color se replique instantáneamente en la Home y en el Catálogo.
    - **[SISTEMA DE TEMAS]**: Se refactorizó el `config.ts` para soportar una biblioteca de temas (`SILVER_PREMIUM`, `GOLD_EMPIRE`, `ELECTRIC_BLUE`). Ahora basta con cambiar una variable para mutar la identidad visual de toda la web.
    - **[EFECTOS NEÓN]**: Se integraron efectos de "luz de neón" (bordes brillantes y resplandores) en los cuadros de descripción de "Sobre Nosotros" y en el botón principal de WhatsApp en "Contacto". Estos efectos son dinámicos y cambian de color según el tema activo.
    - **[COMPONENTE REUTILIZABLE]**: Se creó el componente `<NeonButton />` que encapsula la estética de "rectángulo de luz" transparente con borde plateado and resplandor neón de alto impacto. Este componente se integró en el Hero y en el formulario de Contacto, centralizando la lógica visual.
    - **[ASSETS VISUALES PREMIUM]**: Se generaron e integraron texturas de alta resolución para los fondos globales (`silver_bg`, `gold_bg`, `blue_bg`). Se implementó un modo de mezcla (`multiply/overlay`) para fusionar estas texturas con los degradados base, aportando profundidad táctil sin romper la estética original.
    - **[GLASSMORPISM & SVG CLEANUP]**: 
        - Se dio el salto al **Glassmorphism** completo: todas las tarjetas poseen ahora fondos semi-transparentes coordinados con el tema y efecto de desenfoque de fondo (`backdrop-blur-md`).
        - Se eliminaron las texturas de tarjetas generadas por IA que contenían errores de texto o marcas de agua, reemplazándolas por un sistema de **Patrones SVG Vectoriales** (Technical Grids/Luxury Weaves) inyectados directamente en el código. Esto garantiza una nitidez absoluta y un rendimiento superior.
        - **Unificación Visual**: Se barrió toda la web (`About`, `Contact`, `Products`, `Banners`) para asegurar que ninguna sección quedara "vacía" o con cajas blancas, logrando una atmósfera inmersiva y 100% premium en los tres temas disponibles.
        - **[FIX FONDO GLOBAL]**: Se resolvió un glitch visual de "imagen cortada" en el fondo de pantalla. Se simplificó la arquitectura de capas en `layout.tsx` a un único contenedor con `background-size: cover` y `background-repeat: no-repeat`, eliminando efectos de mezcla conflictivos y garantizando que la textura metálica/premium sea 100% visible y fluida en cualquier resolución.
    - **[ROBUSTEZ]**: Se corrigieron errores de tipos en `layout.tsx` vinculando propiedades de `radius` y `navbarStyle` directamente al motor de temas, asegurando un build de producción estable (Exit code 0).
    - **[MEMORIA]**: Actualización de la documentación técnica para reflejar la nueva arquitectura orientada a múltiples clientes.

*   **07/03/2026 - Optimización de Rendimiento Visual y Entorno:**
    - **[FIX ENTORNO]**: Se resolvió el bloqueo de PowerShell en Windows para ejecutar scripts locales como `npm run dev` mediante la habilitación de `RemoteSigned` en `ExecutionPolicy`.
    - **[IMÁGENES 4K]**: Se generaron nuevos fondos abstractos premium en alta resolución para los tres temas (`silver_bg_premium`, `gold_bg_premium`, `blue_bg_premium`) reemplazando versiones de baja calidad.
    - **[ANTI-PIXELACIÓN]**: Para evitar que las imágenes de fondo se vean pixeladas o "estiradas" en pantallas grandes (1080p/4K), se implementó un sistema de doble capa en `layout.tsx`:
        1.  **Blur Profundo**: Se aplica un `filter: blur(20px)` y `transform: scale(1.05)` a la imagen base para suavizar por completo cualquier escalado de píxeles, manteniendo las matrices de color intactas.
        2.  **Noise Overlay**: Por encima del blur, se inyectó una capa SVG generada por código (`feTurbulence`) con `mix-blend-overlay` y opacidad mínima (`0.03`). Esto aporta un "grano fotográfico" o textura física ultra realista de alta resolución infinita que camufla perfectamente cualquier defecto subyacente de low-res y eleva dramáticamente el "Wow factor" del sitio web.
    - **[EFECTO FUMIGADO FOOTER]**: Se corrigió el efecto de fondo desenfocado en el `Footer.tsx`. Se aisló el estilo `filter: blur(20px)` y `transform: scale(1.05)` en un contenedor absoluto interior (`-z-10`) para evitar desenfocar de forma heredada los textos y logos, asegurando legibilidad perfecta.
    - **[CAMBIO DE IDENTIDAD]**: Se configuró como tema activo de la plantilla el `ELECTRIC_BLUE`.

*   **12/03/2026 - Sincronización Global de Memorias:**
    *   **Refactorización Senior:** Estandarización de arquitectura en todo el ecosistema. Se impulsó la separación de responsabilidades (datos en `/data`, estilos en `globals.css`) para componentes complejos.
    *   **Directivas Globales:** Sincronización de reglas de oro (No inventar datos, Documentación en Español, Eficiencia de proceso) en todos los proyectos de la red Imperia.
    *   **Interactividad Premium:** Implementación de carruseles avanzados con tarjetas CTA integradas y leyendas inteligentes para mejorar la conversión y UX.

*   **09/03/2026 - Unificación Visual y Refinamiento Premium:**
    - **[LIMPIEZA DE DATOS]**: Se eliminó la propiedad `category` de los productos en `data.tsx` y se comentó en `types/index.ts` para simplificar la estructura de datos y evitar distracciones visuales (tabs/filtros) en el catálogo.
    - **[REFACTORIZACIÓN ABOUT]**: Se migró la sección "Nuestra Historia" en la página de Quiénes Somos al componente estándar `RacingCardContainer.tsx`. Esto garantiza la reutilización de código y la coherencia visual con el resto del sitio.
    - **[ESTILO FUMIGADO AVANZADO]**: Se rediseñó el recuadro de texto interior en "Nuestra Historia" aplicando un efecto de **Glassmorphism Fumigado** (`backdrop-blur-md` + `bg-black/40`). 
    - **[REFINAMIENTO FUMIGADO]**: Se eliminó el fondo opaco del `RacingCardContainer` en la sección "Nuestra Historia" para permitir la visibilidad del fondo global de mármol. Se aumentó el desenfoque a `backdrop-blur-xl` y se ajustó la capa interna con un blur de 40px, logrando una paridad estética total con el efecto del Footer.
    - **[PROPIEDAD GLASS]**: Se profesionalizó el código creando la prop `glass` en `RacingCardContainer.tsx`. Esta propiedad centraliza el estilo de transparencia, desenfoque profundo y borde dorado neón. Se añadieron comentarios técnicos detallados en el componente para facilitar su uso.
    - **[UNIFICACIÓN CONTACTO]**: Se aplicó la prop `glass` al formulario de contacto y a todas las `InfoCard.tsx` (Email, Teléfono, etc.), logrando que toda la web comparta el mismo lenguaje visual de "vidrio esmerilado" y opulencia.
    - **[CONFIGURACIÓN]**: El usuario seleccionó el tema `SILVER_PREMIUM` como activo para la sesión final.

**Marzo 2026 (Migración Final MyM Automotores)**
*   **19/03/2026 - Transformación en Concesionaria Premium:**
    - **[IDENTIDAD]**: Consolidación de la marca **MyM Automotores** con más de 45 años de trayectoria. Activación del tema `MYM_RED` (Rojo/Negro/Blanco) para una estética deportiva y confiable.
    - **[DATA ARCHITECTURE]**: Se extendió la interfaz `Product` en `types/index.ts` para incluir `year`, `km`, `isValidated` y `price`. El catálogo en `data.tsx` se pobló con 6 vehículos reales (Peugeot 208, Tracker, Hilux, Polo, Palio, Ranger).
    - **[REDISEÑO PRODUCTCARD]**: La tarjeta de producto evolucionó a una "Ficha Técnica Compacta". Ahora muestra Año y Kilometraje con íconos de Lucide. Se jerarquizó el Precio con el color primario de marca y se inyectó el sello **"Vehículo Validado"** (Badge Emerald/Shield) para reforzar la autoridad del negocio.
    - **[FLOW DE VENTA]**: El CTA de WhatsApp ahora genera mensajes dinámicos ultra-específicos: *"Hola! Vi el [Modelo] [Versión] ([Año]) en la web y quería consultar..."*.
    - [UX HERO CARRUSEL]: Modificación final a una experiencia Inmersiva Full-Screen (`HeroCarousel.tsx`). El fondo está impulsado por `Swiper` (`EffectFade`) y **se sincroniza dinámicamente con `productsData` de `data.tsx`**, rotando las imágenes de los vehículos en stock. Una matriz de capas oscuras en gradiente aísla y resalta el texto fijo del HUD ("Bienvenidos a MyM Automotores") y el CTA en el flanco izquierdo. Solución puramente premium y responsiva en móviles.
    - [STOCK REAL ML]: Se scrapearon y cargaron 6 vehículos reales desde el perfil oficial de Mercado Libre de la concesionaria. El catálogo ahora cuenta con modelos, versiones, precios (ARS/USD) y fotos originales de alta resolución directamente del CDN de ML.
    - [NEXT.JS CONFIG]: Se configuró `next.config.ts` para autorizar explícitamente el dominio `http2.mlstatic.com`, resolviendo el error de `unconfigured-host` al renderizar imágenes externas.
    - [IDENTIDAD VISUAL]: Se generó e integró el logo oficial de **MyM Automotores**: un badge circular deportivo con iniciales en rojo metálico. El asset se centralizó en `/public/logo_mym.png`.
    - [LIMPIEZA]: Barrido de lints y optimización de LCP usando `next/image` en las tarjetas.
*   **20/03/2026 - Refinamiento Estético de Alta Gama:**
    - [HERO REFINEMENT]: Reducción de fumigado lateral para visibilidad total. Transición manual fade suave y tiempo de slide a 7.5s. Integración de **Framer Motion** para animaciones de carga inicial y transiciones de slide con efectos de escala y desplazamiento.
    - [ABOUT & TRUST]: Nueva imagen de confianza (`handshake_trust.png`) y textos enfocados en seguridad de compra.
    - [CATEGORY BANNERS V2]: Rediseño total con fotos 8K de showroom, altura de 28rem y efecto de viñeta premium. Eliminación de bordes redondeados (`rounded-none`).
    - [GLOBAL LOGO FIX]: Migración a etiquetas `img` con cache-busting (?v=2) en Header y Footer para asegurar visualización del nuevo logo.
    - [DESTELLO BLANCO]: Resplandor radial (glow) en el logo del Footer para destacar sobre fondo negro.
    - **[BI-COLOR LAYOUT]**: Implementación de zona de contraste "Día/Plata" (fondo hielo) exclusiva para la sección de productos, rompiendo la monotonía oscura.
    - **[XENÓN LASER]**: Doble separador horizontal de "Láser Rojo" (Xenón) con resplandor fumigado en los límites de la sección plateada.
    - **[SQUARE AESTHETIC]**: Migración total a **Esquinas Cuadradas** (`rounded-none`) en tarjetas, botones y banners para un look más técnico, agresivo y corporativo.
    - **[PRODUCT CARD V3]**: Tarjetas horizontales alternadas en PC con fondo negro sólido, efecto de viñeta profunda ("Fumigado") en fotos y resplandor rojo xenón en hover.
