import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#3028B2", // Deep purple
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#C46AD8", // Bright purple
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#FAED2B", // Bright yellow
                    foreground: "#170D3D",
                },
                gold: {
                    DEFAULT: "#F4BB0A", // Golden yellow
                    foreground: "#170D3D",
                },
                dark: {
                    DEFAULT: "#170D3D", // Very dark purple
                    foreground: "#FFFFFF",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
    purge: {
        safelist: [
            "border-border",
            "bg-background",
            "text-foreground",
            "bg-primary",
            "text-primary-foreground",
            "bg-secondary",
            "text-secondary-foreground",
            "bg-accent",
            "text-accent-foreground",
            "bg-gold",
            "text-gold-foreground",
            "bg-dark",
            "text-dark-foreground",
        ],
    },
};

export default config;
