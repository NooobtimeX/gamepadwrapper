import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname, // Requires Node.js v20.11.0 or higher
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "next",
      "prettier",
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@next/next/recommended",
    ], // Add directories to ignore here
  },
  ...compat.config({
    extends: ["eslint:recommended", "next"],
  }),
];

export default eslintConfig;
