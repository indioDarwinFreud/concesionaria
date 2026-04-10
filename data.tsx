/**
 * ============================================================
 * DATA.TSX — Datos del Sitio
 * ============================================================
 * Este es el segundo archivo clave para personalizar el sitio
 * (junto con config.ts).
 *
 * GUÍA RÁPIDA:
 *   • Para agregar un producto  → editá `productsData`
 *   • Para agregar un testimonio → editá `testimonialsData`
 *   • Para cambiar el menú     → editá `itemsNavbar`
 *
 * Los íconos se importan de lucide-react. Para ver la lista
 * completa de íconos disponibles: https://lucide.dev/icons/
 * ============================================================
 */

import {
  HomeIcon,
  Store,
  Users,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";
import { siteConfig } from "./config";
import type {
  NavItem,
  Product,
  Testimonial,
  ContactItem,
  BusinessHour,
} from "./types";

// ============================================================
// MENÚ DE NAVEGACIÓN
// ============================================================
export const itemsNavbar: NavItem[] = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Productos",
    icon: <Store size={25} strokeWidth={1} />,
    link: "/products",
  },
  {
    id: 3,
    title: "Quiénes Somos",
    icon: <Users size={25} strokeWidth={1} />,
    link: "/about",
  },
  {
    id: 4,
    title: "Contacto",
    icon: <Mail size={25} strokeWidth={1} />,
    link: "/contact",
  },
];

// ============================================================
// PRODUCTOS DEL CATÁLOGO (VEHÍCULOS DE STOCK)
// ============================================================
// ✏️ CÓMO AGREGAR UN VEHÍCULO:
//   1. Copiá uno de los bloques de abajo.
//   2. Cambiale el `id` (debe ser único y numérico).
//   3. Completá title, location (versión), year, km, price,
//      description e image (subí la foto a /public).
//   4. Marcá isValidated: true si el auto pasó revisión técnica.
//   5. El botón de WhatsApp se arma automáticamente con el nombre.
// ============================================================
export const productsData: Product[] = [
  {
    id: 1,
    title: "Chevrolet Agile",
    location: "1.4 Lt",
    description:
      "Excelente estado. Documentación lista para transferir. Hatchback ideal para uso urbano diario.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_975710-MLA108944348239_032026-F.webp",
    website: "/contact",
    price: "$ 10.500.000",
    year: 2013,
    km: 89000,
    isValidated: true,
    category: "Usado",
  },
  {
    id: 2,
    title: "Chevrolet Corsa",
    location: "1.6 Gl Aa Dh Sw",
    description:
      "Clásico familiar tipo rural. Confiable, muy económico de mantener y con gran espacio de carga.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_979145-MLA108041096220_032026-F.webp",
    website: "/contact",
    price: "$ 9.000.000",
    year: 1997,
    km: 31000,
    isValidated: false,
    category: "Usado",
  },
  {
    id: 3,
    title: "Peugeot 208",
    location: "1.6 Active Pack Tiptronic",
    description:
      "Caja automática Tiptronic. Diseño deportivo, gran nivel de equipamiento y confort interior premium.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_798213-MLA108870887957_032026-F.webp",
    website: "/contact",
    price: "US$ 16.900",
    year: 2023,
    km: 30000,
    isValidated: true,
    category: "Usado",
  },
  {
    id: 4,
    title: "Fiat Palio",
    location: "1.4 Attractive 85cv C/pack Seguridad",
    description:
      "Ahorrador de combustible, excelente dinámica. Viene equipado con el paquete de seguridad completo.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_689502-MLA108812353529_032026-F.webp",
    website: "/contact",
    price: "$ 11.500.000",
    year: 2014,
    km: 113000,
    isValidated: true,
    category: "Usado",
  },
  {
    id: 5,
    title: "Chevrolet Tracker",
    location: "1.8 Ltz+ Awd At 140cv",
    description:
      "SUV automático con tracción integral (AWD) versión tope de gama LTZ+. Máximo confort y seguridad.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_903180-MLA106750520390_022026-F.webp",
    website: "/contact",
    price: "US$ 13.900",
    year: 2015,
    km: 110000,
    isValidated: true,
    category: "Usado",
  },
  {
    id: 6,
    title: "Chevrolet Onix",
    location: "1.0 Turbo Premier At",
    description:
      "Versión Premier automática con el nuevo motor turbo eficiente. Destacado estándar de seguridad y conectividad.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_935216-MLA108950182263_032026-F.webp",
    website: "/contact",
    price: "US$ 16.500",
    year: 2020,
    km: 81000,
    isValidated: true,
    category: "Usado",
  },
];

// ============================================================
// TESTIMONIOS DE CLIENTES
// ============================================================
// ✏️ CÓMO AGREGAR UN TESTIMONIO:
//   1. Copiá un bloque, cambiá el id, name, role, initials y content.
//   2. Las iniciales (initials) son las 2 primeras letras del nombre
//      (ej: "Elena Martínez" → "EM").
// ============================================================
export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Martín G.",
    role: "Compró una Tracker LTZ",
    initials: "MG",
    content:
      "Excelente atención desde el primer momento. Me asesoraron muy bien y salí con el auto en el día. Totalmente recomendable.",
    stars: 5,
  },
  {
    id: 2,
    name: "Laura P.",
    role: "Compró un Peugeot 208",
    initials: "LP",
    content:
      "Más de 45 años de experiencia se notan en cada detalle. El vehículo estaba impecable y el trámite fue rápido y sin sorpresas.",
    stars: 5,
  },
];

// ============================================================
// DATOS DE CONTACTO (generados desde config.ts)
// ============================================================
// ⚠️ No edites este bloque directamente.
//    Para cambiar el teléfono, email, ubicación o redes sociales,
//    modificá config.ts → secciones contact y socials.
// ============================================================
export const contactData: ContactItem[] = [
  {
    id: 1,
    icon: Mail,
    title: "Email",
    description: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    id: 2,
    icon: Phone,
    title: "Teléfono",
    description: siteConfig.contact.phone,
    href: `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.contact.whatsappText)}`,
  },
  {
    id: 3,
    icon: MapPin,
    title: "Ubicación",
    description: siteConfig.contact.location,
    href: siteConfig.contact.mapsLink,
  },
  {
    id: 4,
    icon: Facebook,
    title: "Facebook",
    description: siteConfig.socials.facebookHandle,
    href: siteConfig.socials.facebook,
  },
  {
    id: 5,
    icon: Instagram,
    title: "Instagram",
    description: siteConfig.socials.instagramHandle,
    href: siteConfig.socials.instagram,
  },
];

// ============================================================
// HORARIOS DE ATENCIÓN (generados desde config.ts)
// ============================================================
// ⚠️ Para cambiar los horarios, modificá config.ts → businessHours.
// ============================================================
export const businessHours: BusinessHour[] = siteConfig.businessHours;
