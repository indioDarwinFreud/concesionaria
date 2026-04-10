"use client";

/**
 * BannerCard — Tarjeta de overlay de texto para banners de categoría
 * Se posiciona de forma absoluta sobre una imagen de fondo.
 * Muestra un título en estilo "impacto" (skewed, color primary) y una descripción.
 */

interface BannerCardProps {
  title: string;
  description: string;
}

const BannerCard = ({ title, description }: BannerCardProps) => {
  return (
    <div className="absolute bottom-8 left-0 md:left-8 z-10 max-w-[90%] md:max-w-2xl">
      {/* Contenedor tipo "FeatureCard" Description: Fondo semitransparente + Blur */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="bg-primary/90 text-white px-4 py-1 text-2xl md:text-5xl font-black tracking-wide uppercase skew-x-[-10deg] shadow-lg inline-block backdrop-blur-sm">
          {title}
        </h2>

        <p className="bg-black/60 text-white/95 px-4 py-2 text-xs md:text-lg font-medium backdrop-blur-md rounded-r-xl border-l-4 border-primary shadow-md inline-block max-w-prose">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
