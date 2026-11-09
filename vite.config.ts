/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',                 // böngésző-szimuláció (DOM) Node-ban
    globals: true,                        // describe/it/expect import nélkül
    setupFiles: './src/test/setup.ts',    // minden teszt előtt lefut
  },
})