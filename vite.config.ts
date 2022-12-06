import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    include: [
      'ajv-dist',
      'immutable-json-patch',
      'lodash-es',
      '@fortawesome/free-regular-svg-icons',
      'jmespath'
    ]
  }
})
