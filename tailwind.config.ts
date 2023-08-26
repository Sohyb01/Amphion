/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        md: "1.125rem",
        lg: "1.438rem",
        xl: "1.75rem",
        "2xl": "2.188rem",
        "3xl": "2.75rem",
        "4xl": "3.438rem",
        "5xl": "4.313rem",
        "6xl": "5.375rem",
        "7xl": "6.688rem",
      },
      screens: {
        xs: "340px",
        sm: "480px",
        md: "768px",
        lg: "1080px",
        xl: "1440px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [require("daisyui")],
};
