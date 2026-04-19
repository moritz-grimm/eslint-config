import stylistic from "@stylistic/eslint-plugin";
import ignores from "./eslint.ignores.config.js";

export default [
    ...ignores,
    {
        plugins: {
            stylistic,
        },
        files: [ "**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}" ],
        rules: {
            // Structure
            "stylistic/semi": [ "warn", "always" ],
            "stylistic/indent": [ "warn", 4 ],
            "stylistic/brace-style": [ "warn", "1tbs", { allowSingleLine: true }],
            "curly": [ "warn", "multi-line" ],
            "stylistic/eol-last": [ "warn", "always" ],
            "stylistic/quotes": [ "warn", "double", { "allowTemplateLiterals": "always" }],

            // Commas & Delimiters
            "stylistic/comma-spacing": [ "warn", { before: false, after: true }],
            "stylistic/comma-dangle": [ "warn", "always-multiline" ],
            "stylistic/member-delimiter-style": "warn",

            // Spacing: Brackets & Braces
            "stylistic/object-curly-spacing": [ "warn", "always" ],
            "stylistic/array-bracket-spacing": [ "warn", "always", {
                objectsInArrays: false,
                arraysInArrays: false,
            }],
            "stylistic/computed-property-spacing": [ "warn", "never" ],
            "stylistic/space-in-parens": [ "warn", "never" ],
            "stylistic/block-spacing": "warn",

            // Spacing: Keywords & Operators
            "stylistic/keyword-spacing": [ "warn", { before: true, after: true }],
            "stylistic/space-infix-ops": "warn",
            "stylistic/arrow-spacing": "warn",
            "stylistic/space-before-blocks": "warn",
            "stylistic/space-before-function-paren": [ "warn", {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "never",
                "catch": "always",
            }],

            // Spacing: Punctuation
            "stylistic/key-spacing": [ "warn", { beforeColon: false, afterColon: true }],
            "stylistic/semi-spacing": [ "warn", { before: false, after: true }],
            "stylistic/switch-colon-spacing": [ "warn", { before: false, after: true }],
            "stylistic/template-curly-spacing": [ "warn", "never" ],

            // Whitespace Cleanup
            "stylistic/no-trailing-spaces": "warn",
            "stylistic/no-multi-spaces": "warn",
        },
    },
];
