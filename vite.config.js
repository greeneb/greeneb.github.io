import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/greeneb.github.io/",
  build: {sourcemap: true},
  plugins: [react()],
})
