
// @ts-ignore
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
		ignores: ["dist", "node_modules"],
		rules: {
			'no-console': 'off',
		},
	},
];
