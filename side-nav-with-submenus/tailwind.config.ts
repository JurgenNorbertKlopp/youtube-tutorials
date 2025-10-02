import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'floral_white': {
          DEFAULT: '#f7f4ea',
          100: '#463b1a',
          200: '#8b7735',
          300: '#c2ab5e',
          400: '#dccfa3',
          500: '#f7f4ea',
          600: '#f8f6ed',
          700: '#faf8f2',
          800: '#fcfaf6',
          900: '#fdfdfb'
        },
        'lavender': {
          DEFAULT: '#ded9e2',
          100: '#2d2732',
          200: '#5a4d64',
          300: '#877595',
          400: '#b2a7bc',
          500: '#ded9e2',
          600: '#e5e1e8',
          700: '#ebe9ee',
          800: '#f2f0f3',
          900: '#f8f8f9'
        },
        'dark_purple': {
          DEFAULT: '#1c0b19',
          100: '#060205',
          200: '#0c050a',
          300: '#120710',
          400: '#180915',
          500: '#1c0b19',
          600: '#612656',
          700: '#a54092',
          800: '#ca78bb',
          900: '#e5bbdd'
        },
        'blush': {
          DEFAULT: '#ce5374',
          100: '#2d0d15',
          200: '#5b1a2b',
          300: '#882640',
          400: '#b53356',
          500: '#ce5374',
          600: '#d87690',
          700: '#e298ac',
          800: '#ecbbc8',
          900: '#f5dde3'
        },
        'chili_red': {
          DEFAULT: '#e03616',
          100: '#2d0b04',
          200: '#591609',
          300: '#86210d',
          400: '#b22c12',
          500: '#e03616',
          600: '#ec5b3e',
          700: '#f1846e',
          800: '#f5ad9e',
          900: '#fad6cf'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
