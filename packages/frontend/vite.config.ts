import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@carcare/common': resolve(__dirname, '..', 'common', 'src')
    }
  },
  optimizeDeps: {
    exclude: ['@carcare/common']
  },
  server: {
    port: 8080,
    open: true
  }
})
