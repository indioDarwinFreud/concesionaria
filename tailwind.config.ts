import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ------------------------------------------------------------------
      // Tipografías
      // Las variables CSS son inyectadas por next/font en app/layout.tsx.
      // Los nombres de clase Tailwind son: font-body, font-display, font-alt
      // ------------------------------------------------------------------
      fontFamily: {
        body: ["var(--font-urbanist)", "sans-serif"], // Texto general
        display: ["var(--font-cinzel)", "serif"],      // Logo y títulos de alto impacto
        alt: ["var(--font-montserrat)", "sans-serif"], // Títulos modernos/geométricos
      },
      // ------------------------------------------------------------------
      // Colores del Sistema
      // El color `primary` y `primaryHover` se actualizan desde config.ts.
      // Los colores `gold` se usan en el Footer y acentos premium.
      // ------------------------------------------------------------------
      colors: {
        // Color principal (actualizable desde config.ts → theme.primaryColor)
        primary: "var(--primary-color, #c0c0c0)",
        primaryHover: "var(--primary-hover, #e0e0e0)",

        // Escala de dorados – usados en footer, separadores y efectos premium
        gold: {
          100: "#f9f1d8",
          200: "#f0deaa",
          300: "#e6c670",
          400: "#deb23c",
          500: "#d4a017", // Gold clásico
          600: "#aa8012",
          700: "#80600e",
        },

        // Fondo oscuro de emergencia (alternativa a backgroundMain de config.ts)
        darkBg: "#0a0a0a",

        // Glassmorphism base
        glass: "rgba(255, 255, 255, 0.1)",
      },
      // ------------------------------------------------------------------
      // Gradientes predefinidos
      // ------------------------------------------------------------------
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #d4a017, #f9f1d8, #d4a017)",
      },
    },
  },
  plugins: [],
} satisfies Config;
