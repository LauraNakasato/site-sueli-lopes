import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAF8F5", // Off-White / Creme
                foreground: "#3D3B3B", // Cinza Chumbo
                sueli: {
                    teal: "#4CA19B",     // Azul Esverdeado principal
                    tealDark: "#40948C", // Para efeitos de hover
                    rose: "#D19E9F",     // Rosa Antigo
                    roseLight: "#E8C8C9" // Rosa bem suave para fundos de cards
                }
            },
        },
    },
    plugins: [],
};
export default config;