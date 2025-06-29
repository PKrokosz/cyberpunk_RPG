import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ tsconfig: './tsconfig.json' })],
  base: '/cyberpunk_RPG/',
  css: { postcss: './postcss.config.js' },
  server: {
    port: 5173
  }
})
