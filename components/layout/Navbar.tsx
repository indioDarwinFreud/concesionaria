"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data"

/**
 * Navbar — "The Nucleus Design"
 * Barra de navegación flotante fija en la parte inferior de la pantalla.
 * Diseño tipo "pastilla de cristal" con ícono central que enlaza a imperiavirtual.com.
 *
 * Datos: consume `itemsNavbar` de data.tsx.
 * Estilo activo: detecta la ruta actual con `usePathname` y aplica borde + glow al ícono activo.
 */
const Navbar = () => {
    const router = usePathname()
    return (
        <div className="fixed z-50 bottom-10 left-1/2 -translate-x-1/2 w-max">

            <nav>
                <div className="flex items-center justify-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 rounded-full bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

                    {/* First Half Items */}
                    {itemsNavbar.slice(0, 2).map((item) => (
                        <div key={item.id}
                            className={`px-2 md:px-3 py-1.5 transition-all duration-300 relative group
                            rounded-full cursor-pointer hover:scale-110
                            ${router === item.link ? 'bg-transparent border border-primary text-primary shadow-[0_0_15px_rgba(192,192,192,0.5)] scale-110' : 'text-white/80 border border-transparent hover:text-white hover:bg-white/10'}`}
                        >
                            <Link href={item.link} className="relative z-10">{item.icon}</Link>
                        </div>
                    ))}

                    {/* Central Imperia Virtual Shortcut Icon - Popping out of the thin Navbar */}
                    <div className="relative mx-1 md:mx-3 w-[3.8rem] md:w-[4.2rem] flex items-center justify-center">

                        {/* Large Circle container positioned absolute to not stretch the thin navbar */}
                        {/* Enlace directo a Imperia Virtual */}
                        <a href="https://imperiavirtual.com.ar" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.2rem] h-[4.2rem] md:w-[4.8rem] md:h-[4.8rem] rounded-full bg-black/90 border border-primary/50 flex items-center justify-center z-20 
                            shadow-[0_4px_25px_rgba(192,192,192,0.4)] hover:shadow-[0_8px_35px_rgba(192,192,192,0.7)] 
                            hover:scale-105 transition-all duration-500 cursor-pointer group">

                            {/* Inner Circle for depth */}
                            <div className="w-[3.2rem] h-[3.2rem] md:w-[3.6rem] md:h-[3.6rem] rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center">
                                {/* Text With Custom Premium Font */}
                                <span
                                    className="text-[1.7rem] font-bold tracking-[0.1em] bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-300 to-primary drop-shadow-lg ml-1"
                                    style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
                                >
                                    IV
                                </span>
                            </div>

                        </a>
                    </div>

                    {/* Second Half Items */}
                    {itemsNavbar.slice(2, 4).map((item) => (
                        <div key={item.id}
                            className={`px-2 md:px-3 py-1.5 transition-all duration-300 relative group
                            rounded-full cursor-pointer hover:scale-110
                            ${router === item.link ? 'bg-transparent border border-primary text-primary shadow-[0_0_15px_rgba(192,192,192,0.5)] scale-110' : 'text-white/80 border border-transparent hover:text-white hover:bg-white/10'}`}
                        >
                            <Link href={item.link} className="relative z-10">{item.icon}</Link>
                        </div>
                    ))}

                </div>
            </nav>
        </div>
    )
}

export default Navbar
