<script setup lang="ts">
import {onUnmounted, provide, ref} from 'vue'
// import { ConfigGlobal } from '@/components/ConfigGlobal'
import eventBus, { EventTypeName } from '@/utils/eventBus'
// import { Layout } from './components/Layout'
// import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/modules/app';
import { themeConfigs } from '@/config/app'
const appStore = useAppStore();

eventBus.listen(EventTypeName.PAGE_START_LOAD, () => {
  isRouterLoading.value = true
})

eventBus.listen(EventTypeName.PAGE_LOADED, () => {
  isRouterLoading.value = false
})

const isRouterLoading = ref(true)

const setSystemTheme = (color: string) => {
  const target = themeConfigs.find(item => item.label === color)
  if (target) {
    // 更改饿了么组件库主题-通过改样式表中origin对应颜色)
    appStore.setTheme(target.value);
    // 更改:root --color-primary等变量的颜色
    appStore.setCssVarTheme();
  }
};

setSystemTheme('linear-gradient(0, #8C83F7 0%, #F589CF 100%)')

provide('echartTheme', appStore.getTheme)

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
