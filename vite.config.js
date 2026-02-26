import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/admin-gastos-vue/', //  nombre exacto del repo
  plugins: [vue()],
})

//import { defineConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
//export default defineConfig({
 // plugins: [vue()],
//})
