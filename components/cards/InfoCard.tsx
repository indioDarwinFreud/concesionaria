import { LucideIcon } from "lucide-react";
import { RacingCardContainer } from "@/components/ui/RacingCardContainer";
import Link from "next/link";
import { siteConfig } from "@/config";

/**
 * InfoCard — Tarjeta de información de contacto o acceso rápido
 * Usada en páginas de Contacto y About. Soporta modo compacto y modo expandido.
 * Si recibe prop `href`, el card se convierte en un link externo.
 *
 * Props: icon, title, description, href? (link), compact? (modo reducido).
 * Datos: usualmente alimentada desde `contactData` en data.tsx.
 */
interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
    href?: string;
    compact?: boolean;
}

export const InfoCard = ({ icon: Icon, title, description, className, href, compact = false }: InfoCardProps) => {
    const Content = () => (
        <RacingCardContainer
            glass
            className={`h-full flex items-center ${compact ? 'py-2 px-4 gap-3' : 'p-10 gap-6'} ${className} ${href ? 'cursor-pointer hover:bg-white/5 transition-colors' : ''}`}
        >
            {/* Icon Box - Left Side */}
            <div className="shrink-0">
                <div className={`${compact ? 'w-9 h-9 rounded-lg' : 'w-14 h-14 rounded-2xl'} bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500`}>
                    <Icon className={`text-primary ${compact ? 'w-4 h-4' : 'w-7 h-7'} group-hover:text-white transition-colors`} />
                </div>
            </div>

            {/* Text Content - Right Side */}
            <div>
                <h3
                    className={`${compact ? 'text-sm md:text-base' : 'text-xl md:text-2xl'} font-bold ${compact ? 'mb-0' : 'mb-2'} font-gotham tracking-tight uppercase`}
                    style={{ color: siteConfig.theme.textColors.primaryLight }}
                >
                    {title}
                </h3>
                <p
                    className={`leading-relaxed font-light transition-colors ${compact ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}
                    style={{ color: siteConfig.theme.textColors.secondaryLight }}
                >
                    {description}
                </p>
            </div>
        </RacingCardContainer>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Content />
            </Link>
        );
    }

    return (
        <div className="h-full group">
            <Content />
        </div>
    );
};
