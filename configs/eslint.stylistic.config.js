import stylistic from "@stylistic/eslint-plugin";
import ignores from "./eslint.ignores.config.js";

export default [
    ...ignores,
    {
        plugins: {
            stylistic,
        },
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        rules: {
            "stylistic/semi": ["warn", "always"],
            "stylistic/indent": ["warn", 4],
            "stylistic/brace-style": ["warn", "1tbs", { allowSingleLine: true }],
            "curly": ["warn", "multi-line"],
            "stylistic/comma-spacing": ["warn", { before: false, after: true }],
            "stylistic/comma-dangle": ["warn", "always-multiline"],
            "stylistic/member-delimiter-style": "warn",
            "stylistic/object-curly-spacing": ["warn", "always"],
            "stylistic/array-bracket-spacing": ["warn", "always"],
            "stylistic/computed-property-spacing": ["warn", "never"],
            "stylistic/keyword-spacing": ["warn", { before: true, after: true }],
            "stylistic/space-before-function-paren": ["warn", {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "never",
                "catch": "always",
            }],
            "stylistic/no-trailing-spaces": "warn",
            "stylistic/eol-last": ["warn", "always"],
            "stylistic/no-multi-spaces": "warn",
            "stylistic/quotes": ["warn", "double", { "allowTemplateLiterals": "always" }],
            "stylistic/key-spacing": ["warn", { beforeColon: false, afterColon: true }],
            "stylistic/semi-spacing": ["warn", { before: false, after: true }],
            "stylistic/space-infix-ops": "warn",
            "stylistic/arrow-spacing": "warn",
            "stylistic/block-spacing": "warn",
            "stylistic/space-before-blocks": "warn",
            "stylistic/space-in-parens": ["warn", "never"],
            "stylistic/template-curly-spacing": ["warn", "never"],
            "stylistic/switch-colon-spacing": ["warn", { before: false, after: true }],
        },
    },
];
