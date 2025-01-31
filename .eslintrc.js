module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Supports React JSX
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        typedefs: false,
        classes: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // This is necessary for Map.has()/get()!
    'no-var': 'error',
    'prefer-const': 'error',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['build/*'],
      env: {
        browser: true,
        node: false
      },
    },
    {
      files: ['./admin/*'],
      rules: {
        '@typescript-eslint/indent': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
