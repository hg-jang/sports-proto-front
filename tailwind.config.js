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
      pattern: /(bg|text|border)-./,
    },
  ],
}

