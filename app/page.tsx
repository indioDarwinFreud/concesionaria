"use client"


import HeroCarousel from "@/components/sections/HeroCarousel";
import AboutPreview from "@/components/sections/AboutPreview";


import BestSellers from "@/components/sections/BestSellers";
import CategoryBanners from "@/components/sections/CategoryBanners";
import Testimonials from "@/components/sections/Testimonials";
import Separador from "@/components/ui/separador";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col pt-16 md:pt-24 bg-transparent">
      {/* Hero Section */}
      <div className="relative z-30 w-full">
        <HeroCarousel />
      </div>

      <Separador />

      <div className="relative z-20">
        <AboutPreview />
      </div>

      <Separador />

      <CategoryBanners />

      {/* --- MODO DÍA: Espacio Plata de Exhibición --- */}
      <section className="bg-gradient-to-b from-[#e5e5e5] to-[#f4f4f5] w-full relative mt-16 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-20">
        {/* Separador Láser de Xenón + Humo (Fumigado) ARRIBA */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-30 shadow-[0_0_40px_rgba(220,38,38,1)] opacity-100 mix-blend-screen" />
        <div className="w-full h-1 bg-red-600/50 absolute top-0 blur-[2px]" />

        <BestSellers />
        
        {/* Separador Láser de Xenón + Humo (Fumigado) ABAJO */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-30 shadow-[0_0_40px_rgba(220,38,38,1)] opacity-100 mix-blend-screen" />
        <div className="w-full h-1 bg-red-600/50 absolute bottom-0 blur-[2px]" />
      </section>

      <div className="relative z-10 pt-16">
        <Testimonials />
      </div>

    </main>
  );
}
