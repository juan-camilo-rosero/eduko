/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          turquoise: "#0D92AA",
          turquoiseHover: "#0FB3D0",
          dark: "#31304D",
          darkHover: "#4B4977",
          darker: "#161A30",
          darkerHover: "#090C1D"
        },
        light: "#B6BBC4",
        lightHover: "#898484",
        medium: "#747475",
        dark: "#7D7D7D"
      }
    },
  },
  plugins: [],
}

