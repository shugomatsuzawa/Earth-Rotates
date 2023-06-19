/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: [
        'Noto Sans JP Variable',
        'Noto Sans JP',
        'ui-sans-serif',
        'sans-serif',
      ],
      serif: [
        'ui-serif',
        'serif'
      ],
      mono: [
        'ui-monospace',
        'monospace',
      ],
    },
    extend: {},
  },
  plugins: [],
}

