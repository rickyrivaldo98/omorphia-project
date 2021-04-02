module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      colorbg1: "#14203F",
      colorbg2: "#011EF4",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      colorbg1: "#14203F",
      colorbg2: "#011EF4",
    }),
    height: {
      slider: "30rem",
    },

    extend: {
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
