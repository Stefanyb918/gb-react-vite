import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://stefanyb918.github.io/gb-react-vite/',
  plugins: [react()]
})
