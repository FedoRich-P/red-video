module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		'btn-primary',
		'btn-secondary',
		'custom-nowrap',
		'input-modal',
		'input-icon',
		'post-icon',
		'shadow-gradient',
		'hover:shadow-gradient-hover',
	],
	theme: {
		extend: {
			// colors: {
			// 	custom: 'var(--custom-text-color)',
			// },
		},
	},
	plugins: [],
};
