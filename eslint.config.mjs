import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// This is a simple ESLint configuration that disables all rules for JavaScript and TypeScript files.
const eslintConfig = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      // Disabling most common rules
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
      // You can even write a utility script to turn everything off dynamically (but this is extreme)
    },
  },
];


export default eslintConfig;