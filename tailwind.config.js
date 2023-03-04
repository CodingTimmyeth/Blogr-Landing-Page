/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Primary
        lightRed: 'hsl(356, 100%, 66%)', //CTA Text
        veryLightRed: 'hsl(355, 100%, 74%)', // CTA Hover Background
        veryDarkBlue: 'hsl(208, 49%, 24%)', //Headings

        // Neutral
        white: 'hsl(0, 0%, 100%)', // Text
        grayishBlue: 'hsl(240, 2%, 79%)', // Footer Text
        veryDarkGrayish: 'hsl(207, 13%, 34%)', //Body Copy
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)', // Footer Background

        // Gradients

        // Background gradient - Intro/CTA mobile nav:
        veryLightRed: 'hsl(13, 100%, 72%)',
        lightRed: 'hsl(353, 100%, 62%)',

        // Background gradient - body:
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      },
      fontFamily: {
        Overpass: "'Overpass', serif",
        Ubuntu: "'Ubuntu', serif"
      },
    },
  },
  plugins: [],
}
