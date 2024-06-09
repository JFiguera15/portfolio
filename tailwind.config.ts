import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { transform: 'translateY(-30px) scale(0.9)', opacity:'0'},
          '100%': { transform: 'translateY(0px) scale(1)', opacity:'1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(30px) scale(0.9)', opacity:'0'},
          '100%': { transform: 'translateY(0px) scale(1)', opacity:'1' },
        }
      },
      animation: {
        fadeDown: 'fadeDown 0.5s ease-in-out',
        fadeUp: 'fadeUp 0.5s ease-in-out',
      },
      colors: {
        primary: "#606c38",
        secondary: "#14213d"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
