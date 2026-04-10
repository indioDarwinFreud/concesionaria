import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { siteConfig } from "@/config";
import { NeonButton } from "@/components/ui/NeonButton";
import NextImage from "next/image";

/**
 * HeroStatic — Sección Hero principal de la Home
 * Muestra el logo, el nombre del sitio, descripción y un botón de CTA.
 * Rediseñado con alineación a la izquierda, estética "Premium" y layout de dos columnas con vehículo.
 */
export default function HeroStatic() {

    return (
        <div className="relative w-full min-h-[90vh] flex items-center justify-center bg-transparent overflow-hidden pt-20 pb-10">
            {/* The global background gradient now handles the overall color */}

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-24 w-full max-w-screen-2xl">
                
                {/* Columna Izquierda: Contenido de Texto */}
                <div className="flex flex-col items-start text-left w-full">
                    <FadeIn delay={0.2} direction="up">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-8xl font-black mb-6 leading-[1.05] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#C0C0C0] via-white to-[#A0A0A0] drop-shadow-2xl">
                            Bienvenidos a <br />
                            <span className="text-primary brightness-110 drop-shadow-[0_0_15px_rgba(230,0,0,0.3)] block mt-2">
                                {siteConfig.name}
                            </span>
                        </h1>
                    </FadeIn>

                    {/* Línea decorativa Premium */}
                    <FadeIn delay={0.3} direction="up">
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-transparent mb-8 rounded-full shadow-[0_0_10px_rgba(230,0,0,0.5)]" />
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <p className="text-lg md:text-xl lg:text-2xl text-neutral-400 mb-12 font-medium tracking-wide max-w-xl leading-relaxed">
                            {siteConfig.description}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up" className="w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row gap-6 w-full">
                            <Link href="/products" className="w-full sm:w-auto block">
                                <NeonButton className="py-4 md:py-5 px-8 md:px-10 text-base md:text-lg w-full">
                                    VER STOCK DISPONIBLE
                                </NeonButton>
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* Columna Derecha: Imagen del Auto */}
                <FadeIn delay={0.5} direction="left" className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] hidden md:flex items-center justify-center mt-10 lg:mt-0">
                     {/* Resplandor trasero para recortar la imagen */}
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full z-0" />
                    
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-full z-10 flex items-center justify-center">
                        <NextImage 
                            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop&bg=transparent" 
                            alt="Vehículo Premium MyM Automotores"
                            fill
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -scale-x-100 hover:scale-[-1.02] transition-transform duration-700 hover:drop-shadow-[0_0_40px_rgba(230,0,0,0.2)]"
                        />
                    </div>
                </FadeIn>

            </div>
        </div>
    );
}
