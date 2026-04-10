/* eslint-disable @next/next/no-img-element */
"use client";

import { contactData, businessHours } from "@/data";
import { Clock, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { siteConfig } from "@/config";

/**
 * Footer — Pie de página global premium
 * Grilla de 3 columnas: Ubicación | Logo + Redes | Horarios.
 * Al fondo muestra el Copyright y la firma "Creado por Imperia Virtual".
 *
 * Datos: `contactData` y `businessHours` de data.tsx.
 * Estilo: fondo y color primario de config.ts → theme.backgroundFooter / primaryColor.
 */
const Footer = () => {
    const locationData = contactData.find(c => c.title === "Ubicación");
    const socialData = contactData.filter(c => c.title === "Facebook" || c.title === "Instagram" || c.title === "Teléfono");
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="w-full backdrop-blur-xl py-12 md:py-20 border-t border-primary/30 relative overflow-hidden shadow-[0_-10px_40px_-15px_rgba(192,192,192,0.15)]"
        >
            {/* Capa de fondo "Fumigada" aislada para no desenfocar el texto */}
            <div 
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                    
                    filter: 'blur(20px)',     /* Difumina los píxeles grandes */
                    transform: 'scale(1.05)'  /* Escala para evitar los bordes blancos del blur */
                }}
            />

            {/* Premium Gradient Overlay with Radial Glow */}


            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 items-start justify-between text-center md:text-left mb-16">

                    {/* Column 1: Location */}
                    <FadeIn delay={0.1} className="flex flex-col items-center md:items-start space-y-5">
                        <div className="flex items-center space-x-3 text-primary mb-1">
                            <MapPin className="w-6 h-6 drop-shadow-[0_0_8px_rgba(192,192,192,0.8)]" />
                            <h4 className="font-gotham font-black uppercase tracking-[0.2em] text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                Dónde Estamos
                            </h4>
                        </div>
                        {locationData && (
                            <Link
                                href={locationData.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-urbanist text-gray-400 hover:text-white transition-all hover:translate-x-2 transform duration-300 max-w-[260px] leading-relaxed"
                            >
                                {locationData.description}
                                <span className="block mt-2 text-primary/70 text-xs font-semibold uppercase tracking-wider hover:text-primary transition-colors">Ver en mapa &rarr;</span>
                            </Link>
                        )}
                    </FadeIn>

                    {/* Column 2: Logo & Social (Center) */}
                    <FadeIn delay={0.2} className="flex flex-col items-center justify-center space-y-8 md:border-x border-white/5 md:px-8 relative">
                        {/* Decorative line top */}
                        <div className="hidden md:block absolute top-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                        {/* Elegant Brand Logo with Glow (Destello Blanco) */}
                        <div className="relative group transition-transform duration-500 hover:scale-105">
                            {/* Glow Background (El Destello Blanco) */}
                            <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full scale-75 opacity-70 group-hover:opacity-100 transition-opacity" />
                            
                            <img
                                src={`${siteConfig.logo.main}?v=2`}
                                alt={`Logo ${siteConfig.name}`}
                                className="relative z-10 h-32 w-auto object-contain"
                                style={{
                                    filter: "drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                                }}
                            />
                        </div>

                        {/* Premium Social Icons */}
                        {socialData.length > 0 && (
                            <div className="flex space-x-6">
                                {socialData.map((social) => (
                                    <Link
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full border border-white/10 bg-black/40 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(192,192,192,0.4)] transition-all duration-300 group"
                                        aria-label={social.title}
                                    >
                                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Decorative line bottom */}
                        <div className="hidden md:block absolute bottom-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </FadeIn>

                    {/* Column 3: Business Hours */}
                    <FadeIn delay={0.3} className="flex flex-col items-center md:items-end space-y-5">
                        <div className="flex items-center space-x-3 text-primary mb-1">
                            <Clock className="w-6 h-6 drop-shadow-[0_0_8px_rgba(192,192,192,0.8)]" />
                            <h4 className="font-gotham font-black uppercase tracking-[0.2em] text-sm text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
                                Horarios
                            </h4>
                        </div>
                        <div className="flex flex-col items-center md:items-end space-y-3 w-full">
                            {businessHours.map((schedule, index) => (
                                <div key={index} className="flex flex-col items-center md:items-end w-full group">
                                    <span className="font-urbanist font-bold text-gray-200 text-sm tracking-widest group-hover:text-white transition-colors">{schedule.day}</span>
                                    <span className="font-urbanist text-gray-400 font-medium text-sm mt-0.5 group-hover:text-primary transition-colors">{schedule.hours}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Footer Bottom: Signature & Copyright */}
                <FadeIn delay={0.4} className="w-full pt-8 pb-32 md:pb-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 relative mt-8">
                    {/* Top divider line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <p className="font-urbanist text-gray-500 text-xs tracking-widest uppercase">
                        &copy; {currentYear} {siteConfig.name}.
                    </p>

                    {/* The Imperia Virtual Signature */}
                    <div className="font-urbanist text-gray-400 text-xs tracking-widest uppercase flex flex-col md:flex-row items-center gap-2 md:gap-3">
                        <span>Creado por</span>
                        <Link
                            href="https://imperiavirtual.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-neutral-300 to-primary font-black text-sm md:text-base tracking-[0.2em] transform hover:scale-105 transition-all duration-300 drop-shadow-[0_0_12px_rgba(192,192,192,0.8)] hover:drop-shadow-[0_0_25px_rgba(192,192,192,1)]"
                        >
                            IMPERIA VIRTUAL
                            {/* Decorative glowing underline */}
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></span>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;
