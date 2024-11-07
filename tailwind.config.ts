import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: 'hsl(var(--main))',
				'bg-input': 'hsl(var(--bg-input))',
				'border-input': 'hsl(var(--border-input))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'custom-blue': '#4D62E5',
				'custom-aqua': '#87DDEE',
				'custom-green': '#B6F09C',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					grey: {
						dark: '#363A3D',
						light: '#F4F4F4',
					},
					light: '#FFFFFF',
					dark: '#1A1D21',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					grey: {
						dark: '#6F767E',
						light: '#CDCECF',
					},
					light: '#F4F4F4',
					dark: '#363A3D',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		},
		borderImage: {
			'gradient-border': '1px solid; border-image-source: linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%);',
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
