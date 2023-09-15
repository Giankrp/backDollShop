module.exports = {
  extends: ["eslint:recommended"],

  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 12,
  },

  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    semi: ["error", "always"],

    // Agrega una advertencia para el uso de console.log
    "no-console": "warn",
  },
};
