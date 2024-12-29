import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                plate: {
                    red: "#ea384c",
                    blue: "#4299e1",
                    yellow: "#ecc94b",
                    green: "#48bb78",
                    white: "#ffffff",
                    black: "#2d3748",
                },
            },
            fontFamily: {
                mono: ["JetBrains Mono", "monospace"],
            },
            keyframes: {
                "plate-appear": {
                  "0%": { transform: "scale(0.8)", opacity: "0" },
                  "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            animation: {
                "plate-appear": "plate-appear 0.3s ease-out forwards",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
