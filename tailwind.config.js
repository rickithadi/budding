module.exports = {
  content: ["**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'Khmer': ['Khmer MN'],
      },

    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
