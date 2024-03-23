/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.html"],
  theme: {

    screens: {
      'sm': '00px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1050px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    
    
    extend: {},
    }

  },
  plugins: [],
}




