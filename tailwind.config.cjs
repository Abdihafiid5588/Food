/**** Tailwind CSS Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ca7a1f',
        beige: '#f4f2f2',
        soft: '#caafa8',
        text: '#1f1f1f',
        muted: '#6b6b6b',
        footer: '#121214'
      },
      fontFamily: {
        heading: ['\"Playfair Display\"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        lift: '0 18px 40px rgba(0,0,0,0.12)'
      },
      borderRadius: {
        xl2: '1.25rem',
      }
    },
  },
  plugins: [],
};
