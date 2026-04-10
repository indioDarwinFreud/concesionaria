/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Image Section - Premium Glass Card */}
                <FadeIn delay={0.2} direction="right" className="w-full lg:w-1/2 relative">
                    <div
                        className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-primary/20 backdrop-blur-md"
                        style={{
                            backgroundColor: siteConfig.theme.backgroundCard,
                            backgroundImage: `url(${(siteConfig.theme as any).cardImage})`,
                            backgroundSize: 'cover',
                            backgroundBlendMode: 'overlay'
                        }}
                    >
                        {/* Interactive overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#021824]/80 to-transparent z-10" />
                        <img
                            src="/assets/handshake_trust.png"
                            alt="Confianza en MyM Automotores"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        
                    </div>
                    {/* Decorative back glow */}
                    <div className="absolute -inset-4 bg-[#C0C0C0]/10 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                </FadeIn>

                {/* Text Content Section */}
                <FadeIn delay={0.4} direction="left" className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#C0C0C0]" />
                        <p className="text-[#C0C0C0] font-black tracking-widest uppercase text-sm">
                            Tu seguridad, nuestro compromiso
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-md">
                        Tu confianza es <br /> <span className="text-[#C0C0C0]">nuestra mayor garantía.</span>
                    </h2>

                    <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg">
                        En {siteConfig.name}, entendemos que comprar un auto es una decisión importante. Por eso, nos enfocamos en brindar transparencia, seguridad y un trato personalizado respaldado por nuestra sólida trayectoria.
                    </p>

                    <Link href="/about" className="group flex items-center gap-4 w-fit">
                        <span className="text-white font-bold text-lg group-hover:text-[#C0C0C0] transition-colors">
                            Conocé más sobre nosotros
                        </span>
                        <div className="w-12 h-12 rounded-full border border-[#C0C0C0]/50 flex items-center justify-center group-hover:bg-[#C0C0C0] group-hover:border-[#C0C0C0] transition-all shadow-[0_0_15px_rgba(192,192,192,0.2)] group-hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]">
                            <ArrowRight className="text-[#C0C0C0] group-hover:text-black transition-colors" />
                        </div>
                    </Link>
                </FadeIn>

            </div>
        </div>
    );
}
