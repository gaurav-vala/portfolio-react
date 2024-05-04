/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        black: "0 3px 1px #000",
        black_hover: "0 0px 1px #000",
        black_2: "2px 3px 1px #000",
      },
    },
  },
  plugins: [],
};
