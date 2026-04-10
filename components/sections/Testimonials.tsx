import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import { testimonialsData } from "@/data";
import { MessageSquareQuote, Star } from "lucide-react";
import { siteConfig } from "@/config";

/**
 * Testimonials — Grilla de reseñas de clientes
 * Muestra tarjetas con avatar de iniciales, 5 estrellas, texto y nombre del cliente.
 *
 * Datos: `testimonialsData` de data.tsx.
 * Para agregar un testimonio, agregá un objeto nuevo en `testimonialsData`.
 */
export default function Testimonials() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-16 mb-24">
            <FadeIn>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-white drop-shadow-sm">
                        Lo que dicen de <span className="text-[#C0C0C0]">Nosotros</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#C0C0C0] rounded-full"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonialsData.map((testimonial, index) => (
                    <FadeIn key={testimonial.id} delay={index * 0.2} direction="up" className="h-full">
                        <Card
                            className="relative overflow-hidden border-transparent hover:border-[#C0C0C0]/50 transition-all duration-500 p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-2xl group flex flex-col h-full"
                            style={{ backgroundColor: siteConfig.theme.backgroundCard }}
                        >
                            {/* Decorative Quote Icon */}
                            <MessageSquareQuote className="absolute top-6 right-8 w-24 h-24 text-[#C0C0C0]/10 group-hover:text-[#C0C0C0]/20 transition-colors -rotate-12 z-0" strokeWidth={1} />

                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[#C0C0C0] text-[#C0C0C0]" />
                                    ))}
                                </div>

                                <p
                                    className="text-lg md:text-xl italic font-medium leading-relaxed flex-grow mb-8"
                                    style={{ color: siteConfig.theme.textColors.cardBody }}
                                >
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C0C0C0] to-neutral-600 flex items-center justify-center font-bold text-white shadow-[0_4px_10px_rgba(192,192,192,0.3)]">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4
                                            className="font-bold text-lg tracking-wide"
                                            style={{ color: siteConfig.theme.textColors.cardTitle }}
                                        >
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-[#C0C0C0] font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
