import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

const recommendedConfig = [...tseslint.configs.recommended];

recommendedConfig.push({
  rules: {
    "no-unused-vars": "error",
    "no-explicit-any": "warn",
    "non-nullable-assertion-type": "error"
  }
});

recommendedConfig.push({
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
});

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  ...recommendedConfig,
  prettier,
  pluginReact.configs.flat.recommended
];
