/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    'text-xs', 'text-sm', 'text-base', 'text-lg',
    {
      pattern: /bg-(red|green|blue|purple)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
}

