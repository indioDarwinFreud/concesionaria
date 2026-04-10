"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, MessageSquare, Send } from "lucide-react";
import { siteConfig } from "@/config";
import Separador from "@/components/ui/separador";
import { NeonButton } from "@/components/ui/NeonButton";

import FadeIn from "@/components/ui/FadeIn";

import { RacingCardContainer } from "@/components/ui/RacingCardContainer";
import { InfoCard } from "@/components/cards/InfoCard";
import { contactData } from "@/data";


export default function ContactPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "5492612700341";
        const text = `Hola, soy ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen relative">
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <FadeIn direction="down">
                    <div className="text-center mb-16 relative z-10 py-10 bg-[radial-gradient(circle,rgba(0,0,0,0)_70%)] rounded-xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary font-cinzel">
                            CONTÁCTENOS
                        </h1>

                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <FadeIn delay={0.2} direction="left">
                        <RacingCardContainer
                            glass
                            className="h-full p-8 md:p-10"
                        >
                            <div className="mb-8 text-center border-b border-white/10 pb-6">
                                <h2 className="text-3xl font-bold text-white mb-2 font-gotham flex items-center justify-center gap-3 italic uppercase tracking-wider">
                                    <MessageSquare className="w-8 h-8 text-primary" />
                                    Iniciar Chat
                                </h2>
                                <p
                                    className="text-sm md:text-base font-medium opacity-80"
                                    style={{ color: siteConfig.theme.textColors.secondaryLight }}
                                >
                                    Completa tus datos y te responderemos por WhatsApp al instante.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-white mb-2 text-sm font-bold drop-shadow-sm font-urbanist ml-1">Tu Nombre</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full !bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-4 pl-12 text-white focus:border-primary focus:!bg-neutral-900 focus:outline-none transition-all duration-300 placeholder:text-neutral-600 shadow-inner"
                                            placeholder="Ej: Juan Pérez"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white mb-2 text-sm font-bold drop-shadow-sm font-urbanist ml-1">Tu Mensaje</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-neutral-500" />
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full !bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-4 pl-12 text-white focus:border-primary focus:!bg-neutral-900 focus:outline-none transition-all duration-300 h-40 placeholder:text-neutral-600 shadow-inner resize-none"
                                            placeholder="Contanos qué necesitas..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <NeonButton
                                    type="submit"
                                    className="w-full py-7"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    ENVIAR A WHATSAPP
                                </NeonButton>
                            </form>
                        </RacingCardContainer>
                    </FadeIn>

                    <div className="flex flex-col gap-2 h-full justify-between">
                        {contactData.map((item) => (
                            <FadeIn key={item.id} delay={0.2 + (item.id * 0.1)} direction="right" className="w-full flex-1">
                                <InfoCard
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    href={item.href}
                                    compact={true}
                                />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
