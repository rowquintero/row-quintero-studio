import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0C0C0C',
        'bg-secondary': '#E9EFEC',
        'bg-dark': '#062520',
        'accent-primary': '#DAFF98',
        'accent-green': '#145147',
        'text-primary': '#FFFFFF',
        'text-dark': '#0C0C0C',
        'text-muted': '#858585',
        'text-on-dark': '#E9EFEC',
        'border-subtle': '#242424',
      },
      fontFamily: {
        anton: ['"Anton SC"', 'sans-serif'],
        mulish: ['var(--font-mulish)', 'Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
