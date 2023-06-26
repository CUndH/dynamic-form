/**
 * 主题色配置 store
 */
import { defineStore } from 'pinia'
import { store } from '@/store'
import elementPlusPackage from 'element-plus/package.json'
import { useCache } from '@/utils/useCache'
import { appModules } from '@/config/app'
import { setCssVar, humpToUnderline } from '@/utils'
import themeMethods from '@/utils/theme'
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls } = useDesign()

const { wsCache } = useCache('localStorage')

interface AppState extends ThemeWrap {
  chalk: string
  originTheme: {
    [key: string]: string
  }
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    ...appModules,
    chalk: wsCache.get('chalk') || '',
    originTheme: wsCache.get('originTheme') || {
      primary: '#409EFF',
      success: '#67C23A',
      warning: '#F3BB4B',
      danger: '#F56C6C',
      info: '#AFB0B2'
    }
  }),
  getters: {
    getTheme(): ThemeTypes {
      return this.theme
    }
  },
  actions: {
    //  当前主题存储于缓存中
    setTheme(theme: ThemeTypes) {
      this.theme = Object.assign(this.theme, theme)
      wsCache.set('theme', this.theme)
      this.initTheme()
    },
    // 设置UI组件库之外的sass变量
    setCssVarTheme() {
      for (const key in this.theme) {
        setCssVar(`--${humpToUnderline(key)}`, this.theme[key])
      }
    },
    // 组件库颜色初始化
    async initTheme() {
      await this.setElementTheme(this.theme.colorPrimary, 'primary')
      await this.setElementTheme(this.theme.colorSuccess, 'success')
      await this.setElementTheme(this.theme.colorDanger, 'danger')
      // 更改有特殊需求的主题配置(图片、渐变色主题等)
      const className = getPrefixCls(this.theme.className)
      document.getElementsByTagName('html')[0].setAttribute('class', className)
    },
    // 配置全局element-plus主题色
    async setElementTheme(val: string, key: string) {
      const oldVal = this.chalk ? val : this.originTheme[key]
      if (typeof val !== 'string') return
      const themeCluster = themeMethods.getThemeCluster(val.replace('#', ''))
      const originalCluster = themeMethods.getThemeCluster(oldVal.replace('#', ''))
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = themeMethods.getThemeCluster(
            this.originTheme[key].replace('#', '')
          )
          const newStyle = themeMethods.updateStyle(this[variable], originalCluster, themeCluster)
          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
          this[variable] = newStyle
          wsCache.set(variable, newStyle)
        }
      }
      // 根据依赖版本号获取样式表
      if (!this.chalk) {
        const url = `https://unpkg.com/element-plus@${elementPlusPackage.version}/theme-chalk/index.css`
        await this.getCSSString(url, 'chalk')
      }

      const chalkHandler = getHandler('chalk', 'chalk-style')

      chalkHandler()

      const styles = [].slice.call(document.querySelectorAll('style')).filter((style) => {
        const text = (style as any).innerText
        return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
      })
      styles.forEach((style) => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        ;(style as any).innerText = themeMethods.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        )
      })
      this.originTheme[key] = val
      wsCache.set('originTheme', this.originTheme)
    },
    getCSSString(url, variable) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // 储存样式表
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve(1)
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    }
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
