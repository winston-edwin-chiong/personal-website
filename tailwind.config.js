/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': "20%",
        '2/5': "40%",
        '3/5': "60%",
        '4/5': "80%",
        '1/6': "16.666667%"

      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "primary-content": "#FFFFFF",
          "primary-focus": "#FFFFFF"
        },
      },
    ],
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    }),
    require("daisyui"),
    require('@tailwindcss/aspect-ratio')
  ],
}
