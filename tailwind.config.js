/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
'./src/**/*.{html, js}',
'./public/**/*.{html, js}',
],
  theme: {
    extend: {
      colors: {
        nav: '#e4242f',
        accentyellow: '#ffd600',
        accentpurple: '#45084d',
        accentgreen: '#53c623',
        accentorange: '#ff6d00',
        accentblue: '#3453a6',
        foot: '#ffe321'
      },
      spacing: {
        gargantua: '40rem'
      },
      fontFamily: {
        Russo: ['Russo one'],
        Poppins: ['Poppins'],
        Josefin: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}
