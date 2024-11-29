/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		screens: {
  			'custom-mobile-screen': '820px',
  			'neon-screen': '404px'
  		},
  		colors: {
  			darkOrange: '#ff8c00',
  			siennaOrange: '#e36f5a',
  			skyBlue: 'rgb(135, 206, 250)',
  			steelBlue: '#4682b4',
  			white: '#fff',
  			gray: '#ababab',
  			purpleBlack: '#2e003e',
  			royalPurple: '#7851a9',
  			bodyBackground: '#280137',
  			lightGreen: '#90ee90',
  			green: '#008000',
  			darkGreen: '#006400',
  			emeraldGreen: '#50c878',
  			topicColor: '#008000',
  			cardbtnbg: '#5c1f2d',
  			mediumPurple: '#9370db',
  			darkPurple: '#4b0082',
  			lavenderPurple: '#7a5c99',
  			violetPurple: '#8a2be2',
  			lightMaroon: '#c35e66',
  			maroon: '#800000',
  			cardtopic: '#4b0000',
  			mediumMaroon: '#9e1b32',
  			brownMaroon: '#7e4b3a',
  			mutedMaroon: '#9b4d53',
  			vividMaroon: '#9e1b32',
  			richMaroon: '#6a1e1a',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
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
  		transitionProperty: {
  			all: 'all'
  		},
  		fontSize: {
  			xs: '0.75rem',
  			sm: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem',
  			'3xl': '1.875rem',
  			'4xl': '2.25rem',
  			'5xl': '3rem',
  			'6xl': '4rem',
  			huge: '5rem',
  			tiny: '0.625rem'
  		},
  		boxShadow: {
  			least: '0 0 5px rgba(0,0,0,0.25)'
  		},
  		fontFamily: {
  			itim: ["'Itim', sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
