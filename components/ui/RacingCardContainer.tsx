import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config";

/**
 * RacingCardContainer — Contenedor base para todas las tarjetas del sitio.
 *
 * PROPS DISPONIBLES:
 * ─────────────────────────────────────────────────────────────────────
 * glass?: boolean
 *   → Activa el modo "Glass" (Glassmorphism / Efecto Fumigado).
 *   → Cuando está en TRUE:
 *       - El fondo del card se vuelve TRANSPARENTE, dejando ver el fondo
 *         global de la página (mármol, textura, imagen, etc.) por detrás.
 *       - Se aplica un DESENFOQUE (backdrop-blur-xl) para dar el efecto
 *         "ahumado" o "nebuloso", como si fuera vidrio esmerilado.
 *       - Se agrega un BORDE DORADO delgado (usa primaryColor del tema activo).
 *       - Se agrega un RESPLANDOR (box-shadow) suave hacia afuera e interior.
 *   → Cuando está en FALSE (por defecto):
 *       - El card usa el fondo sólido/texturizado del tema activo.
 *       - Comportamiento original de la tarjeta (sin transparencia).
 *
 * Ejemplo de uso:
 *   <RacingCardContainer glass>  ← activa el efecto fumigado
 *   <RacingCardContainer>        ← usa el fondo normal del tema
 *
 * ─────────────────────────────────────────────────────────────────────
 * opacity?: "opacity-10" | "opacity-20" | "opacity-30" | "opacity-40" | "opacity-50"
 *   → Controla la opacidad del patrón SVG decorativo de fondo (solo aplica
 *     cuando glass es FALSE). Por defecto es "opacity-30".
 */
interface RacingCardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    opacity?: "opacity-10" | "opacity-20" | "opacity-30" | "opacity-40" | "opacity-50";
    glass?: boolean; // Activa el efecto fumigado/glassmorphism (ver descripción arriba)
}

export const RacingCardContainer = ({ children, className = "", opacity = "opacity-30", glass = false, ...props }: RacingCardContainerProps) => {

    // Estilos para el modo Glass (fumigado)
    const glassStyle = {
        background: 'transparent',
        border: `2px solid ${siteConfig.theme.primaryColor}50`,
        boxShadow: `0 0 60px -20px ${siteConfig.theme.primaryColor}40, inset 0 0 60px -30px ${siteConfig.theme.primaryColor}10`
    };

    // Estilos para el modo Normal (fondo del tema)
    const normalStyle = {
        backgroundColor: siteConfig.theme.backgroundCard,
        backgroundImage: `url(${(siteConfig.theme as any).cardImage})`,
        backgroundSize: (siteConfig.theme as any).cardImage?.startsWith('data:') ? 'auto' : 'cover',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'overlay',
    };

    return (
        <Card
            className={`
                relative overflow-hidden 
                border border-primary/20
                shadow-2xl
                transition-all duration-300
                ${glass ? 'backdrop-blur-xl bg-black/20' : 'backdrop-blur-md'}
                ${className}
            `}
            style={{
                ...(glass ? glassStyle : normalStyle),
                ...props.style
            }}
            {...props}
        >
            {/* Content Wrapper - Ensures content is above background */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </Card>
    );
};
