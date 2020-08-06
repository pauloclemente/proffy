module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	rules: {
    'react/jsx-no-target-blank':'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				allowPArens: 'avoid',
				singleQuote: true,
				trailingComma: 'all',
			},
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'prefix':['I']
      }
    ]
	},

	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
