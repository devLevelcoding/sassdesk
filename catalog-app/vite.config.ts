import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Output straight into the sassdesk.com docroot's own /project-app/ folder
    // so the deployed page can sit at /project.html (see build-and-deploy.md)
    // instead of nesting under this app's own dist/.
    outDir: '../project-app',
    emptyOutDir: true,
  },
})
