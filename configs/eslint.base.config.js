import globals from "globals";
import js from "@eslint/js";
import ignores from "./eslint.ignores.config.js";

export default [
    ...ignores,
    {
        files: [ "**/*.{js,mjs,cjs}" ],
        ...js.configs.recommended,
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "eqeqeq": [ "error", "always" ],
            "no-undef": "error",
            "no-unreachable": "error",
            "no-duplicate-imports": "warn",
            "prefer-const": "warn",
            "camelcase": "error",
        },
    }];
