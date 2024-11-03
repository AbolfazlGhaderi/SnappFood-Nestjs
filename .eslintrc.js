module.exports = {
    env: {
        es2021: true,
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:unicorn/recommended',
        'plugin:security/recommended-legacy',
        'prettier',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    settings: {
        'import/extensions': ['.js', '.cjs', '.mjs', '.ts', '.cts', '.mts'],
    },
    rules: {
        'import/no-unresolved': 'off',
        'array-bracket-spacing': ['error', 'always'],
        'brace-style': ['error', 'allman', { allowSingleLine: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { before: false, after: true }],
        eqeqeq: 'warn',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['PropertyDefinition'],
            },
        ],
        'init-declarations': 'off',
        'linebreak-style': ['error', 'unix'],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'off',
        'no-empty': 'off',
        'no-inline-comments': 'off',
        'object-curly-spacing': [
            'error',
            'always',
            { arraysInObjects: true, objectsInObjects: true },
        ],
        'one-var': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'space-infix-ops': ['error', { int32Hint: false }],
        'space-before-blocks': [
            'error',
            { functions: 'always', keywords: 'always', classes: 'always' },
        ],
        'arrow-spacing': ['error', { before: true, after: true }],
        'switch-colon-spacing': 'error',
        'block-spacing': 'error',
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false,
                overrides: {
                    new: false,
                    '++': true,
                },
            },
        ],
        'spaced-comment': [
            'error',
            'always',
            { markers: ['/'], exceptions: ['-'] },
        ],
        'keyword-spacing': 'error',
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never', asyncArrow: 'always' },
        ],
        'semi-spacing': ['error', { before: false, after: true }],
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        strict: 'off',
        'no-spaced-func': 'error',
        'unicorn/filename-case': [
            'warn',
            {
                cases: {
                    kebabCase: true,
                },
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                paths: ['src'],
                patterns: ['src/*'],
            },
        ],
        'no-eval': 'error',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-array-some': 'off',
        'unicorn/consistent-destructuring': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': [
            'off',
            {
                allowList: { Param: true, Req: true, Res: true },
                ignore: ['\\.e2e-spec$', /^args/i, /^ignore/i],
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.cts', '**/*.mts'],
            settings: {
                'import/extensions': ['.ts', '.cts', '.mts'],
            },
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                project: ['./tsconfig.json'],
            },
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    { args: 'after-used', vars: 'all', varsIgnorePattern: '^_' },
                ],
                '@typescript-eslint/restrict-template-expressions': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-floating-promises': [
                    'error',
                    { ignoreVoid: true, ignoreIIFE: false },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'method',
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                    },
                    {
                        selector: 'function',
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'variable',
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                    },
                ],

                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'class',
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                    },
                ],
            },
            extends: [
                'plugin:import/typescript',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
        },
        {
            files: ['**/*.spec.ts', 'test/**'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            rules: {
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
                'jest/prefer-expect-assertions': 'off',
            },
        },
    ],
};
