/**
 * ============================================================
 * TIPOS DE DATOS — PlantillaProducto
 * ============================================================
 * Este archivo define los tipos TypeScript para todos los datos
 * del sitio. Al tipar los objetos en data.tsx con estos tipos,
 * el editor mostrará errores si faltan campos obligatorios,
 * evitando bugs al agregar productos o testimonios nuevos.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";

// -------------------------------------------------------
// Producto — usado en productsData (data.tsx)
// -------------------------------------------------------
export interface Product {
    /** ID único del producto (numérico, autoincremental) */
    id: number;
    /** Nombre del vehículo / producto que se muestra en la tarjeta */
    title: string;
    /** Versión o línea del vehículo (ej: "Feline", "LTZ", "SRX") */
    location: string;
    /** Descripción corta. Máximo 2 oraciones recomendado. */
    description: string;
    /** Ruta de la imagen en /public o URL externa */
    image: string;
    /** Link al que lleva el botón de la tarjeta (puede ser /contact o URL externa) */
    website: string;
    /** Precio de venta a mostrar en la tarjeta (ej: "USD 12.900") */
    price?: string;
    /** Año de fabricación del vehículo (ej: 2022) */
    year?: number;
    /** Kilometraje del vehículo (ej: 25000) */
    km?: number;
    /** Si true, muestra el sello "Vehículo Validado" en la tarjeta */
    isValidated?: boolean;
    /** Categoría o badge por defecto (ej: "Usado", "0km") */
    category?: string;
}

// -------------------------------------------------------
// Item del Portfolio — usado en portfolioData (data.tsx)
// -------------------------------------------------------
export interface PortfolioItem {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
    category: string;
    website: string;
}

// -------------------------------------------------------
// Testimonio — usado en testimonialsData (data.tsx)
// -------------------------------------------------------
export interface Testimonial {
    id: number;
    /** Nombre completo del cliente */
    name: string;
    /** Cargo o descripción del cliente (ej: "Fundador", "CEO") */
    role: string;
    /** Iniciales para el avatar generado (ej: "EM" para Elena M.) */
    initials: string;
    /** Texto del testimonio */
    content: string;
    /** Cantidad de estrellas (1–5). Por defecto: 5 */
    stars?: number;
}

// -------------------------------------------------------
// Item del Navbar — usado en itemsNavbar (data.tsx)
// -------------------------------------------------------
export interface NavItem {
    id: number;
    title: string;
    /** Elemento JSX del ícono (de lucide-react) */
    icon: React.ReactNode;
    link: string;
}

// -------------------------------------------------------
// Item de Contacto — usado en contactData (data.tsx)
// -------------------------------------------------------
export interface ContactItem {
    id: number;
    /** Ícono de lucide-react (pasar el componente, no el JSX) */
    icon: LucideIcon;
    title: string;
    description: string;
    /** URL del link (mailto:, https://wa.me/, https://maps.google.com/, etc.) */
    href: string;
}

// -------------------------------------------------------
// Horario de Atención — usado en businessHours (data.tsx)
// -------------------------------------------------------
export interface BusinessHour {
    day: string;
    hours: string;
}

