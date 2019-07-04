'use strict';

module.exports = {
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true,
  },
  plugins: ['sonarjs', 'mocha', '@xtrctio/disallow-date'],
  parserOptions: {
    ecmaVersion: 9,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    xjq: false,
  },
  rules: {
    '@xtrctio/disallow-date/no-new-date': 'error',
    '@xtrctio/disallow-date/no-static-date': 'error',
    'array-callback-return': 'off', // I like using .map for side-effects, and .map is 70% faster than .forEach
    'arrow-parens': ['error', 'always'],
    'callback-return': 'error',
    camelcase: 'warn',
    'capitalized-comments': 'error',
    'handle-callback-err': 'error',
    'max-depth': ['error', 3],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 5],
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',
    'no-magic-numbers': ['error', {
      "ignore": [0,1],
      "enforceConst": true
    }],
    'no-console': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-useless-call': 'error',
    'no-underscore-dangle': 'off',
    'promise/always-return': 'off',
    'sonarjs/no-duplicate-string': 'warn',
    quotes: ['warn', 'single'],
    'quote-props': ['error', 'as-needed'],
    strict: ['error', 'global'],
    'valid-jsdoc': [
      'error', {
        'requireReturnDescription': false,
        'requireParamDescription': false
      }
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          MethodDefinition: true,
          ClassDeclaration: true
        }
      }
    ]
  },
};
