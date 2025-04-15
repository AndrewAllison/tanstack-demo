import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		settings: {
			react: {
				version: 'detect', // Automatically picks version from your package.json
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			import: importPlugin,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			...(tsPlugin.configs.recommended?.rules ?? {}),
			...(react.configs.recommended?.rules ?? {}),
			...(reactHooks.configs.recommended?.rules ?? {}),
			...(jsxA11y.configs.recommended?.rules ?? {}),
			'react/react-in-jsx-scope': 'off',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
	
	prettier,
];
