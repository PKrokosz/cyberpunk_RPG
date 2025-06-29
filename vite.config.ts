import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react({ tsconfig: './tsconfig.json' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '/cyberpunk_RPG/',
  css: { postcss: './postcss.config.js' },
  server: {
    port: 5173
  }
})
