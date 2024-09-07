/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all source files where Tailwind will look for classnames
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Include flowbite-react components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Add Flowbite as a plugin
  ],
};
