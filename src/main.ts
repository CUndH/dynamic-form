import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import { setupRouter } from './router'
import './router/routerHooks'
import { setupStore } from './store'
// animate.css
import '@/plugins/animate.css'
// 引入windi css
// 自定义指令
import { setupCommonDirectives } from './directives'
// 全局组件
import { setupGlobCom } from '@/components'
// 注册Vue-Echarts
import { setupPluginVueEchart } from '@/plugins/echarts'
import 'element-plus/dist/index.css'
// 初始样式
import '@/styles/index.scss'
// 渐变主题
import '@/styles/gradient.scss'
// windiCss
import '@/plugins/windi.css'
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('json', json)

const setupAll = async () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  setupCommonDirectives(app)

  app.use(ElementPlus)

  app.use(hljsVuePlugin)

  setupGlobCom(app)

  setupPluginVueEchart(app)

  const win: any = window

  if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
      win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
  }

  app.mount('#app')
}

setupAll()
