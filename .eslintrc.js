const rules = {
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  'no-mixed-operators': [
    'error',
    {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],
  'prefer-destructuring': ['off'],
  'prefer-object-spread': ['off'],
  'prefer-ob': ['off'],
  'react/react-in-jsx-scope': ['off'],
  'react/no-string-refs': ['off'],
  'react/prop-types': ['off'],
  'no-restricted-globals': ['error', 'window', 'document'],
  'import/prefer-default-export': 'off',
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    XMLHttpRequest: true,
    Blob: true,
    Document: true,
    FormData: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    ...rules,
  },
  overrides: [
    {
      files: ['**/*.jsx', '**/*.js'],
      extends: ['plugin:react/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
      plugins: ['react'],
      rules: { ...rules },
    },
    {
      files: ['**/*.jsx', 'src/**/*.js'],
      rules: {
        ...rules,
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/extensions': ['off'],
        'no-dupe-keys': ['off'],
      },
    },
    {
      files: ['src/**/*.jsx', 'src/**/*.js'],
      rules: {
        ...rules,
        'react/display-name': ['off'],
        'react/jsx-no-target-blank': ['off'],
        'react/no-unescaped-entities': ['off'],
        'no-console': ['off'],
        'no-restricted-globals': ['off'],
        'no-nested-ternary': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
      },
    },
  ],
};
