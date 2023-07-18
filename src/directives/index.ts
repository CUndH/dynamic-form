import type { App } from 'vue'
import overflow from '@/directives/common/overflow'

const commonDirectives: any = {
  // Custom directives
  overflow
}

export const setupCommonDirectives = (app: App<Element>) => {
  Object.keys(commonDirectives).forEach((key) => {
    // 注册自定义指令
    app.directive(key, commonDirectives[key])
  })
}
