module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        mainSection: "51px",
      },
      colors: {
        primary: "#1EC28B",
        subText: "#7B7777",
      },
      boxShadow: {
        navButtons: "0px 4px 4px rgba(82, 82, 82, 0.25)",
      },
      fontFamily: {
        body: ["roboto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
