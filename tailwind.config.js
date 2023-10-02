/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
     },
    
  },
  plugins: [createThemes({
          theme1: { 
            'primary': "#1f2937",
            'secondary': "#111827",
            'tertiary': "#374151",
            'text': "#e5e7eb",
            'secondtext': "#9ca3af",
            'primarycolor': "#2563eb",
            'secondarycolor': "#3b82f6",
          },
          theme2: { 
            'primary': "#116D6E",
            'secondary': "#321E1E",
            'tertiary': "#4E3636",
            'text': "#e5e7eb",
            'secondtext': "#9ca3af",
            'primarycolor': "#CD1818",
            'secondarycolor': "#ea4b4b",
          },
          theme3: { 
            'primary': "#0B666A",
            'secondary': "#071952",
            'tertiary': "#35A29F",
            'text': "#e5e7eb",
            'secondtext': "#9ca3af",
            'primarycolor': "#97FEED",
            'secondarycolor': "#85E6C5",
          }
       })],
}

