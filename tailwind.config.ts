import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        archive: {
          darkest: '#050608',
          darker: '#0a0c10',
          dark: '#11141c',
          card: 'rgba(17, 20, 28, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(229, 9, 20, 0.4)',
        },
        marvel: {
          red: '#e23636',
          crimson: '#b91c1c',
          darkred: '#7f1d1d',
          gold: '#f59e0b',
          arc: '#00f0ff',
          cosmic: '#8b5cf6',
          silver: '#cbd5e1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        cinematic: ['var(--font-cinematic)', 'Cinzel', 'Trajan Pro', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'hero-vignette': 'radial-gradient(ellipse at center, rgba(10,12,16,0.3) 0%, rgba(5,6,8,0.92) 80%, rgba(5,6,8,1) 100%)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'arc-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'arc-rotate': 'arc-rotate 20s linear infinite',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
    },
  },
  plugins: [],
};

export default config;
