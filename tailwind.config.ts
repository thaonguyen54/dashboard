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
			backgroundImage: {
				digitalFortress: 'url("/images/login-img.png")'
			},
			colors: {
				main: 'hsl(var(--main))',
				'light-alpha-admin': 'rgba(255, 86, 48, 0.16)',
				'light-alpha-customer': 'rgba(234, 171, 0, 0.16)',
				'dark-alpha-admin': 'rgba(66, 39, 33, 1)',
				'dark-alpha-customer': 'rgba(66, 52, 25, 1)',
				'main-opposition': 'hsl(var(--main-opposition))',
				'bg-checkbox': 'rgba(var(--bg-checkbox), 1)',
				'border-checkbox': 'rgba(var(--border-checkbox), 1)',
				'bg-dashboard': 'rgba(var(--bg-dashboard), 1)',
				'bg-chevron': 'rgba(var(--bg-chevron), 1)',
				'text-chevron': 'rgba(var(--text-chevron), 1)',
				'bg-navigation': 'rgba(var(--bg-navigation), 1)',
				'border-navigation': 'rgba(var(--border-navigation), 1)',
				'text-license-active': 'rgba(var(--text-license-active), 1)',
				'bg-license-active': 'rgba(var(--bg-license-active), 1)',
				'text-customer-data': 'rgba(var(--text-customer-data), 1)',
				'bg-customer-data': 'rgba(var(--bg-customer-data), 1)',
				'text-admin': 'rgba(var(--text-admin), 1)',
				'bg-admin': 'rgba(var(--bg-admin), 0.16)',
				'bg-input-dashboard': 'rgba(var(--bg-input-dashboard), 1)',
				'bg-input': 'hsl(var(--bg-input))',
				'bg-toggle': 'rgba(var(--bg-toggle), 1)',
				'bg-left-item-toggle': 'rgba(var(--bg-left-item-toggle), 1)',
				'bg-right-item-toggle': 'rgba(var(--bg-right-item-toggle), 1)',
				'border-input': 'hsl(var(--border-input))',
				'border-toggle': 'rgba(var(--border-toggle), 1)',
				'bg-toggle-collapse': 'rgba(var(--bg-toggle-collapse), 1)',
				'text-left-item-toggle': 'rgba(var(--text-left-item-toggle), 1)',
				'text-right-item-toggle': 'rgba(var(--text-right-item-toggle), 1)',
				'fill-left-icon-toggle': 'rgba(var(--fill-left-icon-toggle), 1)',
				'fill-right-icon-toggle': 'rgba(var(--fill-right-icon-toggle), 1)',
				'border-language-selector': 'rgba(var(--border-language-selector), 1)',
				'bg-drop-content-language': 'rgba(var(--bg-drop-content-language), 1)',
				'border-drop-content-language': 'rgba(var(--border-drop-content-language), 1)',
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
						light: '#F4F4F4'
					},
					light: '#FFFFFF',
					dark: '#1A1D21',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					grey: {
						dark: '#6F767E',
						light: '#CDCECF'
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '0.5rem',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		borderImage: {
			'gradient-border': '1px solid; border-image-source: linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%);'
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
