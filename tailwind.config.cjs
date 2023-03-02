/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        peach: "#FDE5D8",
        yellow: {
          dark: "#FFDF92",
          light: "#FFE9B4",
        },
        brown: "#422F01",
        blue: "#5F86D0",
        red: "#E76F51",
        green: "#2A9D8F",
        orange: "#F4A261",
        purple: "#CB6CE6",
      },

      // fontFamily: {
      //   DM: ["DM Sans", "sans-serif"],
      // },
      // fontSize: {
      //   "3xl": "26px",
      //   xl: "20px",
      //   lg: "18px",
      //   base: "16px",
      // },
    },
  },
  plugins: [],
};
