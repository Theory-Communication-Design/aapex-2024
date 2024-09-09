/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        emprint: ['EMprintRegular', 'sans-serif'],
        emprintBold: ['EMprintBold', 'sans-serif'],
        emprintSemiBold: ['EMprintSemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
