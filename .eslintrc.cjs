module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@react-three/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@react-three"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // "@react-three/no-clone-in-frame-loop": "error",
  },
  overrides: [
    {
      rules: {
        // 'react/jsx-no-undef': 'off',
        // Disable the rule that causes unknown property warnings
        // Add any other rule adjustments specific to the Computers.jsx file
        "react/prop-types": "off",
        "react/no-unknown-property": [
          2,
          {
            ignore: "jsx",
          },
        ],
      },
    },
  ],
};
