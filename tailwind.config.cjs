/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'blue-vervet' : '#1FA9D7',
        'blue-light' : '#63C2DF',
        'orange-sepia' : '#FEC106',
        'red-dark' : '#F96C6C',
        'blue-facebook' : '#3B5998',
        'blue-twitter' : '#00ACED',
        'blue-linkedin' : '#4875B4',
        'red-google' : '#D34836'
      },
    },
  },
  plugins: [],
}