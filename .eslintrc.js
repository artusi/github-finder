module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/app/"]
      }
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    shallow: false
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/label-has-for": "off"
  }
};
