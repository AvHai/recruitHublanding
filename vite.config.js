import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'], // Add Work Sans as the default font
      },
    },
  },
})
