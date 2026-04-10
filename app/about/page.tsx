"use client"

import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import { RacingCardContainer } from "@/components/ui/RacingCardContainer";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative" >
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <FadeIn direction="down">
                    <div className="text-center mb-16 relative z-10">
                        <h1 className="text-4xl md:text-7xl font-gotham font-black mb-4 tracking-wide bg-clip-text bg-gradient-to-r from-neutral-100 text-white">
                            QUIÉNES SOMOS
                        </h1>
                    </div>
                </FadeIn>

                <div className="w-full max-w-4xl mx-auto space-y-12">

                    {/* Main Company Profile */}
                    <FadeIn delay={0.2} direction="up">
                        <RacingCardContainer
                            glass
                            className="w-full flex flex-col md:flex-row min-h-[300px]"
                        >
                            <div className="relative z-10 py-12 px-8 md:px-16 flex flex-col items-center justify-center text-center h-full w-full mx-auto">
                                <h2 className="text-3xl md:text-5xl font-gotham font-black italic text-white mb-10 drop-shadow-lg uppercase leading-tight tracking-wide">
                                    NUESTRA HISTORIA
                                </h2>

                                <div
                                    className="space-y-4 text-gray-200 font-light text-lg md:text-2xl leading-relaxed font-sans max-w-3xl p-6 md:p-10 rounded-2xl mx-auto transition-all duration-500 relative overflow-hidden bg-black/20 backdrop-blur-xl"
                                    style={{
                                        border: `2px solid ${siteConfig.theme.primaryColor}80`,
                                        borderTop: `2px solid ${siteConfig.theme.primaryColor}50`,
                                        borderBottom: `2px solid ${siteConfig.theme.primaryColor}50`,
                                        boxShadow: `0 0px 50px -10px ${siteConfig.theme.primaryColor}40`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none -z-10 bg-black/40"
                                        style={{
                                            filter: 'blur(40px)',
                                            transform: 'scale(1.2)'
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <p>
                                            En plantilla producto, fusionamos la manufactura de alta gama con un diseño de autor meticuloso. Nos especializamos en materializar ideas audaces.
                                        </p>
                                        <p>
                                            Desde conceptos minimalistas hasta desarrollos a gran escala, nuestro compromiso es entregar productos que no solo resisten el paso del tiempo, sino que verdaderamente imponen presencia y exclusividad en su entorno.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RacingCardContainer>
                    </FadeIn>




                </div>
            </div>
        </div>

    );
}
