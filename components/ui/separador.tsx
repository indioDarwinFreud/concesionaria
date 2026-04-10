import FadeIn from "./FadeIn";

/**
 * Separador — Línea decorativa entre secciones
 * Línea horizontal plateada con gradiente y glow, centrada, con animación FadeIn.
 * Usada en la Home para separar visualmente las secciones de manera elegante.
 */
export default function Separador() {
    return (
        <FadeIn delay={0.3} direction="up" className="w-full flex justify-center mb-8">
            <div className="w-48 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent shadow-[0_0_10px_rgba(192,192,192,0.5)]" />
        </FadeIn>
    );
}