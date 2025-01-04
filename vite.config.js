import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Импортируем через import
import autoprefixer from 'autoprefixer' // Также используем import для autoprefixer

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,   // Теперь только через import
        autoprefixer,   // И autoprefixer тоже через import
      ],
    },
  },
})
