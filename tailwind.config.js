module.exports = {
  content: [
    "./_includes/**/*.{html,js}",
    "./_layouts/**/*.{html,js}",
    "./_posts/**/*.{html,md}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        lightblue: "#92DCE5",
      },
    },
  },
};
