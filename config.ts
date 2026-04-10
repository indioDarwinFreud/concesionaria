/**
 * ============================================================
 * PLANTILLA PRODUCTO — Configuración Global del Cliente
 * ============================================================
 * Este es el archivo principal de personalización.
 * Todos los colores, tipografías, textos SEO, datos de contacto
 * y redes sociales se configuran aquí y se propagan
 * automáticamente por toda la aplicación.
 *
 * Para adaptar el sitio a un nuevo cliente, solo necesitás
 * modificar este archivo y data.tsx.
 * ============================================================
 */

export const siteConfig = {
    // ---------------------------------------------------------------------------
    // 1. Identidad de Marca Principal
    // ---------------------------------------------------------------------------
    name: "MyM Automotores",
    shortName: "MyM",
    description: "Más de 45 años de experiencia en el rubro automotor. Venta a todo el país.",
    url: "https://mymautomotores.com.ar", // Reemplazar cuando se tenga el dominio

    // ---------------------------------------------------------------------------
    // 2. Tipografía del Sitio
    // ---------------------------------------------------------------------------
    typography: {
        fontBody: "Urbanist",    // Fuente del cuerpo, párrafos y navegación
        fontHeading: "Cinzel",      // Fuente de logos y títulos de alto impacto
        fontAlt: "Montserrat",  // Fuente alternativa para títulos modernos/geométricos

        // Escala de tamaños de texto base
        sizeBase: "16px",
        sizeLg: "18px",
        sizeXl: "20px",
    },

    // ---------------------------------------------------------------------------
    // 3. Biblioteca de Temas (Themes)
    // ---------------------------------------------------------------------------
    themes: {
        // TEMA EXCLUSIVO: MYM_RED (Deportivo, Premium, Rojo y Negro/Blanco)
        MYM_RED: {
            primaryColor: "#E60000", // Rojo puro vibrante de la marca
            primaryHover: "#B30000", // Rojo oscuro para hover
            backgroundMain: "linear-gradient(135deg, #050505 0%, #141414 100%)", // Negro/Carbón ultra premium
            backgroundColor: "#050505", 
            backgroundCard: "rgba(20, 20, 20, 0.8)", // Tarjetas en negro semi-transparente
            backgroundFooter: "linear-gradient(135deg, #000000 0%, #0a0a0a 100%)",
            radius: "0.5rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#FFFFFF", // Blanco puro para alto contraste
                secondaryLight: "#E60000", // Rojo para detalles tipográficos
                cardTitle: "#FFFFFF",
                cardBody: "#E5E7EB",
                cardMuted: "#9CA3AF"
            },
            backgroundImage: "", // Se puede dejar vacío o poner una textura racing sutil
            // Textura técnica de fibra de carbono/rejilla muy sutil
            cardImage: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E"
        }
    },

    activeTheme: "MYM_RED" as const,

    get theme() {
        return this.themes[this.activeTheme];
    },

    // ---------------------------------------------------------------------------
    // 4. Sistema de Logos e Iconografía
    // ---------------------------------------------------------------------------
    logo: {
        main: "/logo_mym.png", // Icono principal de MyM Automotores
        icon: "/favicon.ico",
    },

    // ---------------------------------------------------------------------------
    // 5. Configuración SEO
    // ---------------------------------------------------------------------------
    seo: {
        keywords: ["autos", "concesionaria", "mym automotores", "usados", "0km", "vehículos", "argentina"],
        author: "MyM Automotores",
        ogImage: "/placeholder.svg",
    },

    // ---------------------------------------------------------------------------
    // 6. Datos de Contacto y Venta
    // ---------------------------------------------------------------------------
    contact: {
        email: "contacto@mymautomotores.com.ar", // Placeholder
        phone: "+5491100000000",    // Pendiente de actualizar con el nro real
        whatsappText: "¡Hola! Vi su web y me gustaría consultar sobre el stock de vehículos disponibles.",
        location: "1312, Argentina", // Según captura (1312 en el frente del local)
        mapsLink: "https://maps.google.com/?q=MyM+Automotores" 
    },

    // ---------------------------------------------------------------------------
    // 7. Redes Sociales
    // ---------------------------------------------------------------------------
    socials: {
        instagram: "https://www.instagram.com/mymautomotores/",
        instagramHandle: "@mymautomotores",

        facebook: "https://www.facebook.com/MyMAutomotores",
        facebookHandle: "/MyMAutomotores",
    },

    // ---------------------------------------------------------------------------
    // 8. Horarios de Atención
    // ---------------------------------------------------------------------------
    businessHours: [
        { day: "Lunes a Viernes", hours: "9:00 - 18:00" },
        { day: "Sábados", hours: "9:00 - 13:00" },
    ]
};
