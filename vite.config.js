import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: 'build', // Specify the output folder name here
  },
})
