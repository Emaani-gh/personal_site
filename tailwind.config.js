/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      prism: ["Tilt Prism", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
