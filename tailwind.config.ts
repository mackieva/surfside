import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				ssblue: '#173355',
				blueLight: '#21456d',
				midnight: '#121063',
			},
			backgroundImage: {
				logo: "url('/sursidebeach.png')",
			},
		},
	},
	plugins: [],
} satisfies Config;
