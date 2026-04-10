"use client";

import NextImage from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config";
import { productsData } from "@/data";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HeroCarousel — Estética premium concesionaria de lujo.
 * Un solo auto a la vez. Transición: fade-out → swap → fade-in.
 * Nunca se ven dos imágenes superpuestas.
 */
export default function HeroCarousel() {
  const heroImages = productsData.slice(0, 5);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  // Auto-avance cada 7.5 segundos (más tiempo para mirar)
  useEffect(() => {
    const timer = setInterval(goToNext, 7500);
    return () => clearInterval(timer);
  }, [goToNext]);

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const currentProduct = heroImages[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden -mt-16 md:-mt-24"
      style={{ minHeight: "100svh", background: "#f7f6f3" }}
    >
      {/* ── Grain de papel premium (textura sutil) ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── IMAGEN: un solo auto, con animación Framer Motion ── */}
      <div className="absolute inset-0 z-[1] flex items-center justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <NextImage
              src={currentProduct.image}
              alt={currentProduct.title}
              fill
              priority={activeIndex === 0}
              className="object-cover object-center md:object-[65%_center]"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Gradiente lateral crema → transparente ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #f7f6f3 0%, #f7f6f3 15%, rgba(247,246,243,0.92) 28%, rgba(247,246,243,0.4) 45%, transparent 58%)",
        }}
      />
      {/* Sellado inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          height: "130px",
          background: "linear-gradient(to top, #f7f6f3 0%, transparent 100%)",
        }}
      />

      {/* ── Línea de marca roja (izquierda) ── */}
      <div
        className="absolute left-0 top-[15%] bottom-[15%] z-[3] w-[3px] rounded-r-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #CC0000 30%, #CC0000 70%, transparent)",
        }}
      />

      {/* ── CONTENIDO ── */}
      <div className="relative z-[4] flex flex-col justify-center min-h-screen px-8 md:px-14 lg:px-20 py-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[500px]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-5 h-px bg-red-700" />
            <p className="text-[10px] font-bold tracking-[0.32em] text-neutral-400 uppercase">
              Desde 1979 · Venta a todo el país
            </p>
          </div>

          {/* Título */}
          <h1
            className="font-black leading-[1.0] tracking-tight text-neutral-900 mb-6"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)" }}
          >
            Bienvenidos a<br />
            <span style={{ color: "#CC0000" }}>{siteConfig.name}</span>
          </h1>

          {/* Separador */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-14 bg-neutral-300" />
            <div className="h-px w-8 bg-red-700/50 rounded-full" />
          </div>

          {/* Descripción */}
          <p className="text-[14px] md:text-[15px] text-neutral-500 leading-relaxed mb-10">
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 bg-neutral-900 hover:bg-red-700 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-300"
            >
              Ver Stock
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-neutral-300 hover:border-red-700 hover:text-red-700 text-neutral-500 text-[11px] font-semibold tracking-[0.15em] uppercase px-7 py-4 transition-all duration-300"
            >
              Consultanos
            </Link>
          </div>

          {/* Indicadores de slide (dots animados) */}
          <div className="flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a vehículo ${i + 1}`}
                className="transition-all duration-500 rounded-full focus:outline-none"
                style={{
                  width: i === activeIndex ? "28px" : "8px",
                  height: "8px",
                  background: i === activeIndex ? "#CC0000" : "#D1D5DB",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
