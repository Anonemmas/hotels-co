/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff395c",
        secondary: "#F6871F",
        "moon-white": "#FFF9EE",
        "light-gray": "#626262",
        error: "#FF401A",
      },
      borderRadius: {
        mx: "3px",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
