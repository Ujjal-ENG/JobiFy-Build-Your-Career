/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'dark',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
   plugins: [
        require('flowbite/plugin'),
    ],
};
