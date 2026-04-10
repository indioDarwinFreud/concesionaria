/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";

/**
 * CategoryBanners — Bloques visuales premium de navegación por colecciones
 * Diseño tipo concesionaria de alta gama con fotos reales, gradientes rojos,
 * tipografía de lujo y micro-animaciones al hover.
 *
 * Para cambiar los títulos, imágenes o links de los banners, editá directamente
 * los objetos `banners` debajo.
 */

const banners = [
  {
    id: "ofertas",
    title: "Ofertas Exclusivas",
    subtitle: "OPORTUNIDADES ÚNICAS",
    description:
      "Vehículos seleccionados con las mejores condiciones del mercado. Financiación a medida.",
    href: "/products?category=ofertas",
    image: "/assets/banner_ofertas.png",
    icon: Sparkles,
    span: "lg:col-span-2", // Banner grande
  },
  {
    id: "nuevos",
    title: "Últimos Ingresos",
    subtitle: "RECIÉN LLEGADOS",
    description:
      "Las unidades más recientes de nuestro stock, listas para vos.",
    href: "/products?category=nuevos",
    image: "/assets/banner_nuevos.png",
    icon: TrendingUp,
    span: "", // Banner chico
  },
];

export default function CategoryBanners() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-32 mb-20">
      {/* Section Header */}
      <FadeIn>
        <div className="flex flex-col items-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-red-500 mb-4">
            Nuestro Stock
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-center text-white drop-shadow-sm">
            Explorá Nuestras{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-white">
                Colecciones
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            </span>
          </h2>
        </div>
      </FadeIn>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {banners.map((banner, index) => (
          <FadeIn
            key={banner.id}
            delay={0.15 * (index + 1)}
            direction="up"
            className={`${banner.span} h-full`}
          >
            <Link href={banner.href} className="block h-full group">
              <div className="relative overflow-hidden h-80 md:h-[28rem] cursor-pointer border border-white/[0.06] transition-all duration-500 group-hover:border-red-600/30 group-hover:shadow-[0_0_40px_rgba(230,0,0,0.15)]">
                {/* Background Image */}
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Vignette Overlay: bordes oscuros, centro claro */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background: `
                                        linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%),
                                        linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%),
                                        linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 25%),
                                        linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 25%)
                                    `,
                  }}
                />

                {/* Red Accent Line (top) */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 z-[2] flex flex-col justify-between p-7 md:p-9">
                  {/* Top: Subtitle Badge */}
                  <div className="flex items-center gap-2">
                    <banner.icon className="w-4 h-4 text-red-500" />
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-red-400/90">
                      {banner.subtitle}
                    </span>
                  </div>

                  {/* Bottom: Title + CTA */}
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-1.5 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                        {banner.title}
                      </h3>
                      <p className="text-sm text-neutral-400 max-w-sm leading-relaxed hidden md:block group-hover:text-neutral-300 transition-colors">
                        {banner.description}
                      </p>
                    </div>

                    {/* Arrow CTA */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(230,0,0,0.5)] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Subtle Noise Overlay */}
                <div
                  className="absolute inset-0 z-[3] pointer-events-none opacity-[0.03] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
