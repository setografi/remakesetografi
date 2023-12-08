/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Alabaster: "#F2EDE9",
        ClassicRose: "#F2DCEB",
        DarkBlueGrey: "#1A2740",
        CatalinaBlue: "#122A73",
        Emerald: "#5ABF69",
        Flame: "#F25E3D",
        RichBlack: "#010D00",

        Beige: "#F5EEE6",

        PaleGreen: "#CFEDD3",
        PastelPink: "#FDE5E1",
        Mauve: "#CCA7CF",
        LightBlue: "#CACEE9",
        SkyBlue: "#9EC9FE",
        Viol: "#E6C9DB",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
