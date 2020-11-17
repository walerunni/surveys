module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#03a9f4",
          lighter: "#1dc3ff",
          darker: "#0090db",
        },
      },
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
