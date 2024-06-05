/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D7C378",
        gold: "#D7C378",
        secondary: "#E5F0FE",
        skyblue: "#E5F0FE",
        darkBlue: "#010187",
        white: "#ffffff",
        black: "#000000",
        darkgray: "#111111",
        lightgray: "#1E1E1E",
        midnight: "#121063", //darkblue
        bgDark: "#212121",
        bgLight: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
