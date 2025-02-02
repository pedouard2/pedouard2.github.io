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
        mont: ["Mont"],
      },
      colors: {
        lightblue: "#92DCE5",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
};
