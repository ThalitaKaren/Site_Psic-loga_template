/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natural premium tones
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sage: {
          50: '#f4f6f4',
          100: '#e5e9e5',
          200: '#cbd4cc',
          300: '#a3b5a6',
          400: '#7a8b7b', // Primary Sage Green
          500: '#5c6d5e',
          600: '#475549',
          700: '#3a443b',
          800: '#2f3730',
          900: '#272d28',
        },
        sand: {
          50: '#FAF9F6',  // Off White Background
          100: '#f2efe9', // Warm Gray / Sand Light
          200: '#e5decb', // Sand Medium
          300: '#c5a880', // Gold Accent Light
          400: '#b89467',
          500: '#9d7c52',
          600: '#7e623f',
          700: '#5f4a2f',
          800: '#40311f',
          900: '#20180f',
        },
        charcoal: {
          DEFAULT: '#2c2a29', // Warm Charcoal Text
          light: '#4e4c4a',
          dark: '#1e1d1c',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-up': 'scaleUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
