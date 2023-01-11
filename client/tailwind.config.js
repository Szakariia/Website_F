/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
    theme: {
        screens: {
          
            'mobile_s': '320px',
            'mobile_m': '425px',
            // => @media (min-width: 425px) { ... }

            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }

          },
        colors: {
            transparent: 'transparent',
            'sec' : "#712EFF",
            'white': '#ffffff',
            'red' : "#DC2626",
            'color': {
              100: '#101729',
              200: '#202939',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#F2F5F9',
              600: '#364153',
              700: '#677489',
              800: '#49A4E3',
              900: '#164e63',
            },
          },
        extend: {},
    },
    plugins: [],
  }