/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta exclusiva Rappi Neon (MailForge OS)
      colors: {
        neon: {
          orange: "#FF7A4D",
          red: "#FF2526",
          pink: "#FF4583",
          magenta: "#EB5583",
        },
        // Foundations neutros (escala oficial)
        neutral: {
          50: "#F9F9F9",
          100: "#F0F0F0",
          200: "#E2E2E2",
          300: "#C4C4C4",
          400: "#919AAA",
          500: "#7D8188",
          600: "#5A5A5A",
          700: "#3D3D3D",
          800: "#2A2B2B",
          900: "#1D1D1D",
        },
      },
      // Gradientes oficiales MailForge OS
      backgroundImage: {
        "neon-hero": "linear-gradient(20deg, #FF7A4D 0%, #FF2526 50%, #FF4583 100%)",
        "neon-reverse": "linear-gradient(222deg, #FF7A4D 0%, #FF2526 50%, #FF4583 100%)",
      },
      // Tipografía oficial
      fontFamily: {
        sans: ['"Trebuchet MS"', "Trebuchet", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
