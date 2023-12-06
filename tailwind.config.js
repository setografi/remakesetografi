/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        goldenOrange: "#FFA500",
        darkPurple: "#7D26CD",
        darkGray: "#333333",
        whiteOne: "#FFFFFF",
        lavenderPurple: "#7D5CF2",
        darkBlue: "#031C26",
        coralRed: "#F25430",
        darkTaupe: "#403C38",
        indigoBlue: "#4804D9",
        pastelBlue: "#ADC5D9",

        Alabaster: "#F2EDE9",
        ClassicRose: "#F2DCEB",
        DarkBlueGrey: "#1A2740",
        CatalinaBlue: "#122A73",
        Emerald: "#5ABF69",
        Flame: "#F25E3D",
        RichBlack: "#010D00",

        Beige: "#F5EEE6",

        PaleGreen: "#CEEED1",
        PastelPink: "#FDE5E1",
        Mauve: "#CCA7CF",
        LightBlue: "#CACEE9",
        SkyBlue: "#9EC9FE",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
