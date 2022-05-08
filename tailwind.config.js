module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1EC28B",
      },
      boxShadow: {
        navButtons: "0px 4px 4px rgba(13, 131, 91, 0.25)",
      },
      fontFamily: {
        body: ["roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
