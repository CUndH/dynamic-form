import { resolve } from 'path'
import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import EslintPlugin from 'vite-plugin-eslint'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import PurgeIcons from 'vite-plugin-purge-icons'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root)
  } else {
    env = loadEnv(mode, root)
  }
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        dts: './src/types/auto-imports.d.ts'
      }),
      Components({
        dts: './src/types/components.d.ts'
      }),
      WindiCSS(),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
      }),
      createSvgIconsPlugin({
        iconDirs: [pathResolve('src/assets/svgs')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: true
      }),
      PurgeIcons(),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        supportTs: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer'

          setupProdMockServer()
          `
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE
          }
        }
      })
    ],
    // CSS 预处理配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$vNamespace: heilanfe;  $elNamespace: el;`,
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
      alias: [
        {
          find: 'path',
          replacement: 'path-browserify'
        },
        {
          find: 'util',
          replacement: 'rollup-plugin-node-polyfills/polyfills/util'
        },
        {
          find: 'sys',
          replacement: 'util'
        },
        {
          find: 'events',
          replacement: 'rollup-plugin-node-polyfills/polyfills/events'
        },
        {
          find: 'stream',
          replacement: 'rollup-plugin-node-polyfills/polyfills/stream'
        },
        {
          find: 'global',
          replacement: 'rollup-plugin-node-polyfills/polyfills/global'
        },
        {
          find: 'process',
          replacement: 'rollup-plugin-node-polyfills/polyfills/process-es6'
        },
        {
          find: 'buffer',
          replacement: 'rollup-plugin-node-polyfills/polyfills/buffer-es6'
        },
        {
          find: 'timers',
          replacement: 'rollup-plugin-node-polyfills/polyfills/timers'
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    build: {
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      // brotliSize: false,
      rollupOptions: {
        // @ts-ignore
        plugins: [nodePolyfills()]
      },
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true'
        }
      },
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    server: {
      port: 8081,
      hmr: {
        overlay: false
      },
      host: '0.0.0.0'
      // 反向代理配置，下述是默认的接口路径和静态文件路径的代理配置
      // proxy: {
      // [env.VITE_API_BASEPATH]: {
      //   target: "http://10.1.1.41:9999",
      //   changeOrigin: true,
      //   rewrite: (path) =>
      //     path.replace(new RegExp(`^${env.VITE_API_BASEPATH}`), ""),
      // },
      // [env.VITE_STATIC_BASEPATH]: {
      //   target: "http://10.1.1.41:9999",
      //   changeOrigin: true,
      //   rewrite: (path) =>
      //     path.replace(new RegExp(`^${env.VITE_STATIC_BASEPATH}`), ""),
      // },
      // },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        },
        plugins: [
          // @ts-ignore
          GlobalsPolyfills({
            buffer: true,
            process: true
          })
        ]
      },
      include: [
        'vue',
        'vue-router',
        'vue-types',
        'element-plus/es/locale/lang/zh-cn',
        'element-plus/es/locale/lang/en',
        '@iconify/iconify',
        '@vueuse/core',
        'axios',
        'qs'
      ]
    },
    define: {
      'process.env': {},
      'process.platform': {}
    }
  }
})
