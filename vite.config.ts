import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset paths so the build works at both
  // username.github.io/ and username.github.io/<repo>/
  base: './',
  server: {
    port: 7890,
  },
})
