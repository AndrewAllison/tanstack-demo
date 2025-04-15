import baseConfig from '../../eslint.config.js';
import globals from 'globals';

export default [
	...baseConfig,
	{
		files: ['**/*.ts'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			'no-console': 'off',
		},
	},
];
