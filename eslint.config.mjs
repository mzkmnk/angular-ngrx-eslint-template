import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import angular from 'angular-eslint';
import gitignore from 'eslint-config-flat-gitignore'

export default tsEslint.config(
  gitignore(),
  // eslint typescript-eslint recommended config
  {
    files:['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.strict,
      ...tsEslint.configs.stylistic,
    ],
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
)
