import tseslint from "typescript-eslint";
import ignores from "./eslint.ignores.config.js";

export default [
    ...ignores,
    ...tseslint.configs.recommendedTypeChecked.map(config => ({
        ...config,
        files: [ "**/*.{ts,mts,cts,tsx}" ],
    })),
    {
        files: [ "**/*.{ts,mts,cts,tsx}" ],
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
        rules: {
            // Type Safety
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unsafe-member-access": "warn",
            "@typescript-eslint/no-floating-promises": "error",

            // Type Hygiene
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/no-unnecessary-type-assertion": "warn",
            "@typescript-eslint/no-unused-vars": "warn",

            // Explicitness
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/explicit-member-accessibility": [ "warn", {
                overrides: {
                    constructors: "no-public",
                },
            }],
        },
    },
];
