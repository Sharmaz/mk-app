import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    files: ["./src/**/*.js"],
    rules: {
      semi: "error",
    },
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },
  {ignores: ["**/dist/*"]},
];
