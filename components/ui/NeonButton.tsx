"use client";

import React from "react";
import { Button } from "./button";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils"; // Asumiendo que tenés una utilidad cn, si no usamos strings simples

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "ghost" | "primary" | "secondary" | "outline";
}

export function NeonButton({
    children,
    className = "",
    variant = "ghost",
    style,
    ...props
}: NeonButtonProps) {
    const theme = siteConfig.theme;

    return (
        <Button
            variant={variant}
            className={cn(
                "w-full sm:w-auto px-10 border-4 font-black text-lg rounded-xl transition-all duration-300 relative group overflow-visible hover:bg-transparent flex items-center justify-center gap-3",
                className
            )}
            style={{
                borderColor: theme.primaryColor,
                backgroundColor: `${theme.primaryColor}1A`, // 10% opacidad
                color: "#FFFFFF",
                boxShadow: `0 0 20px ${theme.primaryColor}88, 0 0 40px ${theme.primaryColor}44, inset 0 0 10px ${theme.primaryColor}66`,
                textShadow: `0 0 10px ${theme.primaryColor}`,
                ...style
            }}
            {...props}
        >
            {/* Hover Neon Glow - Outer and Inner */}
            <div
                className="absolute inset-[-4px] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[14px] pointer-events-none"
                style={{
                    boxShadow: `0 0 30px ${theme.primaryColor}, 0 0 60px ${theme.primaryColor}88`,
                    border: `1px solid ${theme.primaryColor}44`,
                }}
            />

            <div className="relative z-10 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center gap-3 w-full">
                {children}
            </div>
        </Button>
    );
}
