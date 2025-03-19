/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layouts/**/*.html",
		"./content/**/*.md",
		"./themes/**/*.{html,md}",
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Inter", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};
