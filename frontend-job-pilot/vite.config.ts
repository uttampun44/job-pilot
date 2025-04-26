import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@lib': path.resolve(__dirname, './src/lib/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
    }
  }
})
