import React from "react";
import { siteConfig } from "@/config";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "", style, ...props }: CardProps & { style?: React.CSSProperties }) {
    return (
        <div
            className={`
        glass-panel rounded-none p-6 
        border border-white/10 
        hover:border-primary/50 hover:shadow-[0_0_20px_rgba(192,192,192,0.15)] 
        transition-all duration-300 
        ${className}
      `}
            style={{
                backgroundColor: siteConfig.theme.backgroundCard,
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    );
}
