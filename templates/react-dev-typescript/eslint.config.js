import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJest from 'eslint-plugin-jest';
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  { plugins: { jest: pluginJest }, },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
		rules: {
      ...pluginJest.configs.recommended.rules,
			"react/react-in-jsx-scope": 0,
      "react/jsx-uses-react": 0
		},
	},
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  globalIgnores(["**/coverage/**", "**/dist/**", "**/*.cjs"]),
]);
