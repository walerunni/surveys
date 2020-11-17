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
      height: {
        0.5: "0.08rem",
        "screen/2": "50vh",
        "two-thirds": "calc(100vh - 33vh)",
        "three-quarters": "calc(100vh - 25vh)",
        "four-fifths": "calc(100vh - 20vh)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
    },
  },
  variants: {},
  plugins: [],
};
