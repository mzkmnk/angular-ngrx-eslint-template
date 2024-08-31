import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import angular from 'angular-eslint';
import gitignore from 'eslint-config-flat-gitignore'
import ngrx from '@ngrx/eslint-plugin/v9/index.js';
import stylisticJs from '@stylistic/eslint-plugin-js'
import eslintConfigPrettier from "eslint-config-prettier";

export default tsEslint.config(
  gitignore(),
  eslintConfigPrettier,
  // eslint typescript-eslint recommended config
  {
    files           : [ '**/*.ts' ],
    languageOptions : {
      parser        : tsEslint.parser,
      parserOptions : {
        project: './tsconfig.json',
      }
    },
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.strict,
      ...tsEslint.configs.stylistic,
    ],
  },

  // eslint stylistic
  {
    files:['**/*.ts'],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/quotes': ["error", "single"],
      '@stylistic/js/quote-props': ['error', 'consistent-as-needed', { keywords: true }],
      '@stylistic/js/array-bracket-spacing' : [ "error", "always" ],
      '@stylistic/js/arrow-spacing'         : 'error',
      '@stylistic/js/block-spacing'         : 'error',
      '@stylistic/js/array-bracket-newline' : [ "error", "consistent" ],
      '@stylistic/js/brace-style'           : [
        "error",
        "1tbs",
        {
          "allowSingleLine": true
        }
      ],
      '@stylistic/js/comma-style'  : [ "error", "last" ],
      '@stylistic/js/dot-location' : [ "error", "object" ],
      "@stylistic/js/indent"                     : [ "error", 2 ],
      "@stylistic/js/key-spacing"  : [ "error", {
        "multiLine": {
          "beforeColon" : false,
          "afterColon"  : true

        },
        "align": {
          "beforeColon" : true,
          "afterColon"  : true,
          "on"          : "colon"
        }
      } ],
      "@stylistic/js/max-len"           : [ "error", { "code": 80 } ],
      "@stylistic/js/multiline-ternary" : [ "error", "always" ],
    }
  },

  // eslint config
  {
    files : [ "**/*.ts" ],
    rules : {
      'object-shorthand' : [ 'error', 'always', { 'avoidQuotes': true } ],
    }
  },

  // typescript-eslint config
  {
    files : [ "**/*.ts" ],
    rules : {
      '@typescript-eslint/explicit-function-return-type' : 'error',
      "@typescript-eslint/prefer-for-of"                 : "error",
      "@typescript-eslint/consistent-type-definitions"   : [
        "error",
        "type"
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector : [ "parameter" ],
          format   : [ "camelCase" ]
        },
        {
          selector : [ "interface" ],
          format   : [ "PascalCase" ],
          prefix   : [ "I" ],
        }
      ]
    }
  },

  // api file config
  {
    files : [ "**/*.api.ts " ],
    rules : {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector : [ "class" ],
          format   : [ "PascalCase" ],
          suffix   : [ "API" ],
        },
        {
          selector : [ "classMethod" ],
          format   : [ "camelCase" ],
        }
      ]
    }
  },

  // service file config
  {
    files : [ "**/*.service.ts " ],
    rules : {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector : [ "class" ],
          format   : [ "PascalCase" ],
          suffix   : [ "SERVICE" ],
        },
        {
          selector : "classMethod",
          format   : [ "camelCase" ],
        }
      ]
    }
  },

  // angular ts config
  {
    files   : [ '**/*.ts' ],
    extends : [
      ...angular.configs.tsRecommended,
    ],
    processor : angular.processInlineTemplates,
    rules     : {
      '@angular-eslint/no-input-rename': 'off',
    },
  },

  // angular html config
  {
    files   : [ '**/*.html' ],
    extends : [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/no-negated-async': 'off',
    },
  },

  // ngrx config
  {
    files   : [ "**/*.ts" ],
    extends : [
      ...ngrx.configs.all,
    ]
  }
)
