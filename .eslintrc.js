module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": "off"
  }
};
