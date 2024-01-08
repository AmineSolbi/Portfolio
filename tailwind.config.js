/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens:{
      'ph':{max:'425px'},
      'pc':{max:'1869px'}
    },
    extend: {
       colors: {
        'Homeblue': 'rgba(14, 18, 89, 0.86)',
        'ToHomeBlue': 'rgba(81, 212, 233 ,1)',
        'imageGardien':'rgba(0,0,0,.8)',


      },
       animation: {
        translateY: 'translateY 1s ease-in-out',
        translateX: 'translateX 1s ease-in-out',
        translateNav: 'translateNav 1s ease-in-out',
        translateImage: 'translateImage 1s ease-in-out',
        remouveanimation:'remouveanimation 1s ease-in-out',
      },
      fontFamily:{
        pangramRegular:["PangramRegular"],
        pangramBold:["PangramBold"],
        pangramLight:["PangramLight"],
        pangramMed:["PangramMed"]

      },
       keyframes: {
        translateY: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0px)' },
        },
        translateX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0px)' },
        },
        translateNav: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0px)' },
        },
        translateImage: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0px)' },
        },
        remouveanimation: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}