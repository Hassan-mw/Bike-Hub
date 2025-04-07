/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // If using the Next.js App Router
    ],
    theme: {
      extend: {
        screens: {
          'mdl':'850px'
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.6s ease-out',
          'accordion-up': 'accordion-up 0.6s ease-out',
        },
      },
    },
    plugins: [],
  };
  