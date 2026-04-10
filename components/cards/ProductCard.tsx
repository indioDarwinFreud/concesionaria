"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Calendar, Gauge, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config";
import type { Product } from "@/types";

// El tema puede tener un campo cardImage (SVG data URI o URL)
interface ThemeWithCard {
    cardImage?: string;
    backgroundCard: string;
    backgroundMain: string;
    primaryColor: string;
    textColors: {
        cardTitle: string;
        cardBody: string;
        cardMuted: string;
    };
}

interface ProductCardProps {
    product: Product;
    /** Delay para la animación FadeIn (opcional) */
    delay?: number;
    /** Función para manejar el click en la imagen (ej: zoom modal) */
    onImageClick?: (image: string) => void;
    /** Indica si la tarjeta debe ser horizontal en desktop */
    isHorizontal?: boolean;
    /** En modo horizontal, indica si la imagen va a la derecha */
    imageRight?: boolean;
}

/**
 * ProductCard — Tarjeta de vehículo unificada para MyM Automotores
 * Se utiliza tanto en la Home (BestSellers) como en el catálogo (/products).
 * Muestra: Año, Kilometraje, Precio y sello "Vehículo Validado" si corresponde.
 */
export default function ProductCard({ product, onImageClick, isHorizontal = false, imageRight = false }: ProductCardProps) {
    const theme = siteConfig.theme as unknown as ThemeWithCard & typeof siteConfig.theme;
    const whatsappMsg = `Hola! Vi el ${product.title} ${product.location} (${product.year}) en la web y quería consultar disponibilidad y precio.`;
    const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodeURIComponent(whatsappMsg)}`;

    const formatKm = (km: number) =>
        km.toLocaleString("es-AR") + " km";

    return (
        <Card
            className={`overflow-hidden border-primary/20 hover:border-red-600/60 hover:shadow-[0_0_35px_rgba(220,38,38,0.25)] transition-all duration-500 group shadow-2xl flex flex-col ${isHorizontal ? "md:flex-row md:min-h-[400px]" : "h-full"} hover:-translate-y-2 cursor-pointer relative backdrop-blur-xl bg-black rounded-none`}
            style={{
                backgroundColor: theme.backgroundCard,
                backgroundImage: theme.cardImage ? `url(${theme.cardImage})` : undefined,
                backgroundSize: theme.cardImage?.startsWith('data:') ? 'auto' : 'cover',
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Contenedor de Imagen */}
            <div
                className={`relative overflow-hidden bg-neutral-900 group/img ${isHorizontal ? "w-full md:w-1/2 h-64 md:h-auto" : "h-56"} ${isHorizontal && imageRight ? "md:order-2" : "md:order-1"}`}
                onClick={() => onImageClick?.(product.image)}
            >
                {/* Sombra interna (Fumigación de bordes profunda) */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)] z-10 pointer-events-none mix-blend-multiply" />
                {/* Gradiente adicional para oscurecer extremos y facilitar la lectura si se montan badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />

                <Image
                    src={product.image}
                    alt={`${product.title} ${product.location}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Overlay de Zoom */}
                {onImageClick && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <div className="flex items-center gap-2 text-white font-bold text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            Ver Detalle
                        </div>
                    </div>
                )}

                {/* Badge de Categoría (Usado / 0km) */}
                {product.category && (
                    <div className="absolute top-3 left-3 z-20">
                        <span
                            className="text-white text-[10px] font-black px-3 py-1 shadow-lg uppercase tracking-wider rounded-none"
                            style={{ backgroundColor: siteConfig.theme.primaryColor }}
                        >
                            {product.category}
                        </span>
                    </div>
                )}

                {/* Sello: Vehículo Validado */}
                {product.isValidated && (
                    <div className="absolute top-3 right-3 z-20">
                        <span className="flex items-center gap-1 text-[10px] font-black px-2.5 py-1 shadow-lg uppercase tracking-wide bg-emerald-600/90 text-white border border-emerald-400/40 backdrop-blur-sm rounded-none">
                            <ShieldCheck size={11} strokeWidth={2.5} />
                            Validado
                        </span>
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className={`p-6 md:p-8 flex flex-col flex-grow relative z-20 ${isHorizontal ? "w-full md:w-1/2" : ""}`}>

                {/* Título y versión */}
                <div className="mb-4">
                    <h3
                        className={`font-black tracking-tight drop-shadow-lg ${isHorizontal ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl"}`}
                        style={{ color: siteConfig.theme.textColors.cardTitle, textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
                    >
                        {product.title}
                    </h3>
                    {product.location && (
                        <p
                            className="text-xs font-semibold uppercase tracking-widest mt-0.5"
                            style={{ color: siteConfig.theme.textColors.cardMuted }}
                        >
                            {product.location}
                        </p>
                    )}
                </div>

                {/* Specs: Año y KM */}
                {(product.year || product.km !== undefined) && (
                    <div className="flex items-center gap-4 mb-3">
                        {product.year && (
                            <div className="flex items-center gap-1.5" style={{ color: siteConfig.theme.textColors.cardMuted }}>
                                <Calendar size={13} strokeWidth={2} />
                                <span className="text-xs font-semibold">{product.year}</span>
                            </div>
                        )}
                        {product.km !== undefined && (
                            <div className="flex items-center gap-1.5" style={{ color: siteConfig.theme.textColors.cardMuted }}>
                                <Gauge size={13} strokeWidth={2} />
                                <span className="text-xs font-semibold">{formatKm(product.km)}</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Descripción */}
                <p
                    className="text-sm md:text-base mb-6 flex-grow leading-relaxed font-medium drop-shadow-sm"
                    style={{ color: siteConfig.theme.textColors.cardBody }}
                >
                    {product.description}
                </p>

                {/* Footer: Precio + Botón WhatsApp */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    {/* Precio */}
                    {product.price ? (
                        <p
                            className="text-2xl font-black tracking-tight"
                            style={{ color: theme.primaryColor }}
                        >
                            {product.price}
                        </p>
                    ) : (
                        <p className="text-sm font-semibold" style={{ color: theme.textColors.cardMuted }}>
                            Consultar precio
                        </p>
                    )}

                    {/* Botón WhatsApp */}
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="transition-all duration-300 h-10 px-6 font-bold flex items-center gap-2 shadow-sm hover:shadow-lg rounded-none text-sm uppercase tracking-wider"
                            style={{
                                background: "transparent",
                                color: theme.primaryColor,
                                border: `1.5px solid ${theme.primaryColor}`,
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = theme.primaryColor;
                                e.currentTarget.style.color = '#050505';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = theme.primaryColor;
                            }}
                        >
                            <MessageCircle size={15} />
                            Consultar
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
}
