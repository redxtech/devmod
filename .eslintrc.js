module.exports = {
	root: true,
	env: {
		node: true,
		es2020: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.json'],
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
		warnOnUnsupportedTypeScriptVersion: false
	},
	rules: {
		'sort-imports': 'off',
		'import/order': 'off',
		'simple-import-sort/sort': 'error',
		'optimize-regex/optimize-regex': 'warn',
		'no-secrets/no-secrets': 'error'
	},
	settings: {
		'json/json-with-comments-files': []
	},
	plugins: [
		'@typescript-eslint',
		'json-format',
		'eslint-comments',
		'no-use-extend-native',
		'sonarjs',
		'optimize-regex',
		'simple-import-sort',
		'perf-standard',
		'no-secrets',
		'security',
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
		'plugin:sonarjs/recommended',
		'perf-standard',
		'plugin:security/recommended',
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
