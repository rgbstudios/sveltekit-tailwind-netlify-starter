const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
				display: ['Poppins'],
				body: ['Open Sans']
			}
		}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
