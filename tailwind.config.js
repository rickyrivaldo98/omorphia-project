module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'blue-nebula': '#051DF4',
      'nebula': '#FA27D5',
      'danger': '#e3342f',
     }),

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
