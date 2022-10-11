import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint' //浏览器 eslint提示
import AutoImport from 'unplugin-auto-import/vite' //自动导入插件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      exclude: ['./node_modules/**'],
      cache: false,
    }),
    AutoImport({
      dts: './auto-imports.d.ts',
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

      // global imports to register
      imports: [
        // 插件预设支持导入的api
        'vue',
        'vue-router',
        'pinia',
        // 自定义导入的api
      ],
    }),
    //引入组件
    Components({
      resolvers: [NaiveUiResolver()],
      dts: './components.d.ts',
    }),
  ],
  server: {
    port: 5010,
    host: '0.0.0.0',
    proxy: {
      '^/api/v1': {
        target: 'https://sqgn-h5.mvpcs.cn',
        ws: true,
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1'),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/variables.scss';`,
      },
    },
  },
})
