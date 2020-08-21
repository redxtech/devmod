module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		node: true,
		es2020: true,
	},
	extends: ["xo/esnext", "xo-plugins/config/plugins"],
	plugins: ["@typescript-eslint"],
};
