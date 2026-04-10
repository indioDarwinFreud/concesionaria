import { siteConfig } from "@/config";

import type { Metadata } from "next";
import { Urbanist, Cinzel, Montserrat } from "next/font/google"; // Re-import Urbanist

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.seo.author }],
  keywords: siteConfig.seo.keywords,
  openGraph: {
    images: [{ url: siteConfig.seo.ogImage }],
  },
  icons: {
    icon: siteConfig.logo.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-black font-sans ${urbanist.variable} ${cinzel.variable} ${montserrat.variable} relative`}
        style={{
          // Colores y formas (from config.ts → theme)
          "--primary-color": siteConfig.theme.primaryColor,
          "--primary-hover": siteConfig.theme.primaryHover,
          "--radius": siteConfig.theme.radius,
          // Tamaños de texto (from config.ts → typography)
          "--font-size-base": siteConfig.typography.sizeBase,
          "--font-size-lg": siteConfig.typography.sizeLg,
          "--font-size-xl": siteConfig.typography.sizeXl,
        } as React.CSSProperties}
      >
        {/* Global Seamless Background Texture (Blurred to hide pixelation) */}
        <div
          className="fixed inset-0 -z-50 w-full h-full pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: `url(${(siteConfig.theme as any).backgroundImage})`,
            backgroundColor: (siteConfig.theme as any).backgroundColor || '#111827', // Fallback color sólido
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            //filter: 'blur(20px)',     /* Difumina los píxeles grandes */
            //transform: 'scale(1.05)'  /* Escala para evitar los bordes blancos del blur */
          }}
        />

        {/* Noise overlay to give it a premium physical texture and remove banding/pixelation */}
        <div 
          className="fixed inset-0 -z-40 w-full h-full pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
