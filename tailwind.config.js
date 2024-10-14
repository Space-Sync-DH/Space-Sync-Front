module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bebas Neue', 'system-ui', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#3871c1',
        'custom-dark-blue': '#00275b',
      },
    },
  },
  plugins: [
		require('flowbite/plugin')
	],
}
