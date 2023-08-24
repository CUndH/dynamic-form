<script setup lang="ts">
import { onUnmounted, provide, ref } from 'vue'
// import { ConfigGlobal } from '@/components/ConfigGlobal'
import eventBus, { EventTypeName } from '@/utils/eventBus'
// import { Layout } from './components/Layout'
// import { useRouter } from 'vue-router'
import { themeConfigs } from '@/config/app'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()

eventBus.listen(EventTypeName.PAGE_START_LOAD, () => {
  isRouterLoading.value = true
})

eventBus.listen(EventTypeName.PAGE_LOADED, () => {
  isRouterLoading.value = false
})

const isRouterLoading = ref(true)

const setSystemTheme = (color: string) => {
  const target = themeConfigs.find((item) => item.label === color)
  if (target) {
    // 更改饿了么组件库主题-通过改样式表中origin对应颜色)
    appStore.setTheme(target.value)
    // 更改:root --color-primary等变量的颜色
    appStore.setCssVarTheme()
  }
}

const loopSystemTheme = () => {
  const currentThemeIndex = themeConfigs.findIndex(
    (item) => item.label === appStore.getTheme.mainBgColor
  )
  if (currentThemeIndex < 0 || currentThemeIndex >= themeConfigs.length - 1) {
    setSystemTheme(themeConfigs[0].label)
  } else {
    setSystemTheme(themeConfigs[currentThemeIndex + 1].label)
  }
}

setSystemTheme(appStore.$state.defaultTheme)
provide('echartTheme', appStore.getTheme)
provide('setSystemTheme', setSystemTheme)
provide('loopSystemTheme', loopSystemTheme)

// const { currentRoute } = useRouter()

onUnmounted(() => {
  Object.keys(EventTypeName).forEach((key) => {
    eventBus.cancel(EventTypeName[key])
  })
})
</script>

<template>
  <ConfigGlobal>
    <router-view />
  </ConfigGlobal>
</template>
