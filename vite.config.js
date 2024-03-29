import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  port: 3000,
  open: true,
  assetsInclude: ["**/*.jpg", "**/*.JPG"]
})
