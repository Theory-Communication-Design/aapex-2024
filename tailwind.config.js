/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        emprint: ['EMprintRegular', 'sans-serif'],
        emprintBold: ['EMprintBold', 'sans-serif'],
        emprintSemiBold: ['EMprintSemibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
