/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/content/**/*.mdx`,
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        ubuntu: ['Ubuntu', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: {
          200: '#CBD5E1',
          500: '#64748b',
          900: '#334156',
        },
        blue: {
          200: '#d4e8ff',
          500: '#3a97ed',
          900: '#3a6ced',
        },
        purple: {
          200: '#fbfaff',
          500: '#7a3bff',
        },
        gray: {
          200: '#f2f2f2',
          300: '#f1f5f9',
          400: '#e2e8f0',
        },
        black: '#222222',
      },
    },
  },
  plugins: [],
};
