import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from '../dist/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
  ],
})
