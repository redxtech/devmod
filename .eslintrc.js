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
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:node/recommended',
		'plugin:promise/recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'prettier/standard',
		'prettier/@typescript-eslint'
	]
}
