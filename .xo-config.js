module.exports = {
	rules: {
		"@typescript-eslint/no-var-requires": 0,
	},
	ignores: [".yarn/**"],
	semicolon: false,
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": "typescript",
	},
	prettier: true,
	reporter: "compassion",
	extends: ["plugin:import/typescript"],
	extensions: ["ts", "js"],
	parser: "@typescript-eslint/parser",
};
