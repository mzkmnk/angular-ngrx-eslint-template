import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import angular from 'angular-eslint';
import gitignore from 'eslint-config-flat-gitignore'
import ngrx from '@ngrx/eslint-plugin/v9/index.js';

export default tsEslint.config(
  gitignore(),
  // eslint typescript-eslint recommended config
  {
    files:['**/*.{ts,js,jsx}'],
    languageOptions:{
      parser:tsEslint.parser,
      parserOptions:{
        project:'./tsconfig.json',
      }
    },
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.strict,
      ...tsEslint.configs.stylistic,
    ],
  },

  // eslint config
  {
    files:["**/*.ts"],
    rules:{
      '@typescript-eslint/explicit-function-return-type':'error',
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/consistent-type-definitions": [
        "error",
        "type"
      ]
    }
  },

  // typescript-eslint config
  {
    files:["**/*.ts"],
  },

  // angular ts config
  {
    files:['**/*.ts'],
    extends:[
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/no-input-rename': 'off',
    },
  },

  // angular html config
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/no-negated-async': 'off',
    },
  },

  // ngrx config
  {
    files:["**/*.ts"],
    extends:[
      ...ngrx.configs.all,
    ]
  }
)
