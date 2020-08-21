module.exports = {
	root: true,
	env: {
		node: true,
		es2020: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
		warnOnUnsupportedTypeScriptVersion: false
	},
	plugins: [
		'@typescript-eslint',
		'eslint-comments',
		'no-use-extend-native',
		'unicorn',
		'standard'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:node/recommended',
		'plugin:promise/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:no-use-extend-native/recommended',
		'plugin:unicorn/recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'prettier/unicorn',
		'prettier/standard',
		'prettier/@typescript-eslint'
	]
}
