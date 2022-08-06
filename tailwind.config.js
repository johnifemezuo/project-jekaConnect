module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8F2F",
        headerColor: " #103441",
        paraColor: " #7D8C91",
      },
    },
  },
  plugins: [],
  transpile: ["gsap"],
};
