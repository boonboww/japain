/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080A",
        surface: "#121214",
        foreground: "#E6E6E9",
        primary: {
          DEFAULT: "#9B1C22",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#A38F75",
          foreground: "#08080A",
        },
        muted: {
          DEFAULT: "#1A1A1E",
          foreground: "#8A8A93",
        },
        border: "#222226",
        card: {
          DEFAULT: "#121214",
          foreground: "#E6E6E9",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        jp: ['Noto Sans JP', 'sans-serif'],
        serifjp: ['Noto Serif JP', 'serif'],
      },
      boxShadow: {
        'ambient': '0 4px 40px -10px rgba(0, 0, 0, 0.8)',
        'ambient-strong': '0 10px 50px -10px rgba(155, 28, 34, 0.1)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
